var MySessID;
var player;

var id_t,
		name_t,
		series_t,
		dataPlayer,
    cookie = localStorage.getItem('PHPSESSID');
		myLogin = localStorage.getItem('myLogin');

let graph;
var engine,
		trackerAnnounce,
		downloadStats = [],
		downloadTotals = { http: 0, p2p: 0 },
		uploadStats = [],
		uploadTotal = 0,
		loadSpeedTimespan = 10;		

var elementDisplays = "";

var width = document.documentElement.clientWidth;

function page_release(id, data) {
  document.getElementById('app').innerHTML = `
	<style>
		.text{
			fill: var(--ColorThemes3);
		}
		.container{
			width: 800px;
		}
		.container *, ::.container, ::.container {
			box-sizing: border-box;
		}
		#graph {
			overflow: hidden;
			background: var(--ColorThemes2);
			border-radius: 15px;
			margin: 2em auto;
		}

		#chart_containerPad {
			background: var(--ColorThemes2);
			border-radius: 15px;
			padding: 20px 10px;
		}
		#chart_container {
			position: relative;
			padding-left: 20px;
			width: 100%;
		}
		#chart svg{
			max-height: 250px;
			width: calc(100% - 20px);
		}
		#y_axis {
			position: absolute;
			top: 0;
			width: 40px;
			left: -20px;
			fill: var(--ColorThemes3);
		}
		#y_axis > svg {
			overflow: visible;
		}
		#legend {
			position: absolute;
			top: 20px;
			left: 40px;
			z-index: 1;
			color: var(--ColorThemes1);
			background: var(--ColorThemes3);
			border-radius: 10px;
		}
		#legend-totals {
			position: absolute;
			bottom: 20px;
			left: 40px;
			z-index: 1;
			color: var(--ColorThemes1);
			background: var(--ColorThemes3);
			border-radius: 10px;
		}
		#main-view .hide {
			display: none;
		}
		@media (max-width: 800px){
			#chart_containerPad {
				background: var(--ColorThemes1);
			}
			#graph {
				background: var(--ColorThemes1);
			}
		}
	</style>

	<div class="ReleaseBlock">
		<div class="ReleaseBlockReverse">
			<div class="ReleaseBlockAbout">
				<div class="ReleaseBlockAbout-Poster">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"></path></svg>
					<img id="rel_posters_1_url" src="" alt=""/>
				</div>

				<div class="ReleaseBlockAbout-Detail">
					<p class="ReleaseBlockAbout-Detail-Name" id="rel_names_ru"><span class="TextLoad TextLoadW"></p>
					<p class="ReleaseBlockAbout-Detail-Genres" id="rel_genres"><span class="TextLoad TextLoadW" data="TextLoad1"></span><span class="TextLoad TextLoadW" data="TextLoad1"></span><span class="TextLoad TextLoadW" data="TextLoad1"></span></p>
			
					<div style="display: none;" class="ReleaseBlockAbout-Detail-Block" data-state="Week" id="rel_week_day_text_none">
						<a onclick="goRoute('/schedule')" target="_self" id="rel_week_day_text_style_1">Пн</a>
						<a onclick="goRoute('/schedule')" target="_self" id="rel_week_day_text_style_2">Вт</a>
						<a onclick="goRoute('/schedule')" target="_self" id="rel_week_day_text_style_3">Ср</a>
						<a onclick="goRoute('/schedule')" target="_self" id="rel_week_day_text_style_4">Чт</a>
						<a onclick="goRoute('/schedule')" target="_self" id="rel_week_day_text_style_5">Пт</a>
						<a onclick="goRoute('/schedule')" target="_self" id="rel_week_day_text_style_6">Сб</a>
						<a onclick="goRoute('/schedule')" target="_self" id="rel_week_day_text_style_7">Вс</a>
					</div>

					<div class="ReleaseBlockAbout-Detail-Block" data-state="Favorite">
						<p id="rel_in_favorites"><span class="TextLoad TextLoadB" data="TextLoad3"></span></p>
						<div style="display:none;" class="DetailFavoriteBlockButton" title="Удалить из избранное" id="delFavorite_rel" onclick="delFavorite(id_t)" data-state="Dell"><svg version="1.1" style="fill: var(--PrimaryColorText);" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 172 172"><path d="M86,129.65217l35.61117,21.49283c5.61867,3.38983 12.54883,-1.64833 11.05817,-8.03383l-9.45283,-40.51317l31.46883,-27.262c4.95933,-4.29283 2.30767,-12.44133 -4.22833,-12.99317l-41.42333,-3.51167l-16.20383,-38.23417c-2.5585,-6.02717 -11.10117,-6.02717 -13.65967,0l-16.20383,38.23417l-41.42333,3.51167c-6.536,0.55183 -9.18767,8.70033 -4.22833,12.99317l31.46883,27.262l-9.45283,40.51317c-1.49067,6.3855 5.4395,11.42367 11.05817,8.03383z"></path></svg></div>
						<div style="display:none;" class="DetailFavoriteBlockButton" title="Добавить в избранное" id="addFavorite_rel" onclick="addFavorite(id_t)"><svg version="1.1" style="fill: var(--ColorThemes3);" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 172 172"><path d="M86,129.65217l35.61117,21.49283c5.61867,3.38983 12.54883,-1.64833 11.05817,-8.03383l-9.45283,-40.51317l31.46883,-27.262c4.95933,-4.29283 2.30767,-12.44133 -4.22833,-12.99317l-41.42333,-3.51167l-16.20383,-38.23417c-2.5585,-6.02717 -11.10117,-6.02717 -13.65967,0l-16.20383,38.23417l-41.42333,3.51167c-6.536,0.55183 -9.18767,8.70033 -4.22833,12.99317l31.46883,27.262l-9.45283,40.51317c-1.49067,6.3855 5.4395,11.42367 11.05817,8.03383z"></path></svg></div>
					</div>

					<div class="ReleaseBlockAbout-Detail-Block" data-state="TypeCode">
						<a id="rel_seasonANDyear"><span class="TextLoad TextLoadR" data="TextLoad2"></span></a>
						<a id="rel_type_code"><span class="TextLoad TextLoadR" data="TextLoad3"></span></a>
					</div>

					<div class="ReleaseBlockAbout-Detail-ContainerText">
						<p class="ReleaseBlockAbout-Detail-Text" id="rel_announce"><span class="TextLoad" data="TextLoad4"></span></p>

						<p class="ReleaseBlockAbout-Detail-Text" id="release_description_text"><span class="TextLoad" data="TextLoad1"></span><span class="TextLoad" data="TextLoad3"></span><span class="TextLoad" data="TextLoad1"></span><span class="TextLoad" data="TextLoad2"></span><span class="TextLoad" data="TextLoad1"></span><span class="TextLoad" data="TextLoad2"></span><span class="TextLoad" data="TextLoad1"></span><span class="TextLoad" data="TextLoad3"></span><span class="TextLoad" data="TextLoad2"></span><span class="TextLoad" data="TextLoad1"></span><span class="TextLoad" data="TextLoad2"></span><span class="TextLoad" data="TextLoad1"></span><span class="TextLoad" data="TextLoad1"></span><span class="TextLoad" data="TextLoad3"></span><span class="TextLoad" data="TextLoad1"></span><span class="TextLoad" data="TextLoad1"></span><span class="TextLoad" data="TextLoad3"></span><span class="TextLoad" data="TextLoad2"></span><span class="TextLoad" data="TextLoad2"></span><span class="TextLoad" data="TextLoad2"></span><span class="TextLoad" data="TextLoad2"></span><span class="TextLoad" data="TextLoad3"></span></p>

						<div id="hidden2" style="display: none;">
							<br />
							<p class="ReleaseBlockAbout-Detail-Text" id="rel_status_string">Статус: </p>
							<p class="ReleaseBlockAbout-Detail-Text" id="rel_voice_html">Озвучка: </p>
							<p class="ReleaseBlockAbout-Detail-Text" id="rel_timing_html">Тайминг: </p>
							<p class="ReleaseBlockAbout-Detail-Text" id="rel_translator_html">Перевод: </p>
							<p class="ReleaseBlockAbout-Detail-Text" id="rel_editing_html">Редактура: </p>
							<p class="ReleaseBlockAbout-Detail-Text" id="rel_decor_html">Оформление: </p>
							<br />
							<p class="ReleaseBlockAbout-Detail-Text" id="rel_names_en">Навзание EN: </p>
							<br />
							<p class="ReleaseBlockAbout-Detail-Text"><a id="rel_SHIKIMORI" href="https://shikimori.one/animes?search=" target="_blank">Поиск SHIKIMORI</a></p>
							<br />
							<img class="ReleaseBlockAbout-Detail-Image" id="rel_posters_2_url" src="" alt=""/>
						</div>

						<br>

						<p class="ReleaseBlockAbout-Detail-Text"><a onclick="view('hidden1', 'hidden2', 'hidden3'); return false" style="font-weight: 600;" id="allViewBut">Подробнее...</a></p>
					</div>
					
				</div>
			</div>

			<div class="ReleaseBlockPlayer" id="ReleaseBlockPlayerRuTube">
				<div class="ReleaseBlockPlayerLeft" id="ReleasePlayerRuTube">
				</div>
				<div class="ReleaseBlockPlayerRight" id="PlaySerieRuTube">
					<div class="posterSerie"></div>
					<div class="posterSerie"></div>
					<div class="posterSerie"></div>
					<div class="posterSerie"></div>
					<div class="posterSerie"></div>
					<div class="posterSerie"></div>
				</div>
			</div>

			<div class="ReleaseBlockPlayer" id="ReleaseBlockPlayer">
				<div class="ReleaseBlockPlayerLeft" id="ReleasePlayer">
					<div id="player"></div>
				</div>
				<div class="ReleaseBlockPlayerRight" id="PlaySerie">
					<div class="posterSerie"></div>
					<div class="posterSerie"></div>
					<div class="posterSerie"></div>
					<div class="posterSerie"></div>
					<div class="posterSerie"></div>
					<div class="posterSerie"></div>
				</div>
			</div>

		</div>

		<div class="ReleaseBlockSliders" id="ReleaseBlockSliders">
			<div class="ReleaseBlockRecomend" id="ReleaseRecomendDisplay" style="display:none">
				<h3>Связанные релизы</h3>
				<div class="ReleaseBlockRecomendSlider" id="ReleaseRecomend">
					<div style="width:8px;"></div>
					
				</div>
			</div>

			<details class="ReleaseBlockSlidersDetails">
				<summary>Информация о вашем подключении.</summary>
				
				<div id="chart_containerPad">
					<div id="chart_container">
						<div id="legend"></div>
						<div id="legend-totals"></div>
						<div id="y_axis"></div>
						<div id="chart"></div>
					</div>
				</div>
				<div id="graph"></div>
				<p style="font-size: 16px;margin: 5px 20px;">Трекеры:</p>
				<p style="font-size: 14px;" id="trackerAnnounce"></p>

				<details class="DetailsServers" id="servers">
					<summary>Если серия не грузит, то попробуйте поменять сервер.</summary>
				</details>
			</details>

			<div class="ReleaseBlockSlidersDetails" id="PlayerKeys">
				<p><span>Клавиша F</span><span>Полноэкранный режим видео</span></p>
				<p><span>Клавиша M</span><span>Включение / выключение звука</span></p>
				<p><span>Пробел</span><span>Переключение пуск / пауза</span></p>
				<p><span>Стрелки ← и →</span><span>Перемотка</span></p>
			</div>

			<div class="ReleaseBlockSlidersDetails">
				<center><p style="font-size: 17px;">Наш сайт использует P2P подключение!</p></center>
				<p>Как это устроено? Очень просто. У нас 4 пользователя, которые хотят посмотреть новую серию любимого аниме.
				Все 4 пользователя начали смотреть серию не одновременно, а с интервалом в 2-10 минут. Самый первый загрузит серию с сервера AniLibria.tv. Второй и последующие пользователи загрузят большую часть у тех пользователей, которые уже немного прогрузили серию и совсем немного с сервера AniLibria.tv.</p>
				<p>Зачем это нужно? Для того, чтоб сервера AniLibria.tv были менее загружены, и больше людей смогли посмотреть новую серию без проблем.</p>
			</div>

		</div>

  </div>
  `;

	LoadRelisePHPSESSID();
	if(data != null) {
		GeneratorRelise(data);
	}
	LoadApiRelise(id);
	LoadApiReliseRecomend(id);
	LoadApiServer();

	appWidth();
}

