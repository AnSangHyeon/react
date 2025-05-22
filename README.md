# 202330219 안상현

# 5월 22일 (12주차)

## 새로운 React 앱 만들기
- react로 새로운 앱을 만들 때 사용할 수 있는 다양한 프레임워크 옵션이있습니다.  
각 프레임워크는 특정 목적이나 플랫폼에 최적화되어 있습니다.

## 1. Next.js (앱 라우터 기반)
- Next.js는 React 아키텍처를 최대한 활용하는 `풀스택 React 프레임워크`입니다.
  ```bash
    npx create-next-app@latest
  ```
- 유지 관리
  - Vercel

- 배포 옵션
  - Node.js 서버
  - 서버리스 환경
  - 정적 내보내기

- 특징
  - 서버 컴포넌트, 파일 기반 라우팅
  - 앱 라우터 지원
  - Vercel과 연동 시 클라우드 서비스 이용 가능

## 2. React Router (v7)
- React Router는 가장 널리 사용되는 `React용 클라이언트 라우팅 라이브러리`입니다.
  ```bash
  npx create-react-router@latest
  ```
- 유지 관리
  - Shopify

- 특징
  - Vite와 함께 사용 가능
  - 웹 표준 API 중심
  - 다양한 배포 플랫폼에 최적화
  - create-react-router로 빠른 프로젝트 시작 가능

## 3. Expo (React Native 기반)
- Expo는 네이티브 UI를 사용하여 웹 + 모바일 앱을 만들 수 있는 프레임워크입니다.
  ```bash
  npx create-expo-app@latest
  ```
- 유지 관리
  - Expo (회사)

- 지원 플랫폼
  - Android
  - iOS
  - Web

- 특징
  - React Native 기반
  - App Store 및 Play Store 제출 가능
  - 무료 빌드 가능, 유료 클라우드 서비스 선택 가능

## 4. 그 외 주목할 만한 프레임워크
- TanStack Start (베타)
  - 기반
    - TanStack Router
  - 특징
    - 서버 사이드 렌더링(SSR)
    - 스트리밍 지원
    - 서버 함수 및 번들링 도구 포함

- RedwoodJS
  - 특징
    - 사전 구성된 풀스택 앱 템플릿
    - GraphQL 및 Prisma 통합
    - React + Node.js 기반 풀스택 프레임워크

## 1. 새로운 React 프로젝트를 시작하는 방법
- Create React App 사용
  ```bash
    npx create-react-app my-app
    cd my-app
    npm start
  ```
  - 특징 
    - 개발 서버 자동 실행
    - JSX, Babel, Webpack 등이 자동 설정됨

- Vite 사용 (더 빠르고 가볍게)
  ```bash
    npm create vite@latest my-app -- --template react
    cd my-app
    npm install
    npm run dev
  ```
    - 특징
      - 빌드 속도 매우 빠름
      - 설정이 간단함

- 두 방법 모두 React 프로젝트의 초기 설정을  
자동으로 해주며 개발 서버까지 실행됨.

## 2. 기존 프로젝트에 React를 추가하는 방법
- 기존 HTML/JavaScript 프로젝트에 React를 추가해서 점진적으로 사용할 수 있다
  1. React 설치
      ```bash
        npm install react react-dom
      ```
  2. HTML에 루트 요소 추가
      ```html
        <div id="root"></div>
      ```
  3. React 코드 작성 및 렌더링
      ```js
        import React from 'react';
        import { createRoot } from 'react-dom/client';
        import App from './App.js';

        const root = createRoot(document.getElementById('root'));
        root.render(<App />);
      ```

- 기존 사이트에 일부 영역에만 React를 적용할 수도 있어 유연하다

## 3. 에디터를 설정하는 방법 (VS Code 기준)
- React 개발에 가장 많이 사용되는 편집기는 `Visual Studio Code (VS Code)`이다.
- 추천 확장 프로그램
  - ESLint: 문법 및 코드 스타일 자동 검사
  - Prettier: 코드 자동 정렬/포맷팅
  - React Developer Tools (브라우저용): 컴포넌트 디버깅
  - JavaScript / TypeScript 지원 확장 (기본 포함됨)

- 추천 설정
  - 자동 저장(On Save)
  - 포맷팅 On Save
  - 테마: Dark+ 또는 GitHub Theme

- 이러한 설정은 생산성을 높이고 오류를 줄여준다.

## 4. React 개발자 도구를 설치하는 방법
- React 컴포넌트를 브라우저에서 실시간으로 확인하려면  
React Developer Tools를 설치한다.

