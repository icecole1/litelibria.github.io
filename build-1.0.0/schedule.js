function page_schedule() {
  document.getElementById('app').innerHTML = `
  <div class="article-block">
    <center>
      <div class="small_bac">
        <span style="margin-left: 5px;"></span>
        <a onclick="edit_href('/schedule')" style="color: var(--card-text-color-2);background: var(--card-background-3);">Расписание</a>
        <a onclick="edit_href('/release', 'random')">Случайный релиз</a>
        <a onclick="edit_href('/myHistory')">История просмотров</a>
        <a onclick="edit_href('/settings')">Настройки</a>
        <span style="margin-right: 5px;"></span>
      </div>
    </center>
  </div>


  <div class="article-block">
    <center>
      <div class="article-list block_header_small block_slider" id="article_block_small" style="overflow-x: auto;white-space: nowrap;padding-top: 45px;">
        <div id="Monday">
          <h1 style="position: absolute;margin-top: -35px;">Понедельник</h1>
        </div>
      </div>
      <div class="article-list block_header_small block_slider" id="article_block_small" style="overflow-x: auto;white-space: nowrap;padding-top: 45px;">
        <div id="Tuesday">
          <h1 style="position: absolute;margin-top: -35px;">Вторник</h1>
        </div>
      </div>
      <div class="article-list block_header_small block_slider" id="article_block_small" style="overflow-x: auto;white-space: nowrap;padding-top: 45px;">
        <div id="Wednesday">
          <h1 style="position: absolute;margin-top: -35px;">Среда</h1>
        </div>
      </div>
      <div class="article-list block_header_small block_slider" id="article_block_small" style="overflow-x: auto;white-space: nowrap;padding-top: 45px;">
        <div id="Thursday">
          <h1 style="position: absolute;margin-top: -35px;">Четверг</h1>
        </div>
      </div>
      <div class="article-list block_header_small block_slider" id="article_block_small" style="overflow-x: auto;white-space: nowrap;padding-top: 45px;">
        <div id="Friday">
          <h1 style="position: absolute;margin-top: -35px;">Пятница</h1>
        </div>
      </div>
      <div class="article-list block_header_small block_slider" id="article_block_small" style="overflow-x: auto;white-space: nowrap;padding-top: 45px;">
        <div id="Saturday">
          <h1 style="position: absolute;margin-top: -35px;">Суббота</h1>
        </div>
      </div>
      <div class="article-list block_header_small block_slider" id="article_block_small" style="overflow-x: auto;white-space: nowrap;padding-top: 45px;">
        <div id="Sunday">
          <h1 style="position: absolute;margin-top: -35px;">Воскресенье</h1>
        </div>
      </div>
    </center>
  </div>
  `;

  var url_pop_0 = 'https://api.anilibria.tv/v2/getSchedule?days=0&remove=torrents,player.playlist&description_type=html';
  var url_pop_1 = 'https://api.anilibria.tv/v2/getSchedule?days=1&remove=torrents,player.playlist&description_type=html';
  var url_pop_2 = 'https://api.anilibria.tv/v2/getSchedule?days=2&remove=torrents,player.playlist&description_type=html';
  var url_pop_3 = 'https://api.anilibria.tv/v2/getSchedule?days=3&remove=torrents,player.playlist&description_type=html';
  var url_pop_4 = 'https://api.anilibria.tv/v2/getSchedule?days=4&remove=torrents,player.playlist&description_type=html';
  var url_pop_5 = 'https://api.anilibria.tv/v2/getSchedule?days=5&remove=torrents,player.playlist&description_type=html';
  var url_pop_6 = 'https://api.anilibria.tv/v2/getSchedule?days=6&remove=torrents,player.playlist&description_type=html';

  article_small_dey(url_pop_0, 'Monday');
  article_small_dey(url_pop_1, 'Tuesday');
  article_small_dey(url_pop_2, 'Wednesday');
  article_small_dey(url_pop_3, 'Thursday');
  article_small_dey(url_pop_4, 'Friday');
  article_small_dey(url_pop_5, 'Saturday');
  article_small_dey(url_pop_6, 'Sunday');


  preloader_none();
  Scroll_to_top();
}
