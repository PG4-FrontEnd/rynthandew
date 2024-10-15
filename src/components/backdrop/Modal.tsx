import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px; /* 모달 너비 조정 */
`;

const Title = styled.h2`
  margin: 0; /* 제목의 기본 마진 제거 */
  color: black; /* 제목 색상 설정 */
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center; /* 중앙 정렬 */
  margin: 20px 0; /* 상하 마진 조정 */
`;

const InputField = styled.input`
  border: 1px solid blue; /* 파란색 테두리 */
  padding: 10px;
  border-radius: 4px;
  width: 100%; /* 너비 100%로 설정 */
  box-sizing: border-box; /* 패딩 포함한 너비 설정 */
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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // 모달이 열려 있지 않으면 아무것도 렌더링하지 않음

  return (
    <ModalBackdrop>
      <ModalContainer>
        <Title>팀원 초대</Title> {/* 팀원 초대 제목 추가 */}
        <InputContainer>
          <InputField type="text" placeholder="닉네임" /> {/* 입력 칸 추가 */}
        </InputContainer>
        <ButtonContainer>
          <SaveButton onClick={onClose}>저장</SaveButton> {/* 저장 버튼 */}
          <CancelButton onClick={onClose}>취소</CancelButton> {/* 취소 버튼 */}
        </ButtonContainer>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default Modal;
