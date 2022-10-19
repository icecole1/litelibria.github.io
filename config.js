if(!localStorage.getItem("GetMirror")) localStorage.setItem("GetMirror", "true");
mirror = localStorage.getItem("GetMirror");

let config = {
	'cache_prefix': 'Mineruva',
	'cache_version': '1.5.3',
	'g_apiKey': 'AIzaSyDnCKI8zpxJ5Iwpa7xpXx1jkKZY0Gr9yqo',
	'g_clientId': '116898535578-na8fsq2p1igt77ve615sa444ur2l1bvv.apps.googleusercontent.com',
	'domains': 'litelibria.com',
	'CustomPosters':addresses[0].previewT1MOXA,
	'webpPreview':addresses[0].previewLiteLibria,
	'webpPosters':addresses[0].optimizedImages,
	'titels_api': localStorage.getItem("GetMirror") == "true" ? mirror_api : 'https://api.anilibria.tv/v2.13/',
	'posters': localStorage.getItem("GetMirror") == "true" ? mirror_posters : 'https://anilibria.tv',
}