import React, {Fragment, useEffect, useState} from 'react'

export default function LetSuspense({
  condition,                        // (bool)Determines when components should be rendered
  placeholder: Placeholder,         // (react.component) A component that will be rendered as long as condition is false
  multiplier,                       // (Number) Number of placholders to be rendered
  initialDelay,                     // (Number) Minimum time in milliseconds before a component is rendered
  checkOnce,                        // (bool) Checks the condition just once, useful for data that doesnt need to be rerendered even if the condition changes
  children                          // the actual components
}){
  const [component, setComponent] = useState([])
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // make sure the condition check happens just once if hte check once is true
    if(checkOnce && isChecked){
      setComponent([children])
      return
    }

    let delay = initialDelay || 0;
    let delayedTimeout = null;
    //render actual component when condition is true
    if(condition){
      if(initialDelay){
        delayedTimeout = setTimeout(() => {
          setComponent([children])
        }, delay);
      } else {
        setComponent([children])
      }
      setIsChecked(true)
    } else {
      // render the placeholder as long as condition is false
      let tempComponent = []
      let multiplierX = multiplier || 1;
      for( let i = 0; i < multiplierX; i++ ){
        tempComponent.push( <Placeholder key={i} /> )
      }
      setComponent(tempComponent)
    }
    
    return () => {
      if(delayedTimeout){
        clearTimeout(delayedTimeout)
      }
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [condition, children])

return (
  <Fragment>
    {component.map((component, index) => (
      <Fragment key={index}>{component}</Fragment>
    ))}
  </Fragment>
)}