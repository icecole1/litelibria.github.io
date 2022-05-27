var CACHE_PREFIX = 'Satera';
var CACHE_VERSION = '1.2.12';

const staticCacheName = 's-'+CACHE_PREFIX+'-'+CACHE_VERSION;
const dynamicCacheName = 'd-'+CACHE_PREFIX+'-'+CACHE_VERSION;

const assetUrls = [
	'/',

	'meeting_tips.json',
	'version_history.json',

  'config.js',

  'offline.html',
  '/404.html',

	'/img/icons/20_W.png',
	'/img/icons/19_W.png',
  '/img/pleer.png',
  '/img/poster_mobile.png',
  '/img/poster.png',
  '/img/2.gif',
  '/img/1.gif',
	'/img/load.svg',

  '/css/style.css',
  '/css/auto.css',
  '/css/theme2.css',
  '/css/theme1.css',

  '/js/jquery-3.1.1.min.js',

  '/build-'+CACHE_VERSION+'/script.js',
  '/build-'+CACHE_VERSION+'/release.js',
  '/build-'+CACHE_VERSION+'/line.js',
  '/build-'+CACHE_VERSION+'/favorites.js',
  '/build-'+CACHE_VERSION+'/app.js',
  '/build-'+CACHE_VERSION+'/myHistory.js',
  '/build-'+CACHE_VERSION+'/option.js',
  '/build-'+CACHE_VERSION+'/schedule.js',
  '/build-'+CACHE_VERSION+'/search.js',
  '/build-'+CACHE_VERSION+'/catalog.js',
  '/build-'+CACHE_VERSION+'/Sync_G.js',
  '/build-'+CACHE_VERSION+'/season.js',

  'game.html',
  '/LiteGame/img/favicon.ico',
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
    if (request.url.substr(-5) != '.m3u8' && request.url.substr(-3) != '.ts' && request.destination != 'image' && request.method != 'POST' && request.url != 'https://apis.google.com/js/api.js') await cache.put(request, response.clone())
		return response
  } catch (e) {
    const cached = await cache.match(request)
    return cached ?? await caches.match('/offline.html')
  }
}
