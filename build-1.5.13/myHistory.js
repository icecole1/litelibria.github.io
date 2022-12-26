function page_myHistory() {
  document.getElementById('app').innerHTML = `
	<!-- Блок Сортировки	 -->
	<div class="SortingBlock">
		<div class="SortingBlockForm">
			<span class="SortingContainer">
				<select class="SortingChosen" id="SortingOrderBy">
					<option value="date">Дате</option>
					<option value="release">Релизу</option>
				</select>
				<label class="SortingCheckboxContainer">
					<input type="checkbox" checked="checked" id="SortingChecUpTop">
					<span class="SortingCheckmark">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"/></svg>
					</span>
				</label>
			</span>	
			<button class="SortingButton" onclick="ClearSortingHistory()">Сбросить</button>
			<button class="SortingButton" id="authorize-button" onclick="logIn('authorize-button', 'signout-button')">Синхронизировать Google</button>
			<button class="SortingButton" id="signout-button" onclick="logOut('authorize-button', 'signout-button')" style="display:none;">Выйти из Google</button>
		</div>
	</div>

	<!-- Блок История просмотров  -->
	<div class="HistoryBlock">
		<div class="HistoryList">
			<div style="display: flow-root;">
				<h1 style="float: left;">История просмотров</h1>
			</div>
			<div id="HistoryGenerator">
				<!-- Карточки с контентом -->

				<div id="HistoryNone">
					<img src="img/libriatyan/4.webp" style="max-width: 145px;">
					<br /><br />
					<p style="color: var(--ColorThemes3);">Пока пусто...</p>
				</div>	
			</div>
		</div>
	</div>
	`;
	GeneratorHistory();
  preloader_none();
	appWidth();
  Scroll_to_top();

	onSignInHistory();

	SortingEventHistory();
}

// Функции проверки авторизации
function onSignInHistory() {
	if (googleLogIn) {
		document.getElementById('signout-button').style.display = '';
		document.getElementById('authorize-button').style.display = 'none';
	} else {
		document.getElementById('signout-button').style.display = 'none';
		document.getElementById('authorize-button').style.display = '';
	}
}

// Функции заполнения контента
function GeneratorHistory() {
	HistoryList = historyGet('date');

	if(HistoryList.length > 0){
		document.getElementById("HistoryNone").style.display = "none";
		var idH = [];

		for (let i = 0; i < HistoryList.length; i++) {
			idH.push(HistoryList[i].id); 
			var minutes = (HistoryList[i].time[0] / 60).toFixed(2).replace(".", ":");
			var dateObject = new Date(HistoryList[i].date);
			var date = dateObject.toLocaleString()

			var div = document.createElement('div');
			document.getElementById('HistoryGenerator').appendChild(div);
			div.className = 'HistoryCard';
			div.id = 'article_history'+HistoryList[i].id+"-"+HistoryList[i].serie;

			if(HistoryList[i].name == undefined ){
				LoadNameHistory(HistoryList[i].id, HistoryList[i].serie, HistoryList[i].time[0], HistoryList[i].time[1], HistoryList[i].date)
			}

			div.innerHTML = `
				<img src="${config["webpPosters"]}${HistoryList[i].id}.webp" alt="">
				<div class="HistoryCard-BlockText">
					<p class="HistoryCard-Title">${HistoryList[i].name}</p>
					<p class="HistoryCard-Text">Серия ${HistoryList[i].serie}   Минута ${minutes}</p>
					<p class="HistoryCard-Text">Дата ${date}</p>
					<p class="HistoryCard-Open" onclick="goRoute('/release', {id:${HistoryList[i].id}})">Открыть</p>
					<p class="HistoryCard-Del" onclick="myHistoryDell('${HistoryList[i].id}', '${HistoryList[i].serie}')">Удалить</p>
				</div>
				`;
		}
	}
}

function LoadNameHistory(titel, serie, time, duration, date){
	var url = config["titels_api"]+'getTitle?id='+titel+'&filter=id,names.ru';
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
		historySave(titel, serie, time, duration, date, data.names.ru)
	})
	.catch(function (error) {
		console.log('error', error)
	})
}

// Функции удаления релиза
function myHistoryDell(title, serie){
	document.getElementById('article_history'+title+"-"+serie).setAttribute("style", "display:none;");
	historyDell(title, serie);
	
	HistoryList = historyGet('date');
	if(HistoryList.length <= 0){
		document.getElementById("HistoryNone").style.display = "block";
	}
	saveConfig(HistoryList)
}


