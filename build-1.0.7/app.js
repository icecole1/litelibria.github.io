window.addEventListener('load', load_href);


window.addEventListener('popstate', (event) => {
  load_href();
});


function load_href() {
  var href = window.location.pathname;

  var paramsString = document.location.search;
  var searchParams = new URLSearchParams(paramsString);
  var year_s = searchParams.get("year");
  var code_s = searchParams.get("code");
  var genres_s = searchParams.get("genres");
  var voice_s = searchParams.get("voice");
  var timing_s = searchParams.get("timing");
  var translator_s = searchParams.get("translator");
  var editing_s = searchParams.get("editing");
  var decor_s = searchParams.get("decor");
  var type_s = searchParams.get("type");
  var search_s = searchParams.get("q");
  var id_s = searchParams.get("id");
  var name_t = searchParams.get("name_t");

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
      url = 'https://api.anilibria.tv/v2/getTitle?code='+name_t+'&filter=id';
      fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        edit_href(href, 'id', data["id"]);
      })
    } else if (id_s) {
      edit_href(href, 'id', id_s);
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
    page_home();
  }
}


function edit_href(href, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10) {
  var last_href = window.location.pathname;
  localStorage.setItem('my_last_page', last_href);

  document.getElementById('b_page_back').setAttribute("style", "fill: var(--card-text-color);");
  document.getElementById('b_page_home').setAttribute("style", "fill: var(--card-text-color);");
  document.getElementById('b_page_catalog').setAttribute("style", "fill: var(--card-text-color);");
  document.getElementById('b_page_favorites').setAttribute("style", "fill: var(--card-text-color);");
  document.getElementById('b_page_search').setAttribute("style", "fill: var(--card-text-color);");
  document.getElementById('b_page_t1').setAttribute("style", "fill: var(--card-text-color);");
  document.getElementById('b_page_t2').setAttribute("style", "fill: var(--card-text-color);");
  document.getElementById('b_page_t3').setAttribute("style", "fill: var(--card-text-color);");



  var new_url;
  if (href == '/catalog') {
    document.getElementById('b_page_catalog').setAttribute("style", "fill: var(--card-background-5);");
    new_url = '/catalog';
    editPushState(new_url);
    page_catalog();

  } else if (href == '/release') {
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
      url = 'https://api.anilibria.tv/v2/getRandomTitle?filter=id';
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
          page_release(data["id"]);
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
    document.getElementById('b_page_favorites').setAttribute("style", "fill: var(--card-background-5);");
    new_url = '/favorites';
    editPushState(new_url);
    page_favorites();

  } else if (href == '/myHistory') {
    new_url = '/myHistory';
    editPushState(new_url);
    page_myHistory();

  } else if (href == '/schedule') {
    new_url = '/schedule';
    editPushState(new_url);
    page_schedule();

  } else if (href == '/search') {
    document.getElementById('b_page_search').setAttribute("style", "fill: var(--card-background-5);");
    new_url = '/search?q=' + s1;
    editPushState(new_url);
    page_search(s1);

  } else if (href == '/settings') {
    new_url = '/settings';
    editPushState(new_url);
    page_settings();

  } else {
    document.getElementById('b_page_home').setAttribute("style", "fill: var(--card-background-5);");
    new_url = '/';
    editPushState(new_url);
    page_home();
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
