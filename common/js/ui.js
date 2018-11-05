/*--------------------------------------------------------------
	## Global Varialble
--------------------------------------------------------------*/
var
    // 상태 적용 (현재형)
    clsIsCurrent      = 'is-current',     // 현  재
    clsIsActive       = 'is-active',      // 활성화 (사용자에 의한 동작상태)
    clsIsVisible      = 'is-visible',     // 보이기 (프로세스에 의한 노출상태)
    clsIsHidden       = 'is-hidden',      // 숨기기 (프로세스에 의한 노출상태)
    clsIsOn           = 'is-on',          // 켜  기 (모듈 설정상태)
    clsIsOff          = 'is-off',         // 끄  기 (모듈 설정상태)

    // 상태 체크 (과거형)
    clsIsCompleted    = 'is-completed',   // 완  료
    clsIsErrored      = 'is-errored',     // 에  러
    clsIsDisabled     = 'is-disabled',    // 비활성
    clsIsOpened       = 'is-opened',      // 펼쳐진
    clsIsFolded       = 'is-folded',      // 접혀진
    clsIsSelected     = 'is-selected',    // 선택된
    clsIsFocused      = 'is-focused',     // 포커스
    clsIsValued       = 'is-valued',      // 값있는
    clsIsHovered      = 'is-hovered',     // 호버된
    clsIsChecked      = 'is-checked',     // 체크된

    // 상태 체크 (스크롤링)
    clsIsScrTop       = 'is-scrTop',      // Scroll 상단
    clsIsScrBtm       = 'is-scrBtm',      // Scroll 하단
    clsIsScrStart     = 'is-scrStart',    // Scroll 시작
    clsIsScrEnd       = 'is-scrEnd',      // Scroll 종료
    clsIsScrDown      = 'is-scrDown',     // Scroll 아래로
    clsIsScrUp        = 'is-scrUp',       // Scroll 위로

    // 디바이스 정의
    clsDevPC          = 'dv-pc',          // Device PC
    clsDevMob         = 'dv-mobile',      // Device Mobile
    clsDevIOS         = 'dv-ios',         // Device IOS
    clsDevAnd         = 'dv-android',     // Device 안드로이드
    clsDevPT          = 'dv-portrait',    // Screen 세로모드
    clsDevLS          = 'dv-landscape',   // Screen 가로모드
    clsDevCR          = 'dv-crome',       // Browser 크롬
    clsDevSF          = 'dv-safari',      // Browser 사파리
    clsDevIE          = 'dv-ie',          // Browser 익스플로러
    clsDevOP          = 'dv-opera',       // Browser 오페라
    clsDevFF          = 'dv-firefox',     // Browser 파이어폭스
    clsDevSM          = 'dv-samsung',     // Browser 삼성인터넷

    // 디바이스 체크
    curDev            = '',               // Device 종류
    curOS             = '',               // OS 종류
    curOSV            = '',               // OS Version
    curScr            = '',               // Screen 종류
    oldScr            = '',               // Screen 종류
    curBrw            = '',               // Browser 종류
    curBrwV           = '',               // Browser 버전

    // Window & Document Area
    win_iH            = null,             // Window Inner Height
    win_H             = null,             // Window Height
    win_W             = null,             // Window Width
    scr_H             = null,             // Scroll Height
    scr_W             = null,             // Scroll Width

_; // Varialble End

