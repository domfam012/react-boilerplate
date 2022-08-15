import {useEffect, useState} from "react";
import source from "../wiki/common/api.md";
import Markdown from "../components/Markdown/MarkdownRenderer";
import {exampleApi} from "../api/adaptor.api";

function Api() {
    const [post, setPost] = useState("")

    useEffect(()=>{
        exampleApi({}, (err, res) => {
            console.log(res)
        })
    },[])

    useEffect(()=>{
        fetch(source)
            .then(response => response.text())
            .then(result => setPost(result));
    },[])

    return (
        <>
            <Markdown linkTarget="_blank">{post}</Markdown>
        </>

    );
}

export default Api;
