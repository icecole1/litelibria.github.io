var styleFavorites = 1;

var MySessID;

function page_favorites() {	
  document.getElementById('app').innerHTML = `
	
	<!-- Блок Сортировки	 -->
	<div class="SortingBlock" id="SortingBlock" style="display: none">
		<div class="SortingBlockForm">
			<span class="SortingContainer">
				<select class="SortingChosen" id="SortingOrderBy">
					<option value="0">Сортировать по ...</option>
					<option value="year">Году</option>
					<option value="codes">Названию</option>
					<option value="in_favorites">Популярности</option>
					<option value="series">Количеству серий</option>
					<option value="code">Типу</option>
				</select>
				<label class="SortingCheckboxContainer">
					<input type="checkbox" checked="checked" id="SortingChecUpTop">
					<span class="SortingCheckmark">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"/></svg>
					</span>
				</label>
			</span>	
			<button class="SortingButton" onclick="ClearSortingTitlesFavorites()">Сбросить</button>
		</div>
	</div>



	<!-- Блок Избранное	 -->
	<div class="CatalogBlock">
		<div class="CatalogList">
			<div style="display: flow-root;">
				<h1 style="float: left;">Избранное</h1>
				<div class="CatalogListButton" onclick="setFavoritesStyle()" id="FavoritesGrid">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 226 226"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="var(--ColorThemes3)"><path d="M207.16667,56.5v37.66667c0,5.198 -4.21867,9.41667 -9.41667,9.41667h-169.5c-5.198,0 -9.41667,-4.21867 -9.41667,-9.41667v-37.66667c0,-10.35833 8.475,-18.83333 18.83333,-18.83333h150.66667c10.35833,0 18.83333,8.475 18.83333,18.83333zM28.25,122.41667h169.5c5.198,0 9.41667,4.21867 9.41667,9.41667v37.66667c0,10.35833 -8.475,18.83333 -18.83333,18.83333h-150.66667c-10.35833,0 -18.83333,-8.475 -18.83333,-18.83333v-37.66667c0,-5.198 4.21867,-9.41667 9.41667,-9.41667z"></path></g></g></svg>
				</div>
				<div class="CatalogListButton" onclick="setFavoritesStyle()" id="FavoritesList" style="display:none;">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 226 226"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="var(--ColorThemes3)"><path d="M47.08333,28.25c-10.38658,0 -18.83333,8.44675 -18.83333,18.83333v37.66667c0,10.38658 8.44675,18.83333 18.83333,18.83333h37.66667c10.38658,0 18.83333,-8.44675 18.83333,-18.83333v-37.66667c0,-10.38658 -8.44675,-18.83333 -18.83333,-18.83333zM141.25,28.25c-10.38658,0 -18.83333,8.44675 -18.83333,18.83333v37.66667c0,10.38658 8.44675,18.83333 18.83333,18.83333h37.66667c10.38658,0 18.83333,-8.44675 18.83333,-18.83333v-37.66667c0,-10.38658 -8.44675,-18.83333 -18.83333,-18.83333zM47.08333,122.41667c-10.38658,0 -18.83333,8.44675 -18.83333,18.83333v37.66667c0,10.38658 8.44675,18.83333 18.83333,18.83333h37.66667c10.38658,0 18.83333,-8.44675 18.83333,-18.83333v-37.66667c0,-10.38658 -8.44675,-18.83333 -18.83333,-18.83333zM141.25,122.41667c-10.38658,0 -18.83333,8.44675 -18.83333,18.83333v37.66667c0,10.38658 8.44675,18.83333 18.83333,18.83333h37.66667c10.38658,0 18.83333,-8.44675 18.83333,-18.83333v-37.66667c0,-10.38658 -8.44675,-18.83333 -18.83333,-18.83333z"></path></g></g></svg>
				</div>

				<div class="CatalogListButton" onclick="setFilterFavoritesStyle()" id="FilterOpen">
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 24 24" style="width: 24px;margin-top: 1px;" xml:space="preserve" class=""><g><path xmlns="http://www.w3.org/2000/svg" d="m21 2h-18a1.0007 1.0007 0 0 0 -.8193 1.5732l6.8193 9.7422v7.6846a1.0015 1.0015 0 0 0 1.53.8481l4-2.5a1.0014 1.0014 0 0 0 .47-.8481v-5.1846l6.8193-9.7422a1.0007 1.0007 0 0 0 -.8193-1.5732z" fill="var(--ColorThemes3)" data-original="var(--ColorThemes3)" class=""></path></g></svg>
				</div>
				<div class="CatalogListButton" onclick="setFilterFavoritesStyle()" id="FilterClose" style="display:none;">
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 24 24" style="width: 24px;margin-top: 1px;" xml:space="preserve" class=""><g><path xmlns="http://www.w3.org/2000/svg" d="M9,21V13.3154L2.1807,3.5732A1.0006,1.0006,0,0,1,3,2H21a1.0006,1.0006,0,0,1,.8193,1.5732L15,13.3154V18.5a1.0013,1.0013,0,0,1-.47.8481l-4,2.5A1.001,1.001,0,0,1,9,21ZM4.9209,4l5.8984,8.4268A1.0022,1.0022,0,0,1,11,13v6.1958l2-1.25V13a1.0022,1.0022,0,0,1,.1807-.5732L19.0791,4Z" fill="var(--ColorThemes3)" data-original="var(--ColorThemes3)" class=""></path></g></svg>
				</div>

				<div class="CatalogListButton" onclick="appReloadApi()" id="UpdateMobileApi">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172"><path fill="var(--ColorThemes3)" d="M86,21.5c-34.27,0 -62.30939,26.89969 -64.30404,60.67871l-7.14567,-7.14567c-1.01222,-1.0424 -2.4033,-1.63064 -3.85628,-1.6307c-2.18814,0.00053 -4.1576,1.32735 -4.98006,3.35504c-0.82245,2.02769 -0.33375,4.35156 1.23575,5.87624l16.125,16.125c2.0991,2.09823 5.50149,2.09823 7.60059,0l16.125,-16.125c1.40412,-1.34815 1.96971,-3.35005 1.47866,-5.23364c-0.49105,-1.88359 -1.96202,-3.35456 -3.84561,-3.84561c-1.88359,-0.49105 -3.88549,0.07455 -5.23364,1.47866l-6.73275,6.73275c2.15533,-27.75469 25.2122,-49.51579 53.53304,-49.51579c18.18886,0 34.16487,9.01846 43.90283,22.80876c1.10757,1.56927 2.96825,2.42838 4.88105,2.25367c1.91279,-0.17471 3.58705,-1.35669 4.392,-3.10064c0.80495,-1.74395 0.61828,-3.78487 -0.48968,-5.35386c-11.66886,-16.52471 -30.93522,-27.35791 -52.6862,-27.35791zM145.04802,71.66667c-1.39872,0.02045 -2.73437,0.58534 -3.72331,1.57471l-16.125,16.125c-1.40412,1.34815 -1.96971,3.35005 -1.47866,5.23364c0.49105,1.88359 1.96202,3.35456 3.84561,3.84561c1.88359,0.49105 3.88549,-0.07455 5.23364,-1.47866l6.73275,-6.73275c-2.15534,27.75469 -25.2122,49.51579 -53.53304,49.51579c-18.18886,0 -34.16487,-9.01846 -43.90283,-22.80876c-1.10757,-1.56927 -2.96825,-2.42838 -4.88105,-2.25367c-1.91279,0.17471 -3.58705,1.35669 -4.392,3.10064c-0.80495,1.74395 -0.61828,3.78487 0.48968,5.35386c11.66886,16.52471 30.93522,27.35791 52.6862,27.35791c34.27,0 62.30939,-26.89969 64.30403,-60.67871l7.14567,7.14567c1.34815,1.40412 3.35005,1.96971 5.23364,1.47866c1.88359,-0.49105 3.35456,-1.96202 3.84561,-3.84561c0.49105,-1.88359 -0.07455,-3.88549 -1.47866,-5.23364l-16.125,-16.125c-1.02666,-1.02708 -2.4252,-1.59508 -3.87728,-1.57471z"></path></svg>
				</div>
			</div>
			<div id="LineGenerator-Favorites" class="LineGenerator">
				<!-- Карточки с контентом -->


			</div>

			<!-- Кнопка в случае отсутствия PHPSESSID -->
			<div id="PHPSESSIDNone" style="display:none;">
				<img src="img/libriatyan/4.webp" style="width: 145px;">
				<br /><br />
				<p style="color: var(--ColorThemes3);">Вы не авторизованы</p>
        <Button class="ButtonHovers" onclick="goRoute('/options')" style="margin: 10px 0 0 0;">Авторизоваться</Button>
			</div>

			<!-- Картинка в случае отсутствия ответа  -->
			<div id="FilterNone" style="display:none;">
				<img src="img/libriatyan/4.webp" style="width: 145px;">
				<br /><br />
				<p style="color: var(--ColorThemes3);">Ничего не найдено...</p>
			</div>

			<!-- Анимация загрузки -->
			<div id="LoadAnimFavorites" class="LoadAnim" style="display:none;">
				<svg style="width: 45px;" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#d53c3c"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1400ms" repeatCount="indefinite"></animateTransform></g></svg>
			</div>	
		</div>
	</div>
  `;

	getFavoritesStyle();
	LoadPHPSESSID();

	appWidth();
  Scroll_to_top();

	SortingEventFavorites();
}

