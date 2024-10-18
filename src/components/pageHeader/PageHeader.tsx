import React from 'react';
import styled from 'styled-components';
import Breadcrumbs from './Breadcrumbs.tsx';
import Title from '../Title.tsx';

interface PageHeaderProps {
  title: string;
  showBreadcrumbs?: boolean;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  rightElement?: React.ReactNode;
}

const PageHeaderContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 8px;
`;

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
  showBreadcrumbs = true,
  onSubmit,
  rightElement,
}: PageHeaderProps) {
  const headerContent = (
    <>
      <LeftSection>
        {showBreadcrumbs ? <Breadcrumbs /> : <EmptyDiv />}
        <Title title={title} />
      </LeftSection>
      {rightElement}
    </>
  );

  return onSubmit ? (
    <PageHeaderForm onSubmit={onSubmit}>{headerContent}</PageHeaderForm>
  ) : (
    <PageHeaderContainer>{headerContent}</PageHeaderContainer>
  );
}
