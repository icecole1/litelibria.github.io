// Проверка того, что наш браузер поддерживает Service Worker API.
 if ('serviceWorker' in navigator) {
     // Весь код регистрации у нас асинхронный.
     navigator.serviceWorker.register('./sw.js')
       .then(() => navigator.serviceWorker.ready.then((worker) => {
         worker.sync.register('syncdata');
       }))
       .catch((err) => console.log(err));
 }

function load_api_home(n) {
	document.getElementById("load_anim").style.display = "";
  var num = 24;
  var get_page,
      new_page,
      edit,
      after_num;

  if (n == '0') {
    localStorage.setItem('my_page', 0); // Устанавливаем первоначальное количество записей
  }else if (n == '1') {
    get_page = parseInt(localStorage.getItem('my_page')); // Получаем количество записей из кеша
    new_page = get_page + num;
    localStorage.setItem('my_page', new_page); // Устанавливаем новое количество записей
  } else {
    localStorage.setItem('my_page', 0); // Устанавливаем первоначальное количество записей
  }

  edit = parseInt(localStorage.getItem('my_page'));
  after_num = edit;

  // var url = "https://api.anilibria.tv/v2/getUpdates?remove=torrents,player.playlist&limit="+num+"&after="+after_num;
  var url = config["titels_api"]+"getUpdates?remove=torrents,player.playlist&limit="+num+"&after="+after_num;
  fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
		document.getElementById("load_anim").style.display = "none";
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    load_new(n, data);
  })
  .catch(function (error) {
    console.log('error', error)
  })
}

function load_api_catalog(n, url_in) {
	document.getElementById("load_anim").style.display = "";
  var num = 24;
  var get_page,
      new_page,
      edit,
      after_num;

  if (n == '0') {
    localStorage.setItem('my_page', 0); // Устанавливаем первоначальное количество записей
  }else if (n == '1') {
    get_page = parseInt(localStorage.getItem('my_page')); // Получаем количество записей из кеша
    new_page = get_page + num;
    localStorage.setItem('my_page', new_page); // Устанавливаем новое количество записей
  } else {
    localStorage.setItem('my_page', 0); // Устанавливаем первоначальное количество записей
  }

  edit = parseInt(localStorage.getItem('my_page'));
  after_num = edit;
  var url_catalog = url_in + "&limit="+num+"&after="+after_num;

  fetch(url_catalog)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
		document.getElementById("load_anim").style.display = "none";
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    load_new(n, data);
  })
  .catch(function (error) {
    console.log('error', error)
  })
}


