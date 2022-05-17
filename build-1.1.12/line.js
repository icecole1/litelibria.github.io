function page_line() {
  document.getElementById('app').innerHTML = `
	<div class="LineBlock">

		<br>
		<!-- Блок Последние обновления -->
		<div class="LineList-Updates">
			<h1>Последние обновления</h1>
			<div class="LineGenerator-BigHovers" id="LineGenerator-Updates">
				<!-- Карточки с контентом -->

			</div>

			<!-- Анимация загрузки -->
			<div id="LoadAnimUpdates" style="display:none;">
				<br /><br />
				<img src="img/load.svg" style="max-width: 45px;">
			</div>	
		</div>

		<div class="DesctopBlock">
			<div class="LeftBlock">

				<!-- Блок Новый трейлер -->
				<div class="LineList-Trailer" id="LineGenerator-Trailer" style="display: none">
					<a id="LineGenerator-Trailer-1" href="#" target="_blank">
						<div id="LineGenerator-Trailer-2" class="LineList-Trailer-BG">
							<div class="LineList-Trailer-BG-Gradien">
								<div class="LineList-Trailer-Text">
									<p id="LineGenerator-Trailer-3" class="LineList-Trailer-Text-Big"></p>
									<p id="LineGenerator-Trailer-4" class="LineList-Trailer-Text-Medium"></p>
									<p id="LineGenerator-Trailer-5" class="LineList-Trailer-Text-Small"></p>
								</div>
								<div id="LineGenerator-Trailer-6" class="LineList-Trailer-Poster"></div>
							</div>
						</div>
					</a>
				</div>




				<!-- Блок Поиск по жанрам -->
				<div class="LineList-Genres">
					<h1>Поиск по жанрам</h1>
					<div class="LineGenerator-Genres" id="LineGenerator-Genres">
						<!-- Карточки с контентом -->					
					
					</div>

					<!-- Анимация загрузки -->
					<div id="LoadAnimGenres" style="display:none;">
						<br /><br />
						<img src="img/load.svg" style="max-width: 45px;">
					</div>
				</div>




				<!-- Блок Ожидается сегодня -->
				<div class="LineList-Schedule">
					<div style="display: flow-root;">
						<h1 style="float: left;">Ожидается сегодня</h1>
						<h1 style="float: right;"><a class="LineList-Button-All" onclick="edit_href('/schedule')">Расписание</a></h1>
					</div>
					<div class="LineGenerator-SmallHovers" id="LineGenerator-Schedule">
						<!-- Карточки с контентом -->

					</div>
					<!-- Анимация загрузки -->
					<div id="LoadAnimSchedule" style="display:none;">
						<br /><br />
						<img src="img/load.svg" style="max-width: 45px;">
					</div>	
				</div>




				<!-- Блок Рекомендуем к просмотру -->
				<div class="LineList-SelectRecommend" id="LineGenerator-SelectRecommend" style="display: none">
					<div id="LineGenerator-SelectRecommend-1" class="LineList-SelectRecommend-BG">
						<div class="LineList-SelectRecommend-BG-Gradien">
							<div>
								<div class="LineList-SelectRecommend-Text">
									<p id="LineGenerator-SelectRecommend-2" class="LineList-SelectRecommend-Text-Big"></p>
									<p id="LineGenerator-SelectRecommend-3" class="LineList-SelectRecommend-Text-Medium"></p>
									<p id="LineGenerator-SelectRecommend-4" class="LineList-SelectRecommend-Text-Small"></p>
								</div>
							</div>
							<div id="LineGenerator-SelectRecommend-5" class="LineList-SelectRecommend-Poster" style="display: none"></div>
							<div id="LineGenerator-SelectRecommend-6" class="LineList-SelectRecommend-Poster" style="display: none"></div>
							<div id="LineGenerator-SelectRecommend-7" class="LineList-SelectRecommend-Poster" style="display: none"></div>
							<div id="LineGenerator-SelectRecommend-8" class="LineList-SelectRecommend-Poster" style="display: none"></div>
							<div id="LineGenerator-SelectRecommend-9" class="LineList-SelectRecommend-Poster" style="display: none"></div>
						</div>
					</div>
		
				</div>




				<!-- Блок Видео на каналах Anilibria -->
				<div class="LineList-Video">
					<h1>Видео на каналах Anilibria</h1>
					<div class="LineGenerator-BigHovers" id="LineGenerator-Video">
						<!-- Карточки с контентом -->

					</div>

					<!-- Анимация загрузки -->
					<div id="LoadAnimVideo" style="display:none;">
						<br /><br />
						<img src="img/load.svg" style="max-width: 45px;">
					</div>	
				</div>




				<!-- Блок Лучшее сезона в прошлом году -->
				<div class="LineList-Recomend">
					<h1>Лучшее сезона в прошлом году</h1>
					<div class="LineGenerator-SmallHovers" id="LineGenerator-Recomend">
						<!-- Карточки с контентом -->

					</div>
					<!-- Анимация загрузки -->
					<div id="LoadAnimRecomend" style="display:none;">
						<br /><br />
						<img src="img/load.svg" style="max-width: 45px;">
					</div>	
				</div>

			</div>

			<div class="RightBlock">

				<br>
				<!-- Блок История просмотров  -->
				<div class="LineList-History">
					<div style="display: flow-root;">
						<h1 style="float: left;">История просмотров</h1>
						<h1 style="float: right;"><a class="LineList-Button-All" onclick="edit_href('/myHistory')">Ещё...</a></h1>
					</div>
					<div class="LineGenerator-History" id="LineGenerator-History">
						<!-- Карточки с контентом -->
						<div id="HistoryNone">
							<br /><br />
							<img src="img/libriatyan/4.png" style="max-width: 145px;">
							<br /><br />
							<p style="color: var(--ColorThemes3);">Пока пусто...</p>
						</div>	

					</div>
					<!-- Анимация загрузки -->
					<div id="LoadAnimHistory" style="display:none;">
						<br /><br />
						<img src="img/load.svg" style="max-width: 45px;">
					</div>	
				</div>
			</div>
		</div>
  </div>
	`;

	// <!-- Блок Каталог	 -->
	// 	<div class="LineList-Schedule">
	// 		<h1>Каталог</h1>
	// 		<div class="LineGenerator-MediumHovers" id="LineGenerator-Catalog">
	// 			<!-- Карточки с контентом -->

	// 			<div class="LineCard-MediumHovers">
	// 				<div class="LineCard-TextSerie">Серия 7/12</div>
	// 				<img src="https://tb2og.anilib.top/media/releases/posters/9170/qOMX8o58joDfsKAG.jpg" alt="">
	// 				<a class="LineCard-Hover" onclick="edit_href('/release', 'id', 9170)">
	// 					<p class="LineCard-Hover-Name">Мир отомэ-игр — это тяжёлый мир для мобов</p>
	// 					<p class="LineCard-Hover-Genres">Романтика | Фэнтези | Школа</p>
	// 					<p class="LineCard-Hover-Description">Главный герой Леон проживал серую и угнетающую душу жизнь и не жаловался. Молодой человек не гнался за высотами успеха, не обладал какими то уникальными лидерскими качествами и уж тем более, он не был ловеласом. Откровенно говоря, девушки его порой пугали и раздражали. Виной этому его маленькая и вредная сестричка, которая помыкала братом как хотела. Однажды, она даже заставила его пройти отомэ-игру для девочек. Леон потратил на прохождение два мучительных дня. Утомившийся от игры, он упал с лестницы и помер. Думаете, что хуже и быть не могло? Могло! После смерти он переродился в мире той самой злосчастной игры. Правда и это не самая плохая новость. Оказалось, что в этом мире всем правят женщины. Они угнетают мужчин и относятся к ним как к питомцам. И теперь парню нужно как-то выживать в этих диких условиях. Но как вы уже знаете, у него есть преимущество! Он уже прошел игру и знает весь сюжет этого мирка.</p>
	// 				</a>
	// 			</div>

	// 		</div>

	// 		<!-- Анимация загрузки -->
	// 		<div id="LoadAnimCatalog" style="display:none;">
	// 			<br /><br />
	// 			<img src="img/load.svg" style="max-width: 45px;">
	// 		</div>	

			
	// 	</div>


	LoadApiUpdates()
	LoadApiGenres()
	LoadApiSchedule()
	LoadApiVideo()
	LoadApiRecomend()

	LoadApiNEWS()
	GeneratorHistory()

	preloader_none();
}


	var UpdatesList = [];
	var NEWSList = [];
	var ScheduleList = [];
	var VideoList = [];
	var RecomendList = [];
	var HistoryList = [];

	var GenresList = [
		"Боевые искусства",
		"Вампиры",
		"Демоны",
		"Детектив",
		"Драма",
		"Игры",
		"Исторический",
		"Комедия",
		"Магия",
		"Меха",
		"Мистика",
		"Музыка",
		"Повседневность",
		"Приключения",
		"Психологическое",
		"Романтика",
		"Сверхъестественное",
		"Сёдзе",
		"Сейнен",
		"Сёнен",
		"Спорт",
		"Супер сила",
		"Триллер",
		"Ужасы",
		"Фантастика",
		"Фэнтези",
		"Школа",
		"Экшен",
		"Этти"
	];
	var ColorGenresList = [
    "A83845",
    "2E708A",
    "2D8653",
    "2A417E",
    "A953C6",
    "4BC3B5",
    "CCC966",
    "A3D175",
    "2A4C7E",
    "592E8A",
    "A471D0",
    "90A0DA",
    "90A0DA",
    "90A0DA",
    "6CBF40",
    "97C247",
    "75D1A0",
    "6E91CF",
    "6272CB",
    "34819D",
    "1D5849",
    "CABAE8",
    "BEA7E2",
    "321C54",
    "522163",
    "8A2E8A",
    "A838A5",
    "795EC9",
    "CF6E81",
  ];




