import React from 'react';
import styled from 'styled-components';

const FieldContainer = styled.div`
  position: relative;
  margin-top: 25px;
  margin-bottom: 10px;
  font-family: 'digital-7';
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  padding: 0px 0px 10px 0px;
  border: none;
  border-left: 1px solid var(--color-purple);
  border-bottom: 1px solid var(--color-purple);
  color: var(--color-purple);
  font-size: 16px;
  padding-left: .3em;
  letter-spacing: .3em;
  transition: 0.5s;
  &:focus {
    outline: 0;
  }
`;
const Labels = styled.label`
  position: absolute;
  display: block;
  padding: 0.5em;
  transition: 0.5s;
  cursor: inherit;
  top: -80%;
  color:  ${(props) => props.error ? 'var(--color-red)' : 'var(--color-purple)'};
`;

const Field = ({id, label, type, placeholder, required, autoComplete, value, onChange, error}) => {
  return (
    <FieldContainer>
      <Input
        className="FieldInput"
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
      <Labels htmlFor={id} error={error}>
        {error ? error : label}
      </Labels>
    </FieldContainer>
  )
}

export default Field;
