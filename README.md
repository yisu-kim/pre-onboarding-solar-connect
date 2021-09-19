<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://www.solarconnect.kr/">
    <img src="https://user-images.githubusercontent.com/37607373/130215930-0247f890-9ac1-4764-a742-08457a929cb0.jpg" alt="solarconnect logo" width=150 />
  </a>

  <h3 align="center">투두 리스트 개선</h3>
  
  <p align="center">
    프리온보딩 코스 SolarConnect 기업 과제
    <br />
    <br />
    <a href="https://solar-connect-todo-list.netlify.app/">View Demo</a>
    ·
    <a href="https://codesandbox.io/s/long-haze-9v8jt">Base Code</a>
  </p>
</p>

<!-- Assignment Requirements -->
<details>
  <summary>📋 과제 요구사항 보기</summary>
  <div markdown="1">

#### 과제 설명

- 간단한 베이스 코드가 주어집니다.
- 베이스 코드는 ReactJS 기반으로 만들어져 있으며, 몇개의 버그가 포함되어 있습니다.
- 요구사항을 잘 읽고, 버그 수정과 필요한 기능을 추가합니다.

#### 수행기술

- ReactJS 기반으로 작성합니다.
- 주어진 모듈과 그 기능만을 사용하며, 주어진 라이브러리 외에 추가로 사용하지 않도록 합니다.

#### 요구사항

1. 완성하기

   - Todo List 화면에 현재 시간을 표시합니다.
   - Todo 항목에 완료 버튼을 누르면 Todo가 완료될 수 있도록 완성합니다.

2. 기능 추가하기

   - Todo 항목에 완료 목표일을 기입합니다.
   - 입력 항목 근처에 목표일을 입력 받을 수 있게 UX를 구성합니다.
   - Datepicker를 통해서 입력을 받습니다.
     - https://ant.design/components/date-picker/
   - 완료 목표일은 Todo 항목에서 볼 수 있어야 합니다.
   - 날짜 표기법, 디자인의 요소는 작성자의 편의에 맞게 구현 가능합니다.

3. 예외 추가하기

   - 예외가 발생할 만한 부분에 Modal을 띄워 예외를 표시합니다.
     - https://ant.design/components/modal/

4. 버그 수정하기

   - 버그를 발견하고, 이를 수정합니다.
   - 위 요구사항을 먼저 처리해야 버그를 수정하기 쉽습니다.
   - 힌트1 : 지워지지가 않네?
   - 힌트2 : 불러오고 추가 해볼까?

  </div>
</details>

## About The Project

<p align="center">
  <img src="https://user-images.githubusercontent.com/37607373/133919205-8d5ebe55-3414-41ef-9fd6-405f4f55cf2d.gif" alt="project screenshot" height=600 />
</p>

### Built With

- React
- TypeScript
- antd
- styled-components

## Getting Started

### Installation

To install packages:

```sh
npm install
```

To serve the app:

```sh
npm start
```

## Features

1. 완성하기

   - Todo List 화면에 현재 시간을 표시
   - Todo 아이템의 완료 버튼을 누르면 Todo 완료 상태 변경

2. 기능 추가하기

   - 입력 항목 근처에 목표일을 입력 받을 수 있게 [Datepicker](https://ant.design/components/date-picker/)로 UX를 구성
   - 완료 목표일은 필수값이 아님
   - Todo 아이템에 완료 목표일이 보여짐

3. 예외 추가하기

   - Todo 아이템 삭제 버튼을 누르면 [Modal](https://ant.design/components/modal/)을 띄워 삭제 여부 확인
   - 입력 값에 공백문자만 입력할 수 없도록 검증
   - 입력 값의 앞/뒤에 존재하는 공백문자 trimming
   - 입력 값이 존재하면 입력 버튼의 색상이 변경되고 Todo 아이템 등록 가능

4. 버그 수정하기
   - Todo 아이템이 삭제되지 않는 버그 해결
   - 불러오고 추가하면 Todo 아이템의 id가 중복될 수 있는 버그 해결
   - 초기 로드시 로컬스토리지가 비어있을 때 JSON parsing 오류 해결
