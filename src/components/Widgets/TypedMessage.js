import React,{useMemo} from 'react'
import {animated, useTransition} from 'react-spring'
/* 
https://codeworkshop.dev/blog/2020-03-01-creating-an-rpg-dialog-effect-with-react-and-react-spring/ 
https://shakuro.com/blog/react-spring-tutorial-making-animated-react-apps
*/


/* 
split by characters -> useTransition to animate each char 


  useSpring — A single spring, moves data from a to b
  useSprings — Multiple springs mainly for lists, where each spring moves data from a -> b
  useTrail — Multiple springs with a single data set, one spring follows or trails behind the other
  useTransition — For mount/unmount transitions (lists where items are added/removed/updated)
  useChain — To queue or chain multiple animations together


*/
const TypedMessage = ({message}) => {
  const items = useMemo(
    () =>
      message.split("").map((letter, index) => ({
        item: letter,
        key: `${letter}${index}`
      })),
    [message]
  );


  const transitions = useTransition(items, item => item.key, {
    trail: 35,
    from: {display: "none"},
    enter: {display: ""}
  });

  return(
    <div  className="DialogMessage">
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.span  key={key} style={props}>
            {item.item}
          </animated.span>
        );
      })}
    </div>
  );
};

export default TypedMessage