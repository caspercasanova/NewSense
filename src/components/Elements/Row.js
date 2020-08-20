import React from 'react'
import styled from 'styled-components';

const RowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export default function Row({children}) {
  return (
    <RowContainer>
      {children}
    </RowContainer>
  );
}
