## 프로젝트 소개

![ci](https://user-images.githubusercontent.com/37607373/130215930-0247f890-9ac1-4764-a742-08457a929cb0.jpg)

# 프리온보딩 코스 Solar Connect 기업 과제

> 당신은 계획적으로 일하는 것을 좋아하는 개발자입니다.
>
> 그동안 해야할 일과 했던 일을 Tool을 통해 정리해가며 작업을 해왔습니다. 이번에 좋은 기회로 해외에 나가게 되었는데, ..
>
> 이런! 인터넷이 되지 않는 환경이라서 종전에 쓰던 Tool을 사용할 수 없습니다. 충격을 받고 멍해있던 찰나에 예전에 만들어둔 Todo List 서비스가 생각이 났습니다. 예전에 만들어둔 서비스를 개선하여 원하는 기능을 가진 서비스를 만들 수 있을까요?

<br/>

<details>
    <summary><STRONG>
       📚 과제 요구사항 보기
        <STRONG></summary>
    <div markdown="1">
<h3>✔️ 과제 설명</h3>

- 간단한 베이스 코드가 주어집니다. ([베이스 코드 링크](https://codesandbox.io/s/long-haze-9v8jt?file=/src/components/todo/TodoService.tsx))
- 베이스 코드는 ReactJS 기반으로 만들어져 있으며, 몇개의 버그가 포함되어 있습니다.
- 요구사항을 잘 읽고, 버그 수정과 필요한 기능을 추가합니다.

<h3>✔️ 수행기술</h3>

- ReactJS 기반으로 작성합니다.
- 주어진 모듈과 그 기능만을 사용하며, 주어진 라이브러리 외에 추가로 사용하지 않도록 합니다.

<h3>✔️ 요구사항</h3>

**1. 완성하기**

- Todo List 화면에 현재 시간을 표시합니다.
- Todo 항목에 완료 버튼을 누르면 Todo가 완료될 수 있도록 완성합니다.

**2. 기능 추가하기**

- Todo 항목에 완료 목표일을 기입합니다.
- 입력 항목 근처에 목표일을 입력 받을 수 있게 UX를 구성합니다.
- Datepicker를 통해서 입력을 받습니다.
  - https://ant.design/components/date-picker/
- 완료 목표일은 Todo 항목에서 볼 수 있어야 합니다.
- 날짜 표기법, 디자인의 요소는 작성자의 편의에 맞게 구현 가능합니다.

**3. 예외 추가하기**

- 예외가 발생할 만한 부분에 Modal을 띄워 예외를 표시합니다.
  - https://ant.design/components/modal/

**4. 버그 수정하기**

- 버그를 발견하고, 이를 수정합니다.
- 위 요구사항을 먼저 처리해야 버그를 수정하기 쉽습니다.
- 힌트1 : 지워지지가 않네?
- 힌트2 : 불러오고 추가 해볼까?

</div>
</details>
<br/><br/>

## 🚀 배포

Demo Link: https://solar-connect-todo-list.netlify.app/
<br/><br/>

## 🗂 구현 목록

1. 완성하기
   - [x] Todo List 화면에 현재 시간을 표시
   - [x] Todo 아이템의 완료 버튼을 누르면 Todo 완료 상태 변경
2. 기능 추가하기
   - [x] 입력 항목 근처에 목표일을 입력 받을 수 있게 [Datepicker](https://ant.design/components/date-picker/)로 UX를 구성
   - [x] 완료 목표일은 필수값이 아님
   - [x] Todo 아이템에 완료 목표일이 보여짐
3. 예외 추가하기
   - [x] Todo 아이템 삭제 버튼을 누르면 [Modal](https://ant.design/components/modal/)을 띄워 삭제 여부 확인
   - [x] 입력 값에 공백문자만 입력할 수 없도록 검증
   - [x] 입력 값의 앞/뒤에 존재하는 공백문자 trimming
   - [x] 입력 값이 존재하면 입력 버튼의 색상이 변경되고 Todo 아이템 등록 가능
4. 버그 수정하기
   - [x] Todo 아이템이 삭제되지 않는 버그 해결
   - [x] 불러오고 추가하면 Todo 아이템의 id가 중복될 수 있는 버그 해결
   - [x] 초기 로드시 로컬스토리지가 비어있을 때 JSON parsing 오류 해결

## 💁🏻‍♂ 실행 방법

### 설치

`npm install`

### 실행

`npm start`
<br/><br/>
