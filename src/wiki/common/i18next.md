# I18next
***

#### react-i18next 설치
```
$ npm install react-i18next i18next --save
```
***

#### 언어 설정 파일 생성

translation.XX.json 파일은 다국어 처리를 하기위해, 각 나라별 언어를 설정한 파일 이다.

📂 src > lang > translation.en.json   

> 전환하고자 하는 언어는 동일한 key값을 가져야 한다.

```json
{
  "hello": "Hello !!"
}
```
📂 src > lang > translation.ko.json

```json
{
  "hello": "안녕"
}
```

#### i18n.js 파일 생성 및 옵션 설정

📂 src > lang > i18n.js

> 각 json 파일들은 i18n의 resource로 관리 된다.

```javascript
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import TranslationEn from "./translation.en.json";
import TranslationKo from "./translation.ko.json";

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

#### react-i18next 사용 방법

```javascript
import {useTranslation} from "react-i18next";
import i18next from "../lang/i18n";
import source from "../wiki/common/i18next.md";

function I18next() {
    const {t} = useTranslation();

    const clickHandler = (lang) =>{
        i18next.changeLanguage(lang);
    }

    return (
        <>
            <div>
                <button onClick={()=>clickHandler("ko")}>KO</button>
                <button onClick={()=>clickHandler("en")}>EN</button>
                <p>{t("hello")}</p>
            </div>
        </>
    );
}

export default I18next;
```
***

#### react-i18next 실행 화면 
