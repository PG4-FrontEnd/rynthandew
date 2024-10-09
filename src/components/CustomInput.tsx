import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input<{
  width: number;
  $error: string;
  $background: string;
  fontSize: number;
  height: number;
  $iconLeft: string;
}>`
  padding: 1px 10px;
  font-size: ${props => `${props.fontSize}px`};
  color: #000000;
  border-radius: 8px;
  border: ${props =>
    props.$error ? '2px solid #F44336' : '1px solid #cdd3d8'};
  background-color: ${props => props.$background};
  outline: none;
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};

  &::placeholder {
    color: #acb4bb;
  }

  &::-webkit-input-placeholder {
    background-image: ${props =>
      props.$iconLeft
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3C/svg%3E")`
        : ''};
    background-repeat: no-repeat;
    padding-left: ${props => (props.$iconLeft ? '30px' : '0px')};
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

export function CustomInput({
  placeholder,
  width,
  type,
  error = '',
  label = '',
  background = 'white',
  fontSize = 16,
  height = 42,
  iconLeft,
}: InputProps) {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <Input
        width={width}
        placeholder={placeholder}
        type={type}
        $error={error}
        $background={background}
        fontSize={fontSize}
        height={height}
        $iconLeft={iconLeft}
      />
      {error && <Error>{error}</Error>}
    </InputContainer>
  );
}
