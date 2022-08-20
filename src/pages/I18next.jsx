import {useTranslation} from "react-i18next";
import i18next from "../lang/i18n";
import {useEffect, useState} from "react";
import source from "../wiki/common/i18next.md";
import Markdown from "../components/Markdown/MarkdownRenderer";
import Dropdown from 'react-bootstrap/Dropdown';

function I18next() {
    const {t, i18n} = useTranslation();

    const clickHandler = (lang) =>{
        i18next.changeLanguage(lang);
    }

    const [post, setPost] = useState("")

    useEffect(()=>{
        fetch(source)
            .then(response => response.text())
            .then(result => setPost(result));
    },[]);

    return (
        <>
            <Markdown linkTarget="_blank">{post}</Markdown>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                   current language : {`${i18n.language.toUpperCase()} `}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>clickHandler("ko")}>KO</Dropdown.Item>
                    <Dropdown.Item onClick={()=>clickHandler("en")}>EN</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <br/>
            <div>
                <p>{t("hello")}</p>
            </div>
        </>
    );
}

export default I18next;
