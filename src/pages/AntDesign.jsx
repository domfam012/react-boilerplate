import { Carousel } from 'antd';
import React from "react";

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function AntDesign() {
    return (
        <>
            <div style={{marginBottom : 50}}>
                <h1>AntDesign</h1>
            </div>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
            </Carousel>
        </>
    );
}

export default AntDesign;
