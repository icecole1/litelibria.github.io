function page_myHistory() {
  document.getElementById('app').innerHTML = `
	<div class="LineBlock">

		<!-- Блок Сортировки	 -->
		<div class="SortingBlock">
				<div class="SortingBlockForm">
					<button onclick='logIn();' id="logInG" class="SortingButton" style="background: var(--ColorThemes1);color: var(--ColorThemes3);">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" style="fill: var(--ColorThemes3);"><path d="M61.47656,26.875l-1.51172,2.51953l-43,69.875l-1.67969,2.6875l1.51172,2.85547l21.5,37.625l1.51172,2.6875h92.38281l1.51172,-2.6875l21.5,-37.625l1.51172,-2.85547l-1.67969,-2.6875l-43,-69.875l-1.51172,-2.51953zM74.07422,37.625h30.40234l36.44922,59.125h-30.40234zM64.5,42.49609l15.95703,26.03516l-37.28906,60.63672l-15.45312,-27.04297zM86.83984,78.77734l11.08594,17.97266h-22.17187zM69.20313,107.5h72.05859l-15.45312,26.875h-73.23437z"></path></svg>
						<span style="color: var(--ColorThemes3);">Войти в Google</span>
					</button>
					<button onclick='logOut(); logOut_n()' id="logOutG" class="SortingButton" style="display:none;">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172"><path d="M61.47656,26.875l-1.51172,2.51953l-43,69.875l-1.67969,2.6875l1.51172,2.85547l21.5,37.625l1.51172,2.6875h92.38281l1.51172,-2.6875l21.5,-37.625l1.51172,-2.85547l-1.67969,-2.6875l-43,-69.875l-1.51172,-2.51953zM74.07422,37.625h30.40234l36.44922,59.125h-30.40234zM64.5,42.49609l15.95703,26.03516l-37.28906,60.63672l-15.45312,-27.04297zM86.83984,78.77734l11.08594,17.97266h-22.17187zM69.20313,107.5h72.05859l-15.45312,26.875h-73.23437z"></path></svg>
						<span>Выйти из Google</span>
					</button>

					<button onclick='download_his("ani_his.rozenrod", dynamic_text_his())' class="SortingButton">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 226 226"><path d="M113,47.08333c-29.56833,0 -53.90115,22.83542 -56.29769,51.79167h-2.55648c-22.06796,0 -40.02083,17.95287 -40.02083,40.02083c0,22.06796 17.95287,40.02083 40.02083,40.02083h24.17619c-1.92571,-2.74496 -2.98869,-5.99371 -2.98869,-9.41667c0,-1.62908 0.31126,-3.19225 0.76326,-4.70833h-21.95076c-14.28037,0 -25.89583,-11.61546 -25.89583,-25.89583c0,-14.28037 11.61546,-25.89583 25.89583,-25.89583h9.41667c3.90321,0 7.0625,-3.15929 7.0625,-7.0625v-2.35417c0,-23.36275 19.01225,-42.375 42.375,-42.375c23.36275,0 42.375,19.01225 42.375,42.375v2.35417c0,3.90321 3.15929,7.0625 7.0625,7.0625h9.41667c14.28037,0 25.89583,11.61546 25.89583,25.89583c0,14.28038 -11.61546,25.89583 -25.89583,25.89583h-21.95076c0.452,1.51608 0.76326,3.07925 0.76326,4.70833c0,3.42296 -1.06298,6.67171 -2.98869,9.41667h24.17619c22.06796,0 40.02083,-17.95288 40.02083,-40.02083c0,-22.06796 -17.95288,-40.02083 -40.02083,-40.02083h-2.55648c-2.39654,-28.95625 -26.72935,-51.79167 -56.29769,-51.79167zM112.88965,112.89885c-3.8969,0.06088 -7.00805,3.26668 -6.95215,7.16365v53.57568l-9.13159,-9.13159c-1.77141,-1.84494 -4.40181,-2.58811 -6.87676,-1.94289c-2.47495,0.64522 -4.40774,2.578 -5.05295,5.05295c-0.64522,2.47495 0.09795,5.10535 1.94289,6.87676l20.58057,20.58057c1.34165,1.74941 3.42321,2.77202 5.62785,2.7648c2.20463,-0.00722 4.27945,-1.04343 5.60962,-2.80159l20.54378,-20.54378c1.84494,-1.77141 2.58811,-4.40181 1.94289,-6.87676c-0.64522,-2.47495 -2.578,-4.40774 -5.05295,-5.05295c-2.47495,-0.64522 -5.10535,0.09795 -6.87676,1.94289l-9.13159,9.13159v-53.57568c0.0274,-1.90979 -0.71982,-3.74926 -2.07124,-5.09896c-1.35143,-1.3497 -3.19186,-2.09455 -5.10161,-2.0647z"></path></svg>
						<span>Скачать историю</span>
					</button>

					<label for="file-upload" class="SortingBlockFile">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 226 226"><path d="M113,47.08333c-29.56833,0 -53.90115,22.83542 -56.29769,51.79167h-2.55648c-22.06796,0 -40.02083,17.95287 -40.02083,40.02083c0,22.06796 17.95287,40.02083 40.02083,40.02083h42.375v-14.125h-42.375c-14.28037,0 -25.89583,-11.61546 -25.89583,-25.89583c0,-14.28037 11.61546,-25.89583 25.89583,-25.89583h9.41667c3.90321,0 7.0625,-3.15929 7.0625,-7.0625v-2.35417c0,-23.36275 19.01225,-42.375 42.375,-42.375c23.36275,0 42.375,19.01225 42.375,42.375v2.35417c0,3.90321 3.15929,7.0625 7.0625,7.0625h9.41667c14.28037,0 25.89583,11.61546 25.89583,25.89583c0,14.28038 -11.61546,25.89583 -25.89583,25.89583h-42.375v14.125h42.375c22.06796,0 40.02083,-17.95288 40.02083,-40.02083c0,-22.06796 -17.95288,-40.02083 -40.02083,-40.02083h-2.55648c-2.39654,-28.95625 -26.72935,-51.79167 -56.29769,-51.79167zM112.88965,112.89885c-2.17756,0.03577 -4.21686,1.07408 -5.52677,2.81396l-20.54378,20.54378c-1.84494,1.77141 -2.58811,4.40181 -1.94289,6.87676c0.64522,2.47495 2.578,4.40774 5.05295,5.05295c2.47495,0.64522 5.10535,-0.09795 6.87676,-1.94289l9.13159,-9.13159v53.57568c-0.03602,2.54699 1.30215,4.91607 3.5021,6.20008c2.19995,1.28401 4.92084,1.28401 7.1208,0c2.19995,-1.28401 3.53812,-3.65309 3.5021,-6.20008v-53.57568l9.13159,9.13159c1.77141,1.84494 4.40181,2.58811 6.87676,1.94289c2.47495,-0.64522 4.40774,-2.578 5.05295,-5.05295c0.64522,-2.47495 -0.09795,-5.10535 -1.94289,-6.87676l-20.58057,-20.58057c-1.35666,-1.77748 -3.47485,-2.80758 -5.7107,-2.77718z"></path></svg>
						<span>Загрузить историю</span>
					</label>
					<input id="file-upload" type="file" onchange="update_his(this)" accept=".rozenrod"/>

				</div>
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


					<div id="HistorysNone">
						<br /><br />
						<img src="img/libriatyan/4.webp" style="max-width: 145px;">
						<br /><br />
						<p style="color: var(--ColorThemes3);">Пока пусто...</p>
					</div>	

				</div>
				<!-- Анимация загрузки -->
				<div id="LoadAnimHistorys">
					<svg style="padding: 50px;width: 45px;" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#d53c3c"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1400ms" repeatCount="indefinite"></animateTransform></g></svg>
				</div>	
			</div>
		</div>

  </div>
	`;

	setTimeout(function(){
    load_his();
  },1000)

  preloader_none();
  Scroll_to_top();

  setTimeout(function(){
    if (!isLoggedIn()) {
      logOut_n()
    } else {
      logIn_n()
    }
  },500)
}