// Функции запросов к Api
function LoadApiUpdates() {
	// Запуск анимации загрузки контента
	document.getElementById("LoadAnimUpdates").style.display = "";

	// Запрос к Api 
  var url = config["titels_api"]+"getUpdates?filter=id,names.ru,posters.medium,player.series,description,genres&limit=15";
  fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
		document.getElementById("LoadAnimUpdates").style.display = "none";
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
		UpdatesList = data;
		GeneratorUpdates();
  })
  .catch(function (error) {
    console.log('error', error)
  })
}

function LoadApiGenres() {
	// Запуск анимации загрузки контента
	document.getElementById("LoadAnimGenres").style.display = "";

	// Запрос к Api 
  var url = config["titels_api"]+"getGenres?sorting_type=0";
  fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
		document.getElementById("LoadAnimGenres").style.display = "none";
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
		GenresList = data;
		GeneratorGenres();
  })
  .catch(function (error) {
    console.log('error', error)
  })
}

function LoadApiSchedule() {
	// Запуск анимации загрузки контента
	document.getElementById("LoadAnimSchedule").style.display = "";

	var d = new Date();
	var n = d.getDay() - 1;

	// Запрос к Api 
  var url = config["titels_api"]+"getSchedule?filter=id,names.ru,posters.medium,player.series&days="+n;
  fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
		document.getElementById("LoadAnimSchedule").style.display = "none";
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
		ScheduleList = data;
		GeneratorSchedule();
  })
  .catch(function (error) {
    console.log('error', error)
  })
}

