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
var agent = {
	_ua : navigator.userAgent.toLowerCase(),
	init : function(){
		console.log('agent.init()');
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
		// IOS 체크
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
	//기기, 버전 설정
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
var util = {
	// 초기실행
	init : function(){
		console.log('util.init()');
		//util.consoleLog('ConsoleLog Test View');
	},
	//콘솔체크
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
	## Com - 전체공통
--------------------------------------------------------------*/
var com = {
	init : function(){
		console.log('com.init()');

		// Test Init
		com.navSet.init({lnb : {depth1 : 1, depth2 : 2}});
		com.navSet.init({snb : {depth1 : 3, depth2 : 4}});
	},
	navAnb : {
		init : function(){
			this.event();
		},
		event : function(){
		},
		action : function(){
		},
	},
	navLnb : {
		options : {
			eleNav		: '.lnb',
			eleDepth1	: '.depth1',
			eleDepth2	: '.depth2',
			eleNode1	: '.node1',
			eleNode2	: '.node2',
			strEasing	: 'easeOutCubic',	// 위치 : In|Out(권장)|InOut, 정도 : Sine|Quad|Cubic(보통)|Quart|Quint|Expo|Circ|Back|Elastic|Bounce
			intSpeedIn	: 300,
			intSpeedOut	: 300,
		},
		init: function(options){
			options = $.extend(null, this.options, options);
			this.event();
		},
		event : function(){
			var _that = this;
			var _opt = this.options;
			// 링크설정
			var $eleLink = $(_opt.eleNav).find('a');
			$eleLink.on('mouseenter focusin', function(e){
				_that.show($(this));
				e.preventDefault();
				e.stopPropagation();
			})
			$eleLink.on('mouseleave focusout', function(e){
				_that.hide($(this).parent());
				e.preventDefault();
				e.stopPropagation();
			})
		},
		show : function($this){ // a 요소를 받음
			var _opt = this.options;
			// Depth1
			if ($this.parent().is(_opt.eleNode1)){
				$this.next().stop().slideDown(_opt.intSpeedIn, _opt.strEasing);
				$this.parent().addClass(_opt.eleNode1);
				this.hide($this.parent().siblings());
			}
			// Depth2
			if ($this.parent().is(_opt.eleNode2)){
				$this.next().stop().slideDown(_opt.intSpeedIn, _opt.strEasing);
				$this.parent().addClass(clsIsActive);
				this.hide($this.parent().siblings(clsIsActive));
			}
		},
		hide : function($this){ // li 요소를 받음
			var _opt = this.options;
			// Depth1
			if ($this.is(_opt.eleNode1)){
				$this.find(_opt.eleDepth1).stop().slideUp(_opt.intSpeedOut, _opt.strEasing);
				$this.removeClass(clsIsActive);
			}
			// Depth2
			if ($this.is(_opt.eleNode2)){
				$this.find(_opt.eleDepth2).stop().slideUp(_opt.intSpeedOut, _opt.strEasing);
				$this.removeClass(clsIsActive);
			}
		},
	},
	navSnb : {
		options : {
			eleNav		: '.snb',
			eleDepth1	: '.depth1',
			eleDepth2	: '.depth2',
			eleNode1	: '.node1',
			eleNode2	: '.node2',
			strEasing	: 'easeOutCubic',	// 위치 : In|Out(권장)|InOut, 정도 : Sine|Quad|Cubic(보통)|Quart|Quint|Expo|Circ|Back|Elastic|Bounce
			intSpeedIn	: 300,
			intSpeedOut	: 300,
		},
		init : function(options){
			options = $.extend(null, this.options, options);
			this.event();
		},
		event : function(){
			var _that = this;
			var _opt = this.options;

			// 링크설정
			var $eleLink = $(_opt.eleNav).find('a');

			// 활성
			$eleLink.on('mouseenter focusin', function(e){
				_that.show($(this));
				e.preventDefault();
				e.stopPropagation();
			});

			// 비활성
			$eleLink.on('mouseleave focusout', function(e){
				_that.hide($(this).parent());
				e.preventDefault();
				e.stopPropagation();
			});
		},
		show : function($this){ // a 요소를 받음
			var _opt = this.options;

			// Depth1
			if ($this.parent().is(_opt.eleNode1)){
				$this.next().stop().slideDown(_opt.intSpeedIn, _opt.strEasing);
				$this.parent().addClass(eleNode1);
				this.hide($this.parent().siblings());
			}

			// Depth2
			if ($this.parent().is(_opt.eleNode2)){
				$this.next().stop().slideDown(_opt.intSpeedIn, _opt.strEasing);
				$this.parent().addClass(clsIsActive);
				this.hide($this.parent().siblings(clsIsActive));
			}
		},
		hide : function($this){ // li 요소를 받음
			var _opt = this.options;

			// Depth1
			if ($this.is(_opt.eleNode1)){
				$this.find(_opt.eleDepth1).stop().slideUp(_opt.intSpeedOut, _opt.strEasing);
				$this.removeClass(clsIsActive);
			}

			// Depth2
			if ($this.is(_opt.eleNode2)){
				$this.find(_opt.eleDepth2).stop().slideUp(_opt.intSpeedOut, _opt.strEasing);
				$this.removeClass(clsIsActive);
			}
		},
	},
	navSet : {
		options : { lnb : [0,0], snb : [0,0] }, // 옵션예시
		init : function(options){
			this.options = $.extend(null, this.options, options);
			this.setLnb();
			this.setSnb();
		},
		setLnb : function(){
			var lenLnb = $(com.navLnb.eleWrap).find('ul').legnth;
			for (var i = 0; i < lenLnb ; i++){
				if (this.options.lnb[i] > -1){
					if (com.navLnb.nodeEl == 'a'){$(com.navLnb.eleNav).find('.node'+(i+1)).parent().eq(this.options.lnb[i]).addClass(clsIsCurrent)}
					if (com.navLnb.nodeEl == 'li'){$(com.navLnb.eleNav).find('.node'+(i+1)).eq(this.options.lnb[i]).addClass(clsIsCurrent)}
				}
			}
		},
		setSnb : function(){
			var lenSnb = $(com.navSnb.eleWrap).find('ul').legnth;
			for (var i = 0; i < lenSnb ; i++){
				if (this.options.snb[i] > -1){
					if (com.navSnb.nodeEl == 'a'){$(com.navSnb.eleNav).find('.node'+(i+1)).parent().eq(this.options.snb[i]).addClass(clsIsCurrent)}
					if (com.navSnb.nodeEl == 'li'){$(com.navSnb.eleNav).find('.node'+(i+1)).eq(this.options.snb[i]).addClass(clsIsCurrent)}
				}
			}
		}
	},
	navFloat : {
		init : function(){
			this.event();
		},
		event : function(){
		},
		action : function(){
		},
	},
}

/*--------------------------------------------------------------
	## UI - 기능공통
--------------------------------------------------------------*/
var ui = {
	init : function(){
		console.log('ui.init()');

		// Tab JS
		if ($('.js-tab .tab-nav a').length > 0){
			ui.tabs.init($('.js-tab .tab-nav a'));
		}
		// Tab Ajax
		if ($('.ajax-tab .tab-nav a').length > 0){
			ui.tabAjax.init($('.ajax-tab .tab-nav a'));
		}
		// Select
		if ($('.ui-select .js-select-btn').length > 0){
			ui.select.init($('.ui-select .js-select-btn'));
		}
		// Dropdown
		if ($('.dropdown-wrap .js-dropdown-btn').length > 0){
			ui.dropdown.init($('.dropdown-wrap .js-dropdown-btn'));
		}
		// Tooltip
		if ($('.tooltip-wrap .js-tooltip-btn').length > 0){
			ui.tooltip.init($('.tooltip-wrap .js-tooltip-btn'));
		}
		// Accordion
		if ($('.accordion').length > 0){
			ui.accordion.init();
		}

		// Scroll
		if ($('.js-scroll').length > 0){
			$('.js-scroll').mCustomScrollbar();
		}
	},
	// Tab JS
	tabs : {
		init : function($this){
			this.event($this);
		},
		event : function($this){
			var that = this;

			// 현재페이지 탭 활성화
			$this.on('click', function(){
				that.action($(this)); return false;
			});

			// 다른페이지 탭 활성화
			var tabPara = util.getParamiter('tabId');
			if (tabPara != null){
				$this.each(function(){if ($(this).attr('href') == '#'+tabPara) that.action($(this))})
			}
		},
		action : function($this){
			var target = $this.attr('href');
			$this.parent().addClass(clsIsActive).siblings().removeClass(clsIsActive);
			$(target).addClass(clsIsActive).attr('aria-hidden', 'false').siblings().removeClass(clsIsActive).attr('aria-hidden', 'true');
		},
	},
	// Tab Ajax
	tabAjax : {
		obj : '.ajax-tab',
		objCont : '.tab-content',
		init : function($this){
			this.event($this);
		},
		event : function($this){
			var that = this;

			// 현재페이지의 탭 활성화
			$this.on('click', function(){
				that.action($(this)); return false;
			});

			// 다른페이지의 탭 활성화
			var tabPara = util.getParamiter('tabId');
			if (tabPara != null){
				$('#'+tabPara).each(function(){that.action($(this))})
			}
		},
		action : function($this){
			var url = $this.attr('href');
			var $selector = $this.parents(this.obj).find(this.objCont);
			$this.parent().addClass(clsIsActive).siblings().removeClass(clsIsActive);
			$selector.load(url);
		},
	},
	// Dropdown
	/*
	dropdown : {
		eleWrap : '.dropdown-wrap',
		eleTarget : null,
		isState : false,
		numSpeed : 0.2,
		init : function($this){
			this.event($this);
		},
		event : function($this){
			var that = this;
			var $that = null;
			$this.on('click', function(e){
				if (that.isState == false){
					that.isState = true;
					that.eleTarget = '#' + $(this).attr('aria-controls');
					if ($(that.eleTarget).is(':visible')){
						that.hide($(this), $(that.eleTarget));
					} else {
						that.reset($(this), $('.dropdown').not(that.eleTarget));
						that.show($(this), $(that.eleTarget));
					}
				}
				e.preventDefault();
				e.stopPropagation();
			});
			var callback = function(){ui.dropdown.reset($this, $('.dropdown'))}
			util.callThisTarget($(that.eleWrap), callback);
		},
		// 초기화
		reset : function($this, $target){
			var that = this;
			var onCompleteFunc = function(){$target.attr({'aria-hidden':'true'});}
			$target.closest(that.eleWrap).removeClass(clsIsActive);
			TweenMax.to($target, that.numSpeed, {scaleY:0, y:'-50%', opacity:0, onComplete:onCompleteFunc}, {ease:Power4.easeOut});
		},
		// 활성
		show : function($this, $target){
			var that = this;
			var onCompleteFunc = function(){that.select($this, $target); that.isState = false;}
			$target.attr({'aria-hidden':'false'}).closest(that.eleWrap).addClass(clsIsActive);
			TweenMax.set($target, {scaleY:0, y:'-50%', opacity:0});
			TweenMax.to($target, that.numSpeed, {scaleY:1, y:'0%', opacity:1, onComplete:onCompleteFunc}, {ease:Power4.easeOut});
		},
		// 비활성
		hide : function($this, $target){
			var that = this;
			var onCompleteFunc = function(){$target.attr({'aria-hidden':'true'}); that.isState = false;}
			$target.closest(that.eleWrap).removeClass(clsIsActive);
			TweenMax.to($target, that.numSpeed, {scaleY:0, y:'-50%', opacity:0, onComplete:onCompleteFunc}, {ease:Power4.easeOut});
		},
		// 목록선택
		select : function($this, $target){
			var that = this;
			if ($target.attr('data-select') == 'true'){
				$target.find('.item a').on('click', function(e){
					$this.find('.dropdown-label').text($(this).text());
					that.hide($this, $target);
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
				})
			}
		},
	},
	*/
	dropdown : {
		init : function($this){
			$this.on('click', function(){
				$('#' + $(this).attr('aria-controls')).stop().slideToggle('fast', function(){
					if ($(this).is(':visible')){$(this).attr({'aria-hidden':'false'}).closest('.dropdown-wrap').addClass(clsIsActive)}
					else {$(this).attr({'aria-hidden':'true'}).closest('.dropdown-wrap').removeClass(clsIsActive)}
				});
				e.preventDefault();
				e.stopPropagation();
			})
		},
	},

	// Tooltip
	tooltip : {
		init : function($this){
			$this.on('click', function(e){
				if ($(this).closest('.tooltip-wrap').find('.js-tooltip-close').length){
					$('#' + $(this).attr('aria-controls')).stop().fadeIn('fast', function(){
						$(this).closest('.tooltip-wrap').find('.js-tooltip-close').not('.is-clicked').on('click', function(e){
							$('#' + $(this).attr('aria-controls')).stop().fadeOut('fast');
							e.preventDefault();
							e.stopPropagation();
						}).addClass('is-clicked');
					});
				} else {
					$('#' + $(this).attr('aria-controls')).stop().fadeToggle('fast', function(){
						if ($(this).is(':visible')){$(this).attr({'aria-hidden':'false'}).closest('.tooltip-wrap').addClass(clsIsActive)}
						else {$(this).attr({'aria-hidden':'true'}).closest('.tooltip-wrap').removeClass(clsIsActive)}
					});
				}
				e.preventDefault();
				e.stopPropagation();
			})
		},
	},

	// Accordion
	accordion : {
		dataSync      : 'false',
		dataToggle    : 'true',
		eleAcco       : '.accordion',
		eleAccoHeader : '.accordion-header',
		eleAccoBody   : '.accordion-body',
		eleAccoBtn    : '.js-acco-btn',
		init : function(){
			this.setInit();
			this.event();
		},
		setInit : function(){
			var that = this;
			$(that.eleAcco).each(function(){
				// 기본설정
				if ($(this).is('[data-init]') == false){$(this).attr('data-init', 'none')}
				if ($(this).is('[data-toggle]') == false){$(this).attr('data-toggle', 'true')}
				if ($(this).is('[data-sync]') == false && $(this).attr('[data-init]') == 'first'){$(this).attr('data-sync', 'true')}
				if ($(this).is('[data-sync]') == false && $(this).attr('[data-init]') != 'first'){$(this).attr('data-sync', 'false')}

				// 설정적용
				if ($(this).attr('data-init') == 'all'){ that.show($(this).find('>'+that.eleAccoHeader).find(that.eleAccoBtn), $(this).find('>'+that.eleAccoBody))}
				else if ($(this).attr('data-init') == 'first'){ that.show($(this).find('>'+that.eleAccoHeader).eq(0).find(that.eleAccoBtn), $(this).find('>'+that.eleAccoBody).eq(0))}
				else if ($(this).attr('data-init') == 'none' || $(this).is('[data-init]') == false){ that.hide($(this).find('>'+that.eleAccoHeader).find(that.eleAccoBtn), $(this).find('>'+that.eleAccoBody))}
			})
		},
		event : function(){
			var that = this;
			$(that.eleAccoBtn).not('.is-clicked').on('click', function(e){
				that.dataSync = $(this).closest(that.eleAcco).attr('data-sync');
				that.dataToggle = $(this).closest(that.eleAcco).attr('data-toggle');
				that.eleTarget = '#' + $(this).attr('aria-controls');
				that.action($(this), $(that.eleTarget));

				e.preventDefault();
				e.stopPropagation();
			}).addClass('is-clicked');
		},
		action : function($this, $target){
			var that = this;
			// 펼치기 기본
			if (this.dataSync == 'true'){
				$target.siblings(that.eleAccoBody).stop().slideUp('fast');
				that.hide($this.parent().siblings().children(that.eleAccoBtn), $target.siblings(that.eleAccoBody));
			}

			// 펴진것을 클릭한경우 토글이면 접기
			if (this.dataToggle == 'true' && $this.parent().hasClass(clsIsActive)){
				$target.stop().slideUp('fast');
				that.hide($this, $target);
			}

			// 접힌것을 클릭한경우
			else {
				$target.stop().slideDown('fast');
				that.show($this, $target);
			}
		},
		show : function($this, $target){
			$this.addClass(clsIsActive);
			$this.closest(this.eleAccoHeader).addClass(clsIsActive);
			$target.addClass(clsIsActive).attr('aria-hidden', 'false');
		},
		hide : function($this, $target){
			$this.removeClass(clsIsActive);
			$this.closest(this.eleAccoHeader).removeClass(clsIsActive);
			$target.removeClass(clsIsActive).attr('aria-hidden', 'true');
		}
	},
}

/*--------------------------------------------------------------
	## Cont - 컨텐츠
--------------------------------------------------------------*/
var cont = {
	init : function(){
		console.log('cont.init()');
	},
	name_module1 : {
		init : function(){
			this.event();
		}
	},
	name_module2 : {
		init : function(){
			this.event();
		}
	},
}

/*--------------------------------------------------------------
	## Main - 메인페이지
--------------------------------------------------------------*/
var main = {
	init : function(){
		console.log('main.init()');
	},
}

/*--------------------------------------------------------------
	## 초기화
--------------------------------------------------------------*/
var pub = {
	init : function(){
		this.setInit();
		agent.init();
		util.init();
		com.init();
		ui.init();
		cont.init();
		main.init();
		this.event();
	},
	event : function(){
		var that = this;
		$(window).on('resize', function(){that.setInit()});
		$(window).on('scroll', function(){that.setScroll()});
	},
	setInit : function(){
		win_iH = $(window).innerHeight();
		win_H = $(window).height();
		win_W = $(window).width();
		scr_H = $(document).height() - $(window).height();
		scr_W = $(document).width() - $(window).width();
	},
	setScroll : function(){
		var scr_T;
		var scrollTime = null;
		if ($(window).scrollTop() == 0) {
			$('body').addClass('is-scrTop').removeClass('is-scrBtm');
		}
		if ($(window).scrollTop() == scr_H) {
			$('body').addClass('is-scrBtm').removeClass('is-scrTop');
		}
		if ($('body').hasClass('is-scrStart') == false) {
			$('body').addClass('is-scrStart').removeClass('is-scrEnd');
			scr_T = $(window).scrollTop();
		}
		if ($('body').hasClass('is-scrDown') == false && $(window).scrollTop() > scr_T) {
			$('body').addClass('is-scrDown').removeClass('is-scrUp');
		}
		if ($('body').hasClass('is-scrUp') == false && $(window).scrollTop() < scr_T) {
			$('body').addClass('is-scrUp').removeClass('is-scrDown');
		}
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

