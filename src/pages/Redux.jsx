import React, {useEffect, useState} from "react";
import source from "../wiki/common/redux.md";
import Markdown from "../components/markdown/MarkdownRenderer";
import {useSelector, useDispatch} from "react-redux";
import {selectList, setList} from "../app/slice";
import {exampleApi} from "../api/adaptor.api";

function Redux() {
    const dispatch = useDispatch()
    const [post, setPost] = useState("");
    const list = useSelector(selectList);

    useEffect(()=>{
        exampleApi({}, (err, res) => {
            dispatch(setList(res))
        })
    },[dispatch]);

    useEffect(()=>{
        fetch(source)
            .then(response => response.text())
            .then(result => setPost(result));
    },[])

    return (
        <>
            <Markdown linkTarget="_blank">{post}</Markdown>
            <div style={{display : "flex"}}>
                {
                    list?.map((item, index) =>(
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

export default Redux;