- 설치 방법
  - 크롬 웹 스토어에서 "React Developer Tools" 검색 후 설치
  - 설치하면 브라우저 개발자 도구에 Components / Profiler 탭이 생김

- 주요 기능
  - 컴포넌트 트리 시각화
  - 각 컴포넌트의 props, state 확인 가능
  - 상태 변경 추적 가능
  - 렌더링 성능 분석 (Profiler)

- 개발 중 React 동작을 정확히 파악할 수 있어서 매우 유용하다.



# 5월 15일 (11주차)
### step 3: 최소한의 데이터만 이용하여 완벽하게 ui state표현하기 - 5월8일 필기에 있음

## Step 4: State가 어디에 있어야 할지 정하기
- 상태(state)를 적절한 위치에 올바르게 배치하는 방법
- 목적 
  - 상태를 공통 조상 컴포넌트에 올려서, 여러 컴포넌트가 함께 사용할 수 있도록 하기위함

- 4단계 정리  
  1. state가 필요한 컴포넌트를 기준으로 시작한다.
  2. 여러 컴포넌트가 함께 쓴다면
      - 공통 부모 컴포넌트에 state를 둔다.
  3. 자식이 상태를 바꿔야 한다면
      - 부모 컴포넌트에서 콜백 함수를 만들고 자식 컴포넌트에게 props로 전달해준다.
  4. 계산으로 값을 얻을 수 있다면
      - 굳이 state로 만들지 않는다.
## Step 5: 역흐름 제어하기
- 자식컴포넌트의 이벤트나 데이터를 부모컴포넌트에 props로 전달하여 부모의 state를 변경하는것
- 자식컴포넌트에서 부모컴포넌트의 state를 변경할때의 예:
  ```jsx
  import { useState } from 'react';
  import Child from './Child';

  function Parent() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
      setCount(count + 1);
    };

    return (
      <div>
        <h1>Count: {count}</h1>
        <Child onIncrease={increaseCount} />
      </div>
    );
  }

  export default Parent;
  // 부모
  // 자식컴포넌트에 onIncrease이라는 이름으로 increaseCount함수를 props로 전달

  function Child({ onIncrease }) {
    return <button onClick={onIncrease}>+1 증가</button>;
  }

  export default Child;
  // 자식
  // 부모컴포넌트가 보낸 onIncrease이라는 props를 받고
  // onClick(클릭)했을때 props로 전달받은 onIncrease이름의 increaseCount함수를 실행시킴

  ```


# 5월 8일 (10주차)
## <a href="https://ko.react.dev/learn/thinking-in-react">오늘의 참고자료(클릭)</a>

1. UI에 영향을 주는 데이터만 state로 둔다
    - 예: 사용자 입력값, 체크 여부 등
2. 계산해서 만들수있는 값은 state를 사용하지마라
    - 예: 상품 전체 목록과 검색어가 있을때 state를 만들어 계산하지않고 계산로직을 짬
3. 모든 state는 가능한 한 상위 컴포넌트에 둔다
    - 여러 컴포넌트가 같은 데이터를 써야 할 때 유용함

<img src="https://ko.react.dev/images/docs/s_thinking-in-react_ui_outline.png">

- FilterableProductTable  <- 전체를 감싸는 상위 컴포넌트
  - SearchBar             <- 검색 입력창 컴포넌트
  - ProductTable          <- 상품 리스트 전체
    - ProductCategoryRow  <- 카테고리별 제목 (예: "사과")
    - ProductRow          <- 개별 상품 행

- React로 사용자 인터페이스를 빌드할 때 `컴포넌트`라는 조각으로 나눔
  - 비유: 로봇의 몸(app.js)에 컴포넌트라는 팔, 다리등의 부위를 붙임


## UI를 컴포넌트 계층으로 쪼개기 핵심정리
- 전체 화면을 역할별로 나누어, 작은 단위의 컴포넌트로 나누는 것
- 재사용, 유지보수, 이해가 편해지는게 특징


# 4월 18일 (8주차 -> 보강)

## key
- key는 리스트를 렌더링할 때 각 요소를 고유하게 식별하기 위한 속성
- key를 설정하면 React가 변경된 부분만 효율적으로 렌더링한다
```jsx
// key값을 move로 설정
<li key={move}> 
  <button onClick={() => jumpTo(move)}>{description}</button>
</li>
```