// Функция обновления стилизации
function getFavoritesStyle(){
	if(localStorage.getItem('styleCatalog')){
		styleFavorites = localStorage.getItem('styleCatalog');
	} else {
		styleFavorites = 0;
		localStorage.setItem('styleCatalog', '0');
	}
	if(styleFavorites == '0'){
		document.getElementById('FavoritesGrid').style.display = "none";
		document.getElementById('FavoritesList').style.display = "block";
	} else {
		document.getElementById('FavoritesGrid').style.display = "block";
		document.getElementById('FavoritesList').style.display = "none";
	}
}
function setFavoritesStyle(){
	if(styleFavorites == 1){
		styleFavorites = 0;
		localStorage.setItem('styleCatalog', '0');
		document.getElementById('FavoritesGrid').style.display = "none";
		document.getElementById('FavoritesList').style.display = "";
	} else {
		styleFavorites = 1;
		localStorage.setItem('styleCatalog', '1');
		document.getElementById('FavoritesGrid').style.display = "";
		document.getElementById('FavoritesList').style.display = "none";
	}
	document.getElementById('LineGenerator-Favorites').innerHTML = "";
	GeneratorFavorites();
}

// Функция для видимости фильтров
function setFilterFavoritesStyle(){
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


// Функция получения PHPSESSID из локального хранилища
function LoadPHPSESSID(){
	MySessID = localStorage.getItem('PHPSESSID');
  if (!MySessID || MySessID == 'undefined') {
		document.getElementById("PHPSESSIDNone").style.display = "";
    preloader_none();
  } else {
		// Запуск анимации загрузки контента
		document.getElementById("PHPSESSIDNone").style.display = "none";

		if(FavoritesList == null) {LoadApiFavorites();document.getElementById("LoadAnimFavorites").style.display = "block";} else {GeneratorFavorites();}
  }
}

// Функция запуска сортировки
function SortingEventFavorites(){
	document.querySelector("#SortingOrderBy").addEventListener('change', function (e) {
		SortingTitlesFavorites()
	})
	document.querySelector("#SortingChecUpTop").addEventListener('click', function (e) {
		SortingTitlesFavorites()
	})
}

// Функция сортировки
function SortingTitlesFavorites(){
	// Получаем значения посе фильтров и поисков
	var sorting = document.getElementById("SortingOrderBy").value;

	// Получаем значения из блока сортировки
	var checkbox_sorting = '1';
	if (document.querySelector('#SortingChecUpTop:checked')) {
		 checkbox_sorting = '0';
	}

	if(sorting == 'year'){
		if (checkbox_sorting == '1'){
			FavoritesList.sort((a, b) => (a.season.year > b.season.year) ? 1 : -1);
		}else {
			FavoritesList.sort((a, b) => (a.season.year < b.season.year) ? 1 : -1);
		}
	} else if(sorting == 'codes'){
		if (checkbox_sorting == '1'){
			FavoritesList.sort((a, b) => (a.code > b.code) ? 1 : -1);
		}else {
			FavoritesList.sort((a, b) => (a.code < b.code) ? 1 : -1);
		}
	} else if(sorting == 'in_favorites'){
		if (checkbox_sorting == '1'){
			FavoritesList.sort((a, b) => (a.in_favorites > b.in_favorites) ? 1 : -1);
		}else {
			FavoritesList.sort((a, b) => (a.in_favorites < b.in_favorites) ? 1 : -1);
		}
	} else if(sorting == 'series'){
		if (checkbox_sorting == '1'){
			FavoritesList.sort((a, b) => (a.type.series > b.type.series) ? 1 : -1);
		}else {
			FavoritesList.sort((a, b) => (a.type.series < b.type.series) ? 1 : -1);
		}
	} else if(sorting == 'code'){
		if (checkbox_sorting == '1'){
			FavoritesList.sort((a, b) => (a.type.code > b.type.code) ? 1 : -1);
		}else {
			FavoritesList.sort((a, b) => (a.type.code < b.type.code) ? 1 : -1);
		}
	} else {
		FavoritesList.sort((a, b) => (a > b) ? 1 : -1);
	}


	document.getElementById('LineGenerator-Favorites').innerHTML = "";
	GeneratorFavorites()
}

// Функция сброса сортировки
function ClearSortingTitlesFavorites(){
	document.querySelector("#SortingOrderBy").value = 0
	document.querySelector("#SortingChecUpTop").checked=true
	
	FavoritesList = null;
	document.getElementById('LineGenerator-Favorites').innerHTML = "";
	LoadApiFavorites()
}


// Функции запросов к Api
function LoadApiFavorites() {
	// Запрос к Api 
	var url = config["titels_api"]+"getFavorites?session="+MySessID+"&limit=-1";
  fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
		document.getElementById("LoadAnimFavorites").style.display = "none";
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
		if(data.length == 0) {
			document.getElementById("FilterNone").style.display = "block";
		} else {
			document.getElementById("FilterNone").style.display = "none";
		}
		data.reverse();
		FavoritesList = data;
		GeneratorFavorites();
		preloader_none();
  })
  .catch(function (error) {
    console.log('error', error)
  })
}


