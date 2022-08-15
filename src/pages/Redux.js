import {useEffect, useState} from "react";
import source from "../wiki/common/redux.md";
import Markdown from "../components/Markdown/MarkdownRenderer";
import {useSelector} from "react-redux";
import {selectList} from "../app/slice";
import Table from "react-bootstrap/Table";

function Redux() {
    const [post, setPost] = useState("")
    const list = useSelector(selectList);

    useEffect(()=>{
        fetch(source)
            .then(response => response.text())
            .then(result => setPost(result));
    },[])

    return (
        <>
            <Markdown linkTarget="_blank">{post}</Markdown>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Color</th>
                    <th>pantone_value</th>
                </tr>
                </thead>
                <tbody>
                {
                    list.map((item, index) => (
                        <tr key={index}>
                            <td>{index}</td>
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

export default Redux;
