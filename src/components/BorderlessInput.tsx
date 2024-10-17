import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../utils/hooks.ts';
import { updateCard } from '../store/cardSlice.ts';

const Container = styled.div`
  width: 100%;
  background-color: white;
  line-height: 28px !important;
`;

const TextArea = styled.textarea<{
  fontSize: number;
  fontWeight: number;
  $paddingTop: number;
  $minHeight: number;
}>`
  border: 2px solid var(--main);
  padding-left: 4px;
  padding-top: ${props => `${props.$paddingTop}px`};
  background-color: white;
  width: 100%;
  line-height: 28px !important;
  font-size: ${props => `${props.fontSize}px`};
  font-weight: ${props => `${props.fontWeight}`};
  min-height: ${props => `${props.$minHeight}`};
  resize: none;
  outline: none;
  overflow: hidden;
`;

const NormalDiv = styled.div<{
  fontSize: number;
  fontWeight: number;
  $paddingTop: number;
}>`
  white-space: pre-line;
  padding-top: ${props => `${props.$paddingTop}px`};
  padding-left: 4px;
  font-size: ${props => `${props.fontSize}px`};
  font-weight: ${props => `${props.fontWeight}`};
  cursor: pointer;
  &:hover {
    background-color: #dee2e5;
  }
`;

const calculateStyles = (size: number) => {
  switch (size) {
    case 14:
      return { padding: 2, minHeight: 28 };
    case 16:
      return { padding: 4, minHeight: 42 };
    case 24:
      return { padding: 10, minHeight: 54 };
    default:
      return { padding: 0, minHeight: 40 };
  }
};

export default function BorderlessInput({
  initialText = '내용을 입력해주세요',
  fontSize = 16,
  fontWeight = 500,
  id,
  attr,
}: BorderlessInputProps) {
  const [selected, setSelected] = useState(false);
  const [text, setText] = useState(initialText);

  const { padding, minHeight } = calculateStyles(fontSize);
  const dispatch = useAppDispatch();

  const handleBlur = () => {
    if (id && attr) {
      const payload = { id, [attr]: text };
      dispatch(updateCard(payload));
    }
    setSelected(false);
  };

  const handleClick = () => {
    setSelected(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <Container>
      {selected ? (
        <TextArea
          onBlur={handleBlur}
          onChange={handleChange}
          value={text}
          fontSize={fontSize}
          fontWeight={fontWeight}
          rows={1}
          $paddingTop={padding}
          required
          onFocus={e => e.target.select()}
          $minHeight={minHeight}
        />
      ) : (
        <NormalDiv
          onClick={handleClick}
          fontSize={fontSize}
          fontWeight={fontWeight}
          $paddingTop={padding}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {text}
        </NormalDiv>
      )}
    </Container>
  );
}
