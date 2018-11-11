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
		this.gHeader.init();
		this.gAside.init();
	},
	gHeader : {
		init : function(){
			this.event();
		},
		event : function(){
			$('.g-btn-anb').on('click', function(e){
				if (!$('body').hasClass('is-aside-opened')){
					$('body').addClass('is-aside-opened');
				} else if ($('body').hasClass('is-aside-opened')){
					$('body').removeClass('is-aside-opened');
				}
				e.preventDefault();
				e.stopPropagation();
			})
		},
	},
	gAside : {
		asideEl : '#g-aside',
		asideWid : null,
		init : function(){
			this.asideWid = $(this.asideEl).width();
			this.event();
		},
		event : function(){
			var _self = this;
			$(document).on('click focusin', function(e){
				if ($('body').hasClass('is-aside-opened')){
					if ($(_self.asideEl).has(e.target).length == 0 && $('.g-btn-anb').has(e.target).length == 0){
						$('body').removeClass('is-aside-opened');
					}
				}
			});
		},
		show : function(){
			var calComplete = function(){$('body').addClass('is-aside-opened')}
			//TweenMax.set($(this.asideEl), {x:this.asideWid*-1});
			TweenMax.to($(this.asideEl), 0.3, {x:0, ease:Power2.easeOut, onComplete:calComplete});
		},
		hide : function(){
			var calComplete = function(){$('body').removeClass('is-aside-opened')}
			TweenMax.to($(gCom.gAside.asideEl), 0.5, {x:gCom.gAside.asideWid*-1, ease:Power2.easeOut,  onComplete:calComplete});
		}
	}
}

var gUI = {
	init : function(){
		console.log('gUI.init()');

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
	}
}

$(document).ready(function(){
	gCom.init();
	gUI.init();
})