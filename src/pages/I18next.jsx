import {useTranslation} from "react-i18next";
import i18next from "../lang/i18n";
import {useEffect, useState} from "react";
import source from "../wiki/common/i18next.md";
import Markdown from "../components/markdown/MarkdownRenderer";
import {Dropdown} from "antd"

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
            <Markdown linkTarget="_blank">{post}</Markdown>
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
                <p>{t("hello")}</p>
            </div>
        </>
    );
}

export default I18next;