## map함수
```js
const newArray = array.map(callback(currentValue, index, array));
```
- callback -> 각 요소에 적용할 함수
  - 화살표함수(Arrow Function)를 사용하면 생략가능 
- currentValue -> 현재 순회 중인 요소
- index (선택적) -> 현재 요소의 인덱스
- array (선택적) -> 원본 배열 전체
- newArray -> map()의 결과로 생성된 새로운 배열

## Frangment태그 
- 렌더링 결과에 아무런 영향을 주지 않는 가상의 부모 요소로 사용함
- 사용법은 두가지

```jsx
// 축약형으로 짧고 간편하지만 key속성 사용못함
<>추가내용</> 

// 정식형으로 key속성이 사용가능하지만 import해야함
import { Fragment } from 'react';
<Fragment>추가 내용</Fragment> 
```

# 4월 17일 (7주차)
## 구조 분해 할당
- 배열이나 객체의 구조를 해체하여   
내부 값을 개별 변수에 쉽게 할당하는 방법

## 함수 내에서 return사용
```js
if(squares[i]) {
  return;
}
// return할 값이없으면 undefined(정의되지않음)를 
// 반환하고 함수를 끝냄(javascript에서만)
```

## 불변성이란?
- 불변성은 값이나 객체를 한 번 만들면 변경하지 않는 성질이다.
- 불변성의 중요성 
  - 복잡한 기능을 쉽게 사용할수있다
  - 코드의 예측 가능성을 높이고, 버그를 줄이며 성능 최적화에 도움이 된다.
  
## DOM(Document Object Model)
- 돔은 html문서를 객체형태로 구조화해놓은 모델이다
- 구조의 예:
  - document
    - html
      - head
      - body
        - div

## 화살표함수(arrow function)
```jsx
// 보통 함수 
function test(파라미터) {}

// 화살표 함수 
let test = (파라미터) => {}

//이런식으로 매개변수로 함수에 값을 일회성 함수로 전달할때도 사용가능
onSquareClick={ () => handleClick(0) } 
```

## slice함수 다시 정리
- 매개변수는 start, end가 있다 
- start인덱스는 포함하지만 end인덱스는 포함하지않음
- 매개변수로 start값만 넣으면 그 지점부터 맨 뒤인덱스까지를 의미한다
- 매개변수가 없으면 전체를 의미함
```js
let arr = ["a", "b", "c"]

console.log(arr.slice(1, 3)) // ["b", "c"] 출력
```


# 4월 10일 (6주차)
## props(프로퍼티)
- 컴포넌트 간 데이터를 전달하는 방법
- 부모 컴포넌트에서 자식 컴포넌트로 값을 넘겨줄 때 사용
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default function App() {
  return <Greeting name="React" />; // props 전달
}
```

## state 끌어올리기
- 여러 개의 컴포넌트가 같은 데이터를 공유해야 할 때, <br>State를 부모 컴포넌트로 이동시키는 방법

```jsx
import { useState } from "react";

function Counter({ count, onIncrement }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1); // 상태 변경 함수

  return (
    <div>
      <Counter count={count} onIncrement={handleIncrement} />
      <Counter count={count} onIncrement={handleIncrement} />
    </div>
  );
}
```

## .fill()
```jsx
Array(arrLength).fill(value, start, end)
Array(arrLength).fill(value, start)
Array(arrLength).fill(value)
```

## arr.slice()
- 배열의 원하는 부분을 가져옴


# 4월 3일 (5주차)

## useState는 상단에서만 사용가능하다
## useState 예:
```jsx
  import { useState } from 'react';
  const [count, setCount] = useState(0);
  // 타입 [변수, 함수] = useState(초기값);
  // 변수의 초기값을 useState(여기)에 쓰고 
  // 변수에 값을 할당(설정)할땐 setCount(할당할값)이렇게 사용한다
```

## useState상태값은 각각 따로움직인다 예: 
```jsx
// CountState.js
import { 
  useState 
} from 'react';

let CountState = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }

  return (
    <div>
      <button onClick={handleClick}>클릭{count}번째</button>
    </div>
  )
}
export default CountState;
// App.js
import CountState from "./CountState";

export default function App() {
  return (
    <div>
      <CountState /> {/* 두개가 따로 움직임 */}
      <CountState />
    </div>
  )
}

