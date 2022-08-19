import React, {useState} from "react";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import { Layout, Menu } from 'antd';
import {Link} from "react-router-dom";

const { Sider } = Layout;

const menuItem = [
    {name : "Home", path : "/"},
    {name : "I18next", path : "/i18next"},
    {name : "RouterV6", path : "/router/1"},
    {name : "API", path : "/api"},
    {name : "Redux", path : "/redux"},
    {name : "Bootstrap", path : "/bootstrap"},
]

function SiderC(props) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        /*<Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>*/
        <Sider>
            <div className="logo"
                 style={{
                     backgroundImage: "url(" + "https://i.imgur.com/VLYn2Cm.png" + ")",
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center center',
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
