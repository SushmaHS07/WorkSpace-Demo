import React from 'react';
import { Layout } from 'antd';
import { PageHeader, Button, Descriptions } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined, TableOutlined ,VideoCameraOutlined } from '@ant-design/icons';
import '../css/header.css';

const { Header } = Layout;

const WorkSpaceHeader = (props) => {
    const menu = (
        <Menu className="dropdown-item">
          <Menu.Item>
              1st menu item
          </Menu.Item>
          <Menu.Item>
              2nd menu item
          </Menu.Item>
          <Menu.Item>
              3rd menu item
          </Menu.Item>
        </Menu>
      );

    return (
        <Header className="header">
        <PageHeader
        ghost={false}
        title="Web Design"
        subTitle="Add board description"
        extra={[
            <Button key="3" className="btn">Start Zoom Call <VideoCameraOutlined /></Button>,
            <Button key="2">Activities</Button>,
            <Button key="1" className="btn3">
                ...
            </Button>
        ]}
        >
            <Descriptions size="small" column={3}>
                <Descriptions.Item>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <TableOutlined /> Main Table <DownOutlined />
                        </a>
                    </Dropdown>
                </Descriptions.Item>
            </Descriptions>
        </PageHeader>
    </Header>
    );
}

export default WorkSpaceHeader;