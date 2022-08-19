# API
***

#### 1. axios 설치
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
            timeout: 5000, // 시간이 오래 걸리는 요청에 대한 timeout 값 재정의, 5초
            url: method,
            headers: { "Cache-Control": "no-cache" }, // 자체 캐쉬 처리되어 실제 서버를 호출하지 않는 현상 해결
            ...config // method + params
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

***

#### 4. API 연동 모듈 사용 방법 2

***

#### 5. API 연동 모듈 사용 방법 3

***

#### 6. 실행화면

아래 테이블은 React-Bootstrap의 Table Component를 사용하여 응답 데이터를 표시했으며 콘솔 창에서도 응답 데이터 확인 가능합니다.

> ※ 콘솔 창 확인 시 API 응답 데이터가 두번 찍히는 현상   
>   
> React의 Strict mode는 개발 단계에서 개발자의 코드를 확인하여   
> 사전에 발생할 수 있는 에러를 파악해 예기치 못한 오류를 막기 위해 사용하는데 이를 위해 일부 메소드가 2번씩 호출됩니다.   
>    
> 생명주기 메소드들과 render, constructor, setState등의 메소드가 해당되며 특히 CRA 환경 일 경우 설치 후 기본으로 StrictMode가 적용되어있기 때문에 index.js에서 React.StrictMode라는 컴포넌트가 App을 감싸고 있는지 확인해보아야 합니다.   
>   
> Strict mode는 개발 단계에서만 적용되기 때문에 실제 배포시에는 원래대로 한번만 렌더링이 발생합니다.   
>    
> 따라서 만약 개발 단계에서 초기 렌더링이 중복으로 발생하면 안되는 상황일 경우 임시로 src/index.js에서 <React.StrictMode>를 잠시 주석처리해놓고 진행하면 되겠습니다.

