var MySessID;

function page_options() {
  document.getElementById('app').innerHTML = `
	
	<!-- Блок Каталог	 -->
	<div class="OptionsBlock">

		<!-- Блок Аккаунта	 -->
		<div id="login_profile" style="display:none;">
			<div class="OptionsAccount">
				<div class="OptionsAccountLogo" id="my_profile_img"> </div>
				<div class="OptionsAccountText">
					<p class="OptionsAccountTextProfile">Логин: <span id="my_login"></span></p>
					<p class="OptionsAccountTextProfile">Ник: <span id="my_nickname"></span></p>
					<p class="OptionsAccountTextProfile">Почта: <span id="my_email"></span></p>
					<p class="OptionsAccountTextProfile">ВК ID: <span id="my_vk_id"></span></p>
					<p class="OptionsAccountTextProfile">Patreon ID: <span id="my_patreon_id"></span></p>
					<br />
					<p class="settings_filter_p">*LiteLibria не собирает никаких личных данных о вас, они хранятся только на вашем устройстве!</p>
				</div>

				<Button class="ButtonHovers" onclick="logout()" style="margin: 10px 0 20px 0;">Выйти из аккаунта</Button>
			</div>
		</div>

		<!-- Блок Авторизации	 -->
		<div class="OptionsBlockCard" id="logout_profile">
			<div class="OptionsCard">
				<h3>Авторизация</h3>
				<br>
				<form method="post" name="form_login" id="form_login" class="formMirror">
					<p id="error_mes" style="display: none">Неверный логин или пароль!</p><br />
					<div class="blockMirror">
						<label>Логин</label><input required type="text" name="mail" class="MirrorBox">
					</div>
					<br>
					<div class="blockMirror">
						<label>Пароль</label><input required type="password" name="passwd" class="MirrorBox">
					</div>
					<br>
					<input type="submit" class="OptionsCardButton" id="submit" value="Вход" data-state="Select">
				</form>
				<p class="settings_filter_p">*LiteLibria не собирает никаких личных данных о вас, они хранятся только на вашем устройстве!</p>
				<p class="settings_filter_p">*Регистрация доступна на сайте <a href="https://www.anilibria.tv/">AniLibria.TV</a>!</p>
			</div>
    </div>

		<div class="OptionsBlockCard">

			<div class="OptionsCard">
				<span class="OptionsTitle">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 172 172">
						<path d="M103.14681,7.16667c-1.39872,0.02045 -2.73437,0.58534 -3.72331,1.57471l-36.05729,36.05729c-0.30722,0.19896 -0.59332,0.42877 -0.85384,0.68587l-19.41439,19.40739c-1.80988,1.80884 -2.09386,4.64274 -0.67887,6.77474c0,0 3.69072,5.58427 6.56478,11.71582c1.43703,3.06578 2.62566,6.27045 3.05843,8.55241c0.42518,2.24198 -0.08295,2.76186 0.31494,2.36556c-0.4284,0.33902 -8.56943,6.78581 -17.99365,14.41732c-9.6686,7.8294 -19.89238,16.18035 -24.01953,20.30322c-8.96782,8.96782 -8.96782,23.66711 0,32.63493c8.96639,8.96639 23.65971,8.96353 32.62793,0c4.13345,-4.12917 12.48671,-14.34367 20.31722,-24.01253c7.63264,-9.42454 14.07835,-17.57229 14.41732,-18.00065c0.14452,-0.13721 0.73846,-0.49135 2.92545,-0.11898c2.21833,0.3777 5.32437,1.55258 8.27946,3.03044c2.95509,1.47785 5.80175,3.22557 7.87354,4.58415c1.03589,0.67929 1.88041,1.25864 2.45654,1.66569c0.28807,0.20354 0.50668,0.36392 0.65088,0.46892c0.0607,0.04422 0.1008,0.07426 0.13297,0.09798c0.00609,0.0043 0.02298,0.01041 0.028,0.014c0.01626,0.01176 0.0326,0.02342 0.04899,0.03499c0.92644,0.68975 2.0504,1.06277 3.2054,1.0638c0,0 0.32555,-1.01309 0.42692,-1.32275l3.37337,-0.24496l19.41439,-19.41439c0.27854,-0.28222 0.52499,-0.5944 0.73486,-0.93083l35.97331,-35.9943c2.09823,-2.0991 2.09823,-5.50149 0,-7.60059l-56.20654,-56.23454c-1.02666,-1.02708 -2.42521,-1.59508 -3.87728,-1.57471zM100.65527,39.85059c0.91689,0 1.83478,0.34926 2.53353,1.0498c1.40108,1.40109 1.40108,3.66956 0,5.06706c-3.49733,3.49733 -3.49733,9.17372 0,12.67464c3.49733,3.49733 9.16673,3.49733 12.66764,0l1.27376,-1.26676c2.79858,-2.79858 7.33553,-2.79858 10.13411,0c2.79858,2.79858 2.79858,7.33553 0,10.13411l-2.53353,2.53353c-4.19967,4.19967 -4.19967,11.0015 0,15.20117c2.07481,2.07481 4.78438,3.11769 7.5026,3.14242l-9.60921,9.61621l-48.62695,-48.63395l8.25846,-8.25847c0.27577,1.31564 0.91008,2.57577 1.93164,3.59733c2.79858,2.79859 7.33553,2.79859 10.13411,0l3.80029,-3.80729c0.70054,-0.70054 1.61665,-1.0498 2.53353,-1.0498zM66.38965,56.9764l48.62695,48.62695l-2.19059,2.19759c-0.27812,0.28004 -0.52456,0.58985 -0.73486,0.92383l-9.41325,9.42025h-0.007c-2.31172,-1.51576 -5.45623,-3.45212 -8.95134,-5.20003c-3.49715,-1.74894 -7.29692,-3.34576 -11.2819,-4.02425c-3.98497,-0.67849 -8.86933,-0.38294 -12.3737,3.12142c-0.14641,0.1459 -0.28428,0.30013 -0.41292,0.46191c0,0 -6.9274,8.76032 -14.71126,18.37159c-7.78386,9.61126 -16.77898,20.40019 -19.56136,23.17969c-4.86385,4.86385 -12.56991,4.86384 -17.43376,0c-4.86241,-4.86241 -4.85954,-12.56267 0,-17.42676c2.78869,-2.78579 13.57516,-11.77817 23.18669,-19.56136c9.61153,-7.78319 18.36458,-14.71126 18.36458,-14.71126c0.16159,-0.12638 0.31581,-0.26191 0.46191,-0.40592c3.53148,-3.52739 3.36971,-8.1981 2.64551,-12.01677c-0.7242,-3.81867 -2.23247,-7.58996 -3.88428,-11.11393c-2.31824,-4.94575 -3.75924,-6.97185 -5.15104,-9.18929l9.70019,-9.7002c0.34066,-0.2204 0.65527,-0.47867 0.93783,-0.76985zM26.84701,139.75c-2.967,0 -5.375,2.408 -5.375,5.375c0,2.967 2.408,5.375 5.375,5.375c2.967,0 5.375,-2.408 5.375,-5.375c0,-2.967 -2.408,-5.375 -5.375,-5.375z"></path>
					</svg>
					<h3>Настройки оформления</h3>
				</span>
				<p class="settings_filter_p">Тема</p>
				<div id="settings_home_block_style" style="margin-bottom: 15px;">
					<button id="Theme1_style" class="OptionsCardButton" title="Выбрать" onclick="SetThemeEditStyle('auto')">Автоматическая</button>
					<button id="Theme2_style" class="OptionsCardButton" title="Выбрать" onclick="SetThemeEditStyle('theme1')">Светлая</button>
					<button id="Theme3_style" class="OptionsCardButton" title="Выбрать" onclick="SetThemeEditStyle('theme2')">Темная</button>
				</div>
				<hr>
				<p class="settings_filter_p">Загрузка постеров</p>
				<div id="settings_home_block_style" style="margin-bottom: 15px;">
					<button id="Posters1_style" class="OptionsCardButton" title="Выбрать" onclick="SetPostersStyle('original')">Оригинал</button>
					<button id="Posters2_style" class="OptionsCardButton" title="Выбрать" onclick="SetPostersStyle('webp')">Оптимизированные (webP)</button>
				</div>
				<hr>
				<p class="settings_filter_p">Отображение стрелки «Вверх»</p>
				<div id="settings_home_block_style" style="margin-bottom: 15px;">
					<button id="backToTop1_style" class="OptionsCardButton" title="Выбрать" onclick="SetBackToTopStyle('true')">Включить</button>
					<button id="backToTop2_style" class="OptionsCardButton" title="Выбрать" onclick="SetBackToTopStyle('false')">Отключить</button>
				</div>
				<hr>
				<p class="settings_filter_p">Увеличеннгое мобильное меню</p>
				<div id="settings_home_block_style" style="margin-bottom: 15px;">
					<button id="navigation_ios1_style" class="OptionsCardButton" title="Выбрать" onclick="SetNavigationIOS('true')">Включить</button>
					<button id="navigation_ios2_style" class="OptionsCardButton" title="Выбрать" onclick="SetNavigationIOS('false')">Отключить</button>
				</div>
				<p class="settings_filter_p">*Нажмите для выбора</p>
			</div>

			<div class="OptionsCard">
				<span class="OptionsTitle">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 172 172">
						<path d="M37.625,21.5c-10.82086,0 -19.70833,8.88748 -19.70833,19.70833v89.58333c0,10.82086 8.88748,19.70833 19.70833,19.70833h100.33333c10.82086,0 19.70833,-8.88748 19.70833,-19.70833v-89.58333c0,-10.82086 -8.88748,-19.70833 -19.70833,-19.70833zM37.625,32.25h100.33333c5.01031,0 8.95833,3.94802 8.95833,8.95833v89.58333c0,5.01031 -3.94802,8.95833 -8.95833,8.95833h-100.33333c-5.01031,0 -8.95833,-3.94802 -8.95833,-8.95833v-89.58333c0,-5.01031 3.94802,-8.95833 8.95833,-8.95833zM39.41667,37.625c-1.978,0 -3.58333,1.60533 -3.58333,3.58333v3.58333c0,1.978 1.60533,3.58333 3.58333,3.58333h3.58333c1.978,0 3.58333,-1.60533 3.58333,-3.58333v-3.58333c0,-1.978 -1.60533,-3.58333 -3.58333,-3.58333zM132.58333,37.625c-1.978,0 -3.58333,1.60533 -3.58333,3.58333v3.58333c0,1.978 1.60533,3.58333 3.58333,3.58333h3.58333c1.978,0 3.58333,-1.60533 3.58333,-3.58333v-3.58333c0,-1.978 -1.60533,-3.58333 -3.58333,-3.58333zM73.45833,57.34033c-1.56551,0 -3.14873,0.40875 -4.55615,1.23877c-2.73828,1.61766 -4.40218,4.5444 -4.40218,7.71956v39.41667c0,3.16833 1.65562,6.08083 4.39518,7.69857c2.78828,1.65712 6.06285,1.69528 8.88135,0.14697l35.83333,-19.70833l0.007,-0.007c2.84101,-1.5674 4.63314,-4.57697 4.63314,-7.83854c0,-3.26157 -1.79196,-6.27799 -4.63314,-7.84554l-0.007,-0.007l-35.84033,-19.70833l-0.007,-0.007c-1.33999,-0.73238 -2.82433,-1.0988 -4.3042,-1.0988zM39.41667,59.125c-1.978,0 -3.58333,1.60533 -3.58333,3.58333v3.58333c0,1.978 1.60533,3.58333 3.58333,3.58333h3.58333c1.978,0 3.58333,-1.60533 3.58333,-3.58333v-3.58333c0,-1.978 -1.60533,-3.58333 -3.58333,-3.58333zM132.58333,59.125c-1.978,0 -3.58333,1.60533 -3.58333,3.58333v3.58333c0,1.978 1.60533,3.58333 3.58333,3.58333h3.58333c1.978,0 3.58333,-1.60533 3.58333,-3.58333v-3.58333c0,-1.978 -1.60533,-3.58333 -3.58333,-3.58333zM75.25,69.3221l30.32536,16.6779l-30.32536,16.6849zM39.41667,80.625c-1.978,0 -3.58333,1.60533 -3.58333,3.58333v3.58333c0,1.978 1.60533,3.58333 3.58333,3.58333h3.58333c1.978,0 3.58333,-1.60533 3.58333,-3.58333v-3.58333c0,-1.978 -1.60533,-3.58333 -3.58333,-3.58333zM132.58333,80.625c-1.978,0 -3.58333,1.60533 -3.58333,3.58333v3.58333c0,1.978 1.60533,3.58333 3.58333,3.58333h3.58333c1.978,0 3.58333,-1.60533 3.58333,-3.58333v-3.58333c0,-1.978 -1.60533,-3.58333 -3.58333,-3.58333zM39.41667,102.125c-1.978,0 -3.58333,1.60533 -3.58333,3.58333v3.58333c0,1.978 1.60533,3.58333 3.58333,3.58333h3.58333c1.978,0 3.58333,-1.60533 3.58333,-3.58333v-3.58333c0,-1.978 -1.60533,-3.58333 -3.58333,-3.58333zM132.58333,102.125c-1.978,0 -3.58333,1.60533 -3.58333,3.58333v3.58333c0,1.978 1.60533,3.58333 3.58333,3.58333h3.58333c1.978,0 3.58333,-1.60533 3.58333,-3.58333v-3.58333c0,-1.978 -1.60533,-3.58333 -3.58333,-3.58333zM39.41667,123.625c-1.978,0 -3.58333,1.60533 -3.58333,3.58333v3.58333c0,1.978 1.60533,3.58333 3.58333,3.58333h3.58333c1.978,0 3.58333,-1.60533 3.58333,-3.58333v-3.58333c0,-1.978 -1.60533,-3.58333 -3.58333,-3.58333zM132.58333,123.625c-1.978,0 -3.58333,1.60533 -3.58333,3.58333v3.58333c0,1.978 1.60533,3.58333 3.58333,3.58333h3.58333c1.978,0 3.58333,-1.60533 3.58333,-3.58333v-3.58333c0,-1.978 -1.60533,-3.58333 -3.58333,-3.58333z"></path>
					</svg>
					<h3>Настройки страницы плеера</h3>
				</span>
				<p class="settings_filter_p">Пропуск опенинга</p>
				<div id="settings_home_block_style" style="margin-bottom: 15px;">
					<button id="opening1_style" class="OptionsCardButton" title="Выбрать" onclick="SetOpening_style('1')">Автоматически</button>
					<button id="opening2_style" class="OptionsCardButton" title="Выбрать" onclick="SetOpening_style('0')">Отключить</button>
				</div>
				<hr>
				<p class="settings_filter_p">Нативный плеер iOS</p>
				<div id="settings_home_block_style" style="margin-bottom: 15px;">
					<button id="Player1_style" class="OptionsCardButton" title="Выбрать" onclick="SetPlayer_style('1')">Включить</button>
					<button id="Player2_style" class="OptionsCardButton" title="Выбрать" onclick="SetPlayer_style('2')">Отключить</button>
				</div>
				<p class="settings_filter_p">*Нажмите для выбора</p>
			</div>

			<div class="OptionsCard">
				<span class="OptionsTitle">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 172 172">
						<path d="M63.9751,14.27035c-1.60141,-0.06623 -3.14884,0.58559 -4.22022,1.77767l-35.12646,28.24674c-1.92796,0.98649 -3.07566,3.03358 -2.91146,5.19303l-7.12467,42.07617c-0.67473,1.73679 -0.40197,3.69911 0.72087,5.18604l21.34603,42.34212c0.57618,2.16685 2.43678,3.7485 4.66813,3.96826l41.78223,13.93441c0.86683,0.53964 1.86943,0.82125 2.89046,0.81185c1.02104,0.0094 2.02364,-0.2722 2.89046,-0.81185l41.97119,-13.9974c2.07237,-0.28721 3.78983,-1.75074 4.40218,-3.7513l21.03809,-42.07617c1.25028,-1.34443 1.72795,-3.23399 1.26676,-5.01107l-7.35563,-43.11198c-0.00746,-1.18463 -0.40604,-2.33362 -1.13379,-3.26839c-0.08659,-0.11322 -0.17764,-0.22295 -0.27295,-0.32894c-0.00698,-0.00702 -0.01398,-0.01402 -0.021,-0.021c-0.37968,-0.42183 -0.82376,-0.78088 -1.31575,-1.0638l-35.21745,-28.30973c-0.98412,-1.09751 -2.37576,-1.74273 -3.84928,-1.78467c-0.31851,-0.00725 -0.63704,0.01383 -0.95182,0.06299h-42.86702c-0.2016,-0.03254 -0.40489,-0.05357 -0.60889,-0.06299zM73.29036,25.08333h25.41927l-12.70964,21.11507zM62.3584,27.74984l13.31152,22.12289l-35.22445,-4.50716zM109.6486,27.74984l21.90593,17.61572l-35.22445,4.50716zM38.7028,55.97559l39.07373,5.00407l-14.76725,29.31755zM133.22722,55.98958l-24.36247,34.05566l-14.64127,-29.06559zM141.63965,62.70134l4.50716,26.37809l-26.44808,4.2972zM30.36035,62.81331l21.61898,30.51432l-26.07015,-4.24121zM86,68.55924l13.48649,26.75602h-26.97298zM29.25456,100.5223l25.89518,4.20622l-12.84261,21.68197zM142.59147,100.5433l-12.95459,25.90918l-13.05257,-21.67497zM71.94661,106.06527h28.10677l-14.05339,32.63493zM63.02328,112.51807l13.29752,30.87825l-26.37809,-8.79036zM108.86474,112.78402l13.14356,21.83594l-26.3291,8.77637z"></path>
					</svg>
					<h3>Настройки зеркал</h3>
				</span>
				<p class="settings_filter_p">Режим</p>
				<div id="settings_home_block_style" style="margin-bottom: 15px;">
					<button id="MirrorModeOff" class="OptionsCardButton" title="Выбрать" onclick="SetMirrorMode('false')">Отключено</button>
					<button id="MirrorModeOn" class="OptionsCardButton" title="Выбрать" onclick="SetMirrorMode('true')">Автоматически</button>
				</div>
				<!--
				<hr>
				<p class="settings_filter_p">Своё зеркало</p>
				<br>
				<form name="formMirror" class="formMirror">
					<div class="blockMirror">
						<label>API</label><input required type="text" name="GetMirrorAPI" id="GetMirrorAPI" class="MirrorBox" placeholder="https://api.sdev.xyz/v2/">
					</div>
					<br>
					<div class="blockMirror">
						<label>Постеры</label><input required type="text" name="MirrorPosters" id="MirrorPosters" class="MirrorBox" placeholder="https://tb2og.anilib.top">
					</div>
					<br>
					<button class="OptionsCardButton" title="Выбрать" onclick="SetMirrorString()" data-state="Select">Сохранить</button>
				</form>
				-->
				<p class="settings_filter_p">*Нажмите для выбора</p>
			</div>

			<div class="OptionsCard">
				<span class="OptionsTitle">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 172 172">
						<path d="M37.625,21.5c-0.67668,0 -1.34927,0.03802 -2.00863,0.10498c-9.26222,0.94396 -16.65077,8.33251 -17.59473,17.59473v0.007c-0.06696,0.65935 -0.10498,1.32494 -0.10498,2.00163v7.16667v82.41667c0,10.82086 8.88748,19.70833 19.70833,19.70833h96.75c10.82086,0 19.70833,-8.88748 19.70833,-19.70833v-82.41667v-7.16667c0,-0.6763 -0.03725,-1.34913 -0.10498,-2.00863c-0.94396,-9.26222 -8.33951,-16.65077 -17.60172,-17.59473c-0.6595,-0.06774 -1.32532,-0.10498 -2.00163,-0.10498zM37.625,32.25c2.967,0 5.375,2.408 5.375,5.375c0,2.967 -2.408,5.375 -5.375,5.375c-2.967,0 -5.375,-2.408 -5.375,-5.375c0,-2.967 2.408,-5.375 5.375,-5.375zM55.54167,32.25c2.967,0 5.375,2.408 5.375,5.375c0,2.967 -2.408,5.375 -5.375,5.375c-2.967,0 -5.375,-2.408 -5.375,-5.375c0,-2.967 2.408,-5.375 5.375,-5.375zM77.04167,32.25h57.33333c2.967,0 5.375,2.408 5.375,5.375c0,2.967 -2.408,5.375 -5.375,5.375h-57.33333c-2.967,0 -5.375,-2.408 -5.375,-5.375c0,-2.967 2.408,-5.375 5.375,-5.375zM28.66667,53.75h114.66667v77.04167c0,5.01031 -3.94802,8.95833 -8.95833,8.95833h-96.75c-5.01031,0 -8.95833,-3.94802 -8.95833,-8.95833zM66.29167,68.08333c-14.82067,0 -26.875,12.05433 -26.875,26.875c0,14.82067 12.05433,26.875 26.875,26.875h7.16667c2.97058,0 5.375,-2.40442 5.375,-5.375c0,-2.97058 -2.40442,-5.375 -5.375,-5.375h-7.16667c-8.89025,0 -16.125,-7.23475 -16.125,-16.125c0,-8.89025 7.23475,-16.125 16.125,-16.125h7.16667c2.97058,0 5.375,-2.40442 5.375,-5.375c0,-2.97058 -2.40442,-5.375 -5.375,-5.375zM98.54167,68.08333c-2.97058,0 -5.375,2.40442 -5.375,5.375c0,2.97058 2.40442,5.375 5.375,5.375h7.16667c8.89025,0 16.125,7.23475 16.125,16.125c0,8.89025 -7.23475,16.125 -16.125,16.125h-7.16667c-2.97058,0 -5.375,2.40442 -5.375,5.375c0,2.97058 2.40442,5.375 5.375,5.375h7.16667c14.82067,0 26.875,-12.05433 26.875,-26.875c0,-14.82067 -12.05433,-26.875 -26.875,-26.875zM66.29167,89.58333c-2.97058,0 -5.375,2.40442 -5.375,5.375c0,2.97058 2.40442,5.375 5.375,5.375h39.41667c2.97058,0 5.375,-2.40442 5.375,-5.375c0,-2.97058 -2.40442,-5.375 -5.375,-5.375z"></path>
					</svg>
					<h3>Полезное</h3>
				</span>
				<p class="settings_filter_p">Ссылки</p>
				<div id="settings_home_block_style" style="margin: 15px 0;">
					<a href="https://rozenrod.com" class="OptionsCardButton">Разработчик</a>
					<a href="game" class="OptionsCardButton">Встроенная игра</a>
				</div>
				<hr>
				<p class="settings_filter_p">Версия приложения</p>
				<div id="settings_home_block_style" style="margin: 15px 0;">
					<a href="buildHistory" class="OptionsCardButton"><span id="app_version" title="Код обновления">app version</span></a>
				</div>
				<p class="settings_filter_p">*Нажмите для выбора</p>
			</div>
		</div>

	</div>
  `;

	document.getElementById('app_version').innerHTML = localStorage.getItem('mess_update');


	const form_login = document.querySelector('#form_login');
  form_login.addEventListener('submit', evt => {
      evt.preventDefault();
      fetch('https://www.anilibria.tv/public/login.php', {
          method: 'POST',
          body: new FormData(form_login)
      })
      .then(function (response) {
        return Promise.resolve(response)
      })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log(data);
        if (data['key'] == 'success') {
          localStorage.setItem('PHPSESSID', data['sessionId']);
          document.getElementById('login_profile').setAttribute("style", "");
          document.getElementById('logout_profile').setAttribute("style", "display:none;");
          load_profile(data['sessionId'])
        } else {
          document.getElementById('error_mes').setAttribute("style", `display:block;`);
        }
      })
      .catch(function (error) {
        console.log('error', error)
      })
  });


	LoadOptionPHPSESSID();
	GetThemeEditStyle();
	GetMirrorMode();
	// GetMirrorString();
	GetOpening_style();
	GetPlayer_style();
	GetPostersStyle();
	GetBackToTopStyle();
	GetNavigationIOS();


	appWidth();
  Scroll_to_top();
}

