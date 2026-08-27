/**
 * TypingDost — High-Performance Indic Phonetic Transliteration & Grapheme Engine
 * Allows users with standard QWERTY keyboards to type smoothly in Indian languages.
 */

(function(global) {
    'use strict';

    const LANG_CODE_MAP = {
        hindi: 'hi', hi: 'hi',
        urdu: 'ur', ur: 'ur',
        marathi: 'mr', mr: 'mr',
        bengali: 'bn', bn: 'bn',
        assamese: 'bn', as: 'bn',
        punjabi: 'pa', pa: 'pa',
        gujarati: 'gu', gu: 'gu',
        odia: 'or', or: 'or',
        tamil: 'ta', ta: 'ta',
        telugu: 'te', te: 'te',
        kannada: 'kn', kn: 'kn',
        malayalam: 'ml', ml: 'ml'
    };

    // Phonetic mapping definitions
    const CONSONANTS = {
        'kkh': { hi: 'क्ख', bn: 'ক্ষ', mr: 'क्ख', ta: 'க்க', te: 'క్ఖ', gu: 'ક્ખ', kn: 'ಕ್ಖ', ml: 'ക്ഖ', pa: 'ਕ੍ਖ', or: 'କ୍ଖ' },
        'krr': { hi: 'क्र', bn: 'ক্র', mr: 'क्र', ta: 'க்ர', te: 'క్ర', gu: 'ક્ર', kn: 'ಕ್ರ', ml: 'ക്ര', pa: 'ਕ੍ਰ', or: 'କ୍ର' },
        'ksh': { hi: 'क्ष', bn: 'ক্ষ', mr: 'क्ष', ta: 'க்ஷ', te: 'క్ష', gu: 'ક્ષ', kn: 'ಕ್ಷ', ml: 'ക്ഷ', pa: 'ਕ੍ਸ਼', or: 'କ୍ଷ' },
        'kya': { hi: 'क्या', bn: 'ক্যা', mr: 'क्या', ta: 'க்யா', te: 'క్యా', gu: 'ક્યા', kn: 'ಕ್ಯಾ', ml: 'ക്യാ', pa: 'ਕ੍ਯਾ', or: 'କ୍ୟା' },
        'gya': { hi: 'ज्ञा', bn: 'জ্ঞা', mr: 'ज्ञा', ta: 'க்ஞா', te: 'జ్ఞా', gu: 'જ્ઞા', kn: 'ಜ್ಞಾ', ml: 'ജ്ഞാ', pa: 'ਗ੍ਯਾ', or: 'ଜ୍ଞା' },
        'tra': { hi: 'त्र', bn: 'ত্র', mr: 'त्र', ta: 'த்ர', te: 'త్ర', gu: 'ત્ર', kn: 'ತ್ರ', ml: 'ത്ര', pa: 'ਤ੍ਰ', or: 'ତ୍ର' },
        'shh': { hi: 'ष', bn: 'ষ', mr: 'ष', ta: 'ஷ', te: 'ష', gu: 'ષ', kn: 'ಷ', ml: 'ഷ', pa: 'ਸ਼', or: 'ଷ' },
        'chh': { hi: 'छ', bn: 'ছ', mr: 'छ', ta: 'ச்ச', te: 'ఛ', gu: 'છ', kn: 'ಛ', ml: 'ഛ', pa: 'ਛ', or: 'ଛ' },
        'kh':  { hi: 'ख', bn: 'খ', mr: 'ख', ta: 'க', te: 'ఖ', gu: 'ખ', kn: 'ಖ', ml: 'ഖ', pa: 'ਖ', or: 'ଖ' },
        'gh':  { hi: 'घ', bn: 'ঘ', mr: 'घ', ta: 'க', te: 'ఘ', gu: 'ઘ', kn: 'ಘ', ml: 'ഘ', pa: 'ਘ', or: 'ଘ' },
        'ch':  { hi: 'च', bn: 'চ', mr: 'च', ta: 'ச', te: 'చ', gu: 'ચ', kn: 'ಚ', ml: 'ച', pa: 'ਚ', or: 'ଚ' },
        'jh':  { hi: 'झ', bn: 'ঝ', mr: 'झ', ta: 'ஜ', te: 'ఝ', gu: 'ઝ', kn: 'ಝ', ml: 'ഝ', pa: 'ਝ', or: 'ଝ' },
        'th':  { hi: 'थ', bn: 'থ', mr: 'थ', ta: 'த', te: 'థ', gu: 'થ', kn: 'ಥ', ml: 'ഥ', pa: 'ਥ', or: 'ଥ' },
        'dh':  { hi: 'ध', bn: 'ধ', mr: 'ध', ta: 'த', te: 'ధ', gu: 'ધ', kn: 'ಧ', ml: 'ധ', pa: 'ਧ', or: 'ଧ' },
        'ph':  { hi: 'फ', bn: 'ফ', mr: 'फ', ta: 'ப', te: 'ఫ', gu: 'ફ', kn: 'ಫ', ml: 'ഫ', pa: 'ਫ', or: 'ଫ' },
        'bh':  { hi: 'भ', bn: 'ভ', mr: 'भ', ta: 'ப', te: 'భ', gu: 'ભ', kn: 'ಭ', ml: 'ഭ', pa: 'ਭ', or: 'ଭ' },
        'sh':  { hi: 'श', bn: 'শ', mr: 'श', ta: 'ஷ', te: 'శ', gu: 'શ', kn: 'ಶ', ml: 'ശ', pa: 'ਸ਼', or: 'ଶ' },
        'ng':  { hi: 'ङ', bn: 'ঙ', mr: 'ङ', ta: 'ங', te: 'ఙ', gu: 'ઙ', kn: 'ಙ', ml: 'ങ', pa: 'ਙ', or: 'ଙ' },
        'ny':  { hi: 'ञ', bn: 'ঞ', mr: 'ञ', ta: 'ஞ', te: 'ఞ', gu: 'ઞ', kn: 'ಞ', ml: 'ഞ', pa: 'ਞ', or: 'ଞ' },
        'nj':  { hi: 'ञ', bn: 'ঞ', mr: 'ञ', ta: 'ஞ்', te: 'ఞ', gu: 'ઞ', kn: 'ಞ', ml: 'ഞ', pa: 'ਞ', or: 'ଞ' },
        'k':   { hi: 'क', bn: 'ক', mr: 'क', ta: 'க', te: 'క', gu: 'ક', kn: 'ಕ', ml: 'ക', pa: 'ਕ', or: 'କ' },
        'g':   { hi: 'ग', bn: 'গ', mr: 'ग', ta: 'க', te: 'గ', gu: 'ગ', kn: 'ಗ', ml: 'ഗ', pa: 'ਗ', or: 'ଗ' },
        'j':   { hi: 'ज', bn: 'জ', mr: 'ज', ta: 'ஜ', te: 'జ', gu: 'જ', kn: 'ಜ', ml: 'ജ', pa: 'ਜ', or: 'ଜ' },
        't':   { hi: 'त', bn: 'ত', mr: 'त', ta: 'த', te: 'త', gu: 'ત', kn: 'ತ', ml: 'ത', pa: 'ਤ', or: 'ତ' },
        'T':   { hi: 'ट', bn: 'ট', mr: 'ट', ta: 'ட', te: 'ట', gu: 'ટ', kn: 'ಟ', ml: 'ട', pa: 'ਟ', or: 'ଟ' },
        'D':   { hi: 'ड', bn: 'ড', mr: 'ड', ta: 'ட', te: 'డ', gu: 'ડ', kn: 'ಡ', ml: 'ഡ', pa: 'ਡ', or: 'ଡ' },
        'd':   { hi: 'द', bn: 'দ', mr: 'द', ta: 'த', te: 'ద', gu: 'દ', kn: 'ದ', ml: 'ദ', pa: 'ਦ', or: 'ଦ' },
        'n':   { hi: 'न', bn: 'ন', mr: 'न', ta: 'ந', te: 'న', gu: 'ન', kn: 'ನ', ml: 'ന', pa: 'ਨ', or: 'ନ' },
        'N':   { hi: 'ण', bn: 'ণ', mr: 'ण', ta: 'ண', te: 'ణ', gu: 'ણ', kn: 'ಣ', ml: 'ണ', pa: 'ਣ', or: 'ଣ' },
        'p':   { hi: 'प', bn: 'প', mr: 'प', ta: 'ப', te: 'ప', gu: 'પ', kn: 'ಪ', ml: 'പ', pa: 'ਪ', or: 'ପ' },
        'f':   { hi: 'फ़', bn: 'ফ', mr: 'फ', ta: 'ப', te: 'ఫ', gu: 'ફ', kn: 'ಫ', ml: 'ഫ', pa: 'ਫ਼', or: 'ଫ' },
        'b':   { hi: 'ब', bn: 'ব', mr: 'ब', ta: 'ப', te: 'బ', gu: 'બ', kn: 'ಬ', ml: 'ബ', pa: 'ਬ', or: 'ବ' },
        'm':   { hi: 'म', bn: 'ম', mr: 'म', ta: 'ம', te: 'మ', gu: 'મ', kn: 'ಮ', ml: 'മ', pa: 'ਮ', or: 'ମ' },
        'y':   { hi: 'य', bn: 'য', mr: 'य', ta: 'ய', te: 'య', gu: 'ય', kn: 'ಯ', ml: 'യ', pa: 'ਯ', or: 'ଯ' },
        'r':   { hi: 'र', bn: 'র', mr: 'र', ta: 'ர', te: 'ర', gu: 'ર', kn: 'ರ', ml: 'ര', pa: 'ਰ', or: 'ର' },
        'l':   { hi: 'ल', bn: 'ল', mr: 'ल', ta: 'ல', te: 'ల', gu: 'લ', kn: 'ಲ', ml: 'ല', pa: 'ਲ', or: 'ଲ' },
        'L':   { hi: 'ळ', bn: 'ল', mr: 'ळ', ta: 'ள', te: 'ళ', gu: 'ળ', kn: 'ಳ', ml: 'ള', pa: 'ਲ਼', or: 'ଳ' },
        'v':   { hi: 'व', bn: 'ভ', mr: 'व', ta: 'வ', te: 'వ', gu: 'વ', kn: 'ವ', ml: 'വ', pa: 'ਵ', or: 'ବ' },
        'w':   { hi: 'व', bn: 'ও', mr: 'व', ta: 'வ', te: 'వ', gu: 'વ', kn: 'ವ', ml: 'വ', pa: 'ਵ', or: 'ୱ' },
        's':   { hi: 'स', bn: 'স', mr: 'स', ta: 'ஸ', te: 'స', gu: 'સ', kn: 'ಸ', ml: 'സ', pa: 'ਸ', or: 'ସ' },
        'h':   { hi: 'ह', bn: 'হ', mr: 'ह', ta: 'ஹ', te: 'హ', gu: 'હ', kn: 'ಹ', ml: 'ഹ', pa: 'ਹ', or: 'ହ' },
        'z':   { hi: 'ज़', bn: 'জ', mr: 'झ़', ta: 'ஜ', te: 'జ', gu: 'ઝ', kn: 'ಜ', ml: 'സ', pa: 'ਜ਼', or: 'ଜ' },
        'q':   { hi: 'क़', bn: 'ক', mr: 'क', ta: 'க', te: 'క', gu: 'ક', kn: 'ಕ', ml: 'ക', pa: 'ਕ', or: 'କ' },
        'x':   { hi: 'क्स', bn: 'ক্স', mr: 'क्स', ta: 'க்ஸ்', te: 'క్స్', gu: 'ક્સ', kn: 'ಕ್ಸ್', ml: 'ക്സ്', pa: 'ਕ੍ਸ', or: 'କ୍ସ' }
    };

    const VOWELS_INDEPENDENT = {
        'aaa': { hi: 'आ', bn: 'আ', mr: 'आ', ta: 'ஆ', te: 'ఆ', gu: 'આ', kn: 'ಆ', ml: 'ആ', pa: 'ਆ', or: 'ଆ' },
        'aa':  { hi: 'आ', bn: 'আ', mr: 'आ', ta: 'ஆ', te: 'ఆ', gu: 'આ', kn: 'ಆ', ml: 'ആ', pa: 'ਆ', or: 'ଆ' },
        'A':   { hi: 'आ', bn: 'আ', mr: 'आ', ta: 'ஆ', te: 'ఆ', gu: 'આ', kn: 'ಆ', ml: 'ஆ', pa: 'ਆ', or: 'ଆ' },
        'ai':  { hi: 'ऐ', bn: 'ঐ', mr: 'ऐ', ta: 'ஐ', te: 'ఐ', gu: 'ઐ', kn: 'ಐ', ml: 'ഐ', pa: 'ਐ', or: 'ଐ' },
        'au':  { hi: 'औ', bn: 'ঔ', mr: 'औ', ta: 'ஔ', te: 'ఔ', gu: 'ઔ', kn: 'ಔ', ml: 'ഔ', pa: 'ਔ', or: 'ଔ' },
        'ou':  { hi: 'औ', bn: 'ঔ', mr: 'औ', ta: 'ஔ', te: 'ఔ', gu: 'ઔ', kn: 'ಔ', ml: 'ഔ', pa: 'ਔ', or: 'ଔ' },
        'ee':  { hi: 'ई', bn: 'ঈ', mr: 'ई', ta: 'ஈ', te: 'ఈ', gu: 'ઈ', kn: 'ಈ', ml: 'ഈ', pa: 'ਈ', or: 'ଈ' },
        'oo':  { hi: 'ऊ', bn: 'ঊ', mr: 'ऊ', ta: 'ஊ', te: 'ఊ', gu: 'ઊ', kn: 'ಊ', ml: 'ഊ', pa: 'ਊ', or: 'ଊ' },
        'ii':  { hi: 'ई', bn: 'ঈ', mr: 'ई', ta: 'ஈ', te: 'ఈ', gu: 'ઈ', kn: 'ಈ', ml: 'ഈ', pa: 'ਈ', or: 'ଈ' },
        'uu':  { hi: 'ऊ', bn: 'ঊ', mr: 'ऊ', ta: 'ஊ', te: 'ఊ', gu: 'ઊ', kn: 'ಊ', ml: 'ഊ', pa: 'ਊ', or: 'ଊ' },
        'ri':  { hi: 'ऋ', bn: 'ঋ', mr: 'ऋ', ta: 'ரி', te: 'ఋ', gu: 'ઋ', kn: 'ಋ', ml: 'ഋ', pa: 'ਰਿ', or: 'ଋ' },
        'a':   { hi: 'अ', bn: 'অ', mr: 'अ', ta: 'அ', te: 'అ', gu: 'અ', kn: 'ಅ', ml: 'അ', pa: 'ਅ', or: 'ଅ' },
        'i':   { hi: 'इ', bn: 'ই', mr: 'इ', ta: 'இ', te: 'ఇ', gu: 'ઇ', kn: 'ಇ', ml: 'ഇ', pa: 'ਇ', or: 'ଇ' },
        'u':   { hi: 'उ', bn: 'উ', mr: 'उ', ta: 'உ', te: 'ఉ', gu: 'ઉ', kn: 'ಉ', ml: 'ഉ', pa: 'ਉ', or: 'ଉ' },
        'e':   { hi: 'ए', bn: 'এ', mr: 'ए', ta: 'எ', te: 'ఎ', gu: 'એ', kn: 'ಎ', ml: 'എ', pa: 'ਏ', or: 'ଏ' },
        'o':   { hi: 'ओ', bn: 'ও', mr: 'ओ', ta: 'ஒ', te: 'ఒ', gu: 'ઓ', kn: 'ಒ', ml: 'ഒ', pa: 'ਓ', or: 'ଓ' },
        'E':   { hi: 'ऐ', bn: 'ঐ', mr: 'ऐ', ta: 'ஏ', te: 'ఏ', gu: 'ઐ', kn: 'ಏ', ml: 'ഏ', pa: 'ਐ', or: 'ଐ' },
        'O':   { hi: 'औ', bn: 'ঔ', mr: 'औ', ta: 'ஓ', te: 'ఓ', gu: 'ઔ', kn: 'ಓ', ml: 'ഓ', pa: 'ਔ', or: 'ଔ' }
    };

    const VOWEL_MATRAS = {
        'aaa': { hi: 'ा', bn: 'া', mr: 'ा', ta: 'ா', te: 'ా', gu: 'ા', kn: 'ಾ', ml: 'ാ', pa: 'ਾ', or: 'ା' },
        'aa':  { hi: 'ा', bn: 'া', mr: 'ा', ta: 'ா', te: 'ా', gu: 'ા', kn: 'ಾ', ml: 'ാ', pa: 'ਾ', or: 'ା' },
        'A':   { hi: 'ा', bn: 'া', mr: 'ा', ta: 'ா', te: 'ా', gu: 'ા', kn: 'ಾ', ml: 'ാ', pa: 'ਾ', or: 'ା' },
        'ai':  { hi: 'ै', bn: 'ৈ', mr: 'ै', ta: 'ை', te: 'ై', gu: 'ૈ', kn: 'ೈ', ml: 'ൈ', pa: 'ੈ', or: 'ୈ' },
        'au':  { hi: 'ौ', bn: 'ৌ', mr: 'ौ', ta: 'ௌ', te: 'ౌ', gu: 'ૌ', kn: 'ೌ', ml: 'ൌ', pa: 'ੌ', or: 'ୌ' },
        'ou':  { hi: 'ौ', bn: 'ৌ', mr: 'ौ', ta: 'ௌ', te: 'ౌ', gu: 'ૌ', kn: 'ೌ', ml: 'ൌ', pa: 'ੌ', or: 'ୌ' },
        'ee':  { hi: 'ी', bn: 'ী', mr: 'ी', ta: 'ீ', te: 'ీ', gu: 'ી', kn: 'ೀ', ml: 'ീ', pa: 'ੀ', or: 'ୀ' },
        'oo':  { hi: 'ू', bn: 'ূ', mr: 'ू', ta: 'ூ', te: 'ూ', gu: 'ૂ', kn: 'ೂ', ml: 'ൂ', pa: 'ੂ', or: 'ୂ' },
        'ii':  { hi: 'ी', bn: 'ী', mr: 'ी', ta: 'ீ', te: 'ీ', gu: 'ી', kn: 'ೀ', ml: 'ീ', pa: 'ੀ', or: 'ୀ' },
        'uu':  { hi: 'ू', bn: 'ূ', mr: 'ू', ta: 'ூ', te: 'ూ', gu: 'ૂ', kn: 'ೂ', ml: 'ൂ', pa: 'ੂ', or: 'ୂ' },
        'ri':  { hi: 'ृ', bn: 'ৃ', mr: 'ृ', ta: '்ரி', te: 'ృ', gu: 'ૃ', kn: 'ೃ', ml: 'ൃ', pa: '੍ਰਿ', or: 'ୃ' },
        'i':   { hi: 'ि', bn: 'ি', mr: 'ि', ta: 'ி', te: 'ి', gu: 'િ', kn: 'ಿ', ml: 'ി', pa: 'ਿ', or: 'ି' },
        'u':   { hi: 'ु', bn: 'ু', mr: 'ु', ta: 'ு', te: 'ు', gu: 'ુ', kn: 'ು', ml: 'ു', pa: 'ੁ', or: 'ୁ' },
        'e':   { hi: 'े', bn: 'ে', mr: 'े', ta: 'ெ', te: 'ె', gu: 'ે', kn: 'ೆ', ml: 'െ', pa: 'ੇ', or: 'େ' },
        'o':   { hi: 'ो', bn: 'ো', mr: 'ो', ta: 'ொ', te: 'ొ', gu: 'ો', kn: 'ೊ', ml: 'ൊ', pa: 'ੋ', or: 'ୋ' }
    };

    const MODIFIERS = {
        'M': { hi: 'ं', bn: 'ং', mr: 'ं', ta: 'ஂ', te: 'ం', gu: 'ં', kn: 'ಂ', ml: 'ം', pa: 'ਂ', or: 'ଂ' },
        'H': { hi: 'ः', bn: 'ঃ', mr: 'ः', ta: 'ஃ', te: 'ః', gu: 'ઃ', kn: 'ಃ', ml: 'ഃ', pa: 'ਃ', or: 'ଃ' },
        '~': { hi: 'ँ', bn: 'ঁ', mr: 'ँ', ta: 'ஂ', te: 'ఁ', gu: 'ઁ', kn: 'ಁ', ml: 'ഁ', pa: 'ਁ', or: 'ଁ' }
    };

    /**
     * Splits string into linguistic visual grapheme clusters
     */
    function splitGraphemes(str) {
        if (!str) return [];
        if (typeof Intl !== 'undefined' && Intl.Segmenter) {
            try {
                const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
                return Array.from(segmenter.segment(str), s => s.segment);
            } catch (e) {}
        }
        return [...str];
    }

    /**
     * Fast Indic Transliteration for an input word
     */
    /**
     * Fast Indic Transliteration for an input word
     */
    function transliterateWord(romanWord, lang) {
        const code = LANG_CODE_MAP[lang ? lang.toLowerCase() : ''];
        if (!code || !romanWord) return romanWord;

        let result = '';
        let i = 0;
        const len = romanWord.length;

        while (i < len) {
            // Check 3-char modifier or vowel or consonant
            const chunk3 = romanWord.substring(i, i + 3);
            const chunk2 = romanWord.substring(i, i + 2);
            const chunk1 = romanWord.substring(i, i + 1);

            // 1. Check Consonant
            let matchedConsonant = null;
            let consKey = '';

            if (CONSONANTS[chunk3] && CONSONANTS[chunk3][code]) {
                matchedConsonant = CONSONANTS[chunk3][code];
                consKey = chunk3;
            } else if (CONSONANTS[chunk2] && CONSONANTS[chunk2][code]) {
                matchedConsonant = CONSONANTS[chunk2][code];
                consKey = chunk2;
            } else if (CONSONANTS[chunk1] && CONSONANTS[chunk1][code]) {
                matchedConsonant = CONSONANTS[chunk1][code];
                consKey = chunk1;
            }

            if (matchedConsonant) {
                i += consKey.length;
                result += matchedConsonant;

                // Check following vowel/matra
                const nextChunk3 = romanWord.substring(i, i + 3);
                const nextChunk2 = romanWord.substring(i, i + 2);
                const nextChunk1 = romanWord.substring(i, i + 1);

                if (VOWEL_MATRAS[nextChunk3] && VOWEL_MATRAS[nextChunk3][code]) {
                    result += VOWEL_MATRAS[nextChunk3][code];
                    i += 3;
                } else if (VOWEL_MATRAS[nextChunk2] && VOWEL_MATRAS[nextChunk2][code]) {
                    result += VOWEL_MATRAS[nextChunk2][code];
                    i += 2;
                } else if (nextChunk1.toLowerCase() === 'a') {
                    // Inherent vowel 'a' in Indic scripts - no explicit matra needed
                    i += 1;
                } else if (VOWEL_MATRAS[nextChunk1] && VOWEL_MATRAS[nextChunk1][code]) {
                    result += VOWEL_MATRAS[nextChunk1][code];
                    i += 1;
                } else if (i < len && /[b-df-hj-np-tv-z]/i.test(nextChunk1)) {
                    // Halant (virama) between consecutive consonants
                    const halantMap = {
                        hi: '्', mr: '्', bn: '্', ta: '்', te: '్', gu: '્', kn: '್', ml: '്', pa: '੍', or: '୍', as: '্'
                    };
                    if (halantMap[code]) {
                        result += halantMap[code];
                    }
                }
                continue;
            }

            // 2. Check Independent Vowel at start or after vowel
            if (VOWELS_INDEPENDENT[chunk3] && VOWELS_INDEPENDENT[chunk3][code]) {
                result += VOWELS_INDEPENDENT[chunk3][code];
                i += 3;
                continue;
            }
            if (VOWELS_INDEPENDENT[chunk2] && VOWELS_INDEPENDENT[chunk2][code]) {
                result += VOWELS_INDEPENDENT[chunk2][code];
                i += 2;
                continue;
            }
            if (VOWELS_INDEPENDENT[chunk1] && VOWELS_INDEPENDENT[chunk1][code]) {
                result += VOWELS_INDEPENDENT[chunk1][code];
                i += 1;
                continue;
            }

            // 3. Modifiers (Anusvara / Visarga / Chandrabindu)
            if (MODIFIERS[chunk1] && MODIFIERS[chunk1][code]) {
                result += MODIFIERS[chunk1][code];
                i += 1;
                continue;
            }

            // Fallback: pass character as is (punctuation, numbers, spaces)
            result += chunk1;
            i += 1;
        }

        return result;
    }

    /**
     * Transliterate full text string
     */
    
    // Urdu Phonetic Mapping Dictionary
    const URDU_PHONETIC = {
        'aa': 'آ', 'a': 'ا', 'b': 'ب', 'bh': 'بھ', 'p': 'پ', 'ph': 'پھ',
        't': 'ت', 'th': 'تھ', 'T': 'ٹ', 'Th': 'ٹھ', 'j': 'ج', 'jh': 'جھ',
        'ch': 'چ', 'chh': 'چھ', 'h': 'ح', 'kh': 'خ', 'd': 'د', 'dh': 'دھ',
        'D': 'ڈ', 'Dh': 'ڈھ', 'z': 'ز', 'zh': 'ژ', 'r': 'ر', 'rh': 'ڑھ',
        'R': 'ڑ', 's': 'س', 'sh': 'ش', 'S': 'ص', 'Z': 'ض', 'to': 'ط',
        'zo': 'ظ', 'ai': 'ع', 'gh': 'غ', 'f': 'ف', 'q': 'ق', 'k': 'ک',
        'g': 'گ', 'l': 'ل', 'm': 'م', 'n': 'ن', 'N': 'ں', 'v': 'و',
        'w': 'و', 'o': 'و', 'u': 'و', 'oo': 'و', 'i': 'ی', 'ee': 'ی',
        'e': 'ے', 'y': 'ی', 'H': 'ہ', 'ah': 'ہ'
    };

    function transliterateUrdu(text) {
        let res = '';
        let i = 0;
        while (i < text.length) {
            // Check 3-char, 2-char, 1-char
            const c3 = text.substr(i, 3);
            const c2 = text.substr(i, 2);
            const c1 = text.substr(i, 1);
            if (URDU_PHONETIC[c3]) { res += URDU_PHONETIC[c3]; i += 3; }
            else if (URDU_PHONETIC[c2]) { res += URDU_PHONETIC[c2]; i += 2; }
            else if (URDU_PHONETIC[c1]) { res += URDU_PHONETIC[c1]; i += 1; }
            else { res += c1; i += 1; }
        }
        return res;
    }

    function transliterateText(text, lang) {
        const code = LANG_CODE_MAP[lang ? lang.toLowerCase() : ''];
        if (!text || !code) return text;
        return text.split(/(\s+)/).map(token => {
            if (/^\s+$/.test(token)) return token;
            return transliterateWord(token, code);
        }).join('');
    }

    const api = {
        splitGraphemes: splitGraphemes,
        transliterateWord: transliterateWord,
        transliterateText: transliterateText,
        isSupported: function(lang) { return Boolean(LANG_CODE_MAP[lang ? lang.toLowerCase() : '']); }
    };

    if (typeof window !== 'undefined') {
        window.TypingDostTranslit = api;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { TypingDostTranslit: api };
    }

})(typeof window !== 'undefined' ? window : global);
