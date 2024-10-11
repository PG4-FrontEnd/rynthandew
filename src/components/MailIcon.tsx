import React from 'react';
import styled from 'styled-components';

// Styled SVG 컴포넌트
const StyledSVG = styled.svg`
  width: 24px; /* 원하는 크기로 수정 */
  height: 24px; /* 원하는 크기로 수정 */
  fill: black;
  fill-opacity: 0.54;
`;

function MailIcon() {
  return (
    <StyledSVG viewBox="0 0 43 43" xmlns="http://www.w3.org/2000/svg">
      <path d="M35.8335 7.16663H7.16683C5.196 7.16663 3.60141 8.77913 3.60141 10.75L3.5835 32.25C3.5835 34.2208 5.196 35.8333 7.16683 35.8333H35.8335C37.8043 35.8333 39.4168 34.2208 39.4168 32.25V10.75C39.4168 8.77913 37.8043 7.16663 35.8335 7.16663ZM35.8335 14.3333L21.5002 23.2916L7.16683 14.3333V10.75L21.5002 19.7083L35.8335 10.75V14.3333Z" />
    </StyledSVG>
  );
}

export default MailIcon;
