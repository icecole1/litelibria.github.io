function page_release(s1) {
  document.getElementById('app_release').innerHTML = `
  <style>
    .img_favorite{
      position: absolute;
      display: block;
      background: var(--card-background-3);
      opacity: 0.8;
      font-size: 16px;
      font-weight: 300;
      color: var(--card-text-color-2) !important;
      text-decoration: none;
      padding: 8px 15px;
      text-align: center;
      border-radius: 0px var(--card-border-radius) 0px var(--card-border-radius);
      transition: .3s ease;
      margin-top: 375px;
    }
    @media (max-width: 880px){
      .img_favorite{
        display: initial;
      }
    }
    .week_block{
      background: var(--card-background);
      margin-top: 15px;
      width: calc(100% - 10px);
      display: inline-block;
      font-size: 16px;
      font-weight: 300;
      color: var(--card-text-color-2) !important;
      text-decoration: none;
      padding: 10px 5px;
      text-align: center;
      border-radius: var(--border-radius);
      margin-right: 10px;
      transition: .3s ease;
    }
    .week_block_a{
      background: #2e2e2e;
      color: var(--card-text-color-2) !important;
    }
    .release-href{
      padding: 8px 9px;
      font-size: 15px;
      border: 0px;
      margin: 0px;
    }
    .favor_button{
      padding: 5px 7px;
    }
    .favor_button_a{
      border: 0 !important;
      padding: 4.5px 5px !important;
      margin: 0px 2px !important;
      margin: -12px 0px !important;
      cursor: pointer;
    }
    .favor_button_a img{
      float: left !important;
      height: 25px;
      margin: 0px;
    }
		.player_s{
			min-height: 100px;
			background: var(--card-background);
			border-radius: var(--border-radius);
			aspect-ratio: 16 / 9;
		}
  </style>

  <div class="release-block">
    <center>
      <div id="release_block">
        <div class="release-list">
          <span class="img_favorite" id="rel_in_favorites">В избранном у 0</span>
          <img id="rel_posters_medium_url" src="img/poster.png" alt=""/>
          <img id="rel_posters_mobile_url" src="" alt="" style="display:none"/>
          <div class="release-det">
            <p class="release-name" id="rel_names_ru">Тайтл</p>
            <p class="release-description" id="rel_genres"></p>
            <center>
              <div class="week_block" id="rel_week_day_text_none">
                <a class="release-href release-href_hov week_block_a" href="schedule" target="_self" id="rel_week_day_text_style_1">Пн</a>
                <a class="release-href release-href_hov week_block_a" href="schedule" target="_self" id="rel_week_day_text_style_2">Вт</a>
                <a class="release-href release-href_hov week_block_a" href="schedule" target="_self" id="rel_week_day_text_style_3">Ср</a>
                <a class="release-href release-href_hov week_block_a" href="schedule" target="_self" id="rel_week_day_text_style_4">Чт</a>
                <a class="release-href release-href_hov week_block_a" href="schedule" target="_self" id="rel_week_day_text_style_5">Пт</a>
                <a class="release-href release-href_hov week_block_a" href="schedule" target="_self" id="rel_week_day_text_style_6">Сб</a>
                <a class="release-href release-href_hov week_block_a" href="schedule" target="_self" id="rel_week_day_text_style_7">Вс</a>
              </div>
            </center>
            <center>
              <div class="week_block">
                <a id="rel_seasonANDyear" class="release-href favor_button_a release-href_hov" style="padding: 8px !important;">2022</a>
                <a id="rel_type_code" class="release-href favor_button_a release-href_hov" style="padding: 8px !important;margin: 0px !important;">ТВ (12 эп.), 24 мин.</a>
                <a class="release-href favor_button_a release-href_hov" title="Удалить из избранное" id="delFavorite_rel" onclick="delFavorite(id_t)" style="display:none;"><img src="img/icons/20_W.png"/></a>
                <a class="release-href favor_button_a release-href_hov" title="Добавить в избранное" id="addFavorite_rel" onclick="addFavorite(id_t)" style="display:none;"><img src="img/icons/19_W.png"/></a>
              </div>
            </center>

            <p class="release-description" id="rel_announce"></p><br />

            <p class="release-description" id="release_description_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div id="hidden2" style="display: none;">
              <br />
              <p class="release-description" id="rel_status_string" >Статус: </p>
              <p class="release-description" id="rel_voice_html" >Озвучка: </p>
              <p class="release-description" id="rel_timing_html" >Тайминг: </p>
              <p class="release-description" id="rel_translator_html" >Перевод: </p>
              <p class="release-description" id="rel_editing_html" >Редактура: </p>
              <p class="release-description" id="rel_decor_html" >Оформление: </p>
              <br />
              <p class="release-description" id="rel_names_en">Навзание EN: </p>
              <br />
              <p class="release-description"><a id="rel_SHIKIMORI" href="https://shikimori.one/animes?search=" target="_blank">Поиск SHIKIMORI</a></p>
              <br />
            </div>
            <p style="cursor:pointer;margin-top:10px; margin-bottom: 5px;"><a onclick="view('hidden1', 'hidden2', 'hidden3'); return false" style="color: var(--card-text-color-3);border-bottom: 1px solid var(--card-background-5);">Подробнее...</a></p>
          </div>
        </div>
      </div>

      <div class="release-player">
        <div class="player_select">
          <a href="https://www.anilibria.tv/pages/donate.php" class="favor_button">Поддержать проект</a>
        </div>

        <div id="player_bas" class="player_s">
          <div id="player"></div>
        </div>
        <div class="but_Hotkeys">
          <p><span>Клавиша F</span><span>Полноэкранный режим видео</span></p>
          <p><span>Клавиша M</span><span>Включение / выключение звука</span></p>
          <p><span>Пробел</span><span>Переключение пуск / пауза</span></p>
          <p><span>Скролл на полном экране</span><span>Изменяет громкость</span></p>
          <p><span>Стрелки ← и →</span><span>Перемотка</span></p>
          <p><span>Стрелки ↑ и ↓</span><span>Изменяет громкость</span></p>
        </div>
        <details id="servers" style="text-align: center;">
           <summary>Если серия не грузит, то попробуйте поменять сервер.</summary>
        </details>
      </div>
    </center>
  </div>
  `;


  var my_server = localStorage.getItem('my_server');

  // var url = "https://api.anilibria.tv/v2/getCachingNodes";
  var url = config["titels_api"]+"getCachingNodes";
  fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {

      if (!my_server) {
        var style_server = "background: var(--card-background-2);color: var(--card-text-color)!important;cursor:pointer;";
        var title_server = "Сменить сервер";
      } else if (my_server == 'auto') {
        var style_server = "background: var(--card-background-2);color: var(--card-text-color)!important;cursor:pointer;";
        var title_server = "Сменить сервер";
      }else{
        if (my_server == data[i]) {
          var style_server = "color: var(--card-text-color-2)!important;background: var(--card-background-3)!important;cursor:pointer;";
          var title_server = "Выбранный сервер";
        } else {
          var style_server = "background: var(--card-background-2);color: var(--card-text-color)!important;cursor:pointer;";
          var title_server = "Сменить сервер";
        }
      }

      var div = document.createElement('span');
      document.getElementById('servers').appendChild(div);
      div.innerHTML += `<a title="${title_server}" onclick="release_server('${data[i]}')" class="release-href release-href_hov" style="margin: 5px !important;width: 100px;${style_server}">Сервер ${data[i]}</a>`;
    }
    var div = document.createElement('span');
    document.getElementById('servers').appendChild(div);
    if (!my_server) {
      div.innerHTML += `<a title="Выбранный сервер" onclick="release_server(\'auto\')" class="release-href release-href_hov" style="cursor:pointer;margin: 5px !important;width: 100px;color: var(--card-text-color-2)!important;background: var(--card-background-3)!important;">Сервер авто выбор</a>`;
    } else if (my_server == 'auto') {
      div.innerHTML += `<a title="Выбранный сервер" onclick="release_server(\'auto\')" class="release-href release-href_hov" style="cursor:pointer;margin: 5px !important;width: 100px;color: var(--card-text-color-2)!important;background: var(--card-background-3)!important;">Сервер авто выбор</a>`;
    } else {
      div.innerHTML += `<a title="Сменить сервер" onclick="release_server(\'auto\')" class="release-href release-href_hov" style="cursor:pointer;margin: 5px !important;width: 100px;background: var(--card-background-2);color: var(--card-text-color)!important;">Сервер авто выбор</a>`;
    }
  })

  load_relise(s1);

}