// Функция получения PHPSESSID из локального хранилища
function LoadOptionPHPSESSID(){
	MySessID = localStorage.getItem('PHPSESSID');
  if (!MySessID || MySessID == 'undefined') {
  
		document.getElementById('login_profile').setAttribute("style", "display:none;");
    document.getElementById('logout_profile').setAttribute("style", "");
		preloader_none();
  } else {
		
		document.getElementById('login_profile').setAttribute("style", "");
    document.getElementById('logout_profile').setAttribute("style", "display:none;");
		load_profile(MySessID);
		preloader_none();
  }
}

function load_profile(sessionId) {
  var url = config["titels_api"]+"getUser?session="+sessionId;
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
  .then(function (data) {
    var my_login = data['login'];
    var my_nickname = data['nickname'];
    var my_email = data['email'];
    var my_avatar_original = data['avatar_original'];
    var my_avatar_thumbnail = data['avatar_thumbnail'];
    var my_vk_id = data['vk_id'];
    var my_patreon_id = data['patreon_id'];

		localStorage.setItem('myLogin', my_login);

    if (my_login) {document.getElementById('my_login').innerHTML = my_login;}
    if (my_nickname) {document.getElementById('my_nickname').innerHTML = my_nickname;}
    if (my_email) {document.getElementById('my_email').innerHTML = my_email;}
    if (my_vk_id) {document.getElementById('my_vk_id').innerHTML = my_vk_id;}
    if (my_patreon_id) {document.getElementById('my_patreon_id').innerHTML = my_patreon_id;}

    if (my_avatar_original) {
      document.getElementById('my_profile_img').setAttribute("style", "background-image: url('https://www.anilibria.tv/"+my_avatar_original+"');background-position: center;background-size: cover;");
    } else {
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      if (getRandomInt(4) == 1) {
        document.getElementById('my_profile_img').setAttribute("style", "background-image: url('img/profile/my_profile_img.webp');background-position: center;background-size: cover;");
      } else if (getRandomInt(4) == 2) {
        document.getElementById('my_profile_img').setAttribute("style", "background-image: url('img/profile/my_profile_img_2.webp');background-position: center;background-size: cover;");
      } else if (getRandomInt(4) == 3) {
        document.getElementById('my_profile_img').setAttribute("style", "background-image: url('img/profile/my_profile_img_3.webp');background-position: center;background-size: cover;");
      } else {
        document.getElementById('my_profile_img').setAttribute("style", "background-image: url('img/profile/my_profile_img_1.webp');background-position: center;background-size: cover;");
      }
    }
  })
}

