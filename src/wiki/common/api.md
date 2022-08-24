# API
***

#### 1. Axios 설치
```
npm i axios
```
***

#### 2. API 연동 모듈 개발

📂 src/api/api.js 에서 해당 부분만 발췌

```javascript
import axios from "axios";

export default class Api {
    constructor() {
    }

    request(method, config) {
        return axios({
            timeout: 5000, // 요청 timeout이 발동되기 전 milliseconds의 시간을 요청. timeout 보다 요청이 길어진다면, 요청은 취소됨
            url: method,
            headers: { "Cache-Control": "no-cache" }, // 자체 캐시 처리되어 실제 서버를 호출하지 않는 현상 해결
            ...config // method + params or data
        })
            .then(result => {
                console.log("API 호출 성공")
                console.log(result.data)
                return result.data
            })
            .catch(error => {
                console.log("API 호출 실패")
                console.log(error)
            });
    }
}
```
***

#### 3. API 연동 모듈 사용 방법 1

함수 생성 후 API 연동 모듈 함수 연동합니다.   
예제에서 사용된 요청 방식은 GET 방식으로 params를 사용하였지만 요청 방식이 'PUT', 'POST', 'PATCH' 해당하는 경우 data를 사용합니다.


📂 src/api/api.js 에서 해당 부분만 발췌

```javascript
export default class Api {
    request(method, config) {} // 2. API 연동 모듈 개발 소스

    exampleApi = () => {
        return this.request(
            "https://reqres.in/api/products", // URL 작성
            {
                method: "GET", // 요청 방식
                params: {} // URL 파라미터 (?key=value 로 요청하는 url get방식을 객체로 표현한 것)
            })
    }
}
```
***

#### 4. API 연동 모듈 사용 방법 2

API 연동 모듈 사용 방법 1에서 생성한 함수를 호출하는 함수를 생성합니다.   
callback 함수는 해당 함수를 호출한 화면단으로 데이터를 전송하는 경우 작성, 필요하지 않은 경우 생략 가능합니다.   
필요하지 않은 경우를 예로 들면 adaptor.api.js에서 응답 데이터를 store에 저장 후 해당 함수를 호출한 화면에서 store에 저장된 데이터를 사용하는 경우 등이 있습니다.

📂 src/api/adaptor.api.js 에서 해당 부분만 발췌

```javascript
import Api from "../api/api";

const api = new Api();

export const exampleApi = (params, callback) => {
    return api.exampleApi(params).then(data => {
        callback("", data.data); //화면단으로 데이터 전송 필요시에만 작성
    })
};
```

***

#### 5. API 연동 모듈 사용 방법 3

📂 src/pages/Api.js 에서 해당 부분만 발췌

```javascript
import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import {exampleApi} from "../api/adaptor.api"; // API 연동 모듈 사용 방법 2에서 생성한 함수 import

function Api() {
    const [apiData, setApiData] = useState([])

    useEffect(()=>{
        exampleApi({}, (err, res) => setApiData(res)) // import한 exampleApi 함수 사용 방법
    },[]);

    return (
        <>
            {/*API 응답 데이터를 보여주기 위한 로직*/}
            <Table striped bordered hover> 
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>PantoneValue</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apiData?.map((item, index) =>(
                            <tr key={index}>
                                <td>{item.id}</td>
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

export default Api;
```
***

#### 6. 실행 화면

아래 테이블은 React-Bootstrap의 Table Component를 사용하여 응답 데이터를 표시했으며 콘솔 창에서도 응답 데이터 확인 가능합니다.

> ※ 콘솔 창 확인 시 API 응답 데이터가 두 번 찍히는 현상   
>
> React의 Strict mode는 개발 단계에서 개발자의 코드를 확인하여 사전에 발생할 수 있는 에러를 파악해 예기치 못한 오류를 막기 위해 사용하는 데 이를 위해 일부 메서드가 2번씩 호출됩니다.    
> 생명주기 메서드들과 render, constructor, setState 등의 메서드가 해당되며 특히 CRA 환경일 경우 설치 후 기본으로 StrictMode가 적용되어 있기 때문에 index.js에서 React.StrictMode라는 컴포넌트가 App을 감싸고 있는지 확인해 보아야 합니다.    
> Strict mode는 개발 단계에서만 적용되기 때문에 실제 배포 시에는 원래대로 한 번만 렌더링이 발생합니다.   
> 따라서 만약 개발 단계에서 초기 렌더링이 중복으로 발생하면 안 되는 상황일 경우 임시로 src/index.js에서 <React.StrictMode>를 잠시 주석 처리해 놓고 진행하면 되겠습니다.
