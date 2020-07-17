import React, { useState } from 'react';
import { useInterval } from '../../Utilities/utils';

import ProgressBar from '../../svgs/ProgressBar';

export default function Checklist() {
  const [progress, setProgress] = useState(0);
  const completed = progress === 100;
  useInterval(() => {
    progress === 100 ? setProgress(1) : setProgress(progress++);
  }, 50);
  return (
    <div>
      <h3 className='blink_soft'>Loading:{ completed === true ? "Completed" : "..." }</h3>
      <ProgressBar progress={progress} />
    </div>
  );
}
