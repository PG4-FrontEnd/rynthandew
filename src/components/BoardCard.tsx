import React from 'react';
import styled from 'styled-components';
import AccountCircleFilledSvg from '../utils/AccountCircleFilledSvg.tsx';
import { CloseSVG } from '../utils/CloseSvg.tsx';

interface BoardCardProp {
  title: string;
  manager?: string;
  height?: number;
  width?: number;
  fontSize?: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  closeClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const CloseSVGdiv = styled.div<{ size: number }>`
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.1s ease-in,
    visibility 0.1s ease-in;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};

  &:hover {
    cursor: pointer;
  }
`;

const BoardCardContainer = styled.div<{ width: number; height: number }>`
  padding: 10px;
  box-sizing: border-box;
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  background-color: white;

  &:hover {
    background-color: #e9ecee;

    ${CloseSVGdiv} {
      opacity: 1;
      visibility: visible;
    }
  }

  &:focus {
    background-color: var(--selected);
  }
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

export default function BoardCard({
  title,
  manager = '없음',
  height = 80,
  width = 220,
  onClick = () => {},
  closeClick = () => {},
  fontSize = 16,
}: BoardCardProp) {
  return (
    <BoardCardContainer width={width} height={height} onClick={onClick}>
      <BoardCardContainerFlexCol>
        <BoardCardContainerTitleDiv>
          <BoardCardContainerTitle fontSize={fontSize}>
            {title.length < 10 ? title : `${title.slice(0, 10)}...`}
          </BoardCardContainerTitle>
          <CloseSVGdiv onClick={closeClick} size={fontSize}>
            <CloseSVG width={fontSize} height={fontSize} />
          </CloseSVGdiv>
        </BoardCardContainerTitleDiv>
        <AccountCircleFilledSvgDiv>
          <AccountCircleFilledSvg />
          <ManagerIndicator>담당자 : {manager}</ManagerIndicator>
        </AccountCircleFilledSvgDiv>
      </BoardCardContainerFlexCol>
    </BoardCardContainer>
  );
}
