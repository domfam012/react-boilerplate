# readme
***

#### 마크다운 파일 연동 방법

원하는 md 파일 import 후 fetch 함수를 사용하여 서버에 네트워크 요청을 보내고 정보를 받아온 후 response.text()을 사용하여 응답을 읽고 텍스트를 반환합니다.
해당 텍스트를 Markdown 컴포넌트 안에 props로 넣어 주면 마크다운 파일 연동이 가능합니다.   

마크다운 컴포넌트는 기본 마크다운 렌더링, link/table/checklist 등의 형식을 표현할 수 있도록 해주는 remark-gfm 플러그인 설정, 코드 블록/ 인용문/ H4 스타일 커스텀 모듈입니다.
```javascript
import React, {useEffect, useState} from "react";
import source from "../wiki/common/home.md"; // 원하는 md 파일 import
import Markdown from "../components/Markdown/MarkdownRenderer"; // 마크다운 컴포넌트 import

function Home() {
    const [post, setPost] = useState("")

    useEffect(()=>{
        fetch(source)
            .then(response => response.text()) // 응답을 읽고 텍스트 반환
            .then(result => setPost(result));
    },[])

    return (
        <Markdown linkTarget="_blank">{post}</Markdown> /*마크다운 컴포넌트에 md 파일 텍스트 전달*/
    );
}

export default Home;

```

***

#### 버전 정보

- react : 18.2.0
- redux : 8.0.2
- redux-toolkit : 1.8.3
- react-router : 6.3.0
- axios : 0.27.2
- bootstrap : 5.2.0
- react-bootstrap : 2.5.0
- react-i18next : 11.18.3
- react-markdown : 8.0.3
- react-router-dom : 6.3.0
- antd : 4.22.4

***
