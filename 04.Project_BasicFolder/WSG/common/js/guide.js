document.write('<link href="/WSG/common/codeview/styles/shCoreDefaultWhite.css" rel="stylesheet" />');
document.write('<script src="/WSG/common/codeview/scripts/shCore.js?cb=undefined"></script>');
document.write('<script src="/WSG/common/codeview/scripts/shAutoLoader.js?cb=undefined"></script>');
document.write('<script src="/WSG/common/codeview/scripts/shBrushjScript.js?cb=undefined"></script>');
document.write('<script src="/WSG/common/codeview/scripts/shBrushXml.js?cb=undefined"></script>');
document.write('<script src="/WSG/common/codeview/scripts/shBrushCss.js?cb=undefined"></script>');
document.write('<script>SyntaxHighlighter.all();</script>');

var ia = {
	ajax : {
		init : function(){
			$('.g-section-ajax').each(function(i){
				var file = $(this).data('file');
				var color = $(this).data('color');
				var graphHtml =
					'<li>'
					+'	<a href="#gIA'+i+'" data-role="spy-scroll">'
					+'		<span class="tit"><!-- 자동입력 --></span>'
					+'		<span class="bar" data-color="'+color+'"><span class="active"></span></span>'
					+'		<span class="pages"><em class="graph-complete"></em>/<em class="graph-total"></em></span>'
					+'	</a>'
					+'</li>';

				$(this).load('WSG/ia/'+file+'.html');
				$(this).attr('id', 'gIA'+i);
				$('.g-ia-graph .graph').append(graphHtml);
			})
		}
	},
	cal : {
		init : function(){
			var len = $('.g-section-ajax').length;
			for (var i=0;i<len;i++){
				this.action('#gIA'+i);
			}
		},
		action : function(obj){
			//col-complete체크
			if ($(obj).find('[data-complete=done]').length > 0){$(obj).find('[data-complete=done]').parent().addClass('row-done')}
			if ($(obj).find('[data-complete=del]').length > 0){$(obj).find('[data-complete=del]').parent().addClass('row-del')}
			if ($(obj).find('[data-complete=except]').length > 0){$(obj).find('[data-complete=except]').parent().addClass('row-except')}
			$(obj).find('.row-del .col-num').removeClass('col-num');
			$(obj).find('.row-except .col-num').removeClass('col-num');

			//계산
			var cal_total = $(obj).find('.col-num').length;
			var cal_complete = $(obj).find('[data-complete=done]').length;
			var cal_process = Math.round((cal_complete/cal_total)*100);

			//그래프
			var graph = $('.g-ia-graph a[href="'+obj+'"]');
			var graph_tit = $(graph).find('.tit');
			var graph_total = $(graph).find('.graph-total');
			var graph_complete = $(graph).find('.graph-complete');
			var graph_process = $(graph).find('.bar');
			var graph_active = $(graph).find('.bar .active');
			graph_total.text(cal_total);
			graph_complete.text(cal_complete);
			graph_process.attr('data-process', cal_process+'%');
			graph_active.css({backgroundColor:graph_process.data('color'), width:cal_process+'%'});

			//범례
			var legend_total = $(obj).find('.legend-total');
			var legend_complete = $(obj).find('.legend-complete');
			var legend_process = $(obj).find('.legend-process');
			legend_total.text(cal_total);
			legend_complete.text(cal_complete);
			if (cal_complete > 0){legend_process.text(cal_process+'%')}
			else {legend_process.text('0%')}

			//리스트
			var ia_num = $(obj).find('.col-num');
			var ia_depth4 = $(obj).find('td.col-4depth');
			var is_depth4 = false;
			var ia_depth5 = $(obj).find('td.col-5depth');
			var is_depth5 = false;
			var ia_tit = $(obj).find('.g-h2 > a').text();
			graph_tit.html(ia_tit);

			//넘버링
			for (var i=0;i < cal_total;i++){
				ia_num.eq(i).text(i+1);
			}

			//depth4체크
			for (var j=0;j < ia_depth4.length;j++){
				if (ia_depth4.eq(j).text() != ''){
					is_depth4 = true;
				}
			}
			if (is_depth4 == false){$(obj).find('.col-4depth').hide()}

			//depth5체크
			for (var k=0;k < ia_depth4.length;k++){
				if (ia_depth5.eq(k).text() != ''){
					is_depth5 = true;
				}
			}
			if (is_depth5 == false){$(obj).find('.col-5depth').hide()}
		}
	},
	url : {
		init : function(){
			$('td.col-url').each(function(){
				var text = $(this).text();
				$(this).empty().append('<a href="'+text+'" target="_blank">'+text+'</a>');
			})
		}
	},
}

var iOSversion = function(){
	if (/iP(hone|od|ad)/.test(navigator.platform)) {
		var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
		return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
	}
}

var gCom = {
	init : function(){
		console.log('gCom.init()');
		this.gAside.init();
	},
	gAside : {
		asideEl : '#g-aside',
		anbBtnEl : '.g-btn-anb',
		maskEl : '.g-mask',
		asideWid : null,
		init : function(){
			this.asideWid = $(this.asideEl).width();

			//펼치기
			$(this.anbBtnEl).not('.is-clickEvent').on('click', function(e){
				$('body').toggleClass('is-aside-opened');
			}).addClass('is-clickEvent');

			//숨기기
			$(this.maskEl).not('.is-clickEvent').on('click', function(e){
				$('body').removeClass('is-aside-opened');
			}).addClass('is-clickEvent');
		},
	}
}

var gUI = {
	init : function(){
		this.winEvent();
		//mScroll
		if ($('.g-js-scroll').length){
			ut.setScriptLoader('/common/js/plugins/jquery.mCustomScrollbar.min.js', 'mScrollerScript');
			this.mScroll.init();
		}
		this.spyScroll.init();
		this.scrolled.init();
		this.tabCodeview.init();
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
				$(this).mCustomScrollbar();
			})
		}
	},
	spyScroll : {
		init : function(){
			$('[data-role=spy-scroll]').on('click', function(e){
				var target = $(this).attr('href');
				var topH = 30;
				var iOSVer = iOSversion();
				var scrObj = null;
				if (typeof iOSVer != 'undefined'){
					scrObj = 'body';
				} else {
					scrObj = 'html';
				}
				$(scrObj).animate({scrollTop:$(target).offset().top - topH}, 500);
				return false;
			})
		}
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
	ia.ajax.init();
	setTimeout(function(){
		ia.cal.init();
		ia.url.init();
	},500);

	gCom.init();
	gUI.init();
})
