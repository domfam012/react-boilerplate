import {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router";
import source from "../wiki/common/router.md";
import Markdown from "../components/Markdown/MarkdownRenderer";
import {Link} from "react-router-dom";

function RouterV6 () {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState("")

    useEffect(()=>{
        fetch(source)
            .then(response => response.text())
            .then(result => setPost(result));
    },[])

    return (
        <>
            <Markdown linkTarget="_blank">{post}</Markdown>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/i18next">i18next</Link>
                </li>
            </ul>
            <div>
                <button
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Home
                </button>
                <button
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    Go Back
                </button>
                <button
                    onClick={() => {
                        navigate(-2);
                    }}
                >
                    Go Back Twice
                </button>
                <div>Current Page : router/{id}</div>
                <button onClick={() => navigate(`/router/${parseInt(id) + 1}`)}>
                    Next Router Page
                </button>
            </div>
        </>

    );
}

export default RouterV6;
