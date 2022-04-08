function page_search(s1) {
  document.getElementById('app').innerHTML = `
  <div class="article-block">
    <center>
      <div class="article-list block_header_small">
        <h1>Поиск</h1>
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

  load_api_search('Search', '0', s1);
  setTimeout(function(){
    function onEntry(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
          load_api_search('Search', '1', s1);
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
