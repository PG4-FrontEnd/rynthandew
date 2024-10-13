import React from 'react';
import styled from 'styled-components';

const SvgIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: currentColor;
`;

const Icon: React.FC = () => (
  <SvgIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
    <path d="M12 4.4a7.6 7.6 0 100 15.2 7.6 7.6 0 000-15.2zm0 13.6a6 6 0 110-12 6 6 0 010 12z" />
    <path d="M15 12a3 3 0 01-3 3 3 3 0 110-6 3 3 0 013 3z" />
  </SvgIcon>
);

export default Icon;