function page_release_mobile(s1) {
  document.getElementById('app_release').innerHTML = `
  <style>
    .img_favorite{
      position: absolute;
      display: block;
      background: var(--card-background-3);
      opacity: 0.8;
      font-size: 16px;
      font-weight: 300;
      color: var(--card-text-color-2) !important;
      text-decoration: none;
      padding: 8px 15px;
      text-align: center;
      border-radius: 0px var(--card-border-radius) 0px var(--card-border-radius);
      transition: .3s ease;
      margin-top: 375px;
    }
    @media (max-width: 880px){
      .img_favorite{
        display: initial;
      }
    }
    .week_block{
      background: var(--card-background);
      margin-top: 15px;
      width: calc(100% - 10px);
      display: inline-block;
      font-size: 16px;
      font-weight: 300;
      color: var(--card-text-color-2) !important;
      text-decoration: none;
      padding: 10px 5px;
      text-align: center;
      border-radius: var(--border-radius);
      margin-right: 10px;
      transition: .3s ease;
    }
    .week_block_a{
      background: #2e2e2e;
      color: var(--card-text-color-2) !important;
    }
    .release-href{
      padding: 8px 9px;
      font-size: 15px;
      border: 0px;
      margin: 0px;
    }
    .favor_button{
      padding: 5px 7px;
    }
    .favor_button_a{
      border: 0 !important;
      padding: 4.5px 5px !important;
      margin: 0px 2px !important;
      margin: -12px 0px !important;
      cursor: pointer;
    }
    .favor_button_a img{
      float: left !important;
      height: 25px;
      margin: 0px;
    }
		.player_s{
			min-height: 100px;
			background: var(--card-background);
			border-radius: var(--border-radius);
			aspect-ratio: 16 / 9;
		}
  </style>

  <div class="release-block">
    <center>
      <div class="release-player" style="padding: 10px;width: calc(100% - 20px);margin-top: 0;">
        <div id="player_bas" class="player_s">
          <div id="player"></div>
        </div>
      </div>
      <div id="release_block">
        <div class="release-list" style="margin-top: 0;">
          <div class="release-det" style="margin: 0px 20px;">
            <img id="rel_posters_mobile_url" src="img/poster_mobile.png" alt="" style="width: 100%;height: auto;border-radius: 4px;margin-top: 10px;display:none;"/>
            <img id="rel_posters_medium_url" src="" alt="" style="display:none"/>
            <p class="release-name" id="rel_names_ru">Тайтл</p>
            <p class="release-description" id="rel_genres"></p>
            <center>
              <div class="week_block" id="rel_week_day_text_none">
                <a class="release-href release-href_hov week_block_a" href="schedule" target="_self" id="rel_week_day_text_style_1">Пн</a>
                <a class="release-href release-href_hov week_block_a" href="schedule" target="_self" id="rel_week_day_text_style_2">Вт</a>
                <a class="release-href release-href_hov week_block_a" href="schedule" target="_self" id="rel_week_day_text_style_3">Ср</a>
                <a class="release-href release-href_hov week_block_a" href="schedule" target="_self" id="rel_week_day_text_style_4">Чт</a>
                <a class="release-href release-href_hov week_block_a" href="schedule" target="_self" id="rel_week_day_text_style_5">Пт</a>
                <a class="release-href release-href_hov week_block_a" href="schedule" target="_self" id="rel_week_day_text_style_6">Сб</a>
                <a class="release-href release-href_hov week_block_a" href="schedule" target="_self" id="rel_week_day_text_style_7">Вс</a>
              </div>
            </center>
            <span class="img_favorite" id="rel_in_favorites" style="position: relative;display: block;border-radius: var(--border-radius);margin-top: 15px;opacity: 1;background: var(--card-background);color: var(--card-text-color) !important;">В избранном у 0</span>
            <center>
              <div class="week_block">
                <a id="rel_seasonANDyear" class="release-href favor_button_a release-href_hov" style="padding: 8px !important;">2022</a>
                <a id="rel_type_code" class="release-href favor_button_a release-href_hov" style="padding: 8px !important;margin: 0px !important;">ТВ (12 эп.), 24 мин.</a>
                <a class="release-href favor_button_a release-href_hov" title="Удалить из избранное" id="delFavorite_rel" onclick="delFavorite(id_t)" style="display:none;"><img src="img/icons/20_W.png"/></a>
                <a class="release-href favor_button_a release-href_hov" title="Добавить в избранное" id="addFavorite_rel" onclick="addFavorite(id_t)" style="display:none;"><img src="img/icons/19_W.png"/></a>
              </div>
            </center>

            <p class="release-description" id="rel_announce"></p><br />

            <p class="release-description" id="release_description_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div id="hidden2" style="display: none;">
              <br />
              <p class="release-description" id="rel_status_string" >Статус: </p>
              <p class="release-description" id="rel_voice_html" >Озвучка: </p>
              <p class="release-description" id="rel_timing_html" >Тайминг: </p>
              <p class="release-description" id="rel_translator_html" >Перевод: </p>
              <p class="release-description" id="rel_editing_html" >Редактура: </p>
              <p class="release-description" id="rel_decor_html" >Оформление: </p>
              <br />
              <p class="release-description" id="rel_names_en">Навзание EN: </p>
              <br />
              <p class="release-description"><a id="rel_SHIKIMORI" href="https://shikimori.one/animes?search=" target="_blank">Поиск SHIKIMORI</a></p>
              <br />
            </div>
            <p style="cursor:pointer;margin-top:10px; margin-bottom: 5px;"><a onclick="view('hidden1', 'hidden2', 'hidden3'); return false" style="color: var(--card-text-color-3);border-bottom: 1px solid var(--card-background-5);">Подробнее...</a></p>
            <br><br>
            <div class="player_select" style="text-align: center;">
              <a href="https://www.anilibria.tv/pages/donate.php" class="favor_button">Поддержать проект</a>
            </div>
            <details id="servers" style="text-align: center;">
               <summary>Если серия не грузит, то попробуйте поменять сервер.</summary>
            </details>
          </div>
        </div>
      </div>
    </center>
  </div>
  `;


  var my_server = localStorage.getItem('my_server');

  // var url = "https://api.anilibria.tv/v2/getCachingNodes";
  var url = config["titels_api"]+"getCachingNodes";
  fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {

      if (!my_server) {
        var style_server = "background: var(--card-background-2);color: var(--card-text-color)!important;cursor:pointer;";
        var title_server = "Сменить сервер";
      } else if (my_server == 'auto') {
        var style_server = "background: var(--card-background-2);color: var(--card-text-color)!important;cursor:pointer;";
        var title_server = "Сменить сервер";
      }else{
        if (my_server == data[i]) {
          var style_server = "color: var(--card-text-color-2)!important;background: var(--card-background-3)!important;cursor:pointer;";
          var title_server = "Выбранный сервер";
        } else {
          var style_server = "background: var(--card-background-2);color: var(--card-text-color)!important;cursor:pointer;";
          var title_server = "Сменить сервер";
        }
      }

      var div = document.createElement('span');
      document.getElementById('servers').appendChild(div);
      div.innerHTML += `<a title="${title_server}" onclick="release_server('${data[i]}')" class="release-href release-href_hov" style="margin: 5px !important;width: 100px;${style_server}">Сервер ${data[i]}</a>`;
    }
    var div = document.createElement('span');
    document.getElementById('servers').appendChild(div);
    if (!my_server) {
      div.innerHTML += `<a title="Выбранный сервер" onclick="release_server(\'auto\')" class="release-href release-href_hov" style="cursor:pointer;margin: 5px !important;width: 100px;color: var(--card-text-color-2)!important;background: var(--card-background-3)!important;">Сервер авто выбор</a>`;
    } else if (my_server == 'auto') {
      div.innerHTML += `<a title="Выбранный сервер" onclick="release_server(\'auto\')" class="release-href release-href_hov" style="cursor:pointer;margin: 5px !important;width: 100px;color: var(--card-text-color-2)!important;background: var(--card-background-3)!important;">Сервер авто выбор</a>`;
    } else {
      div.innerHTML += `<a title="Сменить сервер" onclick="release_server(\'auto\')" class="release-href release-href_hov" style="cursor:pointer;margin: 5px !important;width: 100px;background: var(--card-background-2);color: var(--card-text-color)!important;">Сервер авто выбор</a>`;
    }
  })

  load_relise(s1);

}

