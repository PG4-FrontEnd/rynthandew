import React, { useRef } from 'react';
import styled from 'styled-components';

interface BoardBackdropProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Backdrop({ children, onClick }: BoardBackdropProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleClose = (e: React.MouseEvent) => {
    if (e.target === dialogRef.current) {
      onClick();
    }
  };

  return (
    <Container ref={dialogRef} onClick={handleClose}>
      {children}
    </Container>
  );
}