function logout() {
  localStorage.setItem('PHPSESSID', '');
  document.getElementById('login_profile').setAttribute("style", "display:none;");
  document.getElementById('logout_profile').setAttribute("style", "");
}


function GetThemeEditStyle(){
	theme = localStorage.getItem('my_theme');

	if (theme == 'auto') {
  	document.getElementById('Theme1_style').dataset.state = 'Select';
 		document.getElementById('Theme2_style').dataset.state = '';
  	document.getElementById('Theme3_style').dataset.state = '';
	} else if (theme == 'theme1') {
  	document.getElementById('Theme1_style').dataset.state = '';
 		document.getElementById('Theme2_style').dataset.state = 'Select';
  	document.getElementById('Theme3_style').dataset.state = '';
	} else if (theme == 'theme2') {
  	document.getElementById('Theme1_style').dataset.state = '';
 		document.getElementById('Theme2_style').dataset.state = '';
  	document.getElementById('Theme3_style').dataset.state = 'Select';
	}
}
function SetThemeEditStyle(theme){
	if (theme == 'auto') {
		localStorage.setItem('my_theme', 'auto');
  	document.getElementById('Theme1_style').dataset.state = 'Select';
 		document.getElementById('Theme2_style').dataset.state = '';
  	document.getElementById('Theme3_style').dataset.state = '';
		themeSelector('css/auto.css')
		document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: light)"]').setAttribute("content", "#fbfbfb");
		document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: dark)"]').setAttribute("content", "#1c1c19");
	} else if (theme == 'theme1') {
		localStorage.setItem('my_theme', 'theme1');
  	document.getElementById('Theme1_style').dataset.state = '';
 		document.getElementById('Theme2_style').dataset.state = 'Select';
  	document.getElementById('Theme3_style').dataset.state = '';
		themeSelector('css/theme1.css')
		document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: light)"]').setAttribute("content", "#fbfbfb");
		document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: dark)"]').setAttribute("content", "#fbfbfb");
	} else if (theme == 'theme2') {
		localStorage.setItem('my_theme', 'theme2');
  	document.getElementById('Theme1_style').dataset.state = '';
 		document.getElementById('Theme2_style').dataset.state = '';
  	document.getElementById('Theme3_style').dataset.state = 'Select';
		themeSelector('css/theme2.css')

		document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: light)"]').setAttribute("content", "#1c1c19");
		document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: dark)"]').setAttribute("content", "#1c1c19");
	}
}
function themeSelector(themeHref){
	if(document.querySelector('link[href="css/theme1.css"]') != null){
		document.querySelector('link[href="css/theme1.css"]').href = themeHref;
	} else if (document.querySelector('link[href="css/theme2.css"]') != null) {
		document.querySelector('link[href="css/theme2.css"]').href = themeHref;
	} else {
		document.querySelector('link[href="css/auto.css"]').href = themeHref;
	}
}