// Функция получения PHPSESSID из локального хранилища
function LoadRelisePHPSESSID(){
	MySessID = localStorage.getItem('PHPSESSID');
}


// Функции запросов к Api
function LoadApiRelise(id) {
	id_t = id;
  url = config["titels_api"]+'getTitle?id='+id+'&remove=torrents';

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
		GeneratorRelise(data);
		if(Object.keys(data['player']['playlist']).length != 0){
			GeneratorPlaySerie(data, id);
			dataPlayer = data["player"];
			series_t = data["player"]["series"]["last"];
			dataPlayerFirst = data["player"]["series"]["first"]-1
			playerLoad(id);
		} else {
			document.getElementById('ReleaseBlockPlayer').style.display = 'none';
			document.getElementById('ReleaseBlockSliders').style.display = 'none';
			if(Object.keys(data['player']['rutube_playlist']).length != 0){
				document.getElementById('ReleaseBlockPlayerRuTube').style.display = 'flex';
				document.getElementById('ReleasePlayerRuTube').innerHTML= `<iframe id="PlayerRuTube" src="https://rutube.ru/play/embed/${data['player']['rutube_playlist']['1']['rutube_id']}?skinColor=d53c3c" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen></iframe>`
				GeneratorRuTubeSerie(data['player']['series']['last'], data['player']['rutube_playlist'])
			}
		}

		if (MySessID) {
      LoadApiReliseFav(id);
    }

		preloader_none();
  })
  .catch(function (error) {
    console.log('error', error)
  })
}
function LoadApiReliseFav(id) {
	if(FavoritesList == null) {
		var cookie = localStorage.getItem('PHPSESSID');
		var url = config["titels_api"]+"getFavorites?session="+cookie+"&limit=-1";
		fetch(url)
		.then(function (response) {
			if (response.status !== 200) {
				return Promise.reject(new Error(response.statusText))
			}
			return Promise.resolve(response)
		})
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			data.reverse();
			FavoritesList = data;
			GeneratorReliseFavorites(id);
		})
		.catch(function (error) {
			console.log('error', error)
		})
	} else {
		GeneratorReliseFavorites(id);
	}
}
function LoadApiReliseRecomend(id, urlR=null){
	if(urlR == null){
		url = 'https://api.litelibria.com/RelatedReleases.json';
	} else {
		url = 'https://'+config["domains"]+'/RR/RelatedReleases.json';
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
		GeneratorReliseRecomend(data, id);
  })
	.catch((error) => {
		LoadApiReliseRecomend(id, 1)
	});
}
function LoadApiServer(){
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
		GeneratorServer(data)
  })
}


