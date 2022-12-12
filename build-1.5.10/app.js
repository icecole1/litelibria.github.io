var query,
		href,
		page;

// Переменные запросов API
var UpdatesList;
var NEWSList;
var ScheduleList;
var VideoList;
var RecomendList;
var HistoryList;
var GenresList;
var ColorGenresList = ["A83845", "2E708A", "2D8653", "2A417E", "A953C6", "4BC3B5", "CCC966", "A3D175", "2A4C7E", "592E8A", "A471D0", "90A0DA", "90A0DA", "90A0DA", "6CBF40", "97C247", "75D1A0", "6E91CF", "6272CB", "34819D", "1D5849", "CABAE8", "BEA7E2", "321C54", "522163", "8A2E8A", "A838A5", "795EC9", "CF6E81",];
var CatalogsList;
var FavoritesList;
var SearchList;
var SeasonList;

// Переменная для видимости фильтров
styleFilter = 1;

// Запуск функции initApp при первой загрузке страницы
window.addEventListener('load', initApp());

// Запуск функции replaceRoute при переходе по истории запросов
window.addEventListener('popstate', (event) => {
	replaceRoute(event.state);
});

// Фунцкия получения адреса текущей страницы и запроса query
function parseLocationURL(){
	// Получение адреса текущей страницы
	if(window.location.pathname != "/"){
		href = window.location.pathname;
		if(document.location.search){
			var paramsString = document.location.search;
		}
	} else {
		var hrefLoad = window.location.hash.replace('#', '').split("?");
		href = hrefLoad[0];
		paramsString = '?'+hrefLoad[1];
	}

	// Получение запроса query
	return new URLSearchParams(paramsString);
}

function parseURL(){
	// Получение адреса текущей страницы
	if(window.location.pathname != "/"){
		href = window.location.pathname;
		if(document.location.search){
			var paramsString = document.location.search;
		}
	} else {
		var hrefLoad = window.location.hash.replace('#', '').split("?");
		href = hrefLoad[0];
		paramsString = '?'+hrefLoad[1];
	}

	// Получение запроса query
	var searchParams = new URLSearchParams(paramsString);


	if(searchParams.get("id") != null || searchParams.get("nameT") != null || searchParams.get("year") != null || searchParams.get("code") != null || searchParams.get("genres") != null || searchParams.get("voice") != null || searchParams.get("timing") != null || searchParams.get("translator") != null || searchParams.get("editing") != null || searchParams.get("decor") != null || searchParams.get("type") != null || searchParams.get("q") != null){
		query = {
			'id': searchParams.get("id"),
			'nameT': searchParams.get("nameT"),
			'year': searchParams.get("year"),
			'code': searchParams.get("code"), 
			'genres': searchParams.get("genres"),
			'voice': searchParams.get("voice"),
			'timing': searchParams.get("timing"),
			'translator': searchParams.get("translator"),
			'editing': searchParams.get("editing"),
			'decor': searchParams.get("decor"),
			'type': searchParams.get("type"),
			'search': searchParams.get("q")
		};

		removeNulls(query)

	} else {
		query = null;
	}
}

// Функция загрузки приложения 
// 1. Конвертация истории PlayerJS в историю Приложения
// 2. Получаем адрес страницы и запросы query
// 3. Запуск функции загрузки нужной страницы
function initApp() {
	historyLoad();
	parseURL();
	paramsLoad();
	goRoute(href, query);

	if(!localStorage.getItem('postersMode')){
		localStorage.setItem('postersMode', 'webp')
	}

	if(localStorage.getItem('iOS_nav') == 'true'){
		document.getElementById('navigation_block').dataset.state = 'iOS';
	}
}

// Обязательные функции, запросы и т.д.
function paramsLoad(){
	if (localStorage.getItem('my_theme') == 'theme1') {
		document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: light)"]').setAttribute("content", "#fbfbfb");
		document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: dark)"]').setAttribute("content", "#fbfbfb");
	} else if(localStorage.getItem('my_theme') == 'theme2') {
		document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: light)"]').setAttribute("content", "#1c1c19");
		document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: dark)"]').setAttribute("content", "#1c1c19");
	} else {
		document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: light)"]').setAttribute("content", "#fbfbfb");
		document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: dark)"]').setAttribute("content", "#1c1c19");
	}
}
function paramsRoute(){
	if(player) player.api("stop");

	document.title = 'LiteLibria';
}

function pageColor(){
	document.getElementById('b_page_home').setAttribute("style", "fill: var(--ColorThemes3);");
	document.getElementById('b_page_catalog').setAttribute("style", "fill: var(--ColorThemes3);");
	document.getElementById('b_page_favorites').setAttribute("style", "fill: var(--ColorThemes3);");
	document.getElementById('b_page_search').setAttribute("style", "fill: var(--ColorThemes3);");
	document.getElementById('b_page_options').setAttribute("style", "fill: var(--ColorThemes3);");
}

// Функция запроса нужного контента
function switchRoute(page, query, data){
	styleFilter = 1; // Сбросить видимости фильтров
	pageColor()
	switch (page) {
		case '/release':
			page_release(query.id, data)
			break;

		case '/catalog':
			page_catalog();
			document.getElementById('b_page_catalog').setAttribute("style", "fill: var(--PrimaryColor);");
			break;

		case '/favorites':
			page_favorites();
			document.getElementById('b_page_favorites').setAttribute("style", "fill: var(--PrimaryColor);");
			break;

		case '/options':
			page_options();
			document.getElementById('b_page_options').setAttribute("style", "fill: var(--PrimaryColor);");
			break;

		case '/myHistory':
			page_myHistory();
			break;

		case '/schedule':
			page_schedule();
			break;	

		case '/season':
			page_season(query);
			break;	
		
		case '/search':
			page_search(query.search);
			document.getElementById('b_page_search').setAttribute("style", "fill: var(--PrimaryColor);");
			break;	
				
		default:
			page_line();
			document.getElementById('b_page_home').setAttribute("style", "fill: var(--PrimaryColor);");
			break;
	}
}

