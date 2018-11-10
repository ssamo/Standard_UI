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
		init : function(){
		},
		event : function(){
		},
		show : function(){
		},
		hide : function(){
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