function GetPostersStyle(){
	postersMode = localStorage.getItem('postersMode');

	if (postersMode == 'webp') {
  	document.getElementById('Posters1_style').dataset.state = '';
 		document.getElementById('Posters2_style').dataset.state = 'Select';
	} else {
  	document.getElementById('Posters1_style').dataset.state = 'Select';
  	document.getElementById('Posters2_style').dataset.state = '';
	}
}
function SetPostersStyle(mode){
	if (mode == 'original') {
		localStorage.setItem('postersMode', 'original');
		document.getElementById('Posters1_style').dataset.state = 'Select';
  	document.getElementById('Posters2_style').dataset.state = '';
	} else if (mode == 'webp') {
		localStorage.setItem('postersMode', 'webp');
  	document.getElementById('Posters1_style').dataset.state = '';
 		document.getElementById('Posters2_style').dataset.state = 'Select';
	}
}

function GetBackToTopStyle(){
	backToTopMode = localStorage.getItem('backToTop');

	if (backToTopMode == 'false') {
		document.getElementById('backToTop1_style').dataset.state = '';
		document.getElementById('backToTop2_style').dataset.state = 'Select';
	} else {
		document.getElementById('backToTop1_style').dataset.state = 'Select';
		document.getElementById('backToTop2_style').dataset.state = '';
	}
}
function SetBackToTopStyle(mode){
	if (mode == 'true') {
		localStorage.setItem('backToTop', 'true');
		document.getElementById('backToTop1_style').dataset.state = 'Select';
		document.getElementById('backToTop2_style').dataset.state = '';
	} else if (mode == 'false') {
		localStorage.setItem('backToTop', 'false');
		document.getElementById('backToTop1_style').dataset.state = '';
		document.getElementById('backToTop2_style').dataset.state = 'Select';
	}
}

