import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  position: relative;
  width: 64px;
  height: 30px;
  background: #1976d2;
  box-shadow:
    0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px rgba(0, 0, 0, 0.14),
    0px 1px 18px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`;

function Button({ onClick, children }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired, // onClick prop은 필수로 지정
  children: PropTypes.node.isRequired, // children prop은 필수로 지정
};

export default Button;