function GeneratorServer(data){
	var my_server = localStorage.getItem('my_server');
	document.getElementById('servers').innerHTML = '<summary>Если серия не грузит, то попробуйте поменять сервер.</summary>';
	for (var i = 0; i < data.length; i++) {
		if (!my_server) {
			var style_server = "";
			var title_server = "Сменить сервер";
		} else if (my_server == 'auto') {
			var style_server = "";
			var title_server = "Сменить сервер";
		}else{
			if (my_server == data[i]) {
				var style_server = "background: var(--PrimaryColor);color: var(--PrimaryColorText) !important;";
				var title_server = "Выбранный сервер";
			} else {
				var style_server = "";
				var title_server = "Сменить сервер";
			}
		}
		var div = document.createElement('div');
		document.getElementById('servers').appendChild(div);
		div.setAttribute('onclick', `release_server('${data[i]}')`)
		div.setAttribute('style', style_server);
		div.setAttribute('title', title_server);
		div.className = 'ServersButton';
		div.innerHTML += `Сервер ${data[i]}`;
	}

	var div = document.createElement('div');
	document.getElementById('servers').appendChild(div);
	div.className = 'ServersButton';
	div.setAttribute('onclick', `release_server(\'auto\')`);
	if (!my_server) {
		div.setAttribute('style', `background: var(--PrimaryColor);color: var(--PrimaryColorText) !important;`);
		div.setAttribute('title', 'Выбранный сервер');
		div.innerHTML += `Сервер авто выбор`;
	} else if (my_server == 'auto') {
		div.setAttribute('style', `background: var(--PrimaryColor);color: var(--PrimaryColorText) !important;`);
		div.setAttribute('title', 'Выбранный сервер');
		div.innerHTML += `Сервер авто выбор`;
	} else {
		div.setAttribute('title', 'Сменить сервер');
		div.innerHTML += `Сервер авто выбор`;
	}
}



