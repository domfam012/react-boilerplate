import {useTranslation} from "react-i18next";
import i18next from "../lang/i18n";
import {useEffect, useState} from "react";
import source from "../wiki/common/i18next.md";
import Markdown from "../components/Markdown/MarkdownRenderer";

function I18next() {
    const {t} = useTranslation();

    const clickHandler = (lang) =>{
        i18next.changeLanguage(lang);
    }
    const [post, setPost] = useState("")

    useEffect(()=>{
        fetch(source)
            .then(response => response.text())
            .then(result => setPost(result));
    },[])
    return (
        <>
            <Markdown linkTarget="_blank">{post}</Markdown>
            <div>
                <button onClick={()=>clickHandler("ko")}>KO</button>
                <button onClick={()=>clickHandler("en")}>EN</button>
                <p>{t("hello")}</p>
            </div>
        </>
    );
}

export default I18next;
