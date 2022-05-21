var ScheduleList;
var styleCatalog = 1;

function page_schedule() {
	ScheduleList = null;

  document.getElementById('app').innerHTML = `
	
	<!-- Блок Расписание	 -->
	<div class="CatalogBlock">
		
		<!-- Понедельник	 -->
		<div class="CatalogList">
			<div style="display: flow-root;">
				<h1 style="float: left;">Понедельник</h1>
			</div>
			<div class="LineGenerator-MediumHovers" id="LineGenerator-Schedule-0">
				<!-- Карточки с контентом -->

			</div>

			<!-- Картинка в случае отсутствия ответа  -->
			<div id="FilterNone-0" style="display:none;">
				<br /><br />
				<img src="img/libriatyan/4.png" style="width: 145px;">
				<br /><br />
				<p style="color: var(--ColorThemes3);">Ничего не найдено...</p>
				<br /><br />
			</div>

			<!-- Анимация загрузки -->
			<div id="LoadAnimSchedule-0" style="display:none;">
				<svg style="padding: 50px;width: 45px;" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#d53c3c"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1400ms" repeatCount="indefinite"></animateTransform></g></svg>
			</div>	
		</div>


		<!-- Вторник	 -->
		<div class="CatalogList">
			<div style="display: flow-root;">
				<h1 style="float: left;">Вторник</h1>
			</div>
			<div class="LineGenerator-MediumHovers" id="LineGenerator-Schedule-1">
				<!-- Карточки с контентом -->

			</div>

			<!-- Картинка в случае отсутствия ответа  -->
			<div id="FilterNone-1" style="display:none;">
				<br /><br />
				<img src="img/libriatyan/4.png" style="width: 145px;">
				<br /><br />
				<p style="color: var(--ColorThemes3);">Ничего не найдено...</p>
				<br /><br />
			</div>

			<!-- Анимация загрузки -->
			<div id="LoadAnimSchedule-1" style="display:none;">
				<svg style="padding: 50px;width: 45px;" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#d53c3c"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1400ms" repeatCount="indefinite"></animateTransform></g></svg>
			</div>	
		</div>


		<!-- Среда	 -->
		<div class="CatalogList">
			<div style="display: flow-root;">
				<h1 style="float: left;">Среда</h1>
			</div>
			<div class="LineGenerator-MediumHovers" id="LineGenerator-Schedule-2">
				<!-- Карточки с контентом -->

			</div>

			<!-- Картинка в случае отсутствия ответа  -->
			<div id="FilterNone-2" style="display:none;">
				<br /><br />
				<img src="img/libriatyan/4.png" style="width: 145px;">
				<br /><br />
				<p style="color: var(--ColorThemes3);">Ничего не найдено...</p>
				<br /><br />
			</div>

			<!-- Анимация загрузки -->
			<div id="LoadAnimSchedule-2" style="display:none;">
				<svg style="padding: 50px;width: 45px;" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#d53c3c"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1400ms" repeatCount="indefinite"></animateTransform></g></svg>
			</div>	
		</div>


		<!-- Четверг	 -->
		<div class="CatalogList">
			<div style="display: flow-root;">
				<h1 style="float: left;">Четверг</h1>
			</div>
			<div class="LineGenerator-MediumHovers" id="LineGenerator-Schedule-3">
				<!-- Карточки с контентом -->

			</div>

			<!-- Картинка в случае отсутствия ответа  -->
			<div id="FilterNone-3" style="display:none;">
				<br /><br />
				<img src="img/libriatyan/4.png" style="width: 145px;">
				<br /><br />
				<p style="color: var(--ColorThemes3);">Ничего не найдено...</p>
				<br /><br />
			</div>

			<!-- Анимация загрузки -->
			<div id="LoadAnimSchedule-3" style="display:none;">
				<svg style="padding: 50px;width: 45px;" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#d53c3c"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1400ms" repeatCount="indefinite"></animateTransform></g></svg>
			</div>	
		</div>


		<!-- Пятница	 -->
		<div class="CatalogList">
			<div style="display: flow-root;">
				<h1 style="float: left;">Пятница</h1>
			</div>
			<div class="LineGenerator-MediumHovers" id="LineGenerator-Schedule-4">
				<!-- Карточки с контентом -->

			</div>

			<!-- Картинка в случае отсутствия ответа  -->
			<div id="FilterNone-4" style="display:none;">
				<br /><br />
				<img src="img/libriatyan/4.png" style="width: 145px;">
				<br /><br />
				<p style="color: var(--ColorThemes3);">Ничего не найдено...</p>
				<br /><br />
			</div>

			<!-- Анимация загрузки -->
			<div id="LoadAnimSchedule-4" style="display:none;">
				<svg style="padding: 50px;width: 45px;" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#d53c3c"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1400ms" repeatCount="indefinite"></animateTransform></g></svg>
			</div>	
		</div>


		<!-- Суббота	 -->
		<div class="CatalogList">
			<div style="display: flow-root;">
				<h1 style="float: left;">Суббота</h1>
			</div>
			<div class="LineGenerator-MediumHovers" id="LineGenerator-Schedule-5">
				<!-- Карточки с контентом -->

			</div>

			<!-- Картинка в случае отсутствия ответа  -->
			<div id="FilterNone-5" style="display:none;">
				<br /><br />
				<img src="img/libriatyan/4.png" style="width: 145px;">
				<br /><br />
				<p style="color: var(--ColorThemes3);">Ничего не найдено...</p>
				<br /><br />
			</div>

			<!-- Анимация загрузки -->
			<div id="LoadAnimSchedule-5" style="display:none;">
				<svg style="padding: 50px;width: 45px;" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#d53c3c"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1400ms" repeatCount="indefinite"></animateTransform></g></svg>
			</div>	
		</div>


		<!-- Воскресенье	 -->
		<div class="CatalogList">
			<div style="display: flow-root;">
				<h1 style="float: left;">Воскресенье</h1>
			</div>
			<div class="LineGenerator-MediumHovers" id="LineGenerator-Schedule-6">
				<!-- Карточки с контентом -->

			</div>

			<!-- Картинка в случае отсутствия ответа  -->
			<div id="FilterNone-6" style="display:none;">
				<br /><br />
				<img src="img/libriatyan/4.png" style="width: 145px;">
				<br /><br />
				<p style="color: var(--ColorThemes3);">Ничего не найдено...</p>
				<br /><br />
			</div>

			<!-- Анимация загрузки -->
			<div id="LoadAnimSchedule-6" style="display:none;">
				<svg style="padding: 50px;width: 45px;" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#d53c3c"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1400ms" repeatCount="indefinite"></animateTransform></g></svg>
			</div>	
		</div>


	</div>
  `;

	LoadApiSchedules();

  Scroll_to_top();
}


