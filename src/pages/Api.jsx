import React, {useEffect, useState} from "react";
import source from "../wiki/common/api.md";
import Markdown from "../components/markdown/MarkdownRenderer";
import {exampleApi} from "../api/adaptor.api";

function Api() {
    const [post, setPost] = useState("")
    const [apiData, setApiData] = useState([]);

    useEffect(()=>{
        exampleApi({}, (err, res) => setApiData(res))
    },[]);

    useEffect(()=>{
        fetch(source)
            .then(response => response.text())
            .then(result => setPost(result));
    },[])

    return (
        <>
            <Markdown>{post}</Markdown>
            <div style={{display : "flex"}}>
                {
                    apiData?.map((item, index) =>(
                        <div style={{fontSize : 10, marginRight : 20}} key={index}>
                            <p>ID : {item.id}</p>
                            <p>Name : {item.name}</p>
                            <p>Year : {item.year}</p>
                            <p>Color : {item.color}</p>
                            <p>Pantone Value : {item.pantone_value}</p>
                        </div>
                    ))
                }
            </div>
       </>
    );
}

export default Api;
