self.addEventListener('install', (e) => {
  console.log('install');
  e.waitUntil(
    caches.open('fox-store').then((cache) =>
      cache.addAll([
        // '/',
        // '/index.html',
        // '/index.js',
        // '/style.css',
        // '/images/fox1.jpg',
        // '/images/fox2.jpg',
        // '/images/fox3.jpg',
        // '/images/fox4.jpg',
      ])
    )
  );
});

self.addEventListener('fetch', (e) => {
  console.log('fetch');
  // console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
