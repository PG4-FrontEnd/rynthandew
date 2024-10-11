import React from 'react';
import styled from 'styled-components';
import AccountCircleFilledSvg from '../utils/AccountCircleFilledSvg.tsx';

interface BoardCardProp {
  title: string;
  manager: string;
}

const BoardCardContainer = styled.div`
  padding: 10px;
  width: 252px;
  height: 70px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
  &:hover {
    background-color: #e9ecee;
  }

  &:focus {
    background-color: var(--selected);
  }
`;

const BoardCardContainerFlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BoardCardContainerTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const AccountCircleFilledSvgDiv = styled.div`
  width: fit-content;
  position: relative;
`;

const ManagerIndicator = styled.div`
  position: absolute;
  background-color: white;
  width: 50px;
  height: 20px;
  font-size: 14px;
  color: black;
  bottom: -40px;
`;

export default function BoardCard({ title, manager }: BoardCardProp) {
  return (
    <BoardCardContainer>
      <BoardCardContainerFlexCol>
        <BoardCardContainerTitle>{title}</BoardCardContainerTitle>
        <AccountCircleFilledSvgDiv>
          <AccountCircleFilledSvg />
          <ManagerIndicator>{manager}</ManagerIndicator>
        </AccountCircleFilledSvgDiv>
      </BoardCardContainerFlexCol>
    </BoardCardContainer>
  );
}
