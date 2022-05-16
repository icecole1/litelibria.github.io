function page_line() {
  document.getElementById('app').innerHTML = `
	<div class="LineBlock">

		<br>
		<!-- Блок Последние обновления -->
		<div class="LineList-Updates">
			<h1>Последние обновления</h1>
			<div class="LineGenerator-BigHovers" id="LineGenerator-Updates">
				<!-- Карточки с контентом -->

				<div class="LineCard-BigHovers">
					<!-- <div class="LineCard-TextSerie">Серия 7/12</div> -->
					<img src="https://api.7o7.co/anilibria_bot/getThumbnail/9170/7/1" alt="">
					<a class="LineCard-Hover" onclick="edit_href('/release', 'id', 9170)">
						<p class="LineCard-Hover-Name">Мир отомэ-игр — это тяжёлый мир для мобов</p>
						<p class="LineCard-Hover-Genres">Романтика | Фэнтези | Школа</p>
						<p class="LineCard-Hover-Description">Главный герой Леон проживал серую и угнетающую душу жизнь и не жаловался. Молодой человек не гнался за высотами успеха, не обладал какими то уникальными лидерскими качествами и уж тем более, он не был ловеласом. Откровенно говоря, девушки его порой пугали и раздражали. Виной этому его маленькая и вредная сестричка, которая помыкала братом как хотела. Однажды, она даже заставила его пройти отомэ-игру для девочек. Леон потратил на прохождение два мучительных дня. Утомившийся от игры, он упал с лестницы и помер. Думаете, что хуже и быть не могло? Могло! После смерти он переродился в мире той самой злосчастной игры. Правда и это не самая плохая новость. Оказалось, что в этом мире всем правят женщины. Они угнетают мужчин и относятся к ним как к питомцам. И теперь парню нужно как-то выживать в этих диких условиях. Но как вы уже знаете, у него есть преимущество! Он уже прошел игру и знает весь сюжет этого мирка.</p>
					</a>
				</div>

			</div>

			<!-- Анимация загрузки -->
			<div id="load_anim" style="display:none;">
				<br /><br />
				<img src="img/load.svg" style="max-width: 45px;">
			</div>	
		</div>



		<!-- Большой экран -->
		<div class="DesctopBlock">
			<div class="LeftBlock">

				<br>
				<!-- Блок Поиск по жанрам -->
				<div class="LineList-Genres">
					<h1>Поиск по жанрам</h1>
					<div class="LineGenerator-Genres" id="LineGenerator-Genres">
						<!-- Карточки с контентом -->					
					
					</div>

				</div>




				<!-- Блок Ожидается сегодня -->
				<div class="LineList-Schedule">
					<div style="display: flow-root;">
						<h1 style="float: left;">Ожидается сегодня</h1>
						<h1 style="float: right;"><a class="LineList-Button-All" onclick="edit_href('/schedule')">Расписание</a></h1>
					</div>
					<div class="LineGenerator-SmallHovers" id="LineGenerator-Schedule">
						<!-- Карточки с контентом -->

						<div class="LineCard-SmallHovers">
							<img src="https://tb2og.anilib.top/media/releases/posters/9170/qOMX8o58joDfsKAG.jpg" alt="">
							<a class="LineCard-Hover" onclick="edit_href('/release', 'id', 9170)">
								<p class="LineCard-Hover-Serie">Серия 1</p>
							</a>
						</div>

					</div>
					<!-- Анимация загрузки -->
					<div id="load_anim" style="display:none;">
						<br /><br />
						<img src="img/load.svg" style="max-width: 45px;">
					</div>	
				</div>




				<!-- Блок Видео на каналах Anilibria -->
				<div class="LineList-Updates">
					<h1>Видео на каналах Anilibria</h1>
					<div class="LineGenerator-BigHovers" id="LineGenerator-Video">
						<!-- Карточки с контентом -->

						<div class="LineCard-BigHovers">
							<!-- <div class="LineCard-TextSerie">Серия 7/12</div> -->
							<img src="https://api.7o7.co/anilibria_bot/getThumbnail/9170/7/1" alt="">
							<a class="LineCard-Hover" onclick="edit_href('/release', 'id', 9170)">
								<p class="LineCard-Hover-Name">Мир отомэ-игр — это тяжёлый мир для мобов</p>
								<p class="LineCard-Hover-Genres">Романтика | Фэнтези | Школа</p>
								<p class="LineCard-Hover-Description">Главный герой Леон проживал серую и угнетающую душу жизнь и не жаловался. Молодой человек не гнался за высотами успеха, не обладал какими то уникальными лидерскими качествами и уж тем более, он не был ловеласом. Откровенно говоря, девушки его порой пугали и раздражали. Виной этому его маленькая и вредная сестричка, которая помыкала братом как хотела. Однажды, она даже заставила его пройти отомэ-игру для девочек. Леон потратил на прохождение два мучительных дня. Утомившийся от игры, он упал с лестницы и помер. Думаете, что хуже и быть не могло? Могло! После смерти он переродился в мире той самой злосчастной игры. Правда и это не самая плохая новость. Оказалось, что в этом мире всем правят женщины. Они угнетают мужчин и относятся к ним как к питомцам. И теперь парню нужно как-то выживать в этих диких условиях. Но как вы уже знаете, у него есть преимущество! Он уже прошел игру и знает весь сюжет этого мирка.</p>
							</a>
						</div>

					</div>

					<!-- Анимация загрузки -->
					<div id="load_anim" style="display:none;">
						<br /><br />
						<img src="img/load.svg" style="max-width: 45px;">
					</div>	
				</div>




				<!-- Блок Лучшее в прошлом году -->
				<div class="LineList-Schedule">
					<h1>Лучшее в прошлом году</h1>
					<div class="LineGenerator-SmallHovers" id="LineGenerator-Recomend">
						<!-- Карточки с контентом -->

						<div class="LineCard-SmallHovers">
							<img src="https://tb2og.anilib.top/media/releases/posters/9170/qOMX8o58joDfsKAG.jpg" alt="">
							<a class="LineCard-Hover" onclick="edit_href('/release', 'id', 9170)">
								<p class="LineCard-Hover-Serie">Серия 1</p>
							</a>
						</div>

					</div>
					<!-- Анимация загрузки -->
					<div id="load_anim" style="display:none;">
						<br /><br />
						<img src="img/load.svg" style="max-width: 45px;">
					</div>	
				</div>

			</div>

			<div class="RightBlock">

				<br>
				<!-- Блок История просмотров  -->
				<div class="LineList-History">
					<div style="display: flow-root;">
						<h1 style="float: left;">История просмотров</h1>
						<h1 style="float: right;"><a class="LineList-Button-All" onclick="edit_href('/myHistory')">Ещё...</a></h1>
					</div>
					<div class="LineGenerator-History" id="LineGenerator-History">
						<!-- Карточки с контентом -->

						<div class="LineCard-History" onclick="edit_href('/release', 'id', 9170)">
							<img src="https://tb2og.anilib.top/media/releases/posters/9170/qOMX8o58joDfsKAG.jpg" alt="">
							<div class="LineCard-History-BlockText">
								<p class="LineCard-History-Title">Мир отомэ-игр — это тяжёлый мир для мобов</p>
								<p class="LineCard-History-Text">Серия 6   Минута 7:19</p>
								<p class="LineCard-History-Text">Дата 07.04.2022, 17:01:15</p>
							</div>
						</div>

					</div>
					<!-- Анимация загрузки -->
					<div id="load_anim" style="display:none;">
						<br /><br />
						<img src="img/load.svg" style="max-width: 45px;">
					</div>	
				</div>
			</div>
		</div>



		<!-- Маленький экран -->





		<!-- Блок Каталог	 -->
		<div class="LineList-Schedule">
		<h1>Каталог</h1>
		<div class="LineGenerator-MediumHovers" id="LineGenerator-Schedule">
			<!-- Карточки с контентом -->

			<div class="LineCard-MediumHovers">
				<div class="LineCard-TextSerie">Серия 7/12</div>
				<img src="https://tb2og.anilib.top/media/releases/posters/9170/qOMX8o58joDfsKAG.jpg" alt="">
				<a class="LineCard-Hover" onclick="edit_href('/release', 'id', 9170)">
					<p class="LineCard-Hover-Name">Мир отомэ-игр — это тяжёлый мир для мобов</p>
					<p class="LineCard-Hover-Genres">Романтика | Фэнтези | Школа</p>
					<p class="LineCard-Hover-Description">Главный герой Леон проживал серую и угнетающую душу жизнь и не жаловался. Молодой человек не гнался за высотами успеха, не обладал какими то уникальными лидерскими качествами и уж тем более, он не был ловеласом. Откровенно говоря, девушки его порой пугали и раздражали. Виной этому его маленькая и вредная сестричка, которая помыкала братом как хотела. Однажды, она даже заставила его пройти отомэ-игру для девочек. Леон потратил на прохождение два мучительных дня. Утомившийся от игры, он упал с лестницы и помер. Думаете, что хуже и быть не могло? Могло! После смерти он переродился в мире той самой злосчастной игры. Правда и это не самая плохая новость. Оказалось, что в этом мире всем правят женщины. Они угнетают мужчин и относятся к ним как к питомцам. И теперь парню нужно как-то выживать в этих диких условиях. Но как вы уже знаете, у него есть преимущество! Он уже прошел игру и знает весь сюжет этого мирка.</p>
				</a>
			</div>

		</div>

		<!-- Анимация загрузки -->
		<div id="load_anim" style="display:none;">
			<br /><br />
			<img src="img/load.svg" style="max-width: 45px;">
		</div>	
	</div>


  </div>
	`;


	// https://api.anilibria.tv/v2/getUpdates?filter=id,names.ru,posters.medium,player.series,description,genres&limit=2
	var UpdatesList = [
		{
			"id": 8615,
			"names": {
				"ru": "Связь принцесс: Повторное погружение"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/8615/tvefH5TOHcasZLNB.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 1,
					"string": "1-1"
				}
			},
			"description": "Королевская столица Землесоль — город, который собрал под своей крышей тысячи жителей. Каждый из них принадлежит к гильдии, и эти гильдии играют важную роль в их будущем.\r\nСреди остальных особенно выделяется одна из них — гильдия гурманов. Это гильдия странствующих закусочных принимает заказ и начинает своё путешествие во Вкусвиль — город, который долго будоражил умы гурманов по всему свету.",
			"genres": [
				"Фэнтези"
			]
		},
		{
			"id": 9173,
			"names": {
				"ru": "Любовь после мирового господства"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/9173/dfaLLA9V2G7rp9bH.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 6,
					"string": "1-6"
				}
			},
			"description": "Фуда Айкава и Дэсуми Магахара влюблены  друг в друга, но есть одно маленькое \"\"но\"\", которое мешает им быть вместе. Фудо — лидер команды героев, призванных бороться со злом во всём мире, — \"\"Гелато Пять\"\", в то время как Дэсуми является одной из глав злодейской организации \"\"Гекко\"\", чьей целью является захват мирового господства. К чему приведут эти странные отношения?",
			"genres": [
				"Комедия",
				"Романтика"
			]
		},
		{
			"id": 9179,
			"names": {
				"ru": "Этот противный целитель!"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/9179/8AvsuaHtiLOFiMFT.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 6,
					"string": "1-6"
				}
			},
			"description": "Тёмный эльф-клирик Карла обладает невероятно большим статом харизмы, только вот вся её харизма ушла не в навыки убеждения или устрашения, а в токсичность и грубость. К счастью, её сопровождает рыцарь по имени Элвин, вынужденный мириться с её характером и сглаживать углы в общении с людьми. Куда же приведет дорога приключений наших главных героев, незаметно друг для друга ставших друзьями? Ведь эта история только начинается!",
			"genres": [
				"Комедия",
				"Приключения",
				"Фэнтези",
				"Экшен"
			]
		},
		{
			"id": 9175,
			"names": {
				"ru": "Жизнь девушки-карателя"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/9175/DzuQApO4LfnQpbpz.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 7,
					"string": "1-7"
				}
			},
			"description": "Давным-давно мир был ввергнут в разруху пришедшими из далекого мира странниками, которых зовут Потерянными. Неизвестно кто они такие и как попали сюда, но понятно одно: их приход сулит великие бедствия. Уничтожают их без зазрения совести Каратели, сохраняя мир и гармонию. История расскажет о молодой девушке-Карателе Мэно. Она старается быть честной, сильной и справедливой. Однажды она встречает Потерянную по имени Акари, которую она должна убить... но выясняется, что Акари невозможно убить! Долг вынуждает Мэно найти способ оборвать её жизнь. Однако, Акари только рада этому и даже предлагает помочь ей! Так начинается путешествие этой странной парочки, которое навсегда изменит судьбы девушек.",
			"genres": [
				"Комедия",
				"Приключения",
				"Фэнтези",
				"Экшен"
			]
		},
		{
			"id": 9170,
			"names": {
				"ru": "Мир отомэ-игр — это тяжёлый мир для мобов"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/9170/qOMX8o58joDfsKAG.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 7,
					"string": "1-7"
				}
			},
			"description": "Главный герой Леон проживал серую и угнетающую душу жизнь и не жаловался. Молодой человек не гнался за высотами успеха, не обладал какими то уникальными лидерскими качествами и уж тем более, он не был ловеласом. Откровенно говоря, девушки его порой пугали и раздражали. Виной этому его маленькая и вредная сестричка, которая помыкала братом как хотела. Однажды, она даже заставила его пройти отомэ-игру для девочек. Леон потратил на прохождение два мучительных дня. Утомившийся от игры, он упал с лестницы и помер. Думаете, что хуже и быть не могло? Могло! После смерти он переродился в мире той самой злосчастной игры. Правда и это не самая плохая новость. Оказалось, что в этом мире всем правят женщины. Они угнетают мужчин и относятся к ним как к питомцам. И теперь парню нужно как-то выживать в этих диких условиях. Но как вы уже знаете, у него есть преимущество! Он уже прошел игру и знает весь сюжет этого мирка.",
			"genres": [
				"Романтика",
				"Фэнтези",
				"Школа"
			]
		},
		{
			"id": 9206,
			"names": {
				"ru": "Моя геройская академия: Восхождение героев"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/9206/tXq6wcwKrL2Owl4n.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 1,
					"string": "1-1"
				}
			},
			"description": "Класс 1-А из Геройской академии UA отправляется на остров Набу, чтобы помочь местным жителям в их повседневных проблемах. Отличная погода, низкий уровень преступности, гостеприимные жители: эта практика напоминала скорее каникулы, чем серьёзное задание. Однако отдых длился недолго. Взявшаяся будто из ниоткуда злодейская группировка вдруг проявила себя и стала угрожать безопасности мирных жителей. Сможет ли Идзуку Мидория вместе со своими одноклассниками противостоять злодеям и оправдать звание героя?",
			"genres": [
				"Сейнен",
				"Супер сила",
				"Экшен"
			]
		},
		{
			"id": 9191,
			"names": {
				"ru": "Танцуй, танцуй, танцор"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/9191/NoEMQhLXOV6YssV1.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 6,
					"string": "1-6"
				}
			},
			"description": "Премьер — так называют артиста балета, мастерство и изящество которого позволяют ему исполнять главные роли.\r\n\r\nДжунпэ́й Мурáо с раннего детства восхищался балетом, но смерть отца заставила его дать обещание стать воплощением мужественности и начать заниматься единоборствами, навсегда отказавшись от заветной мечты стать танцóвщиком.\r\n\r\nНо, как известно, у судьбы всегда свои планы.\r\nОднажды Джунпэ́й знакомится в школе с новенькой ученицей, Мия́ко Годáй. Вскоре она замечает его интерес к балету и приглашает позаниматься с ней в балетной школе своей мамы.\r\n\r\nПуть к большой сцене всегда тернист и полон испытаний. Сможет ли Джунпэ́й преодолеть его и стать лучшим из лучших в сказочном и жестоком мире классического балета?",
			"genres": [
				"Драма",
				"Сейнен"
			]
		},
		{
			"id": 3996,
			"names": {
				"ru": "Боруто: Новое поколение Наруто"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/3996/wwN5eAYwnTQXWRJr.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 249,
					"string": "1-249"
				}
			},
			"description": "Коноха, она же «деревня скрытого листа» — это деревня ниндзя, в которой воспитываются настоящие воины, сильные духом и верные своему делу. Маленький мальчик по имени Наруто, будучи изгоем, мечтал добиться звания «хокаге», главы деревни. И преуспел! Пройдя через тяжкие испытания, став героем войны, несколько раз защитив мир от угрозы уничтожения, Наруто, наконец, получил свою пыльную работёнку и высокий статус. Но эта история не о нём. Зло всегда возвращается, появляются новые враги, а значит миру нужны и новые герои. Эта история о Боруто, сыне Наруто, о том, кем он станет и о том, что готовит миру шиноби будущее.",
			"genres": [
				"Боевые искусства",
				"Приключения",
				"Сёнен",
				"Супер сила",
				"Экшен"
			]
		},
		{
			"id": 9203,
			"names": {
				"ru": "Индекс волшебства II"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/9203/AJxvNJLhD2n9BHyT.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 5,
					"string": "1-5"
				}
			},
			"description": "Продолжение истории о приключениях англиканской монашки Индекса и Томы Камидзё. В Академия-сити всё так же неспокойно.",
			"genres": [
				"Магия",
				"Фантастика",
				"Экшен"
			]
		},
		{
			"id": 9163,
			"names": {
				"ru": "Моя девушка не только милая"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/9163/r5A6mXZ4idlG1r4D.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 6,
					"string": "1-6"
				}
			},
			"description": "Каждый человек мечтает о хорошей жизни. Все мы надеемся, что нам улыбнётся удача. Однако, по нашему главному герою колесо фортуны просто безжалостно проехалось. Трудности и опасности буквально преследуют его по пятам. Изуми Ю уже смирился с этой участью и ничего хорошего уже не ждал! Но как известно, порой судьба, закрыв дверь, распахивает окно.  \r\n\r\nОднажды, Изуми знакомится с красавицей и спортсменкой Шикимори Миччён. Она умна, прямолинейна и надёжна. Шикимори старается всеми силами уберечь Изуми от невзгод, ведь она не может бросить паренька в беде! Так и начинается их увлекательная история трогательной друж.... Или любви? Скоро узнаем!",
			"genres": [
				"Повседневность",
				"Сейнен"
			]
		},
		{
			"id": 9169,
			"names": {
				"ru": "Сведённые кукушкой"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/9169/aZQxi2g2X2p8n4uW.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 4,
					"string": "1-4"
				}
			},
			"description": "Ещё младенцем Нáги Умино стал жертвой случая — его перепутали в роддоме с другим ребёнком. Спустя шестнадцать лет Нáги выпадает шанс увидеться со своими настоящими родителями, но и здесь судьба подкидывает ему сюрприз. По пути Нáги встречается с Эрикой Амáно, которую по ошибке принимает за самоубийцу. Пользуясь случаем, девушка рассказывает растерянному парню свою историю: её собираются выдать замуж за нелюбимого человека, но Нáги может ей помочь, если притворится её парнем. Однако на встрече с родителями девушки выяснятся, что Нáги перепутали в роддоме именно с Эрикой, а он её таинственный жених, выбранный родителями. Но Нáги влюблён в свою одноклассницу Хи́ро Сэгáву, а Эрика полна решимости восстать против своего отца, поэтому парочка решает держаться на расстоянии.",
			"genres": [
				"Комедия",
				"Романтика"
			]
		},
		{
			"id": 9192,
			"names": {
				"ru": "Тусовщик Кунмин"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/9192/jvgPrQdeYPGv56TK.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 7,
					"string": "1-7"
				}
			},
			"description": "Военный стратег Кунми́н оставался верен своему делу до конца. Он выигрывал битву за битвой, используя всю силу своего ума. Но, естественно, нельзя наслаждаться чем-то вечно, поэтому битвы и интриги надоели и Кунми́ну. На смертном одре он мечтает о спокойствии и счастье в следующей жизни. И каково же было его удивление, когда он попал в современный Токио, где веселью нет конца и края! Там он встречает Э́йко, девушку-музыканта. Она помогает ему вжиться в ритм города и рассказывает о своей цели стать звездой эстрады. А он как великий стратег предлагает ей воплотить эту мечту в жизнь.",
			"genres": [
				"Комедия",
				"Повседневность",
				"Фантастика"
			]
		},
		{
			"id": 9161,
			"names": {
				"ru": "Семья шпиона"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/9161/UVku9WL5G5SplLNK.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 6,
					"string": "1-6"
				}
			},
			"description": "Ллойд Форджер — профессиональный шпион под кодовым именем Сумрак получает особое задание от командования, целью которого является поддержание мира между двумя сверхдержавами. В качестве прикрытия он обязан обзавестись фиктивной семьёй. Роль условной жены досталась не кому-то, а известной наёмной убийце под псевдонимом Тернистая Принцесса, однако это показалось командованию недостаточным, и он удочеряет шестилетнюю девочку-эспера, которая может читать мысли других людей. Теперь новой семье предстоит не только выполнить секретное задание, не раскрыв себя, но и понять, что семья — это гораздо больше, чем просто кровные родственники.",
			"genres": [
				"Комедия",
				"Сёнен",
				"Экшен"
			]
		},
		{
			"id": 9159,
			"names": {
				"ru": "Кагуя хочет, чтобы ей признались: война любви и разума гениев 3"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/9159/g6aydYhbdNF3UkT7.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 6,
					"string": "1-6"
				}
			},
			"description": "И вновь двери престижной академии Шучиин распахиваются перед нами! А это значит, что пора вернуться и к будням любимого студсовета! \r\nВице-президент Кáгуя Шинóмия. Президент Мию́ки Широгáне. Всё такие же непреклонно гордые возлюбленные. Признаешься — проиграешь. Это битва двух гениев. Битва их чувств, их сердец. \r\nС новым сезоном сменилось и поле боя — грядёт культурный фестиваль! Так кто же первым ослабит бдительность? Откроется ли новый уровень их отношений? Сложно предсказать! Ведь всем известно, что в любви как на войне.",
			"genres": [
				"Комедия",
				"Психологическое",
				"Романтика",
				"Сейнен",
				"Школа"
			]
		},
		{
			"id": 9061,
			"names": {
				"ru": "Рандеву с Жизнью 4"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/9061/uSp47tpdj8PE0X36.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 6,
					"string": "1-6"
				}
			},
			"description": "Долгожданный четвёртый сезон так полюбившегося многим аниме о невероятных приключениях Шидо Ицуки и его загадочных подруг. Вновь всё как вы любите: красивые девушки на любой вкус, красочные сражения и различные таинственные события, угрожающие существованию всего живого на Земле, с которыми необходимо разобраться главному герою. Всё это неизменно щедро сдобрено лёгким юмором.",
			"genres": [
				"Комедия",
				"Меха",
				"Романтика",
				"Фантастика",
				"Школа"
			]
		}
	];

	var NEWSList = [];

	var GenresList = [
		"Боевые искусства",
		"Вампиры",
		"Демоны",
		"Детектив",
		"Драма",
		"Игры",
		"Исторический",
		"Комедия",
		"Магия",
		"Меха",
		"Мистика",
		"Музыка",
		"Повседневность",
		"Приключения",
		"Психологическое",
		"Романтика",
		"Сверхъестественное",
		"Сёдзе",
		"Сейнен",
		"Сёнен",
		"Спорт",
		"Супер сила",
		"Триллер",
		"Ужасы",
		"Фантастика",
		"Фэнтези",
		"Школа",
		"Экшен",
		"Этти"
	];
	var ColorGenresList = [
    "A83845",
    "2E708A",
    "2D8653",
    "2A417E",
    "A953C6",
    "4BC3B5",
    "CCC966",
    "A3D175",
    "2A4C7E",
    "592E8A",
    "A471D0",
    "90A0DA",
    "90A0DA",
    "90A0DA",
    "6CBF40",
    "97C247",
    "75D1A0",
    "6E91CF",
    "6272CB",
    "34819D",
    "1D5849",
    "CABAE8",
    "BEA7E2",
    "321C54",
    "522163",
    "8A2E8A",
    "A838A5",
    "795EC9",
    "CF6E81",
  ];

	// https://api.anilibria.tv/v2/getSchedule?filter=id,names.ru,posters.medium,player.series&days=6
	var ScheduleList = [
		{
			"day": 6,
			"list": [
				{
					"id": 3996,
					"names": {
						"ru": "Боруто: Новое поколение Наруто"
					},
					"posters": {
						"medium": {
							"url": "/media/releases/posters/3996/wwN5eAYwnTQXWRJr.jpg",
							"raw_base64_file": null
						}
					},
					"player": {
						"series": {
							"first": 1,
							"last": 249,
							"string": "1-249"
						}
					}
				},
				{
					"id": 8452,
					"names": {
						"ru": "Блич"
					},
					"posters": {
						"medium": {
							"url": "/media/releases/posters/8452/ChbysAFaWJPGeb4P.jpg",
							"raw_base64_file": null
						}
					},
					"player": {
						"series": {
							"first": 1,
							"last": 220,
							"string": "1-220"
						}
					}
				},
				{
					"id": 9061,
					"names": {
						"ru": "Рандеву с Жизнью 4"
					},
					"posters": {
						"medium": {
							"url": "/media/releases/posters/9061/uSp47tpdj8PE0X36.jpg",
							"raw_base64_file": null
						}
					},
					"player": {
						"series": {
							"first": 1,
							"last": 6,
							"string": "1-6"
						}
					}
				},
				{
					"id": 9156,
					"names": {
						"ru": "Цикл историй: Второй сезон"
					},
					"posters": {
						"medium": {
							"url": "/media/releases/posters/9156/vwboC9mKuElQFMLR.jpg",
							"raw_base64_file": null
						}
					},
					"player": {
						"series": {
							"first": 1,
							"last": 14,
							"string": "1-14"
						}
					}
				},
				{
					"id": 9159,
					"names": {
						"ru": "Кагуя хочет, чтобы ей признались: война любви и разума гениев 3"
					},
					"posters": {
						"medium": {
							"url": "/media/releases/posters/9159/g6aydYhbdNF3UkT7.jpg",
							"raw_base64_file": null
						}
					},
					"player": {
						"series": {
							"first": 1,
							"last": 6,
							"string": "1-6"
						}
					}
				},
				{
					"id": 9161,
					"names": {
						"ru": "Семья шпиона"
					},
					"posters": {
						"medium": {
							"url": "/media/releases/posters/9161/UVku9WL5G5SplLNK.jpg",
							"raw_base64_file": null
						}
					},
					"player": {
						"series": {
							"first": 1,
							"last": 6,
							"string": "1-6"
						}
					}
				},
				{
					"id": 9163,
					"names": {
						"ru": "Моя девушка не только милая"
					},
					"posters": {
						"medium": {
							"url": "/media/releases/posters/9163/r5A6mXZ4idlG1r4D.jpg",
							"raw_base64_file": null
						}
					},
					"player": {
						"series": {
							"first": 1,
							"last": 6,
							"string": "1-6"
						}
					}
				},
				{
					"id": 9179,
					"names": {
						"ru": "Этот противный целитель!"
					},
					"posters": {
						"medium": {
							"url": "/media/releases/posters/9179/8AvsuaHtiLOFiMFT.jpg",
							"raw_base64_file": null
						}
					},
					"player": {
						"series": {
							"first": 1,
							"last": 6,
							"string": "1-6"
						}
					}
				},
				{
					"id": 9182,
					"names": {
						"ru": "Аой Ашито"
					},
					"posters": {
						"medium": {
							"url": "/media/releases/posters/9182/QEdO4tYQoQ0M46iE.jpg",
							"raw_base64_file": null
						}
					},
					"player": {
						"series": {
							"first": 1,
							"last": 5,
							"string": "1-5"
						}
					}
				},
				{
					"id": 9191,
					"names": {
						"ru": "Танцуй, танцуй, танцор"
					},
					"posters": {
						"medium": {
							"url": "/media/releases/posters/9191/NoEMQhLXOV6YssV1.jpg",
							"raw_base64_file": null
						}
					},
					"player": {
						"series": {
							"first": 1,
							"last": 6,
							"string": "1-6"
						}
					}
				},
				{
					"id": 9203,
					"names": {
						"ru": "Индекс волшебства II"
					},
					"posters": {
						"medium": {
							"url": "/media/releases/posters/9203/AJxvNJLhD2n9BHyT.jpg",
							"raw_base64_file": null
						}
					},
					"player": {
						"series": {
							"first": 1,
							"last": 5,
							"string": "1-5"
						}
					}
				}
			]
		}
	];

	https://api.anilibria.tv/v2/getYouTube?limit=10
	var VideoList = [
		{
			"id": 10834,
			"title": "Как озвучивается 2 сезон аниме \"У Коми проблемы с общением\"",
			"image": "https://img.youtube.com/vi/O1UAA2kHG3w/0.jpg",
			"youtube_id": "O1UAA2kHG3w",
			"comments": 87,
			"views": 3183,
			"timestamp": 1652613673
		},
		{
			"id": 10833,
			"title": "Сильвик в Геншине: Глава 2 - Ли Юэ",
			"image": "https://img.youtube.com/vi/w-tVllLyz0c/0.jpg",
			"youtube_id": "w-tVllLyz0c",
			"comments": 34,
			"views": 2449,
			"timestamp": 1652386168
		},
		{
			"id": 10832,
			"title": "АниЛибрия читает СТИХИ КО ДНЮ ПОБЕДЫ (9 МАЯ 2022)",
			"image": "https://img.youtube.com/vi/VXtLcA285uY/0.jpg",
			"youtube_id": "VXtLcA285uY",
			"comments": 202,
			"views": 7169,
			"timestamp": 1652116364
		},
		{
			"id": 10831,
			"title": "Новый сезон Бездны в ИЮЛЕ / Сага о Винланде меняет студию?",
			"image": "https://img.youtube.com/vi/1YxJf21fIqk/0.jpg",
			"youtube_id": "1YxJf21fIqk",
			"comments": 64,
			"views": 7032,
			"timestamp": 1652034733
		},
		{
			"id": 10830,
			"title": "Я теперь ПАУК, ПАУК, И ЧТО?!",
			"image": "https://img.youtube.com/vi/ZJzx4CPbYmU/0.jpg",
			"youtube_id": "ZJzx4CPbYmU",
			"comments": 52,
			"views": 6487,
			"timestamp": 1651862927
		},
		{
			"id": 10829,
			"title": "Читаю комментарии под аниме, которые я озвучиваю (аниме-весна 2022)",
			"image": "https://img.youtube.com/vi/44UADWN1zhA/0.jpg",
			"youtube_id": "44UADWN1zhA",
			"comments": 187,
			"views": 10006,
			"timestamp": 1651766451
		},
		{
			"id": 10828,
			"title": "Люпин отвечает на разные вопросы, 20:00",
			"image": "https://img.youtube.com/vi/ZBTOavuJR8A/0.jpg",
			"youtube_id": "ZBTOavuJR8A",
			"comments": 11,
			"views": 4122,
			"timestamp": 1651591514
		},
		{
			"id": 10827,
			"title": "ПРОЕКТУ АНИЛИБРИЯ 10 ЛЕТ! СТРИМ В 16:00!",
			"image": "https://img.youtube.com/vi/LGHROrTjAac/0.jpg",
			"youtube_id": "LGHROrTjAac",
			"comments": 28,
			"views": 16645,
			"timestamp": 1651087671
		},
		{
			"id": 10826,
			"title": "О весеннем аниме-сезоне / Куда пропал главный канал АниЛибрии?",
			"image": "https://img.youtube.com/vi/AtBl496IbIg/0.jpg",
			"youtube_id": "AtBl496IbIg",
			"comments": 276,
			"views": 23170,
			"timestamp": 1650916102
		},
		{
			"id": 10825,
			"title": "Ютуб-канал АниЛибрии удалили. Как жить дальше?",
			"image": "https://img.youtube.com/vi/2MVUEvl9Usc/0.jpg",
			"youtube_id": "2MVUEvl9Usc",
			"comments": 693,
			"views": 46061,
			"timestamp": 1650886801
		}
	];

	// https://api.anilibria.tv/v2/advancedSearch?query={season.code} == 1 and {season.year} == 2020&filter=id,names.ru,posters.medium,player.series&order_by=in_favorites&sort_direction=1&limit=15
	var RecomendList = [
		{
			"id": 8566,
			"names": {
				"ru": "Грабитель"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/8566/ZFODZ8ae3IgnBg4i.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 24,
					"string": "1-24"
				}
			}
		},
		{
			"id": 8542,
			"names": {
				"ru": "Игра Дарвина"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/8542/2U2odsBEjVEl5Jlp.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 11,
					"string": "1-11"
				}
			}
		},
		{
			"id": 8555,
			"names": {
				"ru": "Не люблю боль, поэтому собираюсь вкачать всё в защиту"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/8555/tQmAfSwIde8WVroR.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 12,
					"string": "1-12"
				}
			}
		},
		{
			"id": 8552,
			"names": {
				"ru": "Бесконечный Дендрограм"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/8552/Wjck5IVo2eB8ybO1.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 13,
					"string": "1-13"
				}
			}
		},
		{
			"id": 8559,
			"names": {
				"ru": "Ложные выводы"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/8559/uZTiqKnqvDIqjcKb.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 12,
					"string": "1-12"
				}
			}
		},
		{
			"id": 8554,
			"names": {
				"ru": "Межвидовые рецензенты"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/8554/iznGZPGuEp9SmPKW.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 12,
					"string": "1-12"
				}
			}
		},
		{
			"id": 8567,
			"names": {
				"ru": "Любовь подвластна науке, и мы сможем это доказать"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/8567/l3iiQdZAl8RhJJgf.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 12,
					"string": "1-12"
				}
			}
		},
		{
			"id": 8551,
			"names": {
				"ru": "ID: Вторжение"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/8551/tIf2wZ7enR5zWMxo.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 13,
					"string": "1-13"
				}
			}
		},
		{
			"id": 8572,
			"names": {
				"ru": "Сомали и лесной дух"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/8572/4AP0jP3tvNJuNqyb.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 12,
					"string": "1-12"
				}
			}
		},
		{
			"id": 8556,
			"names": {
				"ru": "Туалетный мальчик Ханако"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/8556/6ovMH1ltzny8jAsc.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 12,
					"string": "1-12"
				}
			}
		},
		{
			"id": 8562,
			"names": {
				"ru": "Кошачий рай (TV)"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/8562/Jx5TC0Ajj5Sp27ZA.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 12,
					"string": "1-12"
				}
			}
		},
		{
			"id": 8543,
			"names": {
				"ru": "Дорохедоро"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/8543/VcHPYstKOYSGgsEq.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 12,
					"string": "1-12"
				}
			}
		},
		{
			"id": 8561,
			"names": {
				"ru": "Волшебник-воин Орфен"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/8561/P1QeJ3Gkuc8ZtRRf.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 14,
					"string": "1-14"
				}
			}
		},
		{
			"id": 8546,
			"names": {
				"ru": "Волейбол!! К вершине"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/8546/HORdsXkkixX7rHdx.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 25,
					"string": "1-25"
				}
			}
		},
		{
			"id": 8580,
			"names": {
				"ru": "Собираемся все в академии Сэтон!"
			},
			"posters": {
				"medium": {
					"url": "/media/releases/posters/8580/svhpYeZCh3M7VyAl.jpg",
					"raw_base64_file": null
				}
			},
			"player": {
				"series": {
					"first": 1,
					"last": 12,
					"string": "1-12"
				}
			}
		}
	];

	var HistoryList = [];

	function GeneratorUpdates() {
		document.getElementById('LineGenerator-Updates').innerHTML = "";
		for (let i = 0; UpdatesList.length > i; i++) {
			var genres = '';
			for(let g = 0; UpdatesList[i].genres.length > g; g++){
				if(genres == '') genres = UpdatesList[i].genres[g];
				else genres = genres + ', ' +UpdatesList[i].genres[g];
			}

			var div = document.createElement('div');
			document.getElementById('LineGenerator-Updates').appendChild(div);
			div.className = 'LineCard-BigHovers';
			div.innerHTML += `
				<img src="${config["CustomPosters"]}/anilibria_bot/getThumbnail/${UpdatesList[i].id}/${UpdatesList[i].player.series.last}/1" alt="">
				<a class="LineCard-Hover" onclick="edit_href('/release', 'id', ${UpdatesList[i].id})">
					<p class="LineCard-Hover-Name">${UpdatesList[i].names.ru}</p>
					<p class="LineCard-Hover-Genres">${genres}</p>
					<p class="LineCard-Hover-Description">${UpdatesList[i].description}</p>
				</a>
			`;
		}
	}

	function GeneratorNEWS() {
		document.getElementById('LineGenerator-Updates').innerHTML = "";
		for (let i = 0; NEWSList.length > i; i++) {
			var div = document.createElement('div');
			document.getElementById('LineGenerator-Genres').appendChild(div);
			div.className = 'LineCard-Genres';
			div.innerHTML += `<p>${NEWSList[i]}</p>`;
		}
	}

	function GeneratorGenres() {
		document.getElementById('LineGenerator-Genres').innerHTML = "";
		for (let i = 0; GenresList.length > i; i++) {
			var div = document.createElement('div');
			document.getElementById('LineGenerator-Genres').appendChild(div);
			div.className = 'LineCard-Genres';
			div.setAttribute("style", `color: #${ColorGenresList[i]};`);
			div.setAttribute("onclick", `edit_href('/season', '', '', '${GenresList[i]}')`);
			div.innerHTML += `<p>${GenresList[i]}</p>`;
		}
	}

	function GeneratorSchedule() {
		document.getElementById('LineGenerator-Schedule').innerHTML = "";
		for (let i = 0; ScheduleList[0].list.length > i; i++) {
			var div = document.createElement('div');
			document.getElementById('LineGenerator-Schedule').appendChild(div);
			div.className = 'LineCard-SmallHovers';
			div.innerHTML += `
				<img src="${config["posters"]}${ScheduleList[0].list[i].posters.medium.url}" alt="">
				<a class="LineCard-Hover" onclick="edit_href('/release', 'id', ${ScheduleList[0].list[i].id})">
					<p class="LineCard-Hover-Serie">Серия ${ScheduleList[0].list[i].player.series.last}</p>
				</a>
			`;
		}
	}

	function GeneratorVideo() {
		document.getElementById('LineGenerator-Video').innerHTML = "";
		for (let i = 0; VideoList.length > i; i++) {
			var div = document.createElement('div');
			document.getElementById('LineGenerator-Video').appendChild(div);
			div.className = 'LineCard-BigHovers';
			div.innerHTML += `
				<img src="${VideoList[i].image}" alt="">
				<a class="LineCard-Hover" href="https://www.youtube.com/watch?v=${VideoList[i].youtube_id}" target="_blank">
					<p class="LineCard-Hover-Name">${VideoList[i].title}</p>
				</a>
			`;
		}
	}

	function GeneratorRecomend() {
		document.getElementById('LineGenerator-Recomend').innerHTML = "";
		for (let i = 0; RecomendList.length > i; i++) {
			var div = document.createElement('div');
			document.getElementById('LineGenerator-Recomend').appendChild(div);
			div.className = 'LineCard-SmallHovers';
			div.innerHTML += `
				<img src="${config["posters"]}${RecomendList[i].posters.medium.url}" alt="">
				<a class="LineCard-Hover" onclick="edit_href('/release', 'id', ${RecomendList[i].id})">
					<p class="LineCard-Hover-Serie">Серия ${RecomendList[i].player.series.last}</p>
				</a>
			`;
		}
	}

	function GeneratorHistory() {
		document.getElementById('LineGenerator-Updates').innerHTML = "";
		for (let i = 0; HistoryList.length > i; i++) {
			var div = document.createElement('div');
			document.getElementById('LineGenerator-Genres').appendChild(div);
			div.className = 'LineCard-Genres';
			div.innerHTML += `<p>${HistoryList[i]}</p>`;
		}
	}

	GeneratorUpdates();
	GeneratorGenres();
	GeneratorSchedule();
	GeneratorVideo();
	GeneratorRecomend();


	preloader_none();
}