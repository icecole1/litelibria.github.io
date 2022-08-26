var styleSearch = 1;
var searchQ;

function page_search(s1) {
	after = 0;

	if(searchQ == null){
		searchQ = s1;
	}
	if(searchQ != s1){
		SearchList = null;
		searchQ = s1;
	}

  document.getElementById('app').innerHTML = `
	<!-- Блок Поиск	 -->
	<div class="CatalogBlock">
		<div class="CatalogList">
			<div style="display: flow-root;">
				<h1 style="float: left;">Поиск</h1>
				<div class="CatalogListButton" onclick="setSearchStyle()" id="SearchGrid">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 226 226"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="var(--ColorThemes3)"><path d="M207.16667,56.5v37.66667c0,5.198 -4.21867,9.41667 -9.41667,9.41667h-169.5c-5.198,0 -9.41667,-4.21867 -9.41667,-9.41667v-37.66667c0,-10.35833 8.475,-18.83333 18.83333,-18.83333h150.66667c10.35833,0 18.83333,8.475 18.83333,18.83333zM28.25,122.41667h169.5c5.198,0 9.41667,4.21867 9.41667,9.41667v37.66667c0,10.35833 -8.475,18.83333 -18.83333,18.83333h-150.66667c-10.35833,0 -18.83333,-8.475 -18.83333,-18.83333v-37.66667c0,-5.198 4.21867,-9.41667 9.41667,-9.41667z"></path></g></g></svg>
				</div>
				<div class="CatalogListButton" onclick="setSearchStyle()" id="SearchList" style="display:none;">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 226 226"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="var(--ColorThemes3)"><path d="M47.08333,28.25c-10.38658,0 -18.83333,8.44675 -18.83333,18.83333v37.66667c0,10.38658 8.44675,18.83333 18.83333,18.83333h37.66667c10.38658,0 18.83333,-8.44675 18.83333,-18.83333v-37.66667c0,-10.38658 -8.44675,-18.83333 -18.83333,-18.83333zM141.25,28.25c-10.38658,0 -18.83333,8.44675 -18.83333,18.83333v37.66667c0,10.38658 8.44675,18.83333 18.83333,18.83333h37.66667c10.38658,0 18.83333,-8.44675 18.83333,-18.83333v-37.66667c0,-10.38658 -8.44675,-18.83333 -18.83333,-18.83333zM47.08333,122.41667c-10.38658,0 -18.83333,8.44675 -18.83333,18.83333v37.66667c0,10.38658 8.44675,18.83333 18.83333,18.83333h37.66667c10.38658,0 18.83333,-8.44675 18.83333,-18.83333v-37.66667c0,-10.38658 -8.44675,-18.83333 -18.83333,-18.83333zM141.25,122.41667c-10.38658,0 -18.83333,8.44675 -18.83333,18.83333v37.66667c0,10.38658 8.44675,18.83333 18.83333,18.83333h37.66667c10.38658,0 18.83333,-8.44675 18.83333,-18.83333v-37.66667c0,-10.38658 -8.44675,-18.83333 -18.83333,-18.83333z"></path></g></g></svg>
				</div>
			</div>
			<div id="LineGenerator-Search" class="LineGenerator">
				<!-- Карточки с контентом -->


			</div>

			<!-- Картинка в случае отсутствия ответа  -->
			<div id="FilterNone" style="display:none;">
				<img src="img/libriatyan/4.webp" style="width: 145px;">
				<br /><br />
				<p style="color: var(--ColorThemes3);">Ничего не найдено...</p>
			</div>

			<!-- Анимация загрузки -->
			<div id="LoadAnimSearch" class="LoadAnim" style="display:none;">
				<svg style="width: 45px;" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#d53c3c"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1400ms" repeatCount="indefinite"></animateTransform></g></svg>
			</div>	

			<!-- Кнопка включения автодобавления тайтлов  -->
			<button id="LoadApiSearchButton" class="LoadApiButton" onclick="LoadApiSearch();" style="display:none">Показать ещё</button>
			<span id="LoadApiSearch"></span>
		</div>
	</div>
  `;

	getSearchStyle();

	if(SearchList == null) LoadApiSearch(s1); else GeneratorSearch();

	appWidth();
  Scroll_to_top();
}



