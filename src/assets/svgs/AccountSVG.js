import React from 'react';
import styled from 'styled-components'
import Icon from '../../components/Elements/Icon'

const SVG = styled(Icon)`
  width: 25px;
  height: 24px;
`;

export default function AccountSVG({ className, onClickHandler }) {
  return (
    <SVG className={className} viewBox="0 0 24 30" onClick={onClickHandler} >
      <path
        d="M6 9a6 6 0 116 6 6 6 0 01-6-6zm11.36 5h-.47a6.977 6.977 0 01-9.78 0h-.469A4.641 4.641 0 002 18.64V21h20v-2.36A4.64 4.64 0 0017.36 14z"
        data-name="1"
        fill="var(--color-grey-ultra)"
      />
    </SVG>
  );
}
