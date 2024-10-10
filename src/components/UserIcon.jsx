import React from 'react';
import styled from 'styled-components';

const UserIconSVG = styled.svg`
  width: 40px; // 아이콘 크기 설정
  height: 40px; // 아이콘 크기 설정
`;

const UserIcon = () => (
  <UserIconSVG
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_8828_1422)">
      <rect width="40" height="40" fill="#BDBDBD" />
      <rect width="40" height="40" rx="20" fill="#BDBDBD" />
      <path
        d="M20 20C22.21 20 24 18.21 24 16C24 13.79 22.21 12 20 12C17.79 12 16 13.79 16 16C16 18.21 17.79 20 20 20ZM20 22C17.33 22 12 23.34 12 26V28H28V26C28 23.34 22.67 22 20 22Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_8828_1422">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </UserIconSVG>
);

export default UserIcon;
