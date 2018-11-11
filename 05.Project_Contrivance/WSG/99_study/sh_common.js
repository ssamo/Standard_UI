var h, w, wdW, wdH, accordionConAreaH, accordionTopAreaH;
$(document).ready(function() {
	resizeHandler();
	$(window).resize(function(){
		resizeHandler();
	});
	ui_init();
});

var resizeHandler = function() {
	w = $(window).innerWidth();
	h = $(window).innerHeight();
	wdW = $(window).width();
	wdH = $(window).height();

	/*
	if($('.slide-section-wrap').length != 0){
		accordionTopAreaH = (wdH-($('#header').height()+$('.contents-header').height()))
		accordionConAreaH = 100-(($('#header').height()+$('.contents-header').height())/wdH)*100;
		// $('.slide-section-wrap').closest('html,body').css({'height':'100vh','overflow-y':'hidden','border':'1px solid red'});
		$('.slide-section-wrap').closest('html,body').css({'height':'100vh','overflow-y':'hidden'});
		$('.slide-section-wrap').find('.slide-section').css({'height':accordionConAreaH+'vh', 'overflow-y':"auto"});
	}
	*/

}

//공통 UI
var ui_init = function() {
	console.log('init');

	//IOS SET
	setIOS();

	//FooterGap
	setBottomGap();

	//인증비밀번호 1.0 (한자리씩입력)
	if ($(".next-input").length){
		pwAutoFocus();
	}

	//인증비밀번호 2.0 (전체입력)
	if ($('.password-wrap .cert-password').length){
		certPassword();
	}

	//플로트메뉴
	if ($('.nav-floating').length){
		setFloating();
	}

	//네비게이션바
	//setNavBar.init();

	//라이브러리 공통
	if ($('.input-cover').length){
		formCoverCheck();
	}

	//formSelectCheck();
	//아코디언
	if ($('.accordion').length){
		accordion();
	}

	//아코디언
	if ($('.accordion-lists li').length){
		accordion2();
	}

	//전체동의선택
	if ($('.js-agree-all').length){
		agreeAllcheck();
	}

	// 회원가입
	if ($('.cmn0103 .btn-ok').length){
		cmn_handler();
	}

	// 조회
	inq_Handler();

	//접었다 펴기
	if ($('.js-toggle').length){
		folderToggle();
		//folderToggle.init();
	}

	//조회 회색배경처리
	if ($('#container .h100p').length){
		grayHeight();
	}

	//조회검색 취소
	if ($('.sch-account-wrap .btn-cancle').length){
		formInputCancle();
	}

	//주민번호 뒷자리(일반용) 배경처리
	if ($('input.social-no2, input.biz-no1, input.biz-no2, input.card-pw, input.password-no').length){
		formSocialNo2();
	}

	//툴팁
	if ($('.js-tooltip').length){
		tooltip();
	}

	//애니메이션

	//팝업 스크롤높이
	//popupScrollHeight();

	//스크롤러
	//spyScroll('.account-history'); 조회목록 스크롤링

	//인증 탭
	//auth_tab_handler(); 사용안함

	//인풋 스파이스크롤(가상키보드가 뜨는경우 대응)
	if ($('input[type=password], input[type=text], input[type=number]').length){
		//spyScrollForm();
	}

	//접근성 탭공통
	if ($('.aria-tabs').length){
		ariaTabs();
	}

	//Ajax 탭공통
	if ($('.ajax-tabs').length){
		ajaxTabs();
	}

	//계좌이름 슬라이드
	if ($('.account-item .swiper-container').length){
		accountItemSwiper();
	}

	//인증서 클릭시 클래스 추가
	if ($(".certify-list > li[role='button']").length){
		certifyList();
	}
	if ($(".acountList > li[role='button']").length){
		acountListNEW();
	}

	//헤더고정시키기
	stickyHeader();

	//아코디언
	//accordionInit();

	//거래내역조회 상단고정
	if ($('.account-header-fixed').length){
		accountTopFixed();
	}

	//전체메뉴에 해당하는 스크립트
	if ($('.all-menu-list').length){
		AllMenuCont();
	}

	//input type=file
	if ($('.js-file-btn').length){
		formFileLoad();
	}

	//약관동의스와이퍼
	if ($('.clause-wrap .swiper-container').length){
		termSlides();
	}

	//스텝 기본설정
	if ($('.contents-header-step-cover').length){
		cmnSectionSelectHandlerReady();
	}

	//gutterGap
	if ($('#container .contents-header').closest('.bottom-gap').length){
		setGutterGap();
	}

	//아이폰 바운드 배경처리
	//setIOSBound();

	//맵 높이값
	if ($('.popup .map').length){
		MapHeight();
	}

	//헤더배경설정
	if ($('#header').length){
		setHeaderBgInit();
	}

	//팝업오픈
	if ($('.popup-style:visible').length){
		popupStyleOpen();
	}

	//푸시-서비스가입 등록버튼 처리
	if ($('.accont-card-info').length){
		accountCardReg();
	}

	//이체 슬라이드 페이지
	if ($('.slide-section-wrap').length){
		slideSectionWrap();
	}

	//필수입력 제공
	if ($('.input-cover').length){
		labelAriaRole();
	}

	//펼치기 삭제
	if ($('.contents-header-title .btn-view').length){
		$('.contents-header-title .btn-view').remove();
	}

	//조회결과 더보기
	if ($('.account-history-new').length || $('.account-history').length){
		setHistory.init();
	}

	// INPUT, BUTTON 화면 중간보다 아래에 있을때 중앙으로 이동하기
	focusInPageMove();

	inputLengthHandler();


}

/* ====================================
	 기본설정
==================================== */
//안드로이드 버전체크
var isAndroid_ver = null;
if (navigator.userAgent.toLowerCase().indexOf('android 7') > -1){isAndroid_ver = 7;}
if (navigator.userAgent.toLowerCase().indexOf('android 6') > -1){isAndroid_ver = 6;}
if (navigator.userAgent.toLowerCase().indexOf('android 5') > -1){isAndroid_ver = 5;}
if (navigator.userAgent.toLowerCase().indexOf('android 4') > -1){isAndroid_ver = 4;}

//IOS 버전체크
var iOSversion = function(){
	if (/iP(hone|od|ad)/.test(navigator.platform)) {
		var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
		return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
	}
}

//기기체크
var setIOS = function(){
	var iOSVer = iOSversion();
	if (typeof iOSVer == 'undefined'){
		$('body').addClass('and and'+isAndroid_ver);
	} else {
		$('body').addClass('ios ios'+iOSVer[0]);
	}
}

var setBottomGap = function(){
	//페이지 푸터여백
	if ($('#container .footer:visible').length){$('#container .bottom-gap').removeClass('none-footer').addClass('has-footer')}
	else {$('#container .bottom-gap').removeClass('has-footer').addClass('none-footer')}

	//팝업 푸터여백
	if ($('.popup-style:visible .footer:visible').length > 0){
		$('.popup-style .container').addClass('has-footer');
	}
}

/* ====================================
	 0. 라이브러리 공통
==================================== */
var setHistory = {
	objLists : '.account-history-new .list-info',
	lenLists : null,
	init : function(){
		this.setBg();

		$('.account-history-new .btn-more').on('click', function(){
			setHistory.setLists('new');
		})
		$('.account-history .btn-more').on('click', function(){
			setHistory.setLists('org');
		})
		$('.account-info-BOX').closest('.account-history-new').find('.btn-more').on('click', function(){
			setHistory.setLists('box');
		})

	},
	setBg : function(){
		//페이지 - 컨텐츠 조회영역인경우
		if ($('#container .account-history:visible').length > 0){
			$('body').addClass('bg-history');
			$('#container .bottom-gap').addClass('color-grey');
		}
		if ($('#container .account-history-new:visible').not('.bg-none').length > 0){
			$('body').addClass('bg-history');
			$('#container .bottom-gap').addClass('color-grey');
		}

		//팝업 - 컨텐츠 조회영역인경우
		if ($('.container .account-history:visible').length > 0){
			$('.popup-style').addClass('bg-history');
		}
		if ($('.container .account-history-new:visible').length > 0){
			$('.popup-style').addClass('bg-history');
		}
	},
	setLists : function(str){
		if (str == 'new'){
			if ($('.account-history-new').is('.account-select')){
				this.objLists = '.account-history-new:visible li';
			}
			this.lenLists = $(this.objLists).length;
		}
		if (str == 'org'){
			this.objLists = '.account-history .list-info';
			this.lenLists = $(this.objLists).length;
		}
		if (str == 'box'){
			this.objLists = '.account-history-new .account-info-BOX';
			this.lenLists = $(this.objLists).length;
		}
		this.setFocus();
	},
	setFocus : function(){
		$(this.objLists).eq(this.lenLists).css('border', '1px solid #ddd');
		setTimeout(function(){
			$(setHistory.objLists).eq(setHistory.lenLists).attr('tabindex', '0').focus();
		},2000)
	}
}

var setIOSBound = function(cls){
	//헤더 컬러인경우
	$('#header > [class*=bg]').each(function(){
		//문서배경설정
		var cls = $(this).attr('class');
		$('body').addClass(cls);

		//본문높이설정
		if ($('.section:visible').length == 1){
			$('.section:visible').css('min-height', 'calc(100vh - 19.2rem)');
		}

	})

	$('.blue-header-style1').each(function(){
		$('body').addClass(cls);
	})

		/*
	var movPos = null,
		strPos = null,
		valPos = null,
		scrTop = null,

	//터치시작
	$('body').on('touchstart', function(e){
		strPos = e.originalEvent.touches[0].screenY;
	});
	//터치진행
	$('body').on('touchmove', function(e){
		movPos = e.originalEvent.touches[0].screenY;
		valPos = movPos - strPos;

		//상단일때
		if ($(document).scrollTop() == 0 &&){
			$('html, body').on('scroll touchmove mousewhell', function(e){e.preventDefault(); e.stopPropagation()});
		}
		if ($(document).scrollTop() == $(document).height() - $(window).height()){
		}
	});
	//터치종료
	$('body').on('touchend', function(e){
		$('html, body').off('touchmove');
	});
	*/
}

//퍼블리싱용 헤더배경
var setHeaderBgInit = function(){
	var button = 'btn-back';
	var $this = $('#header');
	if ($this.find('button').is('.btn-back')){button = 'btn-back'}
	else if ($this.find('button').is('.btn-close')){button = 'btn-close'}
	else if ($this.find('button').length == 0){button = ''}

	if ($('#header > div[class*=bg]').length){
		var cls = $this.find('div[class*=bg]').attr('class');
		setHeaderBg(cls, button);
	} else {
		setHeaderBg('', button);
	}
}

//개발호출용 헤더배경
var setHeaderBg = function(cls, button){
	var objBtnCan = '<button type="button" class="btn-close" onclick="btn_back();">취소</button>';
	var objBtnBak = '<button type="button" class="btn-back" onclick="btn_back();">뒤로</button>';
	var objBtnAlm = '<button type="button" class="btn-anb" onclick="btn_allMenu();"><span>전체메뉴</span></button>';
	var objBtnCanW = '<button type="button" class="btn-close btn-close-white" onclick="btn_back();">취소</button>';
	var objBtnBakW = '<button type="button" class="btn-back btn-back-white" onclick="btn_back();">뒤로</button>';
	var objBtnAlmW = '<button type="button" class="btn-anb btn-anb-white" onclick="btn_allMenu();"><span>전체메뉴</span></button>';
	var objTitle = '<span class="header-title" aria-hidden="true"></span>';

	$('body').not('.app-main, .web-main').find('#header').each(function(){
		if ($(this).find('> div').length){
			$this = $(this).find('> div');
		} else {
			$this = $(this);
		}
		$this.find('button').remove();
		$this.find('.header-title').remove();
		$('.popup-style').find('.header-title').remove();
		$this.attr('class','').addClass(cls);
		//뒤로가기 버튼일때
		if (button == 'btn-back'){
			//컬러값이 없을때 기본버튼으로
			if (cls == ''){
				cls = 'bgWhite';
				$this.append(objBtnBak);
				$this.append(objTitle);
				$this.append(objBtnAlm);
			}
			//컬러값이 있을때 흰색버튼으로
			else {
				//console.log(cls);
				$this.append(objBtnBakW);
				$this.append(objTitle);
				$this.append(objBtnAlmW);
			}
		}
		//취소 버튼일때
		else if (button == 'btn-close'){
			//컬러값이 없을때 기본버튼으로
			if (cls == ''){
				cls = 'bgWhite';
				$this.append(objBtnCan);
				$this.append(objTitle);
				$this.append(objBtnAlm);
			}
			//컬러값이 있을때 흰색버튼으로
			else {
				$this.append(objBtnCanW);
				$this.append(objTitle);
				$this.append(objBtnAlmW);
			}
		}
		//버튼 없을때
		else if (button == '' || button == 'undefined'){
			//Header 삭제
			$('#header').remove();

			//상단여백 초기화 (로그인)
			if (cls == 'bgNone'){
				$('#container').addClass('pdtp0');
			}
		}
		/*
		var iOSVer = iOSversion();
		if (typeof iOSVer != 'undefined'){
		}
		*/
		setIOSBound();
		//기기공통
		$('body').addClass(cls);

		//구조변경
		$('.contents-header h1').each(function(){
			//페이지인 경우
			if ($(this).closest('#container').length){
				//헤더타이틀이 생성되지 않은 경우 and 상품안내(section-infomation) 페이지가 아닌경우
				if ($('.section-infomation').length == 0){
					$('#header .header-title').text($(this).text());
				}
			}
			//팝업인 경우
			if ($(this).closest('.container:visible').length && $('.popup-history').length == 0){
				if ($('.header-title.is-visible').length == 0){
					$('.container:visible').before('<span class="header-title" aria-hidden="true">'+$(this).text()+'</span>');
				}
			}
		});

		//제목이 없는구조
		if ($('.contents-header h1').length == 0){
			if ($('.header-title').length){$(this).remove()}
			//if ($('#header').length){$('#header').css('position', 'absolute')}
		}

	})
}

