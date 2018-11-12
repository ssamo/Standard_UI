var include = {
	meta : function(){
		document.write('<title>Project Guide</title>');
		document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge" />');
	},
	head : function(){
		document.write('<!-- Front -->');
		document.write('<link href="/common/css/import.css" rel="stylesheet" />');
		document.write('<script src="/common/js/libs/jquery-3.3.1.min.js"></script>');
		document.write('<script src="/common/js/pub/import.js"></script>');
		document.write('<!-- Guide -->');
		document.write('<link href="/WSG/common/css/guide.css" rel="stylesheet" />');
		document.write('<script src="/WSG/common/js/guide.js"></script>');
	},
	header : function(){
		document.write('	<header id="g-header">');
		document.write('		<div class="g-header-inner">');
		document.write('			<button type="button" class="g-logo"><span>WSG</span></button>');
		document.write('			<button type="button" class="g-btn-anb"><span>전체메뉴</span></button>');
		document.write('			<span class="g-location">Pages</span>');
		document.write('		</div>');
		document.write('	</header>');
	},
	aside : function(){
		document.write('	<aside id="g-aside">');
		document.write('		<div class="g-js-scroll g-aside-scroll">');
		document.write('			<h1 class="g-logo">WSG</h1>');
		document.write('			<nav class="g-lnb">');
		document.write('			    <!-- Globals -->');
		document.write('				<div class="g-lnb-group">');
		document.write('					<h2 class="g-lnb-tit">Globals</h2>');
		document.write('					<ul class="g-depth1">');
		document.write('						<li><a href="#">Codeset</a></li>');
		document.write('						<li><a href="#">General</a></li>');
		document.write('						<li><a href="#">Layout</a></li>');
		document.write('					</ul>');
		document.write('				</div>');
		document.write('			    <!-- //Globals -->');
		document.write('				<!-- Elements -->');
		document.write('				<div class="g-lnb-group">');
		document.write('					<h2 class="g-lnb-tit">Elements</h2>');
		document.write('					<ul class="g-depth1">');
		document.write('						<li><a href="#">Forms</a></li>');
		document.write('						<li><a href="#">Buttons</a></li>');
		document.write('						<li><a href="#">Icons</a></li>');
		document.write('						<li><a href="#">Label</a></li>');
		document.write('						<li><a href="#">Badge</a></li>');
		document.write('						<li><a href="#">Bullet</a></li>');
		document.write('						<li><a href="#">List</a></li>');
		document.write('						<li><a href="#">Define</a></li>');
		document.write('						<li><a href="#">Box</a></li>');
		document.write('						<li><a href="#">Step</a></li>');
		document.write('						<li><a href="#">Table</a></li>');
		document.write('						<li><a href="#">Pagination</a></li>');
		document.write('					</ul>');
		document.write('				</div>');
		document.write('				<!-- //Elements -->');
		document.write('				<!-- Modules -->');
		document.write('				<div class="g-lnb-group">');
		document.write('					<h2 class="g-lnb-tit">Modules</h2>');
		document.write('					<ul class="g-depth1">');
		document.write('						<li><a href="#">Tab</a></li>');
		document.write('						<li><a href="#">Accordion</a></li>');
		document.write('						<li><a href="#">Folder</a></li>');
		document.write('						<li><a href="#">Tooltip</a></li>');
		document.write('						<li><a href="#">Dropdown</a></li>');
		document.write('						<li><a href="#">Modal</a></li>');
		document.write('						<li><a href="#">Progress</a></li>');
		document.write('						<li><a href="#">Sticky</a></li>');
		document.write('						<li><a href="#">Spy Scroll</a></li>');
		document.write('						<li><a href="#">Custom Scroll</a></li>');
		document.write('					</ul>');
		document.write('				</div>');
		document.write('				<!-- //Modules -->');
		document.write('				<!-- Behavior -->');
		document.write('				<div class="g-lnb-group">');
		document.write('					<h2 class="g-lnb-tit">Behavior</h2>');
		document.write('					<ul class="g-depth1">');
		document.write('						<li><a href="#">Youtube</a></li>');
		document.write('					</ul>');
		document.write('				</div>');
		document.write('				<!-- //Behavior -->');
		document.write('			</nav>');
		document.write('		</div>');
		document.write('	</aside>');
	},
	quick : function(){},
	footer : function(){
		document.write('	<div class="g-mask"></div>');
	},
}