/*--------------------------------------------------------------
	## Device - 기기설정
--------------------------------------------------------------*/
var dv = {
	_ua : navigator.userAgent.toLowerCase(),
	init : function(){
		console.log('dv.init()');
		this.setDevice();
		this.setBrowser();
		this.logs();
	},
	getAndroid : function(){
		var match = this._ua.match(/android\s([0-9\.]*)/);
		return match ? match[1]:false;
	},
	getIOS : function(){
		if (/iP(hone|od|ad)/.test(navigator.platform)) {
			var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
			return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
		}
	},
	setDevice : function(){
		var mobile = (/iphone|ipad|ipod|android/i.test(this._ua));
		if (mobile) {
			curDev = clsDevMob;
			this.setMobile();
			this.setScreen();
			$(window).on('resize', function(){ this.setScreen() });
		} else {
			curDev = clsDevPC;
		}
		$('body').addClass(curDev);
	},
	setMobile : function(){
		// Android
		if (this._ua.search("android") > -1) {
			curOS  = clsDevAnd;
			curOSV = this.getAndroid();
		}
		// IOS
		if ((this._ua.search("iphone") > -1) || (this._ua.search("ipod") > -1) || (this._ua.search("ipad") > -1)) {
			curOS = clsDevIOS;
			if (this.getIOS() == undefined){curOSV = 'dev-mob-pc'}
			else {curOSV = this.getIOS()}
		}
		$('body').addClass(curOS).addClass(curOS+parseInt(curOSV));
	},
	setScreen : function(){
		var orientation = window.orientation;
		if (orientation == 90 || orientation == -90){curScr = clsDevLS; oldScr = clsDevPT}
		else {curScr = clsDevPT; oldScr = clsDevLS}
		$('body').removeClass(oldScr).addClass(curScr);
	},
	setBrowser : function(){
		// 표준
		if (this._ua.indexOf('firefox') > -1){curBrw = clsDevFF;}
		if (this._ua.indexOf('chrome') > -1 && this._ua.indexOf('safari') > -1){curBrw = clsDevCR;}
		if (this._ua.indexOf('chrome') == -1 && this._ua.indexOf('safari') > -1){curBrw = clsDevSF;}

		// 익스플로러
		if (this._ua.indexOf('msie 7') != -1) {curBrw = clsDevIE; curBrwV = '7';}
		if (this._ua.indexOf('msie 8') != -1) {curBrw = clsDevIE; curBrwV = '8';}
		if (this._ua.indexOf('msie 9') != -1) {curBrw = clsDevIE; curBrwV = '9';}
		if (this._ua.indexOf('msie 10') != -1) {curBrw = clsDevIE; curBrwV = '10';}
		if (this._ua.indexOf('msie') == -1 && this._ua.indexOf('trident/7.0') != -1 && this._ua.indexOf('rv:11.0') != -1) {curBrw = clsDevIE; curBrwV = '11';}

		// 삼성인터넷
		if (this._ua.indexOf('samsungbrowser') > -1){curBrw = clsDevSM}
		if (this._ua.indexOf('samsungbrowser/2') > -1){curBrwV = '2'}
		if (this._ua.indexOf('samsungbrowser/3') > -1){curBrwV = '3'}
		if (this._ua.indexOf('samsungbrowser/4') > -1){curBrwV = '4'}
		if (this._ua.indexOf('samsungbrowser/5') > -1){curBrwV = '5'}

		$('body').addClass(curBrw).addClass(curBrw+curBrwV);
	},
	logs : function(){
		console.log(this._ua);
		console.log('var curDev : ' + curDev);
		console.log('var curOS : '  + curOS);
		console.log('var curOSV : ' + curOSV);
		console.log('var curScr : ' + curScr);
		console.log('var curBrw : ' + curBrw);
		console.log('var curBrwV : '+ curBrwV);
	},
}

