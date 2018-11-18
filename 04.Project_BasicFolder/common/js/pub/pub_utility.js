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
	setScriptLoader : function(url, id, callback){
		if ($(id).length == 0){
			$('head').after('<script src="'+url+'"></script>');
			if (callback){callback()}
		}
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