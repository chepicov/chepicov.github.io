// OneSignal SDK
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

// const CACHE_NAME = 'react-pwa-cache-v1';
// const STATIC_ASSETS = [
//   '/',
//   '/index.html',
//   '/manifest.json',
//   '/favicon.ico',
//   '/logo192.png',
//   '/logo512.png'
// ];

// self.addEventListener('install', event => {
//   console.log('[SW] Install');
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(cache => {
//       return cache.addAll(STATIC_ASSETS);
//     })
//   );
//   self.skipWaiting();
// });

// self.addEventListener('activate', event => {
//   console.log('[SW] Activate');
//   event.waitUntil(
//     caches.keys().then(keys => {
//       return Promise.all(
//         keys.map(key => {
//           if (key !== CACHE_NAME) return caches.delete(key);
//         })
//       );
//     })
//   );
//   self.clients.claim();
// });

// self.addEventListener('fetch', event => {
//   if (event.request.mode === 'navigate') {
//     event.respondWith(
//       fetch(event.request).catch(() => caches.match('/index.html'))
//     );
//   } else {
//     event.respondWith(
//       caches.match(event.request).then(cached => cached || fetch(event.request))
//     );
//   }
// });
