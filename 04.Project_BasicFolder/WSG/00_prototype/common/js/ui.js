/*--------------------------------------------------------------
	Common
--------------------------------------------------------------*/
var comm = {
	//Paramiter(스크립트 공통)
	paramiter : function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if (results==null){
			return null;
		} else {
			return results[1] || 0;
		}
	},

	//Ajax Load(스크립트 공통)
	ajaxLoad : function(selector, frmName, callUrl, callback){
		var dataString = $("#"+frmName).serialize();
		$(selector).load(callUrl, dataString, callback);
	},

	ajaxCall : function(frmName, sendUrl, target, callback) {
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
			//통신이 실패했어도 완료가 되었을때 이함수를 타게된다.
			// success 와 complete 둘 중 하나만 이용, 그렇지 않으면 두번실행
			},*/
			error:function(xhr, status, error){
			}
		});
	}
}

/*--------------------------------------------------------------
	UI
--------------------------------------------------------------*/
var ui = {
	init : function(){
		ui.winEvent();
		ui.navLnb.init();
		//ui.navSnb.init();
		ui.navSet.init(2);
		ui.scroll.init();
		ui.tab.init();
		ui.ajaxTab.init();
		ui.modal.init();
		ui.modeless.init();
		ui.dropdown.init();
		ui.accordion.init();
		ui.motionAnimate.init();
	},
	winEvent : function(){
		$(window).resize(function(){

		});
		$(window).scroll(function(){

		});
	},
	navLnb : {
		obj		: '.lnb',
		depth2	: '.depth2',
		node1	: '.node1',
		easing	: 'easeOutCubic',	//위치 : In|Out(권장)|InOut, 정도 : Sine|Quad|Cubic(보통)|Quart|Quint|Expo|Circ|Back|Elastic|Bounce
		speedIn	: 500,
		speedOut: 200,

		init: function(){
			this.event();
		},
		event : function(){
			$(this.obj).find(this.node1).on('mouseenter focusin', function(){
				$(this).parent().siblings().find(ui.navLnb.depth2).stop().slideUp(ui.navLnb.speedOut, ui.navLnb.easing);
				$(this).parent().siblings().removeClass('active');
				$(this).next(ui.navLnb.depth2).stop().slideDown(ui.navLnb.speedIn, ui.navLnb.easing);
				$(this).parent().addClass('active');
			})

			$(this.obj).find(this.node1).on('mouseleave focusout', function(){
				$(this).next(ui.navLnb.depth2).stop().slideUp(ui.navLnb.speedOut, ui.navLnb.easing);
				$(this).parent().removeClass('active');
				ui.navSet.action(); //navSet 내부적으로 값이 저장되어 있으므로 실행만 하면 됨.
			})
		},
	},
	navSnb : {
		init : function(){
			this.event();
		},
		event : function(){
		},
		action : function(){
		}
	},
	navSet : {
		active1 : null,
		active2 : null,
		init : function(depth1, depth2){
			this.active1 = depth1;
			this.active2 = depth2;
			this.action();
		},
		action : function(){
			$(ui.navLnb.node1).eq(this.active1).addClass('active');
		}
	},
	scroll : {
		init : function(){
			$('.ui-scroll').each(function(){$(this).mCustomScrollbar({keyboard:{disable:true}})})
		}
	},
	tab_ : {
		tabNav : '.js-tabs',
		tabLink : '.js-tabs .tab-nav a',
		init : function(){
			$(this.tabNav).each(function(){
				//현재페이지 탭 활성화
				$(this).tabs();

				//다른페이지 탭 활성화 (url?tabId=탭아이디)
				var tabPara = comm.paramiter('tabId');
				if (tabPara != null){
					$(this.tabLink).each(function(){
						if ($(this).attr('href') == '#'+tabPara) $(ui.tab.tabNav).tabs({active: tabIndex})
					})
				}
			});
		}
	},
	tab : {
		tabNav : '.js-tabs',
		tabLink : '.js-tabs .tab-nav a',
		target : null,

		init : function(){
			$(this.tabNav).each(function(){
				//첫번째 탭 활성화
				ui.tab.event();
			});
		},
		event : function(){
			//현재페이지의 탭 활성화
			$(this.tabLink).on('click', function(){ui.tab.action($(this));return false;});

			//다른페이지의 탭 활성화
			var tabPara = comm.paramiter('tabId');
			if (tabPara != null){
				$(this.tabLink).each(function(){
					if ($(this).attr('href') == '#'+tabPara) ui.tab.action($(this));
				})
			}
		},
		action : function($this){
			this.target = $this.attr('href');
			$this.parent().addClass('active').siblings().removeClass('active');
			$(this.target).addClass('active').siblings().removeClass('active');
		}
	},
	ajaxTab : {
		tabNav : '.ajax-tabs',
		tabLink : '.ajax-tabs .tab-nav a',
		tabActive : '.ajax-tabs .tab-nav > ul > li.active > a',
		tabCont : '.tab-content',

		init : function(){
			$(this.tabNav).each(function(){
				//active 탭 활성화
				if ($(ui.ajaxTab.tabActive).length > 0){ui.ajaxTab.action($(ui.ajaxTab.tabActive))}
				ui.ajaxTab.event();
			});
		},
		event : function(){
			//현재페이지의 탭 활성화
			$(this.tabLink).on('click', function(){ui.ajaxTab.action($(this));return false;});

			//다른페이지의 탭 활성화
			var tabPara = comm.paramiter('tabId');
			if (tabPara != null){ui.ajaxTab.action($('#'+tabPara))}
		},
		action : function($this){
			var callTarget = $this.attr('href');
			var targetArea = $this.parents(this.tabNav).find(this.tabCont);
			$this.parent().addClass('active').siblings().removeClass('active');
			comm.ajaxLoad(targetArea, '', callTarget, '');
		}
	},
	modal : {
		/*
			(Open)
			Event : <button type="button" class="btn ui-modal-open" data-target="testModalLayer1"><span>모달팝업1 열기</span></button>
			Function : ui.modal.open(this, 'testModalLayer1');

			(Close)
			Event : <button type="button" class="btn ui-modal-close" data-target="testModalLayer1"><span>모달팝업1 닫기</span></button>
			Function : ui.modal.close(this,'testModalLayer1');
		*/
		modalWrap : '.modal:visible',
		dismiss : '.modal-dismiss',
		targetH : null,
		targetW : null,
		targetT : null,
		targetL : null,
		animateT : 50,
		speed : 300,

		init : function(){
			this.event();
		},
		event : function(){
			$('.ui-modal-open').on('click',function(){
				ui.modal.open($(this), $(this).attr('data-target'));
			})
			$('.ui-modal-close').on('click', function(){
				ui.modal.close($(this), $(this).attr('data-target'));
			})
		},
		open : function(opener, target){
			//Modal Position,Size
			this.targetH = $('#'+target).height();
			this.targetW = $('#'+target).width();
			this.targetT = -this.targetH/2;
			this.targetL = -this.targetW/2;

			//Active Dismiss (여러개의 모달을 띄우게 되는 경우)
			if ($(this.modalWrap).length < 1){
				$('body').append('<div class="modal-dismiss"></div>');
				$(this.dismiss).fadeIn();
			}

			//Animate Modal
			$('#'+target).css({'margin-left' : this.targetL, 'margin-top' : this.targetT + this.animateT}).show().stop().animate({'margin-top' : this.targetT}, this.speed, 'easeOutQuad');
			$('html').css('overflow', 'hidden');

			//Modal Opner, Closer setAttribute
			$(opener).attr('data-opener', target);
			$('#'+target).attr('tabIndex', '-1').focus();
			$('#'+target).find('.modal-close').each(function(){$(this).attr('data-target',target)});

			//Dismiss Modal Close
			$(this.dismiss).on('click', function(){
				ui.modal.close(opener, target);
			})
		},
		close : function(opener, target){
			//Active Modal 2개 미만인 경우
			if ($(this.modalWrap).length < 2){
				$('#'+target).stop().fadeOut(this.speed, 'easeOutQuad', function(){$('[data-opener='+target+']').focus()});
				$(this.dismiss).fadeOut(this.speed,function(){$(this).remove();$('html').css('overflow','inherit')});
			}

			//Active Modal 2개 이상인 경우
			else {
				$('#'+target).stop().fadeOut(this.speed, 'easeOutQuad', function(){$('[data-opener='+target+']').focus()});
			}
		}
	},
	modeless : {
		//Guide (마크업 구조의 유연성, 다양성을 고려하여 모달리스 이름을 찾는 방식);
		//<button type="button" class="btn ui-modeless-open" data-target="modeless-content1">Modeless Open</button>
		//ui.modeless.action(this, 'modeless-content1', 'open');

		init : function(){
			this.event();
		},
		event : function(){
			$('.ui-modeless-open').on('click', function(){ui.modeless.open(this, $(this).data('target'))});
			$('.ui-modeless-close').on('click', function(){ui.modeless.close(this, $(this).data('target'))});
			$('.ui-modeless-toggle').on('click', function(){ui.modeless.toggle(this, $(this).data('target'))});
			$('.ui-modeless-hover').on('mouseenter focusin', function(){ui.modeless.hover(this, $(this).data('target'))});
			$('.ui-modeless-hover').on('mouseleave', function(){ui.modeless.unhover(this, $(this).data('target'))});
			$('.ui-modeless-dismis').on('click', function(){ui.modeless.dismis(this, $(this).data('target'))});
		},
		placement : function(opener, target){
			var gutter = 0;
			var hPos = ($('.'+target).outerWidth() + gutter) * -1;
			var vPos = ($('.'+target).outerHeight() + gutter) * -1;
			var hAlign = -($('.'+target).outerWidth())/2;
			var vAlign = -($('.'+target).outerHeight())/2;

			//사용자정의
			if ($(opener).data('align') == 'top'){$('.'+target).css({'top': vPos, 'left':'50%', 'margin-left':hAlign})}
			else if ($(opener).data('align') == 'bottom'){$('.'+target).css({'bottom': vPos, 'left':'50%', 'margin-left':hAlign})}
			else if ($(opener).data('align') == 'right'){$('.'+target).css({'top': '50%', 'right':hPos, 'margin-top':vAlign})}
			else if ($(opener).data('align') == 'left'){$('.'+target).css({'top': '50%', 'left':hPos, 'margin-top':vAlign})}
			else if ($(opener).data('align') == 'center'){$('.'+target).css({'top': '50%', 'left': '50%', 'margin-top':vAlign, 'margin-left':hAlign})}
			else if ($(opener).data('align') == 'central'){$('.'+target).css({'top': '50%', 'left': '50%', 'margin-top':vAlign, 'margin-left':hAlign, 'position':'fixed'})}

			//기본설정(right)
			else {$('.'+target).css({'top': '50%', 'right':hPos, 'margin-top':vAlign})}
		},
		open : function(opener, target){
			$(opener).attr('data-opener', target);
			$('.'+target).attr('tabIndex','-1').fadeIn('fast').focus();
			ui.modeless.placement(opener, target);
		},
		close : function(opener, target){
			$('.'+target).fadeOut('fast');
			$('[data-opener='+target+']').focus().removeAttr('data-opener');
		},
		toggle : function(opener, target){
			if ($('[data-opener='+target+']').length == 0){ui.modeless.open(opener, target)}
			else {ui.modeless.close(opener, target)}
		},
		hover : function(opener, target){
			$(opener).attr('data-opener', target);
			$('.'+target).attr('tabIndex','-1').fadeIn('fast');
			ui.modeless.placement(opener, target);

			$('.'+target).on('focusout',function(e){
				$(document).on('click focusin',function(e){
					if ($('[data-opener='+target+']').parent().has(e.target).length === 0){
						$('.'+ $('.ui-modeless-hover').data('target')).fadeOut('fast');
						$('[data-opener='+target+']').removeAttr('data-opener');
					}
				})
			})
		},
		unhover : function(opener, target){
			$('.'+target).fadeOut('fast');
			$('[data-opener='+target+']').removeAttr('data-opener');
		},
		dismis : function(opener, target){
			$(opener).attr('data-opener', target);
			$('.'+target).attr('tabIndex','-1').fadeIn('fast');
			ui.modeless.placement(opener, target);
			$(document).on('click focusin',function(e){
				if ($('[data-opener='+target+']').parent().has(e.target).length === 0){
					$('.'+ $('.ui-modeless-dismis').data('target')).fadeOut('fast');
					$('[data-opener='+target+']').removeAttr('data-opener');
				}
			})
		},
	},
	dropdown : {
		objMenu : '.dropdown-menu',
		init : function(){
			this.event();
		},
		event : function(){
			$('.ui-dropdown-open').on('click', function(){ui.dropdown.open(this, $(this).data('target'))});
			$('.ui-dropdown-close').on('click', function(){ui.dropdown.close(this, $(this).data('target'))});
			$('.ui-dropdown-toggle').on('click', function(){ui.dropdown.toggle(this, $(this).data('target'))});
			$('.ui-dropdown-hover').on('mouseenter focusin', function(){ui.dropdown.hover(this, $(this).data('target'))});
			$('.ui-dropdown-hover').on('mouseleave', function(){ui.dropdown.unhover(this, $(this).data('target'))});
			$('.ui-dropdown-dismis').on('click', function(){ui.dropdown.dismis(this, $(this).data('target'))});
		},
		open : function(opener, target){
			$(opener).attr('data-opener', target);
			$('.'+target).find(this.objMenu).attr('tabIndex','0').slideDown('fast').focus();
		},
		close : function(opener, target){
			$('.'+target).find(this.objMenu).slideUp('fast');
			$('[data-opener='+target+']').focus().removeAttr('data-opener');
		},
		toggle : function(opener, target){
			if ($('[data-opener='+target+']').length == 0){ui.dropdown.open(opener, target)}
			else {ui.dropdown.close(opener, target)}
		},
		hover : function(opener, target){
			$(opener).attr('data-opener', target);
			$('.'+target).find(this.objMenu).attr('tabIndex','-1').slideDown('fast');

			$('.'+target).on('focusout',function(){
				$(document).on('click focusin',function(e){
					if ($('[data-opener='+target+']').parent().has(e.target).length === 0){
						$('.'+ $('.ui-dropdown-hover').data('target')).find(ui.dropdown.objMenu).slideUp('fast');
						$('[data-opener='+target+']').removeAttr('data-opener');
					}
				})
			})
		},
		unhover : function(opener, target){
			$('.'+target).on('mouseleave',function(e){
				$('.'+target).find(ui.dropdown.objMenu).slideUp('fast');
				$('[data-opener='+target+']').removeAttr('data-opener');
			})
		},
		dismis : function(opener, target){
			$(opener).attr('data-opener', target);
			$('.'+target).find(this.objMenu).attr('tabIndex','-1').slideDown('fast');
			$(document).on('click focusin',function(e){
				if ($('[data-opener='+target+']').parent().has(e.target).length === 0){
					$('.'+ $('.ui-dropdown-dismis').data('target')).find(ui.dropdown.objMenu).slideUp('fast');
					$('[data-opener='+target+']').removeAttr('data-opener');
				}
			})
		},
	},
	accordion : {
		obj : '.accordion',
		objToggle : '.ui-accordion-toggle',
		objHeader : '.accordion-header',
		objBody : '.accordion-body',
		setInit : 'show', //초기상태 기본값 'show, hide, first'
		setToggle : 'each', //토글방식 기본값 'each, sync'
		speed : 200,
		idx : null,

		init : function(){
			$(this.obj).each(function(a){
				//초기상태 설정 (속성 생략하면 기본값 생성)
				if (!$(this).is('[data-init]')){$(this).attr('data-init', ui.accordion.setInit)}

				//토글방식 설정 (속성 생략하면 기본값 생성)
				if (!$(this).is('[data-toggle]')){$(this).attr('data-toggle', ui.accordion.setToggle)}

				//클래스 설정
				$(this).find(ui.accordion.objBody).eq(0).addClass('first');
				$(this).find(ui.accordion.objBody+':visible').addClass('active');
			});
			this.event();
		},
		event : function(){
			$(this.objToggle).on('click', function(){
				ui.accordion.idx = $(ui.accordion.objToggle).index($(this));
				ui.accordion.action(ui.accordion.idx);
				return false;
			})
		},
		action : function(n){
			var $targetGroup = $(this.objToggle).eq(n).parents(ui.accordion.obj);
			var $targetToggle = $(this.objToggle).eq(n);
			var $targetHeader = $(this.objHeader).eq(n);
			var $targetBody = $(this.objBody).eq(n);

			if ($targetBody.hasClass('active')){
				$targetBody.stop().slideUp(this.speed).removeClass('active');
				$targetHeader.removeClass('active');
			} else {
				$targetBody.stop().slideDown(this.speed).addClass('active');
				$targetHeader.stop().addClass('active');
				if ($targetGroup.data('toggle') == 'sync'){
					$targetBody.siblings(this.objBody+'.active').stop().slideUp(this.speed).removeClass('active');
					$targetHeader.siblings(this.objHeader+'.active').removeClass('active');
				}
			}
		}
	},
	motionAnimate : {
		init : function(){
			$('.ui-motionAnimate').each(function(){
				var effect = $(this).attr('data-effect');
				var product = $(this);
				if (product.length > 0) {
					product.waypoint(function(direction) {
						//스크롤 내릴때 나타난경우
						if(direction === 'down' && !jQuery(this.element).hasClass('animated') ) {
							console.log('1');
							setTimeout(function() {
								product.find('.to-animate').each(function(k) {
									var el = jQuery(this);
									setTimeout (function () {
										el.addClass(effect + ' animated');//fadeInUp
									}, k * 200);
								});
							}, 100);
							jQuery(this.element).addClass('animated');
						}
					}, {offset:'90%'});
				}
			})
		},
	},
}

/*--------------------------------------------------------------
	Content
--------------------------------------------------------------*/
var content = {
	init : function(){
		content.winEvent();
		content.slides.init();
		content.central.init();
	},
	winEvent : function(){
		$(window).resize(function(){
			content.central.init();
		});
		$(window).scroll(function(){

		});
	},
	slides : {
		init : function(){
		}
	},
	central : {
		init : function(){
			var target = '.ui-central';
			setTimeout(function(){
				$(target).each(function(){
					var w = ($(this).width()/2) * -1;
					var h = ($(this).height()/2) * -1;
					$(this).css({'margin-left':w + 'px', 'margin-top':h + 'px'});
				})
			}, 300)
		}
	}
}

$(function() {
	ui.init();
	content.init();
})