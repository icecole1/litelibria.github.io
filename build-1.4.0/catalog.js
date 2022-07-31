var styleCatalog = 1;
var urlGenerate = config["titels_api"]+"getUpdates?";
var num = 24;
var after = 0;

function page_catalog() {
	after = 0;

  document.getElementById('app').innerHTML = `
	<!-- Блок Сортировки	 -->
	<div class="SortingBlock" id="SortingBlock" style="display: none">
		<div class="SortingBlockForm">
			<select class="SortingChosen" id="SortingGenres">
				<option value="0">Выбрать жанры</option>
			</select>
			<select class="SortingChosen" id="SortingYears">
				<option value="0">Выбрать год</option>
			</select>
			<select class="SortingChosen" id="SortingSeason">
				<option value="0">Выбрать сезон</option>
				<option value="1">Зима</option>
				<option value="2">Весна</option>
				<option value="3">Лето</option>
				<option value="4">Осень</option>
			</select>
			<span class="SortingContainer">
				<select class="SortingChosen" id="SortingOrderBy">
					<option value="">Сортировать по ...</option>
					<option value="&order_by=season.year">Году</option>
					<option value="&order_by=code">Названию</option>
					<option value="&order_by=in_favorites">Популярности</option>
					<option value="&order_by=type.series">Количеству серий</option>
					<option value="&order_by=season.code">Типу</option>
				</select>
				<label class="SortingCheckboxContainer">
					<input type="checkbox" checked="checked" id="SortingChecUpTop">
					<span class="SortingCheckmark">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"/></svg>
					</span>
				</label>
			</span>	
			<button class="SortingButton" onclick="SortingTitles()">Показать</button>
		</div>
	</div>



	<!-- Блок Каталог	 -->
	<div class="CatalogBlock">
		<div class="CatalogList">
			<div style="display: flow-root;">
				<h1 style="float: left;">Каталог</h1>
				<div class="CatalogListButton" onclick="setCatalogStyle()" id="CatalogGrid">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 226 226"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="var(--ColorThemes3)"><path d="M207.16667,56.5v37.66667c0,5.198 -4.21867,9.41667 -9.41667,9.41667h-169.5c-5.198,0 -9.41667,-4.21867 -9.41667,-9.41667v-37.66667c0,-10.35833 8.475,-18.83333 18.83333,-18.83333h150.66667c10.35833,0 18.83333,8.475 18.83333,18.83333zM28.25,122.41667h169.5c5.198,0 9.41667,4.21867 9.41667,9.41667v37.66667c0,10.35833 -8.475,18.83333 -18.83333,18.83333h-150.66667c-10.35833,0 -18.83333,-8.475 -18.83333,-18.83333v-37.66667c0,-5.198 4.21867,-9.41667 9.41667,-9.41667z"></path></g></g></svg>
				</div>
				<div class="CatalogListButton" onclick="setCatalogStyle()" id="CatalogList" style="display:none;">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 226 226"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="var(--ColorThemes3)"><path d="M47.08333,28.25c-10.38658,0 -18.83333,8.44675 -18.83333,18.83333v37.66667c0,10.38658 8.44675,18.83333 18.83333,18.83333h37.66667c10.38658,0 18.83333,-8.44675 18.83333,-18.83333v-37.66667c0,-10.38658 -8.44675,-18.83333 -18.83333,-18.83333zM141.25,28.25c-10.38658,0 -18.83333,8.44675 -18.83333,18.83333v37.66667c0,10.38658 8.44675,18.83333 18.83333,18.83333h37.66667c10.38658,0 18.83333,-8.44675 18.83333,-18.83333v-37.66667c0,-10.38658 -8.44675,-18.83333 -18.83333,-18.83333zM47.08333,122.41667c-10.38658,0 -18.83333,8.44675 -18.83333,18.83333v37.66667c0,10.38658 8.44675,18.83333 18.83333,18.83333h37.66667c10.38658,0 18.83333,-8.44675 18.83333,-18.83333v-37.66667c0,-10.38658 -8.44675,-18.83333 -18.83333,-18.83333zM141.25,122.41667c-10.38658,0 -18.83333,8.44675 -18.83333,18.83333v37.66667c0,10.38658 8.44675,18.83333 18.83333,18.83333h37.66667c10.38658,0 18.83333,-8.44675 18.83333,-18.83333v-37.66667c0,-10.38658 -8.44675,-18.83333 -18.83333,-18.83333z"></path></g></g></svg>
				</div>

				<div class="CatalogListButton" onclick="setFilterCatalogStyle()" id="FilterOpen">
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 24 24" style="width: 24px;margin-top: 1px;" xml:space="preserve" class=""><g><path xmlns="http://www.w3.org/2000/svg" d="m21 2h-18a1.0007 1.0007 0 0 0 -.8193 1.5732l6.8193 9.7422v7.6846a1.0015 1.0015 0 0 0 1.53.8481l4-2.5a1.0014 1.0014 0 0 0 .47-.8481v-5.1846l6.8193-9.7422a1.0007 1.0007 0 0 0 -.8193-1.5732z" fill="var(--ColorThemes3)" data-original="var(--ColorThemes3)" class=""></path></g></svg>
				</div>
				<div class="CatalogListButton" onclick="setFilterCatalogStyle()" id="FilterClose" style="display:none;">
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 24 24" style="width: 24px;margin-top: 1px;" xml:space="preserve" class=""><g><path xmlns="http://www.w3.org/2000/svg" d="M9,21V13.3154L2.1807,3.5732A1.0006,1.0006,0,0,1,3,2H21a1.0006,1.0006,0,0,1,.8193,1.5732L15,13.3154V18.5a1.0013,1.0013,0,0,1-.47.8481l-4,2.5A1.001,1.001,0,0,1,9,21ZM4.9209,4l5.8984,8.4268A1.0022,1.0022,0,0,1,11,13v6.1958l2-1.25V13a1.0022,1.0022,0,0,1,.1807-.5732L19.0791,4Z" fill="var(--ColorThemes3)" data-original="var(--ColorThemes3)" class=""></path></g></svg>
				</div>
			</div>
			<div id="LineGeneratorCatalog" class="LineGenerator">
				<!-- Карточки с контентом -->


			</div>

			<!-- Картинка в случае отсутствия ответа  -->
			<div id="FilterNone" style="display:none;">
				<br /><br />
				<img src="img/libriatyan/4.webp" style="width: 145px;">
				<br /><br />
				<p style="color: var(--ColorThemes3);">Ничего не найдено...</p>
				<br /><br />
			</div>

			<!-- Анимация загрузки -->
			<div id="LoadAnimCatalog" style="display:none;">
				<svg style="padding: 50px;width: 45px;" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#d53c3c"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1400ms" repeatCount="indefinite"></animateTransform></g></svg>
			</div>	

			<!-- Кнопка включения автодобавления тайтлов  -->
			<button id="LoadApiCatalogButton" class="LoadApiButton" onclick="LoadApiCatalog()">Показать ещё</button>
		</div>
	</div>
  `;

	getCatalogStyle();

	LoadApiGenresCatalog();
	LoadApiYearsCatalog();

	if(CatalogsList == null) LoadApiCatalog(); else GeneratorCatalog();

	appWidth();
  Scroll_to_top();
}