var dataPlayer,
    dataPlayerSerie,
    cookie = localStorage.getItem('PHPSESSID');

function delFavorite(id_t) {
  // console.log(id_t);
  // var url = "https://api.anilibria.tv/v2/delFavorite?session="+cookie+"&title_id="+id_t;
  var url = config["titels_api"]+"delFavorite?session="+cookie+"&title_id="+id_t;

  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", url, true);
  xhr.onload = function () {
      var users = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "200") {
          console.table(users);
      } else {
          console.error(users);
      }
  }
  xhr.send();
  document.getElementById('delFavorite_rel').setAttribute("style", "display:none;");
  document.getElementById('addFavorite_rel').setAttribute("style", "background:#2e2e2e!important;");
}
function addFavorite(id_t) {
  // console.log(id_t);
  // var url = "https://api.anilibria.tv/v2/addFavorite?session="+cookie+"&title_id="+id_t;
  var url = config["titels_api"]+"addFavorite?session="+cookie+"&title_id="+id_t;

  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url, true);
  xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
  }
  xhr.send();
  document.getElementById('delFavorite_rel').setAttribute("style", "");
  document.getElementById('addFavorite_rel').setAttribute("style", "display:none;");
}

function load_relise(s1) {
  var url_relise = '';

  var arr_api = JSON.parse(localStorage.getItem('my_api_cash'));
  if (!arr_api) {
    // url = 'https://api.anilibria.tv/v2/getTitle?id='+s1+'&description_type=html&remove=posters.small,posters.original,torrents';
    url = config["titels_api"]+'getTitle?id='+s1+'&description_type=html&remove=posters.small,posters.original,torrents';
  } else {
    // url = 'https://api.anilibria.tv/v2/getTitle?id='+s1+'&filter=id,player';
    url = config["titels_api"]+'getTitle?id='+s1+'&filter=id,player';
  }

  fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    // console.log(data);
    var url = document.location;
    var paramsString = document.location.search;
    var searchParams = new URLSearchParams(paramsString);

    var id_t = s1;

    // Получаем из кэша браузера все тайтлы
    var arr_api = JSON.parse(localStorage.getItem('my_api_cash'));

    if (arr_api) {
      var cookie_genres = localStorage.getItem('my_genres');
      if (cookie_genres) {
        genres = cookie_genres.split(/\s*,\s*/);
      } else {
        localStorage.setItem('my_genres', '');
        cookie_genres = localStorage.getItem('my_genres');
        genres = cookie_genres.split(/\s*,\s*/);
      }

      // Получаем из кэша браузера все тайтлы
      arr_api = JSON.parse(localStorage.getItem('my_api_cash'));

      // Удаляем из результата жанры которые нельзя отображать
      arr = arr_api.filter(function(item) {
      for (var key in genres) {
          if (item.genres.includes(genres[key]))
            return false;
        }
        return true;
      });

      var data_arr = arr.filter(function(item) {if (item.id == id_t){return true}});

      release_html(id_t, data_arr[0]);
      preloader_none();
    } else {
      release_html(id_t, data);
      preloader_none();
    }

    dataPlayer = data["player"];
    dataPlayerSerie = data["player"]["series"]["last"];
    playerPlaylist(id_t, dataPlayer, dataPlayerSerie);
    if (cookie) {
      load_relise_Fav(id_t);
    }
  })
  .catch(function (error) {
    console.log('error', error)
  })
}