var setGutterGap = function(){
	$('#container .contents-header').closest('.bottom-gap').each(function(){
		if ($('#container .footer').length > 0) {
			$(this).addClass('has-footer');
		}
	})
}

var setFloating = function(){
	$('#container').after($('.nav-floating'));
	$('#container').after($('.nav-floating-mask'));

	var arrOfLocY = [0,55,110];
	/*
	for(var a=0; a<$('.nav-item-list li').length; a++) {
		arrOfLocY.push(parseInt(translateY_value($('.nav-item-list li').eq(a))));
	}
	*/
	$('.nav-item-list').hide();

	$('.nav-btn-all').off().on('click', function() {

		var rotateTarget = $('.nav-plus-cover');
		if(!rotateTarget.hasClass('on')){
			$('.nav-item-list').show();
			//console.log('$(window).innerHeight() = ',$(window).innerHeight());

			var chkW;
			var windowW = parseInt($(window).innerWidth());
			var windowH = parseInt($(window).innerHeight());
			if(windowW > windowH)	{ chkW = (windowW*2.5)/45; }
			else 					{ chkW = (windowH*2.5)/45; }
			TweenMax.to( rotateTarget, 0.5, {css: {rotation: 135, backgroundColor: '#000000'}, ease: Back.easeOut.config(5)});
			TweenMax.to( $('.nav-floating-mask'), 1, {css: {scale: chkW , autoAlpha: 1}, ease: Power4.easeOut});
			for(var a=0; a<$('.nav-item-list li').length; a++) {
				var target = $('.nav-item-list li').eq(a);
				TweenMax.set( target, {css: {y: arrOfLocY[a] + 20}});
				TweenMax.to( target, 0.5, {css: {y: arrOfLocY[a], autoAlpha: 1}, ease: Power4.easeOut, delay: 0.2*a/2});
			}
			rotateTarget.addClass('on');
		}else{
			TweenMax.to( rotateTarget, 0.5, {css: {rotation: 0, backgroundColor: '#356fda'}, ease: Back.easeOut.config(5)});
			TweenMax.to( $('.nav-floating-mask'), 0.5, {css: {scale: 0, autoAlpha: 0}, onComplete:function(){$('.nav-item-list').hide()}, ease: Power4.easeOut, delay: 0.1});
			for(var a=$('.nav-item-list li').length; a>=0; a--) {
				var target = $('.nav-item-list li').eq(a);
				TweenMax.to( target, 0.3, {css:{y: arrOfLocY[a] + 20, autoAlpha: 0}, ease: Power4.easeOut, delay: 0.2-0.2*a/2});
			}
			rotateTarget.removeClass('on');
		}
	});

	$('.nav-btn').on('touchstart', function() {
		TweenMax.set($(this),{css: {backgroundPosition:'100% 100%', color: 'rgba(255,255,255,1)'}});
	}).on('mouseleave mouseup touchend', function() {
		TweenMax.set($(this),{css: {backgroundPosition:'100% 0', color: 'rgba(255,255,255,0.5)'}});
	})

	function translateY_value(target) {
		var obj = target;
		var transformMatrix = obj.css('transform')
		var matrix = transformMatrix.replace(/[^0-9\-.,]/g,'').split(',');
		var curX = matrix[12] || matrix[4]; //translate x
		var curY = matrix[13] || matrix[5]; //translate y
		return curY;
	}
}

var swiperAria = function(options){
	var defaultOptions = {
		swiperGroup : null,
		ariaHidden : false,
		role : true,
	}

	options = $.extend(null, defaultOptions, options);

	//접근성 버튼타입 적용
	if (options.role == true){
		$(options.swiperGroup).find('.swiper-slide').attr({'tabindex':'0', 'role':'button'});
	}

	//접근성 포커스 적용여부
	if (options.ariaHidden == true){
		$(options.swiperGroup).find('.swiper-slide').attr('aria-hidden', 'true');
		$(options.swiperGroup).find('.swiper-slide-active').attr('aria-hidden', 'false');
	}
}

//퍼센트구하기
var calPercent = function(val, max){
	var value;
	if (typeof val == String){
		val = parseInt(val);
	}
	if (val != 0){
		value = (val/parseInt(max)) * 100;
	} else {
		value = 0;
	}
	return value;
}

//잇딴주머니 보관금리 설정
var _setItMoney = {
	objSetMove : null,
	objGetMove : null,
	objGroup : null,
	objToMoney : null,
	objFromMoney : null,
	objBtnWrap : null,
	objBtnComp : null,
	objBtnBack : null,
	heightGroup : null,
	heightMoveOld : null,
	heightMove : null,
	startPos : null,
	movPos : null,
	endPos : null,
	minPos : null,
	maxPos : null,
	valPos : null,
	valPercent : null,
	valToMoney : null,
	valToMoneyOld : null,
	valFromMoney : null,
	valMinMoney : null,
	valTotalMoney : null,
	scrTop : null,

	init : function(){
		//오브젝트 초기화
		this.objSetMove = $('.itMoney-move.is-moveSet'); //설정하는 요소
		this.objGetMove = $('.itMoney-move.is-moveGet'); //설정되는 요소
		this.objGroup = $('.itMoney-move-wrap');
		this.objToMoney = $('.itMoney-to .num');
		this.objFromMoney = $('.itMoney-from .num');
		this.objBtnWrap = $('.itMoney-confirm-wrap');
		this.objBtnComp = this.objBtnWrap.find('.btn-itConfirm');
		this.objBtnBack = this.objBtnWrap.find('.btn-itCancel');

		//기본금리 설정
		this.valToMoney = parseInt(this.objToMoney.text());
		this.valFromMoney = parseInt(this.objFromMoney.text()) + parseInt(this.objToMoney.text());
		if (this.objFromMoney.attr('data-min').indexOf('-') != -1){
			this.valMinMoney = parseInt(this.objFromMoney.attr('data-min'));
		} else {
			this.valMinMoney = parseInt(this.objFromMoney.attr('data-min')) * -1;
		}
		this.valTotalMoney = (this.valMinMoney * -1) + this.valFromMoney;
		this.valToMoneyOld = this.valToMoney;

		//화면맞추기
		this.resize();

		/*
		$(window).trigger("orientationchange");
		$(window).resize(function(){setItMoney.resize()});
		$(window).bind("orientationchange", function(e){
			var orientation = window.orientation;
			if (orientation == 90 || orientation == -90){
				alert('portait');
			} else {
				alert('landscape');
			}
		})
		*/

		//초기설정
		this.setInit();
		this.event();
		this.setMove();

		//결과값 체크
		//console.log('h:'+h+', valPos:'+parseInt(this.objSetMove.height())+', this.heightGroup:'+this.heightGroup);
		//console.log('height :'+ this.objSetMove.height());
	},
	resize : function(){
		/*
		//페이지고정
		$('html').css('overflow', 'hidden');
		$('body').css('position', 'fixed').addClass('is-fixed');

		//화면에 맞추기
		$('.inq-contents').height($(window).innerHeight() - $('#header').outerHeight());

		//스크롤링
		$('.inq-contents').css({'overflow-y':'auto', '-webkit-overflow-scrolling': 'touch'});

		//기본높이 설정
		*/

		$('.itMoney-wrap').height($(window).innerHeight() - $('#container .contents-header').outerHeight() - $('#header').outerHeight());
		this.heightGroup = this.objGroup.height();
		this.heightMove = calPercent(this.objSetMove.height(), this.heightGroup);
		/*
		this.minPos = this.objGroup.offset().top;
		this.maxPos = this.minPos + this.heightGroup;
		*/
	},
	event : function(){
		//터치시작
		this.objSetMove.find('button').on('mousedown touchstart', function(e){
			setItMoney.setScrollOff();
			/*
			$('html, body').on('scroll touchmove mousewhell', function(e){e.preventDefault(); e.stopPropagation()});

			//안드로이드버전 5부터 body요소 fixed설정
			//if (isAndroid_ver != null && isAndroid_ver > 4){setItMoney.setScrollOff()};
			if (isAndroid_ver != null){setItMoney.setScrollOff()};
			*/
			setItMoney.startPos = e.originalEvent.touches[0].screenY;
		});
		//터치진행
		this.objSetMove.find('button').on('touchmove', function(e){
			setItMoney.movPos = e.originalEvent.touches[0].screenY;
			setItMoney.valPos = setItMoney.movPos - setItMoney.startPos;
			//console.log(setItMoney.valPos);
			setItMoney.action();
		});
		//터치종료
		this.objSetMove.on('mouseup touchend', function(e){
			setItMoney.setScrollOn();
			/*
			$('html, body').off('scroll touchmove mousewhell');
			//안드로이드버전 5부터 body요소 fixed해제
			//if (isAndroid_ver != null && isAndroid_ver > 4){setItMoney.setScrollOn()};
			if (isAndroid_ver != null){setItMoney.setScrollOn()};
			*/
			setItMoney.confirmShow();
			setItMoney.tooltipHide();
		});
		//설정완료
		this.objBtnComp.on('click', function(){
			//설정버튼 닫기
			setItMoney.confirmHide();
			//초기값 설정
			setItMoney.heightMove = parseInt(calPercent(setItMoney.objSetMove.height(), setItMoney.heightGroup));
			setItMoney.valToMoneyOld = parseInt(setItMoney.objToMoney.text());
			setItMoney.heightMoveOld = setItMoney.heightMove;
			setItMoney.setMove();
			//console.log(setItMoney.heightMove);
			//alert(setItMoney.heightMove);

		});
		//설정취소
		this.objBtnBack.on('click', function(){
			//설정버튼 닫기
			setItMoney.confirmHide();
			//초기값 되돌리기
			setItMoney.objToMoney.text(setItMoney.valToMoneyOld);
			setItMoney.objFromMoney.text(setItMoney.valTotalMoney - setItMoney.valToMoneyOld + setItMoney.valMinMoney);
			//setItMoney.setInit();
			setItMoney.getMove();
		});
	},
	//초기값 설정
	setInit : function(){
		this.valPercent = calPercent(this.valToMoneyOld, this.valTotalMoney);
		this.objSetMove.css('height', this.valPercent + '%');
		this.heightMoveOld = calPercent(this.objSetMove.height(), this.heightGroup);
		//setItMoney.setMove();
	},
	//화면 재설정
	resetInit : function(){
		this.valPercent = calPercent(this.valToMoneyOld, this.valFromMoney);
		this.objSetMove.css('height', this.valPercent + '%');
		this.heightMove = calPercent(this.objSetMove.height(), this.heightGroup);
	},
	//동작 설정
	action : function(){
		//이동영역 + 기본높이값
		this.valPercent = parseInt(calPercent(this.valPos, this.heightGroup) + parseInt(this.heightMoveOld));

		//0% ~ 100% 설정
		if (this.valPercent > -1 && this.valPercent < 101){
			//영역설정
			this.objSetMove.css('height', this.valPercent + '%');
			//값설정
			this.valToMoney = parseInt((this.valPercent/100) * this.valTotalMoney);
			this.objToMoney.text(this.valToMoney);
			this.objFromMoney.text(this.valFromMoney - this.valToMoney);
			//배경설정
			if (this.objSetMove.height() > this.objGetMove.height()){
				setItMoney.objGetMove.removeClass('is-opacity');
				setItMoney.objSetMove.addClass('is-opacity');
			} else {
				setItMoney.objGetMove.addClass('is-opacity');
				setItMoney.objSetMove.removeClass('is-opacity');
			}
			//console.log(this.valPos);
			//console.log('toMoney:'+ this.objToMoney);
			//console.log('this.valPercent:'+parseInt(this.valPercent)+', heightMove:'+this.heightMove+', this.heightGroup:'+this.heightGroup);  //터치무브 결과체크
		}
		//100% 초과시 100% 설정
		else if (this.valPercent > 100){
			this.valPercent = 100;
			this.objSetMove.css('height', this.valPercent + '%');
			this.objToMoney.text(this.valTotalMoney);
			this.objFromMoney.text(this.valMinMoney);
			//console.log('최대값 초과. 값을 100으로 설정합니다.'); //최대초과 에러체크
		}
		//0% 미만시 0% 설정
		else if (this.valPercent < 0){
			this.valPercent = 0;
			this.objSetMove.css('height', this.valPercent + '%');
			this.objToMoney.text(0);
			this.objFromMoney.text(this.valFromMoney);
			//console.log('최소값 미만. 값을 0으로 설정합니다.'); //최소미만 에러체크
		}
	},
	//확인,취소 보기
	confirmShow : function(){
		this.objBtnWrap.addClass('is-active');
		this.objBtnWrap.attr('aria-hidden', 'false');
		$('#header').addClass('is-mask');
	},
	//확인,취소 숨김
	confirmHide : function(){
		this.objBtnWrap.removeClass('is-active');
		this.objBtnWrap.attr('aria-hidden', 'true');
		$('#header').removeClass('is-mask');
	},
	//툴팁 보기
	tooltipShow : function(){
		if ($('.itMoney-tooltip:visible').length == 0){
			$('.itMoney-tooltip').show();
			$('.itMoney-tooltip').attr('aria-hidden', 'false');
		}
	},
	//툴팁 숨김
	tooltipHide : function(){
		if ($('.itMoney-tooltip:visible').length > 0){
			$('.itMoney-tooltip').hide();
			$('.itMoney-tooltip').attr('aria-hidden', 'true');
		}
	},
	//안드로이드 5.0이상 fixed설정
	setScrollOff : function(){
		/*
		this.scrTop = $('.inq-contents').scrollTop();
		$('.inq-contents').css('overflow', 'hidden'); //솔루션때문에 fixed는 별도처리
		$('.inq-contents').css({top:this.scrTop * -1});
		*/
		this.scrTop = $('html').scrollTop();
		$('html').css('overflow', 'hidden'); //솔루션때문에 fixed는 별도처리
		$('html').css({top:this.scrTop * -1});
		//console.log(this.scrTop);
	},
	//안드로이드 5.0이상 fixed해제
	setScrollOn : function(){
		/*
		this.scrTop = $('.inq-contents').scrollTop();
		$('.inq-contents').css('overflow-y', 'auto'); //솔루션때문에 fixed는 별도처리
		$('.inq-contents').scrollTop(this.scrTop);
		*/
		this.scrTop = $('html').scrollTop();
		$('html').css('overflow-y', 'auto'); //솔루션때문에 fixed는 별도처리
		$('html').scrollTop(this.scrTop);
	},
	//설정값 영역적용
	setMove : function(){
		TweenMax.to( setItMoney.objGetMove, 0.5, {css: {height: setItMoney.objSetMove.height()}, ease: Power4.easeOut});
		//this.objGetMove.stop().animate({height : this.objSetMove.height()}, 200);
		//this.objGetMove.height(this.objSetMove.height());
	},
	//기존값 영역적용
	getMove : function(){
		TweenMax.to( setItMoney.objSetMove, 0.5, {css: {height: setItMoney.objGetMove.height()}, ease: Power4.easeOut});
		//this.objSetMove.css({height:this.objSetMove.height()}).stop().animate({height : this.objGetMove.height()}, 200);
		//this.objSetMove.height(this.objGetMove.height());
	}
}

