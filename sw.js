const CACHE_NAME = "typingdost-v39";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./about.html",
  "./contact.html",
  "./certificate.html",
  "./privacy-policy.html",
  "./terms.html",
  "./hindi-typing-test.html",
  "./english-typing-test.html",
  "./style.min.css",
  "./script.min.js",
  "./languageConfig.min.js",
  "./indicTransliteration.js",
  "./fontSystem.min.js",
  "./manifest.json",
  "./favicon.ico",
  "./favicon-32x32.png",
  "./typingdost_brand.webp",
  "./typingdost_brand.png"
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
