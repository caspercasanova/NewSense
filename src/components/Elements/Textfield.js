import React from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.div`
width: 26em;
max-width: 100%;
line-height: 1.5;
font-size: 15px;
padding-top: .3em;
padding-bottom: 1em;
padding-left: 1.5em;
padding-right: 1.5em;
border-radius: 4px;
box-shadow: 0 0 5px 0px rgba(128, 128, 128, .25);
& p{
  max-width: 60ch;
}
`;

export default function Textfield({ children }) {
  return (
    <ArticleContainer>
      {children}
    </ArticleContainer>
  );
}
