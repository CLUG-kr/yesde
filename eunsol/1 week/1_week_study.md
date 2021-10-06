# 📢 1주차 스터디 일지

> #### 작성자 : 김은솔
>
> #### 작성 날짜 : 2021.09.30
>
> #### 참여자 : 김재훈, 김선호, 윤민규

## ✅ 이번주 공부 내용 : 섹션 2 (JS 문법 및 NodeJS 웹 앱 만들기)

### ▶️ JavaScript 데이터 타입

- Data type : Number
* 숫자를 표기하는 자료형
* 소수, 정수 모두 Number 라고 통칭

- Data type : String
* 문자열을 표기하는 자료형
* String 뒤에 .length 붙이면 길이 알 수 있음

```console.log(‘1’ + ‘1’) # ‘11’
console.log(1 + 1) # 2
```

### ▶️ var? (let과 const)
- var : 변수 선언과 초기화가 동시에 진행 (선언문이 실행문 뒤에 있어도 실행됨!) -> 호이스팅

** var 문제점 **
변수 중복 선언 가능  예기치 못한 값 반환 가능
함수 외부에서 선언한 변수는 모두 전역변수가 된다
변수 선언문 이전에 변수를 참조하면 항상 undefined를 반환

그러므로 let, const를 사용하자.

### ▶️ let, const
- let 키워드로는 변수 중복 선언 불가. 재할당 가능 (변수)

- const는 선언과 초기화 동시에 진행해야 함 (상수) + 재선언 불가, 재할당 불가 (but, 불변을 의미하지는 않음)

### ▶️ 변수 대입

- ``을 사용하여 변수를 대입하는 방식을 가장 많이 사용한다.

```
const s = ‘hi’; 
const template = ` ${s} ~~~ `; 
console.log(template);
```

### ▶️ URL - Node JS

http://opentutorials.org:3000/main?id=HTML&page=12

- http : protocol
- host : 특정 인터넷에 연결되어 있는 컴퓨터
- 3000 : 포트번호. 포트 번호에 연결된 컴퓨터 서버로 연결 시켜준다.
- path : 서버의 어떤 디렉토리의 파일인지 나타냄
- query string : 쿼리 스트링은 ?로 시작하기로 약속되어 있음. 구분은 &으로 함.

### ▶️ URL을 통해 입력된 값 사용하기

```
const _url = request.url; // 현재 웹사이트 path const queryData = url.parse(_url, true).query; // 현재 웹사이트 url의 쿼리 스트링 가져옴 
let title = queryData.id; // 쿼리 스트링 중에 id가 있으면 가져옴 
if(_url == '/’) { // path가 ‘/’ 일 때 title에 Welcome 넣기 
title = 'Welcome'; 
}
```

### ▶️ NodeJS 파일 읽기

- eunsol/main.js 참고

### ▶️ boolean

- True, False로 구분 되며 제어, 조건문에 사용

** 비교 연산 **

- == : 값만 비교

- === : 데이터의 타입까지 비교

### ▶️ 조건문, 반복문

- 조건문은 다른 프로그래밍 언어와 동일
- while문도 동일
- 기본 for문도 동일

```
// 조금 다른 for .. of 문 
arr = [3, 5, 7] 
for (let i of arr) { 
    console.log(i); // ‘3’, ‘5’, ‘7’ 
}
```

### ▶️ 콘솔에서의 입력값

- const args = process.argv;
- console.log(args)  // 콘솔에 입력한 모든 입력값들을 보여준다.
- args[0] : nodejs 런타임 위치
- args[1] : 해당 파일 위치
- args[2] ~ : 사용자 입력 부분

### ▶️ Not found

- main_19.js 참고

### ▶️ 배열

- 배열 안에 다양한 데이터 타입이 있을 수 있음
- 이전에 배웠던 프로그래밍 언어와 유사
- const arr = [‘A’, ‘B’, ‘C’, ‘D’];
- console.log(arr[2]);   // 배열 값 조회
- arr.push(‘E’); // 배열에 값 넣기

### ▶️ 파일 목록 - NodeJS

- main_24.js 참고

### ▶️ 함수

- main_26.js 참고

## 👊 Git (공부한 소스코드 공유)

| 작성자 |           주소            |
| :----: | :-----------------------: |
|  김은솔  | https://github.com/Cyma-s |
