import React from 'react';
import styled from 'styled-components';
import { ICON, Icon } from '../../utils/SvgSprite.tsx';

interface MemberListProps {
  onClickBlueButton: () => void;
  buttonText: string;
  title: string;
  memberList: string[];
}

const Title = styled.h2`
  margin: 0;
  color: black;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* 버튼을 오른쪽 정렬 */
  gap: 10px; /* 버튼 사이 간격 조정 */
`;

const SaveButton = styled.button`
  background: #007bff; /* 파란색 배경 */
  color: white; /* 흰색 텍스트 */
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Member = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

export default function MemberList({
  title,
  onClickBlueButton,
  buttonText,
  memberList,
}: MemberListProps) {
  return (
    <>
      <Title>{title}</Title>
      {memberList.map(member => (
        <Member>
          <Icon icon={ICON.ACCOUNT_CIRCLE} />
          <span>{member}</span>
        </Member>
      ))}
      <ButtonContainer>
        <SaveButton onClick={onClickBlueButton}>{buttonText}</SaveButton>
      </ButtonContainer>
    </>
  );
}
