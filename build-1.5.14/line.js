function page_line() {
  document.getElementById('app').innerHTML = `
	<div class="LineBlock">
		<!-- Блок Последние обновления -->
		<div class="LineList-Updates">
			<div style="display: flow-root;">
				<h1 style="float: left;">Последние обновления</h1>

				<div class="CatalogListButton" onclick="appReloadApi()" id="UpdateMobileApi">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172"><path fill="var(--ColorThemes3)" d="M86,21.5c-34.27,0 -62.30939,26.89969 -64.30404,60.67871l-7.14567,-7.14567c-1.01222,-1.0424 -2.4033,-1.63064 -3.85628,-1.6307c-2.18814,0.00053 -4.1576,1.32735 -4.98006,3.35504c-0.82245,2.02769 -0.33375,4.35156 1.23575,5.87624l16.125,16.125c2.0991,2.09823 5.50149,2.09823 7.60059,0l16.125,-16.125c1.40412,-1.34815 1.96971,-3.35005 1.47866,-5.23364c-0.49105,-1.88359 -1.96202,-3.35456 -3.84561,-3.84561c-1.88359,-0.49105 -3.88549,0.07455 -5.23364,1.47866l-6.73275,6.73275c2.15533,-27.75469 25.2122,-49.51579 53.53304,-49.51579c18.18886,0 34.16487,9.01846 43.90283,22.80876c1.10757,1.56927 2.96825,2.42838 4.88105,2.25367c1.91279,-0.17471 3.58705,-1.35669 4.392,-3.10064c0.80495,-1.74395 0.61828,-3.78487 -0.48968,-5.35386c-11.66886,-16.52471 -30.93522,-27.35791 -52.6862,-27.35791zM145.04802,71.66667c-1.39872,0.02045 -2.73437,0.58534 -3.72331,1.57471l-16.125,16.125c-1.40412,1.34815 -1.96971,3.35005 -1.47866,5.23364c0.49105,1.88359 1.96202,3.35456 3.84561,3.84561c1.88359,0.49105 3.88549,-0.07455 5.23364,-1.47866l6.73275,-6.73275c-2.15534,27.75469 -25.2122,49.51579 -53.53304,49.51579c-18.18886,0 -34.16487,-9.01846 -43.90283,-22.80876c-1.10757,-1.56927 -2.96825,-2.42838 -4.88105,-2.25367c-1.91279,0.17471 -3.58705,1.35669 -4.392,3.10064c-0.80495,1.74395 -0.61828,3.78487 0.48968,5.35386c11.66886,16.52471 30.93522,27.35791 52.6862,27.35791c34.27,0 62.30939,-26.89969 64.30403,-60.67871l7.14567,7.14567c1.34815,1.40412 3.35005,1.96971 5.23364,1.47866c1.88359,-0.49105 3.35456,-1.96202 3.84561,-3.84561c0.49105,-1.88359 -0.07455,-3.88549 -1.47866,-5.23364l-16.125,-16.125c-1.02666,-1.02708 -2.4252,-1.59508 -3.87728,-1.57471z"></path></svg>
				</div>
			</div>
			<div class="LineGenerator-BigHovers" id="LineGenerator-Updates">
				<!-- Карточки с контентом -->

			</div>

			<!-- Анимация загрузки -->
			<div id="LoadAnimUpdates" style="display:none;">
				<svg style="padding: 50px;width: 45px;" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#d53c3c"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1400ms" repeatCount="indefinite"></animateTransform></g></svg>
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
						<svg style="padding: 50px;width: 45px;" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#d53c3c"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1400ms" repeatCount="indefinite"></animateTransform></g></svg>
					</div>
				</div>




				<!-- Блок Ожидается сегодня -->
				<div class="LineList-Schedule">
					<div style="display: flow-root;">
						<h1 style="float: left;">Ожидается сегодня</h1>
						<h1 style="float: right;"><a class="LineList-Button-All" onclick="goRoute('/schedule')">Расписание</a></h1>
					</div>
					<div class="LineGenerator-SmallHovers" id="LineGenerator-Schedule">
						<!-- Карточки с контентом -->

					</div>
					<!-- Анимация загрузки -->
					<div id="LoadAnimSchedule" style="display:none;">
						<svg style="padding: 50px;width: 45px;" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#d53c3c"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1400ms" repeatCount="indefinite"></animateTransform></g></svg>
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
							<a id="LineGenerator-SelectRecommend-5" class="LineList-SelectRecommend-Poster" style="display: none"></a>
							<a id="LineGenerator-SelectRecommend-6" class="LineList-SelectRecommend-Poster" style="display: none"></a>
							<a id="LineGenerator-SelectRecommend-7" class="LineList-SelectRecommend-Poster" style="display: none"></a>
							<a id="LineGenerator-SelectRecommend-8" class="LineList-SelectRecommend-Poster" style="display: none"></a>
							<a id="LineGenerator-SelectRecommend-9" class="LineList-SelectRecommend-Poster" style="display: none"></a>
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
						<svg style="padding: 50px;width: 45px;" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#d53c3c"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1400ms" repeatCount="indefinite"></animateTransform></g></svg>
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
						<svg style="padding: 50px;width: 45px;" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#d53c3c"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1400ms" repeatCount="indefinite"></animateTransform></g></svg>
					</div>	
				</div>

			</div>

			<div class="RightBlock" id="RightBlockSize">
				<!-- Блок История просмотров  -->
				<div class="LineCard-Donate">
					<a href="https://www.anilibria.tv/pages/donate.php">
						<div class="LineCard-Donate-Card">
							<img src="img/libriatyan/0.webp">
							<p>Поддержать проект AniLibria через их сайт!</p>
						</div>
					</a>
					<a href="https://rozenrod.com/#donation">
						<div class="LineCard-Donate-Card">
							<img src="img/libriatyan/6.webp">
							<p>Поддержать разработчика приложения на его сайте!</p>
						</div>
					</a>
				</div>

				<!-- Блок История просмотров -->
				<div class="LineList-History">
					<div style="display: flow-root;">
						<h1 style="float: left;">История просмотров</h1>
						<h1 style="float: right;"><a class="LineList-Button-All" onclick="goRoute('/myHistory')">Ещё...</a></h1>
					</div>
					<div class="LineGenerator-HistorySlider">
						<div class="LineGenerator-History" id="LineGenerator-History">
							<!-- Карточки с контентом -->
							<div id="HistoryNoneLine">
								<img src="img/libriatyan/4.webp">
								<br /><br />
								<p style="color: var(--ColorThemes3);">Пока пусто...</p>
								<br /><br />
							</div>
						</div>
					</div>
				</div>

				<!-- Блок Твиттера  -->
				<div class="LineList-Twitter" id="TwitterBlock">
					<a class="twitter-timeline" id="TwitterTheme"
						data-chrome="noheader nofooter noborders transparent"
						data-theme="dark"
						data-tweet-limit="1"
						href="https://twitter.com/rozenrod">
					Твиты от @rozenrod
					</a>
				</div>

			</div>
		</div>
  </div>
	`;
	if (localStorage.getItem('my_theme') == 'theme1') {;
		document.getElementById('TwitterTheme').setAttribute("data-theme", "");
	} else if(localStorage.getItem('my_theme') == 'theme2') {
		document.getElementById('TwitterTheme').setAttribute("data-theme", "dark");
	} else {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {;
			document.getElementById('TwitterTheme').setAttribute("data-theme", "dark");
		} else {
			document.getElementById('TwitterTheme').setAttribute("data-theme", "");
		}
	}

	if(UpdatesList == null) LoadApiUpdates(); else GeneratorUpdates();
	if(GenresList == null) LoadApiGenres(); else GeneratorGenres();
	if(ScheduleList == null) LoadApiSchedule(); else GeneratorSchedule();
	if(VideoList == null) LoadApiVideo(); else GeneratorVideo();
	if(RecomendList == null) LoadApiRecomend(); else GeneratorRecomend();
	if(NEWSList == null) LoadApiNEWS(); else {GeneratorTrailer(); GeneratorSelectRecommend();}

	GeneratorHistoryLine()

	preloader_none();
	appWidth();

	Scroll_to_top();

	twttr.widgets.load(
		document.getElementById("TwitterBlock")
	);
}