function release_html(id_t, data) {
  var genres = '';
  if (data["genres"][5] != undefined) {
    genres = `<a onclick="edit_href('/season', '', '', '${data["genres"][0]}')" style="text-decoration: none;">${data["genres"][0]}</a> | <a onclick="edit_href('/season', '', '', '${data["genres"][1]}')" style="text-decoration: none;">${data["genres"][1]}</a> | <a onclick="edit_href('/season', '', '', '${data["genres"][2]}')" style="text-decoration: none;">${data["genres"][2]}</a> | <a onclick="edit_href('/season', '', '', '${data["genres"][3]}')" style="text-decoration: none;">${data["genres"][3]}</a> | <a onclick="edit_href('/season', '', '', '${data["genres"][4]}')" style="text-decoration: none;">${data["genres"][4]}</a> | <a onclick="edit_href('/season', '', '', '${data["genres"][5]}')" style="text-decoration: none;">${data["genres"][5]}</a>`;
  } else if(data["genres"][4] != undefined) {
    genres = `<a onclick="edit_href('/season', '', '', '${data["genres"][0]}')" style="text-decoration: none;">${data["genres"][0]}</a> | <a onclick="edit_href('/season', '', '', '${data["genres"][1]}')" style="text-decoration: none;">${data["genres"][1]}</a> | <a onclick="edit_href('/season', '', '', '${data["genres"][2]}')" style="text-decoration: none;">${data["genres"][2]}</a> | <a onclick="edit_href('/season', '', '', '${data["genres"][3]}')" style="text-decoration: none;">${data["genres"][3]}</a> | <a onclick="edit_href('/season', '', '', '${data["genres"][4]}')" style="text-decoration: none;">${data["genres"][4]}</a>`;
  } else if(data["genres"][3] != undefined) {
    genres = `<a onclick="edit_href('/season', '', '', '${data["genres"][0]}')" style="text-decoration: none;">${data["genres"][0]}</a> | <a onclick="edit_href('/season', '', '', '${data["genres"][1]}')" style="text-decoration: none;">${data["genres"][1]}</a> | <a onclick="edit_href('/season', '', '', '${data["genres"][2]}')" style="text-decoration: none;">${data["genres"][2]}</a> | <a onclick="edit_href('/season', '', '', '${data["genres"][3]}')" style="text-decoration: none;">${data["genres"][3]}</a>`;
  } else if(data["genres"][2] != undefined) {
    genres = `<a onclick="edit_href('/season', '', '', '${data["genres"][0]}')" style="text-decoration: none;">${data["genres"][0]}</a> | <a onclick="edit_href('/season', '', '', '${data["genres"][1]}')" style="text-decoration: none;">${data["genres"][1]}</a> | <a onclick="edit_href('/season', '', '', '${data["genres"][2]}')" style="text-decoration: none;">${data["genres"][2]}</a>`;
  } else if(data["genres"][1] != undefined) {
    genres = `<a onclick="edit_href('/season', '', '', '${data["genres"][0]}')" style="text-decoration: none;">${data["genres"][0]}</a> | <a onclick="edit_href('/season', '', '', '${data["genres"][1]}')" style="text-decoration: none;">${data["genres"][1]}</a>`;
  } else if(data["genres"][0] != undefined) {
    genres = `<a onclick="edit_href('/season', '', '', '${data["genres"][0]}')" style="text-decoration: none;">${data["genres"][0]}</a>`;

  }
  if (data["status"]["code"] == '1' || data["status"]["code"] == '4') {
    var week_day = data["season"]["week_day"];
    var week_day_text;
    if (week_day == '0') {document.getElementById('rel_week_day_text_style_1').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");}
    if (week_day == '1') {document.getElementById('rel_week_day_text_style_2').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");}
    if (week_day == '2') {document.getElementById('rel_week_day_text_style_3').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");}
    if (week_day == '3') {document.getElementById('rel_week_day_text_style_4').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");}
    if (week_day == '4') {document.getElementById('rel_week_day_text_style_5').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");}
    if (week_day == '5') {document.getElementById('rel_week_day_text_style_6').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");}
    if (week_day == '6') {document.getElementById('rel_week_day_text_style_7').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");}
  } else {
    document.getElementById('rel_week_day_text_none').setAttribute("style", "display:none;");
  }

  var voice_html,
      timing_html,
      translator_html,
      editing_html,
      decor_html;

  if (data["team"]["voice"] != '') {
    var voice = data["team"]["voice"];
    for(let i = 0; voice[i]; i++) {
      if (i == (voice.length-1)) {
        var coma = '';
      } else {
        var coma = ', ';
      }
      voice_html += `<a onclick="edit_href('/season', '', '', '', '${voice[i]}')">${voice[i]}</a>${coma}`;
    }
  } else {
    var voice_html = 'undefined'
  }
  if (data["team"]["timing"] != '') {
    var timing = data["team"]["timing"];
    for(let i = 0; timing[i]; i++) {
      if (i == (timing.length-1)) {
        var coma = '';
      } else {
        var coma = ', ';
      }
      timing_html += `<a onclick="edit_href('/season', '', '', '', '', '${timing[i]}')">${timing[i]}</a>${coma}`;
    }
  } else {
    var timing_html = 'undefined'
  }
  if (data["team"]["translator"] != '') {
    var translator = data["team"]["translator"];
    for(let i = 0; translator[i]; i++) {
      if (i == (translator.length-1)) {
        var coma = '';
      } else {
        var coma = ', ';
      }
      translator_html += `<a onclick="edit_href('/season', '', '', '', '', '', '${translator[i]}')">${translator[i]}</a>${coma}`;
    }
  } else {
    var translator_html = 'undefined'
  }
  if (data["team"]["editing"] != '') {
    var editing = data["team"]["editing"];
    for(let i = 0; editing[i]; i++) {
      if (i == (editing.length-1)) {
        var coma = '';
      } else {
        var coma = ', ';
      }
      editing_html += `<a onclick="edit_href('/season', '', '', '', '', '', '', '${editing[i]}')">${editing[i]}</a>${coma}`;
    }
  } else {
    var editing_html = 'undefined'
  }
  if (data["team"]["decor"] != '') {
    var decor = data["team"]["decor"];
    for(let i = 0; decor[i]; i++) {
      if (i == (decor.length-1)) {
        var coma = '';
      } else {
        var coma = ', ';
      }
      decor_html += `<a onclick="edit_href('/season', '', '', '', '', '', '', '', '${decor[i]}')">${decor[i]}</a>${coma}`;
    }
  } else {
    var decor_html = 'undefined'
  }
  if (data["announce"]){
    var announce = '<br />'+data["announce"];
  } else {
    var announce = ''
  }
  if (data["season"]["year"] && data["season"]["string"]){
    var atribute = `edit_href('/season', '${data["season"]["year"]}', '${data["season"]["code"]}')`;
    document.getElementById('rel_seasonANDyear').setAttribute("onclick", atribute);
    var seasonANDyear_text = `${data["season"]["year"]} ${data["season"]["string"]}`;
  } else if (data["season"]["year"]){
    var atribute = `edit_href('/season', '${data["season"]["year"]}')`;
    document.getElementById('rel_seasonANDyear').setAttribute("onclick", atribute);
    var seasonANDyear_text = `${data["season"]["year"]}`;
  } else if (data["season"]["string"]){
    var atribute = `edit_href('/season', '', '${data["season"]["code"]}')`;
    document.getElementById('rel_seasonANDyear').setAttribute("onclick", atribute);
    var seasonANDyear_text = `${data["season"]["string"]}`;
  }
  if (document.documentElement.clientWidth <= '375' && data["type"]["full_string"].length >= 15) {
    var season_full_string = data["type"]["full_string"].substr(0, 15) + '...';
  } else {
    var season_full_string = data["type"]["full_string"];
  }


  document.title = data["names"]["ru"];

  document.getElementById('rel_in_favorites').innerHTML = `В избранном у  ${data["in_favorites"]}`;
  document.getElementById('rel_posters_medium_url').src = "https://www.anilibria.tv"+data["posters"]["medium"]["url"];
  document.getElementById('rel_posters_mobile_url').src = "https://api.7o7.co/anilibria_bot/getPoster/"+data["id"];
  document.getElementById('rel_names_ru').innerHTML = `${data["names"]["ru"]}`;
  document.getElementById('rel_genres').innerHTML = `${genres}`;
  document.getElementById('rel_seasonANDyear').innerHTML = `${seasonANDyear_text}`;
  var atribute_del = `delFavorite('${data["id"]}')`;
  var atribute_add = `addFavorite('${data["id"]}')`;
  document.getElementById('delFavorite_rel').setAttribute("onclick", atribute_del);
  document.getElementById('addFavorite_rel').setAttribute("onclick", atribute_add);

  var atribute_type_code = `edit_href('/season', '', '', '', '', '', '', '', '', '${data["type"]["code"]}')`;
  document.getElementById('rel_type_code').setAttribute("onclick", atribute_type_code);
  document.getElementById('rel_type_code').innerHTML = `${season_full_string}`;
  document.getElementById('rel_announce').innerHTML = `${announce}`;
  document.getElementById('release_description_text').innerHTML = `${data["description"].substr(0, 370)}<span id="hidden3" style="display: contents;">...</span><span id="hidden1" style="display: none;color: var(--card-text-color-3);">${data["description"].substr(370)}</span></p>`;
  document.getElementById('rel_status_string').innerHTML = `Статус: ${data["status"]["string"]}`;
  document.getElementById('rel_voice_html').innerHTML = `Озвучка: ${voice_html.substr(9)}`;
  document.getElementById('rel_timing_html').innerHTML = `Тайминг: ${timing_html.substr(9)}`;
  document.getElementById('rel_translator_html').innerHTML = `Перевод: ${translator_html.substr(9)}`;
  document.getElementById('rel_editing_html').innerHTML = `Редактура: ${editing_html.substr(9)}`;
  document.getElementById('rel_decor_html').innerHTML = `Оформление: ${decor_html.substr(9)}`;

  document.getElementById('rel_names_en').innerHTML = `Навзание EN: ${data["names"]["en"]}`;
  document.getElementById('rel_SHIKIMORI').href = `https://shikimori.one/animes?search=${data["names"]["en"]}`;
}

function playerPlaylist(id_t, dataPlayer, dataPlayerSerie) {
  var strPlayer = '';
  var my_skips_opening = localStorage.getItem('my_skips_opening');
  for (let i = 0; i < dataPlayerSerie; i++) {
    var poster_preview
    var i2 = i+1;

    var remove = "";
    if (dataPlayer["playlist"][i2]["skips"]["opening"][0] && dataPlayer["playlist"][i2]["skips"]["opening"][1]) {
      if (my_skips_opening == '1') {
        remove = '"start":"0", "remove":"'+dataPlayer["playlist"][i2]["skips"]["opening"][0]+'-'+dataPlayer["playlist"][i2]["skips"]["opening"][1]+'", ';
      }
    }

    var url_relise_480 = "";
    var url_relise_720 = "";
    var url_relise_1080 = "";
    if (dataPlayer["playlist"][i2]) {
      if (dataPlayer["playlist"][i2]["hls"]["sd"]) {
        url_relise_480 = "[480p]https://"+dataPlayer["host"]+dataPlayer["playlist"][i2]["hls"]["sd"];
      }
      if (dataPlayer["playlist"][i2]["hls"]["hd"]) {
        url_relise_720 = "[720p]https://"+dataPlayer["host"]+dataPlayer["playlist"][i2]["hls"]["hd"];
      }
      if (dataPlayer["playlist"][i2]["hls"]["fhd"]) {
        url_relise_1080 = ",[1080p]https://"+dataPlayer["host"]+dataPlayer["playlist"][i2]["hls"]["fhd"];
      }
      if (dataPlayer["playlist"][i2]["preview"]) {
        poster_preview = "https://anilibria.tv/"+dataPlayer["playlist"][i2]["preview"];
      } else {
        poster_preview = "img/pleer.png";
        // poster_preview = "https://api.7o7.co/anilibria_bot/getPoster/"+id_t;
      }
      var url_relise_comma = " ";
      if (i2 != dataPlayerSerie) {
        url_relise_comma = ", ";
      }
      var str_m_Player = '{"title":"Серия '+i2+'","poster":"'+poster_preview+'", '+remove+' "id": "'+id_t+'s'+i2+'", "file":"'+url_relise_480+', '+url_relise_720+' '+url_relise_1080+'"}'+url_relise_comma;
      strPlayer += str_m_Player;
    }
  }
  let str_playlist = JSON.parse('['+strPlayer+']');
  var player = new Playerjs({
    id:"player",
    poster:"img/pleer.png",
    file:"",
    cuid: id_t
  });
  player.api("file", str_playlist);
  if (localStorage.getItem('my_player_style')) {
    var style = localStorage.getItem('my_player_style');
    if (style == '1') {
      player.api("update:nativefullios",1);
    } else if (style == '2') {
      player.api("update:nativefullios",0);
    }
  }
}

function PlayerjsEvents(event,id,info){
  if(event=="pause"){
    saveConfig(dynamic_text_his())
  }
}

function load_relise_Fav(id_t) {
  var cookie = localStorage.getItem('PHPSESSID');
  // var url_ses="https://api.anilibria.tv/v2/getFavorites?session="+cookie+"&filter=id&limit=4000";
  var url_ses = config["titels_api"]+"getFavorites?session="+cookie+"&filter=id&limit=4000";
  fetch(url_ses)
  .then(function (response) {
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    for (let i = 0; data[i]; i++) {
      if (id_t == data[i]["id"]) {
        document.getElementById('delFavorite_rel').setAttribute("style", "");
        document.getElementById('addFavorite_rel').setAttribute("style", "display:none;");
         return;
      }else {
        document.getElementById('delFavorite_rel').setAttribute("style", "display:none;");
        document.getElementById('addFavorite_rel').setAttribute("style", "background:#2e2e2e!important;");
      }
    }
  })
}
function view(n, n2, n3) {
  style = document.getElementById(n).style;
  style.display = (style.display == 'contents') ? 'none' : 'contents';
  style2 = document.getElementById(n2).style;
  style2.display = (style2.display == 'block') ? 'none' : 'block';
  style3 = document.getElementById(n3).style;
  style3.display = (style3.display == 'none') ? 'contents' : 'none';
}

function release_server(name) {
  localStorage.setItem('my_server', name);
  location.reload();
}
