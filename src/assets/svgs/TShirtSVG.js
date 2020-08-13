import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/Elements/Icon';

const SVG = styled(Icon)`
  height: 35px;
  width: auto;
  cursor: pointer;
`;

export default function TShirtSVG({classname, color = "var(--color-grey-ultra)", onClickHandler}) {
  return (
    <SVG fillRule="evenodd" className={classname} onClick={onClickHandler} clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 17.394 20.768">
      <path
        d="M6.466 0c-.661.175-3.36 1.22-3.79 1.602-.12.107-1.97 4.533-2.674 5.508-.083.132 3.18 1.36 3.786 1.6v7.904h9.818V8.71c.606-.24 3.87-1.468 3.787-1.6-.705-.975-2.554-5.4-2.675-5.508C14.288 1.22 11.59.175 10.928 0c-.484 1.839-3.978 1.838-4.462 0z"
        className="fil0"
        fill={color}
      />
    </SVG>
  );
}
