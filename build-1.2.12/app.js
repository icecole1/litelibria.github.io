window.addEventListener('load', load_href);

window.addEventListener('popstate', (event) => {
  load_href();
});


function load_href() {
	if(window.location.pathname != "/"){
		var href = window.location.pathname;
		if(document.location.search){
			var href = window.location.pathname;
			var paramsString = document.location.search;
		}
	} else {
		var hrefLoad = window.location.hash.replace('#', '').split("?");
		href = hrefLoad[0];
		href = hrefLoad[0];
		paramsString = '?'+hrefLoad[1];
	}

	var searchParams = new URLSearchParams(paramsString);
  year_s = searchParams.get("year");
  code_s = searchParams.get("code");
  genres_s = searchParams.get("genres");
  voice_s = searchParams.get("voice");
  timing_s = searchParams.get("timing");
  translator_s = searchParams.get("translator");
  editing_s = searchParams.get("editing");
  decor_s = searchParams.get("decor");
  type_s = searchParams.get("type");
  search_s = searchParams.get("q");
  id_s = searchParams.get("id");
  name_t = searchParams.get("name_t");


  if (href == '/catalog') {
    edit_href(href);
  } else if (href == '/random') {
    edit_href('/release', 'random');
    setTimeout(function(){
      localStorage.setItem('my_last_page', '');
      document.getElementById('content_release').setAttribute("style", "display: block;");
      document.getElementById('content_all').setAttribute("style", "display: none;");
      document.getElementById('but_back').setAttribute("style", "display: list-item;");
      document.getElementById('but_home').setAttribute("style", "display: none;");
    },200)
  } else if (href == '/release') {
    if (name_t) {
      url = config["titels_api"]+'getTitle?code='+name_t+'&filter=id';

      fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        edit_href(href, 'id', data["id"]);
      })
    } else if (id_s) {

			var id_s_e = id_s.replace(/[^\d]/g, '');
      edit_href(href, 'id', id_s_e);
    }
    localStorage.setItem('my_last_page', '');
  } else if (href == '/season') {
    edit_href(href, year_s, code_s, genres_s, voice_s, timing_s, translator_s, editing_s, decor_s, type_s);
  } else if (href == '/favorites') {
    edit_href(href);
  } else if (href == '/myHistory') {
    edit_href(href);
  } else if (href == '/schedule') {
    edit_href(href);
  } else if (href == '/search') {
    edit_href(href, search_s);
  } else if (href == '/settings') {
		edit_href(href);
	} else if (href == '/options') {
    edit_href(href);
  } else {
    edit_href(href);
  }
}

function search_b() {
  var search_q = document.getElementById("search_q").value;
  new_url = '/search?q=' + search_q;
  editPushState(new_url);

  edit_href("/search", search_q);
}

function back_app() {
  if (localStorage.getItem('my_last_page') != '') {
    var my_scroll = localStorage.getItem('my_scroll');
    var my_last_page = localStorage.getItem('my_last_page');
    document.getElementById('content_release').setAttribute("style", "display: none;");
    document.getElementById('app_release').innerHTML = "";
    document.getElementById('content_all').setAttribute("style", "display: block;");
    document.getElementById('but_back').setAttribute("style", "display: none;");
    document.getElementById('but_home').setAttribute("style", "display: list-item;");
    window.scroll(0, my_scroll);
    editPushState(my_last_page);
  } else {
    document.getElementById('b_page_home').setAttribute("style", "fill: var(--card-background-5);");
    new_url = '/';
    editPushState(new_url);
    page_line();
  }
}