var setItMoney = {
	objSetMove : null,
	objGetMove : null,
	objGroup : null,
	objToMoney : null,
	objFromMoney : null,
	objBtnWrap : null,
	objBtnComp : null,
	objBtnBack : null,
	heightGroup : null,
	heightMoveOld : null,
	heightMove : null,
	startPos : null,
	movPos : null,
	endPos : null,
	minPos : null,
	maxPos : null,
	valPos : null,
	valPercent : null,
	valToMoney : null,
	valToMoneyOld : null,
	valFromMoney : null,
	valMinMoney : null,
	valTotalMoney : null,
	scrTop : null,
	winTop : 0,
	secTop : 0,
	scrEl : null,
	scrollMode : null,
	scrollArea : null,

	init : function(){
		//오브젝트 초기화
		this.objSetMove = $('.itMoney-move.is-moveSet'); //설정하는 요소
		this.objGetMove = $('.itMoney-move.is-moveGet'); //설정되는 요소
		this.objGroup = $('.itMoney-move-wrap');
		this.objToMoney = $('.itMoney-to .num');
		this.objFromMoney = $('.itMoney-from .num');
		this.objBtnWrap = $('.itMoney-confirm-wrap');
		this.objBtnComp = this.objBtnWrap.find('.btn-itConfirm');
		this.objBtnBack = this.objBtnWrap.find('.btn-itCancel');

		//기본금리 설정
		this.valToMoney = parseInt(this.objToMoney.text());
		this.valFromMoney = parseInt(this.objFromMoney.text()) + parseInt(this.objToMoney.text());
		if (this.objFromMoney.attr('data-min').indexOf('-') != -1){
			this.valMinMoney = parseInt(this.objFromMoney.attr('data-min'));
		} else {
			this.valMinMoney = parseInt(this.objFromMoney.attr('data-min')) * -1;
		}
		this.valTotalMoney = (this.valMinMoney * -1) + this.valFromMoney;
		this.valToMoneyOld = this.valToMoney;

		//스크롤 설정
		this.secTop = $('.account-history-new').offset().top;
		this.scrEl;
		this.scrollMode = 'no-scrolled';

		//화면맞추기
		this.resize();

		//초기설정
		this.setInit();
		this.event();
		this.setMove();

		//결과값 체크
		//console.log('h:'+h+', valPos:'+parseInt(this.objSetMove.height())+', this.heightGroup:'+this.heightGroup);
		//console.log('height :'+ this.objSetMove.height());
	},
	resize : function(){
		$('.itMoney-wrap').height($(window).innerHeight() - $('#container .contents-header').outerHeight() - $('#header').outerHeight());
		$('.account-history-new').css('height', 'calc(100vh - 4.4rem)');
		this.heightGroup = this.objGroup.height();
		this.heightMove = calPercent(this.objSetMove.height(), this.heightGroup);

		$('html, body').css({'overflow':'hidden', 'position':'fixed', 'height':'100%', 'width':'100%'});
		this.scrEl = $('body');

		var tStart;
		var tEnd;
		var scrollMove = function(){
			if (setItMoney.scrollMode == 'no-scrolled' && tStart > tEnd){
				setItMoney.scrEl.animate({scrollTop : setItMoney.secTop}, 600, function(){
					setItMoney.scrollMode = 'is-scrolled';
					setItMoney.scrollArea = null;
					tEnd = null;
				});
			}

			if (setItMoney.scrollMode == 'is-scrolled' && $('.account-history-new.scroll-wrap').scrollTop() == 0 && tStart < tEnd){
				setItMoney.scrEl.scrollTop(setItMoney.secTop);
				setItMoney.scrEl.animate({scrollTop : 0}, 600, function(){
					setItMoney.scrollMode = 'no-scrolled';
					setItMoney.scrollArea = null;
					tEnd = null;
				});
			}

		}

		$(window).on('mousedown touchstart', function(e){
			tStart = e.originalEvent.touches[0].screenY;
			//터치드래그 초기화
			tEnd = null;
			//스크롤영역인지 체크
			if ($('.is-move').has(e.target).length == 0 && $('.itMoney-confirm').has(e.target).length == 0){
				setItMoney.scrollArea = true;
			} else {
				setItMoney.scrollArea = null;
			}
		})
		$(window).on('mousedown touchmove', function(e){
			//터치드래그 설정
			tEnd = e.originalEvent.touches[0].screenY;
		})
		$(window).on('mouseup touchend', function(e){
			//$('#valued').text(setItMoney.scrollArea);

			//스크롤영역이면서, 터치드래그 여부체크
			if (setItMoney.scrollArea == true && tEnd != null){
				scrollMove();
			}
		})

		/*
		this.minPos = this.objGroup.offset().top;
		this.maxPos = this.minPos + this.heightGroup;
		*/
	},
	event : function(){
		//터치시작
		this.objSetMove.find('button').on('mousedown touchstart', function(e){
			//$(window).on('scroll touchmove mousewhell', function(e){e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();});
			setItMoney.setScrollOff();
			setItMoney.startPos = e.originalEvent.touches[0].screenY;
		});
		//터치진행
		this.objSetMove.find('button').on('touchmove', function(e){
			setItMoney.movPos = e.originalEvent.touches[0].screenY;
			setItMoney.valPos = setItMoney.movPos - setItMoney.startPos;
			setItMoney.action();
			//console.log(setItMoney.valPos);
		});
		//터치종료
		this.objSetMove.on('mouseup touchend', function(e){
			//$(window).off('scroll touchmove mousewhell');
			setItMoney.confirmShow();
			setItMoney.tooltipHide();
		});
		//설정완료
		this.objBtnComp.on('click', function(){
			//설정버튼 닫기
			setItMoney.confirmHide();
			//초기값 설정
			setItMoney.heightMove = parseInt(calPercent(setItMoney.objSetMove.height(), setItMoney.heightGroup));
			setItMoney.valToMoneyOld = parseInt(setItMoney.objToMoney.text());
			setItMoney.heightMoveOld = setItMoney.heightMove;
			setItMoney.setMove();
			//console.log(setItMoney.heightMove);
			//alert(setItMoney.heightMove);

		});
		//설정취소
		this.objBtnBack.on('click', function(){
			//설정버튼 닫기
			setItMoney.confirmHide();
			//초기값 되돌리기
			setItMoney.objToMoney.text(setItMoney.valToMoneyOld);
			setItMoney.objFromMoney.text(setItMoney.valTotalMoney - setItMoney.valToMoneyOld + setItMoney.valMinMoney);
			//setItMoney.setInit();
			setItMoney.getMove();
		});
	},
	//초기값 설정
	setInit : function(){
		//$('html, body').css({'height':'100%', 'overflow':'hidden'});
		//$('body').css({'overflow':'auto'})
		this.valPercent = calPercent(this.valToMoneyOld, this.valTotalMoney);
		this.objSetMove.css('height', this.valPercent + '%');
		this.heightMoveOld = calPercent(this.objSetMove.height(), this.heightGroup);
		//setItMoney.setMove();
	},
	//화면 재설정
	resetInit : function(){
		this.valPercent = calPercent(this.valToMoneyOld, this.valFromMoney);
		this.objSetMove.css('height', this.valPercent + '%');
		this.heightMove = calPercent(this.objSetMove.height(), this.heightGroup);
	},
	//동작 설정
	action : function(){
		//이동영역 + 기본높이값
		if (isAndroid_ver == null){
			this.valPos = this.valPos *2;
		}
		this.valPercent = parseInt(calPercent(this.valPos, this.heightGroup) + parseInt(this.heightMoveOld));
		//$('.contents-header-title').text(this.valPercent + ',' + this.valPos + ', ' + this.heightGroup);
		//0% ~ 100% 설정
		if (this.valPercent > -1 && this.valPercent < 101){
			//영역설정
			this.objSetMove.css('height', this.valPercent + '%');
			//값설정
			this.valToMoney = parseInt((this.valPercent/100) * this.valTotalMoney);
			this.objToMoney.text(this.valToMoney);
			this.objFromMoney.text(this.valFromMoney - this.valToMoney);
			//배경설정
			if (this.objSetMove.height() > this.objGetMove.height()){
				setItMoney.objGetMove.removeClass('is-opacity');
				setItMoney.objSetMove.addClass('is-opacity');
			} else {
				setItMoney.objGetMove.addClass('is-opacity');
				setItMoney.objSetMove.removeClass('is-opacity');
			}
			//console.log(this.valPos);
			//console.log('toMoney:'+ this.objToMoney);
			//console.log('this.valPercent:'+parseInt(this.valPercent)+', heightMove:'+this.heightMove+', this.heightGroup:'+this.heightGroup);  //터치무브 결과체크
		}
		//100% 초과시 100% 설정
		else if (this.valPercent > 100){
			this.valPercent = 100;
			this.objSetMove.css('height', this.valPercent + '%');
			this.objToMoney.text(this.valTotalMoney);
			this.objFromMoney.text(this.valMinMoney);
			//console.log('최대값 초과. 값을 100으로 설정합니다.'); //최대초과 에러체크
		}
		//0% 미만시 0% 설정
		else if (this.valPercent < 0){
			this.valPercent = 0;
			this.objSetMove.css('height', this.valPercent + '%');
			this.objToMoney.text(0);
			this.objFromMoney.text(this.valFromMoney);
			//console.log('최소값 미만. 값을 0으로 설정합니다.'); //최소미만 에러체크
		}
	},
	//확인,취소 보기
	confirmShow : function(){
		this.objBtnWrap.addClass('is-active');
		this.objBtnWrap.attr('aria-hidden', 'false');
		$('#header').addClass('is-mask');
		this.setScrollOn();

	},
	//확인,취소 숨김
	confirmHide : function(){
		this.objBtnWrap.removeClass('is-active');
		this.objBtnWrap.attr('aria-hidden', 'true');
		$('#header').removeClass('is-mask');
	},
	//툴팁 보기
	tooltipShow : function(){
		if ($('.itMoney-tooltip:visible').length == 0){
			$('.itMoney-tooltip').show();
			$('.itMoney-tooltip').attr('aria-hidden', 'false');
		}
	},
	//툴팁 숨김
	tooltipHide : function(){
		if ($('.itMoney-tooltip:visible').length > 0){
			$('.itMoney-tooltip').hide();
			$('.itMoney-tooltip').attr('aria-hidden', 'true');
		}
	},
	//스크롤고정 설정
	setScrollOff : function(){
		if (isAndroid_ver != null){
			this.scrTop = $('html').scrollTop();
			$('html').css('overflow','hidden');
		} else {
			this.scrTop = $('body').scrollTop();
		}

		$('body').css({'position':'fixed', 'width':'100%', 'left':'0', 'top': this.scrTop * -1});
	},
	//스크롤고정 해제
	setScrollOn : function(){
		if (isAndroid_ver != null){
			$('html').removeAttr('style');
			$('html').scrollTop(this.scrTop);
		} else {
			$('body').scrollTop(this.scrTop);
		}
		$('body').css({'position':'static'});
	},
	//스크롤위치 처음으로
	setScrollTop : function(){

	},
	//설정값 영역적용
	setMove : function(){
		TweenMax.to( setItMoney.objGetMove, 0.5, {css: {height: setItMoney.objSetMove.height()}, ease: Power4.easeOut});
	},
	//기존값 영역적용
	getMove : function(){
		TweenMax.to( setItMoney.objSetMove, 0.5, {css: {height: setItMoney.objGetMove.height()}, ease: Power4.easeOut});
	}
}

