// src/components/navigationBar/Header.tsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Link 임포트 추가
import { Icon, ICON } from '../../utils/SvgSprite.tsx'; // ICON enum의 경로 수정

// Header 컨테이너 스타일 정의
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #a0a0a0;
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// 제목 스타일 정의
const Title = styled.h1`
  margin: 0;
  font-size: 15px;
  color: black;
  line-height: 1.5;
  padding-left: 20px;
`;

// 아이콘 래퍼 스타일 정의
const IconWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-right: 30px;
`;

// 버튼 스타일 정의
const IconButton = styled.button`
  background: none;

  border: none;
  padding: 0;
  cursor: pointer; // 마우스 커서가 버튼에 올 때 포인터로 변경
`;

function Header() {
  const handleNotificationClick = () => {
    // 알림 클릭 처리
  };

  const handlePeopleClick = () => {
    // 사람 클릭 처리
  };

  return (
    <HeaderContainer>
      <IconWrapper>
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <svg width={30} height={20}>
            <use href={ICON.LOGO} />
          </svg>
          <Title>이슬보다린</Title>
        </Link>
      </IconWrapper>
      <IconWrapper>
        <IconButton
          onClick={handleNotificationClick}
          type="button" // 타입 속성 추가
          aria-label="Notification"
        >
          <IconButton onClick={handlePeopleClick} type="button">
            <Icon icon={ICON.NOTIFICATION} size="30" />
          </IconButton>
        </IconButton>
        <IconButton onClick={handlePeopleClick} type="button">
          <Icon icon={ICON.AVATAR} size="30" />
        </IconButton>
      </IconWrapper>
    </HeaderContainer>
  );
}

export default Header;