/*--------------------------------------------------------------
	## Util - 유틸리티
--------------------------------------------------------------*/
var ut = {
	// 초기실행
	init : function(){
		console.log('ut.init()');
		//ut.consoleLog('ConsoleLog Test View');
	},
	//콘솔뷰
	consoleLog : function(value){
		var delay = 3000;
		var setTime = null;
		var consoleHTML = '<div class="js-consoleLog"><div class="js-consoleLog-scroll"></div></div>';
		if ($('.js-consoleLog').length == 0){$('body').append(consoleHTML)}
		$('.js-consoleLog-scroll').append('<span class="js-consoleLog-item">'+value+'</span>');
		clearTimeout(setTime);
		setTime = setTimeout(function(){$('.js-consoleLog').fadeOut('fast', function(){$(this).remove()})}, delay);
	},
	// 실제값의 퍼센트 구하기 (실제값/최대값 * 100%)
	getPercent : function(val, max){
		var value = (val/max) * 100;
		return value;
	},
	// 퍼센트로 실제값 구하기 (퍼센트/100% * 최대값)
	getValue : function(val, max){
		var value = (val/100) * max;
		return value;
	},
	// 퍼센트 제외값 구하기 (최대값 - (퍼센트/100% * 최대값)
	getRemain : function(val, max){
		var value = max - ((val/100) * max);
		return value;
	},
	// 정규식 반환
	getRegExec : function(reg, str){
		return reg.exec(str);
	},
	// 정규식 확인
	getRegTest : function(reg, str){
		return regex.test(str);
	},
	// 숫자 반올림
	getNumRound : function(val, lens){
		return Math.round(val/lens) * lens;
	},
	// 숫자 올림
	getNumCeil : function(val, lens){
		return Math.ceil(val/lens) * lens;
	},
	// 숫자 내림
	getNumFloor : function(val, lens){
		return Math.floor(val/lens) * lens;
	},
	// 숫자 콤마변환
	getNumComma : function(val){
		return val.toLocaleString();
	},
	// 숫자 콤마삭제
	getNumCommaDel : function(val){
		var num = parseFloat(val.replace(/,/gi,""));
		if (isNaN(num)){return 0} else {return num}
	},
	// 소수점 변환
	getNumDecimal : function(val){
		return getRegTest('^[+-]?\d*(\.?\d*)$', val);
	},
	// 파라미터값 구하기
	getParamiter : function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if (results==null){
			return null;
		} else {
			return results[1] || 0;
		}
	},
	// Ajax 로드
	callAjaxLoad : function(selector, frmName, callUrl, callback){
		var dataString = $("#"+frmName).serialize();
		$(selector).load(callUrl, dataString, callback);
	},
	// Ajax 실행
	callAjax : function(target, frmName, sendUrl, callback) {
		var dataString = $("#"+frmName).serialize();
		$.ajax({
			type:"POST",
			url:sendUrl,
			cache:false,
			async:false,
			dataType:"html",
			data:dataString,
			timeout:6000,
			success:function(data){
			// 통신이 성공적으로 이루어졌을때 이 함수를 타게 된다.
			$("#"+target).html(data);
				if (callback !==""){
					callback;
				}
			},
			/*complete:function(data){
			// 통신이 실패했어도 완료가 되었을때 이함수를 타게된다.
			// success 와 complete 둘 중 하나만 이용, 그렇지 않으면 두번실행
			},*/
			error:function(xhr, status, error){
			}
		});
	},
	// Document Target Length
	callThisTarget : function($this, callback){
		$(document).on('click focusin', function(e){
			if ($this.has(e.target).length == 0){
				if (callback){ callback() }
			}
		});
	},
	// Document Target Selector
	callChildTarget : function($this, callback){
		$(document).on('click focusin', function(e){
			if ($(e.target).is($this) == false){
				if (callback){ callback() }
			}
		})
	},
}

/*--------------------------------------------------------------
	## Common - 전체공통
--------------------------------------------------------------*/
var cm = {
	init : function(){
		console.log('cm.init()');
	},
}

/*--------------------------------------------------------------
	## UI - 기능공통
--------------------------------------------------------------*/
var ui = {
	init : function(){
		console.log('ui.init()');
	}
}

/*--------------------------------------------------------------
	## Contents - 컨텐츠
--------------------------------------------------------------*/
var cn = {
	init : function(){
		console.log('cn.init()');
	},
}

/*--------------------------------------------------------------
	## Main - 메인
--------------------------------------------------------------*/
var mn = {
	init : function(){
		console.log('mn.init()');
	},
}

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

