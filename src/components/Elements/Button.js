import React from 'react'
import styled from 'styled-components'



const ButtonContainer = styled.button`
  position: relative;
  border: none;
  cursor: pointer;
  background: none;
  text-transform: uppercase;
  font-family: 'digital-7';
  display: inline-block;
  color: ${(props) => props.error ? 'var(--color-red)' : 'var(--color-cyan-ultra)'};
  padding: .5em .8em;
  color: ${(props) => props.error ? 'var(--color-red)' : 'var(--color-cyan-ultra)'};
  z-index: 1;
  box-shadow: 0px 0px 0px 1px $bg;
  transition: .2s ease-in;
  & hover{
    box-shadow:0px 0px 0px 4px ${(props) => props.error ? 'var(--color-red)' : 'var(--color-cyan-ultra)'} inset;
  }
  & active{
    background: darken(${(props) => props.error ? 'var(--color-red)' : 'var(--color-cyan-ultra)'}, 20%);
  }
`;


const Button = ({type, error, children, onClickHandler}) => {
  return (
    <ButtonContainer error={error} type={`${type}`} onClick={onClickHandler}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
