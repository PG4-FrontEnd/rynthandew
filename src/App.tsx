import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/navigationBar/Header.tsx';
import Sidebar from './components/navigationBar/Sidebar.tsx';
import Board from './components/navigationBar/Board.tsx';
import BulletinBoard from './components/navigationBar/BulletinBoard.tsx';
import Modal from './components/Backdrop/Modal.tsx';
import Button from './components/button/Button.tsx'; // 공용 버튼 컴포넌트 가져오기

const MainContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column; // 세로 방향으로 배치
  justify-content: space-between; // 아이템 사이에 공간을 배분
`;

const ButtonContainer = styled.div`
  position: relative; // 부모 요소를 기준으로 절대 위치 지정
`;

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BrowserRouter>
      <MainContainer>
        <Sidebar />
        <Content>
          <Header />
          <ButtonContainer>
            <Button onClick={openModal}>버튼</Button> {/* 공용 버튼 사용 */}
          </ButtonContainer>
          {isModalOpen && <Modal onClose={closeModal} />} {/* 모달 */}
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="/bulletin" element={<BulletinBoard />} />
          </Routes>
        </Content>
      </MainContainer>
    </BrowserRouter>
  );
};

export default App;
