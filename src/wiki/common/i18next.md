# i18next
***

#### 1. react-i18next 설치

```
npm i react-i18next i18next --save
```
***

#### 2. 언어 설정 파일 생성

translation.XX.json 파일은 다국어 처리를 하기 위해, 각 나라별 언어를 설정한 파일이며 전환하고자 하는 언어는 동일한 key 값을 가져야 합니다.

📂 src/lang/translation.en.json

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

import TranslationEn from "./resources/translation.en.json";
import TranslationKo from "./resources/translation.ko.json";

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
    // useTranslation 내부의 hook을 사용 하여 번역 기능 제공, i18n 인스턴트 제공
    const {t, i18n} = useTranslation(); 

    const clickHandler = (lang) =>{
        i18next.changeLanguage(lang); // 언어 변환 함수
    }

    const items = [
        {
            label: 'KO',
            key: 'ko',
        },
        {
            label: 'EN',
            key: 'en',
        }
    ];

    const onClick = ({ key }) => {
        clickHandler(key);
    };
    
    return (
        <>
            <Dropdown
                menu={{
                    items,
                    onClick
                }}
                placement="top"
            >
                <a style={{borderRadius : 6, backgroundColor : '#1677ff', color : '#fff', width : 230, fontSize : 18, textAlign : 'center', padding : 10}} onClick={(e) => e.preventDefault()}>
                    current language : {`${i18n.language.toUpperCase()} `}
                </a>
            </Dropdown>
            <br/>
            <br/>
            <div>
                {/*언어 설정 파일에 지정된 언어 리소스 key를 입력하면 해당 언어값 출력*/}
                <p>{t("hello")}</p>
            </div>
        </>
    );
}

export default I18next;
```
***

#### 5. 실행 화면
