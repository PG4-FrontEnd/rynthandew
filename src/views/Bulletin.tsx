import React from 'react';
import styled from 'styled-components';
import PageHeader from '../components/pageHeader/PageHeader.tsx';
import CustomInput from '../components/CustomInput.tsx';

const Title = styled.h1`
  margin: 0;
  color: black;
  text-decoration: none;
  font-weight: normal;
`;

function BulletinBoard() {
  return (
    <Title>
      <PageHeader title="보드" />
      <div style={{ width: '1px', height: '20px' }} />
      <CustomInput
        width={220}
        height={32}
        fontSize={14}
        type="search"
        placeholder="제목 + 내용"
        iconLeft="search"
      />
    </Title>
  );
}

export default BulletinBoard;