//Infinite Focus
var infiniteFocus = null;

//Infinite Scroll
var infiniteScroll = function(callback){
	var objWrap = $('.js-infinite-wrap:visible');
	var objMore = objWrap.next('.js-infinite-more');
	var objScroll = $('.'+objWrap.attr('data-scroll'));
	var objInner = objScroll.children();

	//if (objMore.length){
	//	objMore.remove();
	//}
	if (infiniteFocus != null){
		infiniteFocus.next().attr('tabindex', '0').focus();
	}

	if (objScroll.length == 0){
		$(document).on('scroll', function(){
			if ($(window).scrollTop() == $(document).outerHeight() - $(window).height()){
				objScroll.off('scroll');
				callback();
			}
		})
	} else {
		$(objScroll).on('scroll', function(){
			if ($(objScroll).scrollTop() == $(objInner).outerHeight() - $(objScroll).height()){
				objScroll.off('scroll');
				callback();
			}
		})
	}
}

//Infinite Loading
var infiniteLoading = function(){
	var objWrap = $('.js-infinite-wrap:visible');
	var objMore = objWrap.next('.js-infinite-more');
	var moreHTML = null;
	if (objMore.length == 0){
		moreHTML = '<div class="infinite-more-wrap js-infinite-more"><button class="infinite-more"><span>더보기</span></botton></div>';
		objWrap.after(moreHTML);

		$('.infinite-more').on('click', function(){
			if ($(objWrap).find('.list-info').children().length){
				//console.log($(objWrap).find('.list-info').children().length);
				infiniteFocus = $(objWrap).find('.list-info').children().last();
			}
		})
	}
}

//Infinite Loading
var infiniteLoadingRemove = function(){
	$('.js-infinite-wrap:visible + .js-infinite-more').each(function(){
		$(this).remove();
	})
}

var termSlides = function(){
	$('.clause-wrap .swiper-container').each(function(){
		var termSlides = new Swiper('.clause-wrap .swiper-container', {
			slidesPerView : 'auto',
			navigation : {
				nextEl : '.clause-wrap .right-btn',
				prevEl : '.clause-wrap .left-btn',
			}
		})
	})
}

//input type=file
var formFileLoad = function(){
	$('.js-file-btn').on('click', function(){
		$(this).closest('.js-file-wrap').find('input[type=file]').trigger('click');
	});
	$('input[type=file]').on('change', function(){
		$(this).prev('input[type=text]').val($(this).val());
	})
}

//거래내역조회 상단고정
var accountTopFixed = function(){
	$('.popup-history .scroll-wrap').on('scroll', function() {
		if ($('.term-date').length){
			var targetPos = $('.term-date').position().top + ($('.term-date').outerHeight());
		} else {
			var targetPos = $('.accountTop-Style1 .account-number2').position().top + $('.accountTop-Style1 .account-number2').outerHeight();
		}
		if (targetPos < 0){
			if (!$('.account-header-fixed').hasClass('is-visible')) {
				$('.account-header-fixed').addClass('is-visible');
				$('.account-header-fixed button.search').off().on('click', function() {
					var returnPos = $('.accountTop-Style1').outerHeight();
					spyScroll('.popup-history .scroll-wrap', returnPos);
				});
				$('.account-header-fixed').attr('aria-hidden', 'false');
				TweenMax.to( $('.account-header-fixed .innerWrap'), 0.3, {css: {y: 0}, ease:Power4.easeOut});
				//$('.account-header-fixed').stop().animate({transform:'translateY(0rem)'});
			}
		}
		else {
			if ($('.account-header-fixed').hasClass('is-visible')) {
				$('.account-header-fixed').removeClass('is-visible');
				TweenMax.to( $('.account-header-fixed .innerWrap'), 0.3, {css: {y:-$('.account-header-fixed .innerWrap').innerHeight()}, ease:Power4.easeOut, onCommplete:function() {
					$('.account-header-fixed').attr('aria-hidden', 'true');
				}});
			}
		}
	});
}

//헤더 상단제목표시
var stickyHeader = function(){
	var modePage = false;
	var modePopup = false;
	var headerH = 44;
	var targetScroll = null;

	if ($('body').is('.ios')){
		targetScroll = $('body');
	} else {
		targetScroll = $('html');
	}

	$(window).off().on('scroll', function(){
		pageAction(targetScroll);
	})
	$('.popup-style .container').on('scroll', function(){
		popupAction($(this));
	})

	var pageAction = function($target){
		//헤더높이 이상 스크롤하면 실행
		if ($target.scrollTop() > headerH){
			//실행하지 않은상태에서만 실행
			if (modePage == false){
				$('#header .header-title').addClass('is-visible').attr('aria-hidden', 'false');
				modePage = true;
			}
		} else {
			//실행하지 않은상태에서만 실행
			if (modePage == true){
				$('#header .header-title').removeClass('is-visible').attr('aria-hidden', 'true');
				modePage = false;
			}
		}
	}
	var popupAction = function($target){
		//헤더높이 이상 스크롤하면 실행
		if ($target.scrollTop() > headerH){
			//실행하지 않은상태에서만 실행
			if (modePopup == false){
				$('.container').prev('.header-title').addClass('is-visible').attr('aria-hidden', 'false');
				modePopup = true;
			}
		} else {
			//실행하지 않은상태에서만 실행
			if (modePopup == true){
				$('.container').prev('.header-title').removeClass('is-visible').attr('aria-hidden', 'true');
				modePopup = false;
			}
		}
	}

	pageAction(targetScroll);
}

var certPassword = function(){
	var lenValued = null;
	var $objForm = $('.password-wrap .cert-password');
	var action = function($this){
		lenValued = $this.val().length;
		$('.password-wrap .line').each(function(n){
			if (lenValued > n){$('.password-wrap .line').eq(n).addClass('on')}
			else {$('.password-wrap .line').eq(n).removeClass('on')}
		})
	}
	$objForm.on('keyup', function(){
		action($(this));
	});
	$objForm.each(function(){
		action($(this));
	})
}

var toggleContent = function(obj, id){
	//숨길때
	if ($('#'+id).is('[aria-hidden=false]')){
		$('#'+id).attr('aria-hidden', 'true');
		$('#'+id).addClass('dpn');
		$(obj).removeClass('minus');
	}
	//추가할때
	else if ($('#'+id).is('[aria-hidden=true]')){
		$('#'+id).attr('aria-hidden', 'false').removeClass('dpn').attr('tabindex', '0');
		$(obj).addClass('minus');
		setTimeout(function(){
			$('#'+id).find('label').first().trigger('focus');
		}, 500)
		//$(document).scrollTop($(document).height() - $(window).height());
	}
}

var accountItemSwiper = function(){
	var cardSlides = new Swiper('.account-item .swiper-container', {
		slidesPerView : 'auto',
		freeMode: true,
		on : {
			init : function(){
				swiperAria({swiperGroup : '.account-item'});
			},
			transitionEnd : function(){
				swiperAria({swiperGroup : '.account-item'});
			}
		}
	})
}

var pageSlide = function(id){
	var objWrap = '.slide-contents';
	var objGroup = '.slide-section-wrap';
	var objSection = '.slide-section';
	var objActive = '#'+id;

	$(objActive).slideDown(300).siblings().slideUp(300, function(){
		$(objActive).attr('aria-hidden', 'false').siblings().attr('aria-hidden', 'true');
		$(objActive).find('.footer').removeClass('dpn')
		$(objActive).siblings().find('.footer').addClass('dpn');
		//$(objActive).attr('tabindex', '0').focus();
	});
	//$(objActive).addClass('is-active').siblings().removeClass('is-active');
}

var ariaTabs = function(){
	var objTabs = '.aria-tabs';
	var roleItem = '.aria-tabs [role=tab]';
	var objPanelActive = null;

	$(roleItem).off().on('click', function(){
		objPanelActive = '#' + $(this).attr('aria-controls');
		action($(this), objPanelActive);
	})

	var action = function($item, panel){
		$item.attr('aria-selected', 'true').siblings().attr('aria-selected', 'false');
		$(panel).attr('aria-hidden', 'false').siblings().attr('aria-hidden', 'true');
	}
}

var ajaxTabs = function(){
	var objTabs = '.ajax-tabs';
	var roleItem = '.ajax-tabs [role=tab]';
	var objPanelActive = null;
	var dataUrl = null;

	var action = function($item, panel, dataUrl){
		$item.attr('aria-selected', 'true').siblings().attr('aria-selected', 'false');
		$(panel).attr('aria-labelledby', $item.attr('id'));
		/*
		if (dataUrl == ""){$(panel).empty()}
		else {$(panel).load(dataUrl)}
		*/
	}

	$(roleItem).off().on('click', function(){
		objPanelActive = '#' + $(this).attr('aria-controls');
		dataUrl = $(this).attr('data-url');
		action($(this), objPanelActive, dataUrl);
	})

	$(roleItem + '[aria-selected=true]').each(function(){
		objPanelActive = '#' + $(this).attr('aria-controls');
		dataUrl = $(this).attr('data-url');
		action($(this), objPanelActive, dataUrl);
	})
}

