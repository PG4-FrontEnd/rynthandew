import React from 'react';
import styled from 'styled-components';
import Breadcrumbs from './Breadcrumbs.tsx';

interface PageHeaderTitleProps {
  title: string;
  fontSize?: number;
  fontWeight?: number;
}

const PageHeaderTitleContainer = styled.div<{
  fontSize: number;
  fontWeight: number;
}>`
  width: fit-content;
  font-size: ${props => `${props.fontSize}px`};
  font-weight: ${props => props.fontWeight};
`;

export default function PageHeader({
  title,
  fontSize = 24,
  fontWeight = 500,
}: PageHeaderTitleProps) {
  return (
    <div>
      <Breadcrumbs />
      <PageHeaderTitleContainer fontSize={fontSize} fontWeight={fontWeight}>
        {title}
      </PageHeaderTitleContainer>
    </div>
  );
}
