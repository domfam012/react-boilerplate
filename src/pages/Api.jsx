import React, {useEffect, useState} from "react";
import source from "../wiki/common/api.md";
import Markdown from "../components/Markdown/MarkdownRenderer";
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
            <Markdown linkTarget="_blank">{post}</Markdown>
            <Table striped bordered hover>
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