function LoadApiVideo() {
	// Запуск анимации загрузки контента
	document.getElementById("LoadAnimVideo").style.display = "";

	// Запрос к Api 
  var url = config["titels_api"]+"getYouTube?limit=10";
  fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
		document.getElementById("LoadAnimVideo").style.display = "none";
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
		VideoList = data;
		GeneratorVideo();
  })
  .catch(function (error) {
    console.log('error', error)
  })
}

function LoadApiRecomend() {
	// Запуск анимации загрузки контента
	document.getElementById("LoadAnimRecomend").style.display = "";

	var RecomendSeason = 1;
	var d = new Date();

	var year = d.getFullYear() - 1;
	var month =  d.getMonth() + 1;
	
	if (month == 1 || month == 2 || month == 3)
		RecomendSeason = 1;
	else if (month == 4 || month == 5 || month == 6)
		RecomendSeason = 2;
	else if (month == 7 || month == 8 || month == 9)
		RecomendSeason = 3;
	else if (month == 10 || month == 11 || month == 12) 
		RecomendSeason = 4;

	// Запрос к Api 
  var url = config["titels_api"]+"advancedSearch?query={season.code} == "+RecomendSeason+" and {season.year} == "+year+"&filter=id,names.ru,posters.medium,player.series&order_by=in_favorites&sort_direction=1&limit=15";
  fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
		document.getElementById("LoadAnimRecomend").style.display = "none";
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
		RecomendList = data;
		GeneratorRecomend();
  })
  .catch(function (error) {
    console.log('error', error)
  })
}

