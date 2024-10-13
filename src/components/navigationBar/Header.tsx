import styled from 'styled-components';
import React from 'react';
import LogoSVG from './LogoSVG.tsx'; // 로고 SVG 임포트
import MailIcon from './MailIcon.tsx'; // 메일 아이콘 임포트
import UserIcon from './UserIcon.tsx'; // 사용자 아이콘 임포트

const HeaderContainer = styled.div`
  display: flex;
  align-items: center; // 가운데 정렬 유지
  justify-content: space-between; // 양쪽 끝으로 정렬
  padding: 10px 20px; // 패딩 조정
  background-color: #ffffff; // 배경 색상 흰색
  border-bottom: 1px solid #a0a0a0; // 경계선
  width: 100%; // 전체 너비
  height: 70px; // 높이
  position: fixed; // 고정 위치
  top: 0; // 상단에 위치
  left: 0; // 왼쪽에 위치
  z-index: 1000; // 다른 요소들 위에 표시
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // 그림자 추가
`;

const LogoWrapper = styled.div`
  width: 30px; // 로고 크기
  height: 30px; // 로고 크기
  margin-right: 10px; // 로고와 텍스트 사이 여백 조정
  transform: translateY(2px); // 로고를 아래로 이동
`;

const Title = styled.h1`
  margin: 0; // 기본 마진 제거
  font-size: 16px; // 폰트 크기
  color: rgba(0, 0, 0, 0.6); // 글자 색상
  line-height: 1.5; // 줄 높이 조정하여 텍스트 가독성 향상
  transform: translateY(2px); // 텍스트를 아래로 이동
`;

const IconWrapper = styled.div`
  display: flex; // 아이콘들을 가로로 배치
  align-items: center; // 아이콘 세로 중앙 정렬
`;

const MailIconWrapper = styled.div`
  margin-right: 30px; // 메일 아이콘과 사용자 아이콘 사이의 간격 조정
  transform: translateY(10px); // 메일 아이콘을 약간 아래로 이동
`;

const UserIconWrapper = styled.div`
  margin-right: 40px; // 사용자 아이콘을 오른쪽으로 밀기
  transform: translateY(2px); // 사용자 아이콘을 아래로 이동
`;

function Header() {
  return (
    <HeaderContainer>
      <IconWrapper>
        <LogoWrapper>
          <LogoSVG />
        </LogoWrapper>
        <Title>이슬보다린</Title> {/* 로고 아이콘 왼쪽에 텍스트 배치 */}
      </IconWrapper>
      <IconWrapper>
        <MailIconWrapper>
          <MailIcon />
        </MailIconWrapper>
        <UserIconWrapper>
          <UserIcon /> {/* 사용자 아이콘 추가 */}
        </UserIconWrapper>
      </IconWrapper>
    </HeaderContainer>
  );
}

export default Header;
