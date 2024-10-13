import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BulletinIcon from './BulletinIcon.tsx';
import BoardIcon from './BoardIcon.tsx';

const SidebarContainer = styled.div`
  width: 200px;
  background-color: white;
  height: 100vh;
  padding: 20px;
  border-right: 1px solid #d0d0d0;
  margin-top: 80px;
`;

const MenuText = styled.span`
  display: block;
  margin-bottom: 10px;
  font-weight: normal;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  cursor: pointer;
  padding: 10px 0;
  width: 100%;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const IconWrapper = styled.div`
  width: 35px;
  height: 24px;
  margin-right: 10px;
  flex-shrink: 0;
`;

const BoardIconStyled = styled(BoardIcon)`
  width: 100%;
  height: 100%;
`;

const BulletinIconStyled = styled(BulletinIcon)`
  width: 100%;
  height: 100%;
`;

const TextStyled = styled.span`
  margin-left: 10px;
`;

function Sidebar() {
  const navigate = useNavigate();

  const handleBoardClick = () => {
    navigate('/board');
  };

  const handleBulletinClick = () => {
    navigate('/bulletin');
  };

  return (
    <SidebarContainer>
      <MenuText>메뉴</MenuText>
      <SidebarItem onClick={handleBoardClick}>
        <IconWrapper>
          <BoardIconStyled />
        </IconWrapper>
        <TextStyled>보드</TextStyled>
      </SidebarItem>
      <SidebarItem onClick={handleBulletinClick}>
        <IconWrapper>
          <BulletinIconStyled />
        </IconWrapper>
        <TextStyled>게시판</TextStyled>
      </SidebarItem>
    </SidebarContainer>
  );
}

export default Sidebar;
