import React from 'react';
import SiderC from "./components/Sider";
import FooterC from "./components/Footer";
import HeaderC from "./components/Header";
import 'antd/dist/antd.css';
import './index.css';
import { Layout} from 'antd';
import {Route, Routes} from "react-router-dom";
import RouteList from "./app/router";


const {Content} = Layout;

const App = () => {
    return (
        <>
            <Layout style={{minHeight: '100vh'}}>
                <SiderC/>
                <Layout className="site-layout">
                    <HeaderC/>
                    <Content style={{margin: '16px 16px',}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360,}}>
                            <Routes>
                                {
                                    RouteList.map((item, index) => (
                                        <Route key={index} {...item} />
                                    ))
                                }
                            </Routes>
                        </div>
                    </Content>
                    <FooterC/>
                </Layout>
            </Layout>

        </>


    );
};

export default App;
