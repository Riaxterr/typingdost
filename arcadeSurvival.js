/**
 * TypingDost - Premium UI & Desi Meme Survival Engine
 * Non-destructive add-on module
 */
(function () {
  if (window.__TD_ARCADE_INITIALIZED__) return;
  window.__TD_ARCADE_INITIALIZED__ = true;

  const TD_ARCADE = {
    enabled: false,
    memeAudioEnabled: true,
    zenModeEnabled: true,
    maxLives: 3,
    lives: 3,
    streak: 0,
    bestStreak: 0,
    zenTimeout: null,
    currentAudio: null,
    lastErrorSoundTime: 0,
    unlocked: false,

    // Existing WebP Mascots mapped to Streak/Progression tiers
    tiers: [
      { minStreak: 0,   name: "Noob Typist",   img: "typingdost_noob.webp" },
      { minStreak: 15,  name: "Caffeinating",  img: "typingdost_coffee.webp" },
      { minStreak: 35,  name: "Pro Gamer",     img: "typingdost_gamer.webp" },
      { minStreak: 60,  name: "Shadow Ninja",  img: "typingdost_ninja.webp" },
      { minStreak: 90,  name: "10x Hacker",    img: "typingdost_hacker.webp" },
      { minStreak: 130, name: "Cosmic God",   img: "typingdost_cosmic.webp" }
    ],

    // Existing Meme Audio Pool
    sounds: {
      error: [
        "memes/aayein-meme.mp3",
        "memes/duck-toy-sound.mp3",
        "memes/error_CDOxCYm.mp3",
        "memes/slap.mp3"
      ],
      milestone: [
        "memes/chaloo.mp3",
        "memes/maro-jump-sound-effect_1.mp3",
        "memes/comedy.mp3"
      ],
      gameOver: [
        "memes/faaah.mp3",
        "memes/man-screaming-aaaah.mp3"
      ]
    },

    audioCache: {},

    resolvePath(relPath) {
      const isBlog = window.location.pathname.includes('/blog/');
      return (isBlog ? '../' : '') + relPath.replace(/^(\.\.\/|\/)/, '');
    },

    init() {
      // Restore persisted Meme SFX preference if available
      try {
        const savedSFX = localStorage.getItem("typingDostMemeSFX");
        if (savedSFX === "off") {
          this.memeAudioEnabled = false;
        }
      } catch (e) {}

      document.body.classList.add("td-premium-dark");
      this.preloadAudio();
      this.injectHUD();
      this.initSmoothCaret();
      this.bindTypingListeners();
    },

    unlockAudio() {
      if (this.unlocked) return;
      this.unlocked = true;
      Object.values(this.audioCache).forEach((audio) => {
        try {
          audio.load();
        } catch (e) {}
      });
    },

    preloadAudio() {
      Object.values(this.sounds).flat().forEach((src) => {
        try {
          const audio = new Audio(this.resolvePath(src));
          audio.preload = "auto";
          audio.volume = 0.65;
          this.audioCache[src] = audio;
        } catch (e) {}
      });

      const unlock = () => {
        this.unlockAudio();
        window.removeEventListener("keydown", unlock);
        window.removeEventListener("click", unlock);
        window.removeEventListener("touchstart", unlock);
      };
      window.addEventListener("keydown", unlock, { once: true });
      window.addEventListener("click", unlock, { once: true });
      window.addEventListener("touchstart", unlock, { once: true });
    },

    stopAllSounds() {
      if (this.currentAudio) {
        try {
          this.currentAudio.pause();
          this.currentAudio.currentTime = 0;
        } catch (e) {}
        this.currentAudio = null;
      }
      Object.values(this.audioCache).forEach((audio) => {
        try {
          audio.pause();
          audio.currentTime = 0;
        } catch (e) {}
      });
    },

    playRandomSound(category) {
      // Crucial fix: ONLY depends on memeAudioEnabled!
      if (!this.memeAudioEnabled) return;

      const pool = this.sounds[category];
      if (!pool || !pool.length) return;

      const now = Date.now();
      // Throttle rapid repeated error sounds so audio doesn't stutter or overlap chaotically
      if (category === "error" && now - this.lastErrorSoundTime < 320) {
        return;
      }
      if (category === "error") {
        this.lastErrorSoundTime = now;
      }

      const randomSrc = pool[Math.floor(Math.random() * pool.length)];
      const resolvedSrc = this.resolvePath(randomSrc);

      try {
        if (this.currentAudio) {
          try {
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
          } catch (e) {}
        }

        let sound = this.audioCache[randomSrc];
        if (!sound) {
          sound = new Audio(resolvedSrc);
          sound.volume = 0.65;
          this.audioCache[randomSrc] = sound;
        } else {
          sound.currentTime = 0;
        }

        this.currentAudio = sound;
        const playPromise = sound.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } catch (err) {}
    },

    injectHUD() {
      if (document.querySelector(".td-arcade-hud")) return;

      const targetContainer =
        document.querySelector("#typing-section-wrapper") ||
        document.querySelector(".typing-section") ||
        document.querySelector(".typing-container") ||
        document.querySelector("#typing-area") ||
        document.querySelector("#standard-mode-container") ||
        document.querySelector("main") ||
        document.body;

      if (!targetContainer || !targetContainer.parentNode) return;

      const hud = document.createElement("div");
      hud.className = "td-arcade-hud";
      hud.innerHTML = `
        <div class="td-hud-left">
          <div class="td-avatar-frame" id="td-avatar-box">
            <img src="${this.resolvePath('typingdost_welcome.webp')}" alt="TypingDost Avatar" id="td-live-avatar" />
          </div>
          <div class="td-rank-info">
            <span class="td-rank-title" id="td-mode-status">Standard Mode</span>
            <span class="td-rank-name" id="td-rank-label">Welcome Dost!</span>
          </div>
        </div>

        <div class="td-hud-right">
          <div class="td-hearts" id="td-hearts-box" style="display: none;">
            <span class="td-heart">❤️</span>
            <span class="td-heart">❤️</span>
            <span class="td-heart">❤️</span>
          </div>
          <div class="td-combo-badge" id="td-combo-display">0x Streak</div>
          <button type="button" class="td-arcade-btn" id="td-toggle-arcade">🎮 Survival Mode: OFF</button>
          <button type="button" class="td-arcade-btn ${this.memeAudioEnabled ? 'active' : ''}" id="td-toggle-memes">
            ${this.memeAudioEnabled ? '🔊 Meme SFX: ON' : '🔇 Meme SFX: OFF'}
          </button>
        </div>
      `;

      targetContainer.parentNode.insertBefore(hud, targetContainer);

      // Event Listeners for HUD Controls
      const toggleArcadeBtn = document.getElementById("td-toggle-arcade");
      if (toggleArcadeBtn) {
        toggleArcadeBtn.addEventListener("click", (e) => {
          this.enabled = !this.enabled;
          e.currentTarget.classList.toggle("active", this.enabled);
          e.currentTarget.textContent = this.enabled ? "🎮 Survival Mode: ON" : "🎮 Survival Mode: OFF";
          const heartsBox = document.getElementById("td-hearts-box");
          if (heartsBox) heartsBox.style.display = this.enabled ? "flex" : "none";
          const modeStatus = document.getElementById("td-mode-status");
          if (modeStatus) modeStatus.textContent = this.enabled ? "Desi Meme Survival" : "Standard Mode";
          this.resetGame();
        });
      }

      const toggleMemesBtn = document.getElementById("td-toggle-memes");
      if (toggleMemesBtn) {
        toggleMemesBtn.addEventListener("click", (e) => {
          this.memeAudioEnabled = !this.memeAudioEnabled;
          try {
            localStorage.setItem("typingDostMemeSFX", this.memeAudioEnabled ? "on" : "off");
          } catch (err) {}
          e.currentTarget.classList.toggle("active", this.memeAudioEnabled);
          e.currentTarget.textContent = this.memeAudioEnabled ? "🔊 Meme SFX: ON" : "🔇 Meme SFX: OFF";

          if (!this.memeAudioEnabled) {
            // Instantly stop all playing meme sounds
            this.stopAllSounds();
          } else {
            // Instant feedback sound to confirm Meme SFX is working
            this.playRandomSound("milestone");
          }
        });
      }
    },

    resetGame() {
      this.lives = this.maxLives;
      this.streak = 0;
      this.updateHUD();
    },

    handleCorrectKey() {
      this.streak++;
      if (this.streak > this.bestStreak) this.bestStreak = this.streak;

      // Play milestone sound every 25 streak whenever Meme SFX is enabled
      if (this.streak > 0 && this.streak % 25 === 0) {
        this.playRandomSound("milestone");
      }
      this.updateHUD();
    },

    handleMistake() {
      this.streak = 0;
      const typingBox =
        document.querySelector(".typing-container") ||
        document.querySelector("#typing-section-wrapper") ||
        document.querySelector(".typing-section") ||
        document.querySelector("#typing-area") ||
        document.body;

      typingBox.classList.remove("td-shake");
      void typingBox.offsetWidth; // Trigger reflow
      typingBox.classList.add("td-shake");

      if (this.enabled) {
        // Survival Mode
        if (this.lives > 0) {
          this.lives--;
          if (this.lives === 0) {
            this.triggerGameOver();
          } else {
            this.playRandomSound("error");
            this.setAvatar("typingdost_determined.webp", "Watch Out!");
          }
        }
      } else {
        // Standard Mode: always play meme error sound if Meme SFX is ON
        this.playRandomSound("error");
        this.setAvatar("typingdost_determined.webp", "Watch Out!");
      }
      this.updateHUD();
    },

    triggerGameOver() {
      this.playRandomSound("gameOver");
      this.setAvatar("typingdost_rage.webp", "Game Over! (Press Esc/Restart)");
      setTimeout(() => {
        if (this.lives === 0) {
          this.resetGame();
        }
      }, 3200);
    },

    setAvatar(src, label) {
      const avatarImg = document.getElementById("td-live-avatar");
      const rankLabel = document.getElementById("td-rank-label");
      const frame = document.getElementById("td-avatar-box");
      const cleanSrc = src.replace(/^(\.\.\/|\/)/, '');

      if (avatarImg && !avatarImg.src.endsWith(cleanSrc)) {
        avatarImg.src = this.resolvePath(cleanSrc);
        if (frame) {
          frame.classList.add("level-up");
          setTimeout(() => frame.classList.remove("level-up"), 300);
        }
      }
      if (rankLabel && label) rankLabel.textContent = label;
    },

    updateHUD() {
      // Update Combo Streak
      const comboEl = document.getElementById("td-combo-display");
      if (comboEl) {
        comboEl.textContent = `${this.streak}x Streak`;
        comboEl.classList.toggle("on-fire", this.streak >= 25);
      }

      // Update Hearts
      const hearts = document.querySelectorAll("#td-hearts-box .td-heart");
      hearts.forEach((h, idx) => {
        h.classList.toggle("lost", idx >= this.lives);
      });

      // Update Mascot Tier based on streak
      if (this.lives > 0) {
        let currentTier = this.tiers[0];
        for (const tier of this.tiers) {
          if (this.streak >= tier.minStreak) currentTier = tier;
        }
        this.setAvatar(currentTier.img, currentTier.name);
      }
    },

    initSmoothCaret() {
      const wordsBox =
        document.querySelector("#words") ||
        document.querySelector(".typing-words") ||
        document.querySelector("#text-display") ||
        document.querySelector(".text-display");
      if (!wordsBox) return;

      const mainCaret = document.getElementById("caret");
      if (mainCaret) {
        // Main caret handles motion and full FX styles seamlessly
        const duplicate = document.getElementById("td-smooth-caret");
        if (duplicate) duplicate.remove();
        return;
      }

      let caret = document.getElementById("td-smooth-caret");
      if (!caret) {
        caret = document.createElement("div");
        caret.id = "td-smooth-caret";
        wordsBox.appendChild(caret);
      }

      const updateCaretPosition = () => {
        if (!wordsBox.contains(caret)) {
          wordsBox.appendChild(caret);
        }
        const activeChar =
          wordsBox.querySelector(".char.current") ||
          wordsBox.querySelector(".letter.active") ||
          wordsBox.querySelector(".word.active") ||
          wordsBox.querySelector("span.active") ||
          wordsBox.querySelector(".active");

        if (activeChar) {
          const boxRect = wordsBox.getBoundingClientRect();
          const charRect = activeChar.getBoundingClientRect();
          const isRTL = (getComputedStyle(wordsBox).direction === 'rtl');
          const x = isRTL ? (charRect.right - boxRect.left) : (charRect.left - boxRect.left);
          const y = (charRect.top - boxRect.top) + wordsBox.scrollTop;
          caret.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          caret.style.height = `${Math.max(18, charRect.height * 0.85)}px`;
          caret.style.display = "block";
        }
      };

      // Update on typing, resizing and scrolling
      const queueCaretUpdate = () => (window.requestAnimationFrame || setTimeout)(updateCaretPosition);
      window.addEventListener("keydown", queueCaretUpdate);
      window.addEventListener("keyup", queueCaretUpdate);
      window.addEventListener("input", queueCaretUpdate);
      window.addEventListener("resize", queueCaretUpdate);
      wordsBox.addEventListener("scroll", queueCaretUpdate);

      try {
        const obs = new MutationObserver(queueCaretUpdate);
        obs.observe(wordsBox, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
      } catch (e) {}

      queueCaretUpdate();
    },

    bindTypingListeners() {
      // Zen Focus Mode triggers on typing and exits on mouse movement
      window.addEventListener("keydown", (e) => {
        if (e.key.length === 1 || e.key === "Backspace" || e.key === " ") {
          if (this.zenModeEnabled) {
            document.body.classList.add("td-zen-active", "is-typing");
            clearTimeout(this.zenTimeout);
            this.zenTimeout = setTimeout(() => {
              document.body.classList.remove("td-zen-active", "is-typing");
            }, 4000);
          }
        }
        if (e.key === "Escape") {
          this.resetGame();
        }
      });

      window.addEventListener("mousemove", () => {
        document.body.classList.remove("td-zen-active", "is-typing");
      });

      // Observe typing errors / hits
      let lastErrorCount = 0;
      let prevInputLength = 0;

      const handleInput = (e) => {
        const inputEl = e.target || document.getElementById("typing-input");
        const currentLen = (inputEl && typeof inputEl.value === 'string') ? inputEl.value.length : 0;
        const currentErrors = document.querySelectorAll(".incorrect, .error, .wrong").length;

        if (currentLen === 0 && prevInputLength > 0) {
          lastErrorCount = 0;
          prevInputLength = 0;
          this.streak = 0;
          this.updateHUD();
          return;
        }

        if (currentErrors > lastErrorCount) {
          this.handleMistake();
        } else if (currentErrors < lastErrorCount) {
          // Error undone via backspace - keep streak as is
        } else if (currentLen > prevInputLength) {
          this.handleCorrectKey();
        }

        lastErrorCount = currentErrors;
        prevInputLength = currentLen;
      };

      window.addEventListener("input", handleInput);

      const typingInput = document.getElementById("typing-input");
      if (typingInput) {
        typingInput.addEventListener("input", handleInput);
      }

      // Hook restart buttons to reset game state
      const restartBtns = document.querySelectorAll("#restart-btn, .restart-btn");
      restartBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          lastErrorCount = 0;
          prevInputLength = 0;
          this.resetGame();
        });
      });
    }
  };

  window.TD_ARCADE = TD_ARCADE;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => TD_ARCADE.init());
  } else {
    TD_ARCADE.init();
  }
})();