// Функция запуска сортировки
function SortingEventHistory(){
	document.querySelector("#SortingOrderBy").addEventListener('change', function (e) {
		SortingHistory()
	})
	document.querySelector("#SortingChecUpTop").addEventListener('click', function (e) {
		SortingHistory()
	})
}

// Функция сортировки
function SortingHistory(){
  var orderBy_sort = document.getElementById("SortingOrderBy").value;

	var checkbox_sorting = '0';
  if (document.querySelector('#SortingChecUpTop:checked')) {
     checkbox_sorting = '1';
  }

	document.getElementById('HistoryGenerator').innerHTML = '';
	HistoryList = historyGet();

	if(orderBy_sort == 'date'){
		HistoryList.sort(function(a, b) {
			if(checkbox_sorting == 1){
				if (a.date > b.date)
				return -1;
				if (a.date < b.date) 
						return 1;     
				return 0;
			} else {
				if (a.date < b.date)
				return -1;
				if (a.date > b.date) 
						return 1;     
				return 0;
			}
		});
	} else {
		HistoryList.sort(function(a, b) {
			if(checkbox_sorting == 1){
				if (a.id > b.id)
					return -1;
				if (a.id < b.id) 
						return 1;     
				return 0;
			} else {
				if (a.id < b.id)
					return -1;
				if (a.id > b.id) 
						return 1;     
				return 0;
			}
		});
	}

	if(HistoryList.length > 0){
		var idH = [];

		for (let i = 0; i < HistoryList.length; i++) {
			idH.push(HistoryList[i].id); 
			var minutes = (HistoryList[i].time[0] / 60).toFixed(2).replace(".", ":");
			var dateObject = new Date(HistoryList[i].date);
			var date = dateObject.toLocaleString()

			var div = document.createElement('div');
			document.getElementById('HistoryGenerator').appendChild(div);
			div.className = 'HistoryCard';
			div.id = 'article_history'+HistoryList[i].id+"-"+HistoryList[i].serie;
			div.innerHTML = `
				<img class="img${HistoryList[i].id}" src="./img/poster.png" alt="">
				<div class="HistoryCard-BlockText">
					<p class="HistoryCard-Title names${HistoryList[i].id}"></p>
					<p class="HistoryCard-Text">Серия ${HistoryList[i].serie}   Минута ${minutes}</p>
					<p class="HistoryCard-Text">Дата ${date}</p>
					<p class="HistoryCard-Open" onclick="goRoute('/release', {id:${HistoryList[i].id}})">Открыть</p>
					<p class="HistoryCard-Del" onclick="myHistoryDell('${HistoryList[i].id}', '${HistoryList[i].serie}')">Удалить</p>
				</div>
				`;
		}
		
		b = idH.filter(function(element, index, array) {
			if (array.lastIndexOf(element) == index) return element
		})
		var url = config["titels_api"]+'getTitles?id_list='+b+'&filter=id,posters.small,names.ru';
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
			for (let t = 0; t < data.length; t++) {
				var elemIMG = document.getElementsByClassName("img"+data[t]["id"])
				for (let i = 0; i < elemIMG.length; i++) {
					elemIMG[i].src = config["posters"]+data[t]["posters"]["small"]["url"];
				}
				var elemNAME = document.getElementsByClassName("names"+data[t]["id"])
				for (let j = 0; j < elemNAME.length; j++) {
					elemNAME[j].innerHTML = data[t]["names"]["ru"];
				}
			}
		})
		.catch(function (error) {
			console.log('error', error)
		})
	}
}

// Функция сброса сортировки
function ClearSortingHistory(){
	document.querySelector("#SortingOrderBy").value = "date"
	document.querySelector("#SortingChecUpTop").checked=true
	
	document.getElementById('HistoryGenerator').innerHTML = `<div id="HistoryNone"><img src="img/libriatyan/4.webp" style="max-width: 145px;"><br /><br /><p style="color: var(--ColorThemes3);">Пока пусто...</p></div>`;
	GeneratorHistory()
}





function logIn_n() {
  document.getElementById('logInG').setAttribute("style", "display:none;");
  document.getElementById('logOutG').setAttribute("style", "");
}
function logOut_n() {
  document.getElementById('logInG').setAttribute("style", "color: var(--ColorThemes3);background: var(--ColorThemes2);");
  document.getElementById('logOutG').setAttribute("style", "display:none;");
}