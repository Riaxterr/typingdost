const CACHE_NAME = "typingdost-v49";
const ASSETS_TO_CACHE = [
  "/",
  "/1-minute-typing-test/",
  "/5-minute-typing-test/",
  "/10-minute-typing-test/",
  "/ssc-chsl-typing-test/",
  "/hindi-typing-test/",
  "/certificate.html",
  "/verify/",
  "/about.html",
  "/contact.html",
  "/privacy-policy.html",
  "/terms.html",
  "/style.min.css?v=8.0",
  "/script.min.js?v=8.0",
  "/languageConfig.min.js?v=8.0",
  "/fontSystem.min.js?v=8.0",
  "/certVerify.min.js?v=8.0",
  "/manifest.json",
  "/favicon.ico",
  "/favicon-32x32.png",
  "/typingdost_brand.webp"
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

// Service Worker Fetch Event Interception (Network First for HTML/Code, Cache First for Images/Audio)
self.addEventListener("fetch", (e) => {
  if (!e.request.url.startsWith(self.location.origin)) {
    return;
  }

  const url = new URL(e.request.url);
  const isStaticMedia = url.pathname.endsWith('.png') || url.pathname.endsWith('.jpg') || url.pathname.endsWith('.jpeg') || url.pathname.endsWith('.ico') || url.pathname.endsWith('.webp') || url.pathname.endsWith('.woff2');

  if (isStaticMedia) {
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
