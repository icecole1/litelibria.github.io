function page_settings() {
  document.getElementById('app').innerHTML = `
  <div class="article-block">
    <center>
      <div class="small_bac">
        <span style="margin-left: 5px;"></span>
        <a onclick="edit_href('/schedule')">Расписание</a>
        <a onclick="edit_href('/release', 'random')">Случайный релиз</a>
        <a onclick="edit_href('/myHistory')">История просмотров</a>
        <a onclick="edit_href('/settings')" style="color: var(--card-text-color-2);background: var(--card-background-3);">Настройки</a>
        <span style="margin-right: 5px;"></span>
      </div>
    </center>
  </div>



  <center>
    <div id="login_profile" style="display:none;">
      <div class="profile-block article-list">
        <div class="logo" id="my_profile_img"> </div>
        <div class="settings_filter">
          <style media="screen">
            .text_profile{
              background: var(--card-background-2) !important;
              border-radius: var(--border-radius) !important;
              padding: 10px !important;
              margin: 10px 0 !important;
            }
          </style>
          <p class="text_profile">Логин: <span id="my_login"></span></p>
          <p class="text_profile">Ник: <span id="my_nickname"></span></p>
          <p class="text_profile">Почта: <span id="my_email"></span></p>
          <p class="text_profile">ВК ID: <span id="my_vk_id"></span></p>
          <p class="text_profile">Patreon ID: <span id="my_patreon_id"></span></p>
          <br />
          <p class="settings_filter_p">*LiteLibria не собирает никаких личных данных о вас, они хранятся только на вашем устройстве!</p>
        </div>

        <a class="profile_button" id="profile_button" onclick="logout()">Выйти из аккаунта</a>
        <!-- <a class="profile_button" id="profile_button" href="https://www.anilibria.tv/public/logout.php">Выйти из аккаунта</a> -->
      </div>
    </div>
    <div id="logout_profile" style="margin-top: -45px;">
      <div class="profile-block article-list">
        <div class="settings_filter" style="text-align: unset !important;">
          <h3>Авторизация</h3>
          <form method="post" name="form_login" class="login_block" id="form_login">
            <p id="error_mes" style="display: none">Неверный логин или пароль!</p><br />
            <label>Логин</label><input required type="text" name="mail" class="logins_box" style="margin-left: 23px;">
            <label>Пароль</label><input required type="password" name="passwd" class="logins_box"><br />
            <input formmethod="post" type="submit"  class="login_button" id="submit" value="Вход">
          </form>
          <p class="settings_filter_p">*LiteLibria не собирает никаких личных данных о вас, они хранятся только на вашем устройстве!</p>
          <p class="settings_filter_p">*Регистрация доступна на сайте <a href="https://www.anilibria.tv/">AniLibria.TV</a>!</p>
        </div>
      </div>
    </div>

    <div class="article-list">
      <h1 style="font-weight: 500;text-align: left;color: var(--card-text-color);padding: 0px 0px 10px 10px;font-size: 24px;">Настройки</h1>
      <div class="settings_filter">
        <h3>Фильтр жанров</h3>
        <div class="settings_filter_box" id="settings_filter_block"></div>

        <p class="settings_filter_p">*Нажмите для отключения</p>
        <p class="settings_filter_p">#Фильтры не работают на странице случайный релиз</p>
      </div>
      <div class="settings_filter">
        <h3>Настройки главной страницы</h3>
        <p class="settings_filter_p">Верхний блок</p>
        <div class="settings_filter_box" id="settings_home_block">
          <button id="home1" class="settings_filter_button" title="Выбрать" onclick="editHome('Популярное')">Популярное на AniLibria</button>
          <button id="home2" class="settings_filter_button" title="Выбрать" onclick="editHome('Ожидаемое')">Ожидаем сегодня</button>
          <button id="home3" class="settings_filter_button" title="Выбрать" onclick="editHome('Выключить')">Отключить</button>
        </div>
        <hr style="border: 1px solid var(--card-background-2);"/>
        <p class="settings_filter_p">Анонс в верхнем блоке</p>
        <div class="settings_filter_box" id="settings_home_block">
          <button id="my_home_announce1" class="settings_filter_button" title="Выбрать" onclick="editHome_announce('1')">Включить</button>
          <button id="my_home_announce2" class="settings_filter_button" title="Выбрать" onclick="editHome_announce('0')" style="background: var(--card-background-2);color: var(--card-text-color) !important;">Отключить</button>
        </div>
        <hr style="border: 1px solid var(--card-background-2);"/>
        <p class="settings_filter_p">Основной блок</p>
				<style>
					.settings_home_design{
						display: grid;
					}
					.settings_home_design svg{
						border-radius: var(--border-radius);
						width: 200px;
						height: auto;
						margin: 5px;
					}
					.settings_home_design span{
						width: calc(100% - 10px);
						background: var(--card-background);
						border-radius: var(--border-radius);
						margin: 0 5px;
						padding: 5px 0;
						color: var(--card-text-color);
					}
				</style>
				<div class="settings_filter_box" id="settings_home_block_style" style="display: flex;overflow: overlay;padding-bottom: 15px;">
          <button id="home1_style" class="settings_filter_button settings_home_design" title="Выбрать" onclick="editHome_style('1')">
						<span>Большой блок</span>
						<svg width="375" height="280" xmlns="http://www.w3.org/2000/svg">
							<g>
								<title>background</title>
								<rect fill="var(--card-background)" id="canvas_background" height="150.4" width="201.06" y="-1" x="-1"/>
								<g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
								<rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
								</g>
							</g>
							<g>
								<title>Layer 1</title>
								<rect rx="10" id="svg_1" height="117.33" width="80" y="16.33" x="13.86" stroke-width="0" stroke="#000" fill="var(--card-background-2)"/>
								<rect rx="10" id="svg_2" height="117.33" width="80" y="16.33" x="106.66" stroke-width="0" stroke="#000" fill="var(--card-background-2)"/>
							</g>
						</svg>
					</button>
          <button id="home2_style" class="settings_filter_button settings_home_design" title="Выбрать" onclick="editHome_style('2')" style="background: var(--card-background-2);color: var(--card-text-color) !important;">
						<span>Маленькая карточка</span>
						<svg xmlns="http://www.w3.org/2000/svg">
							<g>
								<title>background</title>
								<rect fill="var(--card-background)" id="canvas_background" height="150.4" width="201.06" y="-1" x="-1"/>
								<g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
								<rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
								</g>
							</g>
							<g>
								<title>Layer 1</title>
								<rect stroke="#000" rx="10" id="svg_3" height="56.5333" width="135.8933" y="13.38666" x="41.6533" stroke-width="0" fill="var(--card-background-2)"/>
								<rect stroke="#000" rx="10" id="svg_1" height="64" width="43.6266" y="8.8" x="22.4533" stroke-width="0" fill="var(--card-background-5)"/>
								<rect stroke="#000" rx="10" id="svg_4" height="56.5333" width="135.8933" y="81.3333" x="41.6533" stroke-width="0" fill="var(--card-background-2)"/>
								<rect stroke="#000" rx="10" id="svg_5" height="64" width="43.6266" y="76.5333" x="22.4533" stroke-width="0" fill="var(--card-background-5)"/>
							</g>
						</svg>
					</button>
        </div>
        <p class="settings_filter_p">*Нажмите для выбора</p>
      </div>
      <div class="settings_filter">
        <h3>Настройки страницы плеера</h3>
        <p class="settings_filter_p">Пропуск опенинга</p>
        <div class="settings_filter_box" id="settings_home_block_style">
          <button id="opening1_style" class="settings_filter_button" title="Выбрать" onclick="editOpening_style('1')">Автоматически</button>
          <button id="opening2_style" class="settings_filter_button" title="Выбрать" onclick="editOpening_style('0')" style="background: var(--card-background-2);color: var(--card-text-color) !important;">Отключить</button>
        </div>
        <hr style="border: 1px solid var(--card-background-2);"/>
        <p class="settings_filter_p">Нативный плеер iOS</p>
        <div class="settings_filter_box" id="settings_home_block_style">
          <button id="Player1_style" class="settings_filter_button" title="Выбрать" onclick="editPlayer_style('1')">Включить</button>
          <button id="Player2_style" class="settings_filter_button" title="Выбрать" onclick="editPlayer_style('2')" style="background: var(--card-background-2);color: var(--card-text-color) !important;">Отключить</button>
        </div>
        <p class="settings_filter_p">*Нажмите для выбора</p>
      </div>
      <div class="settings_filter">
        <h3>Общие настройки</h3>
        <p class="settings_filter_p">Очистка кеша</p>
        <div class="settings_filter_box" id="settings_home_block_style">
          <button class="settings_filter_button" title="Выбрать" onclick="dellMyCash()">Очистить кеш</button>
        </div>
        <p class="settings_filter_p">*Нажмите для выбора</p>
      </div>
    </div>


    <div class="article-list">
      <div class="settings_filter">
        <h3>Ссылки</h3>
        <a class="settings_filter_button" href="https://rozenrod.github.io/" style="display: inline-block;color: var(--card-text-color-2);">Сайт разработчика</a>
        <a class="settings_filter_button" href="https://github.com/LiteLibria/litelibria.github.io" style="display: inline-block;color: var(--card-text-color-2);">Страница GitHub</a>
        <a class="settings_filter_button" href="https://www.instagram.com/rozenrod/" style="display: inline-block;color: var(--card-text-color-2);">Страница Instagram</a>
      </div>
    </div>
  </center>
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

  var cookie = localStorage.getItem('PHPSESSID');
  if (cookie && cookie != 'undefined') {
    document.getElementById('login_profile').setAttribute("style", "");
    document.getElementById('logout_profile').setAttribute("style", "display:none;");

    load_profile(cookie);
  } else {
    document.getElementById('login_profile').setAttribute("style", "display:none;");
    document.getElementById('logout_profile').setAttribute("style", "");
  }

  url = config["titels_api"]+"getGenres";
  $.get(url, function(data){
    // let data = ['Боевые искусства', 'Вампиры', 'Демоны', 'Детектив', 'Драма', 'Игры', 'Исторический', 'Комедия', 'Магия', 'Меха', 'Мистика', 'Музыка', 'Повседневность', 'Приключения', 'Психологическое', 'Романтика', 'Сверхъестественное', 'Сёдзе', 'Сейнен', 'Сёнен', 'Спорт', 'Супер сила', 'Триллер', 'Ужасы', 'Фантастика', 'Фэнтези', 'Школа', 'Экшен', 'Этти']
    var data_arr = data;
    var cookie_genres = localStorage.getItem('my_genres');
    if (!cookie_genres) {
      localStorage.setItem('my_genres', '');
    }
    for(let i = 0; data[i]; i++) {
      var div_filter = document.createElement('div');
      document.getElementById('settings_filter_block').appendChild(div_filter);
      div_filter.className = 'settings_filter_div';
      div_filter.innerHTML = '<button id="filter_'+data[i]+'" class="settings_filter_button" title="Отключить" onclick="editGenres(\''+data[i]+'\')">'+data[i]+'</button>';
    }
    var cookie_genres = localStorage.getItem('my_genres');
    if (cookie_genres) {
      var List_cookie_genres = cookie_genres.split(/\s*,\s*/);
      for (let i = 0; List_cookie_genres[i]; i++) {
        id_Genres = 'filter_'+List_cookie_genres[i];
        document.getElementById(id_Genres).setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
        document.getElementById(id_Genres).title = "Включить";
      }
    }
  });

  var cookie_Home = localStorage.getItem('my_home');
  if (!cookie_Home) {
    localStorage.setItem('my_home', 'Популярное');
    document.getElementById('home1').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
    document.getElementById('home2').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
    document.getElementById('home3').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
  } else {
    if (cookie_Home == "Популярное") {
      localStorage.setItem('my_home', 'Популярное');
      document.getElementById('home1').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
      document.getElementById('home2').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
      document.getElementById('home3').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
    } else if (cookie_Home == "Ожидаемое") {
      localStorage.setItem('my_home', 'Ожидаемое');
      document.getElementById('home1').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
      document.getElementById('home2').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
      document.getElementById('home3').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
    } else if (cookie_Home == "Выключить") {
      localStorage.setItem('my_home', 'Выключить');
      document.getElementById('home1').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
      document.getElementById('home2').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
      document.getElementById('home3').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
    }
  }


  var my_home_style = localStorage.getItem('my_home_style');
  if (!my_home_style) {
    localStorage.setItem('my_home_style', '1');
    document.getElementById('home1_style').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
    document.getElementById('home2_style').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
  } else {
    if (my_home_style == "1") {
      localStorage.setItem('my_home_style', '1');
      document.getElementById('home1_style').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
      document.getElementById('home2_style').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
    } else if (my_home_style == "2") {
      localStorage.setItem('my_home_style', '2');
      document.getElementById('home1_style').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
      document.getElementById('home2_style').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
    }
  }

  var my_home_announce = localStorage.getItem('my_home_announce');
  if (!my_home_announce) {
    localStorage.setItem('my_home_announce', '0');
    document.getElementById('my_home_announce2').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
    document.getElementById('my_home_announce1').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
  } else {
    if (my_home_announce == "1") {
      localStorage.setItem('my_home_announce', '1');
      document.getElementById('my_home_announce1').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
      document.getElementById('my_home_announce2').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
    } else if (my_home_announce == "0") {
      localStorage.setItem('my_home_announce', '0');
      document.getElementById('my_home_announce1').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
      document.getElementById('my_home_announce2').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
    }
  }

  var my_skips_opening = localStorage.getItem('my_skips_opening');
  if (!my_skips_opening) {
    localStorage.setItem('my_skips_opening', '0');
    document.getElementById('opening2_style').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
    document.getElementById('opening1_style').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
  } else {
    if (my_skips_opening == "1") {
      document.getElementById('opening1_style').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
      document.getElementById('opening2_style').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
    } else {
      document.getElementById('opening1_style').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
      document.getElementById('opening2_style').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
    }
  }



  var my_player_style = localStorage.getItem('my_player_style');
  if (!my_player_style) {
    localStorage.setItem('my_player_style', '2');
    document.getElementById('Player2_style').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
    document.getElementById('Player1_style').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
  } else {
    if (my_player_style == "1") {
      document.getElementById('Player1_style').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
      document.getElementById('Player2_style').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
    } else if (my_player_style == "2") {
      document.getElementById('Player1_style').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
      document.getElementById('Player2_style').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
    }
  }

  preloader_none();
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


function editGenres(genres) {
  var cookie_genres = localStorage.getItem('my_genres');
  var List_cookie_genres = cookie_genres.split(/\s*,\s*/);

  if (cookie_genres) {
    if (List_cookie_genres.includes(genres)) {
      document.getElementById('filter_'+genres).setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
      document.getElementById('filter_'+genres).title = "Отключить";
      var myArray = List_cookie_genres;
      var myIndex = myArray.indexOf(genres);
      if (myIndex !== -1) {
          myArray.splice(myIndex, 1);
      }
      localStorage.setItem('my_genres', myArray);
    } else {
      var new_cookie_genres = cookie_genres +', '+ genres;
      localStorage.setItem('my_genres', new_cookie_genres);
      document.getElementById('filter_'+genres).setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
      document.getElementById('filter_'+genres).title = "Включить";
    }
  } else {
    localStorage.setItem('my_genres', genres);
    document.getElementById('filter_'+genres).setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
    document.getElementById('filter_'+genres).title = "Включить";
  }
}

function editHome(name) {
  var cookie_Home = localStorage.getItem('my_home');
  if (name == "Популярное") {
    localStorage.setItem('my_home', 'Популярное');
    document.getElementById('home1').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
    document.getElementById('home2').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
    document.getElementById('home3').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
  } else if (name == "Ожидаемое") {
    localStorage.setItem('my_home', 'Ожидаемое');
    document.getElementById('home1').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
    document.getElementById('home2').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
    document.getElementById('home3').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
  } else if (name == "Выключить") {
   localStorage.setItem('my_home', 'Выключить');
   document.getElementById('home1').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
   document.getElementById('home2').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
   document.getElementById('home3').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
 }
}

function editHome_style(style) {
  if (style == "1") {
    localStorage.setItem('my_home_style', '1');
    document.getElementById('home1_style').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
    document.getElementById('home2_style').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
  } else if (style == "2") {
    localStorage.setItem('my_home_style', '2');
    document.getElementById('home1_style').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
    document.getElementById('home2_style').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
  }
}

function editHome_announce(style) {
  if (style == "1") {
    localStorage.setItem('my_home_announce', '1');
    document.getElementById('my_home_announce1').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
    document.getElementById('my_home_announce2').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
  } else if (style == "0") {
    localStorage.setItem('my_home_announce', '0');
    document.getElementById('my_home_announce1').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
    document.getElementById('my_home_announce2').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
  }
}

function editOpening_style(style) {
  if (style == "1") {
    localStorage.setItem('my_skips_opening', '1');
    document.getElementById('opening1_style').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
    document.getElementById('opening2_style').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
  } else if (style == "0") {
    localStorage.setItem('my_skips_opening', '0');
    document.getElementById('opening1_style').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
    document.getElementById('opening2_style').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
  }
}

function editPlayer_style(style) {
  if (style == "1") {
    localStorage.setItem('my_player_style', '1');
    document.getElementById('Player1_style').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
    document.getElementById('Player2_style').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
  } else if (style == "2") {
    localStorage.setItem('my_player_style', '2');
    document.getElementById('Player1_style').setAttribute("style", "background: var(--card-background-2);color: var(--card-text-color) !important;");
    document.getElementById('Player2_style').setAttribute("style", "background: var(--card-background-3);color: var(--card-text-color-2) !important;");
  }
}

function dellMyCash() {
  localStorage.setItem('my_api_cash', '');
}
