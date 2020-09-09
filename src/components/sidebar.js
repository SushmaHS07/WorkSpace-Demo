import React from 'react';
import { Menu, Layout } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import '../css/sidebar.css';

const { SubMenu } = Menu;
const { Sider } = Layout;
const Sidebar = () => {
    return (
        <Sider className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-header-style">Workspaces</div>
                <span>
                    <i class="material-icons icon-grey">search</i>
                    <input type="text" name="filterboard" placeholder="Filter boards..." className="filterboard-input"/>
                </span>
            </div>
        <Menu
        mode="inline"   
        >
            <SubMenu
            key="sub1"
            title={
                <span>
                <HomeOutlined className="home-icon" />
                <span className="Menu-title">Menu</span>
                </span>
            }
            >
            <Menu.Item key="1">Web design</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            </SubMenu>
        </Menu>
        </Sider>
    );
}

export default Sidebar;

// <div className="sidebar">
            // <div className="sidebar-header">
            //     <div className="sidebar-header-style">Workspaces</div>
            //     <span>
            //         <i class="material-icons icon-grey">search</i>
            //         <input type="text" name="filterboard" placeholder="Filter boards..." className="filterboard-input"/>
            //     </span>
            // </div>
        //     <div className="sidebar-menu">

        //     </div>
        //     <div className="sidebar-footer">
        //         <div className="sidebar-footer-opt">
        //             Dashboards
        //         </div>
        //         <div className="sidebar-footer-opt sidebar-footer-opt2">
        //             <button className="get-mobile-app-btn">
        //                 Get the mobile app
        //             </button>
        //         </div>
        //     </div>
        // </div>