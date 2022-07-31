var MySessID;

function page_options() {
  document.getElementById('app').innerHTML = `
	
	<!-- Блок Каталог	 -->
	<div class="OptionsBlock">

		<!-- Блок Аккаунта	 -->
		<div id="login_profile" style="display:none;">
			<div class="OptionsAccount">
				<div class="OptionsAccountLogo" id="my_profile_img"> </div>
				<div class="OptionsAccountText">
					<p class="OptionsAccountTextProfile">Логин: <span id="my_login"></span></p>
					<p class="OptionsAccountTextProfile">Ник: <span id="my_nickname"></span></p>
					<p class="OptionsAccountTextProfile">Почта: <span id="my_email"></span></p>
					<p class="OptionsAccountTextProfile">ВК ID: <span id="my_vk_id"></span></p>
					<p class="OptionsAccountTextProfile">Patreon ID: <span id="my_patreon_id"></span></p>
					<br />
					<p class="settings_filter_p">*LiteLibria не собирает никаких личных данных о вас, они хранятся только на вашем устройстве!</p>
				</div>

				<Button class="ButtonHovers" onclick="logout()" style="margin: 10px 0 20px 0;">Выйти из аккаунта</Button>
			</div>
		</div>

		<!-- Блок Авторизации	 -->
		<div class="OptionsBlockCard" id="logout_profile">
			<div class="OptionsCard">
				<h3>Авторизация</h3>
				<br>
				<form method="post" name="form_login" id="form_login" class="formMirror">
					<p id="error_mes" style="display: none">Неверный логин или пароль!</p><br />
					<div class="blockMirror">
						<label>Логин</label><input required type="text" name="mail" class="MirrorBox">
					</div>
					<br>
					<div class="blockMirror">
						<label>Пароль</label><input required type="password" name="passwd" class="MirrorBox">
					</div>
					<br>
					<input type="submit" class="OptionsCardButton" id="submit" value="Вход" data-state="Select">
				</form>
				<p class="settings_filter_p">*LiteLibria не собирает никаких личных данных о вас, они хранятся только на вашем устройстве!</p>
				<p class="settings_filter_p">*Регистрация доступна на сайте <a href="https://www.anilibria.tv/">AniLibria.TV</a>!</p>
			</div>
    </div>

		<div class="OptionsBlockCard">
			<div class="OptionsCard">
				<h3>Настройки страницы плеера</h3>
				<p class="settings_filter_p">Пропуск опенинга</p>
				<div id="settings_home_block_style" style="margin-bottom: 15px;">
					<button id="opening1_style" class="OptionsCardButton" title="Выбрать" onclick="SetOpening_style('1')">Автоматически</button>
					<button id="opening2_style" class="OptionsCardButton" title="Выбрать" onclick="SetOpening_style('0')">Отключить</button>
				</div>
				<hr>
				<p class="settings_filter_p">Нативный плеер iOS</p>
				<div id="settings_home_block_style" style="margin-bottom: 15px;">
					<button id="Player1_style" class="OptionsCardButton" title="Выбрать" onclick="SetPlayer_style('1')">Включить</button>
					<button id="Player2_style" class="OptionsCardButton" title="Выбрать" onclick="SetPlayer_style('2')">Отключить</button>
				</div>
				<p class="settings_filter_p">*Нажмите для выбора</p>
			</div>

			<div class="OptionsCard">
				<h3>Настройки оформления</h3>
				<p class="settings_filter_p">Тема</p>
				<div id="settings_home_block_style" style="margin-bottom: 15px;">
					<button id="Theme1_style" class="OptionsCardButton" title="Выбрать" onclick="SetThemeEditStyle('auto')">Автоматическая</button>
					<button id="Theme2_style" class="OptionsCardButton" title="Выбрать" onclick="SetThemeEditStyle('theme1')">Светлая</button>
					<button id="Theme3_style" class="OptionsCardButton" title="Выбрать" onclick="SetThemeEditStyle('theme2')">Темная</button>
				</div>
				<hr>
				<p class="settings_filter_p">Загрузка постеров</p>
				<div id="settings_home_block_style" style="margin-bottom: 15px;">
					<button id="Posters1_style" class="OptionsCardButton" title="Выбрать" onclick="SetPostersStyle('original')">Оригинал</button>
					<button id="Posters2_style" class="OptionsCardButton" title="Выбрать" onclick="SetPostersStyle('webp')">Оптимизированные (webP)</button>
				</div>
				<p class="settings_filter_p">*Нажмите для выбора</p>
			</div>

			<div class="OptionsCard">
				<h3>Настройки зеркал</h3>
				<p class="settings_filter_p">Режим</p>
				<div id="settings_home_block_style" style="margin-bottom: 15px;">
					<button id="MirrorModeOff" class="OptionsCardButton" title="Выбрать" onclick="SetMirrorMode('false')">Отключено</button>
					<button id="MirrorModeOn" class="OptionsCardButton" title="Выбрать" onclick="SetMirrorMode('true')">Включено</button>
				</div>
				<hr>
				<p class="settings_filter_p">Своё зеркало</p>
				<br>
				<form name="formMirror" class="formMirror">
					<div class="blockMirror">
						<label>API</label><input required type="text" name="MirrorTitels" id="MirrorTitels" class="MirrorBox" placeholder="https://api.sdev.xyz/v2/">
					</div>
					<br>
					<div class="blockMirror">
						<label>Постеры</label><input required type="text" name="MirrorPosters" id="MirrorPosters" class="MirrorBox" placeholder="https://tb2og.anilib.top">
					</div>
					<br>
					<button class="OptionsCardButton" title="Выбрать" onclick="SetMirrorString()" data-state="Select">Сохранить</button>
				</form>
				<p class="settings_filter_p">*Нажмите для выбора</p>
			</div>

			<div class="OptionsCard">
				<h3>Полезное</h3>
				<p class="settings_filter_p">Ссылки</p>
				<div id="settings_home_block_style" style="margin: 15px 0;">
					<a href="https://rozenrod.com" class="OptionsCardButton">Разработчик</a>
					<a href="game.html" class="OptionsCardButton">Встроенная игра</a>
				</div>
				<hr>
				<p class="settings_filter_p">Версия приложения</p>
				<div id="settings_home_block_style" style="margin: 15px 0;">
					<a href="buildHistory.html" class="OptionsCardButton"><span id="app_version" title="Код обновления">app version</span></a>
				</div>
				<p class="settings_filter_p">*Нажмите для выбора</p>
			</div>
		</div>

	</div>
  `;
	document.getElementById('app_version').innerHTML = `${config["cache_prefix"]}-${config["cache_version"]}`;


	const form_login = document.querySelector('#form_login');
  form_login.addEventListener('submit', evt => {
      evt.preventDefault();
      fetch('https://www.anilibria.tv/public/login.php', {
          method: 'POST',
          body: new FormData(form_login)
      })
      .then(function (response) {
        return Promise.resolve(response)
      })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log(data);
        if (data['key'] == 'success') {
          localStorage.setItem('PHPSESSID', data['sessionId']);
          document.getElementById('login_profile').setAttribute("style", "");
          document.getElementById('logout_profile').setAttribute("style", "display:none;");
          load_profile(data['sessionId'])
        } else {
          document.getElementById('error_mes').setAttribute("style", `display:block;`);
        }
      })
      .catch(function (error) {
        console.log('error', error)
      })
  });


	LoadOptionPHPSESSID();
	GetThemeEditStyle();
	GetMirrorMode();
	GetMirrorString();
	GetOpening_style();
	GetPlayer_style();
	GetPostersStyle();


	appWidth();
  Scroll_to_top();
}

