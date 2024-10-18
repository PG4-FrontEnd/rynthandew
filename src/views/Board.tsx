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
import BoardBackdrop from '../components/Backdrop.tsx';
import BoardModal from '../components/BoardComponets/BoardModal.tsx';
import Invitation from '../components/BoardComponets/Invitation.tsx';
import MemberList from '../components/BoardComponets/MemberList.tsx';
import { useAppDispatch, useAppSelector } from '../utils/hooks.ts';
import { setCard, updateCard } from '../store/cardSlice.ts';
import { tagOptions } from '../assets/constants.ts';

const EmptyDiv = styled.div`
  width: 1px;
  height: 20px;
`;

const BoardListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 240px);
  grid-gap: 30px;
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
  const dispatch = useAppDispatch();
  const cards = useAppSelector(state => state.cards.value);
  const [todos, setTodo] = useState<boardProps[]>([]);
  const [progress, setProgress] = useState<boardProps[]>([]);
  const [pullRequests, setPullRequests] = useState<boardProps[]>([]);
  const [done, setDone] = useState<boardProps[]>([]);
  const [clickTeam, setClickTeam] = useState(false);
  const [clickAddPerson, setClickAddPerson] = useState(false);

  useEffect(() => {
    dispatch(setCard(data));
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await (
          await fetch(
            `https://api.github.com/repos/${process.env.REACT_APP_GITHUB_REPO_OWNER}/${process.env.REACT_APP_GITHUB_REPO}/pulls`,
            {
              method: 'GET',
              headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
              },
            },
          )
        ).json();

        const transformedData = response.map(
          (pr: prProps): boardProps => ({
            id: pr.id,
            duration: '',
            createAt: pr.created_at,
            updatedAt: pr.updated_at,
            startDay: pr.created_at,
            content: pr.body || 'No description',
            manager: pr.assignee.login,
            title: pr.title,
            tagId: 2,
          }),
        );

        setPullRequests(transformedData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTodo(cards.filter(card => card.tagId === 0));
    setProgress(cards.filter(card => card.tagId === 1));
    setDone(cards.filter(card => card.tagId === 3));
  }, [cards]);

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
      const [movedCard] = newColumn.splice(source.index, 1);
      newColumn.splice(destination.index, 0, movedCard);

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
    const newTag = tagOptions.find(tag => tag.optionName === finish);
    dispatch(updateCard({ id: movedCard.id, tagId: newTag.id }));
    newFinishColumn.splice(destination.index, 0, movedCard);

    // Update the state
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