// Функции заполнения контента релиза
function GeneratorRelise(data){
	name_t = data.names.ru;
	var genres,
		  voice,
      timing,
      translator,
      editing,
      decor,
			announce;

	if(data.genres.length > 0){
		for(var i=0; data.genres.length > i; i++){
			if(genres == null) genres =   `<a onclick="goRoute('/season', {genres:'${data["genres"][i]}'})" style="text-decoration: none;">${data["genres"][i]}</a>`;
			else genres = genres + ", " + `<a onclick="goRoute('/season', {genres:'${data["genres"][i]}'})" style="text-decoration: none;">${data["genres"][i]}</a>`;
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
		document.getElementById('rel_week_day_text_none').setAttribute("style", "display: flex;");
	}

	if (data.team.voice.length > 0) {
    for(let i = 0; data.team.voice.length > i; i++) {
      if (voice == null) voice =  `<a onclick="goRoute('/season', {voice: '${data.team.voice[i]}'})">${data.team.voice[i]}</a>`;
			else voice = voice + ", " + `<a onclick="goRoute('/season', {voice: '${data.team.voice[i]}'})">${data.team.voice[i]}</a>`;
    }
		voice = "Озвучка: " + voice;
  } else {
		voice = "";
	}

	if (data.team.timing.length > 0) {
    for(let i = 0; data.team.timing.length > i; i++) {
      if (timing == null) timing =  `<a onclick="goRoute('/season', {timing: '${data.team.timing[i]}'})">${data.team.timing[i]}</a>`;
			else timing = timing + ", " + `<a onclick="goRoute('/season', {timing: '${data.team.timing[i]}'})">${data.team.timing[i]}</a>`;
    }
		timing = "Тайминг: " + timing;
  } else {
		timing = "";
	}

	if (data.team.translator.length > 0) {
    for(let i = 0; data.team.translator.length > i; i++) {
			if (translator == null) translator =  `<a onclick="goRoute('/season', {translator: '${data.team.translator[i]}'})">${data.team.translator[i]}</a>`;
			else translator = translator + ", " + `<a onclick="goRoute('/season', {translator: '${data.team.translator[i]}'})">${data.team.translator[i]}</a>`;
    }
		translator = "Перевод: " + translator;
  } else {
		translator = "";
	}

	if (data.team.editing.length > 0) {
    for(let i = 0; data.team.editing.length > i; i++) {
      if (editing == null) editing =  `<a onclick="goRoute('/season', {editing: '${data.team.editing[i]}'})">${data.team.editing[i]}</a>`;
			else editing = editing + ", " + `<a onclick="goRoute('/season', {editing: '${data.team.editing[i]}'})">${data.team.editing[i]}</a>`;
    }
		editing = "Редактура: " + editing;
  } else {
		editing = "";
	}

	if (data.team.decor.length > 0) {
    for(let i = 0; data.team.decor.length > i; i++) {
      if (decor == null) decor =  `<a onclick="goRoute('/season', {decor: '${data.team.decor[i]}'})">${data.team.decor[i]}</a>`;
			else decor = decor + ", " + `<a onclick="goRoute('/season', {decor: '${data.team.decor[i]}'})">${data.team.decor[i]}</a>`;
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
    var atribute = `goRoute('/season', {year: '${data["season"]["year"]}', code: '${data["season"]["code"]}'})`;
    document.getElementById('rel_seasonANDyear').setAttribute("onclick", atribute);
    var seasonANDyear_text = `${data["season"]["year"]} ${data["season"]["string"]}`;
  } else if (data["season"]["year"]){
		var atribute = `goRoute('/season', {year: '${data["season"]["year"]}'})`;
    document.getElementById('rel_seasonANDyear').setAttribute("onclick", atribute);
    var seasonANDyear_text = `${data["season"]["year"]}`;
  } else if (data["season"]["string"]){
		var atribute = `goRoute('/season', {code: '${data["season"]["code"]}'})`;
    document.getElementById('rel_seasonANDyear').setAttribute("onclick", atribute);
    var seasonANDyear_text = `${data["season"]["string"]}`;
  }
  if (document.documentElement.clientWidth <= '375' && data["type"]["full_string"].length >= 15) {
    var season_full_string = data["type"]["full_string"].substr(0, 15) + '...';
  } else {
    var season_full_string = data["type"]["full_string"];
  }


	document.getElementById('rel_in_favorites').innerHTML = `В избранном у  ${data["in_favorites"]}`;

	if (localStorage.getItem('postersMode') == 'webp') {
  	document.getElementById('rel_posters_1_url').src = config["webpPosters"]+data["id"]+'.webp';
		document.getElementById('rel_posters_2_url').src = config["webpPosters"]+data["id"]+'.webp';
	} else {
  	document.getElementById('rel_posters_1_url').src = config["posters"]+data["posters"]["medium"]["url"];
		document.getElementById('rel_posters_2_url').src = config["posters"]+data["posters"]["medium"]["url"];
	}

  document.getElementById('rel_names_ru').innerHTML = `${data["names"]["ru"]}`;
  document.getElementById('rel_genres').innerHTML = `${genres}`;
  document.getElementById('rel_seasonANDyear').innerHTML = `${seasonANDyear_text}`;
  var atribute_del = `delFavorite('${data["id"]}')`;
  var atribute_add = `addFavorite('${data["id"]}')`;
  document.getElementById('delFavorite_rel').setAttribute("onclick", atribute_del);
  document.getElementById('addFavorite_rel').setAttribute("onclick", atribute_add);

	var atribute_type_code = `goRoute('/season', {type: '${data["type"]["code"]}'})`;
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

	if(data.player.series.last == 1){
		document.getElementById('PlaySerie').setAttribute("style", "display:none;");
		document.getElementById('ReleasePlayer').dataset.state = 'SerieOne';
	}
}

// Функции заполнения контента плейлиста
function GeneratorPlaySerie(data, id){
	document.getElementById('PlaySerie').innerHTML = '';
	for(let j = data.player.series.first-1; data.player.series.last > j; j++) {
		i = j+1;

		minutes = "";
		posterPercent = 0;

		if(historyGet().length != 0){
			if(historyGet('titel', id, i) != -1){
				time = historyGet('titel', id, i).time[0]
				minutes = "<br><span>" + (time / 60).toFixed(2).replace(".", ":") + "</span>";
				posterPercent = historyGet('titel', id, i).time[0] / ( historyGet('titel', id, i).time[1] / 100) + "%"
			}
		}

		poster = null;
		if(data["player"]["playlist"][i]["preview"] == null){
			poster = config["CustomPosters"] + "/anilibria_bot/getThumbnail/" + id + "/" + i + "/1.jpg";
		} else {
			poster = config["posters"] + data["player"]["playlist"][i]["preview"];
		}

		if(data.type.code == 0){
			SerieType = "Фильм"
		} else if(data.type.code == 2){
			SerieType = "OVA"
		} else if(data.type.code == 3){
			SerieType = "ONA"
		} else if(data.type.code == 4){
			SerieType = "Спешл"
		} else {
			SerieType = "Серия"
		}

		var div = document.createElement('div');
		document.getElementById('PlaySerie').appendChild(div);
		div.setAttribute('onclick', `releaseHistoryPlay("${id}", "${i}")`)
		div.className = 'posterSerie';
		div.innerHTML += `
			<div class="SerieBlock">
				<div class="posterPercentBlock"><span class="posterPercent" style="width: ${posterPercent}"></span></div>
				<div class="posterSerieNum">${SerieType} ${i}${minutes}</div>
				<img src="${poster}">
			</div>
		`;
	}
}

// Функции заполнения контента связаных релизов
function GeneratorReliseRecomend(data, id){
	FilterTitel = data.filter(function(items){
		return items.find(function(element){
			return element == id;
		})
	});

	if(FilterTitel.length > 0){
		document.getElementById('ReleaseRecomendDisplay').style.display = '';
		for (let i = 0; FilterTitel[0].length > i; i++) {
			var div = document.createElement('div');
			document.getElementById('ReleaseRecomend').appendChild(div);
			div.className = 'LineCard-SmallHovers';

			if (localStorage.getItem('postersMode') == 'webp') {
				var stylePoster = `<img src="${config["webpPosters"]}${FilterTitel[0][i]}.webp" alt="">`
			} else {
				var stylePoster = `<img src="" alt="" id="recomendPoster${FilterTitel[0][i]}">`
			}

			div.innerHTML += `
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"/></svg>
				${stylePoster}
				<a class="LineCard-Hover" onclick="goRoute('/release', {id:${FilterTitel[0][i]}})">
					<p class="LineCard-Hover-Serie" id="recomendSerie${FilterTitel[0][i]}">Нэма...</p>
				</a>
			`;
		}

		var url = config["titels_api"]+'getTitles?id_list='+FilterTitel[0]+'&filter=id,posters.small,player.series';
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
			for (let t = 0; t < data.length; t++) {
				if (localStorage.getItem('postersMode') != 'webp') {
					document.getElementById("recomendPoster"+data[t]["id"]).src = config["posters"]+data[t]["posters"]["small"]["url"];
				}
				
				if(data[t].player.series != null){
					if(data[t].player.series.last != null){
						document.getElementById("recomendSerie"+data[t]["id"]).innerHTML = "Серия "+data[t]["player"]["series"]["last"];
					}
				}
			}
		})
	}

}

