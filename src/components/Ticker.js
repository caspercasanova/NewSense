import React,{useState, useEffect, useRef} from 'react'
//https://overreacted.io/making-setinterval-declarative-with-react-hooks/
//great article on hooks & intervals 

export default function Ticker() {
  let phrases = [ 'Hey Youre A Great Developer', 'Have You Smiled Today?', 'I Love You', 'Reach me @ Nhjlopez@gmail.com', 'Stay Up Famskies, We In This Together #fuckcovid', 'Reach me @ 0131310 on twitter',]
  
  let [phrase, setPhrase] = useState(phrases[Math.floor(Math.random() * phrases.length)])
  const savedCallback = useRef()
  

  function callback(){
    //can read fresh props, state, etc
    setPhrase(phrases[Math.floor(Math.random() * phrases.length)])
  }

  //after every render, save the latest callback into our ref
  useEffect(()=>{
    savedCallback.current = callback
  })

  useEffect(()=>{
    //run that saved cb
    function tick(){
      savedCallback.current()
    }
    let newPhrase = setInterval(tick, 15000)
    return () => clearInterval(newPhrase);
  }, [])

  return (
    <div className='ticker_bar'> 
      <p>{phrase}</p>
    </div>
  )
}