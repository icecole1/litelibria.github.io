function page_season(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10) {
  document.getElementById('app').innerHTML = `
  <div class="article-block">
    <center>
      <div class="article-list block_header_small">
        <h1>Отфильтрованные тайтлы</h1>
        <div id="error" style="display:none;">
          <h1 style="color: var(--card-text-color);">Ничего не найдено!</h1>
          <br>
          <img src="img/libriatyan/1.png" style="max-width: 90%;">
        </div>
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
  load_sortingSeason('0', s1, s2, s3, s4, s5, s6, s7, s8, s9, s10 );

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        load_sortingSeason('1', s1, s2, s3, s4, s5, s6, s7, s8, s9, s10);
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('#load_new_article');
  for (let elm of elements) {
    observer.observe(elm);
  }

  Scroll_to_top();
}

function load_sortingSeason(n, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10) {
  var year_s = '',
      code_s = '',
      genres_s = '',
      voice_s = '',
      timing_s = '',
      translator_s = '',
      editing_s = '',
      decor_s = '',
      type_s = '',
      and_1 = '';

  if (s1) {
    year_s = '{season.year} == '+s1;
  }
  if (s2) {
    code_s = '{season.code} == '+s2;
  }
  if (s3) {
    genres_s = '{genres} ~= ("'+s3+'")';
  }
  if (s4) {
    voice_s = '{team.voice} ~= ("'+s4+'")';
  }
  if (s5) {
    timing_s = '{team.timing} ~= ("'+s5+'")';
  }
  if (s6) {
    translator_s = '{team.translator} ~= ("'+s6+'")';
  }
  if (s7) {
    editing_s = '{team.editing} ~= ("'+s7+'")';
  }
  if (s8) {
    decor_s = '{team.decor} ~= ("'+s8+'")';
  }
  if (s9) {
    type_s = '{type.code} == '+s9;
  }

  if (s1 && s2) {
    and_1 = ' and '
  }

  var url = 'https://api.anilibria.tv/v2/advancedSearch?query='+ year_s + and_1 + code_s + genres_s + voice_s + timing_s + translator_s + editing_s + decor_s + type_s +'&remove=torrents,player.playlist';
  load_api_catalog(n, url);
}
