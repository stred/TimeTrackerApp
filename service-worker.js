
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('timer-cache').then(function(cache) {
      return cache.addAll([
        'timing_app_pwa.html',
        'manifest.json',
        'icon-192.png',
        'icon-512.png',
        'https://cdn.jsdelivr.net/npm/chart.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