function GeneratorReliseFavorites(id){
	var FilterTitel = FavoritesList.filter(function(items) {
		return items.id == id;
	});
	if(FavoritesList.indexOf(FilterTitel[0]) > -1){
		document.getElementById('delFavorite_rel').style.display = "";
		document.getElementById('addFavorite_rel').style.display = "none";
	} else {
		document.getElementById('delFavorite_rel').style.display = "none";
		document.getElementById('addFavorite_rel').style.display = "";
	}
}

// Функция генерирования плейлиста
function playerPlaylistGenerator(id_t, dataPlayer, series_t, dataPlayerFirst, server=dataPlayer["host"]) {
	var strPlayer = '';
  var my_skips_opening = localStorage.getItem('my_skips_opening');
  for (let i = dataPlayerFirst; i < series_t; i++) {
    var poster_preview
    var i2 = i+1;
		var PlayerHost;

    var remove = "";
    if (dataPlayer["playlist"][i2]["skips"]["opening"][0] && dataPlayer["playlist"][i2]["skips"]["opening"][1]) {
      if (my_skips_opening == '1') {
        remove = '"start":"0", "remove":"'+dataPlayer["playlist"][i2]["skips"]["opening"][0]+'-'+dataPlayer["playlist"][i2]["skips"]["opening"][1]+'", ';
      } else {
				remove = '"skip":"'+dataPlayer["playlist"][i2]["skips"]["opening"][0]+'-'+dataPlayer["playlist"][i2]["skips"]["opening"][1]+'", '
			}
    }


		if(localStorage.getItem('my_server')){
			if(localStorage.getItem('my_server') == "auto"){
				PlayerHost = server;
			} else {
				PlayerHost = localStorage.getItem('my_server');
			}
		} else {
			PlayerHost = server;
		}

    var url_relise_480 = "";
    var url_relise_720 = "";
    var url_relise_1080 = "";
    if (dataPlayer["playlist"][i2]) {
      if (dataPlayer["playlist"][i2]["hls"]["sd"]) {
        url_relise_480 = "[480p]https://"+PlayerHost+dataPlayer["playlist"][i2]["hls"]["sd"];
      }
      if (dataPlayer["playlist"][i2]["hls"]["hd"]) {
        url_relise_720 = "[720p]https://"+PlayerHost+dataPlayer["playlist"][i2]["hls"]["hd"];
      }
      if (dataPlayer["playlist"][i2]["hls"]["fhd"]) {
        url_relise_1080 = ",[1080p]https://"+PlayerHost+dataPlayer["playlist"][i2]["hls"]["fhd"];
      }
      if (dataPlayer["playlist"][i2]["preview"]) {
        poster_preview = config["posters"]+''+dataPlayer["playlist"][i2]["preview"];
      } else {
        // poster_preview = "img/player.webp";
        // poster_preview = "https://api.7o7.co/anilibria_bot/getPoster/"+id_t;
				poster_preview = config["CustomPosters"] + "/anilibria_bot/getThumbnail/" + id_t + "/" + i2 + "/1.jpg";
      }
      var url_relise_comma = " ";
      if (i2 != series_t) {
        url_relise_comma = ", ";
      }
      var str_m_Player = `{"title":"Серия ${i2}","poster":"${poster_preview}", ${remove} "id": "${id_t}s${i2}", "file":"${url_relise_480}, ${url_relise_720} ${url_relise_1080}"}`+url_relise_comma;
      strPlayer += str_m_Player;
    }
  }
  
	return str_playlist = JSON.parse('['+strPlayer+']');
}