function GetNavigationIOS(){
	backToTopMode = localStorage.getItem('iOS_nav');

	if (backToTopMode == 'true') {
		document.getElementById('navigation_ios1_style').dataset.state = 'Select';
		document.getElementById('navigation_ios2_style').dataset.state = '';
	} else {
		document.getElementById('navigation_ios1_style').dataset.state = '';
		document.getElementById('navigation_ios2_style').dataset.state = 'Select';
	}
}
function SetNavigationIOS(mode){
	if (mode == 'true') {
		localStorage.setItem('iOS_nav', 'true');
		document.getElementById('navigation_ios1_style').dataset.state = 'Select';
		document.getElementById('navigation_ios2_style').dataset.state = '';
		document.getElementById('navigation_block').dataset.state = 'iOS';
	} else if (mode == 'false') {
		localStorage.setItem('iOS_nav', 'false');
		document.getElementById('navigation_ios1_style').dataset.state = '';
		document.getElementById('navigation_ios2_style').dataset.state = 'Select';
		document.getElementById('navigation_block').dataset.state = '';
	}
}

function GetMirrorMode(){
	mode = localStorage.getItem('GetMirror');

	if(mode == 'false'){
		localStorage.setItem('GetMirror', 'false');
		document.getElementById('MirrorModeOff').dataset.state = 'Select';
		document.getElementById('MirrorModeOn').dataset.state = '';
	} else if(mode == 'true'){
		localStorage.setItem('GetMirror', 'true');
		document.getElementById('MirrorModeOff').dataset.state = '';
		document.getElementById('MirrorModeOn').dataset.state = 'Select';
	}
}
function SetMirrorMode(mode){
	if(mode == 'false'){
		localStorage.setItem('GetMirror', 'false');
		document.getElementById('MirrorModeOff').dataset.state = 'Select';
		document.getElementById('MirrorModeOn').dataset.state = '';
	} else if(mode == 'true'){
		localStorage.setItem('GetMirror', 'true');
		document.getElementById('MirrorModeOff').dataset.state = '';
		document.getElementById('MirrorModeOn').dataset.state = 'Select';
	}
	location.reload();
}

