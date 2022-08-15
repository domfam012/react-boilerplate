import React, {useState} from "react";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import { Layout, Menu } from 'antd';
import {Link} from "react-router-dom";

const { Sider } = Layout;

const menuItem = [
    {name : "Home", path : "/"},
    {name : "i18next", path : "/i18next"},
    {name : "router", path : "/posts/2"},
    {name : "redux-toolkit", path : "/posts/3"},
    {name : "bootStrap", path : "/posts/4"},
]

function SiderC(props) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo"
                 style={{
                     backgroundImage : "http://www.domfam.com/domfam_homepage_v2019/dist/img/company/logo_sm.jpg"
                 }}/>
            <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
                {
                    menuItem.map((item, index) =>(
                        <Menu.Item key ={index}>
                            <Link to ={item.path}> {item.name}</Link>
                        </Menu.Item>
                    ))
                }
            </Menu>
        </Sider>
    );
}

export default SiderC;
