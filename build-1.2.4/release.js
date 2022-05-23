var MySessID;
var player;
var dataPlayer,
    dataPlayerSerie,
    cookie = localStorage.getItem('PHPSESSID');

var elementDisplays = "";

var width = document.documentElement.clientWidth;

function page_release(s1) {

	if (width > 800) {
		elementDisplays1 = `<img id="rel_posters_medium_url" src="img/poster.png" alt=""/>`;
		elementDisplays2 = `
		<div class="release-player">
			<div class="player_select">
				<a href="https://www.anilibria.tv/pages/donate.php" class="favor_button">Поддержать проект AniLibria</a>
			</div>

			<div id="player_bas" class="player_s">
				<div id="player"></div>
			</div>
			<div class="but_Hotkeys">
				<p><span>Клавиша F</span><span>Полноэкранный режим видео</span></p>
				<p><span>Клавиша M</span><span>Включение / выключение звука</span></p>
				<p><span>Пробел</span><span>Переключение пуск / пауза</span></p>
				<p><span>Стрелки ← и →</span><span>Перемотка</span></p>
			</div>
			<div class="but_Hotkeys">
				<center><p style="font-size: 17px;">Наш сайт использует P2P подключение!</p></center>
				<p>Как это устроено? Очень просто. У нас 4 пользователя, которые хотят посмотреть новую серию любимого аниме.
				Все 4 пользователя начали смотреть серию не одновременно, а с интервалом в 2-10 минут. Самый первый загрузит серию с сервера AniLibria.tv. Второй и последующие пользователи загрузят большую часть у тех пользователей, которые уже немного прогрузили серию и совсем с сервера AniLibria.tv.</p>
				<p>Зачем это нужно? Для того, чтоб сервера AniLibria.tv были менее загружены, и больше людей смогли посмотреть новую серию без проблем.</p>
			</div>

			<details id="servers" style="text-align: center;">
				<summary>Если серия не грузит, то попробуйте поменять сервер.</summary>
			</details>
		</div>`;

	} else {
		elementDisplays1 = `
			<img id="rel_posters_medium_url" src="img/poster.png" alt="" style="display:none"/>
			<div id="player_bas" class="player_s">
				<div id="player"></div>
			</div>
		`;
		elementDisplays2 = `
			<div class="release-player">
				<div class="player_select">
					<a href="https://www.anilibria.tv/pages/donate.php" class="favor_button">Поддержать проект AniLibria</a>
				</div>
				<div class="but_Hotkeys">
					<center><p style="font-size: 17px;">Наш сайт использует P2P подключение!</p></center>
					<p>Как это устроено? Очень просто. У нас 4 пользователя, которые хотят посмотреть новую серию любимого аниме.
					Все 4 пользователя начали смотреть серию не одновременно, а с интервалом в 2-10 минут. Самый первый загрузит серию с сервера AniLibria.tv. Второй и последующие пользователи загрузят большую часть у тех пользователей, которые уже немного прогрузили серию и совсем с сервера AniLibria.tv.</p>
					<p>Зачем это нужно? Для того, чтоб сервера AniLibria.tv были менее загружены, и больше людей смогли посмотреть новую серию без проблем.</p>
				</div>
				<details id="servers" style="text-align: center;">
					<summary>Если серия не грузит, то попробуйте поменять сервер.</summary>
				</details>
			</div>
		`;
	}		

  document.getElementById('app_release').innerHTML = `
  <div class="ReleaseBlock">
    <center>
      <div id="release_block">
        <div class="release-list">
					`+ elementDisplays1 +`
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
                <p style="color: var(--ColorThemes3) !important; padding: 8px 0;" id="rel_in_favorites">В избранном у 0</p>
              </div>
            </center>

            <center>
              <div class="week_block">
                <a id="rel_seasonANDyear" class="release-href favor_button_a release-href_hov" style="padding: 8px !important;">2022</a>
                <a id="rel_type_code" class="release-href favor_button_a release-href_hov" style="padding: 8px !important;margin: 0px !important;">ТВ (12 эп.), 24 мин.</a>
                <div class="ReleaseBoxFavorBut">
									<a class="ReleaseFavorBut" title="Удалить из избранное" id="delFavorite_rel" onclick="delFavorite(id_t)" style="display:none;background:var(--PrimaryColor);"><svg version="1.1" style="fill: var(--PrimaryColorText);" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 172 172"><path d="M86,129.65217l35.61117,21.49283c5.61867,3.38983 12.54883,-1.64833 11.05817,-8.03383l-9.45283,-40.51317l31.46883,-27.262c4.95933,-4.29283 2.30767,-12.44133 -4.22833,-12.99317l-41.42333,-3.51167l-16.20383,-38.23417c-2.5585,-6.02717 -11.10117,-6.02717 -13.65967,0l-16.20383,38.23417l-41.42333,3.51167c-6.536,0.55183 -9.18767,8.70033 -4.22833,12.99317l31.46883,27.262l-9.45283,40.51317c-1.49067,6.3855 5.4395,11.42367 11.05817,8.03383z"></path></svg></a>
                	<a class="ReleaseFavorBut" title="Добавить в избранное" id="addFavorite_rel" onclick="addFavorite(id_t)" style="display:none;"><svg version="1.1" style="fill: var(--ColorThemes3);" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 172 172"><path d="M86,129.65217l35.61117,21.49283c5.61867,3.38983 12.54883,-1.64833 11.05817,-8.03383l-9.45283,-40.51317l31.46883,-27.262c4.95933,-4.29283 2.30767,-12.44133 -4.22833,-12.99317l-41.42333,-3.51167l-16.20383,-38.23417c-2.5585,-6.02717 -11.10117,-6.02717 -13.65967,0l-16.20383,38.23417l-41.42333,3.51167c-6.536,0.55183 -9.18767,8.70033 -4.22833,12.99317l31.46883,27.262l-9.45283,40.51317c-1.49067,6.3855 5.4395,11.42367 11.05817,8.03383z"></path></svg></a>
								</div>
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

      `+ elementDisplays2 +`
    </center>
  </div>
  `;

	LoadRelisePHPSESSID();
  LoadApiRelise(s1);
	LoadApiServer();

}

