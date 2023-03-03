import React, {useState}from "react";
import {Link} from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
    HomeOutlined,
    DatabaseOutlined,
    InboxOutlined,
    SketchOutlined,
    TranslationOutlined,
    WifiOutlined
} from '@ant-design/icons';

const menuItems = [];
const { Sider } = Layout;

const items = [
    {name : "Home", path : "/", icon : <HomeOutlined/>},
    {name : "I18next", path : "/i18next", icon : <TranslationOutlined/>},
    {name : "RouterV6", path : "/router/1", icon: <WifiOutlined/>},
    {name : "API", path : "/api", icon : <DatabaseOutlined/>},
    {name : "Redux", path : "/redux", icon : <InboxOutlined/>},
    {name : "AntDesign", path : "/antDesign", icon: <SketchOutlined/>},
]

items.forEach((item, index)=>{
    menuItems.push({
        label : <Link to={item.path}>{item.name}</Link>,
        key : index,
        icon : item.icon
    })
})

function SiderC(props) {
    return (
        <Sider>
            <div>
                <img
                    src={"data:image/png;base64,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"}
                    style={{width: 200}}
                    alt=""
                />
            </div>


            <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" items={menuItems}/>
        </Sider>
    );
}

export default SiderC;
