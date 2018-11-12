/*
	## Convention
	1. 네이밍 규칙
		- 표기법
			* [카벨표기법]으로 표기한다.

		- 표기순서
			* [유형][의미] 순서로 정의한다.


	2. 변수 유형 네이밍
		- 선택자요소		: $obj ~
		- 선택자이름		: obj ~
		- 클래스			: cls ~
		- 문자값			: sVal ~
		- 숫자값			: iVal ~
		- 위치값			: iPos ~
		- 길이값			: iLen ~


	3. 변수 의미 네이밍
		[값]
		- 최소			: ~ Min
		- 최대			: ~ Max
		- 기준			: ~ Std

		[요소]
		- 전체			: ~ Wrap
		- 그룹			: ~ Group
		- 목록			: ~ List (반복요소)
		- 링크			: ~ Link
		- 버튼			: ~ Btn
		- 노드			: ~ Node (트리구조)


	4. 인자 네이밍
		- $(자신요소)	: $this
		- $(대상요소)	: $target
		- 콜백함수		: callback


	5. 객채 네이밍 (값을 변경할 수 없는 속성이므로 _로 구분한다.)
		- 자신객체		: _that
		- 옵션객체		: _otp
*/