// Функция обновления стилизации
function getCatalogStyle(){
	if(localStorage.getItem('styleCatalog')){
		styleCatalog = localStorage.getItem('styleCatalog');
	} else {
		styleCatalog = 0;
		localStorage.setItem('styleCatalog', '0');
	}
	if(styleCatalog == '0'){
		document.getElementById('CatalogGrid').style.display = "none";
		document.getElementById('CatalogList').style.display = "block";
	} else {
		document.getElementById('CatalogGrid').style.display = "block";
		document.getElementById('CatalogList').style.display = "none";
	}
}
function setCatalogStyle(){
	if(styleCatalog == 1){
		styleCatalog = 0;
		localStorage.setItem('styleCatalog', '0');
		document.getElementById('CatalogGrid').style.display = "none";
		document.getElementById('CatalogList').style.display = "";
	} else {
		styleCatalog = 1;
		localStorage.setItem('styleCatalog', '1');
		document.getElementById('CatalogGrid').style.display = "";
		document.getElementById('CatalogList').style.display = "none";
	}
	document.getElementById('LineGeneratorCatalog').innerHTML = "";
	GeneratorCatalog();
}

// Функция для видимости фильтров
function setFilterCatalogStyle(){
	if(styleFilter == 1){
		styleFilter = 0;
		document.getElementById('FilterOpen').style.display = "none";
		document.getElementById('FilterClose').style.display = "";
		document.getElementById('SortingBlock').style.display = "";
	} else {
		styleFilter = 1;
		document.getElementById('FilterOpen').style.display = "";
		document.getElementById('FilterClose').style.display = "none";
		document.getElementById('SortingBlock').style.display = "none";
	}
}

// Функция сортировки
function SortingTitles(){
	num = 24;
	after = 0;
	CatalogsList = null;

  var genres_sort = document.getElementById("SortingGenres").value;
  var years_sort = document.getElementById("SortingYears").value;
  var season_sort = document.getElementById("SortingSeason").value;
  var orderBy_sort = document.getElementById("SortingOrderBy").value;
  var genres = '',
      years = '',
      season = '',
      and_1 = '',
      and_2 = '',
      query_1 = '';

  if (genres_sort != 0) {
    genres = '{genres} ~= ("'+genres_sort+'")';
  }
  if (years_sort != 0) {
    years = '{season.year} == '+years_sort;
  }
  if (season_sort != 0) {
    season = '{season.code} == '+season_sort;
  }
  if (genres_sort != 0 && years_sort != 0) {
    and_1 = ' and ';
  }
  if (years_sort != 0 && season_sort != 0 || genres_sort != 0 && season_sort != 0) {
    and_2 = ' and ';
  }
  if (genres_sort == 0 && years_sort == 0 && season_sort == 0 && orderBy_sort != '') {
    query_1 = '1'
  }

  var checkbox_sorting = '1';
  if (document.querySelector('#SortingChecUpTop:checked')) {
     checkbox_sorting = '0';
  }
  if (genres_sort == 0 && years_sort == 0 && season_sort == 0 && orderBy_sort == '') {
		urlGenerate = config["titels_api"]+'getUpdates?';
  } else {
		urlGenerate = config["titels_api"]+'advancedSearch?query='+ query_1 + genres + and_1 + years + and_2 + season + orderBy_sort +'&sort_direction='+checkbox_sorting+'&';
  }

	document.getElementById('LineGeneratorCatalog').innerHTML = "";
	LoadApiCatalog()
}


