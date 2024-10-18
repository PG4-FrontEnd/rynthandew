import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../utils/hooks.ts';
import { updateCard } from '../store/cardSlice.ts';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const getIconUrl = (iconLeft: string, iconSize: number) => {
  switch (iconLeft) {
    case 'search':
      return `url("data:image/svg+xml,%3Csvg width='${iconSize}' height='${iconSize}' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.7549 14.255H14.9649L14.6849 13.985C15.6649 12.845 16.2549 11.365 16.2549 9.755C16.2549 6.165 13.3449 3.255 9.75488 3.255C6.16488 3.255 3.25488 6.165 3.25488 9.755C3.25488 13.345 6.16488 16.255 9.75488 16.255C11.3649 16.255 12.8449 15.665 13.9849 14.685L14.2549 14.965V15.755L19.2549 20.745L20.7449 19.255L15.7549 14.255ZM9.75488 14.255C7.26488 14.255 5.25488 12.245 5.25488 9.755C5.25488 7.26501 7.26488 5.255 9.75488 5.255C12.2449 5.255 14.2549 7.26501 14.2549 9.755C14.2549 12.245 12.2449 14.255 9.75488 14.255Z' fill='black' fill-opacity='0.54'/%3E%3C/svg%3E%0A")`;
    default:
      return '';
  }
};

const Input = styled.input<{
  fontSize: number;
  width: number;
  height: number;
  $error: string;
  $background: string;
  $iconLeft: string;
}>`
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
  padding: 2px 10px;
  font-size: ${props => `${props.fontSize}px`};
  color: #000000;
  border-radius: 8px;
  border: ${props =>
    props.$error ? '2px solid #F44336' : '1px solid #cdd3d8'};
  background-color: ${props => props.$background};
  outline: none;

  &::placeholder {
    color: #acb4bb;
    background-image: ${props => (props.$iconLeft ? props.$iconLeft : '')};
    background-repeat: no-repeat;
    padding-left: ${props => (props.$iconLeft ? '24px' : '0px')};
    background-position-y: center;
  }

  &:focus {
    border: ${props =>
      props.$error ? '2px solid #F44336' : '1px solid #0086cb'};
    outline: ${props =>
      props.$error ? '0px solid #F44336' : '1px solid #0086cb'};
  }

  &:hover {
    border: ${props =>
      props.$error ? '2px solid #F44336' : '1px solid #005580'};
  }
`;

const Label = styled.span`
  color: #000000;
  font-size: 14px;
  margin-bottom: 8px;
`;

const Error = styled.span`
  color: #f44336;
  font-size: 14px;
  margin-top: 8px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

export default function CustomInput({
  placeholder,
  width,
  type = 'text',
  error = '',
  label = '',
  background = 'white',
  fontSize = 16,
  height = 42,
  iconLeft = '',
  iconSize = 20,
  required = false,
  initialValue = '',
  id,
  attr,
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState<string>(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id && attr) {
      const payload = { id, [attr]: value };
      dispatch(updateCard(payload));
    }
  }, [id, attr, value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <InputWrapper>
        <Input
          value={value}
          width={width}
          height={height}
          placeholder={placeholder}
          type={type}
          fontSize={fontSize}
          $error={error}
          $background={background}
          $iconLeft={getIconUrl(iconLeft || '', iconSize)}
          ref={inputRef}
          required={required}
          onChange={handleChange}
        />
      </InputWrapper>
      {error && <Error>{error}</Error>}
    </InputContainer>
  );
}
