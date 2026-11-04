/**
 * TypingDost Multi-Language Font & Keyboard Manager (fontSystem.js)
 * Full Shift-aware keymaps, Google Fonts & Kruti Dev 010 support for all 14 languages.
 * Visual on-screen keyboard ALWAYS stays in English QWERTY layout.
 */

// Immediate early URL-based Language Detection (Synchronous before any render)
(function() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined' && window.location) {
        const pathname = (window.location.pathname || '').toLowerCase();
        let detected = null;
        if (pathname.includes('tamil-typing-test')) detected = 'tamil';
        else if (pathname.includes('hindi-typing-test')) detected = 'hindi';
        else if (pathname.includes('marathi-typing-test')) detected = 'marathi';
        else if (pathname.includes('bengali-typing-test')) detected = 'bengali';
        else if (pathname.includes('telugu-typing-test')) detected = 'telugu';
        else if (pathname.includes('gujarati-typing-test')) detected = 'gujarati';
        else if (pathname.includes('kannada-typing-test')) detected = 'kannada';
        else if (pathname.includes('malayalam-typing-test')) detected = 'malayalam';
        else if (pathname.includes('odia-typing-test')) detected = 'odia';
        else if (pathname.includes('punjabi-typing-test')) detected = 'punjabi';
        else if (pathname.includes('assamese-typing-test')) detected = 'assamese';
        else if (pathname.includes('urdu-typing-test')) detected = 'urdu';
        else if (pathname.includes('hinglish-typing-test')) detected = 'hinglish';
        else if (pathname.includes('english-typing-test')) detected = 'english';
        
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang) detected = urlLang.toLowerCase();

        if (detected) {
            try { localStorage.setItem('typingDostLang', detected); } catch(e){}
        }
    }
})();

// 1. Font Definitions per language
const LANG_FONTS = {
    english: [
        { id: 'f-roboto', name: 'Roboto Mono', family: "'Roboto Mono', monospace", icon: '🔤', badge: 'Default' },
        { id: 'f-fira', name: 'Fira Code', family: "'Fira Code', monospace", icon: '💻', badge: 'Code' },
        { id: 'f-orbitron', name: 'Orbitron', family: "'Orbitron', sans-serif", icon: '🚀', badge: 'Cyber' },
        { id: 'f-inter', name: 'Inter', family: "'Inter', sans-serif", icon: '✨', badge: 'Clean' }
    ],
    hinglish: [
        { id: 'f-outfit', name: 'Outfit', family: "'Outfit', sans-serif", icon: '✨', badge: 'Modern' },
        { id: 'f-roboto', name: 'Roboto Mono', family: "'Roboto Mono', monospace", icon: '🔤', badge: 'Default' },
        { id: 'f-orbitron', name: 'Orbitron', family: "'Orbitron', sans-serif", icon: '🚀', badge: 'Cyber' }
    ],
    hindi: [
        { id: 'f-noto-hi', name: 'Noto Sans Devanagari (Mangal)', family: "'Noto Sans Devanagari', sans-serif", icon: '✨', badge: 'Standard' },
        { id: 'f-mukta-hi', name: 'Mukta', family: "'Mukta', sans-serif", icon: '📝', badge: 'Fast' },
        { id: 'f-poppins-hi', name: 'Poppins Devanagari', family: "'Poppins', sans-serif", icon: '🔤', badge: 'Clean' },
        { id: 'f-rozha-hi', name: 'Rozha One', family: "'Rozha One', serif", icon: '🏛️', badge: 'Classic' }
    ],
    bengali: [
        { id: 'f-siliguri-bn', name: 'Hind Siliguri', family: "'Hind Siliguri', sans-serif", icon: '📝', badge: 'Popular' },
        { id: 'f-noto-bn', name: 'Noto Sans Bengali', family: "'Noto Sans Bengali', sans-serif", icon: '✨', badge: 'Standard' },
        { id: 'f-galada-bn', name: 'Galada', family: "'Galada', cursive", icon: '🎨', badge: 'Stylized' }
    ],
    marathi: [
        { id: 'f-mukta-mr', name: 'Mukta Marathi', family: "'Mukta', sans-serif", icon: '✨', badge: 'Fast' },
        { id: 'f-noto-mr', name: 'Noto Sans Devanagari', family: "'Noto Sans Devanagari', sans-serif", icon: '🏛️', badge: 'Standard' },
        { id: 'f-kalam-mr', name: 'Kalam', family: "'Kalam', cursive", icon: '✍️', badge: 'Script' }
    ],
    tamil: [
        { id: 'f-madurai-ta', name: 'Hind Madurai', family: "'Hind Madurai', sans-serif", icon: '📝', badge: 'Clear' },
        { id: 'f-noto-ta', name: 'Noto Sans Tamil', family: "'Noto Sans Tamil', sans-serif", icon: '✨', badge: 'Standard' },
        { id: 'f-catamaran-ta', name: 'Catamaran', family: "'Catamaran', sans-serif", icon: '🔤', badge: 'Modern' }
    ],
    telugu: [
        { id: 'f-guntur-te', name: 'Hind Guntur', family: "'Hind Guntur', sans-serif", icon: '📝', badge: 'Fast' },
        { id: 'f-noto-te', name: 'Noto Sans Telugu', family: "'Noto Sans Telugu', sans-serif", icon: '✨', badge: 'Standard' },
        { id: 'f-ramabhadra-te', name: 'Ramabhadra', family: "'Ramabhadra', sans-serif", icon: '🏛️', badge: 'Bold' }
    ],
    gujarati: [
        { id: 'f-vadodara-gu', name: 'Hind Vadodara', family: "'Hind Vadodara', sans-serif", icon: '📝', badge: 'Clear' },
        { id: 'f-noto-gu', name: 'Noto Sans Gujarati', family: "'Noto Sans Gujarati', sans-serif", icon: '✨', badge: 'Standard' },
        { id: 'f-rasa-gu', name: 'Rasa', family: "'Rasa', serif", icon: '🏛️', badge: 'Classic' }
    ],
    kannada: [
        { id: 'f-mysuru-kn', name: 'Hind Mysuru', family: "'Hind Mysuru', sans-serif", icon: '📝', badge: 'Fast' },
        { id: 'f-noto-kn', name: 'Noto Sans Kannada', family: "'Noto Sans Kannada', sans-serif", icon: '✨', badge: 'Standard' }
    ],
    malayalam: [
        { id: 'f-manjari-ml', name: 'Manjari', family: "'Manjari', sans-serif", icon: '📝', badge: 'Popular' },
        { id: 'f-noto-ml', name: 'Noto Sans Malayalam', family: "'Noto Sans Malayalam', sans-serif", icon: '✨', badge: 'Standard' },
        { id: 'f-gayathri-ml', name: 'Gayathri', family: "'Gayathri', sans-serif", icon: '🔤', badge: 'Clean' }
    ],
    odia: [
        { id: 'f-noto-or', name: 'Noto Sans Oriya', family: "'Noto Sans Oriya', sans-serif", icon: '✨', badge: 'Standard' },
        { id: 'f-anek-or', name: 'Anek Odia', family: "'Anek Odia', sans-serif", icon: '🏛️', badge: 'Modern' }
    ],
    punjabi: [
        { id: 'f-jalandhar-pa', name: 'Hind Jalandhar', family: "'Hind Jalandhar', sans-serif", icon: '📝', badge: 'Clear' },
        { id: 'f-noto-pa', name: 'Noto Sans Gurmukhi', family: "'Noto Sans Gurmukhi', sans-serif", icon: '✨', badge: 'Standard' }
    ],
    urdu: [
        { id: 'f-noto-ur', name: 'Noto Nastaliq Urdu', family: "'Noto Nastaliq Urdu', 'Gulzar', serif", icon: '✨', badge: 'Nastaliq' },
        { id: 'f-gulzar-ur', name: 'Gulzar', family: "'Gulzar', serif", icon: '🎨', badge: 'Calligraphic' },
        { id: 'f-amiri-ur', name: 'Amiri', family: "'Amiri', serif", icon: '🏛️', badge: 'Classic Naskh' }
    ],
    assamese: [
        { id: 'f-siliguri-as', name: 'Hind Siliguri', family: "'Hind Siliguri', sans-serif", icon: '📝', badge: 'Fast' },
        { id: 'f-noto-as', name: 'Noto Sans Bengali (Assamese)', family: "'Noto Sans Bengali', sans-serif", icon: '✨', badge: 'Standard' }
    ]
};

// 2. Keyboard Layout Metadata
const LAYOUT_META = {
    'tamil-99': { icon: '⌨️', name: 'Tamil 99 (தமிழ் 99)', badge: 'Govt Std' },
    'remington-gail': { icon: '⌨️', name: 'Remington Gail (Mangal)', badge: 'SSC/Govt' },
    'kruti-dev': { icon: '📝', name: 'Kruti Dev 010', badge: 'Exam' },
    'inscript': { icon: '🏛️', name: 'Inscript (Govt Standard)', badge: 'Standard' },
    'phonetic': { icon: '🔊', name: 'Phonetic (Easy QWERTY)', badge: 'Fast' },
    'urdu-phonetic': { icon: '🔊', name: 'Urdu Phonetic', badge: 'Fast' },
    'urdu-standard': { icon: '⌨️', name: 'Urdu Standard (CRULP)', badge: 'Standard' },
    'direct': { icon: '🌐', name: 'Native OS Keyboard', badge: 'Direct' }
};

