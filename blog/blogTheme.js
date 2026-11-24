/**
 * TypingDost Blog Theme System
 * Synchronizes with main application theme via localStorage('typingDostTheme').
 * Provides instant on-page theme switching across all blog pages.
 */
(function() {
    const BLOG_THEMES = [
        { id: "matrix", name: "Matrix", icon: "🟩" },
        { id: "cyberpunk2077", name: "Cyberpunk 2077", icon: "💛" },
        { id: "cyberpunk", name: "Cyberpunk Neon", icon: "🌌" },
        { id: "synthwave", name: "Synthwave", icon: "🌇" },
        { id: "dracula", name: "Dracula", icon: "🧛" },
        { id: "tokyonight", name: "Tokyo Night", icon: "🗼" },
        { id: "nord", name: "Nord Frost", icon: "❄️" },
        { id: "gruvbox", name: "Gruvbox Retro", icon: "🪵" },
        { id: "monokai", name: "Monokai Neo", icon: "🌺" },
        { id: "onedark", name: "One Dark Pro", icon: "🕶️" },
        { id: "aurapurple", name: "Aura Purple", icon: "🔮" },
        { id: "naturezen", name: "Nature Zen", icon: "🌿" },
        { id: "forest", name: "Forest Moss", icon: "🌲" },
        { id: "sunsetneon", name: "Sunset Neon", icon: "🌅" },
        { id: "rosepine", name: "Rose Pine", icon: "🌹" },
        { id: "cyberlime", name: "Cyber Lime", icon: "🍋" },
        { id: "metablue", name: "Meta Blue", icon: "🔵" },
        { id: "electricblue", name: "Electric Blue", icon: "⚡" },
        { id: "hackergreen", name: "Hacker Green", icon: "💻" },
        { id: "crimsonneon", name: "Crimson Neon", icon: "🩸" },
        { id: "darkteak", name: "Dark Teak Wood", icon: "🪵" },
        { id: "coffee", name: "Coffee Cozy", icon: "☕" },
        { id: "lavender", name: "Lavender Cozy", icon: "🪻" },
        { id: "sakura", name: "Sakura Pastel", icon: "🌸" },
        { id: "oceanic", name: "Oceanic Deep", icon: "🌊" },
        { id: "frozen", name: "Frozen Ice", icon: "🧊" },
        { id: "solarizedlight", name: "Solarized Light", icon: "☀️" },
        { id: "light", name: "Paper Light", icon: "💡" },
        { id: "vintage", name: "Vintage", icon: "📜" },
        { id: "stealth", name: "Stealth Dark", icon: "🥷" }
    ];

    function applyTheme(themeId) {
        if (!themeId) themeId = 'matrix';
        document.documentElement.setAttribute('data-theme', themeId);
        if (document.body) {
            document.body.setAttribute('data-theme', themeId);
        }
        localStorage.setItem('typingDostTheme', themeId);

        const currentTheme = BLOG_THEMES.find(t => t.id === themeId) || BLOG_THEMES[0];
        const iconEl = document.getElementById('current-theme-icon');
        const nameEl = document.getElementById('current-theme-name');
        if (iconEl) iconEl.textContent = currentTheme.icon;
        if (nameEl) nameEl.textContent = currentTheme.name;

        // Update active class in menu
        const menu = document.getElementById('theme-menu');
        if (menu) {
            menu.querySelectorAll('.theme-item').forEach(btn => {
                if (btn.getAttribute('data-theme') === themeId) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }
    }

    // Apply saved theme immediately
    try {
        const saved = localStorage.getItem('typingDostTheme') || 'matrix';
        document.documentElement.setAttribute('data-theme', saved);
    } catch(e) {}

    document.addEventListener('DOMContentLoaded', function() {
        const saved = localStorage.getItem('typingDostTheme') || 'matrix';
        applyTheme(saved);

        const trigger = document.getElementById('theme-trigger');
        const menu = document.getElementById('theme-menu');

        if (menu) {
            // Populate menu
            menu.innerHTML = BLOG_THEMES.map(theme => `
                <button type="button" class="theme-item ${theme.id === saved ? 'active' : ''}" data-theme="${theme.id}">
                    <span class="theme-item-icon">${theme.icon}</span>
                    <span class="theme-item-text">${theme.name}</span>
                </button>
            `).join('');

            // Click handling
            menu.addEventListener('click', function(e) {
                const btn = e.target.closest('.theme-item');
                if (!btn) return;
                const themeId = btn.getAttribute('data-theme');
                applyTheme(themeId);
                menu.classList.add('hidden');
                if (trigger) trigger.setAttribute('aria-expanded', 'false');
            });
        }

        if (trigger && menu) {
            trigger.addEventListener('click', function(e) {
                e.stopPropagation();
                const isHidden = menu.classList.toggle('hidden');
                trigger.setAttribute('aria-expanded', String(!isHidden));
            });

            document.addEventListener('click', function(e) {
                if (!menu.contains(e.target) && !trigger.contains(e.target)) {
                    menu.classList.add('hidden');
                    trigger.setAttribute('aria-expanded', 'false');
                }
            });
        }
    });
})();
