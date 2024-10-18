import React from 'react';
import styled from 'styled-components';
import { ICON, Icon } from '../../utils/SvgSprite.tsx';

interface BoardCardProp {
  title: string;
  manager?: string;
  height?: number;
  width?: number;
  fontSize?: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  isDragging: boolean;
}

const BoardCardContainer = styled.div<{
  width: number;
  height: number;
  $isDragging: boolean;
}>`
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    background-color: #e9ecee;
  }

  &:focus {
    background-color: var(--selected);
  }

  background-color: ${props => (props.$isDragging ? 'gray' : 'white')};
`;

const BoardCardContainerFlexCol = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

const BoardCardContainerTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoardCardContainerTitle = styled.span<{ fontSize: number }>`
  font-size: ${props => props.fontSize}px;
  font-weight: 500;
`;

const ManagerIndicator = styled.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  border-radius: 4px;
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 4px;
  width: 100px;
  height: 16px;
  font-size: 12px;
  color: black;
  bottom: -30px;
  z-index: 10;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
  transition:
    opacity 0.1s ease-in,
    visibility 0.1s ease-in;
`;

const AccountCircleFilledSvgDiv = styled.div`
  width: fit-content;
  position: relative;

  &:hover {
    ${ManagerIndicator} {
      opacity: 1;
      visibility: visible;
    }
  }

  transition: all 0.1s ease-in;
`;

const BoardCard = ({
  title,
  manager = '없음',
  height = 80,
  width = 220,
  onClick = () => {},
  fontSize = 16,
  isDragging,
}: BoardCardProp) => {
  return (
    <BoardCardContainer
      width={width}
      height={height}
      onClick={onClick}
      $isDragging={isDragging}
    >
      <BoardCardContainerFlexCol>
        <BoardCardContainerTitleDiv>
          <BoardCardContainerTitle fontSize={fontSize}>
            {title.length < 20 ? title : `${title.slice(0, 20)}...`}
          </BoardCardContainerTitle>
        </BoardCardContainerTitleDiv>
        <AccountCircleFilledSvgDiv>
          <Icon icon={ICON.ACCOUNT_CIRCLE} />
          <ManagerIndicator>담당자 : {manager}</ManagerIndicator>
        </AccountCircleFilledSvgDiv>
      </BoardCardContainerFlexCol>
    </BoardCardContainer>
  );
};

export default BoardCard;
