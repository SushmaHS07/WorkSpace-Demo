import React from 'react';
import { Layout } from 'antd';
import Toolbar from './components/toolbar';
import Sidebar from './components/sidebar';
import WorkspaceHeader from './components/header';
import Container from './components/content';

const App = () => {
  return (
    <Layout>
      <Toolbar />
      <Sidebar />
      <Layout>
        <WorkspaceHeader />
        <Container />
      </Layout>
    </Layout>
  );
}

export default App;
