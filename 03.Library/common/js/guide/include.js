var include = {
	head : function(){
		document.write('<link rel="stylesheet" href="/common/css/import.css" type="text/css">');
		document.write('<script type="text/javascript" src="/common/js/libs/jquery-3.3.1.min.js"></script>');
		document.write('<script type="text/javascript" src="/common/js/standard.js"></script>');
		document.write('<script type="text/javascript" src="/common/js/guide/guide.js"></script>');
	},
	header : function(){
		document.write('	<header id="g-header">');
		document.write('		<div class="g-header-inner">');
		document.write('			<button type="button" class="g-btn-anb"><span>전체메뉴</span></button>');
		document.write('			<span class="g-location">Pages</span>');
		document.write('		</div>');
		document.write('	</header>');
	},
	aside : function(){
		var baseURL = '/examples/';
		document.write('	<aside id="g-aside">');
		document.write('		<div class="g-js-scroll g-aside-scroll">');
		document.write('			<h1 class="g-logo">STD UI</h1>');
		document.write('			<nav class="g-lnb">');
		document.write('			    <!-- Globals -->');
		document.write('				<div class="g-lnb-group">');
		document.write('					<h2 class="g-lnb-tit">Globals</h2>');
		document.write('					<ul class="g-depth1">');
		document.write('						<li><a href="'+baseURL+'globals_codeset.html">Codeset</a></li>');
		document.write('						<li><a href="'+baseURL+'globals_general.html">General</a></li>');
		document.write('						<li><a href="'+baseURL+'globals_layout.html">Layout</a></li>');
		document.write('					</ul>');
		document.write('				</div>');
		document.write('			    <!-- //Globals -->');
		document.write('				<!-- Elements -->');
		document.write('				<div class="g-lnb-group">');
		document.write('					<h2 class="g-lnb-tit">Elements</h2>');
		document.write('					<ul class="g-depth1">');
		document.write('						<li><a href="'+baseURL+'elements_forms.html">Forms</a></li>');
		document.write('						<li><a href="'+baseURL+'elements_buttons.html">Buttons</a></li>');
		document.write('						<li><a href="'+baseURL+'elements_icons.html">Icons</a></li>');
		document.write('						<li><a href="'+baseURL+'elements_label.html">Label</a></li>');
		document.write('						<li><a href="'+baseURL+'elements_badge.html">Badge</a></li>');
		document.write('						<li><a href="'+baseURL+'elements_bullet.html">Bullet</a></li>');
		document.write('						<li><a href="'+baseURL+'elements_list.html">List</a></li>');
		document.write('						<li><a href="'+baseURL+'elements_define.html">Define</a></li>');
		document.write('						<li><a href="'+baseURL+'elements_box.html">Box</a></li>');
		document.write('						<li><a href="'+baseURL+'elements_step.html">Step</a></li>');
		document.write('						<li><a href="'+baseURL+'elements_table.html">Table</a></li>');
		document.write('						<li><a href="'+baseURL+'elements_pagination.html">Pagination</a></li>');
		document.write('					</ul>');
		document.write('				</div>');
		document.write('				<!-- //Elements -->');
		document.write('				<!-- Modules -->');
		document.write('				<div class="g-lnb-group">');
		document.write('					<h2 class="g-lnb-tit">Modules</h2>');
		document.write('					<ul class="g-depth1">');
		document.write('						<li><a href="'+baseURL+'modules_tab.html">Tab</a></li>');
		document.write('						<li><a href="'+baseURL+'modules_accordion.html">Accordion</a></li>');
		document.write('						<li><a href="'+baseURL+'modules_folder.html">Folder</a></li>');
		document.write('						<li><a href="'+baseURL+'modules_tooltip.html">Tooltip</a></li>');
		document.write('						<li><a href="'+baseURL+'modules_dropdown.html">Dropdown</a></li>');
		document.write('						<li><a href="'+baseURL+'modules_modal.html">Modal</a></li>');
		document.write('						<li><a href="'+baseURL+'modules_progress.html">Progress</a></li>');
		document.write('						<li><a href="'+baseURL+'modules_sticky.html">Sticky</a></li>');
		document.write('						<li><a href="'+baseURL+'modules_spyscroll.html">Spy Scroll</a></li>');
		document.write('						<li><a href="'+baseURL+'modules_customscroll.html">Custom Scroll</a></li>');
		document.write('					</ul>');
		document.write('				</div>');
		document.write('				<!-- //Modules -->');
		document.write('				<!-- Behavior -->');
		document.write('				<div class="g-lnb-group">');
		document.write('					<h2 class="g-lnb-tit">API</h2>');
		document.write('					<ul class="g-depth1">');
		document.write('						<li><a href="'+baseURL+'api_youtube.html">Youtube</a></li>');
		document.write('					</ul>');
		document.write('				</div>');
		document.write('				<!-- //Behavior -->');
		document.write('			</nav>');
		document.write('		</div>');
		document.write('	</aside>');
	},
	quick : function(){

	},
	footer : function(){
		document.write('	<div class="g-mask"></div>');
	}
}