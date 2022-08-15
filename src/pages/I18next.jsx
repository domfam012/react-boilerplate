
import {useTranslation} from "react-i18next";
import i18next from "../lang/i18n";

function I18next() {
    const {t} = useTranslation();

    const clickHandler = (lang) =>{
        i18next.changeLanguage(lang);
    }

    return (
        <div>
            <button onClick={()=>clickHandler("ko")}>KO</button>
            <button onClick={()=>clickHandler("en")}>EN</button>
            <p>{t("hello")}</p>
        </div>
    );
}

export default I18next;
