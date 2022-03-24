function page_home() {
  document.getElementById('app').innerHTML = `
  <div class="article-block">
    <center>
      <div class="small_bac">
        <span style="margin-left: 5px;"></span>
        <a onclick="edit_href('/schedule')">Расписание</a>
        <a onclick="edit_href('/release', 'random')">Случайный релиз</a>
        <a onclick="edit_href('/myHistory')">История просмотров</a>
        <a onclick="edit_href('/settings')">Настройки</a>
        <span style="margin-right: 5px;"></span>
      </div>
    </center>
  </div>


  <div class="article-block">
    <center>
      <div id="article_block_small_none" style="display:none;">
        <div class="article-list block_slider" id="article_block_small" style="overflow-x: auto;white-space: nowrap;padding-top: 45px;">
          <h1 id="article_block_small_text"></h1>
					<div id="load_anim_block_small" style="display:none;">
						<br /><br />
						<img src="img/load.svg" style="max-width: 45px;">
						<br /><br />
					</div>	
        </div>
        <br /><br />
      </div>


      <div class="article-list">
        <h1>Последние обновления</h1>
        <div id="article_block"></div>
        <div id="load_anim" style="display:none;">
					<br /><br />
					<img src="img/load.svg" style="max-width: 45px;">
				</div>	
				<br /><br />
        <span id="load_new_article"></span>
        <!-- <input type="button" class="pstrnav pages_catalog" onclick="load_new('1')" value="Загрузить ещё" style="font-size: 16px;"> -->
      </div>

    </center>
  </div>
  `;

    var cookie_genres = localStorage.getItem('my_genres');
    if (!cookie_genres) {localStorage.setItem('my_genres', '');}
    var cookie_Home = localStorage.getItem('my_home');
    if (!cookie_Home || cookie_Home == "Ожидаемое") {
      localStorage.setItem('my_home', 'Ожидаемое');
    }

    if (cookie_Home == "Выключить") {
      // Выключить блок
      document.getElementById('article_block_small_none').setAttribute("style", "display: none");

    } else if (cookie_Home == "Популярное") {
      document.getElementById('article_block_small_text').setAttribute("style", "position: absolute;margin-top: -35px;");
      document.getElementById('article_block_small_text').innerHTML = 'Популярное';
      document.getElementById('article_block_small_none').setAttribute("style", "");


      article_small_INfavorites('article_block_small');

    } else if (!cookie_Home || cookie_Home == "Ожидаемое") {
      document.getElementById('article_block_small_text').setAttribute("style", "position: absolute;margin-top: -35px;");
      document.getElementById('article_block_small_text').innerHTML = 'Ожидается сегодня';
      document.getElementById('article_block_small_none').setAttribute("style", "");

      var days = ['6','0','1','2','3','4','5'];
      var d = new Date();
      var n = d.getDay();
      var url_pop = 'https://api.anilibria.tv/v2/getSchedule?days='+days[n]+'&remove=torrents&description_type=html';
      article_small_dey(url_pop, 'article_block_small');
    }


    load_api_home('0');

    // setTimeout(function(){
    //   function onEntry(entry) {
    //     entry.forEach(change => {
    //       if (change.isIntersecting) {
    //         load_api_article('Home', '1');
    //       }
    //     });
    //   }
    //   let options = { threshold: [0.5] };
    //   let observer = new IntersectionObserver(onEntry, options);
    //   let elements = document.querySelectorAll('#load_new_article');
    //   for (let elm of elements) {
    //     observer.observe(elm);
    //   }
    // },300)


    Scroll_to_top();
}
