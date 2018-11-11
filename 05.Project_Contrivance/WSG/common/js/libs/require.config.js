require.config({
  /* baseUrl : js 파일이 있는 기본 경로를 설정한다. */
  baseUrl : '', // js 라는 폴더를 기본 폴더로 설정

  /* paths : baseUrl을 기준으로 탐색하며, 특정 모듈에 대한 경로를 선언한다.
  paths : {
    'ui' : 'ui',
  }
  */
});

/* require 메소드의 첫번째 인자는 사용할 디펜던시를 관리하는 배열이다. 두번째 인자는 디펜던시들이 로드된 뒤 호출될 콜백 함수이다. 콜백함수의 인자로 첫번째 인자로 선언한 디펜던시 모듈들을 사용할 파라미터를 순서대로 정의해준다. (첫번째 인자인 배열에 있는 디펜던시들이 로드 된 뒤에 두번째 인자인 콜백함수가 수행된다.) */
require(['../../common/js/libs/jquery-3.3.1.min'] , function () {
	require(['../../common/js/libs/jquery.browser.check']);
	require(['../../common/js/ui']);
	require(['../../WSG/common/js/guide']);
	require(['../../WSG/codeview/scripts/shcore']);
	require(['../../WSG/codeview/scripts/shautoloader']);
	require(['../../WSG/codeview/scripts/shbrushjscript']);
	require(['../../WSG/codeview/scripts/shbrushxml']);
	require(['../../WSG/codeview/scripts/shbrushcss']);
});
/*
<script src="../codeview/scripts/shcore.js?cb=undefined"></script>');
<script src="../codeview/scripts/shautoloader.js?cb=undefined"></script>');
<script src="../codeview/scripts/shbrushjscript.js?cb=undefined"></script>');
<script src="../codeview/scripts/shbrushxml.js?cb=undefined"></script>');
<script src="../codeview/scripts/shbrushcss.js?cb=undefined"></script>');
<script>SyntaxHighlighter.all();</script>');
<script src="../common/js/guide.js"></script>');


*/