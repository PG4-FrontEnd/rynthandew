import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Layout from '../components/Layout.tsx';
import PageHeader from '../components/pageHeader/PageHeader.tsx';
import CustomInput from '../components/CustomInput.tsx';
import { data } from '../components/BoardComponets/boarddata.tsx';
import BoardColumn from '../components/BoardComponets/BoardColumn.tsx';
import { ICON, Icon } from '../utils/SvgSprite.tsx';
import BoardBackdrop from '../components/BoardComponets/BoardBackdrop.tsx';
import BoardModal from '../components/BoardComponets/BoardModal.tsx';
import Invitation from '../components/BoardComponets/Invitation.tsx';
import MemberList from '../components/BoardComponets/MemberList.tsx';

export interface boardProps {
  id: number;
  duration: string;
  createAt: string;
  updatedAt: string;
  startDay: string;
  content: string;
  manager: string;
  title: string;
  tagId: number;
}

const EmptyDiv = styled.div`
  width: 1px;
  height: 20px;
`;

const BoardListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 240px);
  grid-gap: 20px;
  width: 100%;
  margin-top: 20px;
`;

const SupportContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SupportContainerLeft = styled.div`
  display: flex;
  align-items: center;
`;

const SupportContainerRight = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
`;

function Board() {
  // 서버에서 api로 데이터 다운 받을 때 사용
  // const [cards, setCards] = useState<boardProps[]>(data);
  const [todos, setTodo] = useState<boardProps[]>([]);
  const [progress, setProgress] = useState<boardProps[]>([]);
  const [pullRequests, setPullRequests] = useState<boardProps[]>([]);
  const [done, setDone] = useState<boardProps[]>([]);
  const [clickTeam, setClickTeam] = useState(false);
  const [clickAddPerson, setClickAddPerson] = useState(false);

  useEffect(() => {
    setTodo(data.filter(card => card.tagId === 0));
    setProgress(data.filter(card => card.tagId === 1));
    setPullRequests(data.filter(card => card.tagId === 2));
    setDone(data.filter(card => card.tagId === 3));
  }, [data]);

  const { id } = useParams();

  const handleClickTeamOn = () => {
    setClickTeam(true);
  };
  const handleClickTeamOff = () => {
    setClickTeam(false);
  };

  const handleclickAddPersonOn = () => {
    setClickAddPerson(true);
  };
  const handleclickAddPersonOff = () => {
    setClickAddPerson(false);
  };

  const columnName = (name: string) => {
    if (name === 'Todo') {
      return todos;
    }
    if (name === 'Progress') {
      return progress;
    }
    if (name === 'PR') {
      return pullRequests;
    }
    return done;
  };

  const onDragEnd = ({ destination, source }) => {
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = source.droppableId;
    const finish = destination.droppableId;

    if (start === finish) {
      const column = columnName(start);
      const newColumn = [...column];
      const [movedCard] = newColumn.splice(source.index, 1); // source에서 제거
      newColumn.splice(destination.index, 0, movedCard); // destination에 삽입

      if (start === 'Todo') setTodo(newColumn);
      else if (start === 'Progress') setProgress(newColumn);
      else if (start === 'PR') setPullRequests(newColumn);
      else if (start === 'Done') setDone(newColumn);
      return;
    }

    // 다른 column 으로 이동
    const startColumn = columnName(start);
    const finishColumn = columnName(finish);

    const newStartColumn = [...startColumn];
    const [movedCard] = newStartColumn.splice(source.index, 1);

    const newFinishColumn = [...finishColumn];
    newFinishColumn.splice(destination.index, 0, movedCard);

    // 상태 업데이트
    if (start === 'Todo') setTodo(newStartColumn);
    else if (start === 'Progress') setProgress(newStartColumn);
    else if (start === 'PR') setPullRequests(newStartColumn);
    else if (start === 'Done') setDone(newStartColumn);

    if (finish === 'Todo') setTodo(newFinishColumn);
    else if (finish === 'Progress') setProgress(newFinishColumn);
    else if (finish === 'PR') setPullRequests(newFinishColumn);
    else if (finish === 'Done') setDone(newFinishColumn);
  };

  return (
    <Layout>
      {clickAddPerson && (
        <BoardBackdrop onClick={handleclickAddPersonOff}>
          <BoardModal>
            <Invitation
              onClose={handleclickAddPersonOff}
              onClickBlueButton={handleclickAddPersonOn}
              buttonText="초대"
              title="팀원 초대"
            />
          </BoardModal>
        </BoardBackdrop>
      )}

      {clickTeam && (
        <BoardBackdrop onClick={handleClickTeamOff}>
          <BoardModal>
            <MemberList
              onClickBlueButton={handleClickTeamOff}
              buttonText="확인"
              title="팀원 목록"
              memberList={['정동구', '김유진', '박지선']}
            />
          </BoardModal>
        </BoardBackdrop>
      )}

      <PageHeader title="보드" />
      <EmptyDiv />
      <SupportContainer>
        <SupportContainerLeft>
          <CustomInput
            width={220}
            height={32}
            fontSize={14}
            type="search"
            placeholder="제목 + 내용"
            iconLeft="search"
          />
          <IconContainer onClick={handleClickTeamOn}>
            <Icon icon={ICON.PEOPLE} />
          </IconContainer>
          <IconContainer onClick={handleclickAddPersonOn}>
            <Icon icon={ICON.PERSON_ADD} />
          </IconContainer>
        </SupportContainerLeft>
        <SupportContainerRight>
          <Link to={`/setting/${id}`}>
            <Icon icon={ICON.SETTING} />
          </Link>
        </SupportContainerRight>
      </SupportContainer>
      <BoardListGrid>
        <DragDropContext onDragEnd={onDragEnd}>
          <BoardColumn title="Todo" cards={todos} boardId="Todo" tagId={0} />
          <BoardColumn
            title="Progress"
            cards={progress}
            boardId="Progress"
            tagId={1}
          />
          <BoardColumn title="PR" cards={pullRequests} boardId="PR" tagId={2} />
          <BoardColumn title="Done" cards={done} boardId="Done" tagId={3} />
        </DragDropContext>
      </BoardListGrid>
    </Layout>
  );
}

export default Board;
