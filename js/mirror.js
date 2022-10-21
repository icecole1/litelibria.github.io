const queryAPI = "getUpdates",
			queryImage = "/img/other/a/hero.jpg",
			webpPreview = "https://api.litelibria.com/preview/";
let FinalAPI = []
let FinalBaseImages = []

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
		fetch(webpPreview+"9200", {
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

function NewMirrorAPI(q){
	let urlsAPI = [
		mirrorUrlAPI[4]+queryAPI,
		mirrorUrlAPI[3]+queryAPI,
		mirrorUrlAPI[2]+queryAPI,
		mirrorUrlAPI[1]+queryAPI,
		mirrorUrlAPI[0]+queryAPI
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
						if(q!=1) {
							location.reload()
						}
						return
					})
					.catch(function () {
						console.log("ERROR - " + url);
					})
	);
}

function NewMirrorPosters(){
	let urlsPosters = [
		mirrorUrlImages[0]+queryImage,
		mirrorUrlImages[1]+queryImage,
		mirrorUrlImages[2]+queryImage
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
						localStorage.setItem("GetMirrorPosters", url.replace(queryImage, ""));
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
			}
		})
		.catch(function () {
			NewMirrorAPI();
		})
	} catch(err) {
		if (err.name == 'AbortError') {
			NewMirrorAPI();
			console.log("Зеркало API не отвечает...");
		} else {
			NewMirrorAPI();
		}
	}

	try {
		fetch(mirror_posters+queryImage, {
			signal: controller1.signal
		})
		.then(function (response) {
			if (response.status !== 200) {
				NewMirrorPosters();
			}
		})
		.catch(function () {
			NewMirrorPosters();
		})
	} catch(err) {
		if (err.name == 'AbortError') {
			NewMirrorPosters();
			console.log("Зеркало статики не отвечает...");
		} else {
			NewMirrorPosters();
		}
	}
}