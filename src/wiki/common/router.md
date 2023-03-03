# RouterV6 
***

#### 1. Url 연결

BrowserRouter는 HTML5의 History API(pushState, replaceState, popstate event)를 사용하여 URL과 UI를 동기해주는 <Router>이다.   
이는 페이지를 새로고침하지 않고도 주소를 변경할 수 있도록 해주고, 현재 주소에 관련된 정보를 props로 조회 및 사용이 가능하도록 한다.   
BrowserRouter는 리액트 라우터 돔을 적용하고 싶은 컴포넌트의 최상위 컴포넌트를 감싸주는 래퍼 컴포넌트이기 때문에, App 컴포넌트를 감싸주면 된다.   

📂 src/index.js 에서 해당 부분만 발췌

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from "react-redux";
import store from "./app/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>  {/*App을 <BrowserRouter/>로 감싸기*/}
              <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
```
***

#### 2. 라우터 리스트 생성

path와 element를 포함하고 있는 라우터 리스트를 생성한다.

📂 src/app/router.js

```javascript
import Home from "../pages/Home"
import AntDesign from "../pages/AntDesign";
import I18next from "../pages/I18next";
import RouterV6 from "../pages/RouterV6"
import Api from "../pages/Api"
import Redux from "../pages/Redux";

const RouteList = [
    {
        path : '/',
        element :  <Home/>
    },
    {
        path : '/i18next',
        element :  <I18next/>
    },
    {
        path : '/antDesign',
        element :  <AntDesign/>
    },
    {
        path : '/router/:id',
        element :  <RouterV6/>
    },
    {
        path : '/api',
        element :  <Api/>
    },
    {
        path : '/redux',
        element :  <Redux/>
    }

]

export default RouteList;
```
***

#### 3. 라우트 설정

사용자의 브라우저 주소 경로에 따라 우리가 원하는 컴포넌트를 보여주기 위해서 Route 컴포넌트를 통해 라우트 설정을 해주어야 합니다.   
작성한 2.라우터 리스트를 사용하여 Routes 컴포넌트 내부에서 라우트 설정을 해줍니다.

> v5에서는 location이 일치하는 첫 번째 <Route>요소를 렌더링하는 <Switch> 컴포넌트를 제공합니다.   
> 그리고 Route의 'path' prop을 정의할 때 'exact' 속성을 붙여주면 location.pathname이 정확하게 일치하는 경우에만 렌더링이 진행됩니다.   
> v5에서 이러한 기능을 제공하는 것은 <Route>의 순서에 따라 잘못된 컴포넌트들이 렌더링될 수 있는 버그가 발생하는 것을 방지하기 위함이었습니다.
>
> v6에서는 <Switch> 대신 <Routes> 컴포넌트를 제공하여 이 문제를 해결합니다. <Routes> 컴포넌트는 <Route> 순서와 상관없이 경로가 일치하는 컴포넌트를 렌더링합니다. exact의 사용도 필요 없습니다.
>
> 또한 v5에서는 해당 경로에 렌더링할 컴포넌트를 지정하기 위해 component prop, render prop, child 컴포넌트로 지정하는 등의 방식이 존재했지만, v6는 element props로 변경되었습니다.

📂 src/App.js 에서 해당 부분만 발췌

```javascript
import React from 'react';
import {Route, Routes} from "react-router-dom";
import RouteList from "./app/router";

const App = () => {
    return (
        <>
            <Routes>
                {
                    RouteList.map((item, index) => (
                        <Route key={index} {...item} />
                    ))
                }
            </Routes>
        </>
    );
};

export default App;
```
***

#### 4. useNavigate()

v6에서는 리액트 히스토리 변경 훅인 useHistory가 useNavigate라는 훅으로 변경되었습니다.    
사용법은 위와 같이 변경되었습니다. 기존 훅에서는 여러 메소드가 존재했지만 v6에서는 navigate()메소드에 특정 숫자를 넘기면 현재 페이지에서 해당 숫자만큼 히스토리를 이동할 수 있습니다.

```javascript
// v5
const { goBack, go } = useHistory();
<div>
  <button onClick={() => goBack()}>뒤로가기</button>
  <button onClick={() => go(-2)}>뒤로 두번 가기</button>
</div>

// v6
const navigate = useNavigate();
<div>
  <button onClick={() => navigate(-1)}>뒤로가기</button>
  <button onClick={() => navigate(-2)}>뒤로 두번 가기</button>
</div>
```
***

#### 5. 라우팅 사용해보기

아래 로직은 <Link> , useParams 및 useNavigate 사용 예제입니다.

> Link : Link 컴포넌트를 사용하여 다른 페이지로 이동 가능합니다. Link 컴포넌트 역시 a 태그를 사용하긴 하지만, 페이지를 새로 불러오는 것을 막고 History API를 통해 브라우저 주소의 경로만 바꾸는 기능이 내장되어 있습니다.   
>
> useNavigate :  Link 컴포넌트를 사용하지 않고 다른 페이지로 이동을 해야 하는 상황에 사용하는 Hook 입니다.   
> 
> useParams : URL 파라미터는 useParams 라는 Hook을 사용하여 객체 형태로 조회할 수 있습니다.

📂 src/pages/RouterV6.js 에서 해당 부분만 발췌

```javascript
import { useNavigate, useParams } from "react-router";
import {Link} from "react-router-dom";

function RouterV6 () {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <>
            {/*현재 페이지 URL 노출*/}
            <div>Current Page : router/{id}</div>
            <ul>
                <li>
                    <Link to="/">home</Link> {/*Link 사용, 홈 화면 이동*/}
                </li>
                <li>
                    <Link to="/i18next">i18next</Link> {/*Link 사용, 다국어 화면 이동*/}
                </li>
            </ul>
            <div>
                {/*useNavigate 사용, 홈 화면 이동*/}
                <button onClick={() => {navigate("/");}}>
                    Home
                </button>
                {/*다음 페이지 이동, +1*/}
                <button onClick={() => navigate(`/router/${parseInt(id) + 1}`)}>
                    Next Router Page
                </button>
                {/*이전 화면 이동, -1 */}
                <button onClick={() => {navigate(-1);}}>
                    Go Back
                </button>
                {/*이전 화면 이동, -2 */}
                <button onClick={() => {navigate(-2);}}>
                    Go Back Twice
                </button>
            </div>
        </>
    );
}

export default RouterV6;
```
***

#### 6. 실행 화면
