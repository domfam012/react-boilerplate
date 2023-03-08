import React from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import './index.css';

import {Route, Routes} from "react-router-dom";
import RouteList from "./app/router";

const App = () => {
    return (
        <>
            <Header/>
            <div >
                <Routes>
                    {
                        RouteList.map((item, index) => (
                            <Route key={index} {...item} />
                        ))
                    }
                </Routes>
            </div>
            <Footer/>
        </>
    );
};

export default App;
