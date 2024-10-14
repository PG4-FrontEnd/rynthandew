// src/components/Layout.tsx
import React from 'react';
import styled from 'styled-components';
import Header from './navigationBar/Header.tsx';
import Sidebar from './navigationBar/SideBar.tsx';

const MainContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MainContainer>
      <Sidebar />
      <Content>
        <Header />
        {children}
      </Content>
    </MainContainer>
  );
};

export default Layout;