function LoadApiNEWS() {
	// Запрос к Api 
  var url = "https://litelibria.github.io/news.json";
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
		NEWSList = data;
		GeneratorTrailer();
		GeneratorSelectRecommend();
  })
  .catch(function (error) {
    console.log('error', error)
  })
}




// Функции заполнения контента
function GeneratorUpdates() {
	document.getElementById('LineGenerator-Updates').innerHTML = "";
	for (let i = 0; UpdatesList.length > i; i++) {
		var genres = '';
		for(let g = 0; UpdatesList[i].genres.length > g; g++){
			if(genres == '') genres = UpdatesList[i].genres[g];
			else genres = genres + ', ' +UpdatesList[i].genres[g];
		}

		var div = document.createElement('div');
		document.getElementById('LineGenerator-Updates').appendChild(div);
		div.className = 'LineCard-BigHovers';
		div.innerHTML += `
			<img src="${config["CustomPosters"]}/anilibria_bot/getThumbnail/${UpdatesList[i].id}/${UpdatesList[i].player.series.last}" alt="">
			<a class="LineCard-Hover" onclick="edit_href('/release', 'id', ${UpdatesList[i].id})">
				<p class="LineCard-Hover-Name">${UpdatesList[i].names.ru}</p>
				<p class="LineCard-Hover-Genres">${genres}</p>
				<p class="LineCard-Hover-Description">${UpdatesList[i].description}</p>
			</a>
		`;
	}
}

function GeneratorNEWS() {
	document.getElementById('LineGenerator-Updates').innerHTML = "";
	for (let i = 0; NEWSList.length > i; i++) {
		var div = document.createElement('div');
		document.getElementById('LineGenerator-Genres').appendChild(div);
		div.className = 'LineCard-Genres';
		div.innerHTML += `<p>${NEWSList[i]}</p>`;
	}
}

function GeneratorGenres() {
	document.getElementById('LineGenerator-Genres').innerHTML = "";
	for (let i = 0; GenresList.length > i; i++) {
		var div = document.createElement('div');
		document.getElementById('LineGenerator-Genres').appendChild(div);
		div.className = 'LineCard-Genres';
		div.setAttribute("style", `color: #${ColorGenresList[i]};`);
		div.setAttribute("onclick", `edit_href('/season', '', '', '${GenresList[i]}')`);
		div.innerHTML += `<p>${GenresList[i]}</p>`;
	}
}

function GeneratorSchedule() {
	document.getElementById('LineGenerator-Schedule').innerHTML = "";
	for (let i = 0; ScheduleList[0].list.length > i; i++) {
		var div = document.createElement('div');
		document.getElementById('LineGenerator-Schedule').appendChild(div);
		div.className = 'LineCard-SmallHovers';
		div.innerHTML += `
			<img src="${config["posters"]}${ScheduleList[0].list[i].posters.medium.url}" alt="">
			<a class="LineCard-Hover" onclick="edit_href('/release', 'id', ${ScheduleList[0].list[i].id})">
				<p class="LineCard-Hover-Serie">Серия ${ScheduleList[0].list[i].player.series.last}</p>
			</a>
		`;
	}
}

function GeneratorVideo() {
	document.getElementById('LineGenerator-Video').innerHTML = "";
	for (let i = 0; VideoList.length > i; i++) {
		var div = document.createElement('div');
		document.getElementById('LineGenerator-Video').appendChild(div);
		div.className = 'LineCard-BigHovers';
		div.innerHTML += `
			<img src="${VideoList[i].image}" alt="">
			<a class="LineCard-Hover" href="https://www.youtube.com/watch?v=${VideoList[i].youtube_id}" target="_blank">
				<p class="LineCard-Hover-Name">${VideoList[i].title}</p>
			</a>
		`;
	}
}

