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
		<div id="logout_profile">
      <div class="OptionsAuth">
				<form method="post" name="form_login" id="form_login">
					<p id="error_mes" style="display: none">Неверный логин или пароль!</p><br />
					<div style="width: 220px;">
						<label>Логин</label><input required type="text" name="mail" class="loginsBox" style="margin-left: 23px;">
						<label>Пароль</label><input required type="password" name="passwd" class="loginsBox"><br />
						<input type="submit" class="OptionsButtom" id="submit" value="Вход">
					</div>
					<br>
					<p class="OptionsAuthText">*LiteLibria не собирает никаких личных данных о вас, они хранятся только на вашем устройстве!</p>
					<p class="OptionsAuthText">*Регистрация доступна на сайте <a href="https://www.anilibria.tv/">AniLibria.TV</a>!</p>
				</form>
      </div>
    </div>

		<div class="OptionsBlockCard">
			<div class="OptionsCard">
				<h3>Настройки страницы плеера</h3>
				<p class="settings_filter_p">Пропуск опенинга</p>
				<div id="settings_home_block_style" style="margin-bottom: 15px;">
					<button id="opening1_style" class="OptionsCardButton" title="Выбрать" onclick="editOpening_style('1')">Автоматически</button>
					<button id="opening2_style" class="OptionsCardButton" title="Выбрать" onclick="editOpening_style('0')" style="background: var(--ColorThemes2);color: var(--ColorThemes3) !important;">Отключить</button>
				</div>
				<hr style="border: 1px solid var(--ColorThemes2);"/>
				<p class="settings_filter_p">Нативный плеер iOS</p>
				<div id="settings_home_block_style" style="margin-bottom: 15px;">
					<button id="Player1_style" class="OptionsCardButton" title="Выбрать" onclick="editPlayer_style('1')">Включить</button>
					<button id="Player2_style" class="OptionsCardButton" title="Выбрать" onclick="editPlayer_style('2')" style="background: var(--ColorThemes2);color: var(--ColorThemes3) !important;">Отключить</button>
				</div>
				<p class="settings_filter_p">*Нажмите для выбора</p>
			</div>

			<div class="OptionsCard">
				<h3>Настройки оформления</h3>
				<p class="settings_filter_p">Тема</p>
				<div id="settings_home_block_style" style="margin-bottom: 15px;">
					<button id="Theme1_style" class="OptionsCardButton" title="Выбрать" onclick="SetThemeEditStyle('auto')">Автоматическая</button>
					<button id="Theme2_style" class="OptionsCardButton" title="Выбрать" onclick="SetThemeEditStyle('theme1')" style="background: var(--ColorThemes2);color: var(--ColorThemes3) !important;">Светлая</button>
					<button id="Theme3_style" class="OptionsCardButton" title="Выбрать" onclick="SetThemeEditStyle('theme2')" style="background: var(--ColorThemes2);color: var(--ColorThemes3) !important;">Темная</button>
				</div>
				<p class="settings_filter_p">*Нажмите для выбора</p>
			</div>
		</div>

		<div class="OptionsBlockCard">
			<div class="OptionsCard">
				<h3>Настройки зеркал</h3>
				<p class="settings_filter_p">Режим</p>
				<div id="settings_home_block_style" style="margin-bottom: 15px;">
					<button id="MirrorModeOff" class="OptionsCardButton" title="Выбрать" onclick="SetMirrorMode('false')">Отключено</button>
					<button id="MirrorModeOn" class="OptionsCardButton" title="Выбрать" onclick="SetMirrorMode('true')" style="background: var(--ColorThemes2);color: var(--ColorThemes3) !important;">Включено</button>
				</div>
				<hr style="border: 1px solid var(--ColorThemes2);"/>
				<p class="settings_filter_p">Своё зеркало</p>
				<br>
				<center>
					<form name="formMirror" class="formMirror">
						<div class="blockMirror">
							<label>API</label><input required type="text" name="MirrorTitels" id="MirrorTitels" class="MirrorBox" placeholder="https://api.sdev.xyz/v2/">
						</div>
						<br>
						<div class="blockMirror">
							<label>Постеры</label><input required type="text" name="MirrorPosters" id="MirrorPosters" class="MirrorBox" placeholder="https://tb2og.anilib.top">
						</div>
						<br>
						<button class="OptionsCardButton" title="Выбрать" onclick="SetMirrorString()">Сохранить</button>
					</form>
				</center>
				<p class="settings_filter_p">*Нажмите для выбора</p>
			</div>
		</div>

	</div>
  `;


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
        document.getElementById('my_profile_img').setAttribute("style", "background-image: url('img/profile/my_profile_img.jpg');background-position: center;background-size: cover;");
      } else if (getRandomInt(4) == 2) {
        document.getElementById('my_profile_img').setAttribute("style", "background-image: url('img/profile/my_profile_img_2.jpg');background-position: center;background-size: cover;");
      } else if (getRandomInt(4) == 3) {
        document.getElementById('my_profile_img').setAttribute("style", "background-image: url('img/profile/my_profile_img_3.jpg');background-position: center;background-size: cover;");
      } else {
        document.getElementById('my_profile_img').setAttribute("style", "background-image: url('img/profile/my_profile_img_1.jpg');background-position: center;background-size: cover;");
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
  	document.getElementById('Theme1_style').setAttribute("style", "");
 		document.getElementById('Theme2_style').setAttribute("style", "background: var(--ColorThemes2);color: var(--ColorThemes3) !important;");
  	document.getElementById('Theme3_style').setAttribute("style", "background: var(--ColorThemes2);color: var(--ColorThemes3) !important;");
		$('link[href="css/theme2.css"]').attr('href', 'css/auto.css');
	} else if (theme == 'theme1') {
  	document.getElementById('Theme1_style').setAttribute("style", "background: var(--ColorThemes2);color: var(--ColorThemes3) !important;");
 		document.getElementById('Theme2_style').setAttribute("style", "");
  	document.getElementById('Theme3_style').setAttribute("style", "background: var(--ColorThemes2);color: var(--ColorThemes3) !important;");
		$('link[href="css/theme2.css"]').attr('href', 'css/theme1.css');
	} else if (theme == 'theme2') {
  	document.getElementById('Theme1_style').setAttribute("style", "background: var(--ColorThemes2);color: var(--ColorThemes3) !important;");
 		document.getElementById('Theme2_style').setAttribute("style", "background: var(--ColorThemes2);color: var(--ColorThemes3) !important;");
  	document.getElementById('Theme3_style').setAttribute("style", "");
		$('link[href="css/theme2.css"]').attr('href', 'css/theme2.css');
	}
}
function SetThemeEditStyle(theme){
	if (theme == 'auto') {
		localStorage.setItem('my_theme', 'auto');
  	document.getElementById('Theme1_style').setAttribute("style", "");
 		document.getElementById('Theme2_style').setAttribute("style", "background: var(--ColorThemes2);color: var(--ColorThemes3) !important;");
  	document.getElementById('Theme3_style').setAttribute("style", "background: var(--ColorThemes2);color: var(--ColorThemes3) !important;");
		$('link[href="css/theme1.css"]').attr('href', 'css/auto.css');
		$('link[href="css/theme2.css"]').attr('href', 'css/auto.css');

	} else if (theme == 'theme1') {
		localStorage.setItem('my_theme', 'theme1');
  	document.getElementById('Theme1_style').setAttribute("style", "background: var(--ColorThemes2);color: var(--ColorThemes3) !important;");
 		document.getElementById('Theme2_style').setAttribute("style", "");
  	document.getElementById('Theme3_style').setAttribute("style", "background: var(--ColorThemes2);color: var(--ColorThemes3) !important;");
		$('link[href="css/auto.css"]').attr('href', 'css/theme1.css');
		$('link[href="css/theme2.css"]').attr('href', 'css/theme1.css');
	} else if (theme == 'theme2') {
		localStorage.setItem('my_theme', 'theme2');
  	document.getElementById('Theme1_style').setAttribute("style", "background: var(--ColorThemes2);color: var(--ColorThemes3) !important;");
 		document.getElementById('Theme2_style').setAttribute("style", "background: var(--ColorThemes2);color: var(--ColorThemes3) !important;");
  	document.getElementById('Theme3_style').setAttribute("style", "");
		$('link[href="css/auto.css"]').attr('href', 'css/theme2.css');
		$('link[href="css/theme1.css"]').attr('href', 'css/theme2.css');
	}
}


function GetMirrorMode(){
	mode = localStorage.getItem('GetMirror');

	if(mode == 'false'){
		localStorage.setItem('GetMirror', 'false');
		document.getElementById('MirrorModeOff').setAttribute("style", "");
		document.getElementById('MirrorModeOn').setAttribute("style", "background: var(--ColorThemes2);color: var(--ColorThemes3) !important;");
	} else if(mode == 'true'){
		localStorage.setItem('GetMirror', 'true');
		document.getElementById('MirrorModeOff').setAttribute("style", "background: var(--ColorThemes2);color: var(--ColorThemes3) !important;");
		document.getElementById('MirrorModeOn').setAttribute("style", "");
	}
}
function SetMirrorMode(mode){
	if(mode == 'false'){
		localStorage.setItem('GetMirror', 'false');
		document.getElementById('MirrorModeOff').setAttribute("style", "");
		document.getElementById('MirrorModeOn').setAttribute("style", "background: var(--ColorThemes2);color: var(--ColorThemes3) !important;");
	} else if(mode == 'true'){
		localStorage.setItem('GetMirror', 'true');
		document.getElementById('MirrorModeOff').setAttribute("style", "background: var(--ColorThemes2);color: var(--ColorThemes3) !important;");
		document.getElementById('MirrorModeOn').setAttribute("style", "");
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