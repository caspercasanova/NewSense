import React from 'react'
import Countdown from '../../components/Widgets/Countdown';

export default function PreviousUpdates() {
  return (
    <>
      <div style={{ width: '22em', margin: 'auto auto' }}>
        <h2>Sorry for the inconvienence</h2>
        <p>N.S.A. is currently undergoing a major code refactor.</p>
        <p>The development team is currently working on the following:</p>
        <p>- Converting Our Server Routes To Cloud Function</p>
        <p>- Testing New Design Aesthetitic</p>
        <hr />
        <p>Estimated Time Until We Are Back Up And Properly Running</p>
        <Countdown date="2020-07-13" />
      </div>
    </>
  );
};
