/**
* @desc �������� ���� �� IE�� ��� �������� üũ���ִ� �Լ�.
*
* @method browserCheck
* @param {Boolean} compatibilityView, ȣȯ������ ��� ����
* @param {Boolean} returnText, ���� ������ ���� ��ȯ�� ������ ����
* @return {String} return_text ������ ��ȯ�ϸ� returnText �Ű������� ���ο� ���� ������� ���� �� �ִ�.

*/

window.browserCheck = function (compatibilityView, returnText) {
	'use strict';
	var _ua, trident, rv, css_class, return_text;
	_ua = navigator.userAgent.toLowerCase();
	trident = _ua.match(/trident\/(\d.\d)/i) || _ua.match(/rv:(\d.\d)/i);
	rv = -1;
	css_class = '';
	return_text = '';

	if ( compatibilityView === undefined || trident === null ) compatibilityView = false;

	if ( compatibilityView && trident != null ) {
			//IE 11,10,9,8
    	switch (trident[1]) {
    		case '7.0': css_class = "ie11 msie";
    		break;
    		case '6.0': css_class = "ie10 msie";
    		break;
    		case '5.0': css_class = "ie9 msie";
    		break;
    		case '4.0': css_class = "ie8 msie";
    		break;
    		default: css_class = "ie7 msie";
    	}
	}
	else
	{
		if ( _ua.indexOf('msie 7') != -1 ) css_class = 'ie7 msie';
		else if ( _ua.indexOf('msie 8') != -1 ) css_class = 'ie8 msie';
		else if ( _ua.indexOf('msie 9') != -1 ) css_class = 'ie9 msie';
		else if ( _ua.indexOf('msie 10') != -1 ) css_class = 'ie10 msie';
		else if (_ua.indexOf('msie') == -1 && trident && trident[1] == '7.0' ) css_class = 'ie11 msie';
	}

    //other
    if (_ua.indexOf("safari") != -1 && _ua.indexOf('version') != -1) css_class = 'safari';
    else if (_ua.indexOf("chrome") != -1 && _ua.indexOf("opr") == -1) css_class = 'chrome';
    else if (_ua.indexOf("opera") != -1 || _ua.indexOf("opr") != -1 || _ua.indexOf("opera") != -1) css_class = 'opera';
    else if (_ua.indexOf("firefox") != -1) css_class = 'firefox';
	if ( _ua.indexOf( "edge" ) > -1 ) css_class = "msie edge";


    if ( document.body.className.length >= 1 ) {
    	document.body.className += ' '+css_class;
    } else {
    	document.body.className += css_class;	}


};

//$('body.ie*').addClass('msIE');

$(window).load(function(){
	browserCheck();
});


$(function(){
	//Table Summary // caption
	/* table�� data-th-collect="false" �Ӽ��� �����ϸ� th�� �ִ� �ؽ�Ʈ�� �������� ���� : th�� ���������� summary�� ������ �ڵ����� �������� �ʵ��� �ϰ� ������ ���� */
	var c = addTableCaption('table');

	function addTableCaption ( table ) {

		var thStr = '',
			htmlDoctype = doctypeCheck();

		function doctypeCheck () {
			var doctype = document.doctype,
				htmlVersion = '';

			if ( doctype ) {
				var v = doctype.publicId;

				if ( !v ) htmlVersion = '5';
				else if ( v.indexOf('HTML 4.01') > -1) htmlVersion = '4.01';
				else if ( v.indexOf('XHTML 1.0') > -1 ) htmlVersion = 'XHTML 1.0';
				else if ( v.indexOf('XHTML 1.1') > -1 ) htmlVersion = 'XHTML 1.1';
			} else {
				htmlVersion = 'Quirks mode';
			}
			return htmlVersion;
		}

		$(table).each(function( idx, value ){

			if ( $(value).data('th-collect') !== false ) {
				thStr = '';
				for( var i=0; i<$(value).find('th').length; i+=1 ) {
					if ( $(value).find(' > * > * > th').eq(i).text() !== '' ) {
						thStr += $(value).find(' > * > * > th').eq(i).text() + ', ';
					}
				}
				thStr = thStr.slice(0, thStr.length-2);
				if ( htmlDoctype !== '5' ) {
					$(value).attr('summary', thStr + '�� ������ ǥ �Դϴ�.' );
				} else if ( htmlDoctype === '5' ) {
					$(value).find(' > caption > p').text( thStr + '�� ���� ǥ �Դϴ�.' );
				}
			}

		});

	}
});