// 3. Complete Language-Scoped Keyboards with FULL Normal & Shift Mappings
const LANGUAGE_KEYBOARDS = {
    hindi: {
        'remington-gail': {
            normal: {
                Backquote: '`', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0', Minus: '-', Equal: 'ृ',
                KeyQ: 'ु', KeyW: 'ू', KeyE: 'म', KeyR: 'त', KeyT: 'ज', KeyY: 'ल', KeyU: 'न', KeyI: 'प', KeyO: 'व', KeyP: 'च', BracketLeft: 'ख', BracketRight: ',', Backslash: '.',
                KeyA: 'ं', KeyS: 'े', KeyD: 'क', KeyF: 'ि', KeyG: 'ह', KeyH: 'ी', KeyJ: 'र', KeyK: 'ा', KeyL: 'स', Semicolon: 'य', Quote: 'श',
                KeyZ: '्र', KeyX: 'ग', KeyC: 'ब', KeyV: 'अ', KeyB: 'इ', KeyN: 'द', KeyM: 'उ', Comma: 'ए', Period: '।', Slash: 'ध', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: 'ऋ',
                KeyQ: 'फ', KeyW: 'ॅ', KeyE: 'म्', KeyR: 'त्', KeyT: 'ज्', KeyY: 'ल्', KeyU: 'न्', KeyI: 'प्', KeyO: 'व्', KeyP: 'च्', BracketLeft: 'ख्', BracketRight: ']', Backslash: '?',
                KeyA: 'ँ', KeyS: 'ै', KeyD: 'क्', KeyF: 'थ', KeyG: 'भ', KeyH: 'भ्', KeyJ: 'श्र', KeyK: 'ज्ञ', KeyL: 'स्', Semicolon: 'श्', Quote: 'ष',
                KeyZ: 'र्', KeyX: 'ग्', KeyC: 'ब्', KeyV: 'ट', KeyB: 'ठ', KeyN: 'छ', KeyM: 'ड', Comma: 'ढ', Period: 'झ', Slash: 'घ', Space: ' '
            }
        },
        'kruti-dev': {
            normal: {
                Backquote: '`', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0', Minus: '-', Equal: 'ृ',
                KeyQ: 'ु', KeyW: 'ू', KeyE: 'म', KeyR: 'त', KeyT: 'ज', KeyY: 'ल', KeyU: 'न', KeyI: 'प', KeyO: 'व', KeyP: 'च', BracketLeft: 'ख', BracketRight: ',', Backslash: '.',
                KeyA: 'ं', KeyS: 'े', KeyD: 'क', KeyF: 'ि', KeyG: 'ह', KeyH: 'ी', KeyJ: 'र', KeyK: 'ा', KeyL: 'स', Semicolon: 'य', Quote: 'श',
                KeyZ: '्र', KeyX: 'ग', KeyC: 'ब', KeyV: 'अ', KeyB: 'इ', KeyN: 'द', KeyM: 'उ', Comma: 'ए', Period: '।', Slash: 'ध', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: 'ऋ',
                KeyQ: 'फ', KeyW: 'ॅ', KeyE: 'म्', KeyR: 'त्', KeyT: 'ज्', KeyY: 'ल्', KeyU: 'न्', KeyI: 'प्', KeyO: 'व्', KeyP: 'च्', BracketLeft: 'ख्', BracketRight: ']', Backslash: '?',
                KeyA: 'ँ', KeyS: 'ै', KeyD: 'क्', KeyF: 'थ', KeyG: 'भ', KeyH: 'भ्', KeyJ: 'श्र', KeyK: 'ज्ञ', KeyL: 'स्', Semicolon: 'श्', Quote: 'ष',
                KeyZ: 'र्', KeyX: 'ग्', KeyC: 'ब्', KeyV: 'ट', KeyB: 'ठ', KeyN: 'छ', KeyM: 'ड', Comma: 'ढ', Period: 'झ', Slash: 'घ', Space: ' '
            }
        },
        'inscript': {
            normal: {
                Backquote: '`', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0', Minus: '-', Equal: 'ृ',
                KeyQ: 'ौ', KeyW: 'ै', KeyE: 'ा', KeyR: 'ी', KeyT: 'ू', KeyY: 'ब', KeyU: 'ह', KeyI: 'ग', KeyO: 'द', KeyP: 'ज', BracketLeft: 'ड', BracketRight: '़', Backslash: 'ॉ',
                KeyA: 'ो', KeyS: 'े', KeyD: '्', KeyF: 'ि', KeyG: 'ु', KeyH: 'प', KeyJ: 'र', KeyK: 'क', KeyL: 'त', Semicolon: 'च', Quote: 'ट',
                KeyZ: 'ॆ', KeyX: 'ॊ', KeyC: 'म', KeyV: 'न', KeyB: 'व', KeyN: 'ल', KeyM: 'स', Comma: ',', Period: '.', Slash: 'य', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: 'ः', Equal: 'ऋ',
                KeyQ: 'औ', KeyW: 'ऐ', KeyE: 'आ', KeyR: 'ई', KeyT: 'ऊ', KeyY: 'भ', KeyU: 'ङ', KeyI: 'घ', KeyO: 'ध', KeyP: 'झ', BracketLeft: 'ढ', BracketRight: 'ञ', Backslash: 'ऑ',
                KeyA: 'ओ', KeyS: 'ए', KeyD: 'अ', KeyF: 'इ', KeyG: 'उ', KeyH: 'फ', KeyJ: 'ऱ', KeyK: 'ख', KeyL: 'थ', Semicolon: 'छ', Quote: 'ठ',
                KeyZ: 'ऎ', KeyX: 'ऒ', KeyC: 'ण', KeyV: 'ऩ', KeyB: 'ऴ', KeyN: 'ळ', KeyM: 'श', Comma: 'ष', Period: '।', Slash: 'य़', Space: ' '
            }
        },
        'phonetic': {
            normal: {
                Backquote: '`', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0', Minus: '-', Equal: '=',
                KeyQ: 'ौ', KeyW: 'ै', KeyE: 'े', KeyR: 'र', KeyT: 'त', KeyY: 'य', KeyU: 'ु', KeyI: 'ि', KeyO: 'ो', KeyP: 'प', BracketLeft: 'ख', BracketRight: 'घ', Backslash: '\\',
                KeyA: 'ा', KeyS: 'स', KeyD: 'द', KeyF: 'फ', KeyG: 'ग', KeyH: 'ह', KeyJ: 'ज', KeyK: 'क', KeyL: 'ल', Semicolon: 'च', Quote: 'श',
                KeyZ: 'झ', KeyX: '्', KeyC: 'च', KeyV: 'व', KeyB: 'ब', KeyN: 'न', KeyM: 'म', Comma: ',', Period: '।', Slash: 'ध', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: '+',
                KeyQ: 'औ', KeyW: 'ऐ', KeyE: 'ए', KeyR: 'ऋ', KeyT: 'ट', KeyY: 'ञ', KeyU: 'ऊ', KeyI: 'ई', KeyO: 'ओ', KeyP: 'फ', BracketLeft: 'ख्', BracketRight: 'घ्', Backslash: '|',
                KeyA: 'आ', KeyS: 'ष', KeyD: 'ड', KeyF: 'फ़', KeyG: 'घ', KeyH: 'ः', KeyJ: 'झ', KeyK: 'ख', KeyL: 'ळ', Semicolon: 'छ', Quote: 'ष',
                KeyZ: 'ज्ञ', KeyX: 'त्र', KeyC: 'छ', KeyV: 'भ', KeyB: 'भ', KeyN: 'ण', KeyM: 'ं', Comma: '<', Period: '?', Slash: 'ढ', Space: ' '
            }
        }
    },
    marathi: {
        'remington-gail': {
            normal: {
                Backquote: '`', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0', Minus: '-', Equal: 'ृ',
                KeyQ: 'ु', KeyW: 'ू', KeyE: 'म', KeyR: 'त', KeyT: 'ज', KeyY: 'ल', KeyU: 'न', KeyI: 'प', KeyO: 'व', KeyP: 'च', BracketLeft: 'ख', BracketRight: ',', Backslash: '.',
                KeyA: 'ं', KeyS: 'े', KeyD: 'क', KeyF: 'ि', KeyG: 'ह', KeyH: 'ी', KeyJ: 'र', KeyK: 'ा', KeyL: 'स', Semicolon: 'य', Quote: 'श',
                KeyZ: '्र', KeyX: 'ग', KeyC: 'ब', KeyV: 'अ', KeyB: 'इ', KeyN: 'द', KeyM: 'उ', Comma: 'ए', Period: '।', Slash: 'ध', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: 'ऋ',
                KeyQ: 'फ', KeyW: 'ॅ', KeyE: 'म्', KeyR: 'त्', KeyT: 'ज्', KeyY: 'ल्', KeyU: 'न्', KeyI: 'प्', KeyO: 'व्', KeyP: 'च्', BracketLeft: 'ख्', BracketRight: ']', Backslash: '?',
                KeyA: 'ँ', KeyS: 'ै', KeyD: 'क्', KeyF: 'थ', KeyG: 'भ', KeyH: 'भ्', KeyJ: 'श्र', KeyK: 'ज्ञ', KeyL: 'स्', Semicolon: 'श्', Quote: 'ष',
                KeyZ: 'र्', KeyX: 'ग्', KeyC: 'ब्', KeyV: 'ट', KeyB: 'ठ', KeyN: 'छ', KeyM: 'ड', Comma: 'ढ', Period: 'ळ', Slash: 'घ', Space: ' '
            }
        },
        'inscript': {
            normal: {
                Backquote: '`', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0', Minus: '-', Equal: 'ृ',
                KeyQ: 'ौ', KeyW: 'ै', KeyE: 'ा', KeyR: 'ी', KeyT: 'ू', KeyY: 'ब', KeyU: 'ह', KeyI: 'ग', KeyO: 'द', KeyP: 'ज', BracketLeft: 'ड', BracketRight: '़', Backslash: 'ॉ',
                KeyA: 'ो', KeyS: 'े', KeyD: '्', KeyF: 'ि', KeyG: 'ु', KeyH: 'प', KeyJ: 'र', KeyK: 'क', KeyL: 'त', Semicolon: 'च', Quote: 'ट',
                KeyZ: 'ॆ', KeyX: 'ॊ', KeyC: 'म', KeyV: 'न', KeyB: 'व', KeyN: 'ल', KeyM: 'स', Comma: ',', Period: '.', Slash: 'य', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: 'ः', Equal: 'ऋ',
                KeyQ: 'औ', KeyW: 'ऐ', KeyE: 'आ', KeyR: 'ई', KeyT: 'ऊ', KeyY: 'भ', KeyU: 'ङ', KeyI: 'घ', KeyO: 'ध', KeyP: 'झ', BracketLeft: 'ढ', BracketRight: 'ञ', Backslash: 'ऑ',
                KeyA: 'ओ', KeyS: 'ए', KeyD: 'अ', KeyF: 'इ', KeyG: 'उ', KeyH: 'फ', KeyJ: 'ऱ', KeyK: 'ख', KeyL: 'थ', Semicolon: 'छ', Quote: 'ठ',
                KeyZ: 'ऎ', KeyX: 'ऒ', KeyC: 'ण', KeyV: 'ऩ', KeyB: 'ऴ', KeyN: 'ळ', KeyM: 'श', Comma: 'ष', Period: '।', Slash: 'य़', Space: ' '
            }
        },
        'phonetic': {
            normal: {
                Backquote: '`', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0', Minus: '-', Equal: '=',
                KeyQ: 'ौ', KeyW: 'ै', KeyE: 'े', KeyR: 'र', KeyT: 'त', KeyY: 'य', KeyU: 'ु', KeyI: 'ि', KeyO: 'ो', KeyP: 'प', BracketLeft: 'ख', BracketRight: 'घ', Backslash: '\\',
                KeyA: 'ा', KeyS: 'स', KeyD: 'द', KeyF: 'फ', KeyG: 'ग', KeyH: 'ह', KeyJ: 'ज', KeyK: 'क', KeyL: 'ल', Semicolon: 'च', Quote: 'श',
                KeyZ: 'झ', KeyX: '्', KeyC: 'च', KeyV: 'व', KeyB: 'ब', KeyN: 'न', KeyM: 'म', Comma: ',', Period: '।', Slash: 'ध', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: '+',
                KeyQ: 'औ', KeyW: 'ऐ', KeyE: 'ए', KeyR: 'ऋ', KeyT: 'ट', KeyY: 'ञ', KeyU: 'ऊ', KeyI: 'ई', KeyO: 'ओ', KeyP: 'फ', BracketLeft: 'ख्', BracketRight: 'घ्', Backslash: '|',
                KeyA: 'आ', KeyS: 'ष', KeyD: 'ड', KeyF: 'फ़', KeyG: 'घ', KeyH: 'ः', KeyJ: 'झ', KeyK: 'ख', KeyL: 'ळ', Semicolon: 'छ', Quote: 'ष',
                KeyZ: 'ज्ञ', KeyX: 'त्र', KeyC: 'छ', KeyV: 'भ', KeyB: 'भ', KeyN: 'ण', KeyM: 'ं', Comma: '<', Period: '?', Slash: 'ढ', Space: ' '
            }
        }
    },
    bengali: {
        'inscript': {
            normal: {
                Backquote: '`', Digit1: '১', Digit2: '২', Digit3: '৩', Digit4: '৪', Digit5: '৫', Digit6: '৬', Digit7: '৭', Digit8: '৮', Digit9: '৯', Digit0: '০', Minus: '-', Equal: 'ৃ',
                KeyQ: 'ৌ', KeyW: 'ৈ', KeyE: 'া', KeyR: 'ী', KeyT: 'ূ', KeyY: 'ব', KeyU: 'হ', KeyI: 'গ', KeyO: 'দ', KeyP: 'জ', BracketLeft: 'ড', BracketRight: '়', Backslash: '\\',
                KeyA: 'ো', KeyS: 'ে', KeyD: '্', KeyF: 'ি', KeyG: 'ু', KeyH: 'প', KeyJ: 'র', KeyK: 'ক', KeyL: 'ত', Semicolon: 'চ', Quote: 'ট',
                KeyZ: '৆', KeyX: '৊', KeyC: 'ম', KeyV: 'ন', KeyB: 'ভ', KeyN: 'ল', KeyM: 'স', Comma: ',', Period: '.', Slash: 'য', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: 'ঃ', Equal: 'ঋ',
                KeyQ: 'ঔ', KeyW: 'ঐ', KeyE: 'আ', KeyR: 'ঈ', KeyT: 'ঊ', KeyY: 'ভ', KeyU: 'ঙ', KeyI: 'ঘ', KeyO: 'ধ', KeyP: 'ঝ', BracketLeft: 'ঢ', BracketRight: 'ঞ', Backslash: '|',
                KeyA: 'ও', KeyS: 'এ', KeyD: 'অ', KeyF: 'ই', KeyG: 'উ', KeyH: 'ফ', KeyJ: 'ঋ', KeyK: 'খ', KeyL: 'থ', Semicolon: 'ছ', Quote: 'ঠ',
                KeyZ: 'ৠ', KeyX: 'ৡ', KeyC: 'ণ', KeyV: 'ৎ', KeyB: 'ং', KeyN: 'ঃ', KeyM: 'শ', Comma: 'ষ', Period: '।', Slash: 'য়', Space: ' '
            }
        },
        'phonetic': {
            normal: {
                Backquote: '`', Digit1: '১', Digit2: '২', Digit3: '৩', Digit4: '৪', Digit5: '৫', Digit6: '৬', Digit7: '৭', Digit8: '৮', Digit9: '৯', Digit0: '০', Minus: '-', Equal: '=',
                KeyQ: 'ৌ', KeyW: 'ৈ', KeyE: 'ে', KeyR: 'র', KeyT: 'ত', KeyY: 'য', KeyU: 'ু', KeyI: 'ি', KeyO: 'ো', KeyP: 'প', BracketLeft: 'খ', BracketRight: 'ঘ', Backslash: '\\',
                KeyA: 'া', KeyS: 'স', KeyD: 'দ', KeyF: 'ফ', KeyG: 'গ', KeyH: 'হ', KeyJ: 'জ', KeyK: 'ক', KeyL: 'ল', Semicolon: 'চ', Quote: 'শ',
                KeyZ: 'ঝ', KeyX: '্', KeyC: 'চ', KeyV: 'ভ', KeyB: 'ব', KeyN: 'ন', KeyM: 'ম', Comma: ',', Period: '।', Slash: 'ধ', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: '+',
                KeyQ: 'ঔ', KeyW: 'ঐ', KeyE: 'এ', KeyR: 'ঋ', KeyT: 'ট', KeyY: 'য়', KeyU: 'ঊ', KeyI: 'ঈ', KeyO: 'ও', KeyP: 'ফ', BracketLeft: 'খ', BracketRight: 'ঘ', Backslash: '|',
                KeyA: 'আ', KeyS: 'ষ', KeyD: 'ড', KeyF: 'ফ', KeyG: 'ঘ', KeyH: 'ঃ', KeyJ: 'ঝ', KeyK: 'খ', KeyL: 'ল', Semicolon: 'ছ', Quote: 'ষ',
                KeyZ: 'জ্ঞ', KeyX: 'ত্র', KeyC: 'ছ', KeyV: 'ভ', KeyB: 'ব', KeyN: 'ণ', KeyM: 'ং', Comma: '<', Period: '?', Slash: 'ঢ', Space: ' '
            }
        }
    },
    tamil: {
        'tamil-99': {
            normal: {
                Backquote: '`', Digit1: '௧', Digit2: '௨', Digit3: '௩', Digit4: '௪', Digit5: '௫', Digit6: '௬', Digit7: '௭', Digit8: '௮', Digit9: '௯', Digit0: '௰', Minus: '-', Equal: '=',
                KeyQ: 'ௌ', KeyW: 'ை', KeyE: 'ா', KeyR: 'ீ', KeyT: 'ூ', KeyY: 'ஷ', KeyU: 'ஸ', KeyI: 'ஹ', KeyO: 'ள', KeyP: 'ழ', BracketLeft: '[', BracketRight: ']', Backslash: '\\',
                KeyA: 'ோ', KeyS: 'ே', KeyD: '்', KeyF: 'ி', KeyG: 'ு', KeyH: 'ப', KeyJ: 'ர', KeyK: 'க', KeyL: 'த', Semicolon: 'ச', Quote: 'ட',
                KeyZ: 'ெ', KeyX: 'ொ', KeyC: 'ட', KeyV: 'ண', KeyB: 'ற', KeyN: 'ன', KeyM: 'ல', Comma: ',', Period: '.', Slash: 'வ', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: '+',
                KeyQ: 'ஔ', KeyW: 'ஐ', KeyE: 'ஆ', KeyR: 'ஈ', KeyT: 'ஊ', KeyY: 'ஶ', KeyU: 'ஸ்ரீ', KeyI: 'ஃ', KeyO: 'ள', KeyP: 'ழ', BracketLeft: '{', BracketRight: '}', Backslash: '|',
                KeyA: 'ஓ', KeyS: 'ஏ', KeyD: 'அ', KeyF: 'இ', KeyG: 'உ', KeyH: 'ப', KeyJ: 'ர', KeyK: 'ங', KeyL: 'ஞ', Semicolon: 'ச', Quote: 'ட',
                KeyZ: 'எ', KeyX: 'ஒ', KeyC: 'ட', KeyV: 'ண', KeyB: 'ற', KeyN: 'ன', KeyM: 'ல', Comma: '<', Period: '>', Slash: '?', Space: ' '
            }
        },
        'tamil-99': {
            normal: {
                Backquote: 'ஃ', Digit1: '௧', Digit2: '௨', Digit3: '௩', Digit4: '௪', Digit5: '௫', Digit6: '௬', Digit7: '௭', Digit8: '௮', Digit9: '௯', Digit0: '௰', Minus: '-', Equal: '=',
                KeyQ: 'ஆ', KeyW: 'ஈ', KeyE: 'ஊ', KeyR: 'ஏ', KeyT: 'ஐ', KeyY: 'ள', KeyU: 'ற', KeyI: 'ன', KeyO: 'ட', KeyP: 'ண', BracketLeft: 'ச', BracketRight: 'ஞ', Backslash: '\\',
                KeyA: 'அ', KeyS: 'இ', KeyD: 'உ', KeyF: '்', KeyG: 'எ', KeyH: 'க', KeyJ: 'ப', KeyK: 'ம', KeyL: 'த', Semicolon: 'ந', Quote: 'ய',
                KeyZ: 'ஒ', KeyX: 'ஔ', KeyC: 'வ', KeyV: 'வ', KeyB: 'ல', KeyN: 'ர', KeyM: 'ழ', Comma: ',', Period: '.', Slash: '/', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: '+',
                KeyQ: 'ஔ', KeyW: 'ஐ', KeyE: 'ஓ', KeyR: 'ஏ', KeyT: 'ஐ', KeyY: 'ழ', KeyU: 'ற', KeyI: 'ண', KeyO: 'ட', KeyP: 'ண', BracketLeft: 'ஸ', BracketRight: 'ஷ', Backslash: '|',
                KeyA: 'ஆ', KeyS: 'ஈ', KeyD: 'ஊ', KeyF: '்', KeyG: 'ஏ', KeyH: 'ங', KeyJ: 'ப', KeyK: 'ம', KeyL: 'த', Semicolon: 'ந', Quote: 'ஜ',
                KeyZ: 'ஓ', KeyX: 'ஔ', KeyC: 'ஹ', KeyV: 'க்ஷ', KeyB: 'ஶ', KeyN: 'ர', KeyM: 'ழ', Comma: '<', Period: '>', Slash: '?', Space: ' '
            }
        },
        'tamil99': {
            normal: {
                Backquote: 'ஃ', Digit1: '௧', Digit2: '௨', Digit3: '௩', Digit4: '௪', Digit5: '௫', Digit6: '௬', Digit7: '௭', Digit8: '௮', Digit9: '௯', Digit0: '௰', Minus: '-', Equal: '=',
                KeyQ: 'ஆ', KeyW: 'ஈ', KeyE: 'ஊ', KeyR: 'ஏ', KeyT: 'ஐ', KeyY: 'ள', KeyU: 'ற', KeyI: 'ன', KeyO: 'ட', KeyP: 'ண', BracketLeft: 'ச', BracketRight: 'ஞ', Backslash: '\\',
                KeyA: 'அ', KeyS: 'இ', KeyD: 'உ', KeyF: '்', KeyG: 'எ', KeyH: 'க', KeyJ: 'ப', KeyK: 'ம', KeyL: 'த', Semicolon: 'ந', Quote: 'ய',
                KeyZ: 'ஒ', KeyX: 'ஔ', KeyC: 'வ', KeyV: 'வ', KeyB: 'ல', KeyN: 'ர', KeyM: 'ழ', Comma: ',', Period: '.', Slash: '/', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: '+',
                KeyQ: 'ஔ', KeyW: 'ஐ', KeyE: 'ஓ', KeyR: 'ஏ', KeyT: 'ஐ', KeyY: 'ழ', KeyU: 'ற', KeyI: 'ண', KeyO: 'ட', KeyP: 'ண', BracketLeft: 'ஸ', BracketRight: 'ஷ', Backslash: '|',
                KeyA: 'ஆ', KeyS: 'ஈ', KeyD: 'ஊ', KeyF: '்', KeyG: 'ஏ', KeyH: 'ங', KeyJ: 'ப', KeyK: 'ம', KeyL: 'த', Semicolon: 'ந', Quote: 'ஜ',
                KeyZ: 'ஓ', KeyX: 'ஔ', KeyC: 'ஹ', KeyV: 'க்ஷ', KeyB: 'ஶ', KeyN: 'ர', KeyM: 'ழ', Comma: '<', Period: '>', Slash: '?', Space: ' '
            }
        },
        'inscript': {
            normal: {
                Backquote: '`', Digit1: '௧', Digit2: '௨', Digit3: '௩', Digit4: '௪', Digit5: '௫', Digit6: '௬', Digit7: '௭', Digit8: '௮', Digit9: '௯', Digit0: '௰', Minus: '-', Equal: '=',
                KeyQ: 'ௌ', KeyW: 'ை', KeyE: 'ா', KeyR: 'ீ', KeyT: 'ூ', KeyY: 'ப', KeyU: 'ஹ', KeyI: 'க', KeyO: 'த', KeyP: 'ஜ', BracketLeft: 'ட', BracketRight: 'ஞ', Backslash: '\\',
                KeyA: 'ோ', KeyS: 'ே', KeyD: '்', KeyF: 'ி', KeyG: 'ு', KeyH: 'ப', KeyJ: 'ர', KeyK: 'க', KeyL: 'த', Semicolon: 'ச', Quote: 'ட',
                KeyZ: 'ெ', KeyX: 'ொ', KeyC: 'ம', KeyV: 'ந', KeyB: 'வ', KeyN: 'ல', KeyM: 'ஸ', Comma: ',', Period: '.', Slash: 'ய', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: 'ஃ', Equal: '+',
                KeyQ: 'ஔ', KeyW: 'ஐ', KeyE: 'ஆ', KeyR: 'ஈ', KeyT: 'ஊ', KeyY: 'ப', KeyU: 'ங', KeyI: 'க', KeyO: 'த', KeyP: 'ஜ', BracketLeft: 'ட', BracketRight: 'ஃ', Backslash: '|',
                KeyA: 'ஓ', KeyS: 'ஏ', KeyD: 'அ', KeyF: 'இ', KeyG: 'உ', KeyH: 'ப', KeyJ: 'ற', KeyK: 'க', KeyL: 'த', Semicolon: 'ச', Quote: 'ட',
                KeyZ: 'எ', KeyX: 'ஒ', KeyC: 'ண', KeyV: 'ன', KeyB: 'ழ', KeyN: 'ள', KeyM: 'ஷ', Comma: 'ற', Period: '।', Slash: '?', Space: ' '
            }
        },
        'phonetic': {
            normal: {
                Backquote: '`', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0', Minus: '-', Equal: '=',
                KeyQ: 'ஃ', KeyW: 'ை', KeyE: 'ெ', KeyR: 'ர', KeyT: 'த', KeyY: 'ய', KeyU: 'ு', KeyI: 'ி', KeyO: 'ொ', KeyP: 'ப', BracketLeft: '[', BracketRight: ']', Backslash: '\\',
                KeyA: 'ா', KeyS: 'ஸ', KeyD: 'ட', KeyF: '்', KeyG: 'க', KeyH: 'ஹ', KeyJ: 'ஜ', KeyK: 'க', KeyL: 'ல', Semicolon: 'ச', Quote: 'ஷ',
                KeyZ: 'ழ', KeyX: '்', KeyC: 'ச', KeyV: 'வ', KeyB: 'ப', KeyN: 'ந', KeyM: 'ம', Comma: ',', Period: '.', Slash: '/', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: '+',
                KeyQ: 'ஔ', KeyW: 'ஐ', KeyE: 'ே', KeyR: 'ற', KeyT: 'ட', KeyY: 'ஞ', KeyU: 'ூ', KeyI: 'ீ', KeyO: 'ஓ', KeyP: 'ப', BracketLeft: '{', BracketRight: '}', Backslash: '|',
                KeyA: 'ஆ', KeyS: 'ஷ', KeyD: 'ண', KeyF: 'ள', KeyG: 'ங', KeyH: 'ஃ', KeyJ: 'ஜ', KeyK: 'க', KeyL: 'ள', Semicolon: 'ச', Quote: '"',
                KeyZ: 'ழ', KeyX: '்', KeyC: 'ச', KeyV: 'வ', KeyB: 'ப', KeyN: 'ன', KeyM: 'ம', Comma: '<', Period: '>', Slash: '?', Space: ' '
            }
        }
    },
    telugu: {
        'inscript': {
            normal: {
                Backquote: '`', Digit1: '౧', Digit2: '౨', Digit3: '౩', Digit4: '౪', Digit5: '౫', Digit6: '౬', Digit7: '౭', Digit8: '౮', Digit9: '౯', Digit0: '౦', Minus: '-', Equal: 'ృ',
                KeyQ: 'ౌ', KeyW: 'ై', KeyE: 'ా', KeyR: 'ీ', KeyT: 'ూ', KeyY: 'బ', KeyU: 'హ', KeyI: 'గ', KeyO: 'ద', KeyP: 'జ', BracketLeft: 'డ', BracketRight: 'ఁ', Backslash: '\\',
                KeyA: 'ో', KeyS: 'ే', KeyD: '్', KeyF: 'ి', KeyG: 'ు', KeyH: 'ప', KeyJ: 'ర', KeyK: 'క', KeyL: 'త', Semicolon: 'చ', Quote: 'ట',
                KeyZ: 'ె', KeyX: 'ొ', KeyC: 'మ', KeyV: 'న', KeyB: 'వ', KeyN: 'ల', KeyM: 'స', Comma: ',', Period: '.', Slash: 'య', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: 'ః', Equal: 'ౠ',
                KeyQ: 'ఔ', KeyW: 'ఐ', KeyE: 'ఆ', KeyR: 'ఈ', KeyT: 'ఊ', KeyY: 'భ', KeyU: 'ఙ', KeyI: 'ఘ', KeyO: 'ధ', KeyP: 'ఝ', BracketLeft: 'ఢ', BracketRight: 'ఞ', Backslash: '|',
                KeyA: 'ఓ', KeyS: 'ఏ', KeyD: 'అ', KeyF: 'ఇ', KeyG: 'ఉ', KeyH: 'ఫ', KeyJ: 'ఱ', KeyK: 'ఖ', KeyL: 'థ', Semicolon: 'ఛ', Quote: 'ఠ',
                KeyZ: 'ఎ', KeyX: 'ఒ', KeyC: 'ణ', KeyV: 'న', KeyB: 'వ', KeyN: 'ళ', KeyM: 'శ', Comma: 'ష', Period: '।', Slash: 'య', Space: ' '
            }
        },
        'phonetic': {
            normal: {
                Backquote: '`', Digit1: '౧', Digit2: '౨', Digit3: '౩', Digit4: '౪', Digit5: '౫', Digit6: '౬', Digit7: '౭', Digit8: '౮', Digit9: '౯', Digit0: '౦', Minus: '-', Equal: '=',
                KeyQ: 'ౌ', KeyW: 'ై', KeyE: 'ే', KeyR: 'ర', KeyT: 'త', KeyY: 'య', KeyU: 'ు', KeyI: 'ి', KeyO: 'ో', KeyP: 'ప', BracketLeft: 'ఖ', BracketRight: 'ఘ', Backslash: '\\',
                KeyA: 'ా', KeyS: 'స', KeyD: 'ద', KeyF: 'ఫ', KeyG: 'గ', KeyH: 'హ', KeyJ: 'జ', KeyK: 'క', KeyL: 'ల', Semicolon: 'చ', Quote: 'శ',
                KeyZ: 'ఝ', KeyX: '్', KeyC: 'చ', KeyV: 'వ', KeyB: 'బ', KeyN: 'న', KeyM: 'మ', Comma: 'ణ', Period: '.', Slash: 'ధ', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: '+',
                KeyQ: 'ఔ', KeyW: 'ఐ', KeyE: 'ఏ', KeyR: 'ఱ', KeyT: 'ట', KeyY: 'ఞ', KeyU: 'ఊ', KeyI: 'ఈ', KeyO: 'ఓ', KeyP: 'ఫ', BracketLeft: 'ఖ', BracketRight: 'ఘ', Backslash: '|',
                KeyA: 'ఆ', KeyS: 'ష', KeyD: 'డ', KeyF: 'ఫ', KeyG: 'ఘ', KeyH: 'ః', KeyJ: 'ఝ', KeyK: 'ఖ', KeyL: 'ళ', Semicolon: 'ఛ', Quote: 'శ',
                KeyZ: 'జ్ఞ', KeyX: 'త్ర', KeyC: 'ఛ', KeyV: 'భ', KeyB: 'భ', KeyN: 'ణ', KeyM: 'ం', Comma: 'ఎ', Period: '?', Slash: 'ఢ', Space: ' '
            }
        }
    },
    gujarati: {
        'inscript': {
            normal: {
                Backquote: '`', Digit1: '૧', Digit2: '૨', Digit3: '૩', Digit4: '૪', Digit5: '૫', Digit6: '૬', Digit7: '૭', Digit8: '૮', Digit9: '૯', Digit0: '૦', Minus: '-', Equal: 'ૃ',
                KeyQ: 'ૌ', KeyW: 'ૈ', KeyE: 'ા', KeyR: 'ી', KeyT: 'ૂ', KeyY: 'બ', KeyU: 'હ', KeyI: 'ગ', KeyO: 'દ', KeyP: 'જ', BracketLeft: 'ડ', BracketRight: '઼', Backslash: 'ૉ',
                KeyA: 'ો', KeyS: 'ે', KeyD: '્', KeyF: 'િ', KeyG: 'ુ', KeyH: 'પ', KeyJ: 'ર', KeyK: 'ક', KeyL: 'ત', Semicolon: 'ચ', Quote: 'ટ',
                KeyZ: 'ં', KeyX: 'ઃ', KeyC: 'મ', KeyV: 'ન', KeyB: 'વ', KeyN: 'લ', KeyM: 'સ', Comma: ',', Period: '.', Slash: 'ય', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: 'ઃ', Equal: 'ઋ',
                KeyQ: 'ઔ', KeyW: 'ઐ', KeyE: 'આ', KeyR: 'ઈ', KeyT: 'ઊ', KeyY: 'ભ', KeyU: 'ઙ', KeyI: 'ઘ', KeyO: 'ધ', KeyP: 'ઝ', BracketLeft: 'ઢ', BracketRight: 'ઞ', Backslash: '|',
                KeyA: 'ઓ', KeyS: 'એ', KeyD: 'અ', KeyF: 'ઇ', KeyG: 'ઉ', KeyH: 'ફ', KeyJ: 'ઋ', KeyK: 'ખ', KeyL: 'થ', Semicolon: 'છ', Quote: 'ઠ',
                KeyZ: 'ઁ', KeyX: 'ઃ', KeyC: 'ણ', KeyV: 'ન', KeyB: 'વ', KeyN: 'ળ', KeyM: 'શ', Comma: 'ષ', Period: '।', Slash: 'ય', Space: ' '
            }
        },
        'phonetic': {
            normal: {
                Backquote: '`', Digit1: '૧', Digit2: '૨', Digit3: '૩', Digit4: '૪', Digit5: '૫', Digit6: '૬', Digit7: '૭', Digit8: '૮', Digit9: '૯', Digit0: '૦', Minus: '-', Equal: '=',
                KeyQ: 'ૌ', KeyW: 'ૈ', KeyE: 'ે', KeyR: 'ર', KeyT: 'ત', KeyY: 'ય', KeyU: 'ુ', KeyI: 'િ', KeyO: 'ો', KeyP: 'પ', BracketLeft: 'ખ', BracketRight: 'ઘ', Backslash: '\\',
                KeyA: 'ા', KeyS: 'સ', KeyD: 'દ', KeyF: 'ફ', KeyG: 'ગ', KeyH: 'હ', KeyJ: 'જ', KeyK: 'ક', KeyL: 'લ', Semicolon: 'ચ', Quote: 'શ',
                KeyZ: 'ઝ', KeyX: '્', KeyC: 'ચ', KeyV: 'વ', KeyB: 'બ', KeyN: 'ન', KeyM: 'મ', Comma: ',', Period: '.', Slash: 'ધ', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: '+',
                KeyQ: 'ઔ', KeyW: 'ઐ', KeyE: 'એ', KeyR: 'ઋ', KeyT: 'ટ', KeyY: 'ઞ', KeyU: 'ઊ', KeyI: 'ઈ', KeyO: 'ઓ', KeyP: 'ફ', BracketLeft: 'ખ', BracketRight: 'ઘ', Backslash: '|',
                KeyA: 'આ', KeyS: 'ષ', KeyD: 'ડ', KeyF: 'ફ', KeyG: 'ઘ', KeyH: 'ઃ', KeyJ: 'ઝ', KeyK: 'ખ', KeyL: 'ળ', Semicolon: 'છ', Quote: 'ષ',
                KeyZ: 'જ્ઞ', KeyX: 'ત્ર', KeyC: 'છ', KeyV: 'ભ', KeyB: 'ભ', KeyN: 'ણ', KeyM: 'ં', Comma: 'એ', Period: '?', Slash: 'ઢ', Space: ' '
            }
        }
    },
    kannada: {
        'inscript': {
            normal: {
                Backquote: '`', Digit1: '೧', Digit2: '೨', Digit3: '೩', Digit4: '೪', Digit5: '೫', Digit6: '೬', Digit7: '೭', Digit8: '೮', Digit9: '೯', Digit0: '೦', Minus: '-', Equal: 'ೃ',
                KeyQ: 'ೌ', KeyW: 'ೈ', KeyE: 'ಾ', KeyR: 'ೀ', KeyT: 'ೂ', KeyY: 'ಬ', KeyU: 'ಹ', KeyI: 'ಗ', KeyO: 'ದ', KeyP: 'ಜ', BracketLeft: 'ಡ', BracketRight: 'ಁ', Backslash: '\\',
                KeyA: 'ೋ', KeyS: 'ೇ', KeyD: '್', KeyF: 'ಿ', KeyG: 'ು', KeyH: 'ಪ', KeyJ: 'ರ', KeyK: 'ಕ', KeyL: 'ತ', Semicolon: 'ಚ', Quote: 'ಟ',
                KeyZ: 'ೆ', KeyX: 'ೊ', KeyC: 'ಮ', KeyV: 'ನ', KeyB: 'ವ', KeyN: 'ಲ', KeyM: 'ಸ', Comma: ',', Period: '.', Slash: 'ಯ', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: 'ಃ', Equal: 'ೠ',
                KeyQ: 'ಔ', KeyW: 'ಐ', KeyE: 'ಆ', KeyR: 'ಈ', KeyT: 'ಊ', KeyY: 'ಭ', KeyU: 'ಙ', KeyI: 'ಘ', KeyO: 'ಧ', KeyP: 'ಝ', BracketLeft: 'ಢ', BracketRight: 'ಞ', Backslash: '|',
                KeyA: 'ಓ', KeyS: 'ಏ', KeyD: 'ಅ', KeyF: 'ಇ', KeyG: 'ಉ', KeyH: 'ಫ', KeyJ: 'ಋ', KeyK: 'ಖ', KeyL: 'ಥ', Semicolon: 'ಛ', Quote: 'ಠ',
                KeyZ: 'ಎ', KeyX: 'ಒ', KeyC: 'ಣ', KeyV: 'ನ', KeyB: 'ವ', KeyN: 'ಳ', KeyM: 'ಶ', Comma: 'ಷ', Period: '।', Slash: 'ಯ', Space: ' '
            }
        },
        'phonetic': {
            normal: {
                Backquote: '`', Digit1: '೧', Digit2: '೨', Digit3: '೩', Digit4: '೪', Digit5: '೫', Digit6: '೬', Digit7: '೭', Digit8: '೮', Digit9: '೯', Digit0: '೦', Minus: '-', Equal: '=',
                KeyQ: 'ೌ', KeyW: 'ೈ', KeyE: 'ೇ', KeyR: 'ರ', KeyT: 'ತ', KeyY: 'ಯ', KeyU: 'ು', KeyI: 'ಿ', KeyO: 'ೋ', KeyP: 'ಪ', BracketLeft: 'ಖ', BracketRight: 'ಘ', Backslash: '\\',
                KeyA: 'ಾ', KeyS: 'ಸ', KeyD: 'ದ', KeyF: 'ಫ', KeyG: 'ಗ', KeyH: 'ಹ', KeyJ: 'ಜ', KeyK: 'ಕ', KeyL: 'ಲ', Semicolon: 'ಚ', Quote: 'ಶ',
                KeyZ: 'ಝ', KeyX: '್', KeyC: 'ಚ', KeyV: 'ವ', KeyB: 'ಬ', KeyN: 'ನ', KeyM: 'ಮ', Comma: ',', Period: '.', Slash: 'ಧ', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: '+',
                KeyQ: 'ಔ', KeyW: 'ಐ', KeyE: 'ಏ', KeyR: 'ಋ', KeyT: 'ಟ', KeyY: 'ಞ', KeyU: 'ಊ', KeyI: 'ಈ', KeyO: 'ಓ', KeyP: 'ಫ', BracketLeft: 'ಖ', BracketRight: 'ಘ', Backslash: '|',
                KeyA: 'ಆ', KeyS: 'ಷ', KeyD: 'ಡ', KeyF: 'ಫ', KeyG: 'ಘ', KeyH: 'ಃ', KeyJ: 'ಝ', KeyK: 'ಖ', KeyL: 'ಳ', Semicolon: 'ಛ', Quote: 'ಶ',
                KeyZ: 'ಜ್ಞ', KeyX: 'ತ್ರ', KeyC: 'ಛ', KeyV: 'ಭ', KeyB: 'ಭ', KeyN: 'ಣ', KeyM: 'ಂ', Comma: 'ಎ', Period: '?', Slash: 'ಢ', Space: ' '
            }
        }
    },
    malayalam: {
        'inscript': {
            normal: {
                Backquote: '`', Digit1: '൧', Digit2: '൨', Digit3: '൩', Digit4: '൪', Digit5: '൫', Digit6: '൬', Digit7: '൭', Digit8: '൮', Digit9: '൯', Digit0: '൦', Minus: '-', Equal: 'ൃ',
                KeyQ: 'ൌ', KeyW: 'ൈ', KeyE: 'ാ', KeyR: 'ീ', KeyT: 'ൂ', KeyY: 'ബ', KeyU: 'ഹ', KeyI: 'ഗ', KeyO: 'ദ', KeyP: 'ജ', BracketLeft: 'ഡ', BracketRight: 'ഃ', Backslash: '\\',
                KeyA: 'ോ', KeyS: 'േ', KeyD: '്', KeyF: 'ി', KeyG: 'ു', KeyH: 'പ', KeyJ: 'ര', KeyK: 'ക', KeyL: 'ത', Semicolon: 'ച', Quote: 'ട',
                KeyZ: 'െ', KeyX: 'ൊ', KeyC: 'മ', KeyV: 'ന', KeyB: 'വ', KeyN: 'ല', KeyM: 'സ', Comma: ',', Period: '.', Slash: 'യ', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: 'ഃ', Equal: 'ൠ',
                KeyQ: 'ഔ', KeyW: 'ഐ', KeyE: 'ആ', KeyR: 'ഈ', KeyT: 'ഊ', KeyY: 'ഭ', KeyU: 'ങ', KeyI: 'ഘ', KeyO: 'ധ', KeyP: 'ഝ', BracketLeft: 'ഢ', BracketRight: 'ഞ', Backslash: '|',
                KeyA: 'ഓ', KeyS: 'ഏ', KeyD: 'അ', KeyF: 'ഇ', KeyG: 'ഉ', KeyH: 'ഫ', KeyJ: 'ഋ', KeyK: 'ഖ', KeyL: 'ഥ', Semicolon: 'ഛ', Quote: 'ഠ',
                KeyZ: 'എ', KeyX: 'ഒ', KeyC: 'ണ', KeyV: 'ന', KeyB: 'ഴ', KeyN: 'ള', KeyM: 'ശ', Comma: 'ഷ', Period: '।', Slash: 'യ', Space: ' '
            }
        },
        'phonetic': {
            normal: {
                Backquote: '`', Digit1: '൧', Digit2: '൨', Digit3: '൩', Digit4: '൪', Digit5: '൫', Digit6: '൬', Digit7: '൭', Digit8: '൮', Digit9: '൯', Digit0: '൦', Minus: '-', Equal: '=',
                KeyQ: 'ൌ', KeyW: 'ൈ', KeyE: 'േ', KeyR: 'ര', KeyT: 'ത', KeyY: 'യ', KeyU: 'ു', KeyI: 'ി', KeyO: 'ോ', KeyP: 'പ', BracketLeft: 'ഖ', BracketRight: 'ഘ', Backslash: '\\',
                KeyA: 'ാ', KeyS: 'സ', KeyD: 'ദ', KeyF: 'ഫ', KeyG: 'ഗ', KeyH: 'ഹ', KeyJ: 'ജ', KeyK: 'ക', KeyL: 'ല', Semicolon: 'ച', Quote: 'ശ',
                KeyZ: 'ഝ', KeyX: '്', KeyC: 'ച', KeyV: 'വ', KeyB: 'ബ', KeyN: 'ന', KeyM: 'മ', Comma: ',', Period: '.', Slash: 'ധ', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: '+',
                KeyQ: 'ഔ', KeyW: 'ഐ', KeyE: 'ഏ', KeyR: 'ഋ', KeyT: 'ട', KeyY: 'ഞ', KeyU: 'ഊ', KeyI: 'ഈ', KeyO: 'ഓ', KeyP: 'ഫ', BracketLeft: 'ഖ', BracketRight: 'ഘ', Backslash: '|',
                KeyA: 'ആ', KeyS: 'ഷ', KeyD: 'ഡ', KeyF: 'ഫ', KeyG: 'ഘ', KeyH: 'ഃ', KeyJ: 'ഝ', KeyK: 'ഖ', KeyL: 'ള', Semicolon: 'ഛ', Quote: 'ശ',
                KeyZ: 'ജ്ഞ', KeyX: 'ത്ര', KeyC: 'ഛ', KeyV: 'ഭ', KeyB: 'ഭ', KeyN: 'ണ', KeyM: 'ം', Comma: 'എ', Period: '?', Slash: 'ഢ', Space: ' '
            }
        }
    },
    odia: {
        'inscript': {
            normal: {
                Backquote: '`', Digit1: '୧', Digit2: '୨', Digit3: '୩', Digit4: '୪', Digit5: '୫', Digit6: '୬', Digit7: '୭', Digit8: '୮', Digit9: '୯', Digit0: '୦', Minus: '-', Equal: 'ୃ',
                KeyQ: 'ୌ', KeyW: 'ୈ', KeyE: 'ା', KeyR: 'ୀ', KeyT: 'ୂ', KeyY: 'ବ', KeyU: 'ହ', KeyI: 'ଗ', KeyO: 'ଦ', KeyP: 'ଜ', BracketLeft: 'ଡ', BracketRight: '଼', Backslash: '\\',
                KeyA: 'ୋ', KeyS: 'େ', KeyD: '୍', KeyF: 'ି', KeyG: 'ୁ', KeyH: 'ପ', KeyJ: 'ର', KeyK: 'କ', KeyL: 'ତ', Semicolon: 'ଚ', Quote: 'ଟ',
                KeyZ: 'ଂ', KeyX: 'ଃ', KeyC: 'ମ', KeyV: 'ନ', KeyB: 'ଵ', KeyN: 'ଲ', KeyM: 'ସ', Comma: ',', Period: '.', Slash: 'ଯ', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: 'ଃ', Equal: 'ୠ',
                KeyQ: 'ଔ', KeyW: 'ଐ', KeyE: 'ଆ', KeyR: 'ଈ', KeyT: 'ଊ', KeyY: 'ଭ', KeyU: 'ଙ', KeyI: 'ଘ', KeyO: 'ଧ', KeyP: 'ଝ', BracketLeft: 'ଢ', BracketRight: 'ଞ', Backslash: '|',
                KeyA: 'ଓ', KeyS: 'ଏ', KeyD: 'ଅ', KeyF: 'ଇ', KeyG: 'ଉ', KeyH: 'ଫ', KeyJ: 'ଋ', KeyK: 'ଖ', KeyL: 'ଥ', Semicolon: 'ଛ', Quote: 'ଠ',
                KeyZ: 'ଁ', KeyX: 'ଃ', KeyC: 'ଣ', KeyV: 'ନ', KeyB: 'ୱ', KeyN: 'ଳ', KeyM: 'ଶ', Comma: 'ଷ', Period: '।', Slash: 'ୟ', Space: ' '
            }
        },
        'phonetic': {
            normal: {
                Backquote: '`', Digit1: '୧', Digit2: '୨', Digit3: '୩', Digit4: '୪', Digit5: '୫', Digit6: '୬', Digit7: '୭', Digit8: '୮', Digit9: '୯', Digit0: '୦', Minus: '-', Equal: '=',
                KeyQ: 'ୌ', KeyW: 'ୈ', KeyE: 'େ', KeyR: 'ର', KeyT: 'ତ', KeyY: 'ଯ', KeyU: 'ୁ', KeyI: 'ି', KeyO: 'ୋ', KeyP: 'ପ', BracketLeft: 'ଖ', BracketRight: 'ଘ', Backslash: '\\',
                KeyA: 'ା', KeyS: 'ସ', KeyD: 'ଦ', KeyF: 'ଫ', KeyG: 'ଗ', KeyH: 'ହ', KeyJ: 'ଜ', KeyK: 'କ', KeyL: 'ଲ', Semicolon: 'ଚ', Quote: 'ଶ',
                KeyZ: 'ଝ', KeyX: '୍', KeyC: 'ଚ', KeyV: 'ଵ', KeyB: 'ବ', KeyN: 'ନ', KeyM: 'ମ', Comma: ',', Period: '.', Slash: 'ଧ', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: '+',
                KeyQ: 'ଔ', KeyW: 'ଐ', KeyE: 'ଏ', KeyR: 'ଋ', KeyT: 'ଟ', KeyY: 'ଞ', KeyU: 'ଊ', KeyI: 'ଈ', KeyO: 'ଓ', KeyP: 'ଫ', BracketLeft: 'ଖ', BracketRight: 'ଘ', Backslash: '|',
                KeyA: 'ଆ', KeyS: 'ଷ', KeyD: 'ଡ', KeyF: 'ଫ', KeyG: 'ଘ', KeyH: 'ଃ', KeyJ: 'ଝ', KeyK: 'ଖ', KeyL: 'ଳ', Semicolon: 'ଛ', Quote: 'ଶ',
                KeyZ: 'ଜ୍ଞ', KeyX: 'ତ୍ର', KeyC: 'ଛ', KeyV: 'ଭ', KeyB: 'ଭ', KeyN: 'ଣ', KeyM: 'ଂ', Comma: 'ଏ', Period: '?', Slash: 'ଢ', Space: ' '
            }
        }
    },
    punjabi: {
        'inscript': {
            normal: {
                Backquote: '`', Digit1: '੧', Digit2: '੨', Digit3: '੩', Digit4: '੪', Digit5: '੫', Digit6: '੬', Digit7: '੭', Digit8: '੮', Digit9: '੯', Digit0: '੦', Minus: '-', Equal: '=',
                KeyQ: 'ੌ', KeyW: 'ੈ', KeyE: 'ਾ', KeyR: 'ੀ', KeyT: 'ੂ', KeyY: 'ਬ', KeyU: 'ਹ', KeyI: 'ਗ', KeyO: 'ਦ', KeyP: 'ਜ', BracketLeft: 'ਡ', BracketRight: '਼', Backslash: '\\',
                KeyA: 'ੋ', KeyS: 'ੇ', KeyD: '੍', KeyF: 'ਿ', KeyG: 'ੁ', KeyH: 'ਪ', KeyJ: 'ਰ', KeyK: 'ਕ', KeyL: 'ਤ', Semicolon: 'ਚ', Quote: 'ਟ',
                KeyZ: 'ੰ', KeyX: 'ਂ', KeyC: 'ਮ', KeyV: 'ਨ', KeyB: 'ਵ', KeyN: 'ਲ', KeyM: 'ਸ', Comma: ',', Period: '.', Slash: 'ਯ', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: '+',
                KeyQ: 'ਔ', KeyW: 'ਐ', KeyE: 'ਆ', KeyR: 'ਈ', KeyT: 'ਊ', KeyY: 'ਭ', KeyU: 'ਙ', KeyI: 'ਘ', KeyO: 'ਧ', KeyP: 'ਝ', BracketLeft: 'ਢ', BracketRight: 'ਞ', Backslash: '|',
                KeyA: 'ਓ', KeyS: 'ਏ', KeyD: 'ਅ', KeyF: 'ਇ', KeyG: 'ਉ', KeyH: 'ਫ', KeyJ: 'ੜ', KeyK: 'ਖ', KeyL: 'ਥ', Semicolon: 'ਛ', Quote: 'ਠ',
                KeyZ: 'ੱ', KeyX: 'ਂ', KeyC: 'ਣ', KeyV: 'ਨ', KeyB: 'ਵ', KeyN: 'ਲ਼', KeyM: 'ਸ਼', Comma: 'ਖ਼', Period: '।', Slash: 'ਯ', Space: ' '
            }
        },
        'phonetic': {
            normal: {
                Backquote: '`', Digit1: '੧', Digit2: '੨', Digit3: '੩', Digit4: '੪', Digit5: '੫', Digit6: '੬', Digit7: '੭', Digit8: '੮', Digit9: '੯', Digit0: '੦', Minus: '-', Equal: '=',
                KeyQ: 'ੌ', KeyW: 'ੈ', KeyE: 'ੇ', KeyR: 'ਰ', KeyT: 'ਤ', KeyY: 'ਯ', KeyU: 'ੁ', KeyI: 'ਿ', KeyO: 'ੋ', KeyP: 'ਪ', BracketLeft: 'ਖ', BracketRight: 'ਘ', Backslash: '\\',
                KeyA: 'ਾ', KeyS: 'ਸ', KeyD: 'ਦ', KeyF: 'ਫ', KeyG: 'ਗ', KeyH: 'ਹ', KeyJ: 'ਜ', KeyK: 'ਕ', KeyL: 'ਲ', Semicolon: 'ਚ', Quote: 'ਸ਼',
                KeyZ: 'ਝ', KeyX: '੍', KeyC: 'ਚ', KeyV: 'ਵ', KeyB: 'ਬ', KeyN: 'ਨ', KeyM: 'ਮ', Comma: ',', Period: '.', Slash: 'ਧ', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: '+',
                KeyQ: 'ਔ', KeyW: 'ਐ', KeyE: 'ਏ', KeyR: 'ੜ', KeyT: 'ਟ', KeyY: 'ਞ', KeyU: 'ਊ', KeyI: 'ਈ', KeyO: 'ਓ', KeyP: 'ਫ', BracketLeft: 'ਖ', BracketRight: 'ਘ', Backslash: '|',
                KeyA: 'ਆ', KeyS: 'ਸ਼', KeyD: 'ਡ', KeyF: 'ਫ', KeyG: 'ਘ', KeyH: 'ਹ', KeyJ: 'ਝ', KeyK: 'ਖ', KeyL: 'ਲ਼', Semicolon: 'ਛ', Quote: 'ਸ਼',
                KeyZ: 'ਝ', KeyX: 'ੱ', KeyC: 'ਛ', KeyV: 'ਭ', KeyB: 'ਭ', KeyN: 'ਣ', KeyM: 'ੰ', Comma: 'ਏ', Period: '?', Slash: 'ਢ', Space: ' '
            }
        }
    },
    assamese: {
        'inscript': {
            normal: {
                Backquote: '`', Digit1: '১', Digit2: '২', Digit3: '৩', Digit4: '৪', Digit5: '৫', Digit6: '৬', Digit7: '৭', Digit8: '৮', Digit9: '৯', Digit0: '০', Minus: '-', Equal: 'ৃ',
                KeyQ: 'ৌ', KeyW: 'ৈ', KeyE: 'া', KeyR: 'ী', KeyT: 'ূ', KeyY: 'ব', KeyU: 'হ', KeyI: 'গ', KeyO: 'দ', KeyP: 'জ', BracketLeft: 'ড', BracketRight: '়', Backslash: '\\',
                KeyA: 'ো', KeyS: 'ে', KeyD: '্', KeyF: 'ি', KeyG: 'ু', KeyH: 'প', KeyJ: 'ৰ', KeyK: 'ক', KeyL: 'ত', Semicolon: 'চ', Quote: 'ট',
                KeyZ: 'ং', KeyX: 'ঃ', KeyC: 'ম', KeyV: 'ন', KeyB: 'ৱ', KeyN: 'ল', KeyM: 'স', Comma: ',', Period: '.', Slash: 'য', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: 'ঃ', Equal: 'ঋ',
                KeyQ: 'ঔ', KeyW: 'ঐ', KeyE: 'আ', KeyR: 'ঈ', KeyT: 'ঊ', KeyY: 'ভ', KeyU: 'ঙ', KeyI: 'ঘ', KeyO: 'ধ', KeyP: 'ঝ', BracketLeft: 'ঢ', BracketRight: 'ঞ', Backslash: '|',
                KeyA: 'ও', KeyS: 'এ', KeyD: 'অ', KeyF: 'ই', KeyG: 'উ', KeyH: 'ফ', KeyJ: 'ঋ', KeyK: 'খ', KeyL: 'থ', Semicolon: 'ছ', Quote: 'ঠ',
                KeyZ: 'ঁ', KeyX: 'ঃ', KeyC: 'ণ', KeyV: 'ৎ', KeyB: 'ৱ', KeyN: 'ল', KeyM: 'শ', Comma: 'ষ', Period: '।', Slash: 'য়', Space: ' '
            }
        },
        'phonetic': {
            normal: {
                Backquote: '`', Digit1: '১', Digit2: '২', Digit3: '৩', Digit4: '৪', Digit5: '৫', Digit6: '৬', Digit7: '৭', Digit8: '৮', Digit9: '৯', Digit0: '০', Minus: '-', Equal: '=',
                KeyQ: 'ৌ', KeyW: 'ৈ', KeyE: 'ে', KeyR: 'ৰ', KeyT: 'ত', KeyY: 'য', KeyU: 'ু', KeyI: 'ি', KeyO: 'ো', KeyP: 'প', BracketLeft: 'খ', BracketRight: 'ঘ', Backslash: '\\',
                KeyA: 'া', KeyS: 'স', KeyD: 'দ', KeyF: 'ফ', KeyG: 'গ', KeyH: 'হ', KeyJ: 'জ', KeyK: 'ক', KeyL: 'ল', Semicolon: 'চ', Quote: 'শ',
                KeyZ: 'জ', KeyX: '্', KeyC: 'চ', KeyV: 'ভ', KeyB: 'ব', KeyN: 'ন', KeyM: 'ম', Comma: ',', Period: '।', Slash: 'ধ', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: '+',
                KeyQ: 'ঔ', KeyW: 'ঐ', KeyE: 'এ', KeyR: 'ঋ', KeyT: 'ট', KeyY: 'য়', KeyU: 'ঊ', KeyI: 'ঈ', KeyO: 'ও', KeyP: 'ফ', BracketLeft: 'খ', BracketRight: 'ঘ', Backslash: '|',
                KeyA: 'আ', KeyS: 'ষ', KeyD: 'ড', KeyF: 'ফ', KeyG: 'ঘ', KeyH: 'ঃ', KeyJ: 'ঝ', KeyK: 'খ', KeyL: 'ল', Semicolon: 'ছ', Quote: 'ষ',
                KeyZ: 'জ্ঞ', KeyX: 'ত্র', KeyC: 'ছ', KeyV: 'ভ', KeyB: 'ব', KeyN: 'ণ', KeyM: 'ং', Comma: 'এ', Period: '?', Slash: 'ঢ', Space: ' '
            }
        }
    },
    urdu: {
        'urdu-phonetic': {
            normal: {
                Backquote: '`', Digit1: '۱', Digit2: '۲', Digit3: '۳', Digit4: '۴', Digit5: '۵', Digit6: '۶', Digit7: '۷', Digit8: '۸', Digit9: '۹', Digit0: '۰', Minus: '-', Equal: '=',
                KeyQ: 'ق', KeyW: 'و', KeyE: 'ع', KeyR: 'ر', KeyT: 'ت', KeyY: 'ے', KeyU: 'ء', KeyI: 'ی', KeyO: 'ہ', KeyP: 'پ', BracketLeft: ']', BracketRight: '[', Backslash: '\\',
                KeyA: 'ا', KeyS: 'س', KeyD: 'د', KeyF: 'ف', KeyG: 'گ', KeyH: 'ح', KeyJ: 'ج', KeyK: 'ک', KeyL: 'ل', Semicolon: '؛', Quote: '’',
                KeyZ: 'ز', KeyX: 'ش', KeyC: 'چ', KeyV: 'ط', KeyB: 'ب', KeyN: 'ن', KeyM: 'م', Comma: '،', Period: '۔', Slash: '؟', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: '+',
                KeyQ: 'ْ', KeyW: 'ؤ', KeyE: 'ّ', KeyR: 'ڑ', KeyT: 'ٹ', KeyY: 'ي', KeyU: 'ئ', KeyI: 'ٰ', KeyO: 'ۃ', KeyP: 'ُ', BracketLeft: '}', BracketRight: '{', Backslash: '|',
                KeyA: 'آ', KeyS: 'ص', KeyD: 'ڈ', KeyF: 'غ', KeyG: 'غ', KeyH: 'ھ', KeyJ: 'ض', KeyK: 'خ', KeyL: 'ل', Semicolon: ':', Quote: '”',
                KeyZ: 'ذ', KeyX: 'ژ', KeyC: 'ث', KeyV: 'ظ', KeyB: 'ً', KeyN: 'ں', KeyM: 'ٍ', Comma: 'ِ', Period: 'َ', Slash: '؟', Space: ' '
            }
        },
        'urdu-standard': {
            normal: {
                Backquote: '`', Digit1: '۱', Digit2: '۲', Digit3: '۳', Digit4: '۴', Digit5: '۵', Digit6: '۶', Digit7: '۷', Digit8: '۸', Digit9: '۹', Digit0: '۰', Minus: '-', Equal: '=',
                KeyQ: 'ض', KeyW: 'ص', KeyE: 'ث', KeyR: 'ق', KeyT: 'ف', KeyY: 'غ', KeyU: 'ع', KeyI: 'ه', KeyO: 'خ', KeyP: 'ح', BracketLeft: 'ج', BracketRight: 'د', Backslash: '\\',
                KeyA: 'ش', KeyS: 'س', KeyD: 'ي', KeyF: 'ب', KeyG: 'ل', KeyH: 'ا', KeyJ: 'ت', KeyK: 'ک', KeyL: 'م', Semicolon: 'ک', Quote: 'ط',
                KeyZ: 'ئ', KeyX: 'ء', KeyC: 'ؤ', KeyV: 'ر', KeyB: 'لا', KeyN: 'ی', KeyM: 'ة', Comma: 'و', Period: 'ز', Slash: 'ظ', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: '+',
                KeyQ: 'َ', KeyW: 'ً', KeyE: 'ُ', KeyR: 'ٌ', KeyT: 'لإ', KeyY: 'إ', KeyU: '‘', KeyI: '÷', KeyO: '×', KeyP: '؛', BracketLeft: '<', BracketRight: '>', Backslash: '|',
                KeyA: 'ِ', KeyS: 'ٍ', KeyD: ']', KeyF: '[', KeyG: 'لأ', KeyH: 'أ', KeyJ: 'ـ', KeyK: '،', KeyL: '/', Semicolon: ':', Quote: '"',
                KeyZ: '~', KeyX: 'ْ', KeyC: '}', KeyV: '{', KeyB: 'لآ', KeyN: 'آ', KeyM: '’', Comma: ',', Period: '.', Slash: '؟', Space: ' '
            }
        },
        'phonetic': {
            normal: {
                Backquote: '`', Digit1: '۱', Digit2: '۲', Digit3: '۳', Digit4: '۴', Digit5: '۵', Digit6: '۶', Digit7: '۷', Digit8: '۸', Digit9: '۹', Digit0: '۰', Minus: '-', Equal: '=',
                KeyQ: 'ق', KeyW: 'و', KeyE: 'ع', KeyR: 'ر', KeyT: 'ت', KeyY: 'ے', KeyU: 'ء', KeyI: 'ی', KeyO: 'ہ', KeyP: 'پ', BracketLeft: ']', BracketRight: '[', Backslash: '\\',
                KeyA: 'ا', KeyS: 'س', KeyD: 'د', KeyF: 'ف', KeyG: 'گ', KeyH: 'ح', KeyJ: 'ج', KeyK: 'ک', KeyL: 'ل', Semicolon: '؛', Quote: '’',
                KeyZ: 'ز', KeyX: 'ش', KeyC: 'چ', KeyV: 'ط', KeyB: 'ب', KeyN: 'ن', KeyM: 'م', Comma: '،', Period: '۔', Slash: '؟', Space: ' '
            },
            shift: {
                Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: '+',
                KeyQ: 'ْ', KeyW: 'ؤ', KeyE: 'ّ', KeyR: 'ڑ', KeyT: 'ٹ', KeyY: 'ي', KeyU: 'ئ', KeyI: 'ٰ', KeyO: 'ۃ', KeyP: 'ُ', BracketLeft: '}', BracketRight: '{', Backslash: '|',
                KeyA: 'آ', KeyS: 'ص', KeyD: 'ڈ', KeyF: 'غ', KeyG: 'غ', KeyH: 'ھ', KeyJ: 'ض', KeyK: 'خ', KeyL: 'ل', Semicolon: ':', Quote: '”',
                KeyZ: 'ذ', KeyX: 'ژ', KeyC: 'ث', KeyV: 'ظ', KeyB: 'ً', KeyN: 'ں', KeyM: 'ٍ', Comma: 'ِ', Period: 'َ', Slash: '؟', Space: ' '
            }
        }
    },
    english: {
        'phonetic': {
            normal: {
                Backquote:'`', Digit1:'1', Digit2:'2', Digit3:'3', Digit4:'4', Digit5:'5', Digit6:'6', Digit7:'7', Digit8:'8', Digit9:'9', Digit0:'0', Minus:'-', Equal:'=',
                KeyQ:'q', KeyW:'w', KeyE:'e', KeyR:'r', KeyT:'t', KeyY:'y', KeyU:'u', KeyI:'i', KeyO:'o', KeyP:'p', BracketLeft:'[', BracketRight:']', Backslash:'\\',
                KeyA:'a', KeyS:'s', KeyD:'d', KeyF:'f', KeyG:'g', KeyH:'h', KeyJ:'j', KeyK:'k', KeyL:'l', Semicolon:';', Quote:"'",
                KeyZ:'z', KeyX:'x', KeyC:'c', KeyV:'v', KeyB:'b', KeyN:'n', KeyM:'m', Comma:',', Period:'.', Slash:'/', Space: ' '
            },
            shift: {
                Backquote:'~', Digit1:'!', Digit2:'@', Digit3:'#', Digit4:'$', Digit5:'%', Digit6:'^', Digit7:'&', Digit8:'*', Digit9:'(', Digit0:')', Minus:'_', Equal:'+',
                KeyQ:'Q', KeyW:'W', KeyE:'E', KeyR:'R', KeyT:'T', KeyY:'Y', KeyU:'U', KeyI:'I', KeyO:'O', KeyP:'P', BracketLeft:'{', BracketRight:'}', Backslash:'|',
                KeyA:'A', KeyS:'S', KeyD:'D', KeyF:'F', KeyG:'G', KeyH:'H', KeyJ:'J', KeyK:'K', KeyL:'L', Semicolon:':', Quote:'"',
                KeyZ:'Z', KeyX:'X', KeyC:'C', KeyV:'V', KeyB:'B', KeyN:'N', KeyM:'M', Comma:'<', Period:'>', Slash:'?', Space: ' '
            }
        }
    },
    hinglish: {
        'phonetic': {
            normal: {
                Backquote:'`', Digit1:'1', Digit2:'2', Digit3:'3', Digit4:'4', Digit5:'5', Digit6:'6', Digit7:'7', Digit8:'8', Digit9:'9', Digit0:'0', Minus:'-', Equal:'=',
                KeyQ:'q', KeyW:'w', KeyE:'e', KeyR:'r', KeyT:'t', KeyY:'y', KeyU:'u', KeyI:'i', KeyO:'o', KeyP:'p', BracketLeft:'[', BracketRight:']', Backslash:'\\',
                KeyA:'a', KeyS:'s', KeyD:'d', KeyF:'f', KeyG:'g', KeyH:'h', KeyJ:'j', KeyK:'k', KeyL:'l', Semicolon:';', Quote:"'",
                KeyZ:'z', KeyX:'x', KeyC:'c', KeyV:'v', KeyB:'b', KeyN:'n', KeyM:'m', Comma:',', Period:'.', Slash:'/', Space: ' '
            },
            shift: {
                Backquote:'~', Digit1:'!', Digit2:'@', Digit3:'#', Digit4:'$', Digit5:'%', Digit6:'^', Digit7:'&', Digit8:'*', Digit9:'(', Digit0:')', Minus:'_', Equal:'+',
                KeyQ:'Q', KeyW:'W', KeyE:'E', KeyR:'R', KeyT:'T', KeyY:'Y', KeyU:'U', KeyI:'I', KeyO:'O', KeyP:'P', BracketLeft:'{', BracketRight:'}', Backslash:'|',
                KeyA:'A', KeyS:'S', KeyD:'D', KeyF:'F', KeyG:'G', KeyH:'H', KeyJ:'J', KeyK:'K', KeyL:'L', Semicolon:':', Quote:'"',
                KeyZ:'Z', KeyX:'X', KeyC:'C', KeyV:'V', KeyB:'B', KeyN:'N', KeyM:'M', Comma:'<', Period:'>', Slash:'?', Space: ' '
            }
        }
    }
};

