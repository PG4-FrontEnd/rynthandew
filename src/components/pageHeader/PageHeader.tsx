import React from 'react';
import styled from 'styled-components';
import Breadcrumbs from './Breadcrumbs.tsx';
import Title from '../Title.tsx';

interface PageHeaderProps {
  title: string;
  showBreadcrumbs?: boolean; // boolean 타입으로 변경
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  rightElement?: React.ReactNode;
}

const PageHeaderForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmptyDiv = styled.div`
  width: 16px;
  height: 16px;
  background-color: transparent;
`;

export default function PageHeader({
  title,
  showBreadcrumbs = true, // 이름 변경 및 기본값 설정
  onSubmit,
  rightElement,
}: PageHeaderProps) {
  return (
    <PageHeaderForm onSubmit={onSubmit}>
      <LeftSection>
        {showBreadcrumbs ? <Breadcrumbs /> : <EmptyDiv />}
        <Title title={title} />
      </LeftSection>
      {rightElement}
    </PageHeaderForm>
  );
}
