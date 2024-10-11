// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'; // styled-components import를 가장 위로 이동

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Board from './components/Board';
import BulletinBoard from './components/BulletinBoard';

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
          </Routes>
        </Content>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
