import React from 'react';
import styled from 'styled-components';
import BoardBackdrop from '../Backdrop.tsx';

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 35px;
  border-radius: 8px;
  width: 350px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Title = styled.h2`
  margin: 0 0 15px 0;
  color: black;
  font-size: 16px;
  font-weight: normal;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #007bff;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const ImageSelectButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #f1f3f5;
  border: none;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  margin: 10px 0 20px;
  font-size: 14px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`;

const SaveButton = styled(Button)`
  background: #007bff;
  color: white;
`;

const CancelButton = styled(Button)`
  background: #f1f3f5;
  color: #333;
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (url: string, description: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSave }) => {
  const [url, setUrl] = React.useState('');
  const [description, setDescription] = React.useState('');

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(url, description);
    onClose();
  };

  return (
    <>
      <BoardBackdrop onClick={onClose} />
      <ModalContainer>
        <Title>깃허브 저장소 설정</Title>
        <Input
          type="text"
          placeholder="https://github.com/"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <Title>제목</Title>
        <Input
          type="text"
          placeholder="닉네임"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <ImageSelectButton>대표 이미지 선택</ImageSelectButton>
        <ButtonContainer>
          <CancelButton onClick={onClose}>취소</CancelButton>
          <SaveButton onClick={handleSave}>저장</SaveButton>
        </ButtonContainer>
      </ModalContainer>
    </>
  );
};

export default Modal;