// Функция вывода тайтлов на страницу
function load_new(n, data) {
  var series_text,
      series_type,
      genres = '',
      genres_f = '',
      genres_e = '',
      genres_style = '',
      genres_t = '';


  // Получаем из кэша браузера жанры которые нельзя отображать
  var cookie_genres = localStorage.getItem('my_genres');
  if (cookie_genres) {
    genres_f = cookie_genres.split(/\s*,\s*/);
  } else {
    localStorage.setItem('my_genres', '');
    cookie_genres = localStorage.getItem('my_genres');
    genres_f = cookie_genres.split(/\s*,\s*/);
  }


  // Цикл вывода тайтлов на страницу
  for (var i = 0; i < data.length; i++) {

    if (genres_f != '') {
      genres_t = data[i]["genres"];
      genres_e = genres_t.filter(item => genres_f.some(genre => item.includes(genre)));

      if (genres_e != "") {
        genres_style = 'filter: blur(6px);'
      } else {
        genres_style = ''
      }
    }


    var series_t = data[i]["type"]["series"];
    var string_t = data[i]["type"]["code"];
    if (data[i]["player"]["series"]["last"]) {
      if (series_t) {
        series_text = 'Серия '+data[i]["player"]["series"]["last"]+'/'+series_t;
      }else {
        series_text = 'Серия '+data[i]["player"]["series"]["last"];
      }
    } else {
      series_text = 'Серия '+series_t;
    }
    if (series_t == null && string_t != '0' && string_t != '2' && string_t != '3' && string_t != '4') {
      series_type = series_text;
    } else if(series_t == null && string_t == null) {
      series_type = series_text;
    } else if(string_t == '4') {
      series_type = 'Спешл';
    } else if(string_t == '0') {
      series_type = 'Фильм';
    } else if(string_t == '3') {
      series_type = 'ONA';
    } else if(string_t == '2') {
      series_type = 'OVA';
    } else {
      series_type = series_text;
    }
    var div = document.createElement('div');
    document.getElementById('article_block').appendChild(div);

    function detectOS() {
      const platform = navigator.platform.toLowerCase(),
          iosPlatforms = ['iphone', 'ipad', 'ipod', 'ipod touch'];

      if (platform.includes('mac')) return 'MacOS';
      if (iosPlatforms.includes(platform)) return 'iOS';
      if (platform.includes('win')) return 'Windows';
      if (/android/.test(navigator.userAgent.toLowerCase())) return 'Android';
      if (/linux/.test(platform)) return 'Linux';

      return 'unknown';
    }

    if (localStorage.getItem('my_home_style')) {
      var my_home_style = localStorage.getItem('my_home_style');
    } else {
      if (detectOS() == 'Android' || detectOS() == 'iOS') {
        localStorage.setItem('my_home_style', '2');
        var my_home_style = '2';
      } else {
        localStorage.setItem('my_home_style', '1');
        var my_home_style = '1';
      }
    }


    if (!my_home_style || my_home_style == '1') {
      if(data[i]["genres"][2] != undefined) {
        genres = '<p class="article-description" style="margin-bottom: 5px;">'+data[i]["genres"][0]+' | '+data[i]["genres"][1]+' | '+data[i]["genres"][2] + '</p>';
      } else if(data[i]["genres"][1] != undefined) {
        genres = '<p class="article-description" style="margin-bottom: 5px;">'+data[i]["genres"][0]+' | '+data[i]["genres"][1] + '</p>';
      } else if(data[i]["genres"][0] != undefined) {
        genres = '<p class="article-description" style="margin-bottom: 5px;">'+data[i]["genres"][0] + '</p>';
      }
      if (data[i]["description"]) {
        var description = data[i]["description"].replace(/<\/?[^>]+>/g,'');
      } else {
          var description = '';
      }

      div.className = 'article';
      // div.setAttribute("style", "background: center / contain no-repeat url('https://www.anilibria.tv"+data[i]["posters"]["medium"]["url"]+"')");
      div.innerHTML += `
          <div class="article_ser">${series_type}</div>
          <img src="https://www.anilibria.tv${data[i]["posters"]["medium"]["url"]}" style="${genres_style}" alt="">
          <a class="article-text" onclick="edit_href('/release', 'id', ${data[i]["id"]})">
            <p class="article-name"  style="-webkit-line-clamp: 3;line-clamp: 3;">${data[i]["names"]["ru"]}</p>
            ${genres}
            <p class="article-description">${description}</p>
          </a>
          `;
    } else if (my_home_style = '2') {
      if(data[i]["genres"][2] != undefined) {
        genres = '<p class="article_description_design_2" style="margin-bottom: 5px;">'+data[i]["genres"][0]+' | '+data[i]["genres"][1]+' | '+data[i]["genres"][2] + '</p>';
      } else if(data[i]["genres"][1] != undefined) {
        genres = '<p class="article_description_design_2" style="margin-bottom: 5px;">'+data[i]["genres"][0]+' | '+data[i]["genres"][1] + '</p>';
      } else {
        genres = '<p class="article_description_design_2" style="margin-bottom: 5px;">'+data[i]["genres"][0] + '</p>';
      }
      if (data[i]["description"]) {
        var description = data[i]["description"].replace(/<\/?[^>]+>/g,'');
      } else {
          var description = '';
      }
      div.className = 'article_design_2';
      div.innerHTML += `
          <a onclick="edit_href('/release', 'id', ${data[i]["id"]})">
            <img src="https://www.anilibria.tv${data[i]["posters"]["medium"]["url"]}" alt="" style="${genres_style}">
            <div class="text_block_design_2">
              <p class="article_name_design_2"  style="-webkit-line-clamp: 1;line-clamp: 1;">${data[i]["names"]["ru"]}</p>
              ${genres}
              <p class="article_description_design_2" style="-webkit-line-clamp: 5;line-clamp: 5;">${description}</p>
            </div>
          </a>`;
    }

  }


  preloader_none(); // Запускаем функцию закрытия анимации загрузки страницы
}