// Функция обновления стилизации
function getSearchStyle(){
	if(localStorage.getItem('styleCatalog')){
		styleSearch = localStorage.getItem('styleCatalog');
	} else {
		styleSearch = 0;
		localStorage.setItem('styleCatalog', '0');
	}
	if(styleSearch == '0'){
		document.getElementById('SearchGrid').style.display = "none";
		document.getElementById('SearchList').style.display = "block";
	} else {
		document.getElementById('SearchGrid').style.display = "block";
		document.getElementById('SearchList').style.display = "none";
	}
}
function setSearchStyle(){
	if(styleSearch == 1){
		styleSearch = 0;
		localStorage.setItem('styleCatalog', '0');
		document.getElementById('SearchGrid').style.display = "none";
		document.getElementById('SearchList').style.display = "";
	} else {
		styleSearch = 1;
		localStorage.setItem('styleCatalog', '1');
		document.getElementById('SearchGrid').style.display = "";
		document.getElementById('SearchList').style.display = "none";
	}
	document.getElementById('LineGenerator-Search').innerHTML = "";
	GeneratorSearch();
}


// Функции запросов к Api
function LoadApiSearch(s1) {
	// Запуск анимации загрузки контента
	document.getElementById("LoadAnimSearch").style.display = "block";

	// Запрос к Api 
	var url = config["titels_api"]+"searchTitles?search="+s1+"&filter=id,names.ru,posters.medium,torrents.series,description,genres&limit=-1";
  fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
		document.getElementById("LoadAnimSearch").style.display = "none";
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
		if(SearchList == null) SearchList = data;
		else Array.prototype.push.apply(SearchList, data);

		GeneratorSearch();
		preloader_none();
  })
  .catch(function (error) {
    console.log('error', error)
  })
}


// Функции заполнения контента
function GeneratorSearch() {
	for (let i = after; SearchList.length > i; i++) {
		var genres = '';
		var TextSerie = '';
		for(let g = 0; SearchList[i].genres.length > g; g++){
			if(genres == '') genres = SearchList[i].genres[g];
			else genres = genres + ', ' +SearchList[i].genres[g];
		}
		if(SearchList[i].torrents.series.last != null){
			TextSerie = `<div class="LineCard-TextSerie">Серия ${SearchList[i].torrents.series.last}</div>`;
		}

		if (localStorage.getItem('postersMode') == 'webp') {
			var stylePoster = `<img src="${config["webpPosters"]}${SearchList[i].id}.webp" alt="">`
		} else {
			var stylePoster = `<img src="${config["posters"]}${SearchList[i].posters.medium.url}" alt="">`
		}

		if(styleSearch == 0){
			var div = document.createElement('div');
			document.getElementById('LineGenerator-Search').appendChild(div);
			div.className = 'LineCard-MediumHovers';
			div.innerHTML += `
				${TextSerie}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"/></svg>
				${stylePoster}
				<div class="LineCard-Hover" onclick="goRoute('/release', {id:${SearchList[i].id}})">
					<p class="LineCard-Hover-Name">${SearchList[i].names.ru}</p>
					<p class="LineCard-Hover-Genres">${genres}</p>
					<p class="LineCard-Hover-Description">${SearchList[i].description}</p>
				</div>
			`;
		} else {
			var div = document.createElement('div');
			document.getElementById('LineGenerator-Search').appendChild(div);
			div.className = 'LineCard-Long';
			div.setAttribute("onclick", `goRoute('/release', {id:${SearchList[i].id}})`);
			div.innerHTML += `
				<div class="LineCard-Long-Left">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"></path></svg>
					${stylePoster}
				</div>
				<div class="LineCard-Long-Right">
					<p class="LineCard-Long-Name">${SearchList[i].names.ru}</p>
					<p class="LineCard-Long-Genres">${genres}</p>
					<p class="LineCard-Long-Description">${SearchList[i].description}</p>
				</div>
		`;
		}
	}
}