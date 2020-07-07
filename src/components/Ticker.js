import React,{useState} from 'react'
import Field from './Elements/Field'
import Modal from './Elements/Modal'
import {useInterval} from './utils'
import useCollection from '../firebase/useCollection'
/* 

TODO: Add Input/submition Checks(length, profanity) 
TODO: Perhaps convert to Object model and commentor has name/insta attached to end of comment 
TODO: Fix Animation of P tags

*/

export default function Ticker() {
  const [phrases, setPhrases] = useState(['Keep Cool', 'Smoother Than Olive Oil On Marble', 'Redeem 0131310 @ checkout for 5% off', 'Hey Youre A Great Developer', 'Be Viral', 'Keep It Real At All Costs', 'All Be Demanded', 'Have You Smiled Today?', 'I Love You', 'Reach me @ Nhjlopez@gmail.com', 'Stay Up Famskies, We In This Together #fuckcovid', 'Reach me @ 0131310 on twitter', 'click for 1% Off For Life'])
  const [newPhrase, setNewPhrase] = useState('')
  const [modal, setModal] = useState(false) 
  const [phrase, setPhrase] = useState(phrases[Math.floor(Math.random() * phrases.length)])

  
  useInterval(() => {
    setPhrase(phrases[Math.floor(Math.random() * phrases.length)])
  }, 15000)


  const tickerbarData = useCollection('tickerbar')
  console.log(tickerbarData)
  // add phrase to the phrases array
  const addNewPhrase = () => {
    let newArray = phrases.slice(1)
    setPhrases([...newArray, newPhrase])
    setModal(false)
  }

  return (
    <>
      <div className='TickerBar'>
        <button className='basic_btn' onClick={()=>setModal(!modal)}>Add A Phrase</button>
        <div className='ticker_feed'> 
          <p>{phrase}</p>
        </div>
      </div>
      
      
      {modal === true && 
      <Modal header={"Submit A New Phrase"} closeModal={()=>setModal(false)}>
        

        {phrases.map((phrase, index) => (
          <p key={index}>{phrase}</p>
        ))}

        <Field
          label="New Phrase"
          id="NewPhrase"  
          value={newPhrase}
          onChange={(e)=> setNewPhrase(e.target.value)}
        />
        <button onClick={addNewPhrase} className="basic_btn">Submit Phrase</button>
      </Modal>}
    </>
  
  )
}