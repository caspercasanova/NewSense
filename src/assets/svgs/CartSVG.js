import React from 'react';
import styled from 'styled-components'
import Icon from '../../components/Elements/Icon'

const SVG = styled(Icon)`
  height: 35px;
  width: auto;
`;

export default function CartSVG({classname, color = "var(--color-grey-ultra)", onClickHandler}) {
  return (
    <SVG data-name="Layer 1" viewBox="0 0 100 125" className={classname} onClick={onClickHandler}>
      <path fill={color} d="M93.256 24.3H31.654L29.048 7.38A2.793 2.793 0 0026.286 5H8.126a2.793 2.793 0 100 5.586h15.753l9.686 62.895a2.793 2.793 0 002.762 2.38h38.781a2.793 2.793 0 100-5.586H38.734l-.95-6.175h42.409a1.411 1.411 0 001.33-.94l13.063-36.98a1.411 1.411 0 00-1.33-1.88z" />
      <circle fill={color} cx="40.151" cy="87.22" r="7.78" />
      <circle fill={color} cx="71.316" cy="87.22" r="7.78" />
    </SVG>
  );
}
