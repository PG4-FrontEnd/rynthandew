import React from 'react';
import styled from 'styled-components';
import Breadcrumbs from './Breadcrumbs.tsx';
import Title from '../Title.tsx';

interface PageHeaderProps {
  title: string;
  Breadcurmbs?: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const PageHeaderForm = styled.form`
  display: grid;
  grid-template-row: 1fr;
  grid-gap: 8px;
`;

const EmptyDiv = styled.div`
  width: 16px;
  height: 16px;
  background-color: transparent;
`;

export default function PageHeader({
  title,
  Breadcurmbs = true,
  onSubmit,
}: PageHeaderProps) {
  return (
    <PageHeaderForm onSubmit={onSubmit}>
      {Breadcurmbs ? <Breadcrumbs /> : <EmptyDiv />}
      <Title title={title} />
    </PageHeaderForm>
  );
}
