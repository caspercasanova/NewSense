import React,{useState} from 'react'
import {animated, useTransition, useTrail} from 'react-spring'


const HashingAlgo = () =>{
  let primaryPhrases = ["Loading", "Connecting", "Launching", "Encrypting...", "Syncing...", "Mutating...", "Hashing..."]
  let secondaryPhrases = ["NSA", "project_allday", "psiOps", "05 v4.2.124 firmware vQB2006–7", "0131310", "pylon7B"]
  let tertiaryPhrases = [".exe", ".png", "/", ".pdf"]
  let letters = ["!@#$%^&*0123456789nwsensactivxyz?"]

  const [primaryIndex, setPrimaryIndex] = useState(0)
  const [secondaryIndex, setSecondaryIndex] = useState(0)
  const [tertiaryIndex, setTertiaryIndex] = useState(0)
  
  const dots = [".", ".", "."]
  
  const transitions = useTransition([], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  return(
    <>
      <div>{primaryPhrases[0]}</div>
      <div>{secondaryPhrases[0]}</div>

      {fadingTextPropsTransition.map(({ item, index, props }) => (
        <animated.div
          key={index}
          style={{ ...props, position: 'absolute' }}
        >
          <p>
            {item.title}
          </p>
        </animated.div>
      ))}
    </>
  )
 }
