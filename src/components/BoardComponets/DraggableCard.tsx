import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import BoardCard from './BoardCard.tsx';
import { boardProps } from '../../views/Board.tsx';

interface DraggableCardProps {
  item: boardProps;
  index: number;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Wrapper = styled.div``;

const DraggableCard = ({ item, index, onClick }: DraggableCardProps) => {
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
        </Wrapper>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
