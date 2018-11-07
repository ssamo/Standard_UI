/*--------------------------------------------------------------
	## 초기화
--------------------------------------------------------------*/
var pub = {
	init : function(){
		this.setInit();
		dv.init(); // 기기설정
		ut.init(); // 유틸리티
		cm.init(); // 전체공통
		ui.init(); // 기능공통
		cn.init(); // 컨텐츠
		mn.init(); // 메인
		this.event();
	},
	setInit : function(){
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
		this.setInit();
		dv.setScreen();
	},
	setScroll : function(){
		var scr_T;
		var scrollTime = null;
		//스크롤 처음
		if ($(window).scrollTop() == 0) {
			$('body').addClass('is-scrTop').removeClass('is-scrBtm');
		}
		//스크롤 끝
		if ($(window).scrollTop() == scr_H) {
			$('body').addClass('is-scrBtm').removeClass('is-scrTop');
		}
		//스크롤 시작
		if ($('body').hasClass('is-scrStart') == false) {
			$('body').addClass('is-scrStart').removeClass('is-scrEnd');
			scr_T = $(window).scrollTop();
		}
		//스크롤 아래로
		if ($('body').hasClass('is-scrDown') == false && $(window).scrollTop() > scr_T) {
			$('body').addClass('is-scrDown').removeClass('is-scrUp');
		}
		//스크롤 위로
		if ($('body').hasClass('is-scrUp') == false && $(window).scrollTop() < scr_T) {
			$('body').addClass('is-scrUp').removeClass('is-scrDown');
		}
		//스크롤 종료
		clearTimeout(scrollTime);
		scrollTime = setTimeout(function(){
			if($('body').hasClass('is-scrEnd') == false){
				$('body').addClass('is-scrEnd').removeClass('is-scrStart');
				scr_T = $(window).scrollTop();
			}
		}, 50);
	},
}

/*--------------------------------------------------------------
	## Init - 초기실행
--------------------------------------------------------------*/
$(document).ready(function(){
	pub.init();
});