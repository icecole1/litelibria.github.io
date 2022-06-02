var query,
		href;

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

// Запуск функции initApp при первой загрузке страницы
window.addEventListener('load', initApp());

// Запуск функции replaceRoute при переходе по истории запросов
window.addEventListener('popstate', (event) => {
	replaceRoute(event.state);
});

// Фунцкия получения адреса текущей страницы и запроса query
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
	} else {
		query = null;
	}
}

// Функция загрузки приложения 
// 1. Получаем адрес страницы и запросы query
// 2. Запуск функции загрузки нужной страницы
function initApp() {
	parseURL();
	goRoute(href, query);
}

initApp.onload = function() {
  goRoute(href, query);
};

// Обязательные функции, запросы и т.д.
function paramsRoute(){
	if(player) player.api("stop");

	document.title = 'LiteLibria';

	document.getElementById('content_release').setAttribute("style", "display: none;");
	document.getElementById('content_all').setAttribute("style", "display: block;");
}

function pageColor(){
	document.getElementById('b_page_home').setAttribute("style", "fill: var(--ColorThemes3);");
	document.getElementById('b_page_catalog').setAttribute("style", "fill: var(--ColorThemes3);");
	document.getElementById('b_page_favorites').setAttribute("style", "fill: var(--ColorThemes3);");
	document.getElementById('b_page_search').setAttribute("style", "fill: var(--ColorThemes3);");
	document.getElementById('b_page_options').setAttribute("style", "fill: var(--ColorThemes3);");
}

// Функция запроса нужного контента
function switchRoute(page, query){
	pageColor()

	switch (page) {
		case '/release':
			document.getElementById('content_release').setAttribute("style", "display: block;");
			document.getElementById('content_all').setAttribute("style", "display: none;");
			page_release(query.id);
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
	window.scroll(0, state.position);
}

// Функция роутера управляемая приложением и адресной строкой
function goRoute(namePage, query) {
	// Изменяет историю текущей страницы
	// Добавляем позицию скролла 
	history.replaceState({'position': window.pageYOffset}, null);
	paramsRoute();

	switchRoute(namePage, query);

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

// Функция обрваботки кнопки поиска
function search_b() {
  var search_q = document.getElementById("search_q").value;
	goRoute('/search', {search: `${search_q}`})
}