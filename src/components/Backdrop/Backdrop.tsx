// Backdrop.tsx
import React from 'react';
import styled from 'styled-components';

const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100; // Modal보다 낮게 설정
`;

const Backdrop: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return <BackdropContainer onClick={onClick} />;
};

export default Backdrop;
