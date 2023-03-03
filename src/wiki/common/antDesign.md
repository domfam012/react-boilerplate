# Ant Design
***

#### 1. Ant Design 설치

```
npm i antd
```
***

#### 2. Ant Design Components 사용하기

[Ant Design Components 바로가기](https://ant.design/components/overview/)

위 페이지 진입 후 프로젝트에서 사용하고자 하는 컴포넌트를 import 해서 적용하면 사용 가능합니다.   
예시로 Carousel를 추가해 보겠습니다.   

📂 src/pages/AntDesign.jsx 에서 해당 부분만 발췌

```javascript
import { Carousel } from 'antd';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function AntDesign() {
    return (
        <>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
            </Carousel>
        </>
    );
}

export default AntDesign;
```
***

#### 3. 실행 화면   
 
   