// Функция получения PHPSESSID из локального хранилища
function LoadOptionPHPSESSID(){
	MySessID = localStorage.getItem('PHPSESSID');
  if (!MySessID || MySessID == 'undefined') {
  
		document.getElementById('login_profile').setAttribute("style", "display:none;");
    document.getElementById('logout_profile').setAttribute("style", "");
		preloader_none();
  } else {
		
		document.getElementById('login_profile').setAttribute("style", "");
    document.getElementById('logout_profile').setAttribute("style", "display:none;");
		load_profile(MySessID);
		preloader_none();
  }
}

function load_profile(sessionId) {
  var url = config["titels_api"]+"getUser?session="+sessionId;
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
    var my_login = data['login'];
    var my_nickname = data['nickname'];
    var my_email = data['email'];
    var my_avatar_original = data['avatar_original'];
    var my_avatar_thumbnail = data['avatar_thumbnail'];
    var my_vk_id = data['vk_id'];
    var my_patreon_id = data['patreon_id'];

		localStorage.setItem('myLogin', my_login);

    if (my_login) {document.getElementById('my_login').innerHTML = my_login;}
    if (my_nickname) {document.getElementById('my_nickname').innerHTML = my_nickname;}
    if (my_email) {document.getElementById('my_email').innerHTML = my_email;}
    if (my_vk_id) {document.getElementById('my_vk_id').innerHTML = my_vk_id;}
    if (my_patreon_id) {document.getElementById('my_patreon_id').innerHTML = my_patreon_id;}

    if (my_avatar_original) {
      document.getElementById('my_profile_img').setAttribute("style", "background-image: url('https://www.anilibria.tv/"+my_avatar_original+"');background-position: center;background-size: cover;");
    } else {
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      if (getRandomInt(4) == 1) {
        document.getElementById('my_profile_img').setAttribute("style", "background-image: url('img/profile/my_profile_img.webp');background-position: center;background-size: cover;");
      } else if (getRandomInt(4) == 2) {
        document.getElementById('my_profile_img').setAttribute("style", "background-image: url('img/profile/my_profile_img_2.webp');background-position: center;background-size: cover;");
      } else if (getRandomInt(4) == 3) {
        document.getElementById('my_profile_img').setAttribute("style", "background-image: url('img/profile/my_profile_img_3.webp');background-position: center;background-size: cover;");
      } else {
        document.getElementById('my_profile_img').setAttribute("style", "background-image: url('img/profile/my_profile_img_1.webp');background-position: center;background-size: cover;");
      }
    }
  })
}