/**
 * Returns key mapping for active language, layout and shift state (Used by backend keydown typing engine)
 */
function getLanguageKeymap(lang, layoutId, isShift = false) {
    const l = lang || 'english';
    const lay = layoutId || (l === 'urdu' ? 'urdu-phonetic' : 'phonetic');

    if (lay === 'direct') return null; // Native OS keyboard bypass

    const stateKey = isShift ? 'shift' : 'normal';

    if (LANGUAGE_KEYBOARDS[l] && LANGUAGE_KEYBOARDS[l][lay]) {
        const layoutObj = LANGUAGE_KEYBOARDS[l][lay];
        if (layoutObj[stateKey]) return layoutObj[stateKey];
        if (typeof layoutObj === 'object' && !layoutObj.normal) return layoutObj;
    }
    if (LANGUAGE_KEYBOARDS[l] && LANGUAGE_KEYBOARDS[l]['phonetic']) {
        const fallback = LANGUAGE_KEYBOARDS[l]['phonetic'];
        if (fallback[stateKey]) return fallback[stateKey];
        return fallback;
    }
    return isShift ? LANGUAGE_KEYBOARDS.english.phonetic.shift : LANGUAGE_KEYBOARDS.english.phonetic.normal;
}

/**
 * Injects Google Fonts into document head
 */
