import React from 'react';
import styled from 'styled-components';
import Header from './navigationBar/Header.tsx';
import SideBar from './navigationBar/SideBar.tsx';

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const MainContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LayoutContainer>
      <SideBar />
      <MainContentWrapper>
        <Header />
        <MainContent>{children}</MainContent>
      </MainContentWrapper>
    </LayoutContainer>
  );
};

export default Layout;
