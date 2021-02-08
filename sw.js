const cache = 'site-static';
const assets = [
  '/',
  '/index.html',
  '/js/app.js',
  '/js/materialize.min.js',
  '/css/styles.css',
  '/css/materialize.min.css',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
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
