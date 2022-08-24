import React, {useEffect, useState} from "react";
import source from "../wiki/common/api.md";
import Markdown from "../components/markdown/MarkdownRenderer";
import Table from 'react-bootstrap/Table';
import {exampleApi} from "../api/adaptor.api";

function Api() {
    const [post, setPost] = useState("")
    const [apiData, setApiData] = useState([])

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
            <Table striped hover size="sm" style={{width : "600px", fontSize : "11px", textAlign: "center"}}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Color</th>
                    <th>PantoneValue</th>
                </tr>
                </thead>
                <tbody>
                {
                    apiData?.map((item, index) =>(
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.year}</td>
                            <td>{item.color}</td>
                            <td>{item.pantone_value}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
       </>
    );
}

export default Api;
