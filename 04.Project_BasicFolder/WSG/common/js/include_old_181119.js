var gBaseURL = {
	menu0 : '/WSG/00_prototype/',
	menu1 : '/WSG/01_convention/',
	menu2 : '/WSG/02_snippet/',
	menu3 : '/WSG/03_ia/',
	menu4 : '/WSG/04_history/',
}

var include = {
	meta : function(){
		document.write('<title>Project Guide</title>');
		document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge" />');
	},
	head : function(){
		document.write('<!-- Front -->');
		document.write('<link href="/common/css/import.css" rel="stylesheet" />');
		document.write('<script src="/common/js/libs/jquery-3.3.1.min.js"></script>');
		document.write('<script src="/common/js/pub/pub_import.js"></script>');
		document.write('<!-- Guide -->');
		document.write('<link href="/WSG/common/css/import.css" rel="stylesheet" />');
		document.write('<script src="/WSG/common/js/import.js"></script>');
	},
	header : function(){
		document.write('	<header id="g-header">');
		document.write('		<div class="g-header-inner">');
		document.write('			<button type="button" class="g-btn-aside"><span>Menu</span></button>');
		document.write('			<div class="g-breadcrumb">');
		document.write('				<p></p>');
		document.write('			</div>');
		document.write('		</div>');
		document.write('	</header>');
	},
	aside : {
		init : function(){
			this.opneHTML();
			this.menu1();
			this.menu2();
			this.menu3();
			this.menu4();
			this.closeHTML();
		},
		opneHTML : function(){
			document.write('	<aside id="g-aside">');
			document.write('		<div class="g-js-scroll g-aside-scroll">');
			document.write('			<h1 class="g-logo"><a href="/"><span class="g-symbol">Standard UI</span></a></h1>');
			document.write('			<nav class="g-lnb">');
			document.write('				<ul>');
		},
		closeHTML : function(){
			document.write('				</ul>');
			document.write('			</nav>');
			document.write('		</div>');
			document.write('	</aside>');
		},
		menu1 : function(){
			var baseURL = gBaseURL.menu1;
			document.write('					<li><a href="'+baseURL+'guide_rule.html">퍼블리싱규칙</a></li>');
			//document.write('						<nav class="g-snb">');
			//document.write('							<div class="g-snb-group">');
			//document.write('								<ul class="g-depth1">');
			//document.write('									<li><a href="'+baseURL+'guide_rule.html">규칙가이드</a></li>');
			//document.write('									<li><a href="'+baseURL+'guide_design.html">설계가이드</a></li>');
			//document.write('								</ul>');
			//document.write('							</div>');
			//document.write('						</nav>');
			//document.write('					</li>');
		},
		menu2 : function(){
			var baseURL = gBaseURL.menu2;
			document.write('					<li><a href="'+baseURL+'globals_codeset.html">스타일가이드</a>');
			document.write('						<nav class="g-snb">');
			document.write('						    <!-- Globals -->');
			document.write('							<div class="g-snb-group">');
			document.write('								<p class="g-snb-tit">Globals</p>');
			document.write('								<ul class="g-depth1">');
			document.write('									<li><a href="'+baseURL+'globals_codeset.html">Codeset</a></li>');
			document.write('									<li><a href="'+baseURL+'globals_general.html">General</a></li>');
			document.write('									<li><a href="'+baseURL+'globals_layout.html">Layout</a></li>');
			document.write('								</ul>');
			document.write('							</div>');
			document.write('						    <!-- //Globals -->');
			document.write('							<!-- Elements -->');
			document.write('							<div class="g-snb-group">');
			document.write('								<p class="g-snb-tit">Elements</p>');
			document.write('								<ul class="g-depth1">');
			document.write('									<li><a href="'+baseURL+'elements_forms.html">Forms</a></li>');
			document.write('									<li><a href="'+baseURL+'elements_buttons.html">Buttons</a></li>');
			document.write('									<li><a href="'+baseURL+'elements_icons.html">Icons</a></li>');
			document.write('									<li><a href="'+baseURL+'elements_label.html">Label</a></li>');
			document.write('									<li><a href="'+baseURL+'elements_badge.html">Badge</a></li>');
			document.write('									<li><a href="'+baseURL+'elements_bullet.html">Bullet</a></li>');
			document.write('									<li><a href="'+baseURL+'elements_list.html">List</a></li>');
			document.write('									<li><a href="'+baseURL+'elements_define.html">Define</a></li>');
			document.write('									<li><a href="'+baseURL+'elements_box.html">Box</a></li>');
			document.write('									<li><a href="'+baseURL+'elements_step.html">Step</a></li>');
			document.write('									<li><a href="'+baseURL+'elements_table.html">Table</a></li>');
			document.write('									<li><a href="'+baseURL+'elements_pagination.html">Pagination</a></li>');
			document.write('								</ul>');
			document.write('							</div>');
			document.write('							<!-- //Elements -->');
			document.write('							<!-- Modules -->');
			document.write('							<div class="g-snb-group">');
			document.write('								<p class="g-snb-tit">Modules</p>');
			document.write('								<ul class="g-depth1">');
			document.write('									<li><a href="'+baseURL+'modules_tab.html">Tab</a></li>');
			document.write('									<li><a href="'+baseURL+'modules_accordion.html">Accordion</a></li>');
			document.write('									<li><a href="'+baseURL+'modules_folder.html">Folder</a></li>');
			document.write('									<li><a href="'+baseURL+'modules_tooltip.html">Tooltip</a></li>');
			document.write('									<li><a href="'+baseURL+'modules_dropdown.html">Dropdown</a></li>');
			document.write('									<li><a href="'+baseURL+'modules_modal.html">Modal</a></li>');
			document.write('									<li><a href="'+baseURL+'modules_progress.html">Progress</a></li>');
			document.write('									<li><a href="'+baseURL+'modules_sticky.html">Sticky</a></li>');
			document.write('									<li><a href="'+baseURL+'modules_spyscroll.html">Spy Scroll</a></li>');
			document.write('									<li><a href="'+baseURL+'modules_customscroll.html">Custom Scroll</a></li>');
			document.write('								</ul>');
			document.write('							</div>');
			document.write('							<!-- //Modules -->');
			document.write('							<!-- Behavior -->');
			document.write('							<div class="g-snb-group">');
			document.write('								<p class="g-snb-tit">API</p>');
			document.write('								<ul class="g-depth1">');
			document.write('									<li><a href="'+baseURL+'api_youtube.html">Youtube</a></li>');
			document.write('								</ul>');
			document.write('							</div>');
			document.write('							<!-- //Behavior -->');
			document.write('						</nav>');
			document.write('					</li>');
		},
		//현황판은 Aside 사용하지 않음.
		menu3 : function(){
			var baseURL = gBaseURL.menu3;
			document.write('					<li><a href="'+baseURL+'index.html">현황판</a></li>');
		},

		//History
		menu4 : function(){
			var baseURL = gBaseURL.menu4;
			document.write('					<li><a href="'+baseURL+'index.html">웹접근성</a>');
			document.write('						<nav class="g-snb">');
			document.write('							<div class="g-snb-group">');
			document.write('								<p class="g-snb-tit">Globals</p>');
			document.write('								<ul class="g-depth1">');
			document.write('									<li><a href="'+baseURL+'index.html">Codeset</a></li>');
			document.write('								</ul>');
			document.write('							</div>');
			document.write('						</nav>');
			document.write('					</li>');
		},
	},
	quick : {
		init : function(){
			this.opneHTML();
			this.closeHTML();
		},
		opneHTML : function(){
			document.write('	<aside id="g-quick">');
			document.write('		<div class="g-js-scroll g-quick-scroll">');
			document.write('			<nav class="g-qnb">');
		},
		closeHTML : function(){
			document.write('			</nav>');
			document.write('		</div>');
			document.write('	</aside>');
		},
	},
	footer : function(){
		document.write('	<a href="#g-wrap" class="g-top" data-role="spy-scroll">TOP</a>');
		document.write('	<div class="g-mask"></div>');
	},
}