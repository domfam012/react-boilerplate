# Redux
***

#### 1. Redux Toolkit 설치
```
npm i @reduxjs/toolkit react-redux
```
***

#### 2. createSlice() 작성 

createSlice는 하나의 slice 객체를 인자로 받으며 slice 객체는 {name, initialState, reducers, extraReducers}로 구성되어 있습니다.

name: string을 넣어서 prefix로 사용

initialState: defaultState가 들어감, (변수를 initialState로 지정하면, 단축으로 작성할 수 있음)

reducers: slice 안에서 사용할 reducer 들을 만들 수 있음, 해당 reducer들을 만들면 자동으로 slice.action에 reducers에서 만든 reducer에 대한 actionCreator 함수가 들어 있음

> reducer를 작성 시 처리하는 방식은 2가지가 있다. (해당 프로젝트에서는 방법 1 사용)
> 
> 방법 1(함수, 직접 할당 방식): 직접 값을 변경하는 방식으로 기존 값에 변경을 주는 함수를 사용하거나, 할당을 이용 js에서 사용하는 기존 값에 변경을 가하는 Array 함수 등인 push 등이 있겠다.   
> 초기 자료구조가 어떻게 되어 있는지에 따라 변수에 사용할 수 있는 함수는 달라지며
> 주의할 점은, 집어넣는 값과 기존의 자료구조가 어떻게 되어 있는지 조심해야 합니다.
> (payload 자체로 보내기 때문에 reducer에서 값을 어떻게 받게 할 것인지 조심해야 함)
> 
> 방법 2(복사 return 방식): 기존에 사용하던 방식으로, return을 주어 기존의 state는 복사하여 가져오고 변경된 값만 덮어 씌우는 형식으로 지정
> 일단, state 전체를 바꾸는 거라서 오히려 전체 구조를 그리면서 할 수 있어서 어떻게 들어가는지 함수 고려를 하지 않아도 됨

extraReducers: slice에서 만들어진 reducers에 의한 action, reducer가 아닌 외부에서 만들어진 action을 통해 현재 slice에서 사용하는 initialState에 변경을 가하는 경우 처리 받는 reducer임 (비동기 함수 처리 등에 사용됨)

📂 src/app/slice.js

```javascript
import { createSlice} from "@reduxjs/toolkit";

const exampleSlice = createSlice({
    name: "exampleInfo",
    initialState: {
        list : []
    },
    reducers: {
        setList: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const {setList} = exampleSlice.actions;

export const selectList = state => state.exampleInfo.list;

export {exampleSlice};
```
***

#### 3. configureStore() 작성

reducer 속성을 넣고 작성한 리듀서 함수를 넣어주면 됩니다. (기존의 createStore를 대체해서 configureStore() 사용하면, Thunk, dev tool까지 자동으로 연결해 줍니다.)  

📂 src/app/store.js

```javascript
import { configureStore } from "@reduxjs/toolkit";

import {exampleSlice} from "./slice";

const store = configureStore({
    reducer:{
        exampleInfo : exampleSlice.reducer
    }
});

export default store;
```
***

#### 4. index.js 설정

Provider는 react-redux 라이브러리에 내장되어 있는, 리액트 앱에 store를 손쉽게 연동할 수 있도록 도와주는 컴포넌트입니다.   
이 컴포넌트를 불러온 다음에, 연동할 컴포넌트를 감싸준 다음에 Provider 컴포넌트의 props로 store 값을 설정해 주면 됩니다.

📂 src/index.js 에서 해당 부분만 발췌

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
```
***

#### 5. useDispatch, useSelector 사용하기

useSelector Hook을 사용하면 connect 함수를 사용하지 않고도 리덕스의 상태를 조회할 수 있다.   
useDispatch Hook은 컴포넌트 내부에서 스토어의 내장함수 dispatch를 사용할 수 있게 도와준다.

📂 src/pages/Redux.jsx 에서 해당 부분만 발췌

```javascript
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectList, setList} from "../app/slice";
import Table from "react-bootstrap/Table";
import {exampleApi} from "../api/adaptor.api";

function Redux() {
    const dispatch = useDispatch()
    const list = useSelector(selectList); // 리덕스에 저장된 API 응답 데이터 불러오기

    useEffect(()=>{
        exampleApi({}, (err, res) => {
            dispatch(setList(res)) // API 응답 데이터 dispatch를 이용하여 액션 실행 시키기
        })
    },[dispatch]);

    return (
        <>
            <Table striped hover size="sm" style={{width : "600px", fontSize : "11px", textAlign: "center"}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>pantone_value</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td>{item.year}</td>
                                <td>{item.color}</td>
                                <td>{item.pantone_value}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>

    );
}

export default Redux;
```
***

#### 6. 실행 화면

아래 테이블은 React-Bootstrap의 Table Component를 사용하여 리덕스에 저장된 데이터를 표시했습니다.
