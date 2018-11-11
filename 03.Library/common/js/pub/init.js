/*--------------------------------------------------------------
	## 초기화
--------------------------------------------------------------*/
var win = {
	init : function(){
		win_iH = $(window).innerHeight();
		win_H = $(window).height();
		win_W = $(window).width();
		scr_H = $(document).height() - $(window).height();
		scr_W = $(document).width() - $(window).width();
	},
	event : function(){
		var that = this;
		$(window).on('resize', function(){that.setResize()});
		$(window).on('scroll', function(){that.setScroll()});
	},
	setResize : function(){
		this.init();
		dv.setScreen();
	},
	setScroll : function(){
	},
}

/*--------------------------------------------------------------
	## Init - 초기실행
--------------------------------------------------------------*/
var pub = {
	init : function(){
		win.init();  // 기본설정
		dv.init();   // 기기설정
		ut.init();   // 유틸리티
		cm.init();   // 전체공통
		ui.init();   // 기능공통
		win.event(); // 이벤트설정
	}
}

$(document).ready(function(){
	pub.init();  // 개발에서 하나만 호출하도록
});