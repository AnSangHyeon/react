# 202330219 안상현


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




