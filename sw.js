// Minimal service worker — required for PWA installability.
// Intentionally has no fetch/cache handler, so every open loads the
// latest deployed version with no cache-busting needed.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
