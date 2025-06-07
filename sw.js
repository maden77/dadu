self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('dadu-cache-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './A_3D-rendered_digital_image_of_a_six-sided_die_sho.png',
        './icon-192.png',
        './icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
