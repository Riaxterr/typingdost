/**
 * TypingDost Pure Phonetic Multi-Language Font & Keyboard Manager (fontSystem.js)
 * Universal Phonetic English QWERTY Engine for all 14 languages.
 * Clean Latin Typography (Space Grotesk, Roboto Mono, Outfit, Inter, Fira Code).
 */

// Immediate early URL-based Language Detection (Synchronous before any render)
(function() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined' && window.location) {
        const pageCfg = window.TYPINGDOST_PAGE_CONFIG || null;
        const pathname = (window.location.pathname || '').toLowerCase();
        let detected = null;
        if (pageCfg && pageCfg.lang) {
            detected = pageCfg.lang.toLowerCase();
        } else if (pathname.includes('tamil-typing-test')) detected = 'tamil';
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
        else if (
            pathname.includes('english-typing-test') ||
            pathname.includes('-minute-typing-test') ||
            pathname.includes('ssc-chsl-typing-test') ||
            pathname.includes('ssc-cgl-typing-test') ||
            pathname.includes('rrb-ntpc-typing-test') ||
            pathname.includes('bsf-hcm-typing-test') ||
            pathname.includes('high-court-typing-test') ||
            pathname.includes('coding-typing-test') ||
            pathname.includes('data-entry-typing-test') ||
            pathname.includes('touch-typing-lessons')
        ) {
            detected = 'english';
        }
        
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang) detected = urlLang.toLowerCase();

        if (detected) {
            try { localStorage.setItem('typingDostLang', detected); } catch(e){}
            try { localStorage.setItem('typingDostLayout_' + detected, 'phonetic'); } catch(e){}
        }
    }
})();

// Standard modern Latin typography across ALL languages
const STANDARD_FONTS = [
    { id: 'f-space', name: 'Space Grotesk', family: "'Space Grotesk', sans-serif", icon: '🚀', badge: 'Default' },
    { id: 'f-roboto', name: 'Roboto Mono', family: "'Roboto Mono', monospace", icon: '🔤', badge: 'Mono' },
    { id: 'f-outfit', name: 'Outfit', family: "'Outfit', sans-serif", icon: '✨', badge: 'Modern' },
    { id: 'f-inter', name: 'Inter', family: "'Inter', sans-serif", icon: '💡', badge: 'Clean' },
    { id: 'f-fira', name: 'Fira Code', family: "'Fira Code', monospace", icon: '💻', badge: 'Code' }
];

const LANG_FONTS = {
    english: STANDARD_FONTS,
    hinglish: STANDARD_FONTS,
    hindi: STANDARD_FONTS,
    bengali: STANDARD_FONTS,
    marathi: STANDARD_FONTS,
    tamil: STANDARD_FONTS,
    telugu: STANDARD_FONTS,
    gujarati: STANDARD_FONTS,
    kannada: STANDARD_FONTS,
    malayalam: STANDARD_FONTS,
    odia: STANDARD_FONTS,
    punjabi: STANDARD_FONTS,
    urdu: STANDARD_FONTS,
    assamese: STANDARD_FONTS,
    arabic: STANDARD_FONTS,
    japanese: STANDARD_FONTS
};

const LAYOUT_META = {
    'phonetic': { icon: '🔤', name: 'Phonetic (English QWERTY)', badge: 'Phonetic' }
};

const LANGUAGE_KEYBOARDS = {};

function injectIndianFonts(lang) {
    // Pure Phonetic Latin fonts are already preloaded in site layout
}

function applyTypingFont(fontFamily, lang) {
    if (typeof document === 'undefined') return;
    const safeFamily = fontFamily || "'Space Grotesk', sans-serif";
    const typingArea = document.getElementById('text-display');
    const typingInput = document.getElementById('typing-input');
    if (typingArea) typingArea.style.fontFamily = safeFamily;
    if (typingInput) typingInput.style.fontFamily = safeFamily;
    const wordsWrapper = document.getElementById('words');
    if (wordsWrapper) wordsWrapper.style.fontFamily = safeFamily;
}

function getActiveFontForLanguage(lang) {
    const fonts = LANG_FONTS[lang] || STANDARD_FONTS;
    const savedId = (typeof localStorage !== 'undefined') ? localStorage.getItem('typingDostFont_' + lang) : null;
    return (savedId && fonts.find(f => f.id === savedId)) || fonts[0];
}

function getLanguageKeymap(lang, layoutId, isShift = false) {
    return null;
}

function updateOnScreenKeyboardLayout(layoutId, lang, isShift = false) {
    if (typeof document === 'undefined') return;
    const keyElements = document.querySelectorAll('#live-keyboard-guide .key[data-keycode], .learning-visualizer .key[data-keycode]');

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

    if (keyElements && keyElements.length > 0) {
        keyElements.forEach(keyEl => {
            const code = keyEl.getAttribute('data-keycode');
            if (!code) return;
            const qLabel = labels[code];
            if (qLabel) keyEl.textContent = qLabel;
            keyEl.classList.remove('mapped-key');
            keyEl.style.fontFamily = "var(--font-mono, monospace)";
            keyEl.style.fontSize = '';
            keyEl.style.color = isShift ? '#ffaa00' : '';
        });
    }
    syncMobileVirtualKeyboard(layoutId, lang, isShift);
}

function syncMobileVirtualKeyboard(layoutId, lang, isShift = false) {
    if (typeof document === 'undefined') return;
    const vKeys = document.querySelectorAll('#mobile-virtual-keyboard .v-key[data-key]');
    if (!vKeys || vKeys.length === 0) return;
    vKeys.forEach(vk => {
        const key = vk.getAttribute('data-key');
        if (key && key.length === 1 && /[a-zA-Z]/.test(key)) {
            vk.textContent = isShift ? key.toUpperCase() : key.toLowerCase();
            vk.style.fontFamily = "var(--font-mono, monospace)";
        }
    });
}

