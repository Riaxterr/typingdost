const CACHE_NAME = "typingdost-v30";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./certificate.html",
  "./hindi-typing-test.html",
  "./bengali-typing-test.html",
  "./tamil-typing-test.html",
  "./telugu-typing-test.html",
  "./gujarati-typing-test.html",
  "./marathi-typing-test.html",
  "./kannada-typing-test.html",
  "./malayalam-typing-test.html",
  "./odia-typing-test.html",
  "./punjabi-typing-test.html",
  "./urdu-typing-test.html",
  "./assamese-typing-test.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./favicon.ico",
  "./favicon-16x16.png",
  "./favicon-32x32.png",
  "./favicon-48x48.png",
  "./favicon-96x96.png",
  "./apple-touch-icon.png",
  "./android-chrome-192x192.png",
  "./android-chrome-512x512.png",
  "./typingdost_brand.webp",
  "./typingdost_sleeping.webp",
  "./typingdost_happy.webp",
  "./typingdost_determined.webp",
  "./typingdost_cool.webp",
  "./typingdost_mindblown.webp",
  "./typingdost_zen.webp",
  "./typingdost_ninja.webp",
  "./typingdost_hacker.webp",
  "./typingdost_genius.webp",
  "./typingdost_gamer.webp",
  "./typingdost_coffee.webp",
  "./typingdost_rage.webp",
  "./typingdost_noob.webp",
  "./typingdost_racer.webp",
  "./typingdost_cosmic.webp",
  "./typingdost_monk.webp",
  "./typingdost_glitch.webp",
  "./typingdost_welcome.webp",
  "./upi_qr.webp",
  "./fontSystem.js",
  "./indicTransliteration.js",
  "./languageConfig.js"
];

// Service Worker Install Lifecycle
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Pre-caching Core Layout Assets");
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Service Worker Activation Lifecycle
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[Service Worker] Clearing Obsolete Cache Storage:", key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Service Worker Fetch Event Interception (Network First for Code, Cache First for Static Images)
self.addEventListener("fetch", (e) => {
  // Only handle standard local requests
  if (!e.request.url.startsWith(self.location.origin)) {
    return;
  }

  const url = new URL(e.request.url);
  const isStaticImage = url.pathname.endsWith('.png') || url.pathname.endsWith('.jpg') || url.pathname.endsWith('.jpeg') || url.pathname.endsWith('.ico') || url.pathname.endsWith('.webp');

  if (isStaticImage) {
    // Cache First strategy for images/icons
    e.respondWith(
      caches.match(e.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(e.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === "basic") {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(e.request, responseToCache);
            });
          }
          return networkResponse;
        });
      })
    );
  } else {
    // Network First strategy for HTML, CSS, JS, manifest, sitemap
    e.respondWith(
      fetch(e.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === "basic") {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        return caches.match(e.request);
      })
    );
  }
});