function load_api_search(index_article, n, s1) {
  var num = 24;
  var get_page,
      new_page,
      edit,
      after_num;

  if (n == '0') {
    localStorage.setItem('my_page', 0); // Устанавливаем первоначальное количество записей
  }else if (n == '1') {
    get_page = parseInt(localStorage.getItem('my_page')); // Получаем количество записей из кеша
    new_page = get_page + num;
    localStorage.setItem('my_page', new_page); // Устанавливаем новое количество записей
  } else {
    localStorage.setItem('my_page', 0); // Устанавливаем первоначальное количество записей
  }

  edit = parseInt(localStorage.getItem('my_page'));
  after_num = edit;

  // var url = "https://api.anilibria.tv/v2/searchTitles?search="+s1+"&remove=torrents,player.playlist&limit="+num+"&after="+after_num;
  var url = config["titels_api"]+"searchTitles?search="+s1+"&remove=torrents,player.playlist&limit="+num+"&after="+after_num;

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
    load_new(n, data);
  })
  .catch(function (error) {
    console.log('error', error)
  })
}












// Функция вывода тайтлов в блок Тип 2
function article_favorites(url_pop, block_id) {
	document.getElementById("load_anim").style.display = "";
  var block_id

  fetch(url_pop)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
		document.getElementById("load_anim").style.display = "none";
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (data_in) {

    var data = data_in.reverse();

    // Получаем значения посе фильтров и поисков
    var sorting = document.getElementById("Sorting_block").value;

    // Получаем значения из блока сортировки
    var checkbox_sorting = '1';
    if (document.querySelector('#checkbox_sorting:checked')) {
       checkbox_sorting = '0';
    }
    if (sorting == '0') {
      if (checkbox_sorting == '1'){data;}else{data;}
    } else if(sorting == 'year'){
      if (checkbox_sorting == '1'){data.sort((a, b) => (a.season['year'] > b.season['year']) ? 1 : -1);}else {data.sort((a, b) => (a.season['year'] < b.season['year']) ? 1 : -1);}
    } else if(sorting == 'codes'){
      if (checkbox_sorting == '1'){data.sort((a, b) => (a.code > b.code) ? 1 : -1);}else{data.sort((a, b) => (a.code < b.code) ? 1 : -1);}
    } else if(sorting == 'in_favorites'){
      if (checkbox_sorting == '1'){data.sort((a, b) => (a.in_favorites > b.in_favorites) ? 1 : -1);}else{data.sort((a, b) => (a.in_favorites < b.in_favorites) ? 1 : -1);}
    } else if(sorting == 'series'){
      if (checkbox_sorting == '1'){data.sort((a, b) => (a.type['series'] > b.type['series']) ? 1 : -1);}else{data.sort((a, b) => (a.type['series'] < b.type['series']) ? 1 : -1);}
    } else if(sorting == 'code'){
      if (checkbox_sorting == '1'){data.sort((a, b) => (a.type['code'] > b.type['code']) ? 1 : -1);}else{data.sort((a, b) => (a.type['code'] < b.type['code']) ? 1 : -1);}
    } else{
      if (checkbox_sorting == '1'){data;}else{data;}
    }

    for (let i = 0; data[i]; i++) {
      var series_t = data[i]["type"]["series"];
      var string_t = data[i]["type"]["code"];
      var series_text;
      if (data[i]["player"]["series"]["last"]) {
        if (series_t) {
          series_text = 'Серия '+data[i]["player"]["series"]["last"]+'/'+series_t;
        }else {
          series_text = 'Серия '+data[i]["player"]["series"]["last"];
        }
      } else {
        series_text = 'Серия '+series_t;
      }
      var series_type;
      if (series_t == null && string_t != '0' && string_t != '2' && string_t != '3' && string_t != '4') {
        series_type = series_text;
      } else if(series_t == null && string_t == null) {
        series_type = series_text;
      } else if(string_t == '4') {
        series_type = 'Спешл';
      } else if(string_t == '0') {
        series_type = 'Фильм';
      } else if(string_t == '3') {
        series_type = 'ONA';
      } else if(string_t == '2') {
        series_type = 'OVA';
      } else {
        series_type = series_text;
      }

      var div = document.createElement('div');
      document.getElementById(block_id).appendChild(div);
      var genres = '';

      function detectOS() {
        const platform = navigator.platform.toLowerCase(),
            iosPlatforms = ['iphone', 'ipad', 'ipod', 'ipod touch'];

        if (platform.includes('mac')) return 'MacOS';
        if (iosPlatforms.includes(platform)) return 'iOS';
        if (platform.includes('win')) return 'Windows';
        if (/android/.test(navigator.userAgent.toLowerCase())) return 'Android';
        if (/linux/.test(platform)) return 'Linux';

        return 'unknown';
      }

      if (localStorage.getItem('my_home_style')) {
        var my_home_style = localStorage.getItem('my_home_style');
      } else {
        if (detectOS() == 'Android' || detectOS() == 'iOS') {
          localStorage.setItem('my_home_style', '2');
          var my_home_style = '2';
        } else {
          localStorage.setItem('my_home_style', '1');
          var my_home_style = '1';
        }
      }

      if (!my_home_style || my_home_style == '1') {
        if(data[i]["genres"][2] != undefined) {
          genres = '<p class="article-description" style="margin-bottom: 5px;">'+data[i]["genres"][0]+' | '+data[i]["genres"][1]+' | '+data[i]["genres"][2] + '</p>';
        } else if(data[i]["genres"][1] != undefined) {
          genres = '<p class="article-description" style="margin-bottom: 5px;">'+data[i]["genres"][0]+' | '+data[i]["genres"][1] + '</p>';
        } else if(data[i]["genres"][0] != undefined) {
          genres = '<p class="article-description" style="margin-bottom: 5px;">'+data[i]["genres"][0] + '</p>';
        }
        if (data[i]["description"]) {
          var description = data[i]["description"].replace(/<\/?[^>]+>/g,'');
        } else {
            var description = '';
        }
        div.className = 'article';
        // div.setAttribute("style", "background: center / contain no-repeat url('https://www.anilibria.tv"+data[i]["posters"]["medium"]["url"]+"')");
        div.innerHTML += `
            <div class="article_ser">${series_type}</div>
            <img src="https://www.anilibria.tv${data[i]["posters"]["medium"]["url"]}" alt="">
            <a class="article-text" onclick="edit_href('/release', 'id', ${data[i]["id"]})">
              <p class="article-name"  style="-webkit-line-clamp: 3;line-clamp: 3;">${data[i]["names"]["ru"]}</p>
              ${genres}
              <p class="article-description">${description}</p>
            </a>
            `;
      } else if (my_home_style = '2') {
        if(data[i]["genres"][2] != undefined) {
          genres = '<p class="article_description_design_2" style="margin-bottom: 5px;">'+data[i]["genres"][0]+' | '+data[i]["genres"][1]+' | '+data[i]["genres"][2] + '</p>';
        } else if(data[i]["genres"][1] != undefined) {
          genres = '<p class="article_description_design_2" style="margin-bottom: 5px;">'+data[i]["genres"][0]+' | '+data[i]["genres"][1] + '</p>';
        } else {
          genres = '<p class="article_description_design_2" style="margin-bottom: 5px;">'+data[i]["genres"][0] + '</p>';
        }
        if (data[i]["description"]) {
          var description = data[i]["description"].replace(/<\/?[^>]+>/g,'');
        } else {
            var description = '';
        }
        div.className = 'article_design_2';
        div.innerHTML += `
            <a onclick="edit_href('/release', 'id', ${data[i]["id"]})">
              <img src="https://www.anilibria.tv${data[i]["posters"]["medium"]["url"]}" alt="">
              <div class="text_block_design_2">
                <p class="article_name_design_2"  style="-webkit-line-clamp: 1;line-clamp: 1;">${data[i]["names"]["ru"]}</p>
                ${genres}
                <p class="article_description_design_2" style="-webkit-line-clamp: 5;line-clamp: 5;">${description}</p>
              </div>
            </a>`;
      }
    }


    preloader_none();
  })

  .catch(function (error) {
    console.log('error', error)
  })
}