// Функции заполнения контента
function GeneratorFavorites() {
	for (let i = 0; FavoritesList.length > i; i++) {
		var genres = '', TextSerie = '', SerieLength = '';
		for(let g = 0; FavoritesList[i].genres.length > g; g++){
			if(genres == '') genres = FavoritesList[i].genres[g];
			else genres = genres + ', ' +FavoritesList[i].genres[g];
		}
		if(FavoritesList[i].player.series.last != null){
			if(FavoritesList[i].type.code == 0){
				SerieType = "Фильм"
			} else if(FavoritesList[i].type.code == 2){
				SerieType = "OVA"
			} else if(FavoritesList[i].type.code == 3){
				SerieType = "ONA"
			} else if(FavoritesList[i].type.code == 4){
				SerieType = "Спешл"
			} else {
				SerieType = "Серия"
			}

			SerieLength = FavoritesList[i].type.series != null ? ` из ${FavoritesList[i].type.series}` : ""

			TextSerie = `<div class="LineCard-TextSerie">${SerieType} ${FavoritesList[i].player.series.last}${SerieLength}</div>`;
		}

		if (localStorage.getItem('postersMode') == 'webp') {
			var stylePoster = `<img src="${config["webpPosters"]}${FavoritesList[i].id}.webp" alt="">`
		} else {
			var stylePoster = `<img src="${config["posters"]}${FavoritesList[i].posters.medium.url}" alt="">`
		}

		if(styleFavorites == 0){
			var div = document.createElement('div');
			document.getElementById('LineGenerator-Favorites').appendChild(div);
			div.className = 'LineCard-MediumHovers';
			div.innerHTML += `
				${TextSerie}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"/></svg>
				${stylePoster}
				<div class="LineCard-Hover" onclick="goRoute('/release', {id:${FavoritesList[i].id}})">
					<p class="LineCard-Hover-Name">${FavoritesList[i].names.ru}</p>
					<p class="LineCard-Hover-Genres">${genres}</p>
					<p class="LineCard-Hover-Description">${FavoritesList[i].description}</p>
				</div>
			`;
		} else {
			var div = document.createElement('div');
			document.getElementById('LineGenerator-Favorites').appendChild(div);
			div.className = 'LineCard-Long';
			div.setAttribute("onclick", `goRoute('/release', {id:${FavoritesList[i].id}})`);
			div.innerHTML += `
				<div class="LineCard-Long-Left">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"></path></svg>
					${stylePoster}
				</div>
				<div class="LineCard-Long-Right">
					<p class="LineCard-Long-Name">${FavoritesList[i].names.ru}</p>
					<p class="LineCard-Long-Genres">${genres}</p>
					<p class="LineCard-Long-Description">${FavoritesList[i].description}</p>
				</div>
		`;
		}
	}
}