function ensureLayoutControlGroup() {
    if (typeof document === 'undefined') return null;
    let group = document.getElementById('layout-control-group');
    if (group) return group;
    const container = document.querySelector('.textbox-controls-container');
    if (!container) return null;

    group = document.createElement('div');
    group.className = 'lang-control-group';
    group.id = 'layout-control-group';
    group.innerHTML = `
        <button class="theme-trigger textbox-style-btn" id="layout-trigger" title="Select Typing Font" aria-haspopup="listbox" aria-expanded="false">
            <span id="current-layout-icon">🔤</span>
            <span id="current-layout-name">Font</span>
            <span class="dropdown-arrow">▼</span>
        </button>
        <div class="theme-menu hidden" id="layout-menu" role="listbox" aria-label="Font Selector"></div>
    `;
    const styleContainer = container.querySelector('.textbox-style-container');
    if (styleContainer) {
        container.insertBefore(group, styleContainer);
    } else {
        container.appendChild(group);
    }
    return group;
}

function initFontSelector(lang) {
    if (typeof document === 'undefined') return;
    const pageCfg = (typeof window !== 'undefined' && window.TYPINGDOST_PAGE_CONFIG) ? window.TYPINGDOST_PAGE_CONFIG : null;
    const currentLang = (lang || (pageCfg && pageCfg.lang) || (typeof localStorage !== 'undefined' ? localStorage.getItem('typingDostLang') : 'english') || 'english').toLowerCase();

    const layoutControl = ensureLayoutControlGroup();
    const layoutMenu    = document.getElementById('layout-menu');
    const layoutTrigger = document.getElementById('layout-trigger');
    const layoutIcon    = document.getElementById('current-layout-icon');
    const layoutName    = document.getElementById('current-layout-name');

    const fonts = LANG_FONTS[currentLang] || STANDARD_FONTS;
    const savedFontId = (typeof localStorage !== 'undefined') ? localStorage.getItem('typingDostFont_' + currentLang) : null;
    let activeFont = fonts.find(f => f.id === savedFontId) || fonts[0];

    applyTypingFont(activeFont.family, currentLang);
    updateOnScreenKeyboardLayout('phonetic', currentLang, false);

    if (!layoutControl || !layoutMenu || !layoutTrigger) return;

    layoutControl.style.display = 'inline-flex';
    layoutControl.style.alignItems = 'center';
    layoutMenu.innerHTML = '';

    const fontHeader = document.createElement('div');
    fontHeader.className = 'dropdown-section-header';
    fontHeader.innerHTML = '🔤 Select Typography Font';
    layoutMenu.appendChild(fontHeader);

    fonts.forEach(font => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'theme-item layout-item font-option-item';
        btn.setAttribute('data-font-id', font.id);
        btn.setAttribute('data-font-family', font.family);
        btn.style.fontFamily = font.family;
        btn.innerHTML = `<span class="theme-item-icon">${font.icon}</span> <span class="item-label-text">${font.name}</span>${font.badge ? ' <small class="layout-badge badge-primary">'+font.badge+'</small>' : ''}`;

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            layoutMenu.querySelectorAll('.font-option-item').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('typingDostFont_' + currentLang, font.id);
            }
            applyTypingFont(font.family, currentLang);
            if (layoutName) layoutName.textContent = font.name.split(' ')[0];
            if (layoutIcon) layoutIcon.textContent = font.icon;
            layoutMenu.classList.add('hidden');
            layoutTrigger.classList.remove('open');
            layoutTrigger.setAttribute('aria-expanded', 'false');
        });
        layoutMenu.appendChild(btn);
    });

    const activeFontBtn = layoutMenu.querySelector(`.font-option-item[data-font-id="${activeFont.id}"]`);
    if (activeFontBtn) activeFontBtn.classList.add('active');

    if (layoutName) layoutName.textContent = activeFont.name.split(' ')[0];
    if (layoutIcon) layoutIcon.textContent = activeFont.icon;

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
            layoutTrigger.setAttribute('aria-expanded', 'true');
        } else {
            layoutMenu.classList.add('hidden');
            layoutTrigger.classList.remove('open');
            layoutTrigger.setAttribute('aria-expanded', 'false');
        }
    };

    if (!window.__tdLayoutMenuOutsideBound) {
        window.__tdLayoutMenuOutsideBound = true;
        document.addEventListener('click', (e) => {
            const lc = document.getElementById('layout-control-group');
            const lm = document.getElementById('layout-menu');
            const lt = document.getElementById('layout-trigger');
            if (lc && lm && !lc.contains(e.target)) {
                lm.classList.add('hidden');
                if (lt) {
                    lt.classList.remove('open');
                    lt.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }
}

if (typeof window !== 'undefined') {
    window.initFontSelector = initFontSelector;
    window.applyTypingFont = applyTypingFont;
    window.updateOnScreenKeyboardLayout = updateOnScreenKeyboardLayout;
    window.syncMobileVirtualKeyboard = syncMobileVirtualKeyboard;
    window.getLanguageKeymap = getLanguageKeymap;
    window.injectIndianFonts = injectIndianFonts;
    window.LANG_FONTS = LANG_FONTS;
    window.LAYOUT_META = LAYOUT_META;
}

if (typeof document !== 'undefined') {
    const runInit = () => {
        const pageCfg = window.TYPINGDOST_PAGE_CONFIG || null;
        const active = (pageCfg && pageCfg.lang) || (typeof localStorage !== 'undefined' ? localStorage.getItem('typingDostLang') : 'english') || 'english';
        initFontSelector(active);
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runInit);
    } else {
        runInit();
    }
}