var auth_tab_handler = function(){
	/* 인증 탭 */
	$('.tab-auth-cover li .item').children("label").click( function() {
		var idx = $(this).parent().parent().index();
		var objGroup = '.tab-auth-cover';

		//탭목록과 연결되어있는 경우
		if ($(this).closest(objGroup).next().is('.tab')){
			$(this).closest(objGroup).next('.tab').find('.tab-list').addClass('dpn');
			$(this).closest(objGroup).next('.tab').find('.tab-list').eq(idx).removeClass('dpn');
		}
		//탭목록과 떨어져있는 경우
		else {
			var dataTarget = $(this).attr('data-target');
			$('.tab-content[data-name='+dataTarget+']').addClass('dpn');
			$('.tab-content[data-name='+dataTarget+']').eq(idx).removeClass('dpn');
		}
	});
}

var pwAutoFocus = function(){
	//출금번호 자동 토스
	$(".next-input").on('focus', function() {
		$(this).parents("span").addClass("on");
	});
	$(".next-input").on('blur', function() {
		if ($(this).val() != ""){$(this).parents("span").addClass("on")}
		else {$(this).parents("span").removeClass("on");}
	});
	$(".next-input").keyup( function() {
		var charLimit = $(".next-input").attr("maxlength");
		if (this.value.length >=  charLimit){
			$(this).parents("span").next("span").children("input").focus();
			$(this).parents("span").addClass("on");
			return false;
		}
	});
}


//2018.07.23 오은정 추가
var certifyList = function(){
	//인증서 클릭시 클래스 추가
	$(".certify-list > li[role='button']").on('click', function() {
		$(".certify-list > li[role='button']").removeClass("on");
		$(this).addClass("on");
	});
}

//2018.07.23 오은정 추가
var acountListNEW = function(){
	//인증서 클릭시 클래스 추가
	$(".acountList > li[role='button']").on('click', function() {
		$(".acountList > li[role='button']").removeClass("on");
		$(this).addClass("on");
	});
}

//2018.07.26 오은정 추가
var AllMenuCont = function() {
	var bodyH = $(window).height(),
		headerH = $('#header').outerHeight(),
		navH1 = $('.mai-head').outerHeight(),
		navH2 = $('.tab-menu-depth1-cover.tab-gray').outerHeight(),
		AllMenuH = bodyH -(headerH + navH1 + navH2) - 4,
		total = $('.all-menu-list .all-menu-btn ul').find('>li').length,
		rightArrOfLoc = [],
		leftArrOfLoc = [],
		timerTypeA = 0,
		timerTypeB = 0,
		setTimeNum = 100,
		rightMoveBool = false,
		rightChkH = 0,
		leftChkH = 0;

	//전체메뉴높이구하기
	$('.all-menu-list').css('height', AllMenuH);
	$('.popup-style .popup-contents').css('padding-bottom','0');

	$(window).on('resize', function(){
		bodyH = $(window).height();
		headerH = $('#header').outerHeight();
		navH1 = $('.mai-head').outerHeight();
		navH2 = $('.tab-menu-depth1-cover.tab-gray').outerHeight();
		AllMenuH = bodyH -(headerH + navH1 + navH2) - 4;
		$('.all-menu-list').css('height', AllMenuH);
	});

	for(var a=0; a<total; a++) {
		rightChkH += $('.all-menu-cont .scroll-wrap .all-menu-group').find('>li').eq(a).outerHeight()-4;
		leftChkH += $('.all-menu-title li').eq(a).outerHeight();
		rightArrOfLoc.push( rightChkH );
		leftArrOfLoc.push( leftChkH );
	}

	$('.all-menu-title li').children('button').addClass('is-notFocus').on('click', function(e) {
		var n = $(this).parent().index(),
			chkTop = chkRightHeightNum(n);

		$('.all-menu-title li').children("button").removeClass('on');
		$('.all-menu-title li').eq(n).children("button").addClass('on');
		$('.all-menu-title .scroll-wrap').stop().animate({scrollTop: leftArrOfLoc[n-1]}, 300);
		$('.all-menu-cont .scroll-wrap').stop().animate({scrollTop: chkTop}, 300);
	});

	$('.all-menu-title').on('touchstart', function() {
		rightMoveBool = false;
		if( timerTypeA != 0 ) { clearTimeout( timerTypeA ); timerTypeA = 0; }
	});

	/* 스크롤막기
	$('.all-menu-cont').on('touchstart', function() { rightMoveBool = true; });
	$('.all-menu-cont .scroll-wrap').on('scroll', function(e) {
		if(rightMoveBool) {
			if( timerTypeA != 0 ) { clearTimeout( timerTypeA ); timerTypeA = 0; }
			timerTypeA = setTimeout( moveLeftMenu, setTimeNum );
		}
	});
	*/

	function moveLeftMenu() {
		// console.log('moveLeftMenu');
		rightMoveBool=false;
		var sctNum = $('.all-menu-cont .scroll-wrap').scrollTop(),
			chkNum = valueNum(),
			chkTop = chkLeftHeightNum(chkNum);
		$('.all-menu-title .scroll-wrap').stop().animate({scrollTop: chkTop}, 300);
		$('.all-menu-title li').children("button").removeClass('on');
		$('.all-menu-title li').eq(chkNum).children("button").addClass('on');
		// console.log('sctNum : '+ sctNum +' : chkNum = ' + chkNum + ' : chkTop = ' + chkTop);
		function valueNum() {
			var chkNum = 0,
				chkBool = false;
			for(var a=0; a<total; a++) {
				if( sctNum > rightArrOfLoc[a] ) {
					chkNum = a+1; chkBool = true;
				}
			}
			return chkNum;
		}
	}

	function chkRightHeightNum(n) {
		var chkNum = 0;
		for(var a=0; a<n; a++) {
			chkNum += $('.all-menu-cont .scroll-wrap .all-menu-group').find('>li').eq(a).outerHeight();
		}
		return chkNum;
	}

	function chkLeftHeightNum(n) {
		var chkNum = 0;
		for(var a=0; a<n; a++) {
			chkNum += $('.all-menu-title .scroll-wrap .all-menu-btn ul').find('>li').eq(a).outerHeight();
		}
		return chkNum;
	}

	/*$('.all-menu-title li').each( function(i) {
		$('.all-menu-title li').eq(i).children("button").off().on('click', function() {
			var Allcont = $('.all-menu-group > li').eq(i).position().top;
			var AllScroll = $('.all-menu-cont .scroll-wrap').scrollTop();
			var AllcontTop = Allcont + AllScroll;
			$('.all-menu-cont .scroll-wrap').stop().animate({scrollTop: AllcontTop}, 500);
			return false;
		});
	});
	$('.all-menu-cont .scroll-wrap').on('scroll', function(){
		$('.all-menu-title li').each( function(i) {
			var Allcont = $('.all-menu-group > li').eq(i).position().top;
			var AllScroll = $('.all-menu-cont .scroll-wrap').scrollTop();
			var AllcontTop = Allcont + AllScroll - 40;
			var Allcont2 = $('.all-menu-title ul > li').eq(i).position().top;
			var AllScroll2 = $('.all-menu-title .scroll-wrap').scrollTop();
			var AllcontTop2 = Allcont2 + AllScroll2;

			if( AllScroll >= AllcontTop ) {
				$('.all-menu-title li').children("button").removeClass('on');
				$('.all-menu-title li').eq(i).children("button").addClass('on');

				$('.all-menu-title .scroll-wrap').scrollTop(AllcontTop2);
				//return false;
			}
		});
	});*/
}

//2018.08.02 오은정 맵 높이값
var MapHeight = function() {
	bodyH = $(window).height();
	hdH = $('.popup .contents-header').outerHeight();
	mapLSH = $('.popup .col-white').outerHeight();
	footerH = $('.popup .footer').outerHeight();
	MapH = bodyH - (hdH+mapLSH+footerH) + 11;

	$('.popup .map').css('height',MapH);
	$('.popup-style .scroll-wrap .scroll-inner').css('padding','0');
}

var setNavBar = {
	init : function(){
		var setHTML =
		setHTML =
			'<nav id="navBar" class="navBar-wrap">'
			+'	<ul class="navBar">'
			+'		<li class="navBarList"><button type="button" class="nav-btn nav-dep">예금</button></li>'
			+'		<li class="navBarList"><button type="button" class="nav-btn nav-lon">대출</button></li>'
			+'		<li class="navBarList"><button type="button" class="nav-btn nav-fin">금융상품</button></li>'
			+'		<li class="navBarList"><button type="button" class="nav-btn nav-csc">고객센터</button></li>'
			+'		<li class="navBarList"><button type="button" class="nav-btn nav-all">전체메뉴</button></li>'
			+'	</ul>'
			+'</nav>'
			+'<div class="navFull-wrap">'
			+'	<div class="scroll-wrap">'
			+'		<div class="scroll-inner">'
			+'		</div>'
			+'	</div>'
			+'</div>';

		if ($('#navBar').length == 0){
			$('#container').after(setHTML);
		}

		this.show();
		this.event();
	},
	event : function(){
		$('#navBar .nav-btn').off().on('click', function(){
			$('#navBar .navBarList.on').removeClass('on');
			$(this).parent().addClass('on');
			if ($(this).is('.nav-all')){
				setNavBar.allMenu();
			}
		});
	},
	allMenu : function(){
		if ($('.navFull-wrap').is('.is-visible')){
			$('.navFull-wrap').removeClass('is-visible');
			$('body').removeClass('is-fixed');
		} else {
			$('.navFull-wrap').addClass('is-visible');
			$('body').addClass('is-fixed');
		}
	},
	show : function(){
		if ($('#wrapper .footer').length == 0 && $('.lgn-contents').length == 0 && $('.error-contents').length == 0){
			$('#navBar').addClass('is-visible');
			$('#wrapper').addClass('has-navBar');
		}
	},
	hide : function(){
		$('#navBar').removeClass('is-visible');
		$('#wrapper').removeClass('has-navBar');
	}
}

//input-Cover Active
var formCoverCheck = function(){
	var objGroup = '.input-cover';
	var objForm = '.input-area > input, .select-area .selectbox > select';
	var objRequired = '.is-required';
	var isFocused = 'is-focused';
	var isValued = 'is-valued';

	//Required Check
	var requiredCheck = function($this){
		var checkValued = true;
		var checkLen = $this.closest(objGroup+objRequired).find(objForm).length;
		$this.closest(objGroup+objRequired).find(objForm).each(function(n){
			//Input 일때
			if ($(this).is('input') && $(this).closest(objGroup).is(objRequired)){
				if ($(this).val() == ""){checkValued = false;}
			}
			//Select 일때
			if ($(this).eq(n).is('select[data-guide=true]') && $(this).closest(objGroup).is(objRequired)){
				if ($(this).eq(n).find('option').index($(this).find('option:selected')) == 0){
					checkValued = false;
				}
			}

			//마지막요소 체크후 클래스 적용
			if (checkLen - 1 == n ){
				//Valued Check
				if (checkValued == true){$(this).closest(objGroup).addClass(isValued)}
				else if (checkValued == false){$(this).closest(objGroup).removeClass(isValued)}
			}
		})
	}

	//Init
	$(objGroup+objRequired).each(function(){
		requiredCheck($(this).find(objForm).eq(0));
	})

	//Event
	$(document).on('focus', objForm, function(e){
		$(this).closest(objGroup).addClass(isFocused);
	})
	$(objForm).on('blur', function(){
		$(this).closest(objGroup).removeClass(isFocused);
		requiredCheck($(this));
	})
}

//셀렉트박스 디자인적용
var formSelectCheck = function(){
	var obj = '.selectbox select';
	var dataGuide = '[data-guide=true]';

	//Action
	var action = function($this){
		var idx = $this.find('option').index($this.find('option:selected'));
		if (idx == 0){$this.removeClass('is-focused')}
		else if (idx > 0){$this.addClass('is-focused')}
	}

	//Init
	$(obj+dataGuide).each(function(){
		action($(this));
	})

	//Event
	$(document).on('click', obj+dataGuide, function(){
		$(this).off().on('change', function(){
			action($(this));
		})
	})
}

//회색백그라운드 높이 맞추기
var grayHeight = function() {
	var bodyH = $(window).height();
	var headerH = $('#header').outerHeight();
	var navH = $('.navBar-wrap.is-visible').height();
	var greyH = bodyH - headerH - navH;
	$('#container').css('min-height',greyH);
	$('#container .h100p').css('min-height',greyH);
}