function logout() {
  localStorage.setItem('PHPSESSID', '');
  document.getElementById('login_profile').setAttribute("style", "display:none;");
  document.getElementById('logout_profile').setAttribute("style", "");
}


function GetThemeEditStyle(){
	theme = localStorage.getItem('my_theme');

	if (theme == 'auto') {
  	document.getElementById('Theme1_style').dataset.state = 'Select';
 		document.getElementById('Theme2_style').dataset.state = '';
  	document.getElementById('Theme3_style').dataset.state = '';
		$('link[href="css/theme2.css"]').attr('href', 'css/auto.css');
	} else if (theme == 'theme1') {
  	document.getElementById('Theme1_style').dataset.state = '';
 		document.getElementById('Theme2_style').dataset.state = 'Select';
  	document.getElementById('Theme3_style').dataset.state = '';
		$('link[href="css/theme2.css"]').attr('href', 'css/theme1.css');
	} else if (theme == 'theme2') {
  	document.getElementById('Theme1_style').dataset.state = '';
 		document.getElementById('Theme2_style').dataset.state = '';
  	document.getElementById('Theme3_style').dataset.state = 'Select';
		$('link[href="css/theme2.css"]').attr('href', 'css/theme2.css');
	}
}
function SetThemeEditStyle(theme){
	if (theme == 'auto') {
		localStorage.setItem('my_theme', 'auto');
  	document.getElementById('Theme1_style').dataset.state = 'Select';
 		document.getElementById('Theme2_style').dataset.state = '';
  	document.getElementById('Theme3_style').dataset.state = '';
		$('link[href="css/theme1.css"]').attr('href', 'css/auto.css');
		$('link[href="css/theme2.css"]').attr('href', 'css/auto.css');
		document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: light)"]').setAttribute("content", "#fbfbfb");
		document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: dark)"]').setAttribute("content", "#1c1c19");
	} else if (theme == 'theme1') {
		localStorage.setItem('my_theme', 'theme1');
  	document.getElementById('Theme1_style').dataset.state = '';
 		document.getElementById('Theme2_style').dataset.state = 'Select';
  	document.getElementById('Theme3_style').dataset.state = '';
		$('link[href="css/auto.css"]').attr('href', 'css/theme1.css');
		$('link[href="css/theme2.css"]').attr('href', 'css/theme1.css');
		document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: light)"]').setAttribute("content", "#fbfbfb");
		document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: dark)"]').setAttribute("content", "#fbfbfb");
	} else if (theme == 'theme2') {
		localStorage.setItem('my_theme', 'theme2');
  	document.getElementById('Theme1_style').dataset.state = '';
 		document.getElementById('Theme2_style').dataset.state = '';
  	document.getElementById('Theme3_style').dataset.state = 'Select';
		$('link[href="css/auto.css"]').attr('href', 'css/theme2.css');
		$('link[href="css/theme1.css"]').attr('href', 'css/theme2.css');
		document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: light)"]').setAttribute("content", "#1c1c19");
		document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: dark)"]').setAttribute("content", "#1c1c19");
	}
}