```

# 3월 27일 (4주차)
## css 중첩구조 예:
```css
.container {
  background: blanchedalmond;
  & .foo {
    color:red;

    & .bar {
      color:blueviolet;
    }
  }
}
```
## export default의 예: 
``` js
export default function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <MyButton />
    </div>
  )
}
// export default와 function을 같이쓰는 코드

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <MyButton />
    </div>
  )
}
export default App;
// export default와 function을 따로 쓰는코드
// 같이쓰는게 가독성이 좋고 요즘의 트렌드이다.
```
## 한번에 여러개의 컴포넌트를 export하는 예:
```javascript
function Button1() {
  return (
    <button>Btn1</button>
  )
}
function Button2() {
  return (
    <button>Btn2</button>
  )
}
function Button3() {
  return (
    <button>Btn3</button>
  )
}

export {
  Button1, 
  Button2, 
  Button3
};
```

## wrapping -> 컴포넌트를 하나의 빈 태그 또는 div태그로<br> wrapping을 해야 오류가 안남
```js
  let Test = () => {
    return(
      <>
        <button>히히</button>
      </>
    )
  }
  // or
  let Test1 = () => {
    return(
      <div>
        <button>히히</button>
      </div>
    )
  }
``` 

## 데이터 표시하기 예:
```js
  return(
    <h1>
      {user.name} 
    </h1>
  )
```


# 3월 20일 (3주차)
## node_modules  
### 초기 node_modules 및 새로 설치하는 패키지가 저장됨<br>(특징: 엄청난 양의 파일이 존재한다)  

## public/  
### 정적(static)파일을 저장하는 디렉토리이다<br>(특징: build 후 배포할 html, css, javascript 등이 보관되는 곳)  

## public/index.html  
### React앱이 마운트 되는 스타일 파일이다  

## src/  
### 프로젝트의 주요 코드가 위치하는 디렉토리이다  

## src/App.js  
### 메인 component로 필요한 sub component를 모아서 관리하고 <br>출력을 위해 index.js로 전달한다

## src/App.css  
### App.js에 적용되는 스타일을 정의하는 파일  

## src/index.js  
### React앱의 진입 점(entry point)으로 최종 렌더링이 되는곳이다  

## src/index.css  
### 전역 스타일을 정의하는 스타일 파일이다  

## 의존성 관리와 package.json  
### package.json은 패키지 의존성을 관리하는 파일이다  

## package.json과 package-lock.json의 차이점  
### package.json은 의존성과 설정을 정의하고,<br> package-lock.json은 실제 설치된 의존성의 <br>정확한 버전과 설치 순서를 기록하는 파일입니다.  

## node_modules 재설치  
- github에서 clone했을경우
- 개인의 프로젝트를 다른 pc에서 자신의 작업을 clone할경우  

## full-stack  
### 풀스택을 구현할땐 next.js가 편하다<br>(특징: 간단한 Routing)<br>예시: <br> 
```jsx
import React, { ReactNode } from 'react'
import { createHashHistory } from 'history'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { syncHistoryWithStore } from 'mobx-react-router'
import * as store from '@store/index'
import 'moment/locale/ko'
import 'antd/dist/antd.min.css'
import Header from './layout/Header'
import Footer from '@layout/Footer'
import { Layout } from 'antd'
import './App.css'
import { loadComponent } from '@layout/menu'
import Info from '@pages/Info'
import Work from '@pages/Work'
import Profile from '@pages/Profile'
import Notice from '@pages/Notice'
import Service from '@pages/Service'
import Guide from '@pages/Guide'
import Reservation from '@pages/Reservation'
import Fare from '@pages/Fare'
import SignUp from '@pages/Sign'
import Recruitment from '@pages/Recruitment'
import EventTest from '@pages/Event Test'



interface IAppProps {
  children: ReactNode
}

const hashHistory = createHashHistory()
const history = syncHistoryWithStore(hashHistory, store.routerStore)

const Home = loadComponent(() => import(/* webpackChunkName: "Home" */ '@pages/Home'))
const Login = loadComponent(() => import(/* webpackChunkName: "Home" */ '@pages/Login'))

const App: React.FC<IAppProps> = (props: IAppProps) => {

  return (
    <div className="App">
      <Header/> 
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/Guide' element={<Guide />} />
        <Route path='/Reservation' element={<Reservation />} />
        <Route path='/Fare' element={<Fare />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Sign' element={<SignUp />} />
        <Route path='/Recruitment' element={<Recruitment />} />
        <Route path='/EventTest' element={<EventTest />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
```  

## React의 장점  
### 동일한 기술을 사용하여 웹, 앱과 네이티브 앱을 모두 구축할수있다.  




