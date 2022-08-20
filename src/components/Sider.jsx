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
    {name : "Bootstrap", path : "/bootstrap", icon: <SketchOutlined/>},
]

items.forEach((item, index)=>{
    menuItems.push({
        label : <Link to={item.path}>{item.name}</Link>,
        key : index,
        icon : item.icon
    })
})

function SiderC(props) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>*/
            <div className="logo"
                 style={{
                     backgroundImage: `url(https://i.imgur.com/LU2cHKS.png)`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center center',
                 }}/>
            <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" items={menuItems}/>
        </Sider>
    );
}

export default SiderC;