function injectIndianFonts() {
    if (typeof document === 'undefined') return;
    if (document.getElementById('typingdost-indic-fonts')) return;

    const link = document.createElement('link');
    link.id = 'typingdost-indic-fonts';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Anek+Odia:wght@400;600;700&family=Catamaran:wght@400;600;700&family=Hind+Guntur:wght@400;600;700&family=Hind+Jalandhar:wght@400;600;700&family=Hind+Madurai:wght@400;600;700&family=Hind+Mysuru:wght@400;600;700&family=Hind+Siliguri:wght@400;600;700&family=Hind+Vadodara:wght@400;600;700&family=Kalam:wght@400;700&family=Mukta:wght@400;600;700&family=Mukta+Mahee:wght@400;600;700&family=Noto+Nastaliq+Urdu:wght@400;700&family=Noto+Sans+Bengali:wght@400;600;700&family=Noto+Sans+Devanagari:wght@400;600;700&family=Noto+Sans+Gujarati:wght@400;600;700&family=Noto+Sans+Gurmukhi:wght@400;600;700&family=Noto+Sans+Kannada:wght@400;600;700&family=Noto+Sans+Malayalam:wght@400;600;700&family=Noto+Sans+Oriya:wght@400;600;700&family=Noto+Sans+Tamil:wght@400;600;700&family=Noto+Sans+Telugu:wght@400;600;700&family=Poppins:wght@400;600;700&family=Rozha+One&display=swap';
    document.head.appendChild(link);
}

