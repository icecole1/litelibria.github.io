function page_catalog() {
  document.getElementById('app').innerHTML = `
  <div class="article-block" id="sorting_block_none">
    <div class="article-list block_chosen">
        <!-- <a class="pages_catalog" href="" style="cursor:pointer;">⇅</a> -->
        <div class="select_form">
          <select class="chosen_box" id="Genres_block">
            <option value="0">Выбрать жанры</option>
          </select>
          <select class="chosen_box" id="Years_block">
            <option value="0">Выбрать год</option>
          </select>
          <select class="chosen_box" id="Season_block">
            <option value="0">Выбрать сезон</option>
            <option value="1">Зима</option>
            <option value="2">Весна</option>
            <option value="3">Лето</option>
            <option value="4">Осень</option>
          </select>
          <select class="chosen_box" id="Sorting_block">
            <option value="">Сортировать по ...</option>
            <option value="&order_by=season.year">Году</option>
            <option value="&order_by=code">Названию</option>
            <option value="&order_by=in_favorites">Популярности</option>
            <option value="&order_by=type.series">Количеству серий</option>
            <option value="&order_by=season.code">Типу</option>
          </select>
          <label class="container">
            <input type="checkbox" checked="checked" id="checkbox_sorting">
            <span class="checkmark"></span>
          </label>
          <button class="chosen_button" onclick="load_sortingTitles()">Показать</button>
        </div>
    </div>
  </div>

  <div class="article-block">
    <center>
      <div class="article-list">
        <h1>Все тайтлы</h1>
        <div id="error" style="display:none;">
          <h1 style="color: var(--card-text-color);">Ничего не найдено!</h1>
          <br>
          <img src="img/libriatyan/1.png" style="max-width: 90%;">
        </div>
        <div id="article_block"></div>
        <br /><br />
        <span id="load_new_article"></span>
        <!-- <input type="button" class="pstrnav pages_catalog" onclick="load_new('1')" value="Загрузить ещё" style="font-size: 16px;"> -->
      </div>

    </center>
  </div>
  `;

  my_years_fun();
  my_genres_fun();

  load_sortingCatalog('0');

  setTimeout(function(){
    function onEntry(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
          load_sortingCatalog('1');
        }
      });
    }
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('#load_new_article');
    for (let elm of elements) {
      observer.observe(elm);
    }
  },300)



  Scroll_to_top();
}

function load_sortingTitles() {
  var my_home_style = localStorage.getItem('my_home_style');
  if (!my_home_style || my_home_style == '1') {
    // Удаляем все тайтлы со страницы
    var container_favorites = document.getElementById("article_block");
    var elements_favorites = container_favorites.getElementsByClassName("article");
    while (elements_favorites[0]) {
        elements_favorites[0].parentNode.removeChild(elements_favorites[0]);
    }
  } else if (my_home_style == '2'){
    var container_favorites = document.getElementById("article_block");
    var elements_favorites = container_favorites.getElementsByClassName("article_design_2");
    while (elements_favorites[0]) {
        elements_favorites[0].parentNode.removeChild(elements_favorites[0]);
    }
  }
  load_sortingCatalog('0');
}

function load_sortingCatalog(n) {
  var genres_sort = document.getElementById("Genres_block").value;
  var years_sort = document.getElementById("Years_block").value;
  var season_sort = document.getElementById("Season_block").value;
  var sorting = document.getElementById("Sorting_block").value;
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
  if (genres_sort == 0 && years_sort == 0 && season_sort == 0 && sorting != '') {
    query_1 = '1'
  }

  var checkbox_sorting = '1';
  if (document.querySelector('#checkbox_sorting:checked')) {
     checkbox_sorting = '0';
  }
  if (genres_sort == 0 && years_sort == 0 && season_sort == 0 && sorting == '') {
    var url = "https://api.anilibria.tv/v2/getUpdates?remove=torrents,player.playlist";
  } else {
    var url = 'https://api.anilibria.tv/v2/advancedSearch?query='+ query_1 + genres + and_1 + years + and_2 + season + sorting +'&sort_direction='+checkbox_sorting+'&remove=torrents,player.playlist';
  }
  load_api_catalog(n, url);
}







function my_genres_fun() {
  url = "https://api.anilibria.tv/v2/getGenres"
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
  .then(function (data_Genres) {
    for (let i = 0; data_Genres[i]; i++) {
      var cookie_genres = localStorage.getItem('my_genres');
      if (!cookie_genres) {localStorage.setItem('my_genres', '');}
      var List_cookie_genres = cookie_genres.split(/\s*,\s*/);
      if (!List_cookie_genres.includes(data_Genres[i])) {
        var div_Genres = document.createElement('option');
        document.getElementById('Genres_block').appendChild(div_Genres);
        div_Genres.value = data_Genres[i];
        div_Genres.innerHTML = data_Genres[i];
      }
    }
  })

  .catch(function (error) {
    console.log('error', error)
  })
}
function my_years_fun() {
  url = "https://api.anilibria.tv/v2/getYears"

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
  .then(function (data_Years) {
    for (let i = 0; data_Years[i]; i++) {
      var div_Years = document.createElement('option');
      document.getElementById('Years_block').appendChild(div_Years);
      div_Years.value = data_Years[i];
      div_Years.innerHTML = data_Years[i];
    }
  })

  .catch(function (error) {
    console.log('error', error)
  })
}
