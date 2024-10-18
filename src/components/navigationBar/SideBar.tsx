import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ICON } from '../../utils/SvgSprite.tsx'; // ICON enum의 경로 수정

const SidebarContainer = styled.div`
  width: 180px;
  background-color: white;
  height: 100vh;
  padding: 20px;
  border-right: 1px solid #d0d0d0;
  padding-top: 120px;
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

const TextStyled = styled.span`
  font-size: 14px;
  margin-left: 10px; /* 아이콘과의 간격을 위한 여백 */
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
        <svg width={30} height={20}>
          <use href={ICON.BOARD} />
        </svg>
        <TextStyled>보드</TextStyled>
      </SidebarItem>
      <SidebarItem onClick={handleBulletinClick}>
        <svg width={30} height={20}>
          <use href={ICON.BULLETIN} />
        </svg>
        <TextStyled>게시판</TextStyled>
      </SidebarItem>
    </SidebarContainer>
  );
}

export default Sidebar;
