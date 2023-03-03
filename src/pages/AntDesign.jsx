import {useEffect, useState} from "react";
import source from "../wiki/common/antDesign.md";
import Markdown from "../components/markdown/MarkdownRenderer";
import { Carousel } from 'antd';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function AntDesign() {
    const [post, setPost] = useState("")

    useEffect(()=>{
        fetch(source)
            .then(response => response.text())
            .then(result => setPost(result));
    },[]);

    return (
        <>
            <Markdown linkTarget="_blank">{post}</Markdown>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
            </Carousel>
        </>
    );
}

export default AntDesign;
