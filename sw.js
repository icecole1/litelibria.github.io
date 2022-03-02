var CACHE_PREFIX = 'Ekidona';
var CACHE_VERSION = '1.0.2';

const staticCacheName = 's-'+CACHE_PREFIX+'-'+CACHE_VERSION;
const dynamicCacheName = 'd-'+CACHE_PREFIX+'-'+CACHE_VERSION;

const assetUrls = [
  'config.js',
  '/',
  'offline.html',
  '/404.html',
  '/img/pleer.jpg',
  '/img/poster.png',
  '/img/2.gif',
  '/img/1.gif',
  '/img/icons/2_W.png',
  '/img/icons/1_W.png',
  '/img/icon/web/ios.png',
  '/img/icons/17_W.png',
  '/img/icons/18_W.png ',
  '/img/icon/web/Android.png',
  '/img/icon/web/favicon.ico',
  '/img/icon/web/icon-192.png',
  '/css/main.css',
  '/css/auto.css',
  '/css/theme2.css',
  '/css/theme1.css',
  '/js/jquery-3.1.1.min.js',

  '/build-'+CACHE_VERSION+'/theme.js',
  '/build-'+CACHE_VERSION+'/playerjs.js',
  '/build-'+CACHE_VERSION+'/script.js',
  '/build-'+CACHE_VERSION+'/release.js',
  '/build-'+CACHE_VERSION+'/home.js',
  '/build-'+CACHE_VERSION+'/favorites.js',
  '/build-'+CACHE_VERSION+'/app.js',
  '/build-'+CACHE_VERSION+'/myHistory.js',
  '/build-'+CACHE_VERSION+'/settings.js',
  '/build-'+CACHE_VERSION+'/schedule.js',
  '/build-'+CACHE_VERSION+'/search.js',
  '/build-'+CACHE_VERSION+'/catalog.js',
  '/build-'+CACHE_VERSION+'/Sync_G.js',
  '/build-'+CACHE_VERSION+'/season.js',

  'game.html',
  '/LiteGame/mp3/0.mp3',
  '/LiteGame/mp3/1.mp3',
  '/LiteGame/mp3/2.mp3',
  '/LiteGame/mp3/3.mp3',
  '/LiteGame/mp3/4.mp3',
  '/LiteGame/mp3/5.mp3',
  '/LiteGame/img/favicon.ico',
  '/LiteGame/img/apple-touch-icon.png',
  '/LiteGame/img/Logo-152.png',
  '/LiteGame/img/Logo-167.png',
  '/LiteGame/img/Logo-180.png',
  '/LiteGame/img/apple-touch-icon.png',
  '/LiteGame/awards/1.gif',
  '/LiteGame/awards/2.gif',
  '/LiteGame/awards/3.gif',
  '/LiteGame/awards/4.gif',
  '/LiteGame/awards/5.gif',
  '/LiteGame/awards/6.gif',
  '/LiteGame/awards/7.gif',
  '/LiteGame/awards/8.gif',
  '/LiteGame/awards/9.gif',
  '/LiteGame/awards/10.gif',
  '/LiteGame/script.js'
]

self.addEventListener('install', async event => {
  self.skipWaiting();
  const cache = await caches.open(staticCacheName)
  await cache.addAll(assetUrls)
})

self.addEventListener('activate', async event => {
  const cacheNames = await caches.keys()
  await Promise.all(
    cacheNames
      .filter(name => name !== staticCacheName)
      .filter(name => name !== dynamicCacheName)
      .map(name => caches.delete(name))
  )
})

self.addEventListener('fetch', event => {
  const {request} = event

  const url = new URL(request.url)
  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(request))
  } else {
    event.respondWith(networkFirst(request))
  }
})


async function cacheFirst(request) {
  const cached = await caches.match(request)
  return cached ?? await fetch(request)
}

async function networkFirst(request) {
  const cache = await caches.open(dynamicCacheName)
  try {
    const response = await fetch(request)
    if (request.destination != 'image' && request.method != 'POST' && request.url != 'https://apis.google.com/js/api.js') await cache.put(request, response.clone())
    return response
  } catch (e) {
    const cached = await cache.match(request)
    return cached ?? await caches.match('/offline.html')
  }
}
