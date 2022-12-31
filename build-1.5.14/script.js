function editDomainHistory(){
	let keys2 = Object.keys(localStorage);
  for(let key2 of keys2) {
    var pljsplayfrom = key2.substring(0, 12);
    if (pljsplayfrom == "pljsplayfrom") {
			var oldDomains = key2.substring(0, 33);
			if(oldDomains == "pljsplayfrom_litelibria.github.io"){
				var text_ed1 = key2.replace(/pljsplayfrom_litelibria.github.io/gi, '');
				localStorage.setItem(`pljsplayfrom_${config['domains']}${text_ed1}`, localStorage.getItem(key2));
				localStorage.removeItem(key2);
			}
    }
  }
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

window.onload = function() {
  // if (!window.matchMedia('(display-mode: standalone)').matches) {
  //   if (localStorage.getItem('start_mess') != '1') {
  //     if (detectOS() == 'Android') {
  //       document.getElementById('start_mess').setAttribute("style", "display:block;");
  //       document.getElementById('android_app').setAttribute("style", "display:block;");
  //     } else if (detectOS() == 'iOS') {
  //       document.getElementById('start_mess').setAttribute("style", "display:block;");
  //       document.getElementById('ios_app').setAttribute("style", "display:block;");
  //     } else if (detectOS() == 'MacOS') {
  //       document.getElementById('start_mess').setAttribute("style", "display:block;");
  //       document.getElementById('ios_app').setAttribute("style", "display:block;");
  //     }
  //   }
  // }
};

function appWidth() {
	var width = document.documentElement.clientWidth;
  var tallage = 95;
  var result = width / 100 * tallage; //вычисление процентов
  if (width <= 800) {
    document.getElementById('app').style.width = "100%";
  } else {
    document.getElementById('app').style.width = result+"px";
  }
}

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

function b_search() {
  document.getElementById('menu_n').setAttribute("style", "transform: translateY(-80px);opacity: 0;");
	document.getElementById('search_n').dataset.state = 'reflect';
	SearchEvent();


	var searchParams = parseLocationURL();
	if(searchParams.get("q") == null && document.querySelector("#search_q").value.length > 0){
		document.getElementById('search_list').dataset.state = 'reflect';
	}
}
document.addEventListener('click', function(e) {
  var container = document.getElementById('search_n');
	if (window.getComputedStyle(container).opacity == '1' && container.contains(e.target) === false){
		b_navigation();
	}
});

function b_navigation() {
  document.getElementById('menu_n').setAttribute("style", "transform: translateY(0px);opacity: 1;");
	document.getElementById('search_n').dataset.state = '';
	document.getElementById('search_list').dataset.state = '';
}

// Функция запуска поиска
function SearchEvent(){
	document.querySelector("#search_q").addEventListener('input', function (e) {
		var searchParams = parseLocationURL();
		if(searchParams.get("q") == null && document.querySelector("#search_q").value.length > 0){
			document.getElementById('search_list').dataset.state = 'reflect';
			SearchEventFetch(document.querySelector("#search_q").value)
		}
		if(document.querySelector("#search_q").value.length == 0){
			document.getElementById('search_list').dataset.state = '';
		}
	})
}

function SearchEventFetch(q){
	// Запрос к Api 
	var url = config["titels_api"]+"searchTitles?search="+q+"&filter=id,names.ru,season,type,posters.medium&limit=3";
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
		document.getElementById('search_list').innerHTML = "";

		if(data.length == 0){
			var div = document.createElement('div');
			document.getElementById('search_list').appendChild(div);
			div.innerHTML += `<div id="LoadAnimRecomendSearchList"><svg style="padding: 50px;width: 45px;" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#d53c3c"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1400ms" repeatCount="indefinite"></animateTransform></g></svg></div>`
		} else {
			for (let i = 0; data.length > i; i++) {
				var div = document.createElement('div');
				document.getElementById('search_list').appendChild(div);
				if (localStorage.getItem('postersMode') == 'webp') {
					var stylePoster = `<img src="${config["webpPosters"]}${data[i].id}.webp" alt="">`
				} else {
					var stylePoster = `<img src="${config["posters"]}${data[i].posters.medium.url}" alt="">`
				}

				div.innerHTML += `<div class="Search-List-Card" onclick='goRoute("/release", {id:${data[i].id}});b_navigation()'>
													${stylePoster}
													<div class="Search-List-Card-BlockText">
														<p class="Search-List-Card-Title">${data[i]["names"]["ru"]}</p>
														<p class="Search-List-Card-Text">${data[i]["type"]["full_string"]}</p>
														<p class="Search-List-Card-Text">${data[i]["season"]["year"]} ${data[i]["season"]["string"] != null ? data[i]["season"]["string"] : ""}</p>
													</div>
												</div>`;
			}
			var div = document.createElement('div');
			document.getElementById('search_list').appendChild(div);
			div.innerHTML += `<button id="but_search_list" class="search_list_button" onclick="search_b()">Еще...</button>`
		}
  })
  .catch(function (error) {
    console.log('error', error)
  })
}


function start_mess_close() {
  localStorage.setItem('start_mess', '1')
  document.getElementById('start_mess').setAttribute("style", "display:none;");
  document.getElementById('android_app').setAttribute("style", "display:none;");
  document.getElementById('ios_app').setAttribute("style", "display:none;");
}

function preloader_none() {
  var preloader = document.getElementById("preloader");
  var preloader_preload = document.getElementById("preloader_preload");
  function fadeOutnojquery(el){
    el.style.opacity = 1;
    var interpreloader = setInterval(
      function(){
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <=0.05){
          clearInterval(interpreloader);
          preloader_preload.style.display = "none";
          preloader.style.display = "none";
        }
      },16
    );
  }
  setTimeout(function(){
    fadeOutnojquery(preloader_preload);
    fadeOutnojquery(preloader);
		clearInterval(intervalTimer);
		intervalTimer = 0;
		mess_update();
	},200);
};



window.addEventListener("resize", function() {
  var width = document.documentElement.clientWidth;
  var tallage = 95;
  var result = width / 100 * tallage; //вычисление процентов
  if (width <= 800) {
    document.getElementById('app').style.width = "100%";
  } else {
    document.getElementById('app').style.width = result+"px";
  }
}, false);





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

// Сообщение об обновлении версии приложения
function mess_update(){
	if(localStorage.getItem('mess_update_SW') != null && localStorage.getItem('mess_update') != localStorage.getItem('mess_update_SW')){
		localStorage.setItem('mess_update', localStorage.getItem('mess_update_SW'));
		message_body(`Приложение обновленно до версии ${localStorage.getItem('mess_update')}`);
	}
}

// Функция прокрутки вверх
function Scroll_to_top() {
  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

		if (scrolled > coords && localStorage.getItem('backToTop') != 'false') {
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