function ReleaseContent(){

}


// Функция получения PHPSESSID из локального хранилища
function LoadRelisePHPSESSID(){
	MySessID = localStorage.getItem('PHPSESSID');
}


// Функции запросов к Api
function LoadApiRelise(s1) {
  url = config["titels_api"]+'getTitle?id='+s1+'&description_type=plain&remove=posters.small,posters.original,torrents';

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
    var id_t = s1;

    GeneratorRelise(data);
		preloader_none();

    dataPlayer = data["player"];
    dataPlayerSerie = data["player"]["series"]["last"];
    playerPlaylist(id_t, dataPlayer, dataPlayerSerie);
    if (MySessID) {
      load_relise_Fav(id_t);
    }
  })
  .catch(function (error) {
    console.log('error', error)
  })
}

function LoadApiServer(){
	var my_server = localStorage.getItem('my_server');

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
}


// Функции заполнения контента
function GeneratorRelise(data){
	var genres,
		  voice,
      timing,
      translator,
      editing,
      decor,
			announce;


	if(data.genres.length > 0){
		for(var i=0; data.genres.length > i; i++){
			if(genres == null) genres = `<a onclick="edit_href('/season', '', '', '${data["genres"][i]}')" style="text-decoration: none;">${data["genres"][i]}</a>`;
			else genres = genres + ", " + `<a onclick="edit_href('/season', '', '', '${data["genres"][i]}')" style="text-decoration: none;">${data["genres"][i]}</a>`;
		}
	}

	if (data.status.code == '1' || data.status.code == '4') {
    var week_day = data.season.week_day;
    var week_day_text;
    if (week_day == '0') {document.getElementById('rel_week_day_text_style_1').setAttribute("style", "background: var(--PrimaryColor);color: var(--PrimaryColorText) !important;");}
    if (week_day == '1') {document.getElementById('rel_week_day_text_style_2').setAttribute("style", "background: var(--PrimaryColor);color: var(--PrimaryColorText) !important;");}
    if (week_day == '2') {document.getElementById('rel_week_day_text_style_3').setAttribute("style", "background: var(--PrimaryColor);color: var(--PrimaryColorText) !important;");}
    if (week_day == '3') {document.getElementById('rel_week_day_text_style_4').setAttribute("style", "background: var(--PrimaryColor);color: var(--PrimaryColorText) !important;");}
    if (week_day == '4') {document.getElementById('rel_week_day_text_style_5').setAttribute("style", "background: var(--PrimaryColor);color: var(--PrimaryColorText) !important;");}
    if (week_day == '5') {document.getElementById('rel_week_day_text_style_6').setAttribute("style", "background: var(--PrimaryColor);color: var(--PrimaryColorText) !important;");}
    if (week_day == '6') {document.getElementById('rel_week_day_text_style_7').setAttribute("style", "background: var(--PrimaryColor);color: var(--PrimaryColorText) !important;");}
  } else {
    document.getElementById('rel_week_day_text_none').setAttribute("style", "display:none;");
  }

	if (data.team.voice.length > 0) {
    for(let i = 0; data.team.voice.length > i; i++) {
      if (voice == null) voice = `<a onclick="edit_href('/season', '', '', '', '${data.team.voice[i]}')">${data.team.voice[i]}</a>`;
			else voice = voice + ", " + `<a onclick="edit_href('/season', '', '', '', '${data.team.voice[i]}')">${data.team.voice[i]}</a>`;
    }
		voice = "Озвучка: " + voice;
  } else {
		voice = "";
	}

	if (data.team.timing.length > 0) {
    for(let i = 0; data.team.timing.length > i; i++) {
      if (timing == null) timing = `<a onclick="edit_href('/season', '', '', '', '', '${data.team.timing[i]}')">${data.team.timing[i]}</a>`;
			else timing = timing + ", " + `<a onclick="edit_href('/season', '', '', '', '', '${data.team.timing[i]}')">${data.team.timing[i]}</a>`;
    }
		timing = "Тайминг: " + timing;
  } else {
		timing = "";
	}

	if (data.team.translator.length > 0) {
    for(let i = 0; data.team.translator.length > i; i++) {
      if (translator == null) translator = `<a onclick="edit_href('/season', '', '', '', '', '', '${data.team.translator[i]}')">${data.team.translator[i]}</a>`;
			else translator = translator + ", " + `<a onclick="edit_href('/season', '', '', '', '', '', '${data.team.translator[i]}')">${data.team.translator[i]}</a>`;
    }
		translator = "Перевод: " + translator;
  } else {
		translator = "";
	}

	if (data.team.editing.length > 0) {
    for(let i = 0; data.team.editing.length > i; i++) {
      if (editing == null) editing = `<a onclick="edit_href('/season', '', '', '', '', '', '', '${data.team.editing[i]}')">${data.team.editing[i]}</a>`;
			else editing = editing + ", " + `<a onclick="edit_href('/season', '', '', '', '', '', '', '${data.team.editing[i]}')">${data.team.editing[i]}</a>`;
    }
		editing = "Редактура: " + editing;
  } else {
		editing = "";
	}

	if (data.team.decor.length > 0) {
    for(let i = 0; data.team.decor.length > i; i++) {
      if (decor == null) decor = `<a onclick="edit_href('/season', '', '', '', '', '', '', '', '${data.team.decor[i]}')">${data.team.decor[i]}</a>`;
			else decor = decor + ", " + `<a onclick="edit_href('/season', '', '', '', '', '', '', '', '${data.team.decor[i]}')">${data.team.decor[i]}</a>`;
    }
		decor = "Оформление: " + decor;
  } else {
		decor = "";
	}

	if (data.announce != null && data.announce != 'undefined' && data.announce != '') {
    announce = '<br />'+data.announce;
  } else {
		announce = "";
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
  document.getElementById('rel_posters_medium_url').src = config["posters"]+''+data["posters"]["medium"]["url"];
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
  document.getElementById('rel_voice_html').innerHTML = voice;
  document.getElementById('rel_timing_html').innerHTML = timing;
  document.getElementById('rel_translator_html').innerHTML = translator;
  document.getElementById('rel_editing_html').innerHTML = editing;
  document.getElementById('rel_decor_html').innerHTML = decor;

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
      } else {
				remove = '"skip":"'+dataPlayer["playlist"][i2]["skips"]["opening"][0]+'-'+dataPlayer["playlist"][i2]["skips"]["opening"][1]+'", '
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
        poster_preview = config["posters"]+''+dataPlayer["playlist"][i2]["preview"];
      } else {
        // poster_preview = "img/pleer.png";
        poster_preview = "https://api.7o7.co/anilibria_bot/getPoster/"+id_t;
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
	if (p2pml.hlsjs.Engine.isSupported()) {
		var engine = new p2pml.hlsjs.Engine();


		var engine = new p2pml.hlsjs.Engine();
		var player = new Playerjs({
				id:"player",
				poster:"img/pleer.png",
				file:"",
				cuid: id_t,
				bgcolor: 'var(--card-background-2)',
				hlsconfig:{
						liveSyncDurationCount: 7,
						loader: engine.createLoaderClass()
				}
		});
		p2pml.hlsjs.initHlsJsPlayer(player.api('hls'));
	} else {
		console.log("P2P не поддерживается в вашем браузере :(");

		player = new Playerjs({
			id:"player",
			poster:"img/pleer.png",
			file:"",
			cuid: id_t,
			bgcolor: 'var(--card-background-2)'
		});
	}
  player.api("file", str_playlist);
  if (localStorage.getItem('my_player_style')) {
    var style = localStorage.getItem('my_player_style');
    if (style == '1') {
      player.api("update:nativefullios",1);
    } else if (style == '2') {
      player.api("update:nativefullios",0);
    }
  } else {
		player.api("update:nativefullios",0);
	}
}


function mobile_play_fullscreen(){
	var width = document.documentElement.clientWidth;
	if(width <= 800){
		player.api("fullscreen");
	}
}

function PlayerjsEvents(event,id,info){	
	if(event=="play"){
		mobile_play_fullscreen();
  }

	if(event=="pause"){
    saveConfig(dynamic_text_his())
  }

	if(event=="fullscreen"){
		player_navigation('none');
	}

	if(event=="exitfullscreen"){
		player_navigation('flex');
	}
}

function player_navigation(display){
	if(display == "none"){
		document.getElementById('navi').setAttribute("style", "display:none;");
		document.getElementById('back_to_top').setAttribute("style", "display:none;");
		document.body.setAttribute("style", "touch-action: none;-ms-touch-action: none;");
	}
	if(display == "flex"){
		document.getElementById('navi').setAttribute("style", "display:flex;");
		document.getElementById('back_to_top').setAttribute("style", "");
		document.body.setAttribute("style", "");
	}
}

function load_relise_Fav(id_t) {
  var cookie = localStorage.getItem('PHPSESSID');
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
				document.getElementById('delFavorite_rel').style.display = "";
  			document.getElementById('addFavorite_rel').style.display = "none";
         return;
      }else {
				document.getElementById('delFavorite_rel').style.display = "none";
  			document.getElementById('addFavorite_rel').style.display = "";
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

function delFavorite(id_t) {
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
  document.getElementById('delFavorite_rel').style.display = "none";
  document.getElementById('addFavorite_rel').style.display = "";
}
function addFavorite(id_t) {
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
  document.getElementById('delFavorite_rel').style.display = "";
  document.getElementById('addFavorite_rel').style.display = "none";
}