// Функция вывода тайтлов в блок слайдера отсортированных по популярности
function article_small_INfavorites(block_id) {
	document.getElementById("load_anim_block_small").style.display = "";
  var block_id
  // var url_pop = 'https://api.anilibria.tv/v2/advancedSearch?query=1&order_by=in_favorites&sort_direction=1&remove=torrents,player.playlist&description_type=html&limit=20';
  var url_pop = config["titels_api"]+'advancedSearch?query=1&order_by=in_favorites&sort_direction=1&remove=torrents,player.playlist&description_type=html&limit=20';

  fetch(url_pop)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
		document.getElementById("load_anim_block_small").style.display = "none";
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    load_small(data, block_id);
  })
  .catch(function (error) {
    console.log('error', error)
  })
}

// Функция вывода тайтлов в блок слайдера ожидаемых сегодня
function article_small_dey(url_pop, block_id) {
	document.getElementById("load_anim_block_small").style.display = "";
  var block_id
  fetch(url_pop)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
		document.getElementById("load_anim_block_small").style.display = "none";
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    var data_day = data[0]["list"]
    load_small(data_day, block_id);
  })
  .catch(function (error) {
    console.log('error', error)
  })
}

// Функция вывода тайтлов в блок слайдера
function load_small(arr_small, block_id) {
  var genres_f = '',
      genres_e = '',
      genres_style = '',
      genres_t = '';

  // Получаем из кэша браузера жанры которые нельзя отображать
  var cookie_genres = localStorage.getItem('my_genres');
  if (cookie_genres) {
    genres_f = cookie_genres.split(/\s*,\s*/);
  } else {
    localStorage.setItem('my_genres', '');
    cookie_genres = localStorage.getItem('my_genres');
    genres_f = cookie_genres.split(/\s*,\s*/);
  }


  var data = arr_small;
  for (let i = 0; data[i]; i++) {
    if (genres_f != '') {
      genres_t = data[i]["genres"];
      genres_e = genres_t.filter(item => genres_f.some(genre => item.includes(genre)));

      if (genres_e != "") {
        genres_style = 'filter: blur(6px);'
      } else {
        genres_style = ''
      }
    }


    var series_t = data[i]["type"]["series"];
    var string_t = data[i]["type"]["code"];
    var series_text;
    if (data[i]["player"]["series"]) {
      if (data[i]["player"]["series"]["last"]) {
        if (series_t) {
          series_text = 'Серия '+data[i]["player"]["series"]["last"]+'/'+series_t;
        }else {
          series_text = 'Серия '+data[i]["player"]["series"]["last"];
        }
      } else {
        series_text = 'Серия '+series_t;
      }
    } else {
      series_text = 'Серия '+series_t;
    }
    var series_type;
    if (series_t == null && string_t != '0' && string_t != '2' && string_t != '3' && string_t != '4') {
      series_type = series_text;
    } else if(series_t == null && string_t == null) {
      series_type = series_text;
    } else if(string_t == '4') {
      series_type = 'Спешл';
    } else if(string_t == '0') {
      series_type = 'Фильм';
    } else if(string_t == '3') {
      series_type = 'ONA';
    } else if(string_t == '2') {
      series_type = 'OVA';
    } else {
      series_type = series_text;
    }

    var div = document.createElement('div');
    document.getElementById(block_id).appendChild(div);
    var genres = '';
    if(data[i]["genres"][2] != undefined) {
      genres = '<p class="article-description" style="margin-bottom: 5px;">'+data[i]["genres"][0]+' | '+data[i]["genres"][1]+' | '+data[i]["genres"][2] + '</p>';
    } else if(data[i]["genres"][1] != undefined) {
      genres = '<p class="article-description" style="margin-bottom: 5px;">'+data[i]["genres"][0]+' | '+data[i]["genres"][1] + '</p>';
    } else if(data[i]["genres"][0] != undefined) {
      genres = '<p class="article-description" style="margin-bottom: 5px;">'+data[i]["genres"][0] + '</p>';
    }
    if (data[i]["description"]) {
      var description = data[i]["description"].replace(/<\/?[^>]+>/g,'');
    } else {
        var description = '';
    }

    var my_home_announce = localStorage.getItem('my_home_announce');
    var announce_none = '';
    var announce = '';
    if (data[i]["announce"] && data[i]["status"]["code"] != '2' && data[i]["status"]["code"] != '3') {
      if (my_home_announce == '1') {
        announce = data[i]["announce"].replace(/<\/?[^>]+>/g,'');
        announce_none = '';
      } else {
        announce_none = 'display:none;';
      }
    } else {
      announce_none = 'display:none;';
    }

    div.className = 'article';
    div.setAttribute("style", "width: 203px;height: 290px;");
    div.innerHTML += `
        <div class="article_ser" style="margin-top: 200px;">${series_type}</div>
        <button class="button_announce" id="announce_button_${data[i]["id"]}" style="${announce_none}" onclick="announce_view(${data[i]["id"]})">i</button>
        <div class="article_announce" id="announce_text_${data[i]["id"]}" style="display:none;">${announce}</div>
        <img src="https://www.anilibria.tv${data[i]["posters"]["medium"]["url"]}" style="width: 203px;height: 290px;${genres_style}" alt="">
        <a class="article-text" onclick="edit_href('/release', 'id', ${data[i]["id"]})" style="width: 190px;height: 275px;">
          <p class="article-name"  style="-webkit-line-clamp: 3;line-clamp: 3;">${data[i]["names"]["ru"]}</p>
          ${genres}
          <p class="article-description" style="-webkit-line-clamp: 8;line-clamp: 8;">${description}</p>
        </a>
        `;
  }
}
function announce_view(id) {
  var elem_text = "announce_text_"+id;
  var elem_button = "announce_button_"+id;
  document.getElementById(elem_text).setAttribute("style", "display: block;");
  document.getElementById(elem_button).setAttribute("style", "display: none;");
  setTimeout(function(){
    document.getElementById(elem_text).setAttribute("style", "display: none;");
    document.getElementById(elem_button).setAttribute("style", "display: block;");
  },3000)
}









































