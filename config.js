if(!localStorage.getItem("GetMirror")) localStorage.setItem("GetMirror", "false");
if(!localStorage.getItem("GetMirrorTitels")) localStorage.setItem("GetMirrorTitels", "https://api.sdev.xyz/v2/");
if(!localStorage.getItem("GetMirrorPosters")) localStorage.setItem("GetMirrorPosters", "https://tb2og.anilib.top");

mirror = localStorage.getItem("GetMirror");
mirror_titels_api = localStorage.getItem("GetMirrorTitels")
mirror_posters = localStorage.getItem("GetMirrorPosters");
let config;

if(localStorage.getItem("GetMirror") == "true"){
	config = {
		'cache_prefix': 'Satera',
		'cache_version': '1.2.8',
		'g_apiKey': 'AIzaSyDnCKI8zpxJ5Iwpa7xpXx1jkKZY0Gr9yqo',
		'g_clientId': '116898535578-na8fsq2p1igt77ve615sa444ur2l1bvv.apps.googleusercontent.com',
		'domains': 'litelibria.com',
		'CustomPosters':'https://api.7o7.co',
		'titels_api': mirror_titels_api,
		'posters': mirror_posters,
	}
} else {
	config = {
		'cache_prefix': 'Satera',
		'cache_version': '1.2.8',
		'g_apiKey': 'AIzaSyDnCKI8zpxJ5Iwpa7xpXx1jkKZY0Gr9yqo',
		'g_clientId': '116898535578-na8fsq2p1igt77ve615sa444ur2l1bvv.apps.googleusercontent.com',
		'domains': 'litelibria.com',
		'CustomPosters':'https://api.7o7.co',
		'titels_api':'https://api.anilibria.tv/v2/',
		'posters':'https://anilibria.tv',
	}
}
