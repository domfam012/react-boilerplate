import React from 'react';
import SiderC from "./components/Sider";
import FooterC from "./components/Footer";
import HeaderC from "./components/Header";
import 'antd/dist/antd.css';
import './index.css';
import { Layout} from 'antd';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import Post from "./pages/Post"
import I18next from "./pages/I18next";

const { Content} = Layout;

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
                                <Route path="/" element={<Home/>} />
                                <Route path="/i18next" element={<I18next/>} />
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
