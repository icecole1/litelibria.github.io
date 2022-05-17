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
  document.getElementById('search_n').setAttribute("style", "transform: translateY(0px);opacity: 1;");
}
$(document).mouseup(function (e) {
  var container = $("#search_n");
  if (container.has(e.target).length === 0){
    document.getElementById('menu_n').setAttribute("style", "transform: translateY(0px);opacity: 1;");
    document.getElementById('search_n').setAttribute("style", "transform: translateY(-40px);opacity: 0;");
  }
});
function b_navigation() {
  document.getElementById('menu_n').setAttribute("style", "transform: translateY(0px);opacity: 1;");
  document.getElementById('search_n').setAttribute("style", "transform: translateY(-40px);opacity: 0;");
}


function start_mess_close() {
  localStorage.setItem('start_mess', '1')
  document.getElementById('start_mess').setAttribute("style", "display:none;");
  document.getElementById('android_app').setAttribute("style", "display:none;");
  document.getElementById('ios_app').setAttribute("style", "display:none;");
}
window.onload = function() {
  if (!window.matchMedia('(display-mode: standalone)').matches) {
    if (localStorage.getItem('start_mess') != '1') {
      if (detectOS() == 'Android') {
        document.getElementById('start_mess').setAttribute("style", "display:block;");
        document.getElementById('android_app').setAttribute("style", "display:block;");
      } else if (detectOS() == 'iOS') {
        document.getElementById('start_mess').setAttribute("style", "display:block;");
        document.getElementById('ios_app').setAttribute("style", "display:block;");
      } else if (detectOS() == 'MacOS') {
        document.getElementById('start_mess').setAttribute("style", "display:block;");
        document.getElementById('ios_app').setAttribute("style", "display:block;");
      }
    }
  }


  if (localStorage.getItem('my_theme') == 'auto') {
    document.getElementById('b_theme1').setAttribute("style", "display:none;");
    document.getElementById('b_theme2').setAttribute("style", "display:none;");
    document.getElementById('b_auto').setAttribute("style", "");
    $('link[href="css/auto.css"]').attr('href', 'css/auto.css');
  } else if (localStorage.getItem('my_theme') == 'theme1') {
    document.getElementById('b_theme2').setAttribute("style", "display:none;");
    document.getElementById('b_theme1').setAttribute("style", "");
    document.getElementById('b_auto').setAttribute("style", "display:none;");
    $('link[href="css/auto.css"]').attr('href', 'css/theme1.css');

  } else if (localStorage.getItem('my_theme') == 'theme2') {
    document.getElementById('b_theme1').setAttribute("style", "display:none;");
    document.getElementById('b_theme2').setAttribute("style", "");
    document.getElementById('b_auto').setAttribute("style", "display:none;");
    $('link[href="css/auto.css"]').attr('href', 'css/theme2.css');

  } else {
    localStorage.setItem('my_theme', 'auto');
    document.getElementById('b_theme1').setAttribute("style", "display:none;");
    document.getElementById('b_theme2').setAttribute("style", "display:none;");
    document.getElementById('b_auto').setAttribute("style", "");
    $('link[href="css/auto.css"]').attr('href', 'css/auto.css');
  }


  // var loader1 = $("#loader1").width();
  // if (loader1 != '130px') {
  //   timer = setInterval(function () {
  //     var loader1 = $("#loader1").width();
  //     if (loader1 != '130') {
  //       document.getElementById('loader1').setAttribute("style", `width: calc(${loader1}px + 1px)`);
  //     }
  //   }, 1000)
  // }



  var width = document.documentElement.clientWidth;
  var tallage = 95;
  var result = width / 100 * tallage; //вычисление процентов
  if (width <= 800) {
    document.getElementById('app').style.width = "100%";
    document.getElementById('app_release').style.width = "100%";
  } else {
    document.getElementById('app').style.width = result+"px";
    document.getElementById('app_release').style.width = result+"px";
  }

  edit_description_href();
};


function edit_description_href() {
  setTimeout(function() {
    if (document.getElementById("release_description_text")) {
      var a = document.getElementById("release_description_text");
      var b = a.getElementsByTagName("a");
      var c = Array.from(b)
      var d = c.map(i => {return i.href})

      for (var i = 0; i < d.length; i++) {
        if (d[i].substring(24, 0) == 'https://www.anilibria.tv'){ // Проверяем ссылку на наличие https://www.anilibria.tv
          var name_href_release = d[i].substr(33);
          var name_release = name_href_release.substring(0, name_href_release.length - 5);
          $('a[href="'+d[i]+'"]').attr('target', '_self');
          $('a[href="'+d[i]+'"]').attr('href', 'release?name_t='+name_release);
        }
      }
    }
  }, 500);
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
	},1000);
};



function theme_auto() {
  localStorage.setItem('my_theme', 'theme1');
  document.getElementById('b_theme1').setAttribute("style", "");
  document.getElementById('b_theme2').setAttribute("style", "display:none;");
  document.getElementById('b_auto').setAttribute("style", "display:none;");
  $('link[href="css/auto.css"]').attr('href', 'css/theme1.css');
};
function theme1() {
  localStorage.setItem('my_theme', 'theme2');
  document.getElementById('b_theme2').setAttribute("style", "");
  document.getElementById('b_theme1').setAttribute("style", "display:none;");
  document.getElementById('b_auto').setAttribute("style", "display:none;");
  $('link[href="css/theme1.css"]').attr('href', 'css/theme2.css');
};
function theme2() {
  localStorage.setItem('my_theme', 'auto');
  document.getElementById('b_auto').setAttribute("style", "");
  document.getElementById('b_theme2').setAttribute("style", "display:none;");
  document.getElementById('b_theme1').setAttribute("style", "display:none;");
  $('link[href="css/theme2.css"]').attr('href', 'css/auto.css');
};



window.addEventListener("resize", function() {
  var width = document.documentElement.clientWidth;
  var tallage = 95;
  var result = width / 100 * tallage; //вычисление процентов
  if (width <= 800) {
    document.getElementById('app').style.width = "100%";
    document.getElementById('app_release').style.width = "100%";
  } else {
    document.getElementById('app').style.width = result+"px";
    document.getElementById('app_release').style.width = result+"px";
  }
}, false);