// Функции запросов к Api
function LoadApiUpdates() {
	// Запуск анимации загрузки контента
	document.getElementById("LoadAnimUpdates").style.display = "";

	// Запрос к Api 
  var url = config["titels_api"]+"getUpdates?filter=id,names,posters.medium,player.series,description,genres&limit=15";
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
  var url = config["titels_api"]+"getGenres";
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

	// Запрос к Api 
  var url = config["titels_api"]+"getSchedule?filter=id,names,posters.medium,player.series";
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
  var url = config["titels_api"]+"advancedSearch?query={season.code} == "+RecomendSeason+" and {season.year} == "+year+"&filter=id,names,posters.medium,player.series&order_by=in_favorites&sort_direction=1&limit=15";
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

function LoadApiNEWS(urlR = null) {
	// Запрос к Api 
	if(urlR == 1){
		var url = "https://"+config["domains"]+"/news.json";
	} else {
		var url = "https://api.litelibria.com/news.json";
	}
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
    LoadApiNEWS(1)
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

		if (localStorage.getItem('postersMode') == 'webp') {
			var stylePoster = `<img src="${config["webpPreview"]}${UpdatesList[i].id}/${UpdatesList[i].player.series.last}.webp" alt="">`
		} else {
			var stylePoster = `<img src="${config["CustomPosters"]}${UpdatesList[i].id}/${UpdatesList[i].player.series.last}/1.jpg" alt="">`
		}

		div.innerHTML += `
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"/></svg>
			${stylePoster}
			<div class="LineCard-Hover" onclick='goRoute("/release", {id:${UpdatesList[i].id}})'>
				<p class="LineCard-Hover-Name">${UpdatesList[i].names.ru}</p>
				<p class="LineCard-Hover-Genres">${genres}</p>
				<p class="LineCard-Hover-Description">${UpdatesList[i].description}</p>
			</div>
		`;
	}
}