// function GetMirrorString(){
// 	var GetMirrorAPI = localStorage.getItem('GetMirrorAPI');
// 	var MirrorPosters = localStorage.getItem('GetMirrorPosters');

// 	document.getElementById('GetMirrorAPI').value = GetMirrorAPI;
// 	document.getElementById('MirrorPosters').value = MirrorPosters;
// }
// function SetMirrorString(){

// 	var MirrorAPI = document.getElementById('GetMirrorAPI').value;
// 	var MirrorPosters = document.getElementById('MirrorPosters').value;

// 	localStorage.setItem('GetMirrorAPI', MirrorAPI);
// 	localStorage.setItem('GetMirrorPosters', MirrorPosters);
// }

function GetOpening_style(){
	var my_player_style = localStorage.getItem('my_player_style');
  if (!my_player_style) {
    localStorage.setItem('my_player_style', '2');
    document.getElementById('Player2_style').dataset.state = 'Select';
    document.getElementById('Player1_style').dataset.state = '';
  } else {
    if (my_player_style == "1") {
      document.getElementById('Player1_style').dataset.state = 'Select';
      document.getElementById('Player2_style').dataset.state = '';
    } else if (my_player_style == "2") {
      document.getElementById('Player1_style').dataset.state = '';
      document.getElementById('Player2_style').dataset.state = 'Select';
    }
  }
}
function SetOpening_style(style) {
  if (style == "1") {
    localStorage.setItem('my_skips_opening', '1');
    document.getElementById('opening1_style').dataset.state = 'Select';
    document.getElementById('opening2_style').dataset.state = '';
  } else if (style == "0") {
    localStorage.setItem('my_skips_opening', '0');
    document.getElementById('opening1_style').dataset.state = '';
    document.getElementById('opening2_style').dataset.state = 'Select';
  }
}

function GetPlayer_style(){
	var my_skips_opening = localStorage.getItem('my_skips_opening');
  if (!my_skips_opening) {
    localStorage.setItem('my_skips_opening', '0');
    document.getElementById('opening2_style').dataset.state = 'Select';
    document.getElementById('opening1_style').dataset.state = '';
  } else {
    if (my_skips_opening == "1") {
      document.getElementById('opening1_style').dataset.state = 'Select';
      document.getElementById('opening2_style').dataset.state = '';
    } else {
      document.getElementById('opening1_style').dataset.state = '';
      document.getElementById('opening2_style').dataset.state = 'Select';
    }
  }
}
function SetPlayer_style(style) {
  if (style == "1") {
    localStorage.setItem('my_player_style', '1');
    document.getElementById('Player1_style').dataset.state = 'Select';
    document.getElementById('Player2_style').dataset.state = '';
  } else if (style == "2") {
    localStorage.setItem('my_player_style', '2');
    document.getElementById('Player1_style').dataset.state = '';
    document.getElementById('Player2_style').dataset.state = 'Select';
  }
}