/*
	baseUrl : js 파일이 있는 기본 경로를 설정한다.
	paths : baseUrl을 기준으로 탐색하며, 특정 모듈에 대한 경로를 선언한다.
*/
require.config({
  baseUrl : '/common/js/',
  paths : {
    // Core Library
    'jquery'      : 'libs/jquery-3.3.1.min',

    // Plugin Modules (Required Loader)
    'accordion'   : 'modules/accordion.spec',
    'checkbox'    : 'modules/checkbox.spec',
    'dropdown'    : 'modules/dropdown.spec',
    'modal'       : 'modules/modal.spec',
    'module'      : 'modules/module.spec',
    'popup'       : 'modules/popup.spec',
    'search'      : 'modules/search.spec',
    'shape'       : 'modules/shape.spec',
    'sidebar'     : 'modules/sidebar.spec',
    'tab'         : 'modules/tab.spec',
    'transition'  : 'modules/transition.spec',
    'video'       : 'modules/video.spec',

	'mScroll'     : 'plugins/jquery.mCustomScrollbar.min',

    // Pub Modules (Init Loader)
    'va'          : 'pub/variables',
    'dv'          : 'pub/device',
    'ut'          : 'pub/utility',
    'cm'          : 'pub/common',
    'ui'          : 'pub/ui',
    'cn'          : 'pub/content',
    'mn'          : 'pub/main',
    'pubInit'     : 'pub/init',

	// Guide Modules
    'guideInit'   : 'guide/guide',
  }
});

/*
	require 메소드의 첫번째 인자는 사용할 디펜던시를 관리하는 배열이다.
	두번째 인자는 디펜던시들이 로드된 뒤 호출될 콜백 함수이다.
	콜백함수의 인자로 첫번째 인자로 선언한 디펜던시 모듈들을 사용할 파라미터를 순서대로 정의해준다.
	(첫번째 인자인 배열에 있는 디펜던시들이 로드 된 뒤에 두번째 인자인 콜백함수가 수행된다.)
*/
require(['jquery'], function(){
	require(['va']);
	require(['dv']);
	require(['ut']);
	require(['cm']);
	require(['ui']);
	require(['cn']);
	require(['mn']);
	require(['mScroll']);
	require(['pubInit']);
	require(['guideInit']);
});
