self.addEventListener('install', function (event) {
  console.log('SW installed');
  event.waitUntil(
    caches.open('static').then(function (cache) {
      cache.addAll([
        '/',
        '/index.html',
        './js/index.js',
        './css/style.min.css',
        './css/style.min.css.map',
        './img/daycare-logo_adobe_express.png',
        './img/ofsted/ofsted.svg',
        'https://fonts.googleapis.com/css2?family=Abel&family=Festive&family=Noto+Sans:ital,wght@0,400;1,700&family=Ole&family=Poppins:wght@300;400;600&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css',
      ]);
    })
  );
});

self.addEventListener('activate', function (event) {
  console.log('SW activated');
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (res) {
      if (res) {
        return res;
      } else {
        return fetch(event.request);
      }
    })
  );
});
