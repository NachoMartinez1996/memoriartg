const CACHE_NAME = "rosario-te-guio-v1";
const OFFLINE_URL = "./index.html";

const APP_ASSETS = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",
    "./logo.png",
    "./Logo.png",
    "./castagnino.jpg",
    "./catedral.jpg",
    "./coloso.jpg",
    "./elcirculo.png",
    "./escarapela.png",
    "./estevez.jpg",
    "./gigante.png",
    "./helado.jpg",
    "./independencia.jpg",
    "./monumento.jpg",
    "./puente.jpg",
    "./urquiza.jpg",
    "./Favicon/favicon.ico",
    "./Favicon/favicon-16x16.png",
    "./Favicon/favicon-32x32.png",
    "./Favicon/android-icon-144x144.png",
    "./Favicon/android-icon-192x192.png",
    "./Favicon/android-icon-512x512.png",
    "./Favicon/apple-icon-180x180.png",
    "./Favicon/ms-icon-144x144.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(APP_ASSETS))
    );

    self.skipWaiting();
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames
                    .filter(cacheName => cacheName !== CACHE_NAME)
                    .map(cacheName => caches.delete(cacheName))
            )
        ).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {
    const { request } = event;

    if (request.method !== "GET") {
        return;
    }

    const url = new URL(request.url);

    if (url.origin !== self.location.origin) {
        return;
    }

    if (request.mode === "navigate") {
        event.respondWith(
            caches.match(OFFLINE_URL).then(cachedPage => {
                if (cachedPage) {
                    return cachedPage;
                }

                return fetch(request);
            })
        );
        return;
    }

    event.respondWith(
        caches.match(request, { ignoreSearch: true }).then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(request).then(networkResponse => {
                if (!networkResponse || networkResponse.status !== 200) {
                    return networkResponse;
                }

                const responseClone = networkResponse.clone();

                caches.open(CACHE_NAME).then(cache => {
                    cache.put(request, responseClone);
                });

                return networkResponse;
            }).catch(() => {
                if (request.destination === "document") {
                    return caches.match(OFFLINE_URL);
                }

                return Response.error();
            });
        })
    );
});
