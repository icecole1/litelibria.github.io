if(!localStorage.getItem("GetMirror")) localStorage.setItem("GetMirror", "true");
if(!localStorage.getItem("GetMirrorTitels")) localStorage.setItem("GetMirrorTitels", "https://api.sdev.xyz/v2.13/");
if(!localStorage.getItem("GetMirrorPosters")) localStorage.setItem("GetMirrorPosters", "https://static-libria.iss.bond");

mirror = localStorage.getItem("GetMirror");
mirror_titels_api = localStorage.getItem("GetMirrorTitels")
mirror_posters = localStorage.getItem("GetMirrorPosters");

let config = {
	'cache_prefix': 'Omega',
	'cache_version': '1.4.9',
	'g_apiKey': 'AIzaSyDnCKI8zpxJ5Iwpa7xpXx1jkKZY0Gr9yqo',
	'g_clientId': '116898535578-na8fsq2p1igt77ve615sa444ur2l1bvv.apps.googleusercontent.com',
	'domains': 'litelibria.com',
	'CustomPosters':'https://api.7o7.co',
	'webpPosters':'https://api.litelibria.com/posters/',
	'webpPreview':'https://api.litelibria.com/preview/',
	'titels_api': localStorage.getItem("GetMirror") == "true" ? mirror_titels_api : 'https://api.anilibria.tv/v2.13/',
	'posters': localStorage.getItem("GetMirror") == "true" ? mirror_posters : 'https://anilibria.tv',
}