function GeneratorGenres() {
	document.getElementById('LineGenerator-Genres').innerHTML = "";
	shuffle(GenresList);
	for (let i = 0; GenresList.length > i; i++) {
		var a = randomColor();
		var b = randomColor();
		var c = randomColor();
		var alfa = 'b3'
		var div = document.createElement('div');
		document.getElementById('LineGenerator-Genres').appendChild(div);
		div.setAttribute("onclick", `goRoute('/season', {genres: "${GenresList[i]}"})`);
		div.innerHTML += `
			<a class="GenresCard">
				<img src="img/genres/${GenresList[i]}.webp" alt="">
				<div class="GenresCardBG" style="background-image: linear-gradient(90deg,${a}${alfa}, ${b}${alfa}, ${c}${alfa})">
					<span>${GenresList[i]}</span>
				</div>
			</a>`;
	}
}

function GeneratorSchedule() {
	var d = new Date();
	var n;
	if(d.getDay()==0)n=6;
        else if(d.getDay()==1)n=0;
        else if(d.getDay()==2)n=1; 
        else if(d.getDay()==3)n=2; 
        else if(d.getDay()==4)n=3; 
        else if(d.getDay()==5)n=4;
        else n=5;

	document.getElementById('LineGenerator-Schedule').innerHTML = "";
	for (let i = 0; ScheduleList[n].list.length > i; i++) {
		
		var seriesSH = "Нэма...";
		if(Object.keys(ScheduleList[n].list[i].player).length != 0){
			seriesSH = ScheduleList[n].list[i].player.series.last;
		}

		var div = document.createElement('div');
		document.getElementById('LineGenerator-Schedule').appendChild(div);
		div.className = 'LineCard-SmallHovers';
		
		if (localStorage.getItem('postersMode') == 'webp') {
			var stylePoster = `<img src="${config["webpPosters"]}${ScheduleList[n].list[i].id}.webp" alt="">`
		} else {
			var stylePoster = `<img src="${config["posters"]}${ScheduleList[n].list[i].posters.medium.url}" alt="">`
		}

		div.innerHTML += `
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"/></svg>
			${stylePoster}
			<a class="LineCard-Hover" onclick='goRoute("/release", {id:${ScheduleList[n].list[i].id}})'>
				<p class="LineCard-Hover-Serie">Серия ${seriesSH}</p>
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
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"/></svg>
			<img src="https://img.youtube.com/vi_webp/${VideoList[i].youtube_id}/hqdefault.webp" alt="">
			<a class="LineCard-Hover" href="https://www.youtube.com/watch?v=${VideoList[i].youtube_id}" target="_blank">
				<p class="LineCard-Hover-Name">${VideoList[i].title}</p>
			</a>
		`;
	}
}

function GeneratorRecomend() {
	document.getElementById('LineGenerator-Recomend').innerHTML = "";
	for (let i = 0; RecomendList.length > i; i++) {
		var seriesSH = "Нэма...";
		if(RecomendList[i].player.series != null){
			if(RecomendList[i].player.series.last != null){
				seriesSH = RecomendList[i].player.series.last;
			}
		}

		var div = document.createElement('div');
		document.getElementById('LineGenerator-Recomend').appendChild(div);
		div.className = 'LineCard-SmallHovers';

		if (localStorage.getItem('postersMode') == 'webp') {
			var stylePoster = `<img src="${config["webpPosters"]}${RecomendList[i].id}.webp" alt="">`
		} else {
			var stylePoster = `<img src="${config["posters"]}${RecomendList[i].posters.medium.url}" alt="">`
		}

		div.innerHTML += `
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"/></svg>
			${stylePoster}
			<a class="LineCard-Hover" onclick='goRoute("/release", {id:${RecomendList[i].id}})'>
				<p class="LineCard-Hover-Serie">Серия ${seriesSH}</p>
			</a>
		`;
	}
}

