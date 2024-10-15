import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: flex; /* Flexbox 사용 */
  padding: 5px 2px; /* 여백 조정 */
  width: 53px; /* 버튼 너비를 자동으로 조정 */
  height: 30px; /* 버튼 높이 조정 */
  background: #007bff; /* 배경색 */
  border: none;
  cursor: pointer;
  outline: none;
  margin-top: 90px; /* 위쪽 마진 조정(버튼 위치) */
  color: white; /* 텍스트 색상 조정 */
  font-weight: bold; /* 텍스트 굵기 조정 */
  font-size: 13px; /* 글씨 크기 조정 */
  border-radius: 4px; /* 모서리 둥글게 */
`;

const Icon = styled.svg`
  width: 14px; /* 아이콘 크기 조정 */
  height: 16px; /* 아이콘 크기 조정 */
  justify-content: center; /* 내용 가로 중앙 정렬 */
  align-items: center; /* 내용 세로 중앙 정렬 */
`;

const Button: React.FC<{ onClick: () => void; children?: React.ReactNode }> = ({
  onClick,
  children,
}) => {
  return (
    <ButtonStyled onClick={onClick}>
      {/* 아이콘을 사용하려면 아래처럼 추가 */}
      <Icon>{/* 여기에 아이콘 SVG 코드를 추가하세요 */}</Icon>
      {children}
    </ButtonStyled>
  );
};

export default Button;
