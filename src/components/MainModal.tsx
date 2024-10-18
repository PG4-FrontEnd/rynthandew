import React, { useState } from 'react';
import styled from 'styled-components';
import Backdrop from './Backdrop.tsx';

const ModalContainer = styled.div`
  background: white;
  padding: 35px;
  border-radius: 8px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  margin-bottom: 15px;
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

const InnerDiv = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 20px;
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
  onSave: (url: string, title: string) => void;
}

const Modal = ({ isOpen, onClose, onSave }: ModalProps) => {
  const [repository, setRepository] = useState('');
  const [title, setTitle] = useState('');
  const [githubToken, setGithubToken] = useState('');
  const [owner, setOwner] = useState('');

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(title, owner);
    onClose();
  };

  return (
    <Backdrop onClick={onClose}>
      <ModalContainer>
        <InnerDiv>
          <Title>깃허브 저장소 이름</Title>
          <Input
            type="text"
            placeholder="저장소 이름"
            value={repository}
            onChange={e => setRepository(e.target.value)}
          />
          <Title>깃허브 저장소 owner</Title>
          <Input
            type="text"
            placeholder="owner"
            value={owner}
            onChange={e => setOwner(e.target.value)}
          />
          <Title>깃허브 토큰</Title>
          <Input
            type="text"
            placeholder="깃허브 토큰"
            value={githubToken}
            onChange={e => setGithubToken(e.target.value)}
          />
          <Title>제목</Title>
          <Input
            type="text"
            placeholder="제목"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <ButtonContainer>
            <CancelButton onClick={onClose}>취소</CancelButton>
            <SaveButton onClick={handleSave}>저장</SaveButton>
          </ButtonContainer>
        </InnerDiv>
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
