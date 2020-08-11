import React from 'react';
import styled from 'styled-components';

const StyledDivider = styled.div`
  width: 100%;
  border: none;  
  margin-top: 10px;
  margin-bottom: 10px;
  & h2{
    color: var(--color-orange);
  }

  & hr{
    color: var(--color-orange);
    width: 100%;
    height: 2px;
  }
`;

const Divider = ({ title }) => {
  return (
    <StyledDivider>
      {title && <h2>{title}</h2>}
      <hr />
    </StyledDivider>
  );
};

export default Divider;