// Функция подключения и настройки плеера
function playerLoad(id_t) {
	var engineConfig  = {
		loader: {
			trackerAnnounce: [
				"wss://tracker.sdev.xyz",
				"wss://tracker.litelibria.com",
				// "wss://tracker.openwebtorrent.com"
			],
			cachedSegmentsCount: 50, // Количество сегментов видео которое мы храним для раздачи p2p пирам
			cachedSegmentExpiration: 15 * 60 * 1000, // Сколько времени будет хранится сегменты для раздачи p2p пирам
			requiredSegmentsPriority: 9, // Количество сегментов видео которое нужно сразу подгрузить, нужно непрерывного стриминга
			p2pDownloadMaxPriority: 150, // Количество сегментов видео которое мы можем скачать по p2p пирам
			httpDownloadMaxPriority: 1500, // Количество сегментов видео которое мы можем скачать по http
			simultaneousHttpDownloads: 1, // Максимальное количество одновременных загрузок из HTTP-источника
			simultaneousP2PDownloads: 10, // Максимальное количество одновременных загрузок по p2p пирам
			httpDownloadProbabilitySkipIfNoPeers: true, // Не загружать сегменты по HTTP случайным образом, когда нет p2p пиров
		}
	};
	engine = new p2pml.hlsjs.Engine(engineConfig);

	player = new Playerjs({
		id:"player",
		poster:"img/player.webp",
		file:"",
		cuid: id_t,
		bgcolor: 'var(--card-background-2)',
		hlsconfig:{
			liveSyncDurationCount: 7,
			loader: engine.createLoaderClass(),
		}
	});


  player.api("file", playerPlaylistGenerator(id_t, dataPlayer, series_t, dataPlayerFirst));

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

	initChart(); // Запуск Rickshaw
	initGraph(); // Запуск p2p-graph
}

