import {useEffect} from "react";
import { Link } from "react-router-dom";
import {exampleApi} from "../api/adaptor.api"
import {useTranslation} from "react-i18next";
import i18next from "../lang/i18n";
import {useSelector} from "react-redux";
import {selectList} from "../app/slice"
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
    const {t} = useTranslation();

    const clickHandler = (lang) =>{
        i18next.changeLanguage(lang);
    }

    const list = useSelector(selectList);

    useEffect(()=>{
        exampleApi({}, (err, res) => {
            console.log(res)
        })
    },[])

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/posts/1">Post</Link>
                </li>
            </ul>
            <div>
                <button onClick={()=>clickHandler("ko")}>KO</button>
                <button onClick={()=>clickHandler("en")}>EN</button>
                <p>{t("hello")}</p>
            </div>

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
                        <tr>
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

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://placeimg.com/640/480/tech"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://placeimg.com/640/480/tech?t=1660197829623"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://placeimg.com/640/480/tech?t=1660197843372"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Home;
