import React from 'react';
import {Breadcrumb, Layout} from "antd";

const { Header } = Layout;

function HeaderC(props) {
    return (
        <Header
            className="site-layout-background"
            style={{
                padding: 0,
            }}
        >
            <Breadcrumb
                style={{
                    margin: '20px 16px',
                }}
            >
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
        </Header>
    );
}

export default HeaderC;
