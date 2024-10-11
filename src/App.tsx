import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header.tsx'; // .tsx 확장자 추가
import Sidebar from './components/Sidebar.tsx'; // .tsx 확장자 추가
import Board from './components/Board.tsx'; // .tsx 확장자 추가
import BulletinBoard from './components/BulletinBoard.tsx'; // .tsx 확장자 추가


const MainContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  padding: 20px;
  flex: 1;
`;

function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Sidebar />
        <Content>
          <Header />
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="/bulletin" element={<BulletinBoard />} />
            {/* 다른 경로 추가 가능 */}
          </Routes>
        </Content>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
