# Bootstrap
***

#### 1. react-bootstrap 설치

```
npm install react-bootstrap bootstrap
```
***

#### 2. Bootstrap CSS 적용

최상단의 루트 파일인 src/index.js 상단에 Bootstrap CSS 스타일 시트를 import 합니다.

📂 src/index.js

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```
***

#### 3. react-bootstrap 사용하기

[React-Bootstrap Components 바로가기](https://react-bootstrap.github.io/components/alerts/)

위 페이지 진입 후 프로젝트에서 사용하고자 하는 컴포넌트를 import 해서 적용하면 사용 가능합니다.   
예시로 Carousel를 추가해 보겠습니다.   

📂 src/pages/Bootstrap.jsx 에서 해당 부분만 발췌

```javascript
import Carousel from "react-bootstrap/Carousel";

function Bootstrap() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://placeimg.com/640/480/tech"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://placeimg.com/640/480/tech?t=1660197829623"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://placeimg.com/640/480/tech?t=1660197843372"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Bootstrap;
```
***

#### 4. 실행 화면   
 
   
