importScripts("/tww-interactive-map/latest/precache-manifest.799003db8c60a26011c99e5bf05f7d54.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* global workbox */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('updated', () => {
  self.skipWaiting();
});

self.addEventListener('message', (event) => {
  if (event.data.action == 'skipWaiting') self.skipWaiting();
});

