let FinalAPI = []
let FinalBaseImages = []
let addresses = [
	{
		"tag": "mirror0",
		"desc": "Основной домен",
		"previewLiteLibria": "https://api.litelibria.com/preview/",
		"previewT1MOXA": "https://api.7u7.uk/anilibria_bot/getThumbnail/",
		"optimizedImages": "https://api.litelibria.com/posters/",
		"baseImages": "https://anilibria.tv",
		"api": "https://api.anilibria.tv/v2.13/"
	},
	{
		"tag": "mirror1",
		"desc": "Зеркало 1",
		"previewLiteLibria": "https://api.litelibria.com/preview/",
		"previewT1MOXA": "https://api.7u7.uk/anilibria_bot/getThumbnail/",
		"optimizedImages": "https://api.litelibria.com/posters/",
		"baseImages": "https://static-libria.iss.bond",
		"api": "https://litelibria.anilib.top/api/v2.13/"
	},
	{
		"tag": "mirror2",
		"desc": "Зеркало 2",
		"previewLiteLibria": "https://api.litelibria.com/preview/",
		"previewT1MOXA": "https://api.7u7.uk/anilibria_bot/getThumbnail/",
		"optimizedImages": "https://api.litelibria.com/posters/",
		"baseImages": "https://static.wwnd.space",
		"api": "https://litelibria.anilib.moe/api/v2.13/"
	},
	{
		"tag": "mirror3",
		"desc": "Зеркало 3",
		"previewLiteLibria": "https://api.litelibria.com/preview/",
		"previewT1MOXA": "https://api.7u7.uk/anilibria_bot/getThumbnail/",
		"optimizedImages": "https://api.litelibria.com/posters/",
		"baseImages": "https://static-libria.iss.bond",
		"api": "https://litelibria.anilib.one/api/v2.13/"
	},
	{
		"tag": "mirror4",
		"desc": "Зеркало 4",
		"previewLiteLibria": "https://api.litelibria.com/preview/",
		"previewT1MOXA": "https://api.7u7.uk/anilibria_bot/getThumbnail/",
		"optimizedImages": "https://api.litelibria.com/posters/",
		"baseImages": "https://static.wwnd.space",
		"api": "https://litelibria.anilib.icu/api/v2.13/"
	}
]

if(!localStorage.getItem("GetMirrorPreview")) NewMirrorPreview();
if(!localStorage.getItem("GetMirrorAPI")) NewMirrorAPI();
if(!localStorage.getItem("GetMirrorPosters")) NewMirrorPosters();

mirror_preview = localStorage.getItem("GetMirrorPreview")
mirror_api = localStorage.getItem("GetMirrorAPI")
mirror_posters = localStorage.getItem("GetMirrorPosters");

// Автоподбор зеркал

TestMirror();

function NewMirrorPreview(){
	// прервать через 30 секунду
	let controller1 = new AbortController();
	setTimeout(() => controller1.abort(), 30000);

	try {
		fetch(addresses[0].previewLiteLibria+"9200", {
			signal: controller1.signal
		})
		.then(function (response) {
			if (response.status !== 200) {
				localStorage.setItem("GetMirrorPreview", "false");
				console.log("Превью LiteLibria не доступны...");
				return
			}
			localStorage.setItem("GetMirrorPreview", "true");
		})
		.catch(function () {
			localStorage.setItem("GetMirrorPreview", "false");
			console.log("Превью LiteLibria не доступны...");
		})
	} catch(err) {
		if (err.name == 'AbortError') {
			localStorage.setItem("GetMirrorPreview", "false");
			console.log("Превью LiteLibria не доступны...");
		} else {
			throw err;
		}
	}
}

function NewMirrorAPI(){
	let urlsAPI = [
		addresses[4].api+"getUpdates",
		addresses[3].api+"getUpdates",
		addresses[2].api+"getUpdates",
		addresses[1].api+"getUpdates",
		addresses[0].api+"getUpdates"
	];

	// прервать через 30 секунду
	let controller2 = new AbortController();
	setTimeout(() => controller2.abort(), 30000);
	
	urlsAPI.map(
		url => fetch(url, {
						signal: controller2.signal
					})
					.then(function (response) {
						if (response.status !== 200) {console.log("ERROR - " + url);return}
						localStorage.setItem("GetMirrorAPI", url.replace("getUpdates", ""));
						location.reload()
					})
					.catch(function () {
						console.log("ERROR - " + url);
					})
	);
}

function NewMirrorPosters(){
	let urlsPosters = [
		addresses[0].baseImages+"/img/other/a/hero.jpg",
		addresses[1].baseImages+"/img/other/a/hero.jpg",
		addresses[2].baseImages+"/img/other/a/hero.jpg",
		addresses[3].baseImages+"/img/other/a/hero.jpg",
		addresses[4].baseImages+"/img/other/a/hero.jpg"
	];

	// прервать через 30 секунду
	let controller3 = new AbortController();
	setTimeout(() => controller3.abort(), 30000);
	
	urlsPosters.map(
		url => fetch(url, {
						signal: controller3.signal
					})
					.then(function (response) {
						if (response.status !== 200) {console.log("ERROR - " + url);return}
						localStorage.setItem("GetMirrorPosters", url.replace("/img/other/a/hero.jpg", ""));
						console.log("OK - " + url);
					})
					.catch(function () {
						console.log("ERROR - " + url);
					})
	);
}

function TestMirror(){
	NewMirrorPreview()

	// прервать через 30 секунду
	let controller1 = new AbortController();
	let controller2 = new AbortController();

	setTimeout(() => controller1.abort(), 30000);
	setTimeout(() => controller2.abort(), 30000);

	try {
		fetch(mirror_api+"getUpdates", {
			signal: controller1.signal
		})
		.then(function (response) {
			if (response.status !== 200) {
				NewMirrorAPI();
				console.log("Зеркало API не доступно...");
			}
		})
		.catch(function () {
			NewMirrorAPI();
			console.log("Зеркало API не доступно...");
		})
	} catch(err) {
		if (err.name == 'AbortError') {
			NewMirrorAPI();
			console.log("Зеркало API не отвечает...");
		} else {
			NewMirrorAPI();
			console.log("Зеркало API не доступно...");
		}
	}

	try {
		fetch(mirror_posters+"/img/other/a/hero.jpg", {
			signal: controller1.signal
		})
		.then(function (response) {
			if (response.status !== 200) {
				NewMirrorPosters();
				console.log("Зеркало статики не доступно...");
			}
		})
		.catch(function () {
			NewMirrorPosters();
			console.log("Зеркало статики не доступно...");
		})
	} catch(err) {
		if (err.name == 'AbortError') {
			NewMirrorPosters();
			console.log("Зеркало статики не отвечает...");
		} else {
			NewMirrorPosters();
			console.log("Зеркало статики не доступно...");
		}
	}
}