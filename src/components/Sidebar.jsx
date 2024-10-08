import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BulletinIcon from './BulletinIcon';
import BoardIcon from './BoardIcon';

const SidebarContainer = styled.div`
  width: 200px;
  background-color: white;
  height: 100vh;
  padding: 20px;
  border-right: 1px solid #d0d0d0; // 사이드바 오른쪽 경계선 추가
  margin-top: 80px; // 헤더 높이만큼 내려주기 (헤더 높이에 맞춰 조정 가능)
`;

const MenuText = styled.span`
  display: block; // 블록 요소로 변경
  margin-bottom: 10px; // 아이콘과의 간격 조정
  font-weight: normal; // 글씨를 보통 두께로 설정
  font-size: 14px; // 글씨 크기를 작게 조정
  color: rgba(0, 0, 0, 0.6); // 색상을 연하게 설정 (투명도 조절)
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0; // 마진 제거
  cursor: pointer;
  padding: 10px 0; // 위아래 패딩만 추가
  width: 100%; // 가로로 꽉 차게 설정

  &:hover {
    background-color: #f0f0f0; // 마우스 오버 시 배경색 변경
  }
`;

const IconWrapper = styled.div`
  width: 35px; // 아이콘 크기 조정 (필요에 따라 조정 가능)
  height: 24px; // 아이콘 크기 조정
  margin-right: 10px; // 아이콘과 텍스트 사이 여백
  flex-shrink: 0; // 아이콘이 축소되지 않도록 설정
`;

function Sidebar() {
  const navigate = useNavigate();

  const handleBoardClick = () => {
    navigate('/board'); // 보드 클릭 시 페이지 이동
  };

  const handleBulletinClick = () => {
    navigate('/bulletin'); // 게시판 클릭 시 페이지 이동
  };

  return (
    <SidebarContainer>
      <MenuText>메뉴</MenuText> {/* 사이드바 상단에 메뉴 텍스트 추가 */}
      <SidebarItem onClick={handleBoardClick}>
        <IconWrapper>
          <BoardIcon style={{ width: '100%', height: '100%' }} />
        </IconWrapper>
        <span style={{ marginLeft: '10px' }}>보드</span>
      </SidebarItem>
      <SidebarItem onClick={handleBulletinClick}>
        <IconWrapper>
          <BulletinIcon style={{ width: '100%', height: '100%' }} />
        </IconWrapper>
        <span style={{ marginLeft: '10px' }}>게시판</span>
      </SidebarItem>
    </SidebarContainer>
  );
}

export default Sidebar;
