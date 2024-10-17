import React from 'react';
import styled from 'styled-components';
import BorderlessInput from '../BorderlessInput.tsx';
import CustomInput from '../CustomInput.tsx';
import BoardDropdown from './BoardDropdown.tsx';

interface IssueProps {
  title: string;
  content: string;
  startDay: string;
  duration: string;
  manager: string;
  tagId: number;
}

interface Option {
  id: number;
  optionName: string; // Corrected typo
}

const Container = styled.div`
  background-color: white;
  width: 800px;
  height: 430px;
  padding: 20px;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;
const tagOptions: Option[] = [
  {
    id: 0,
    optionName: 'Todo',
  },
  {
    id: 1,
    optionName: 'Progress',
  },
  {
    id: 2,
    optionName: 'PR',
  },
  {
    id: 3,
    optionName: 'Done',
  },
];

const memberOption = [
  { id: 0, optionName: 'Alice' },
  { id: 1, optionName: 'Bob' },
  { id: 2, optionName: 'Charlie' },
  { id: 3, optionName: 'David' },
  { id: 4, optionName: 'Eve' },
  { id: 5, optionName: 'Frank' },
  { id: 6, optionName: 'Grace' },
  { id: 7, optionName: 'Hannah' },
  { id: 8, optionName: 'Ian' },
  { id: 9, optionName: 'Jack' },
];

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: cetner;
  padding-right: 40px;
  overflow: hidden;
`;
const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const DetailList = styled.div`
  display: grid;
  border: 1px solid #cdd3d8;
  border-radius: 10px;
`;

const DetailRow = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid #cdd3d8;
`;

const DetailTag = styled.div`
  margin-bottom: 10px;
  color: #495056;
`;

const TodoDropDownContainer = styled.div`
  padding-left: 10px;
  margin-bottom: 10px;
`;

const EmptyDiv = styled.div`
  width: 1px;
  height: 20px;
`;

export default function Issue({
  title,
  content,
  startDay,
  duration,
  manager,
  tagId,
}: IssueProps) {
  const selectedTagId = tagOptions.find(item => item.id === tagId);
  const selectedMember = memberOption.find(item => item.optionName === manager);

  return (
    <Container>
      <ContainerLeft>
        <BorderlessInput initialText={title} fontSize={24} />
        <EmptyDiv />
        <BorderlessInput initialText={content} fontSize={16} fontWeight={400} />
      </ContainerLeft>
      <ContainerRight>
        <TodoDropDownContainer>
          <BoardDropdown options={tagOptions} selected={selectedTagId} />
        </TodoDropDownContainer>
        <DetailList>
          <DetailRow>
            <DetailTag>
              <span>담당자</span>
            </DetailTag>
            <DetailTag>
              <BoardDropdown options={memberOption} selected={selectedMember} />
            </DetailTag>
          </DetailRow>
          <DetailRow>
            <DetailTag>
              <span>시작</span>
            </DetailTag>
            <CustomInput
              placeholder="날짜를 입력해주세요"
              initialValue={startDay}
              width={150}
              type="date"
              height={32}
              fontSize={14}
            />
          </DetailRow>
          <DetailRow>
            <DetailTag>
              <span>마감</span>
            </DetailTag>
            <CustomInput
              placeholder="날짜를 입력해주세요"
              initialValue={duration}
              width={150}
              type="date"
              height={32}
              fontSize={14}
            />
          </DetailRow>
        </DetailList>
      </ContainerRight>
    </Container>
  );
}