//팝업 스크롤높이
var popupScrollHeight = function() {
	var bodyH = $(window).height();
	var headerSH = $('.container .contents-header-box');
	var headerBH = $('.container .contents-header');
	var headerH = 0;
	var scrollH = 0;

	if (headerSH.length > 0){headerH = headerSH.outerHeight()}
	else {headerH = headerBH.outerHeight()}
	scrollH = bodyH - headerH;
	$('.container .popup .scroll-wrap').css('height',scrollH);
}

//접기,펼치기 (기본값, 접힌상태)
/* Ver1.0 대체텍스트만 적용 */
var folderToggleState = true;
var folderToggle = function(){
	//Options

	var stringReplace = function(str, check){
		if (str.indexOf(check) > -1){
			str = str.replace(check, '');
		}
		return str;
	}

	$('.js-toggle').not('.is-changed').each(function(){
		var valTit = '';
		var valFix = ' 내용 ';
		var valaTxt = '펼치기';

		//기본텍스트가 접기인경우
		if ($(this).text() == '접기'){
			$(this).text('펼치기');
		}

		//guide_library_toggle.html 타입참고
		//Type1, Type2 (알림정보 토글타입 - dt > 제목 + 토글)
		if ($(this).closest('.box-explain').length && $(this).closest('dt').length){
			valTit = stringReplace($(this).closest('dt').text(), valaTxt) + valFix;
		}

		//Type3 (조회목록 토글타입 - name + 버튼)
		if ($(this).closest('.history-lists.toggle').length && $(this).prev('.name').length){
			valTit = $(this).prev('.name').text() + valFix;
		}

		//Type4 (상세검색 토글타입 - 예외처리)
		//CSS 가상요소로 직접제공

		//Type5 (조회목록 토글타입 - visible + 버튼)
		if ($(this).closest('.history-lists.toggle').length && $(this).prev('.visible').find('.name').length){
			valTit = $(this).prev('.visible').find('.name').text() + valFix;
		}

		//Type6 (상세내역 토글타입 - box-result + 버튼)
		if ($(this).prev('.box-result').length){
			valTit = '상세' + valFix;
		}

		//Type7 (입력정보 토글타입 - tab-title > 제목 + 버튼)
		if ($(this).closest('.tab-title').length && $(this).prev('.sub-tit01').length){
			valTit = $(this).prev('.sub-tit01').text() + valFix;
		}

		//Type8 (약관동의 토글타입 - agree-cover-item > 제목 + 버튼)
		if ($(this).closest('.agree-cover-item').length && $(this).prev('label').length){
			valTit = $(this).prev('label').text() + valFix;
		}

		//Type9 (약관동의 토글타입 - agree-cover-item > 제목 + 버튼)
		if ($(this).parent('.account-infoStyle1').length && $(this).next('.basic-cover').find('table').length){
			valTit = $(this).next('.basic-cover').find('table td').eq(0).text() + valFix;
		}

		//기본값 설정
		$(this).not('.detail-sch').text(valTit + valaTxt);
		$(this).addClass('is-changed');

		//이벤트
		$(this).off().on('click', function(){
			//Options
			var $this = $(this);
			var objGroup = $this.closest('.js-fold');
			var hideH = 0;
			var hideLen = objGroup.find('.hide').length;
			var etcGap = 0;

			//예외처리 - 스탭 제목토글
			if ($this.parent('.tab-title').length){etcGap = 15}

			if (folderToggleState == true){
				folderToggleState = false;

				//펼친상태
				if (objGroup.is('.is-opened')){
					objGroup.css({height:objGroup.outerHeight()});
					valaTxt = valTit + '펼치기';
					//console.log(valaTxt);
					objGroup.find('.hide').each(function(i){
						hideH = hideH + $(this).outerHeight();
						objGroup.removeClass('is-opened');
						if (i == hideLen - 1){
							//console.log($(this).height());
							var foldH = objGroup.outerHeight() - hideH - etcGap;
							objGroup.stop().animate({height:foldH},300, function(){
								objGroup.find('.hide').hide();
								folderToggleState = true;
							})
						}
					})
				}

				//접힌상태
				else {
					objGroup.css({height:objGroup.outerHeight()});
					objGroup.find('.hide').show();
					valaTxt = valTit + '접기';
					//console.log(valaTxt);
					objGroup.find('.hide').each(function(i){
						objGroup.addClass('is-opened');
						hideH = hideH + $(this).outerHeight();
						if (i == hideLen - 1){
							var foldH = objGroup.outerHeight();
							objGroup.stop().animate({height:foldH + hideH + etcGap},300, function(){
								folderToggleState = true;
								objGroup.removeAttr('style');
							});
						}
					})
				}
				if (!$this.is('.detail-sch')){
					$this.text(valaTxt);
				}
			}
		});
	})
}

// V2.0 (대체텍스트 + 용도설명)
/*
var folderToggle = {
	options : {
		thisGroup : null,
		objGroup : '.js-fold',
		objToggle : '.js-toggle',
		objHide : '.hide',
		hideH : 0,
		hideLen : null,
		etcGap : 0,
		valTit : '',
		valaTxt : '',
		folderToggleState : true
	},
	init : function(options){
		var _options = this.options;
		_options = $.extend(null, this.options, options);
		_options.thisGroup = $(_options.objToggle).closest(_options.objGroup);
		_options.hideLen = _options.thisGroup.find(_options.objHide).length;
		console.log(_options);
	},
	event : function(){
		var _options = this.options;
		$(_options.objToggle).off().on('click', function(){
			_options.action($(this));
		});
	},
	action : function($this){
		var _options = this.options;

		//예외처리 - 스탭 제목토글
		if ($this.parent('.tab-title').length){_options.etcGap = 15}

		if (_options.folderToggleState == true){
			_options.folderToggleState = false;

			//펼친상태
			if (_options.thisGroup.is('.is-opened')){
				_options.thisGroup.css({height:_options.thisGroup.outerHeight()});
				_options.valaTxt = _options.valTit + ' 펼치기';
				_options.thisGroup.find(_options.hideH).each(function(i){
					_options.hideH = _options.hideH + $(this).outerHeight();
					_options.thisGroup.removeClass('is-opened');
					if (i == _options.hideLen - 1){
						console.log($(this).height());
						var foldH = _options.thisGroup.outerHeight() - hideH - etcGap;
						_options.thisGroup.stop().animate({height:foldH},300, function(){
							_options.thisGroup.find('.hide').hide();
							folderToggleState = true;
						})
					}
				})
			}

			//접은상태
			else {
				_options.thisGroup.css({height:_options.thisGroup.outerHeight()});
				_options.thisGroup.find('.hide').show();
				_options.valaTxt = _options.valTit + ' 접기';
				_options.thisGroup.find('.hide').each(function(i){
					_options.thisGroup.addClass('is-opened');
					_options.hideH = _options.hideH + $(this).outerHeight();
					if (i == _options.hideLen - 1){
						var foldH = _options.thisGroup.outerHeight();
						_options.thisGroup.stop().animate({height:foldH + _options.hideH + _options.etcGap},300, function(){
							_options.folderToggleState = true;
						});
					}
				})
			}
			if (!$this.is('.detail-sch')){
				$this.text(_options.valaTxt);
			}
		}
	}
}
*/
//아코디언 기본
var accordion = function(){
	var objGroup = '.accordion';
	var objToggle = '.accordion-title';
	var objContent = '.accordion-content';

	var action = function($this){
		$this.parents(objGroup).siblings().find(objContent).stop().slideUp(200);
		$this.next(objContent).stop().slideToggle(200);

		if($this.parents(objGroup).hasClass('on')){
			$this.parents(objGroup).removeClass('on');
		}
		else{
			$this.parents(objGroup).addClass('on').siblings().removeClass('on');
		}
	}

	$(objGroup+'.on').each(function(){
		action($(this).find(objToggle));
	})

	$(objToggle).not('.not-toggle').off().on('click', function(){
		action($(this));
	})
}

//아코디언 - qna, faq
var accordion2 = function(){
	var objGroup = '.accordion-lists li';
	var objToggle = '.has-answer';
	var objContent = '.a-area';

	var action = function($this){
		$this.parents(objGroup).siblings().find(objContent).stop().slideUp(200);
		$this.next(objContent).stop().slideToggle(200);
		$this.parents(objGroup).addClass('on').siblings().removeClass('on');
	}

	$(objGroup+'.on').each(function(){
		action($(this).find(objToggle));
	})

	$(objToggle).off().on('click', function(){
		action($(this));
	})
}

//약관동의
var agreeAllcheck = function(){
	var objGroup = '.js-agree-all';
	var objAll = '.agree-all';
	var objCheck = ' input[type=checkbox]';
	var objChecked = ' input[type=checkbox]:checked';

	var action = function($this){
		//전체동의 그룹단위로 체크
		$this.parents(objGroup).each(function(){
			var $this = $(this);
			//체크항목 개수구하기
			var lenCheck = $this.find(objCheck).length; //전체 항목
			var lenChecked = $this.find(objChecked).length; //선택된 항목
			if ($this.find(objAll).eq(0).length){lenCheck = lenCheck - 1} //전체동의 있으면 - 항목 제외
			if ($this.find(objAll).eq(0).is(':checked')){lenChecked = lenChecked - 1} //선택된 전체동의 있으면 - 항목 제외

			//전체동의 체크여부
			if (lenCheck == lenChecked){$this.find(objAll).eq(0).prop('checked', true)}
			else {$this.find(objAll).eq(0).prop('checked', false)}
		})
	}

	$(document).on('click', objGroup + objCheck, function(){
		var $this = $(this);
		if ($this.is(objAll)) {$this.closest(objGroup).find(objCheck).prop('checked', $this.prop('checked'))}
		action($this);
	})
}

var modalOpen = function(obj){
	var $objVisible = $('.popup-modal, .popup-history');
	var $objContainer = $objVisible.find('.modal-container');
	var $objMask = $('.modal-mask');
	var hVal = $objContainer.outerHeight();
	var topPos = hVal/2 * -1;

	setTimeout(function(){
		//console.log('modalOpen');
		if ($objVisible.length > 0){
			$('.popup-modal.is-visible .modal-container').attr('tabindex', '0').focus();

			//모달팝업 셀렉트일때
			if ($objVisible.is('.popup-select')){$objContainer.addClass('is-animate')}

			//모달팝업 기본일때
			else {$objContainer.css({'margin-top':topPos},500)}
		}
	},300)
}
var modalClose = function(){
	 $('.modal-mask').remove();
}

var popupStyleOpen = function(){
	//$('.popup-style:visible').attr('tabindex', '0').focus();
}
/*
var spyScroll = function(obj){
	if (obj.length > 0){
		var thisPos = obj.offset().top;
		$('html').animate({scrollTop:thisPos}, 500);
	}
}
*/

var accountCardReg  = function(){
	var action = function($this){
		var $title = $this.parent();
		var $slideCont =  $title.next();
		if ($this.parent().parent().hasClass('is-opened')){
			$('.accont-card-info dl').removeClass('is-opened');
			$('.accont-card-info dd').stop().slideUp('fast');
		} else {
			$('.accont-card-info dl').removeClass('is-opened');
			$('.accont-card-info dd').stop().slideUp('fast');
			$this.parent().parent().addClass('is-opened');
			$slideCont.stop().slideDown('fast');
		}
	}
	var event = function(){
		$('.accont-card-info dt button').on('click',function(){
			action($(this));
		});
	}
	var init = function(){
		$('.accont-card-info dd:visible').each(function(){
			$(this).parent().addClass('is-opened');
		})
		event();
	}
	init();

	$('.accont-card-info .btn-reg').on('click',function(){
		var $pwArea = $(this).parent().parent().siblings('.hide');
		$pwArea.removeClass('hide').addClass('visible');
	})
}
var spyScroll = function(objScroll, objPos){
	objScroll.animate({scrollTop:objPos}, 500);
}

var spyScrollForm = function(){
	/* 인풋위치 스크롤링 테스트용 */
	var iOSVer = iOSversion();
	var objScroll = null;
	var thisPos = null;
	var pos = null;
	var winH = $(window).height();

	if ($(window).height < 640){
		pos = 0.2;
	} else {
		pos = 0.2;
	}

	$('input[type=password], input[type=text], input[type=number]').on('click', function(){
		if ($('.popup-style:visible').length > 0){
			objScroll = $('.container');
			thisPos = $(this).offset().top + $(objScroll).scrollTop() - ($(objScroll).outerHeight() * pos);
		} else {
			if (typeof iOSVer == 'undefined'){
				objScroll = $('html');
			} else {
				objScroll = $('body');
			}
			thisPos = $(this).offset().top - parseInt(winH * pos);
		}

		spyScroll(objScroll, thisPos);
	})
}

