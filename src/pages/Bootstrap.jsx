import {useEffect, useState} from "react";
import source from "../wiki/common/bootstrap.md";
import Markdown from "../components/Markdown/MarkdownRenderer";
import Carousel from "react-bootstrap/Carousel";

function Bootstrap() {
    const [post, setPost] = useState("")

    useEffect(()=>{
        fetch(source)
            .then(response => response.text())
            .then(result => setPost(result));
    },[]);

    return (
        <>
            <Markdown linkTarget="_blank">{post}</Markdown>
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
        </>
    );
}

export default Bootstrap;
