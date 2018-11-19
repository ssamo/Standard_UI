var gCom = {
	init : function(){
		console.log('gCom.init()');
		this.gHeader.init();
		this.gAside.init();
		this.gBreadCrumb.init();
	},
	gHeader : {
		init : function(){
			this.action();
			this.event();
		},
		event : function(){
			var _this = this;
			$(window).on('scroll', function(){
				_this.action();
			})
		},
		action : function(){
			if ($(window).scrollTop() > 0 && $('body').hasClass('is-body-scrolled') == false){
				$('body').addClass('is-body-scrolled');
			} else if ($(window).scrollTop() == 0 && $('body').hasClass('is-body-scrolled') == true){
				$('body').removeClass('is-body-scrolled');
			}
		}
	},
	gAside : {
		asideEl : '#g-aside',
		anbBtnEl : '.g-btn-aside',
		maskEl : '.g-mask',
		asideWid : null,
		init : function(){
			if (location.hash != ''){
				gUI.spyScroll.action(location.hash);
			}

			this.asideWid = $(this.asideEl).width();
			this.setInit();
			this.event();
		},
		setInit : function(){
			var _this = this;
			var path = location.pathname;
			$(this.asideEl).find('.g-lnb a[href*="'+path+'"]').parent().addClass('is-current').find('.g-snb').stop().slideDown('fast');
		},
		event : function(){
			//펼치기
			$(this.anbBtnEl).not('.is-clickEvent').on('click', function(e){
				$('body').toggleClass('is-aside-opened');
			}).addClass('is-clickEvent');

			//숨기기
			$(this.maskEl).not('.is-clickEvent').on('click', function(e){
				$('body').removeClass('is-aside-opened');
			}).addClass('is-clickEvent');

			$('.g-lnb > ul > li > a').on('click', function(e){
				var $this = $(this);
				if ($(this).next().length){
					$('.g-snb').stop().slideUp('fast');
					$(this).parent().find('.g-snb').stop().slideToggle('fast');
					e.preventDefault();
				}
			})
		},
	},
	gBreadCrumb : {
		init : function(){
			$('.g-content-header h1').each(function(){
				$('.g-breadcrumb p').text($(this).text());
			})
		}
	}
}

var gUI = {
	init : function(){
		this.winEvent();
		this.scrolled.init();

		if ($('.g-js-scroll').length){
			ut.setScriptLoader('/common/js/plugins/jquery.mCustomScrollbar.min.js', 'mScrollerScript');
			this.mScroll.init();
		}
		if ($('[data-role=spy-scroll]').length){
			this.spyScroll.init();
		}
		if ($('.g-tab-codeview').length){
			this.tabCodeview.init();
		}
		if ($('.js-follow').length){
			this.followActive.init();
		}
	},
	winEvent : function(){
		var setTime = null;
		$(window).on('scroll', function(){
			clearTimeout(setTime);
			setTime = setTimeout(function(){
				gUI.scrolled.init();
			},10)
		})
	},
	mScroll : {
		scrollEl : '.g-js-scroll',
		init : function(){
			$(this.scrollEl).each(function(){
				$(this).mCustomScrollbar({scrollInertia:200});
			})
		}
	},
	spyScroll : {
		init : function(){
			var _this = this;
			var id = null;
			$('[data-role=spy-scroll]').on('click', function(){
				if ($(this).attr('href').indexOf('#') > -1){
					id = '#' + $(this).attr('href').split('#')[1];
				} else {
					id = $(this).attr('href');
				}

				_this.action(id);
			})
		},
		action : function(id){
			var topH = $('#g-header').height();
			var gapH = 30;
			var scrObj = 'html, body';
			$(scrObj).stop().animate({scrollTop:$(id).offset().top - topH - gapH}, 500);
		},
	},
	scrolled : {
		init : function(){
			if ($('html').scrollTop() > 50){
				if (!$('#g-wrap').is('.is-scrolled')){
					$('#g-wrap').addClass('is-scrolled');
				}
			} else {
				if ($('#g-wrap').is('.is-scrolled')){
					$('#g-wrap.is-scrolled').removeClass('is-scrolled');
				}
			}
		}
	},
	tabCodeview : {
		tabNav : '.g-tab',
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
