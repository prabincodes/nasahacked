const staticCacheName = "daily-rashifal-by-prabin";
const assets = [
"/",
"/icon-192x192.png",
"/icon-256x256.png",
"/icon-384x384.png",
"/icon-512x512.png",
"/img/favicon.png",
"/index.html",
"/js/app.js",
"/css/styles.css"
  ];
// install event
self.addEventListener("install", evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});
// activate event
self.addEventListener("activate", evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});
// fetch event
self.addEventListener("fetch", evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(staticCacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          return fetchRes;
        })
      });
    })
  );
});