// Функции запросов к Api
function LoadApiCatalog() {
	if(CatalogsList != null){
		after = CatalogsList.length;	
	}

	// Запуск анимации загрузки контента
	document.getElementById("LoadAnimCatalog").style.display = "block";

	// Запрос к Api 
	var url = urlGenerate + "filter=id,names,posters.medium,player.series,description,genres&limit="+num+"&after="+after;
  fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
		document.getElementById("LoadAnimCatalog").style.display = "none";
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
		if(data.length == 0) {
			document.getElementById("FilterNone").style.display = "";
			document.getElementById("LoadApiCatalogButton").style.display = "none";
		} else {
			document.getElementById("FilterNone").style.display = "none";
			document.getElementById("LoadApiCatalogButton").style.display = "";
		}

		if(CatalogsList == null) CatalogsList = data;
		else Array.prototype.push.apply(CatalogsList, data);

		GeneratorCatalog();
		preloader_none();
  })
  .catch(function (error) {
    console.log('error', error)
  })
}
function LoadApiGenresCatalog() {
	// Запрос к Api 
  var url = config["titels_api"]+"getGenres";
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
		for (let i = 0; data.length > i; i++) {
			var div_Genres = document.createElement('option');
			document.getElementById('SortingGenres').appendChild(div_Genres);
			div_Genres.value = data[i];
			div_Genres.innerHTML = data[i];
		}
  })
  .catch(function (error) {
    console.log('error', error)
  })
}
function LoadApiYearsCatalog() {
	// Запрос к Api 
  var url = config["titels_api"]+"getYears";
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
		for (let i = 0; data.length > i; i++) {
			var div_Genres = document.createElement('option');
			document.getElementById('SortingYears').appendChild(div_Genres);
			div_Genres.value = data[i];
			div_Genres.innerHTML = data[i];
		}
  })
  .catch(function (error) {
    console.log('error', error)
  })
}


// Функции заполнения контента
function GeneratorCatalog() {
	for (let i = after; CatalogsList.length > i; i++) {
		var genres = '';
		var TextSerie = '';
		for(let g = 0; CatalogsList[i].genres.length > g; g++){
			if(genres == '') genres = CatalogsList[i].genres[g];
			else genres = genres + ', ' +CatalogsList[i].genres[g];
		}
		if(CatalogsList[i].player.series.last != null){
			TextSerie = `<div class="LineCard-TextSerie">Серия ${CatalogsList[i].player.series.last}</div>`;
		}

		if (localStorage.getItem('postersMode') == 'webp') {
			var stylePoster = `<img src="${config["webpPosters"]}${CatalogsList[i].id}.webp" alt="">`
		} else {
			var stylePoster = `<img src="${config["posters"]}${CatalogsList[i].posters.medium.url}" alt="">`
		}

		if(styleCatalog == 0){
			var div = document.createElement('div');
			document.getElementById('LineGeneratorCatalog').appendChild(div);
			div.className = 'LineCard-MediumHovers';
			div.innerHTML += `
				${TextSerie}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"/></svg>
				${stylePoster}
				<div class="LineCard-Hover" onclick='goRoute("/release", {id:${CatalogsList[i].id}})'>
					<p class="LineCard-Hover-Name">${CatalogsList[i].names.ru}</p>
					<p class="LineCard-Hover-Genres">${genres}</p>
					<p class="LineCard-Hover-Description">${CatalogsList[i].description}</p>
				</div>
			`;
		} else {
			var div = document.createElement('div');
			document.getElementById('LineGeneratorCatalog').appendChild(div);
			div.className = 'LineCard-Long';
			div.setAttribute("onclick", `goRoute("/release", {id:${CatalogsList[i].id}})`);
			div.innerHTML += `
				<div class="LineCard-Long-Left">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"></path></svg>
					${stylePoster}
				</div>
				<div class="LineCard-Long-Right">
					<p class="LineCard-Long-Name">${CatalogsList[i].names.ru}</p>
					<p class="LineCard-Long-Genres">${genres}</p>
					<p class="LineCard-Long-Description">${CatalogsList[i].description}</p>
				</div>
		`;
		}
	}
}