function edit_href(href, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10) {

	if(player) player.api("stop"); // Остановка плеера при смене локации.

  var last_href = window.location.pathname;
  localStorage.setItem('my_last_page', last_href);

  document.getElementById('b_page_back').setAttribute("style", "fill: var(--ColorThemes3);");
  document.getElementById('b_page_home').setAttribute("style", "fill: var(--ColorThemes3);");
  document.getElementById('b_page_catalog').setAttribute("style", "fill: var(--ColorThemes3);");
  document.getElementById('b_page_favorites').setAttribute("style", "fill: var(--ColorThemes3);");
  document.getElementById('b_page_search').setAttribute("style", "fill: var(--ColorThemes3);");
  document.getElementById('b_page_options').setAttribute("style", "fill: var(--ColorThemes3);");



  var new_url;
  if (href == '/catalog') {
    document.getElementById('b_page_catalog').setAttribute("style", "fill: var(--card-background-5);");
    new_url = '/catalog';
    editPushState(new_url);
    page_catalog();

  } else if (href == '/release') {
		editDomainHistory();

    var width = document.documentElement.clientWidth;

    localStorage.setItem('my_scroll', window.pageYOffset);
    window.scroll(0, 0);
    releaseConfigSync() // Функция автоматического сохранения в Google Drive

    if (s1 == 'id') {
      new_url = '/release?id=' + s2;
      editPushState(new_url);

      // Открываем релиз по таймеру
      // Для прокрутки страници вверх
      setTimeout(function(){
				page_release(s2);
      },100)
      document.getElementById('content_release').setAttribute("style", "display: block;");
      document.getElementById('content_all').setAttribute("style", "display: none;");
      document.getElementById('but_back').setAttribute("style", "display: list-item;");
      document.getElementById('but_home').setAttribute("style", "display: none;");
    } else if (s1 == 'random') {
      // url = 'https://api.anilibria.tv/v2/getRandomTitle?filter=id';
      url = config["titels_api"]+'getRandomTitle?filter=id';
      fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        new_url = '/release?id='+ data["id"];
        editPushState(new_url);

        // Открываем релиз по таймеру
        // Для прокрутки страници вверх
        setTimeout(function(){
          if (width > 800) {
            page_release(data["id"]);
          } else {
            page_release_mobile(data["id"])
          }
        },100)
      })
      setTimeout(function(){
        document.getElementById('content_release').setAttribute("style", "display: block;");
        document.getElementById('content_all').setAttribute("style", "display: none;");
        document.getElementById('but_back').setAttribute("style", "display: list-item;");
        document.getElementById('but_home').setAttribute("style", "display: none;");
      },200)
    }
  } else if (href == '/season') {
    var href, year_s, code_s, genres_s, voice_s, timing_s, translator_s, editing_s, decor_s, type_s;

    if (s1 && s1 != 'undefined') {year_s = 'year='+ s1}else{year_s = ''}
    if (s2 && s2 != 'undefined') {code_s = '&code='+ s2}else{code_s = ''}
    if (s3 && s3 != 'undefined') {genres_s = '&genres='+ s3}else{genres_s = ''}
    if (s4 && s4 != 'undefined') {voice_s = '&voice='+ s4}else{voice_s = ''}
    if (s5 && s5 != 'undefined') {timing_s = '&timing='+ s5}else{timing_s = ''}
    if (s6 && s6 != 'undefined') {translator_s = '&translator='+ s6}else{translator_s = ''}
    if (s7 && s7 != 'undefined') {editing_s = '&editing='+ s7}else{editing_s = ''}
    if (s8 && s8 != 'undefined') {decor_s = '&decor='+ s8}else{decor_s = ''}
    if (s9 && s9 != 'undefined') {type_s = '&type='+ s9}else{type_s = ''}
    new_url = '/season?' + year_s + code_s + genres_s + voice_s + timing_s + translator_s + editing_s + decor_s + type_s;
    editPushState(new_url);
    page_season(s1, s2, s3, s4, s5, s6, s7, s8, s9);

  } else if (href == '/favorites') {
    document.getElementById('b_page_favorites').setAttribute("style", "fill: var(--PrimaryColor);");
    new_url = '/favorites';
    editPushState(new_url);
    page_favorites();

  } else if (href == '/myHistory') {
		editDomainHistory();

    new_url = '/myHistory';
    editPushState(new_url);
    page_myHistory();

  } else if (href == '/schedule') {
    new_url = '/schedule';
    editPushState(new_url);
    page_schedule();

  } else if (href == '/search') {
    document.getElementById('b_page_search').setAttribute("style", "fill: var(--PrimaryColor);");
    new_url = '/search?q=' + s1;
    editPushState(new_url);
    page_search(s1);

  } else if (href == '/settings') {
		new_url = '/settings';
    editPushState(new_url);
    page_settings();
	} else if (href == '/options') {
		document.getElementById('b_page_options').setAttribute("style", "fill: var(--PrimaryColor);");
    new_url = '/options';
    editPushState(new_url);
    page_options();

  } else {
    document.getElementById('b_page_home').setAttribute("style", "fill: var(--PrimaryColor);");
    new_url = '/';
    editPushState(new_url);
    // page_home();
		page_line();
  }
}

function editPushState(new_url) {
  document.getElementById('content_release').setAttribute("style", "display: none;");
  document.getElementById('content_all').setAttribute("style", "display: block;");
  document.getElementById('but_back').setAttribute("style", "display: none;");
  document.getElementById('but_home').setAttribute("style", "display: list-item;");
  document.title = 'LiteLibria';
  scheduleConfigSync(0) // Синхронизация истории
  history.pushState(null, null, new_url);
}
