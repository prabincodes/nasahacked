const cache = 'site-static';
const assets = [
  '/',
  '/index.html',
  '/js/app.js',
  '/js/materialize.min.js',
  '/sw.js',
  '/manifest.json',
  '/css/styles.css',
  '/css/materialize.min.css',
  ];
// install event
self.addEventListener('install', evt => {
  
  evt.waitUntil(
    caches.open(cache).then((cache) => {
  
      cache.addAll(assets);
    })
  );
});


self.addEventListener('activate', evt => {
  
});


self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
