document.write('<link href="/codeview/styles/shCoreDefaultWhite.css" rel="stylesheet" />');
document.write('<script src="/codeview/scripts/shCore.js"></script>');
document.write('<script src="/codeview/scripts/shAutoLoader.js"></script>');
document.write('<script src="/codeview/scripts/shBrushjScript.js"></script>');
document.write('<script src="/codeview/scripts/shBrushXml.js"></script>');
document.write('<script src="/codeview/scripts/shBrushCss.js"></script>');
document.write('<script>SyntaxHighlighter.all();</script>');

var gCom = {
	init : function(){
		console.log('gCom.init()');
		this.gAside.init();
	},
	gAside : {
		asideEl : '#g-aside',
		anbBtnEl : '.g-btn-anb',
		maskEl : '.g-mask',
		asideWid : null,
		init : function(){
			this.asideWid = $(this.asideEl).width();

			//펼치기
			$(this.anbBtnEl).not('.is-clickEvent').on('click', function(e){
				$('body').toggleClass('is-aside-opened');
			}).addClass('is-clickEvent');

			//숨기기
			$(this.maskEl).not('.is-clickEvent').on('click', function(e){
				$('body').removeClass('is-aside-opened');
			}).addClass('is-clickEvent');
		},
	}
}

var gUI = {
	init : function(){
		console.log('gUI.init()');

		if ($('.g-tab-codeview').length){
			gUI.tabCodeview.init();
		}

		//mScroll
		if ($('.g-js-scroll').length){
			ut.setScriptLoader('/common/js/plugins/jquery.mCustomScrollbar.min.js', 'mScrollerScript');
			this.mScroll.init();
		}
	},
	mScroll : {
		scrollEl : '.g-js-scroll',
		init : function(){
			$(this.scrollEl).each(function(){
				$(this).mCustomScrollbar();
			})
		}
	},
	tabCodeview : {
		tabNav : '.g-tab-codeview',
		tabLink : '.g-tab-codeview .g-tab-nav a',
		target : null,

		init : function(){
			if ($(this.tabNav).length > 0){
				this.event();
			}
		},
		event : function(){
			//현재페이지의 탭 활성화
			$(this.tabLink).on('click', function(){
				gUI.tabCodeview.action($(this));return false;
			});
		},
		action : function($this){
			this.target = $this.attr('href');
			if ($this.parent().is('.is-active')){
				$this.parent().removeClass('is-active');
				$(this.target).removeClass('is-active');
			} else {
				$this.parent().addClass('is-active').siblings().removeClass('is-active');
				$(this.target).addClass('is-active').siblings().removeClass('is-active');
			}
		}
	},

}

$(document).ready(function(){
	gCom.init();
	gUI.init();
})