// Функции отслеживания событий плеера
function PlayerjsEvents(event,id,info){	
	if(event=="stop"){
		engine.destroy(); // Разрываем P2P раздачу
	}

	if(event=="init"){
		// Отобразить название трекеров
		trackerAnnounce = engine.getSettings().loader.trackerAnnounce;
		if (Array.isArray(trackerAnnounce)) {
			for(var i=0; trackerAnnounce.length > i; i++){
				document.getElementById("trackerAnnounce").innerHTML += `<span>${trackerAnnounce[i]}</span><br /><br />`;
			}
		}
	}

	if(event=="new"){
		engine.destroy(); // Разрываем P2P раздачу для прошлого файла
		refreshChart(); // Обновление графика Rickshaw
	}

	if(event=="play"){
		if (p2pml.core.HybridLoader.isSupported()) {
			// Запуск P2P раздачи
			p2pml.hlsjs.initHlsJsPlayer(player.api('hls'));

			// Добавить на p2p-graph нового подключения
			engine.on(p2pml.core.Events.PeerConnect, onPeerConnect.bind());

			// Удалить на p2p-graph отключенного подключения
			engine.on(p2pml.core.Events.PeerClose, onPeerClose.bind());

			// Добавить количество загруженых Байт на график Rickshaw
			engine.on(p2pml.core.Events.PieceBytesDownloaded, onBytesDownloaded.bind());

			// Добавить количество отправленных Байт пирам P2P на график Rickshaw
			engine.on(p2pml.core.Events.PieceBytesUploaded, onBytesUploaded.bind());

			// Вывод в консоль отладочных P2P сообшений
			// engine.on("segment_loaded", (segment, peerId) => console.log("segment_loaded from", peerId ? `peer ${peerId}` : "HTTP", segment));
		}

		mobile_play_fullscreen();
	}

	if(event=="pause"){
		releaseHistorySave();
	}

	if(event=="fullscreen"){
		player_navigation('none');
	}

	if(event=="exitfullscreen"){
		player_navigation('flex');
	}

	if(event=="seek"){
		releaseHistorySave();
	}

	if(event=="time"){
		if(Math.round(info) % 10 === 0){
			releaseHistorySave();
		}
	}
}