/**
 * Applies selected font and text direction to all typing areas
 */
function applyTypingFont(fontFamily, lang) {
    if (typeof document === 'undefined') return;
    const isRTL = (lang === 'arabic' || lang === 'urdu');
    const targets = [
        document.getElementById('text-display'),
        document.getElementById('text-input'),
        document.getElementById('typing-input'),
        document.getElementById('output-text')
    ];
    targets.forEach(el => {
        if (!el) return;
        el.style.fontFamily = fontFamily;
        el.style.direction = isRTL ? 'rtl' : 'ltr';
        el.style.textAlign = isRTL ? 'right' : 'left';
        el.style.lineHeight = '1.6';
        el.style.letterSpacing = '0';
    });
    document.body.setAttribute('data-lang', lang);
    document.body.setAttribute('data-font', fontFamily);
}

/**
 * Updates visual On-Screen Keyboard keys.
 * ALWAYS preserves clean standard English QWERTY key buttons across all languages and layouts.
 */
function updateOnScreenKeyboardLayout(layoutId, lang, isShift = false) {
    if (typeof document === 'undefined') return;
    const keyElements = document.querySelectorAll('#live-keyboard-guide .key[data-keycode], .learning-visualizer .key[data-keycode]');
    if (!keyElements || keyElements.length === 0) return;

    // Standard English QWERTY labels for both Normal and Shift states
    const normalQWERTY = {
        Backquote: '`', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0', Minus: '-', Equal: '=', Backspace: '⌫',
        Tab: 'Tab', KeyQ: 'Q', KeyW: 'W', KeyE: 'E', KeyR: 'R', KeyT: 'T', KeyY: 'Y', KeyU: 'U', KeyI: 'I', KeyO: 'O', KeyP: 'P', BracketLeft: '[', BracketRight: ']', Backslash: '\\',
        CapsLock: 'Caps', KeyA: 'A', KeyS: 'S', KeyD: 'D', KeyF: 'F', KeyG: 'G', KeyH: 'H', KeyJ: 'J', KeyK: 'K', KeyL: 'L', Semicolon: ';', Quote: "'", Enter: 'Enter',
        ShiftLeft: 'Shift', KeyZ: 'Z', KeyX: 'X', KeyC: 'C', KeyV: 'V', KeyB: 'B', KeyN: 'N', KeyM: 'M', Comma: ',', Period: '.', Slash: '/', ShiftRight: 'Shift',
        Space: 'Space'
    };

    const shiftQWERTY = {
        Backquote: '~', Digit1: '!', Digit2: '@', Digit3: '#', Digit4: '$', Digit5: '%', Digit6: '^', Digit7: '&', Digit8: '*', Digit9: '(', Digit0: ')', Minus: '_', Equal: '+', Backspace: '⌫',
        Tab: 'Tab', KeyQ: 'Q', KeyW: 'W', KeyE: 'E', KeyR: 'R', KeyT: 'T', KeyY: 'Y', KeyU: 'U', KeyI: 'I', KeyO: 'O', KeyP: 'P', BracketLeft: '{', BracketRight: '}', Backslash: '|',
        CapsLock: 'Caps', KeyA: 'A', KeyS: 'S', KeyD: 'D', KeyF: 'F', KeyG: 'G', KeyH: 'H', KeyJ: 'J', KeyK: 'K', KeyL: 'L', Semicolon: ':', Quote: '"', Enter: 'Enter',
        ShiftLeft: 'Shift', KeyZ: 'Z', KeyX: 'X', KeyC: 'C', KeyV: 'V', KeyB: 'B', KeyN: 'N', KeyM: 'M', Comma: '<', Period: '>', Slash: '?', ShiftRight: 'Shift',
        Space: 'Space'
    };

    const labels = isShift ? shiftQWERTY : normalQWERTY;

    keyElements.forEach(keyEl => {
        const code = keyEl.getAttribute('data-keycode');
        if (!code) return;
        if (labels[code]) {
            keyEl.textContent = labels[code];
        }
        keyEl.classList.remove('mapped-key');
        keyEl.style.fontFamily = "var(--font-mono, monospace)";
        keyEl.style.fontSize = "";
        keyEl.style.color = isShift ? '#ffaa00' : '';
    });
}