var formInputCancle = function(){
	var objInput = '.sch-account-wrap .input-border';
	var objCancle = '.sch-account-wrap .btn-cancle';

	$(objCancle).on('click', function(){
		$(objInput).val("");
		$(this).fadeOut('fast', function(){$(this).removeClass('is-visible')});
	})
	$(objInput).on('keyup', function(){
		if ($(this).val() != ""){
			$(objCancle).fadeIn('fast', function(){$(this).addClass('is-visible')});
		} else {
			$(objCancle).fadeOut('fast', function(){$(this).removeClass('is-visible')});
		}
	})
}

var tooltip = function(){
	var obj = '.js-tooltip';
	var target = null;
	var activeCls = 'is-visible';

	//Open
	var open = function(target){
		$('[data-name='+target+']').stop().fadeIn('fast', function(){$(this).addClass(activeCls)});
	}
	//Close
	var close = function(target){
		$('[data-name='+target+']').stop().fadeOut('fast', function(){$(this).removeClass(activeCls)});
	}
	//Event
	$(document).off().on('click', obj, function(){
		target = $(this).attr('data-target');
		if ($('[data-name='+target+']').hasClass(activeCls)){close(target)}
		else {open(target)}
	})
}


/* ====================================
	 1. 회원가입
==================================== */
var cmn_handler = function() {
	// 모바일 확인
	$('.cmn0103 .btn-ok').bind('click', function(event) {
		var selectBool = mobileSelectCheckedHandler();
		if(!selectBool) {
			alert('이동통신사 선택를 해주세요');
			return false;
		}
		if($('.cmn0103 .agree-all').prop('checked')) {
			alert('인증완료');
		} else {
			alert('휴대폰인증 약관 및 이용동의를 모두 동의해주세요');
		}
	});
}


var sc2Tab2CheckHandler = function () {
	var n = 0;
	var isBool = false;

	var btnSelectAgree = $('.cmn0101 .select-agree-cover input');
	for(var a = 0; a < btnSelectAgree.length; a++) {
		var li = btnSelectAgree.parent().eq(a).find('input');
		var chk = new Sc2TabCheck();
		if(chk.CheckBool(li)) {
			n++;
		}
	}
	if(n === 4)  isBool = true;
	else 		isBool = false;
	return isBool;
}

var Sc2TabCheck = function() {
	var isBool = false;
	this.CheckBool = function(inputBox) {
		this.inputBox = inputBox;
		if(this.inputBox.prop('checked')){
			isBool = true;
		}
		return isBool;
	}
}


var listCheckedHandler = function() {
	var isBool = false;
	var agree_li_length = $('.cmn0103 .mobile-agree-cover li input').length;
	var agree_li_checked_length = $('.cmn0103 .mobile-agree-cover li input:checked').length;
	if(agree_li_checked_length === agree_li_length)  isBool=true;
	return isBool;
}

var mobileSelectCheckedHandler = function() {
	var isBool = false;
	var selected_length = $('.cmn0103 .mobile-select-cover input:checked').length;
	if(selected_length > 0) {
		isBool = true;
	}
	return isBool;
}

var cmnSectionSelectHandlerReady = function(){
	$('.contents-header-step-cover li.on').each(function(){
		cmnSectionSelectHandler($(this).index() + 1);
	})
}

var cmnSectionSelectHandler = function(num, direction) {
	var selectNum = parseInt(num) - 1;
	var section = $('.step.section');
	var lis = $('.contents-header-step-cover li');
	var tit = $('.step .section-title');
	section.removeClass('current').removeClass('on').removeClass('off').removeClass('dpn');
	section.find('.tab-cover').stop().slideUp('100');

	//웹접근성
	tit.attr('role','text').attr('tabindex','0');
	lis.attr('role','button').attr('tabindex','0');

	var action = function(num, direction){
		for(var i=0; i<section.length; i++){
			/*
			//이전
			if( i < selectNum ){section.eq(i).addClass('on')}

			//현재
			else if( i == selectNum ){section.eq(i).find('.tab-cover').stop().slideDown('200')}

			//다음
			else if ( i > selectNum ){section.eq(i).addClass('off')}
			*/

			//이전(나머지)
			if( i < selectNum - 1 ){section.eq(i).addClass('dpn')}

			//이전
			else if( i == selectNum - 1 ){section.eq(i).addClass('on')}

			//현재
			else if( i == selectNum ){
				section.eq(i).addClass('current').find('.tab-cover').stop().slideDown('200', function(){$(this).css('height','auto')})

				//완료일때
				if( i == section.length-1){
					section.eq(i).siblings('.step.section').hide();
					section.eq(i).find('.section-title-cover').remove();
					section.eq(i).addClass('sec-complete');
				}
			}

			//다음
			else if ( i == selectNum + 1 ){section.eq(i).addClass('off')}

			//다음(나머지)
			else if ( i > selectNum + 1 ){section.eq(i).addClass('dpn')}

		}

		for(var k=0; k < lis.length; k++) {
			if (k < selectNum + 1){
				lis.eq(k).addClass('on');
				lis.eq(k).removeClass('current');
			} else {
				lis.eq(k).removeClass('on');
				lis.eq(k).removeClass('current');
			}
			if (k == selectNum){
				lis.eq(k).addClass('current');
			}
		}
	}

	action(num, direction);
}

//비밀번호타입 배경체크
var formSocialNo2 = function(){
	$('input.social-no2, input.biz-no1, input.biz-no2, input.card-pw, input.password-no').on('keyup', function(){
		if ($(this).val() != ""){$(this).addClass('is-valued')}
		else {$(this).removeClass('is-valued')}
	})
}
/* ====================================
	 2. 조회
==================================== */
var inq_Handler = function() {
	// 조회 0101
	$('.inq010100 .account-tit-tab li').each( function(i) {
		$('.inq010100 .account-tit-tab li').eq(i).off().on('click', function() {
			$('.inq010100 .account-tit-tab li').removeClass('on');
			$('.inq010100 .account-tit-tab li').eq(i).addClass('on');
			$('.inq010100 .account-history').addClass('dpn');
			$('.inq010100 .account-history').eq(i).removeClass('dpn');
		});
	});

	// 조회 0202
	$('.btn-bull-nav').bind('click', function() {
		$('.nav-bg').removeClass('dpn');
		$('.nav-list').removeClass('dpn');
		$('.wrap').css({'height': h+'px', 'overflow-y':'hidden'});
	});

	$('.nav-bg').bind('click', function() {
		$('.nav-bg').addClass('dpn');
		$('.nav-list').addClass('dpn');
		$('.wrap').addClass('pdbt30');
		$('.wrap').css({'height':'auto', 'overflow-y':'visible'});
	});

	$('.tab-menu-depth1-cover li').children("label").click( function() {
		var idx = $(this).parent().index();
		var objGroup = '.tab-menu-depth1-cover';

		//탭목록과 연결되어있는 경우
		if ($(this).closest(objGroup).next().is('.tab')){
			$(this).closest(objGroup).next('.tab').find('.tab-list').addClass('dpn');
			$(this).closest(objGroup).next('.tab').find('.tab-list').eq(idx).removeClass('dpn');
		}

		//탭목록과 떨어져있는 경우
		else {
			var dataTarget = $(this).attr('data-target');
			$('.tab[data-name='+dataTarget+'] .tab-list').addClass('dpn');
			$('.tab[data-name='+dataTarget+'] .tab-list').eq(idx).removeClass('dpn');
		}

		$('.scroll-wrap').scrollTop(0); /* 2018-08-13 스크롤탑 추가 */
	});

//	$('.section .account-menu li label').bind('click', function() {
//		var num = parseInt($(this).parent().index()) + 1;
//		$('.section .tab').addClass('menu'+num);
//		$('.section .tab-list').addClass('dpn');
//
//		if(num === 1){
//			if($('.section .tab').hasClass('menu2')){
//				$('.section .tab').removeClass('menu2');
//			}
//		}else{
//			if($('.section .tab').hasClass('menu1')){
//				$('.section .tab').removeClass('menu1');
//				var sectionTop = $('.section .section').offset().top;
//				var tabTop = $('.section .section .tab').offset().top;
//				var resultNum = parseInt(h - (sectionTop + tabTop));
//				$('.section .account-history').css({'minHeight':resultNum+'px'});
//			}
//		}
//		$('.section .tab-list').eq(num-1).removeClass('dpn');
//	});

	// 조회 040000
	$('.transfer-lists .sender-info .btn-sender').unbind('click').bind('click', function() {
		var $reciever_info = $(this).parents('li').children('dl').next('dl').next('.reciever-info');
		var $reciever_info2 = $(this).parents('li');

		if($reciever_info2.hasClass('on')){ //열려있으면
			$reciever_info2.removeClass('on');
			$reciever_info.removeClass('dpn');
			$reciever_info.slideUp();
			$(this).find('.blind').text('펼치기');
		}else{
			$reciever_info2.addClass('on');
			$reciever_info.addClass('dpn');
			$reciever_info.slideDown();
			$(this).find('.blind').text('접기');
		}
	});

	$('.accordionNEW > button').unbind('click').bind('click', function() {
		var accordionNEW = $(this).next('div');
		if( accordionNEW.hasClass('dpn') ){
			accordionNEW.slideDown();
			accordionNEW.removeClass('dpn');
		}else{
			accordionNEW.addClass('dpn');
			accordionNEW.slideUp();
		}
	});

	$(".next-input").keyup( function() {
		var charLimit = $(".next-input").attr("maxlength");
		if (this.value.length >=  charLimit){
			$(this).next("input").focus();
			return false;
		}
	});

}

//전체메뉴
var btn_allMenu = function(){
}

// 조회 0101 - 신계좌POPUP
function accoun_layerPOP(){
	var accoun_layerPopup = $(".accoun_layerPopup");
	if( accoun_layerPopup.is(":visible") ){
		accoun_layerPopup.addClass('dpn');
	}else{
		accoun_layerPopup.removeClass('dpn');
	}
}


// INPUT 길이 체크후 다음 INPUT FOCUS
var inputLengthHandler = function() {
	//console.log('inputLengthHandler');
	$('input').on('keyup', function() {
		if($(this).attr('data-check')=="true") {
			// console.log($(this).val().length);
			if(parseInt($(this).val().length) == parseInt($(this).attr('maxlength'))){
				// alert('olleh');
				$(this).siblings('input').focus();
			}
		}
	});
}

//이체 슬라이드
var slideSectionWrap = function(){
	var winH = $(window).height();
	var headerH = $('#header').outerHeight();
	var contHeaderH = $('.contents-header').outerHeight();
	$('.slide-section-wrap').css('height', winH - headerH - contHeaderH + 'px');
	$('body').css('position', 'fixed');
	$('html').css('overflow', 'hidden');

}

