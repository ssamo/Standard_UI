var gCom = {
	init : function(){
		console.log('gCom.init()');
		this.gAside.init();
	},
	gAside : {
		scrollEl : '.g-js-scroll',
		init : function(){
			$(this.scrollEl).each(function(){
				var $_self = $(this);
				require(['/common/js/plugins/jquery.mCustomScrollbar.js'], function(){
					//$_self.mCustomScrollbar();
				});
			})
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
	},
}

$(document).ready(function(){
	gCom.init();
	gUI.init();
})