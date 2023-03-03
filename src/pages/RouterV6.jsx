import {useNavigate, useParams } from "react-router";
import {Link} from "react-router-dom";
import { Button } from 'antd';

function RouterV6 () {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <div style={{marginBottom : 50}}>
                <h1>RouterV6</h1>
            </div>
            <div>현재 페이지 URL 파라미터 : router/{id}</div>
            <br/>
            <div> Link 사용 예제 </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/i18next">I18next</Link>
                </li>
            </ul>
            <div style={{paddingBottom : "10px"}}>useNavigate 및 useParams 사용 예제 :</div>
            <div>
                <Button onClick={() => {navigate("/");}} type="primary">Home</Button>{' '}
                <Button onClick={() => navigate(`/router/${parseInt(id) + 1}`)} type="primary">Next Router Page</Button>{' '}
                <Button onClick={() => {navigate(-1);}} type="primary">Go Back</Button>{' '}
                <Button onClick={() => {navigate(-2);}} type="primary">Go Back Twice</Button>{' '}
            </div>
        </>

    );
}

export default RouterV6;
