import React from 'react';
import styled from 'styled-components';
import BorderlessInput from '../BorderlessInput.tsx';
import CustomInput from '../CustomInput.tsx';
import BoardDropdown from './BoardDropdown.tsx';
import { tagOptions } from '../../assets/constants.ts';

interface IssueProps {
  title: string;
  content: string;
  startDay?: string;
  duration?: string;
  manager?: string;
  tagId: number;
  id: number;
}

interface Option {
  id: number;
  optionName: string;
}

const Container = styled.div`
  background-color: white;
  width: 800px;
  height: 430px;
  padding: 20px;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

// api 연결 시 삭제 필요
const memberOption = [
  { id: 0, optionName: 'dongguJeong' },
  { id: 1, optionName: 'Galaxy-104' },
  { id: 2, optionName: 'Youjin-K' },
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
  title: initialTitle,
  content: initialContent,
  startDay: initialStartDay,
  duration: initialDuration,
  manager,
  tagId,
  id,
}: IssueProps) {
  const selectedTagId = tagOptions.find(item => item.id === tagId);
  const selectedMember = memberOption.find(item => item.optionName === manager);

  return (
    <Container>
      <ContainerLeft>
        <BorderlessInput
          initialText={initialTitle}
          fontSize={24}
          id={id}
          attr="title"
        />
        <EmptyDiv />
        <BorderlessInput
          initialText={initialContent}
          fontSize={16}
          fontWeight={400}
          id={id}
          attr="content"
        />
      </ContainerLeft>
      <ContainerRight>
        <TodoDropDownContainer>
          <BoardDropdown
            options={tagOptions}
            selected={selectedTagId}
            id={id}
            attr="tagId"
          />
        </TodoDropDownContainer>
        <DetailList>
          <DetailRow>
            <DetailTag>
              <span>담당자</span>
            </DetailTag>
            <DetailTag>
              <BoardDropdown
                options={memberOption}
                selected={selectedMember}
                id={id}
                attr="manager"
              />
            </DetailTag>
          </DetailRow>
          <DetailRow>
            <DetailTag>
              <span>시작</span>
            </DetailTag>
            <CustomInput
              placeholder="날짜를 입력해주세요"
              initialValue={initialStartDay}
              width={150}
              type="date"
              height={32}
              fontSize={14}
              id={id}
              attr="startDay"
            />
          </DetailRow>
          <DetailRow>
            <DetailTag>
              <span>마감</span>
            </DetailTag>
            <CustomInput
              placeholder="날짜를 입력해주세요"
              initialValue={initialDuration}
              width={150}
              type="date"
              height={32}
              fontSize={14}
              attr="duration"
              id={id}
            />
          </DetailRow>
        </DetailList>
      </ContainerRight>
    </Container>
  );
}