function GetPostersStyle(){
	postersMode = localStorage.getItem('postersMode');

	if (postersMode == 'webp') {
  	document.getElementById('Posters1_style').dataset.state = '';
 		document.getElementById('Posters2_style').dataset.state = 'Select';
	} else {
  	document.getElementById('Posters1_style').dataset.state = 'Select';
  	document.getElementById('Posters2_style').dataset.state = '';
	}
}
function SetPostersStyle(mode){
	if (mode == 'original') {
		localStorage.setItem('postersMode', 'original');
		document.getElementById('Posters1_style').dataset.state = 'Select';
  	document.getElementById('Posters2_style').dataset.state = '';
	} else if (mode == 'webp') {
		localStorage.setItem('postersMode', 'webp');
  	document.getElementById('Posters1_style').dataset.state = '';
 		document.getElementById('Posters2_style').dataset.state = 'Select';
	}
}


function GetMirrorMode(){
	mode = localStorage.getItem('GetMirror');

	if(mode == 'false'){
		localStorage.setItem('GetMirror', 'false');
		document.getElementById('MirrorModeOff').dataset.state = 'Select';
		document.getElementById('MirrorModeOn').dataset.state = '';
	} else if(mode == 'true'){
		localStorage.setItem('GetMirror', 'true');
		document.getElementById('MirrorModeOff').dataset.state = '';
		document.getElementById('MirrorModeOn').dataset.state = 'Select';
	}
}
function SetMirrorMode(mode){
	if(mode == 'false'){
		localStorage.setItem('GetMirror', 'false');
		document.getElementById('MirrorModeOff').dataset.state = 'Select';
		document.getElementById('MirrorModeOn').dataset.state = '';
	} else if(mode == 'true'){
		localStorage.setItem('GetMirror', 'true');
		document.getElementById('MirrorModeOff').dataset.state = '';
		document.getElementById('MirrorModeOn').dataset.state = 'Select';
	}
	location.reload();
}

function GetMirrorString(){
	var MirrorTitels = localStorage.getItem('GetMirrorTitels');
	var MirrorPosters = localStorage.getItem('GetMirrorPosters');

	document.getElementById('MirrorTitels').value = MirrorTitels;
	document.getElementById('MirrorPosters').value = MirrorPosters;
}
function SetMirrorString(){

	var MirrorTitels = document.getElementById('MirrorTitels').value;
	var MirrorPosters = document.getElementById('MirrorPosters').value;

	localStorage.setItem('GetMirrorTitels', MirrorTitels);
	localStorage.setItem('GetMirrorPosters', MirrorPosters);
}

function GetOpening_style(){
	var my_player_style = localStorage.getItem('my_player_style');
  if (!my_player_style) {
    localStorage.setItem('my_player_style', '2');
    document.getElementById('Player2_style').dataset.state = 'Select';
    document.getElementById('Player1_style').dataset.state = '';
  } else {
    if (my_player_style == "1") {
      document.getElementById('Player1_style').dataset.state = 'Select';
      document.getElementById('Player2_style').dataset.state = '';
    } else if (my_player_style == "2") {
      document.getElementById('Player1_style').dataset.state = '';
      document.getElementById('Player2_style').dataset.state = 'Select';
    }
  }
}
function SetOpening_style(style) {
  if (style == "1") {
    localStorage.setItem('my_skips_opening', '1');
    document.getElementById('opening1_style').dataset.state = 'Select';
    document.getElementById('opening2_style').dataset.state = '';
  } else if (style == "0") {
    localStorage.setItem('my_skips_opening', '0');
    document.getElementById('opening1_style').dataset.state = '';
    document.getElementById('opening2_style').dataset.state = 'Select';
  }
}



function GetPlayer_style(){
	var my_skips_opening = localStorage.getItem('my_skips_opening');
  if (!my_skips_opening) {
    localStorage.setItem('my_skips_opening', '0');
    document.getElementById('opening2_style').dataset.state = 'Select';
    document.getElementById('opening1_style').dataset.state = '';
  } else {
    if (my_skips_opening == "1") {
      document.getElementById('opening1_style').dataset.state = 'Select';
      document.getElementById('opening2_style').dataset.state = '';
    } else {
      document.getElementById('opening1_style').dataset.state = '';
      document.getElementById('opening2_style').dataset.state = 'Select';
    }
  }
}
function SetPlayer_style(style) {
  if (style == "1") {
    localStorage.setItem('my_player_style', '1');
    document.getElementById('Player1_style').dataset.state = 'Select';
    document.getElementById('Player2_style').dataset.state = '';
  } else if (style == "2") {
    localStorage.setItem('my_player_style', '2');
    document.getElementById('Player1_style').dataset.state = '';
    document.getElementById('Player2_style').dataset.state = 'Select';
  }
}