// Функция роутера управляемая историей браузера
function replaceRoute(state){
	parseURL();
	paramsRoute();
	switchRoute(href, query);
	setTimeout(function(){
		window.scroll(0, state.position);
	}, 2)
}

// Функция роутера управляемая приложением и адресной строкой
function goRoute(namePage, querys, data = null) {
	// Изменяет историю текущей страницы
	// Добавляем позицию скролла 
	history.replaceState({'position': window.pageYOffset}, null);
	paramsRoute();
	href = namePage;
	query = querys;
	switchRoute(namePage, query, data);

	var url = namePage;
	if (query != null) {
		if (query.id != null) {
			url += `?id=${query.id}`
		}
		if (query.search != null) {
			url += `?q=${query.search}`
		}
		
		if (query.year != null) {
			url += `?year=${query.year}`
		}
		if (query.code != null) {
			if(query.year != null) url += `&code=${query.code}`
			else url += `?code=${query.code}`
		}
		if (query.genres != null) {
			url += `?genres=${query.genres}`
		}
		if (query.voice != null) {
			url += `?voice=${query.voice}`
		}
		if (query.timing != null) {
			url += `?timing=${query.timing}`
		}
		if (query.translator != null) {
			url += `?translator=${query.translator}`
		}
		if (query.editing != null) {
			url += `?editing=${query.editing}`
		}
		if (query.decor != null) {
			url += `?decor=${query.decor}`
		}
		if (query.type != null) {
			url += `?type=${query.type}`
		}
	}

	// Добавляем запись новой страницы в историю 
	history.pushState({'position': 0}, null, url);
	window.scroll(0, 0);
}

// Функция удаления null из масива
function removeNulls(obj){
	var isArray = obj instanceof Array;
	for (var k in obj){
		if (obj[k]===null) isArray ? obj.splice(k,1) : delete obj[k];
		else if (typeof obj[k]=="object") removeNulls(obj[k]);
	}
}

// Функция обработки кнопки поиска
function search_b() {
  var search_q = document.getElementById("search_q").value;
	goRoute('/search', {search: `${search_q}`})
	document.getElementById('search_list').dataset.state = '';
}

// Функция обработки кнопки обновить
function appReloadApi(){
	// Переменные запросов API
	UpdatesList = null;
	NEWSList = null;
	ScheduleList = null;
	VideoList = null;
	RecomendList = null;
	CatalogsList = null;
	FavoritesList = null;
	SearchList = null;
	SeasonList = null;

	paramsRoute();
	switchRoute(href, query);
}

// Проверка того, что наш браузер поддерживает Service Worker API.
if ('serviceWorker' in navigator) {
	// Отображать уведомление, когда доступно новое обновление
	var presentUpdateAvailable = serviceWorker => {
		document.getElementById('update-banner-1').dataset.state = 'updateavailable';
		document.querySelector('#update-banner-1 .headline').innerHTML = 'Доступно обновление';
		document.querySelector('#update-banner-1 .subhead').innerHTML = 'Нажмите, чтобы обновить приложение до последней версии!';
		document.getElementById('update-banner-1').addEventListener('click', clickEvent => {
			document.getElementById('update-banner-1-icon').style.display = "block";
			document.querySelector('#update-banner-1 .headline').innerHTML = '';
			document.querySelector('#update-banner-1 .subhead').innerHTML = '';
			serviceWorker.postMessage('skipWaiting');
		});

		document.getElementById('update-banner-2').dataset.state = 'updateavailable';
		document.querySelector('#update-banner-2 .headline').innerHTML = 'Доступно обновление';
		document.querySelector('#update-banner-2 .subhead').innerHTML = 'Нажмите, чтобы обновить приложение до последней версии!';
		document.getElementById('update-banner-2').addEventListener('click', clickEvent => {
			document.getElementById('update-banner-2-icon').style.display = "block";
			document.querySelector('#update-banner-2 .headline').innerHTML = '';
			document.querySelector('#update-banner-2 .subhead').innerHTML = '';
			serviceWorker.postMessage('skipWaiting');
		});
	}

	// Регистрация Service Worker
	navigator.serviceWorker.register('./sw.js')
	.then(registration => {

		// Отображение уведомления, если обновление ожидает установки
		if (registration.waiting) presentUpdateAvailable(registration.waiting);

		// Мы ждем UpdateFoundEvent, который запускается каждый раз, когда приобретается новый Service Worker.
		registration.onupdatefound = updatefoundevent => {
			// Игнорировать событие, если это наш первый Service Worker и, следовательно, не обновление.
			if (!registration.active) return;

			// Слушаем любые изменения состояния нового воркера.
			registration.installing.addEventListener('statechange', statechangeevent => {
					if (statechangeevent.target.state !== 'installed') return;
					presentUpdateAvailable(registration.waiting);
			});
		};

		// Мы ждем ControllerEvent, который запускается, когда документ получает новый Service Worker.
		navigator.serviceWorker.addEventListener('controllerchange', controllerchangeevent => {

				// Ждём новый Service Worker
				controllerchangeevent.target.ready.then(registration => {
						// Перезагружаем страницу
						if (!window.isReloading) {
								window.isReloading = true;
								window.location.reload();
						}
						
				});
		});

		// Сообщение об обновлении версии приложения
		navigator.serviceWorker.addEventListener('message', (event) => {
			localStorage.setItem('mess_update_SW', event.data.msg)
		});
	});
}