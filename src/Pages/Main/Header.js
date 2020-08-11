import React from 'react'
import styled from 'styled-components'
import TypedMessage from '../../components/Elements/TypedMessage';
import useToggle from '../../Utilities/hooks/useToggle';

const Logo = () => {
  const [hovered, toggleHovered] = useToggle();
  return (
    <div style={{ display: 'flex' }}>
      <div onMouseOver={toggleHovered} onMouseOut={toggleHovered}>
        {
          !hovered
          && (
            <h1 className="blink_soft" style={{ marginLeft: '10px' }}>
            <TypedMessage message="New Sense Active" />
          </h1>
          )
        }
        {
        hovered
        && (
          <h1 className="blink_soft" style={{ marginLeft: '10px' }}>
            <TypedMessage message="All Be Demanded" />
          </h1>
          )
        }
      </div>
    </div>
  );
};




const HeaderContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.27) 0px 2px 3px 2px;
  display: flex;

`;
export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  )
}
