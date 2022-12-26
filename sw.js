var CACHE_PREFIX = 'Mineruva';

var CACHE_VERSION_MAJOR = 1;
var CACHE_VERSION_MINOR = 5;
var CACHE_VERSION_PATCH = 13;

var CACHE_VERSION = CACHE_VERSION_MAJOR+'.'+CACHE_VERSION_MINOR+'.'+CACHE_VERSION_PATCH;

const staticCacheName = 's-'+CACHE_PREFIX+'-'+CACHE_VERSION;
const dynamicCacheName = 'd-'+CACHE_PREFIX+'-'+CACHE_VERSION_MAJOR+'.'+CACHE_VERSION_MINOR;

const assetUrls = [
	'/',

	'/index.html',

	'/js/meeting_tips.js',

  '/js/config.js',
	'/js/mirror.js',

  '/404.html',

  '/img/player.webp',
  '/img/2.gif',
  '/img/1.gif',

  '/css/style.css',
  '/css/auto.css',
  '/css/theme2.css',
  '/css/theme1.css',

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
  '/build-'+CACHE_VERSION+'/season.js',

  'game.html',
  '/LiteGame/img/favicon.ico',
  '/LiteGame/script.js'
]

self.addEventListener('install', async event => {
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
	event.waitUntil((async () => {
		if (!event.clientId) return;
		const client = await clients.get(event.clientId);
		if (!client) return;
		client.postMessage({
			msg: `${CACHE_PREFIX}-${CACHE_VERSION}`
		})
	})());
})

self.addEventListener('message', event => {
	if (event.data === 'skipWaiting') return skipWaiting();
});


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
    return cached ?? new Response("Network error happened", {
      status: 404,
      headers: { "Content-Type": "text/plain" },
    })
  }
}
