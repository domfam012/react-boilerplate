# i18next
***

#### 1. react-i18next 설치

```
npm install react-i18next i18next --save
```
***

#### 2. 언어 설정 파일 생성

translation.XX.json 파일은 다국어 처리를 하기위해, 각 나라별 언어를 설정한 파일 이며 전환하고자 하는 언어는 동일한 key값을 가져야 합니다.

 src/lang/translation.en.json

```json
{
  "hello": "Hello !!"
}
```
📂 src/lang/translation.ko.json

```json
{
  "hello": "안녕"
}
```
*** 

#### 3. i18n.js 파일 생성 및 옵션 설정

📂 src/lang/i18n.js

```javascript
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import TranslationEn from "./translation.en.json";
import TranslationKo from "./translation.ko.json";

// 각 json 파일들은 i18n의 resource로 관리 된다.
const resource = {
    en: {translations: TranslationEn},
    ko: {translations: TranslationKo}
} 

i18n
    .use(initReactI18next) 
    .init({
        resources:resource,
        lng: "ko",  // 디폴트 언어 설정
    })

export default i18n;
```
***

#### 4. react-i18next 사용하기

📂 src/pages/I18next.jsx 에서 해당 부분만 발췌

```javascript
import {useTranslation} from "react-i18next";
import i18next from "../lang/i18n";

function I18next() {
    const {t} = useTranslation(); // useTranslation 내부의 hook을 사용 하여 번역 기능 제공

    const clickHandler = (lang) =>{
        i18next.changeLanguage(lang); // 언어 변환 함수
    }

    return (
        <>
            <div>
                <button onClick={()=>clickHandler("ko")}>KO</button>
                <button onClick={()=>clickHandler("en")}>EN</button>
                <p>{t("hello")}</p> {/*언어 설정 파일에 지정된 언어 리소스 key를 입력하면 해당 언어값 출력*/}
            </div>
        </>
    );
}

export default I18next;
```
***

#### 5. 실행 화면
