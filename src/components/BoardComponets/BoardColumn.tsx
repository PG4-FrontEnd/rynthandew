import React, { useState } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import DraggableCard from './DraggableCard.tsx';
import Issue from './Issue.tsx';
import BoardBackdrop from './BoardBackdrop.tsx';
import { useAppDispatch } from '../../utils/hooks.ts';
import { addNewCard } from '../../store/cardSlice.ts';

const BoardListContainer = styled.div``;

interface ColumnProps {
  title: string;
  cards: boardProps[];
  boardId: string;
  tagId: number;
}

const Container = styled.div`
  border-radius: 4px;
  background-color: #cdd3d8;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  min-height: 100px;
`;

const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const AddButton = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  &:hover {
    background-color: #e9ecee;
  }
  &:focus {
    background-color: var(--selected);
  }

  padding-top: 10px;
  padding-bottom: 5px;
  border-radius: 5px;
`;

const BoardColumn = React.memo(
  ({ cards, boardId, title, tagId }: ColumnProps) => {
    const [currentIssue, setCurrentIssue] = useState<boardProps | null>(null);
    const [openIssue, setOpenIssue] = useState(false);

    const dispatch = useAppDispatch();

    const defaultIssue: boardProps = {
      id: Math.random(),
      duration: '',
      createAt: '',
      updatedAt: '',
      startDay: '',
      content: '내용을 입력해주세요',
      manager: '없음',
      title: '제목',
      tagId,
    };

    const handleOpenIssueOn = (item: boardProps) => {
      setCurrentIssue(item);
      setOpenIssue(true);
    };

    const handleClickAddIssue = () => {
      const newCard = { ...defaultIssue, id: Math.random() };
      dispatch(addNewCard({ ...newCard, id: Math.random() }));
      setCurrentIssue(newCard);
      setOpenIssue(true);
    };

    const handleOpenIssueOff = () => {
      setOpenIssue(false);
      setCurrentIssue(null);
    };

    return (
      <Container>
        {openIssue && currentIssue && (
          <BoardBackdrop onClick={handleOpenIssueOff}>
            <Issue {...currentIssue} />
          </BoardBackdrop>
        )}
        <TitleContainer>{title}</TitleContainer>
        <div>
          <Droppable droppableId={boardId}>
            {provided => (
              <BoardListContainer
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {cards.map((item: boardProps, index: number) => (
                  <DraggableCard
                    item={item}
                    index={index}
                    key={item.id}
                    onClick={() => handleOpenIssueOn(item)}
                  />
                ))}
                {provided.placeholder}
              </BoardListContainer>
            )}
          </Droppable>
        </div>
        <AddButton type="button" onClick={handleClickAddIssue}>
          <span>+ 이슈 추가하기</span>
        </AddButton>
      </Container>
    );
  },
);

export default BoardColumn;
