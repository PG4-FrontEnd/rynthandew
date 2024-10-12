import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  title: string;
  fontSize?: number;
  fontWeight?: number;
}

const TitleContainer = styled.div<{
  fontSize: number;
  fontWeight: number;
}>`
  margin-top: 8px;
  width: fit-content;
  font-size: ${props => `${props.fontSize}px`};
  font-weight: ${props => props.fontWeight};
`;

export default function Title({
  title,
  fontSize = 24,
  fontWeight = 500,
}: TitleProps) {
  return (
    <TitleContainer fontSize={fontSize} fontWeight={fontWeight}>
      {title}
    </TitleContainer>
  );
}
