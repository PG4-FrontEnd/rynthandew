import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  children: React.ReactNode;
}

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
`;

export default function BoardModal({ children }: ModalProps) {
  return <ModalContainer>{children}</ModalContainer>;
}