// 웹접근성 초점이동관련
// INPUT, BUTTON 화면 중간보다 아래에 있을때 중앙으로 이동하기
var focusInPageMove = function() {
	$('input').one('focusin', function() {
		var size1 = 0;
		var size2 = 0;
		if ($(window).height() > 500){
			size1 = 70;
			size2 = 100;
		} else {
			size1 = 20;
			size2 = 30;
		}

		var target = $('html');
		var target_body = null;
		if($(this).closest('.popup-style').length==1) {
			target = $(this).closest('.container');
		} else{
			target = $('html');
		}
		var offtop = $(this).offset().top;
		var mobHalfHeight = parseInt($(window).height()/2);
		var chkNum = mobHalfHeight-size1;
		var sctNum = target.scrollTop();
		var calcNum = offtop+sctNum-chkNum+size2;
		var calcNum_html = offtop-chkNum+size2;
		// console.log('target.selector = '+ target.selector);
		// console.log('▶▶▶▶▶▶input ------------'+'target.selector = '+ target.selector+' : offtop = '+offtop+' : chkNum = '+ chkNum+' : sctNum = '+sctNum);
		if(target.selector == 'html' || target.selector == 'body') {
			if(offtop > chkNum + sctNum) {
				// console.log('input_html_body_scroll');
				target.stop().animate({scrollTop:calcNum_html}, 300);
			}
		} else {
			if(offtop > chkNum){
				// console.log('input_scroll');
				target.stop().animate({scrollTop:calcNum}, 300);
			}
		}
	});

	/*
	- 팝업오픈시에도 스크롤링 됨
	- 보안키보드의 경우 위치를 다시잡아줘야 하는 문제발생
	- 가상키보드에서도
	$('button').not('.is-notFocus').focusin(function() {
		var target = $('html');
		var target_body = null;
		if($(this).closest('.popup-style').length==1) {
			target = $(this).closest('.container');
		}else{
			target = $('html');
		}
		var offtop = $(this).offset().top;
		var mobHalfHeight = parseInt($(window).height()/2);
		var chkNum = mobHalfHeight-70;
		var sctNum = target.scrollTop();
		var calcNum = offtop+sctNum-chkNum+100;
		var calcNum_html = offtop-chkNum+100;

		// console.log('target.selector = '+ target.selector);
		// console.log('▶▶▶▶▶▶button ------------'+'target.selector = '+ target.selector+' : offtop = '+offtop+' : chkNum = '+ chkNum+' : sctNum = '+sctNum);
		if(target.selector == 'html' || target.selector == 'body') {
			if(offtop > chkNum + sctNum) {
				// console.log('button_html_body_scroll');
				target.stop().animate({scrollTop:calcNum_html}, 300);
			}
		} else {
			if(offtop > chkNum){
				// console.log('button_scroll');
				target.stop().animate({scrollTop:calcNum}, 300);
			}
		}
	});
	*/
}

//Label 설정
var labelAriaRole = function(){
	//초기화
	if ($('.input-cover').length){
		$('.input-cover label').removeAttr('aria-label');
		$('.input-cover label').find('span.blind').remove();
		$('.input-cover label').each(function(){
			var id = '#' + $(this).attr('for');
			if ($(id).closest('.input-area').find('input[type=text]').length == 1){
				$(id).removeAttr('title');
			}
		})
	}

	//필수입력
	if ($('.input-cover.is-required').length){
		$('.input-cover.is-required label').attr('role', 'text');
		$('.input-cover.is-required label').append('<span class="blind">필수입력</span>');
	}
}

/* ====================================
	 Main (App, Web)
==================================== */
//Web Main
var webMain = {
	com : {
		//상단배너
		setTopBnr : function(callback){
			var topBnrHTML = ''
							+'<!-- TopBanner -->'
							+'<div class="topBanner">'
							+'	<button type="button" class="bnr"><img src="/easybank/resources/img/main/@web_topBanner.png" alt="Hey! Bank App 다운로드 더 많은 서비스를 자유롭게 누리세요!"></button>'
							+'  <button type="button" id="topBnrClose" class="close">닫기</button>'
							+'</div>'
							+'<!-- //TopBanner -->';
			$('#header').before(topBnrHTML);
			$('#header').addClass('is-flexible');

			//HTML생성 후 이미지높이값을 가져오기위한 타이밍
			$('#topBnrClose').on('click', function(){
				var imgH = parseInt($('.topBanner .bnr img').outerHeight());
				$('.topBanner').css({height:imgH}).animate({height:0}, 300, function(){
					$('#header').removeClass('is-flexible');
				});
			})
			callback();
		},

		//헤더설정
		setHeader : function(){
			$('body').addClass('web-main');
			var headerHTML = ''
				+'<div id="header">'
				+'	<p class="logo-header"><button type="button" id="btnHome">Hey! Bank</button></p>'
				+'	<button type="button" class="btn-mypage" id="btnMypage">My Page</button>'
				+'	<button type="button" class="btn-anb" id="btnAllNav"><span>전체메뉴</span></button>'
				+'</div>';
			$('#container').before(headerHTML);

			//홈
			$('#btnHome').on('click', function(){
				mainHome();
			})

			//마이페이지
			$('#btnMypage').on('click', function(){
				mainMypage();
			})
			//전체메뉴
			$('#btnAllNav').on('click', function(){
				mainAllNav();
			})
		},

		//푸터설정
		setFooter : function(){
			var footerHTML = ''
				+'<!-- #footer -->'
				+'<footer id="footer">'
				+'	<div class="fnb-wrap">'
				+'		<ul class="fnb">'
				+'			<li><button type="button" id="btnFooterTerm">이용약관</button></li>'
				+'			<li><button type="button" id="btnFooterPriv">개인정보처리방침</button></li>'
				+'			<li><button type="button" id="btnFooterBiz">영업점조회</button></li>'
				+'			<li><button type="button" id="btnFooterPC">PC버전</button></li>'
				+'		</ul>'
				+'	</div>'
				+'	<div class="copyright">'
				+'		<p>고객지원 : 1588-1515 / 1644-1515<br>ⓒ Suhyup Bank</p>'
				+'	</div>'
				+'</footer>'
				+'<!-- //#footer -->';
			$('#container').after(footerHTML);

			$('#btnFooterTerm').on('click', function(){ callbackFooterTerm() });
			$('#btnFooterPriv').on('click', function(){ callbackFooterPriv() });
			$('#btnFooterBiz').on('click', function(){ callbackFooterBiz() });
			$('#btnFooterPC').on('click', function(){ callbackFooterPC() });
		},

		//페이지로드
		setAjaxLoad : function(obj, url, callback){
			if (callback != ''){
				obj.load(url, callback);
			} else {
				obj.load(url);
			}
		},

		//페이지 높이설정
		setPageHeight : function(){
			//초기값 설정
			var objInner = $('.swiper-tab-page > .swiper-wrapper > .swiper-slide-active .tab-content-inner'), //활성화된 컨텐츠 실제영역
				objSlide = $('.swiper-tab-page > .swiper-wrapper > .swiper-slide-active'), //활성화된 슬라이드 영역
				objInnerH = objInner.height(); //활성화된 컨텐츠 높이
			//console.log(objInnerH);
			//모든슬라이드 고정높이 설정
			objSlide.siblings().css('height', objInnerH);
			objSlide.css('height', objInnerH);
			$('.swiper-tab-page > .swiper-wrapper').css('height', objInnerH);

			//현재슬라이드 고정높이 해제
			objSlide.height('height', 'auto');
			$('.swiper-tab-page > .swiper-wrapper').css('height', 'auto');

			//웹접근성
			objSlide.siblings().attr('aria-hidden', 'true');
			objSlide.attr('aria-hidden', 'false');
		},

		//페이지스와이프
		setSwiperPage : function(){
			//탭 활성화
			var tabChange = function(obj){
				obj.siblings().removeClass('is-active');
				obj.addClass('is-active');
				obj.siblings().attr('aria-selected', 'false');
				obj.attr('aria-selected', 'true');
			}
			//스와이프 슬라이드
			var tabPageSlides = new Swiper('.swiper-tab-page', {
				on : {
					init : function(){
						webMain.com.setPageHeight();
						/*
						setTimeout(function(){
							console.log($('.swiper-tab-page > .swiper-wrapper > .swiper-slide-active > .tab-content-inner').length);
						},0);
						*/
					},
					//슬라이드 시작할때 활성화
					slideChangeTransitionStart : function(){
						//활성화된 슬라이드 인덱싱, 인덱싱요소
						var idx = $('.swiper-tab-page > .swiper-wrapper > .swiper-slide-active').index(),
							tab = $('.tab-page .tab-nav li').eq(idx);
						tabChange(tab);

						if (webMain.tab2.mainSlides != null){
							webMain.tab2.mainSlides.slideTo(0);
						}
						if (webMain.tab2.pdtSlides != null){
							$('.pdt-type-list .tab-nav li').eq(0).addClass('is-active');
							$('.pdt-type-list .tab-nav li').eq(0).attr('aria-selected', 'true');
							$('.pdt-type-list .tab-nav li').eq(0).siblings().removeClass('is-active');
							$('.pdt-type-list .tab-nav li').eq(0).siblings().attr('aria-selected', 'false');

							webMain.tab2.pdtSlides.slideTo(0);
						}

						//개발에서 페이지처리할 수 있도록 분기처리
						callbackPageActive(idx);
					},
					transitionEnd : function(){
						webMain.com.setPageHeight();
					}
				},
			});
			//탭 클릭 슬라이드
			$('.tab-page .tab-nav li button').on('click', function(){
				var idx = $(this).parent().index();
				tabPageSlides.slideTo(idx);
			})
		},
	},

	/*
		메인 탭1
	*/
	tab1 : {
		accountListBox : null,
		eventSlide : null,
		init : function(){
			webMain.tab1.eventAction();
			webMain.com.setSwiperPage();
		},
		accountAction : function(){
			this.accountListBox = new Swiper('.account-list-box .swiper-container', {
				direction : 'vertical',
				navigation : {
					nextEl : '.account-list-box .swiper-slide-next',
					prevEl : '.account-list-box .swiper-slide-prev',
				},
				on : {
					init : function(){
						swiperAria({
							swiperGroup : '.account-list-box',
							ariaHidden : true,
						});
					},
					transitionEnd : function(){
						swiperAria({
							swiperGroup : '.account-list-box',
							ariaHidden : true,
						});
					}
				}
			})
		},
		eventAction : function(){
			this.eventSlide = new Swiper('.main-event-box .swiper-container', {
				//loop : true,
				//autoplay : true,
				//autoplayStopOnLast : true,
				pagination : {
					el : '.main-event-box .swiper-controls .pagination',
					bulletElement : 'button',
					clickable : true,
				},
				on : {
					init : function(){
						swiperAria({
							swiperGroup : '.main-event-box',
							ariaHidden : true,
						});
					},
					transitionEnd : function(){
						swiperAria({
							swiperGroup : '.main-event-box',
							ariaHidden : true,
						});
					}
				}
			})
		}
	},

	/*
		메인 탭2
	*/
	tab2 : {
		mainSlides : null,
		pdtSlides : null,
		init : function(){
			webMain.tab2.action();
		},
		action : function(){
			//주요상품
			swiperAria({
				swiperGroup : '.main-pdt-list',
				ariaHidden : false,
			});
			this.mainSlides = new Swiper('.main-pdt-list', {
				slidesPerView : 'auto',
			});

			//전체상품
			var tabChange = function(obj){
				obj.addClass('is-active');
				obj.attr('aria-selected', 'true');
				obj.siblings().removeClass('is-active');
				obj.siblings().attr('aria-selected', 'false');
			}
			//상품높이맞추기
			var tabPageHeight = function(){
				//초기값 설정
				var objInner = $('.swiper-pdt-cont > .swiper-wrapper > .swiper-slide-active .tab-content-inner'), //활성화된 컨텐츠 실제영역
					objSlide = $('.swiper-pdt-cont > .swiper-wrapper > .swiper-slide-active'), //활성화된 슬라이드 영역
					objInnerH = objInner.height(); //활성화된 컨텐츠 높이

				//모든슬라이드 고정높이 설정
				objSlide.siblings().css('height', objInnerH);
				objSlide.css('height', objInnerH);
				$('.swiper-pdt-cont > .swiper-wrapper').css('height', objInnerH);

				//현재슬라이드 고정높이 해제
				objSlide.height('height', 'auto');
				$('.swiper-pdt-cont > .swiper-wrapper').css('height', 'auto');

				//웹접근성
				objSlide.siblings().attr('aria-hidden', 'true');
				objSlide.attr('aria-hidden', 'false');

			}

			//스와이프 컨테이너
			this.pdtSlides = new Swiper('.swiper-pdt-cont', {
				initialSlide : 0,
				on : {
					init : function(){
						tabPageHeight();
						webMain.com.setPageHeight();
						swiperAria({
							swiperGroup : '.swiper-pdt-cont',
							role : false,
							ariaHidden : false,
						});
						folderToggle();
					},
					//슬라이드 시작할때 활성화
					slideChangeTransitionStart : function(){
						//활성화된 슬라이드 인덱싱, 인덱싱요소
						var idx = $('.swiper-pdt-cont .swiper-slide-active').index();
						var obj = $('.pdt-type-list .tab-nav li').eq(idx);
						tabChange(obj);
					},
					transitionEnd : function(){
						tabPageHeight();
						webMain.com.setPageHeight();
						swiperAria({
							swiperGroup : '.swiper-pdt-cont',
							role : false,
							ariaHidden : false,
						});
					}
				},
			});

			//탭 클릭 슬라이드
			$('.pdt-type-list .tab-nav li button').on('click', function(){
				var idx = $(this).parent().index();
				webMain.tab2.pdtSlides.slideTo(idx);
			})
		}
	}
}
