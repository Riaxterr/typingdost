/**
 * TypingDost Self-Verifying Deterministic Certificate ID Engine (TD-[HASH])
 * Zero-backend verifiable token format: TD-<8-HEX-SIG><BASE64URL-PAYLOAD>
 */
(function (global) {
  'use strict';

  var SECRET_SALT = 'TD_CERT_2026_VERIFIED_SALT_R9X';
  var STORAGE_KEY = 'typingDostCertificates';

  function fnv1aMixed(str, seedOffset) {
    var h = (0x811c9dc5 ^ (seedOffset || 0)) >>> 0;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 0x01000193) >>> 0;
    }
    h ^= h >>> 16;
    h = Math.imul(h, 0x85ebca6b) >>> 0;
    h ^= h >>> 13;
    h = Math.imul(h, 0xc2b2ae35) >>> 0;
    h ^= h >>> 16;
    return (h >>> 0).toString(16).toUpperCase().padStart(8, '0');
  }

  function toBase64Url(str) {
    var bytes = new TextEncoder().encode(str);
    var bin = '';
    for (var i = 0; i < bytes.length; i++) {
      bin += String.fromCharCode(bytes[i]);
    }
    return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  function fromBase64Url(b64u) {
    var b64 = b64u.replace(/-/g, '+').replace(/_/g, '/');
    while (b64.length % 4) b64 += '=';
    var bin = atob(b64);
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) {
      bytes[i] = bin.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
  }

  function sanitizeRecord(rec) {
    return {
      n: String(rec.name || rec.n || 'Candidate').trim().slice(0, 60),
      w: Math.max(0, Math.round(Number(rec.wpm !== undefined ? rec.wpm : rec.w) || 0)),
      a: Math.min(100, Math.max(0, Math.round(Number(rec.accuracy !== undefined ? rec.accuracy : rec.a) || 100))),
      m: String(rec.mode || rec.m || '1 Minute Test').trim().slice(0, 60),
      d: String(rec.date || rec.d || new Date().toISOString().slice(0, 10)).trim().slice(0, 24),
      l: String(rec.lang || rec.l || 'english').trim().toLowerCase().slice(0, 24),
      r: Math.max(0, Math.round(Number(rec.rawWpm !== undefined ? rec.rawWpm : (rec.r !== undefined ? rec.r : rec.wpm)) || 0)),
      k: String(rec.keyAcc !== undefined ? rec.keyAcc : (rec.k || '100%')).trim().slice(0, 12)
    };
  }

  function saveLocalRecord(id, record) {
    try {
      if (typeof localStorage === 'undefined') return;
      var map = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      map[id] = record;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    } catch (e) {}
  }

  function readLocalRecord(id) {
    try {
      if (typeof localStorage === 'undefined') return null;
      var map = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return map[id] || null;
    } catch (e) {
      return null;
    }
  }

  function listLocalCertificates() {
    try {
      if (typeof localStorage === 'undefined') return [];
      var map = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return Object.keys(map).map(function (id) {
        return { id: id, record: map[id] };
      });
    } catch (e) {
      return [];
    }
  }

  function createCertificateId(rec) {
    var payloadObj = sanitizeRecord(rec || {});
    var payloadStr = JSON.stringify(payloadObj);
    var b64 = toBase64Url(payloadStr);
    var sig = fnv1aMixed(b64 + '|' + SECRET_SALT, 0x51a7);
    var fullId = 'TD-' + sig + '-' + b64;
    saveLocalRecord(fullId, payloadObj);
    saveLocalRecord('TD-' + sig, payloadObj);
    return fullId;
  }

  function verifyCertificateId(rawId) {
    if (!rawId || typeof rawId !== 'string') {
      return { valid: false, reason: 'Please provide a Certificate ID starting with TD-.' };
    }
    var trimmed = rawId.trim();
    var m = /^TD-([A-Fa-f0-9]{8})-([A-Za-z0-9\-_]+)$/.exec(trimmed);
    if (!m) {
      var localOnly = readLocalRecord(trimmed);
      if (localOnly) {
        return { valid: true, source: 'local', id: trimmed, record: localOnly };
      }
      return { valid: false, reason: 'Malformed Certificate ID format. Expected format: TD-[HASH].' };
    }
    var sig = m[1].toUpperCase();
    var b64 = m[2];
    var expectedSig = fnv1aMixed(b64 + '|' + SECRET_SALT, 0x51a7);
    if (sig !== expectedSig) {
      return { valid: false, reason: 'Signature verification failed. This certificate ID appears modified or invalid.' };
    }
    try {
      var decoded = JSON.parse(fromBase64Url(b64));
      if (!decoded || typeof decoded.n !== 'string' || typeof decoded.w !== 'number') {
        return { valid: false, reason: 'Corrupted certificate payload.' };
      }
      return {
        valid: true,
        source: 'cryptographic',
        id: 'TD-' + sig + '-' + b64,
        record: sanitizeRecord(decoded)
      };
    } catch (err) {
      return { valid: false, reason: 'Unable to decode certificate payload.' };
    }
  }

  function getRankLabel(wpm) {
    if (wpm >= 90) return 'LEGENDARY HACKER';
    if (wpm >= 70) return 'MASTER TYPIST';
    if (wpm >= 50) return 'PRO TYPIST';
    if (wpm >= 35) return 'EXAM READY';
    if (wpm >= 20) return 'INTERMEDIATE';
    return 'DEVELOPING TYPIST';
  }

  function buildVerifyUrl(id) {
    return 'https://typingdost.com/verify/?id=' + encodeURIComponent(id);
  }

  var api = {
    createCertificateId: createCertificateId,
    verifyCertificateId: verifyCertificateId,
    listLocalCertificates: listLocalCertificates,
    getRankLabel: getRankLabel,
    buildVerifyUrl: buildVerifyUrl
  };

  if (typeof global !== 'undefined') {
    global.TypingDostCert = api;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
})(typeof window !== 'undefined' ? window : globalThis);
