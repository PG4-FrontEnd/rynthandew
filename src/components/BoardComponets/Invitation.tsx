import React from 'react';
import styled from 'styled-components';

interface InvitationProps {
  onClickBlueButton: () => void;
  onClose: () => void;
  buttonText: string;
  title: string;
}

const Title = styled.h2`
  margin: 0;
  color: black;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center; /* 중앙 정렬 */
  margin: 20px 0; /* 상하 마진 조정 */
`;

const InputField = styled.input`
  border: 1px solid #cdd3d8;
  padding: 10px;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* 버튼을 오른쪽 정렬 */
  gap: 10px; /* 버튼 사이 간격 조정 */
`;

const SaveButton = styled.button`
  background: #007bff; /* 파란색 배경 */
  color: white; /* 흰색 텍스트 */
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  background: lightgray; /* 회색 배경 */
  color: black; /* 검정 텍스트 */
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function Invitation({
  title,
  onClickBlueButton,
  onClose,
  buttonText,
}: InvitationProps) {
  return (
    <>
      <Title>{title}</Title>
      <InputContainer>
        <InputField type="text" placeholder="닉네임" />
      </InputContainer>
      <ButtonContainer>
        <SaveButton onClick={onClickBlueButton}>{buttonText}</SaveButton>
        <CancelButton onClick={onClose}>취소</CancelButton>
      </ButtonContainer>
    </>
  );
}