function GeneratorRecomend() {
	document.getElementById('LineGenerator-Recomend').innerHTML = "";
	for (let i = 0; RecomendList.length > i; i++) {
		var div = document.createElement('div');
		document.getElementById('LineGenerator-Recomend').appendChild(div);
		div.className = 'LineCard-SmallHovers';
		div.innerHTML += `
			<img src="${config["posters"]}${RecomendList[i].posters.medium.url}" alt="">
			<a class="LineCard-Hover" onclick="edit_href('/release', 'id', ${RecomendList[i].id})">
				<p class="LineCard-Hover-Serie">Серия ${RecomendList[i].player.series.last}</p>
			</a>
		`;
	}
}

function GeneratorTrailer() {
	if(NEWSList.blockNewTrailer.Visible){
		document.getElementById("LineGenerator-Trailer").style.display = "";
		document.getElementById("LineGenerator-Trailer-1").setAttribute("href", `https://www.youtube.com/watch?v=${NEWSList.blockNewTrailer.YouTubeID}`);
		document.getElementById("LineGenerator-Trailer-2").setAttribute("style", `background-image: url(${NEWSList.blockNewTrailer.ImageBG})`);
		document.getElementById("LineGenerator-Trailer-3").innerHTML = NEWSList.blockNewTrailer.TextBig;
		document.getElementById("LineGenerator-Trailer-4").innerHTML = NEWSList.blockNewTrailer.TextMedium;
		document.getElementById("LineGenerator-Trailer-5").innerHTML = NEWSList.blockNewTrailer.TextSmall;
		document.getElementById("LineGenerator-Trailer-6").setAttribute("style", `background-image: url(${NEWSList.blockNewTrailer.Poster})`);
	}
}

function GeneratorSelectRecommend() {
	if(NEWSList.blockSelectRecommend.Visible){
		document.getElementById("LineGenerator-SelectRecommend").style.display = "";
		document.getElementById("LineGenerator-SelectRecommend-1").setAttribute("style", `background-image: url(${NEWSList.blockSelectRecommend.ImageBG})`);
		document.getElementById("LineGenerator-SelectRecommend-2").innerHTML = NEWSList.blockSelectRecommend.TextBig;
		document.getElementById("LineGenerator-SelectRecommend-3").innerHTML = NEWSList.blockSelectRecommend.TextMedium;
		document.getElementById("LineGenerator-SelectRecommend-4").innerHTML = NEWSList.blockSelectRecommend.TextSmall;

	
		if(NEWSList.blockSelectRecommend.titelsLeight >= 1){
			document.getElementById("LineGenerator-SelectRecommend-5").setAttribute("style", `background-image: url(${config["posters"]}${NEWSList.blockSelectRecommend.titels[1].Poster})`);
			document.getElementById("LineGenerator-SelectRecommend-5").setAttribute("onclick", `edit_href('/release', 'id', ${NEWSList.blockSelectRecommend.titels[1].id})`);
		}
		if(NEWSList.blockSelectRecommend.titelsLeight >= 2){
			document.getElementById("LineGenerator-SelectRecommend-6").setAttribute("style", `background-image: url(${config["posters"]}${NEWSList.blockSelectRecommend.titels[2].Poster})`);
			document.getElementById("LineGenerator-SelectRecommend-6").setAttribute("onclick", `edit_href('/release', 'id', ${NEWSList.blockSelectRecommend.titels[2].id})`);
		}
		if(NEWSList.blockSelectRecommend.titelsLeight >= 3){
			document.getElementById("LineGenerator-SelectRecommend-7").setAttribute("style", `background-image: url(${config["posters"]}${NEWSList.blockSelectRecommend.titels[3].Poster})`);
			document.getElementById("LineGenerator-SelectRecommend-7").setAttribute("onclick", `edit_href('/release', 'id', ${NEWSList.blockSelectRecommend.titels[3].id})`);
		}
		if(NEWSList.blockSelectRecommend.titelsLeight >= 4){
			document.getElementById("LineGenerator-SelectRecommend-8").setAttribute("style", `background-image: url(${config["posters"]}${NEWSList.blockSelectRecommend.titels[4].Poster})`);
			document.getElementById("LineGenerator-SelectRecommend-8").setAttribute("onclick", `edit_href('/release', 'id', ${NEWSList.blockSelectRecommend.titels[4].id})`);
		}
		if(NEWSList.blockSelectRecommend.titelsLeight >= 5){
			document.getElementById("LineGenerator-SelectRecommend-9").setAttribute("style", `background-image: url(${config["posters"]}${NEWSList.blockSelectRecommend.titels[5].Poster})`);
			document.getElementById("LineGenerator-SelectRecommend-9").setAttribute("onclick", `edit_href('/release', 'id', ${NEWSList.blockSelectRecommend.titels[5].id})`);
		}
	}
}