function GeneratorTrailer() {
	if(NEWSList.blockNewTrailer.Visible){
		urlVideo = NEWSList.blockNewTrailer.YouTubeID != false ? `https://www.youtube.com/watch?v=${NEWSList.blockNewTrailer.YouTubeID}` : ""

		document.getElementById("LineGenerator-Trailer").style.display = "";
		document.getElementById("LineGenerator-Trailer-1").setAttribute("href", urlVideo);
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
			document.getElementById("LineGenerator-SelectRecommend-5").setAttribute("style", `background-image: url(${NEWSList.blockSelectRecommend.titels[1].Poster})`);
			document.getElementById("LineGenerator-SelectRecommend-5").setAttribute("onclick", `goRoute('/release', {id:${NEWSList.blockSelectRecommend.titels[1].id}})`);
		}
		if(NEWSList.blockSelectRecommend.titelsLeight >= 2){
			document.getElementById("LineGenerator-SelectRecommend-6").setAttribute("style", `background-image: url(${NEWSList.blockSelectRecommend.titels[2].Poster})`);
			document.getElementById("LineGenerator-SelectRecommend-6").setAttribute("onclick", `goRoute('/release', {id:${NEWSList.blockSelectRecommend.titels[2].id}})`);
		}
		if(NEWSList.blockSelectRecommend.titelsLeight >= 3){
			document.getElementById("LineGenerator-SelectRecommend-7").setAttribute("style", `background-image: url(${NEWSList.blockSelectRecommend.titels[3].Poster})`);
			document.getElementById("LineGenerator-SelectRecommend-7").setAttribute("onclick", `goRoute('/release', {id:${NEWSList.blockSelectRecommend.titels[3].id}})`);
		}
		if(NEWSList.blockSelectRecommend.titelsLeight >= 4){
			document.getElementById("LineGenerator-SelectRecommend-8").setAttribute("style", `background-image: url(${NEWSList.blockSelectRecommend.titels[4].Poster})`);
			document.getElementById("LineGenerator-SelectRecommend-8").setAttribute("onclick", `goRoute('/release', {id:${NEWSList.blockSelectRecommend.titels[4].id}})`);
		}
		if(NEWSList.blockSelectRecommend.titelsLeight >= 5){
			document.getElementById("LineGenerator-SelectRecommend-9").setAttribute("style", `background-image: url(${NEWSList.blockSelectRecommend.titels[5].Poster})`);
			document.getElementById("LineGenerator-SelectRecommend-9").setAttribute("onclick", `goRoute('/release', {id:${NEWSList.blockSelectRecommend.titels[5].id}})`);
		}
	}
}

function GeneratorHistoryLine() {
	HistoryList = getUniqueElems(historyGet());
	HistoryList.sort(function(a, b) {
		if (a.date > b.date)
				return -1;
		if (a.date < b.date) 
				return 1;     
		return 0;
	});

	if(HistoryList.length > 0){
		document.getElementById("HistoryNoneLine").style.display = "none";
		var idH = [];

		for (let i = 0; i < HistoryList.length && i < 6; i++) {
			idH.push(HistoryList[i].id);
			var minutes = (HistoryList[i].time[0] / 60).toFixed(2).replace(".", ":");
			var dateObject = new Date(HistoryList[i].date);
			var date = dateObject.toLocaleString()
			var div = document.createElement('div');
			document.getElementById('LineGenerator-History').appendChild(div);
			div.className = 'LineCard-History';
			div.setAttribute("onclick", `goRoute('/release', {id:${HistoryList[i].id}})`);
			div.id = 'article_history'+HistoryList[i].id;

			if(HistoryList[i].name == undefined ){
				LoadNameHistory(HistoryList[i].id, HistoryList[i].serie, HistoryList[i].time[0], HistoryList[i].time[1], HistoryList[i].date)
			}

			div.innerHTML = `
				<img src="${config["webpPosters"]}${HistoryList[i].id}.webp" alt="">
				<div class="LineCard-History-BlockText">
					<p class="LineCard-History-Title">${HistoryList[i].name}</p>
					<p class="LineCard-History-Text">Серия ${HistoryList[i].serie}   Минута ${minutes}</p>
					<p class="LineCard-History-Text">Дата ${date}</p>
				</div>
				`;
		}
	}
}
