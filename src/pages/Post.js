import { useNavigate, useParams } from "react-router";
import {selectList} from "../app/slice"
import {useSelector} from "react-redux";

function Post() {
    const { id } = useParams();
    const navigate = useNavigate();

    const list = useSelector(selectList);

    return (
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
            <div>Post {id}</div>
            <button onClick={() => navigate(`/posts/${parseInt(id) + 1}`)}>
                Next Post
            </button>

            {
                list.map((item, index) => (
                    <li>{item.name}</li>
                ))
            }
        </div>
    );
}

export default Post;