// Функция открытия полноэкранного режима в мобильной версии
function mobile_play_fullscreen(){
	var width = document.documentElement.clientWidth;
	if(width <= 800){
		player.api("fullscreen");
	}
}

// Функция скрытия элементов интерфейса в полноэкранном режиме
function player_navigation(display){
	if(display == "none"){
		document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: light)"]').setAttribute("content", "#000000");
		document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: dark)"]').setAttribute("content", "#000000");

		document.getElementById('navi').setAttribute("style", "display:none;");
		document.getElementById('back_to_top').setAttribute("style", "display:none;");
		document.body.setAttribute("style", "touch-action: none;-ms-touch-action: none;");
	}
	if(display == "flex"){
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
		
		document.getElementById('navi').setAttribute("style", "");
		document.getElementById('back_to_top').setAttribute("style", "");
		document.body.setAttribute("style", "");
	}
}

// Функция раскрытия блока Подробнее...
function view(n, n2, n3) {
  style = document.getElementById(n).style;
  style.display = (style.display == 'contents') ? 'none' : 'contents';
  style2 = document.getElementById(n2).style;
  style2.display = (style2.display == 'block') ? 'none' : 'block';
  style3 = document.getElementById(n3).style;
  style3.display = (style3.display == 'none') ? 'contents' : 'none';
	text1 = document.getElementById('allViewBut');

	text1.innerHTML = (style3.display == 'none') ? 'Скрыть...' : 'Подробнее...';
}

// Функция изменения предпочитаемого сервера
function release_server(name) {
  localStorage.setItem('my_server', name);
  location.reload();
}

// Функция удаления из избранного
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
	FavoritesList = null;
}

// Функция добавления в избранное
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
	FavoritesList = null;
}

// Функция сохранения истории Приложения
function releaseHistorySave(){
	var playlistID = player.api("playlist_id").split('s');

	var titel = playlistID[0];
	var serie = playlistID[1];
	var time = player.api("time");
	var duration = player.api("duration");
	var date = Date.now();
	historySave(titel, serie, time, duration, date, name_t)
}

// Функция смены серии плейлиста
function releaseHistoryPlay(titel, serie){
	playerID = "id:"+titel+"s"+serie;
	playerTime = '';

	if(historyGet().length != 0){
		if(historyGet('titel', titel, serie) != -1){
			time = historyGet('titel', titel, serie).time[0]
			playerTime = "[seek:"+time+"]";
		}
	}
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
			player.api("file", playerPlaylistGenerator(id_t, dataPlayer, series_t, dataPlayerFirst, data[0]));
			player.api("play", playerID+playerTime)

			console.log("Сервер обновлён, новый сервер - "+data[0]);
		})
}

// Функциb смены серии плейлиста из плеера
function PlayerJSPrev(file){
	numSeriePlayer = file.split('/')[7]
	if(numSeriePlayer > 1){
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
			player.api("file", playerPlaylistGenerator(id_t, dataPlayer, series_t, dataPlayerFirst, data[0]));
			newSeriePlayer = parseInt(numSeriePlayer) - 1
			playerID = "id:"+id_t+"s"+ newSeriePlayer
			player.api("play", playerID)

			console.log("Сервер обновлён, новый сервер - "+data[0]);
		})
	}
}
function PlayerJSNext(file){
	numSeriePlayer = file.split('/')[7]
	if(numSeriePlayer < series_t){
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
			player.api("file", playerPlaylistGenerator(id_t, dataPlayer, series_t, dataPlayerFirst, data[0]));
			newSeriePlayer = parseInt(numSeriePlayer) + 1
			playerID = "id:"+id_t+"s"+ newSeriePlayer
			player.api("play", playerID)

			console.log("Сервер обновлён, новый сервер - "+data[0]);
		})
	}
}


// Функции заполнения контента плейлиста RuTube
function GeneratorRuTubeSerie(series, rutube_playlist){
	document.getElementById('PlaySerieRuTube').innerHTML = '';
	for(let j = 0; series > j; j++) {
		i = j+1
		var div = document.createElement('div');
		document.getElementById('PlaySerieRuTube').appendChild(div);
		div.setAttribute('onclick', `releaseHistoryPlayRuTube("${rutube_playlist[i]['rutube_id']}")`)
		div.className = 'posterSerie';
		div.innerHTML += `
			<div class="SerieBlock" style="background: var(--ColorThemes3);">
				<div class="posterSerieNum">Серия ${i}</div>
				<img src="">
			</div>
		`;
	}
}
// Функция смены серии плейлиста RuTube
function releaseHistoryPlayRuTube(id){
	var player = document.getElementById('PlayerRuTube');
	player.contentWindow.postMessage(JSON.stringify({
		type: 'player:changeVideo',
		data: {
			id: id,
			params: {
				color: 'd53c3c'
			}
		}
	}), '*');
}