const CACHE_NAME = 'ceiling-calc-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
  // додайте тут шляхи до CSS, JS, іконок, якщо вони є
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});