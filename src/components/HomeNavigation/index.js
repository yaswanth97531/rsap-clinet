import React, {Component} from 'react';
import { Layout, Menu, Icon, Tabs } from 'antd';

import './Navigation.css';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

class Nav extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          breakpoint = 'md'
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header>
            <Menu
              className="user-menu"
              theme="dark"
              mode="horizontal"
              style={{ lineHeight: '63px' }}
            >
              <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
              className='user-submenu'
              style={{ float: 'right'}}
            >
              <Menu.Item key="4"><span><Icon type='setting' /></span>Settings</Menu.Item>
              <Menu.Item key="5"><span><Icon type='logout' /></span>Logout</Menu.Item>
            </SubMenu>
            </Menu>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Tabs>
              <TabPane tab={
                <span><Icon type="code" />Code Management</span>} key="1">
                Code Management
              </TabPane>
              <TabPane tab={<span><Icon type="sync" />Continuous Integration</span>} key="2">
                Continuous Integration
              </TabPane>
              <TabPane tab={<span><Icon type="cloud" />SAP Deployment</span>} key="3">
                SAP Deployment
              </TabPane>
              <TabPane tab={<span><Icon type="user" />User Management</span>} key="4">
                User Management
              </TabPane>
            </Tabs>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            R-SAP ©2018 Created by RSRIT
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Nav;