// Функции запросов к Api
function LoadApiSchedules() {
	if(ScheduleList != null){
		after = after + num;	
	}

	// Запуск анимации загрузки контента
	document.getElementById("LoadAnimSchedule-0").style.display = "block";
	document.getElementById("LoadAnimSchedule-1").style.display = "block";
	document.getElementById("LoadAnimSchedule-2").style.display = "block";
	document.getElementById("LoadAnimSchedule-3").style.display = "block";
	document.getElementById("LoadAnimSchedule-4").style.display = "block";
	document.getElementById("LoadAnimSchedule-5").style.display = "block";
	document.getElementById("LoadAnimSchedule-6").style.display = "block";

	// Запрос к Api 
	var url = config["titels_api"]+"getSchedule?filter=id,names.ru,posters.medium,torrents.series,description,genres";
  fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
		document.getElementById("LoadAnimSchedule-0").style.display = "none";
		document.getElementById("LoadAnimSchedule-1").style.display = "none";
		document.getElementById("LoadAnimSchedule-2").style.display = "none";
		document.getElementById("LoadAnimSchedule-3").style.display = "none";
		document.getElementById("LoadAnimSchedule-4").style.display = "none";
		document.getElementById("LoadAnimSchedule-5").style.display = "none";
		document.getElementById("LoadAnimSchedule-6").style.display = "none";
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
		if(data.length == 0) {
			document.getElementById("FilterNone-0").style.display = "";
			document.getElementById("FilterNone-1").style.display = "";
			document.getElementById("FilterNone-2").style.display = "";
			document.getElementById("FilterNone-3").style.display = "";
			document.getElementById("FilterNone-4").style.display = "";
			document.getElementById("FilterNone-5").style.display = "";
			document.getElementById("FilterNone-6").style.display = "";
		} else {
			document.getElementById("FilterNone-0").style.display = "none";
			document.getElementById("FilterNone-1").style.display = "none";
			document.getElementById("FilterNone-2").style.display = "none";
			document.getElementById("FilterNone-3").style.display = "none";
			document.getElementById("FilterNone-4").style.display = "none";
			document.getElementById("FilterNone-5").style.display = "none";
			document.getElementById("FilterNone-6").style.display = "none";
		}
		ScheduleList = data;
		GeneratorSchedule_0();
		GeneratorSchedule_1();
		GeneratorSchedule_2();
		GeneratorSchedule_3();
		GeneratorSchedule_4();
		GeneratorSchedule_5();
		GeneratorSchedule_6();

		preloader_none();
  })
  .catch(function (error) {
    console.log('error', error)
  })
}


