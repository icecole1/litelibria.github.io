function page_favorites() {
  document.getElementById('app').innerHTML = `
  <div class="article-block" id="sorting_block_none">
    <div class="article-list block_chosen">
        <!-- <a class="pages_catalog" href="" style="cursor:pointer;">⇅</a> -->
        <div class="select_form">
          <select class="chosen_box" id="Sorting_block">
            <option value="0">Сортировать по ...</option>
            <option value="year">Году</option>
            <option value="codes">Названию</option>
            <option value="in_favorites">Популярности</option>
            <option value="series">Количеству серий</option>
            <option value="code">Типу</option>
          </select>
          <label class="container">
            <input type="checkbox" checked="checked" id="checkbox_sorting">
            <span class="checkmark"></span>
          </label>
          <button class="chosen_button" onclick="load_sortingTitles_Favorites()">Показать</button>
        </div>
    </div>
  </div>

  <div class="article-block">
    <center>
      <div class="article-list ">
        <h1>Избранные тайтлы</h1>
        <div id="error" style="display:none;">
          <h1 style="color: var(--card-text-color);">Ничего не найдено!</h1>
          <br>
          <img src="img/libriatyan/1.png" style="max-width: 90%;">
        </div>
        <div id="relise_block"></div>

        <style media="screen">
          .login_block{
            background: var(--card-background);
          }
        </style>
        <form class="login_block" id="form_login" style="display: none;">
          <p>Вы не авторизованы</p>
          <a class="release-href release-href_hov" onclick="edit_href('/settings')" style="margin: 20px 0 0 0;">Авторизоваться</a>
        </form>
      </div>
    </center>
  </div>
  `;

  var cookie = localStorage.getItem('PHPSESSID');
  if (!cookie || cookie == 'undefined') {
    // document.getElementById('form_logout').setAttribute("style", "display:none;");
    document.getElementById('relise_block').setAttribute("style", "display:none;");
    document.getElementById('form_login').setAttribute("style", "");
    document.getElementById('sorting_block_none').setAttribute("style", "display:none;");
    preloader_none();
  } else {
    // document.getElementById('form_logout').setAttribute("style", "");
    document.getElementById('relise_block').setAttribute("style", "");
    document.getElementById('form_login').setAttribute("style", "display:none;");
    document.getElementById('sorting_block_none').setAttribute("style", "");
    loadFavorites(cookie);
  }
  Scroll_to_top();
}


function load_sortingTitles_Favorites() {
  var my_home_style = localStorage.getItem('my_home_style');
  if (!my_home_style || my_home_style == '1') {
    // Удаляем все тайтлы со страницы
    var container_favorites = document.getElementById("relise_block");
    var elements_favorites = container_favorites.getElementsByClassName("article");
    while (elements_favorites[0]) {
        elements_favorites[0].parentNode.removeChild(elements_favorites[0]);
    }
    var cookie = localStorage.getItem('PHPSESSID');
    loadFavorites(cookie); // Открываем страницу с отсортированным результатом для нужной страницы
  } else if (my_home_style == '2'){
    var container_favorites = document.getElementById("relise_block");
    var elements_favorites = container_favorites.getElementsByClassName("article_design_2");
    while (elements_favorites[0]) {
        elements_favorites[0].parentNode.removeChild(elements_favorites[0]);
    }
    var cookie = localStorage.getItem('PHPSESSID');
    loadFavorites(cookie); // Открываем страницу с отсортированным результатом для нужной страницы
  }
}


function loadFavorites(cookie) {
  document.getElementById('sorting_block_none').setAttribute("style", "");
  document.getElementById('form_login').setAttribute("style", "display:none;");

  var url = "https://api.anilibria.tv/v2/getFavorites?session="+cookie+"?remove=torrents,player.playlist&limit=-1";

  article_favorites(url, 'relise_block');
}
