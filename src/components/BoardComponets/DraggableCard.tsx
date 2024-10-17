import React, { memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import BoardCard from './BoardCard.tsx';
import { useAppDispatch } from '../../utils/hooks.ts';
import { deleteCard } from '../../store/cardSlice.ts';
import { Icon, ICON } from '../../utils/SvgSprite.tsx';

interface DraggableCardProps {
  item: boardProps;
  index: number;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const CloseSVGdiv = styled.div<{ size: number }>`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 10px;
  right: 10px;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};

  &:hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  position: relative;

  &:hover {
    ${CloseSVGdiv} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const DraggableCard = ({ item, index, onClick }: DraggableCardProps) => {
  const dispatch = useAppDispatch();
  const closeClick = () => {
    dispatch(deleteCard(item));
  };
  return (
    <Draggable
      key={item.id.toString()}
      draggableId={item.id.toString()}
      index={index}
    >
      {(provided, snapshot) => (
        <Wrapper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <BoardCard
            onClick={onClick}
            title={item.title}
            isDragging={snapshot.isDragging}
            manager={item.manager}
          />
          <CloseSVGdiv onClick={closeClick} size={14}>
            <Icon icon={ICON.CANCLE} size="14" />
          </CloseSVGdiv>
        </Wrapper>
      )}
    </Draggable>
  );
};

export default memo(DraggableCard);