// Функции заполнения контента
function GeneratorSchedule_0() {
	var DayList = ScheduleList[0].list;
	var DayListID = 'LineGenerator-Schedule-0';

	for (let i = 0; DayList.length > i; i++) {
		var genres = '';
		var TextSerie = '';
		for(let g = 0; DayList[i].genres.length > g; g++){
			if(genres == '') genres = DayList[i].genres[g];
			else genres = genres + ', ' +DayList[i].genres[g];
		}
		if(DayList[i].torrents.series.last != null){
			TextSerie = `<div class="LineCard-TextSerie">Серия ${DayList[i].torrents.series.last}</div>`;
		}
		var div = document.createElement('div');
		document.getElementById(DayListID).appendChild(div);
		div.className = 'LineCard-MediumHovers';
		div.innerHTML += `
			${TextSerie}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"/></svg>
			<img src="${config["posters"]}${DayList[i].posters.medium.url}" alt="">
			<a class="LineCard-Hover" onclick="edit_href('/release', 'id', ${DayList[i].id})">
				<p class="LineCard-Hover-Name">${DayList[i].names.ru}</p>
				<p class="LineCard-Hover-Genres">${genres}</p>
				<p class="LineCard-Hover-Description">${DayList[i].description}</p>
			</a>
		`;
		
	}
}
function GeneratorSchedule_1() {
	var DayList = ScheduleList[1].list;
	var DayListID = 'LineGenerator-Schedule-1';

	for (let i = 0; DayList.length > i; i++) {
		var genres = '';
		var TextSerie = '';
		for(let g = 0; DayList[i].genres.length > g; g++){
			if(genres == '') genres = DayList[i].genres[g];
			else genres = genres + ', ' +DayList[i].genres[g];
		}
		if(DayList[i].player.series.last != null){
			TextSerie = `<div class="LineCard-TextSerie">Серия ${DayList[i].player.series.last}</div>`;
		}
		var div = document.createElement('div');
		document.getElementById(DayListID).appendChild(div);
		div.className = 'LineCard-MediumHovers';
		div.innerHTML += `
			${TextSerie}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"/></svg>
			<img src="${config["posters"]}${DayList[i].posters.medium.url}" alt="">
			<a class="LineCard-Hover" onclick="edit_href('/release', 'id', ${DayList[i].id})">
				<p class="LineCard-Hover-Name">${DayList[i].names.ru}</p>
				<p class="LineCard-Hover-Genres">${genres}</p>
				<p class="LineCard-Hover-Description">${DayList[i].description}</p>
			</a>
		`;
		
	}
}
function GeneratorSchedule_2() {
	var DayList = ScheduleList[2].list;
	var DayListID = 'LineGenerator-Schedule-2';

	for (let i = 0; DayList.length > i; i++) {
		var genres = '';
		var TextSerie = '';
		for(let g = 0; DayList[i].genres.length > g; g++){
			if(genres == '') genres = DayList[i].genres[g];
			else genres = genres + ', ' +DayList[i].genres[g];
		}
		if(DayList[i].torrents.series.last != null){
			TextSerie = `<div class="LineCard-TextSerie">Серия ${DayList[i].torrents.series.last}</div>`;
		}
		var div = document.createElement('div');
		document.getElementById(DayListID).appendChild(div);
		div.className = 'LineCard-MediumHovers';
		div.innerHTML += `
			${TextSerie}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"/></svg>
			<img src="${config["posters"]}${DayList[i].posters.medium.url}" alt="">
			<a class="LineCard-Hover" onclick="edit_href('/release', 'id', ${DayList[i].id})">
				<p class="LineCard-Hover-Name">${DayList[i].names.ru}</p>
				<p class="LineCard-Hover-Genres">${genres}</p>
				<p class="LineCard-Hover-Description">${DayList[i].description}</p>
			</a>
		`;
		
	}
}
function GeneratorSchedule_3() {
	var DayList = ScheduleList[3].list;
	var DayListID = 'LineGenerator-Schedule-3';

	for (let i = 0; DayList.length > i; i++) {
		var genres = '';
		var TextSerie = '';
		for(let g = 0; DayList[i].genres.length > g; g++){
			if(genres == '') genres = DayList[i].genres[g];
			else genres = genres + ', ' +DayList[i].genres[g];
		}
		if(DayList[i].torrents.series.last != null){
			TextSerie = `<div class="LineCard-TextSerie">Серия ${DayList[i].torrents.series.last}</div>`;
		}
		var div = document.createElement('div');
		document.getElementById(DayListID).appendChild(div);
		div.className = 'LineCard-MediumHovers';
		div.innerHTML += `
			${TextSerie}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"/></svg>
			<img src="${config["posters"]}${DayList[i].posters.medium.url}" alt="">
			<a class="LineCard-Hover" onclick="edit_href('/release', 'id', ${DayList[i].id})">
				<p class="LineCard-Hover-Name">${DayList[i].names.ru}</p>
				<p class="LineCard-Hover-Genres">${genres}</p>
				<p class="LineCard-Hover-Description">${DayList[i].description}</p>
			</a>
		`;
		
	}
}
function GeneratorSchedule_4() {
	var DayList = ScheduleList[4].list;
	var DayListID = 'LineGenerator-Schedule-4';

	for (let i = 0; DayList.length > i; i++) {
		var genres = '';
		var TextSerie = '';
		for(let g = 0; DayList[i].genres.length > g; g++){
			if(genres == '') genres = DayList[i].genres[g];
			else genres = genres + ', ' +DayList[i].genres[g];
		}
		if(DayList[i].torrents.series.last != null){
			TextSerie = `<div class="LineCard-TextSerie">Серия ${DayList[i].torrents.series.last}</div>`;
		}
		var div = document.createElement('div');
		document.getElementById(DayListID).appendChild(div);
		div.className = 'LineCard-MediumHovers';
		div.innerHTML += `
			${TextSerie}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"/></svg>
			<img src="${config["posters"]}${DayList[i].posters.medium.url}" alt="">
			<a class="LineCard-Hover" onclick="edit_href('/release', 'id', ${DayList[i].id})">
				<p class="LineCard-Hover-Name">${DayList[i].names.ru}</p>
				<p class="LineCard-Hover-Genres">${genres}</p>
				<p class="LineCard-Hover-Description">${DayList[i].description}</p>
			</a>
		`;
		
	}
}
function GeneratorSchedule_5() {
	var DayList = ScheduleList[5].list;
	var DayListID = 'LineGenerator-Schedule-5';

	for (let i = 0; DayList.length > i; i++) {
		var genres = '';
		var TextSerie = '';
		for(let g = 0; DayList[i].genres.length > g; g++){
			if(genres == '') genres = DayList[i].genres[g];
			else genres = genres + ', ' +DayList[i].genres[g];
		}
		if(DayList[i].torrents.series.last != null){
			TextSerie = `<div class="LineCard-TextSerie">Серия ${DayList[i].torrents.series.last}</div>`;
		}
		var div = document.createElement('div');
		document.getElementById(DayListID).appendChild(div);
		div.className = 'LineCard-MediumHovers';
		div.innerHTML += `
			${TextSerie}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"/></svg>
			<img src="${config["posters"]}${DayList[i].posters.medium.url}" alt="">
			<a class="LineCard-Hover" onclick="edit_href('/release', 'id', ${DayList[i].id})">
				<p class="LineCard-Hover-Name">${DayList[i].names.ru}</p>
				<p class="LineCard-Hover-Genres">${genres}</p>
				<p class="LineCard-Hover-Description">${DayList[i].description}</p>
			</a>
		`;
		
	}
}
function GeneratorSchedule_6() {
	var DayList = ScheduleList[6].list;
	var DayListID = 'LineGenerator-Schedule-6';

	for (let i = 0; DayList.length > i; i++) {
		var genres = '';
		var TextSerie = '';
		for(let g = 0; DayList[i].genres.length > g; g++){
			if(genres == '') genres = DayList[i].genres[g];
			else genres = genres + ', ' +DayList[i].genres[g];
		}
		if(DayList[i].torrents.series.last != null){
			TextSerie = `<div class="LineCard-TextSerie">Серия ${DayList[i].torrents.series.last}</div>`;
		}
		var div = document.createElement('div');
		document.getElementById(DayListID).appendChild(div);
		div.className = 'LineCard-MediumHovers';
		div.innerHTML += `
			${TextSerie}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"/></svg>
			<img src="${config["posters"]}${DayList[i].posters.medium.url}" alt="">
			<a class="LineCard-Hover" onclick="edit_href('/release', 'id', ${DayList[i].id})">
				<p class="LineCard-Hover-Name">${DayList[i].names.ru}</p>
				<p class="LineCard-Hover-Genres">${genres}</p>
				<p class="LineCard-Hover-Description">${DayList[i].description}</p>
			</a>
		`;
		
	}
}