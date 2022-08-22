import {useEffect, useState} from "react";
import source from "../wiki/common/redux.md";
import Markdown from "../components/Markdown/MarkdownRenderer";
import {useSelector, useDispatch} from "react-redux";
import {selectList, setList} from "../app/slice";
import Table from "react-bootstrap/Table";
import {exampleApi} from "../api/adaptor.api";

function Redux() {
    const dispatch = useDispatch()
    const [post, setPost] = useState("")
    const list = useSelector(selectList);

    useEffect(()=>{
        exampleApi({}, (err, res) => {
            dispatch(setList(res))
        })
    },[]);

    useEffect(()=>{
        fetch(source)
            .then(response => response.text())
            .then(result => setPost(result));
    },[])

    return (
        <>
            <Markdown linkTarget="_blank">{post}</Markdown>
            <Table striped hover size="sm" style={{width : "600px", fontSize : "11px", textAlign: "center"}}>
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