function message_body(text, display) {
  var div = document.createElement('div');
  document.getElementById('block_notif').appendChild(div);
  div.className = 'notif';
  div.setAttribute("style", 'transition: .3s ease;color: var(--card-text-color-2);padding: 10px 10px;width: 100%;background: var(--card-background-3);margin-bottom: 10px;opacity: 0.9;');
  div.innerHTML = `<p style="width: 100%;word-wrap: break-word;" onclick="notif_none()">${text}</p>`;
  if (display != 1) {
    setTimeout(function(){
      var block_header = document.getElementsByClassName('notif');
      for (var i = 0; i < block_header.length; i++) {
        notif_none();
      }
    },5000);
  }
}
function notif_none() {
  setTimeout(function(){
    var block_header = document.getElementsByClassName('notif');
    for (var i = 0; i < block_header.length; i++) {
      block_header[i].setAttribute("style" , "margin-top: -70px; transition: .3s ease;");
      setTimeout(function(){
        var container_favorites = document.getElementById("block_notif");
        var elements_favorites = container_favorites.getElementsByClassName("notif");
        while (elements_favorites[0]) {
            elements_favorites[0].parentNode.removeChild(elements_favorites[0]);
        }
      },300);
    }
  },300);
}

// Функция прокрутки вверх
function Scroll_to_top() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
};
