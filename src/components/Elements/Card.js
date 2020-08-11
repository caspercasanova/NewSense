import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 10px;
  border-radius: 4px;
  background-color:  hsla(0, 0%, 9%, .3);
  border: 1px solid  hsl(0, 0%, 9%);
  margin-top: 5px;
  margin-bottom: 5px;
`;
const StyledHeader = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  & h2 {
    color: var(--color-purple);
  }
  & hr {
    width: 100%;
    color: var(--color-purple);
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-top: 2px;
  padding-bottom: 2px;
`;

export default function Card({ header, children, footer }) {
  return (
    <CardContainer>
      {header
        && (
        <StyledHeader>
          <h2>{header}</h2>
          <hr />
        </StyledHeader>
        )}
      {children}
      {footer
      && (
      <FooterContainer>
        {footer}
      </FooterContainer>
      )}
    </CardContainer>
  );
}