function logIn_n() {
  document.getElementById('logInG').setAttribute("style", "display:none;");
  document.getElementById('logOutG').setAttribute("style", "");
}
function logOut_n() {
  document.getElementById('logInG').setAttribute("style", "color: var(--ColorThemes3);background: var(--ColorThemes2);");
  document.getElementById('logOutG').setAttribute("style", "display:none;");
}

function update_his(input) {
  let file = input.files[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function() {
    var readJson = reader.result;
    sync_his(JSON.parse(readJson));
    saveConfig(dynamic_text_his())
    load_his();
  };
  reader.onerror = function() {
    console.log(reader.error);
  };
 }

 function sync_his(arr){
   var str_playlist = arr['data'];
   for(var i = 0; i < str_playlist.length; i++) {
     var key_name = 'pljsplayfrom_'+config['domains']+str_playlist[i]["key"];
     localStorage.setItem(key_name, str_playlist[i]["Item"]);
   }


 }

function dynamic_text_his() {
  let keys2 = Object.keys(localStorage);
  var json = '';
  for(let key2 of keys2) {
    var pljsplayfrom = key2.substring(0, 12);
    if (pljsplayfrom == "pljsplayfrom") {

      var text_ed1 = key2.replace(/pljsplayfrom_/gi, '');
      var id_payer_release = text_ed1.replace(config['domains'], '');

      json += '{"key":"'+id_payer_release+'", "Item":"'+localStorage.getItem(key2)+'"}, '+'\r\n';
    }
  }
  var json_edit = json.slice(0, -4);

  var json_data = '{"time":"'+Math.round(Date.now() / 1000)+'", "data":['+json_edit+']}'

  return json_data;
}

function download_his(name, contents, mime_type) {
    mime_type = mime_type || "text/plain";

    var blob = new Blob([contents], {type: mime_type});

    var dlink = document.createElement('a');
    const data_file = Math.round(Date.now() / 1000);
    dlink.download = data_file+'_'+name;
    dlink.href = window.URL.createObjectURL(blob);
    dlink.onclick = function(e) {
        // revokeObjectURL needs a delay to work properly
        var that = this;
        setTimeout(function() {
            window.URL.revokeObjectURL(that.href);
        }, 1500);
    };

    dlink.click();
    dlink.remove();
}

function del_his_but(key, id) {
  localStorage.removeItem(key);
  document.getElementById('article_history'+id).setAttribute("style", "display:none;");
  saveConfig(dynamic_text_his())
}

function del_his() {
  let keys_d = Object.keys(localStorage);
  var star_conf = JSON.parse(localStorage.getItem('config'))
  var star_conf2 = star_conf["data"]
  let conf_key = '';
  for (var i = 0; i < star_conf2.length; i++) {
    conf_key += `"${'pljsplayfrom_'+config['domains']+star_conf2[i]["key"]}", `;
  }
  var conf_edit = `[${conf_key.slice(0, -2)}]`;
  var conf_edit2 = JSON.parse(conf_edit);
  var keys_d2 = keys_d.filter(item => !conf_edit2.some(name => item.includes(name)))
  for(let key_d of keys_d2) {
    var pljsplayfrom = key_d.substring(0, 12);
    if (pljsplayfrom == "pljsplayfrom") {
      localStorage.removeItem(key_d);
    }
  }
}

function load_his() {
  scheduleConfigSync(0);

  var container_his = document.getElementById("HistoryGenerator");
  var elements_his = container_his.getElementsByClassName("article_his");
  while (elements_his[0]) {
      elements_his[0].parentNode.removeChild(elements_his[0]);
  }

  let keys = Object.keys(localStorage);
  for(let key of keys) {
		var x = localStorage.getItem(key);
		var	v = '';

		function GetPlayerStorage(comand) {
			var x_seria_bit = '';
			var x_id = '';
			var x_seria = '';
			var x_time = 0;
			var x_time_old = 0;
			var x_date = 0;
			if (x.indexOf("{") == 0) {
				v = x.substr(1, x.indexOf("}") - 1)
				x = x.substr(x.indexOf("}") + 1);
			}
			if (v) {
				if (v.indexOf("-") > 0) {
					var q = v.split("-");
					var qs = v.split("s");
					x_seria_bit = parseFloat(q[1]);
					x_id = parseFloat(q[2]);
					x_seria = parseFloat(qs[1]);
				}
			}
			if (x) {
					if (x.indexOf("--") > 0) {
							var y = x.split("--");
							x_time = parseFloat(y[0]);
							x_time_old = parseFloat(y[1]);
							x_date = parseFloat(y[2]);
					}
			}
			switch (comand) {
				case "seria_bit":
					return x_seria_bit;
					break;
				case "id":
					return x_id;
					break;
				case "seria":
					return x_seria;
					break;
				case "time":
					return x_time;
					break;
				case "time_old":
					return x_time_old;
					break;
				case "date":
					return x_date;
					break;
			}
		}
    var pljsplayfrom = key.substr(0, 12);
		var minutes_payer_release = (GetPlayerStorage("time") / 60).toFixed(2).replace(".", ":");
		var dateObject_payer_release = new Date(GetPlayerStorage("date"));
    var date_payer_release = dateObject_payer_release.toLocaleString()

    if (pljsplayfrom == "pljsplayfrom") {
			document.getElementById("HistorysNone").style.display = "none";

      var url = config["titels_api"]+'getTitle?id='+GetPlayerStorage("id")+'&filter=id,posters.small,names';
      var div = document.createElement('div');
      document.getElementById('HistoryGenerator').appendChild(div);
      div.className = 'HistoryCard';
      div.id = 'article_history'+GetPlayerStorage("id");
			div.innerHTML = `
				<img id="img${GetPlayerStorage("id")}" src="./img/poster.png" alt="">
				<div class="HistoryCard-BlockText">
					<p class="HistoryCard-Title" id="names${GetPlayerStorage("id")}"></p>
					<p class="HistoryCard-Text">Серия ${GetPlayerStorage("seria")}   Минута ${minutes_payer_release}</p>
					<p class="HistoryCard-Text">Дата ${date_payer_release}</p>
					<p class="HistoryCard-Open" onclick="edit_href('/release', 'id', ${GetPlayerStorage("id")})">Открыть</p>
					<p class="HistoryCard-Del" onclick="del_his_but('${key}', '${GetPlayerStorage("id")}')">Удалить</p>
				</div>
				`;

      var page_content;
      $.get(url, function(data){
          page_content = data;
          document.getElementById("img"+data["id"]).src = config["posters"]+""+data["posters"]["small"]["url"];
          document.getElementById("names"+data["id"]).innerHTML = data["names"]["ru"];
      });
    }
  }

	document.getElementById("LoadAnimHistorys").style.display = "none";
}