/**
 * Initialize unified Font & Layout selector dropdown in the textbox controls bar
 */
function initFontSelector(lang) {
    if (typeof document === 'undefined') return;
    injectIndianFonts();

    const layoutControl = document.getElementById('layout-control-group');
    const layoutMenu    = document.getElementById('layout-menu');
    const layoutTrigger = document.getElementById('layout-trigger');
    const layoutIcon    = document.getElementById('current-layout-icon');
    const layoutName    = document.getElementById('current-layout-name');

    if (!layoutControl || !layoutMenu || !layoutTrigger) return;

    // layoutControl.style.display = 'inline-flex'; (Removed as requested)
    layoutControl.style.alignItems = 'center';

    const currentLang = lang || (typeof localStorage !== 'undefined' ? localStorage.getItem('typingDostLang') : 'english') || 'english';
    const fonts = LANG_FONTS[currentLang] || LANG_FONTS.english;
    
    // Determine supported layouts for this language - 100% Phonetic-driven
    let supportedLayouts = ['phonetic', 'direct'];
    if (currentLang === 'urdu') supportedLayouts = ['urdu-phonetic', 'direct'];

    layoutMenu.innerHTML = '';

    // --- Section 1: Font Options ---
    const fontHeader = document.createElement('div');
    fontHeader.className = 'dropdown-section-header';
    fontHeader.innerHTML = '🔤 Select Font / Script';
    layoutMenu.appendChild(fontHeader);

    fonts.forEach(font => {
        const btn = document.createElement('button');
        btn.className = 'theme-item layout-item font-option-item';
        btn.setAttribute('data-font-id', font.id);
        btn.setAttribute('data-font-family', font.family);
        btn.style.fontFamily = font.family;
        btn.innerHTML = `<span class="theme-item-icon">${font.icon}</span> <span class="item-label-text">${font.name}</span>${font.badge ? ' <small class="layout-badge badge-primary">'+font.badge+'</small>' : ''}`;

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            layoutMenu.querySelectorAll('.font-option-item').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyTypingFont(font.family, currentLang);
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('typingDostFont_' + currentLang, font.id);
            }
            const curLay = localStorage.getItem('typingDostLayout_' + currentLang) || supportedLayouts[0];
            const meta = LAYOUT_META[curLay] || { icon: '⌨️', name: curLay };
            if (layoutName) layoutName.textContent = font.name + ' (' + meta.name.split(' ')[0] + ')';
            if (layoutIcon) layoutIcon.textContent = font.icon;
            
            // Re-render visual keyboard (preserves English QWERTY)
            updateOnScreenKeyboardLayout(curLay, currentLang, false);
            
            layoutMenu.classList.add('hidden');
            layoutTrigger.classList.remove('open');
        });
        layoutMenu.appendChild(btn);
    });

    // --- Section 2: Keyboard Layout Options (if applicable) ---
    if (supportedLayouts.length > 0) {
        const layoutHeader = document.createElement('div');
        layoutHeader.className = 'dropdown-section-header layout-section-header';
        layoutHeader.innerHTML = '⌨️ Keyboard Layout';
        layoutMenu.appendChild(layoutHeader);

        supportedLayouts.forEach(layoutId => {
            const meta = LAYOUT_META[layoutId] || { icon: '⌨️', name: layoutId };
            const btn = document.createElement('button');
            btn.className = 'theme-item layout-item layout-option-item';
            btn.setAttribute('data-layout-id', layoutId);
            btn.innerHTML = `<span class="theme-item-icon">${meta.icon}</span> <span class="item-label-text">${meta.name}</span>${meta.badge ? ' <small class="layout-badge badge-accent">'+meta.badge+'</small>' : ''}`;

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                layoutMenu.querySelectorAll('.layout-option-item').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                if (typeof localStorage !== 'undefined') {
                    localStorage.setItem('typingDostLayout_' + currentLang, layoutId);
                }
                updateOnScreenKeyboardLayout(layoutId, currentLang, false);
                
                // Update trigger label with active font & layout
                const savedFId = localStorage.getItem('typingDostFont_' + currentLang);
                const curFont = fonts.find(f => f.id === savedFId) || fonts[0];
                if (layoutName) {
                    layoutName.textContent = curFont.name + ' (' + meta.name.split(' ')[0] + ')';
                }
                if (layoutIcon) {
                    layoutIcon.textContent = meta.icon || curFont.icon;
                }
                
                layoutMenu.classList.add('hidden');
                layoutTrigger.classList.remove('open');
            });
            layoutMenu.appendChild(btn);
        });
    }

    // Restore saved font & layout
    const savedFontId = (typeof localStorage !== 'undefined') ? localStorage.getItem('typingDostFont_' + currentLang) : null;
    const activeFont = fonts.find(f => f.id === savedFontId) || fonts[0];
    applyTypingFont(activeFont.family, currentLang);

    // Highlight active font
    const activeFontBtn = layoutMenu.querySelector(`.font-option-item[data-font-id="${activeFont.id}"]`);
    if (activeFontBtn) activeFontBtn.classList.add('active');

    const savedLayoutId = (typeof localStorage !== 'undefined') ? (localStorage.getItem('typingDostLayout_' + currentLang) || supportedLayouts[0]) : supportedLayouts[0];
    updateOnScreenKeyboardLayout(savedLayoutId, currentLang, false);

    // Highlight active layout
    const activeLayoutBtn = layoutMenu.querySelector(`.layout-option-item[data-layout-id="${savedLayoutId}"]`);
    if (activeLayoutBtn) activeLayoutBtn.classList.add('active');

    const curMeta = LAYOUT_META[savedLayoutId] || { icon: '⌨️', name: savedLayoutId };
    if (layoutName) layoutName.textContent = activeFont.name + ' (' + curMeta.name.split(' ')[0] + ')';
    if (layoutIcon) layoutIcon.textContent = activeFont.icon;

    // Click trigger setup with single robust handler
    layoutTrigger.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        const isHidden = layoutMenu.classList.contains('hidden');
        document.querySelectorAll('.theme-menu, .practice-menu').forEach(m => {
            if (m !== layoutMenu) m.classList.add('hidden');
        });
        if (isHidden) {
            layoutMenu.classList.remove('hidden');
            layoutTrigger.classList.add('open');
        } else {
            layoutMenu.classList.add('hidden');
            layoutTrigger.classList.remove('open');
        }
    };

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!layoutControl.contains(e.target)) {
            layoutMenu.classList.add('hidden');
            layoutTrigger.classList.remove('open');
        }
    });
}

if (typeof window !== 'undefined') {
    window.initFontSelector = initFontSelector;
    window.applyTypingFont = applyTypingFont;
    window.updateOnScreenKeyboardLayout = updateOnScreenKeyboardLayout;
    window.getLanguageKeymap = getLanguageKeymap;
}

// Auto-run on DOM ready and immediately if already ready
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            const active = (typeof localStorage !== 'undefined' ? localStorage.getItem('typingDostLang') : 'english') || 'english';
            initFontSelector(active);
        });
    } else {
        const active = (typeof localStorage !== 'undefined' ? localStorage.getItem('typingDostLang') : 'english') || 'english';
        initFontSelector(active);
    }
}
