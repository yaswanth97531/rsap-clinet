import React from 'react';
import { Layout, Icon } from 'antd';

const { Header } = Layout;

const HeaderNav = () => {
  return(
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%'}}>Header</Header>
  </Layout>
  );
  
}

export default HeaderNav;