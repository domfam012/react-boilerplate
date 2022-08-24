import React, {useEffect, useState} from "react";
import source from "../wiki/common/home.md";
import Markdown from "../components/markdown/MarkdownRenderer";

function Home() {
    const [post, setPost] = useState("")

    useEffect(()=>{
        fetch(source)
            .then(response => response.text())
            .then(result => setPost(result));
    },[])

    return (
        <Markdown linkTarget="_blank">{post}</Markdown>
    );
}

export default Home;
