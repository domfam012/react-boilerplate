import React from 'react';
import SiderC from "./components/Sider";
import FooterC from "./components/Footer";
import HeaderC from "./components/Header";
import 'antd/dist/antd.css';
import './index.css';
import { Layout} from 'antd';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import BootStrap from "./pages/BootStrap";
import I18next from "./pages/I18next";
import RouterV6 from "./pages/RouterV6"
import Api from "./pages/API"
import Redux from "./pages/Redux";

const { Content} = Layout;

const App = () => {
    return (
        <>
            <Layout style={{minHeight: '100vh'}}>
                <SiderC/>
                <Layout className="site-layout">
                    {/*<HeaderC/>*/}
                    <Content style={{margin: '16px 16px',}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360,}}>
                            <Routes>
                                <Route path="/" element={<Home/>} />
                                <Route path="/i18next" element={<I18next/>} />
                                <Route path="/bootStrap" element={<BootStrap/>}/>
                                <Route path="/router/:id" element={<RouterV6/>}/>
                                <Route path="/api" element={<Api/>}/>
                                <Route path="/redux" element={<Redux/>}/>
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
