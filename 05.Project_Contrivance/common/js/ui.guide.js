/*
	Conventions V1.0

	## Class Name
		# 현재형인 경우 : 상태를 적용하는 경우
			is-current,     //현  재
			is-active,      //활성화 (사용자에 의한 동작상태)
			is-visible,     //보이기 (프로세스에 의한 노출상태) (기본값이 숨김인 경우 is-visible 적용하여 보여준다.)
			is-hidden,      //숨기기 (프로세스에 의한 노출상태) (기본값이 보이는 경우 is-hidden 적용하여 보여준다.)
			is-on,          //켜  기 (환경설정의 상태 의미)
			is-off,         //끄  기 (환경설정의 상태 의미)

		# 과거형인 경우 : 상태를 체크하는 경우
			is-errored,     //에  러
			is-completed,   //완  료
			is-disabled,    //비활성
			is-opened,      //펼쳐진
			is-folded,      //접혀진
			is-selected,    //선택된
			is-focused,     //포커스
			is-valued,      //값있는
			is-hovered,     //호버된
			is-checked,     //체크된


	## Data Attribute
			data-target     //제어 요소 ID (Class는 data속성을 이용하지 않는다.)
			data-name       //자신 요소 ID
			data-val        //값
			data-num        //숫자
			data-per        //퍼벤트
			data-min        //최소
			data-max        //최대
			data-sum        //합계
			data-total		//전체


	## 함수 접두어
		# Callback, Ajax
			- call~			// 인자값을 받아서 실행하는 함수

		# Getter
			- get~			// Return 함수

		# Setter
			- set~			// 설정 함수
*/