function GeneratorHistory() {
	// Запуск анимации загрузки контента
	document.getElementById("LoadAnimRecomend").style.display = "";

	let keys = Object.keys(localStorage);
	var titleNum = 0;

	for(var i=0; keys.length > i; i++) {
		key = keys[i]
		var x = localStorage.getItem(key);
		var	v = '';

		function GetPlayerStorage(comand) {
			var x_seria_bit = '';
			var x_id = '';
			var x_seria = '';
			var x_time = 0;
			var x_time_old = 0;
			var x_date = 0;
			if (x.indexOf("{") == 0) {
				v = x.substr(1, x.indexOf("}") - 1)
				x = x.substr(x.indexOf("}") + 1);
			}
			if (v) {
				if (v.indexOf("-") > 0) {
					var q = v.split("-");
					var qs = v.split("s");
					x_seria_bit = parseFloat(q[1]);
					x_id = parseFloat(q[2]);
					x_seria = parseFloat(qs[1]);
				}
			}
			if (x) {
					if (x.indexOf("--") > 0) {
							var y = x.split("--");
							x_time = parseFloat(y[0]);
							x_time_old = parseFloat(y[1]);
							x_date = parseFloat(y[2]);
					}
			}
			switch (comand) {
				case "seria_bit":
					return x_seria_bit;
					break;
				case "id":
					return x_id;
					break;
				case "seria":
					return x_seria;
					break;
				case "time":
					return x_time;
					break;
				case "time_old":
					return x_time_old;
					break;
				case "date":
					return x_date;
					break;
			}
		}
    var pljsplayfrom = key.substr(0, 12);
		var minutes_payer_release = (GetPlayerStorage("time") / 60).toFixed(2).replace(".", ":");
		var dateObject_payer_release = new Date(GetPlayerStorage("date"));
    var date_payer_release = dateObject_payer_release.toLocaleString()

    if (pljsplayfrom == "pljsplayfrom") {
			document.getElementById("HistoryNone").style.display = "none";
			titleNum = titleNum + 1; 
			if(titleNum < 8) {
				var url = config["titels_api"]+'getTitle?id='+GetPlayerStorage("id")+'&filter=id,posters.small,names';
				var div = document.createElement('div');
				document.getElementById('LineGenerator-History').appendChild(div);
				div.className = 'LineCard-History';
				div.setAttribute("onclick", `edit_href('/release', 'id', ${GetPlayerStorage("id")})`);
				div.id = 'article_history'+GetPlayerStorage("id");
				div.innerHTML = `
					<img id="img${GetPlayerStorage("id")}" src="./img/poster.png" alt="">
					<div class="LineCard-History-BlockText">
						<p class="LineCard-History-Title" id="names${GetPlayerStorage("id")}"></p>
						<p class="LineCard-History-Text">Серия ${GetPlayerStorage("seria")}   Минута ${minutes_payer_release}</p>
						<p class="LineCard-History-Text">Дата ${date_payer_release}</p>
					</div>
					`;

				var page_content;
				$.get(url, function(data){
						page_content = data;
						document.getElementById("img"+data["id"]).src = config["posters"]+""+data["posters"]["small"]["url"];
						document.getElementById("names"+data["id"]).innerHTML = data["names"]["ru"];
				});
			}
    }
  }
}