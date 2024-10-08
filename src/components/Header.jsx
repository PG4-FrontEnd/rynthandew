import styled from 'styled-components'; // styled-components 임포트
import React from 'react';
import LogoSVG from './LogoSVG'; // LogoSVG 파일 임포트

const HeaderContainer = styled.div`
  display: flex;
  align-items: center; // 가운데 정렬 유지
  justify-content: flex-start; // 왼쪽 정렬
  padding: 10px 20px;
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
  margin-right: 20px; // 로고와 텍스트 사이 여백 조정
  margin-top: 10px; // 로고를 아래로 이동
`;

const Title = styled.h1`
  margin: 0; // 기본 마진 제거
  font-size: 16px; // 폰트 크기
  color: rgba(0, 0, 0, 0.6); // 글자 색상
  line-height: 1.5; // 줄 높이 조정하여 텍스트 가독성 향상
  padding-bottom: 4px; // 텍스트 아래 간격 조정
  margin-top: 10px; // 로고를 아래로 이동
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <LogoSVG /> {/* 로고 크기 조정 */}
      </LogoWrapper>
      <Title>이슬보다린</Title> {/* 텍스트 컴포넌트 사용 */}
    </HeaderContainer>
  );
}

export default Header;
