const cacheName = 'app-v29';
const urlsToCache = [
  '/',
  '/index.html'
];
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => Promise.all(keyList.map((key) => {
      if (key !== cacheName) {
        return caches.delete(key);
      }
    })))
  );
  return self.clients.claim();
});
