import React, { useState } from 'react';
import Field from '../Elements/Field';
import Modal from '../Elements/Modal';
import useInterval from '../../Utilities/hooks/useInterval';
// import useCollection from '../../Firebase/firebase_hooks/useCollection';
import styled from 'styled-components';



// TODO: Add Input/submition Checks(length, profanity)
// TODO: Perhaps convert to Object model and commentor has name/insta attached to end of comment
// TODO: Fix Animation of P tags
const TickerBarContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const TickerBar = styled.div`
  width: 100%;
  padding: 0.5em;
  overflow: hidden;
  position: relative;
  & ::after, ::before {
    content: '';
    top: 0;
    position: absolute;
    height: 100%;
    width: 2px;
    background-color: var(--color-cyan);
  }
  & :before {
    left: 0;
  }
  & :after {
    right: 0;
  }
  & p {
    animation: left-to-right 15s linear infinite;
  }
  
`;


export default function Ticker() {
  const [phrases, setPhrases] = useState(['Keep Cool', 'Smoother Than Olive Oil On Marble', 'Redeem 0131310 @ checkout for 5% off', 'Hey Youre A Great Developer', 'Be Viral', 'Keep It Real At All Costs', 'All Be Demanded', 'Have You Smiled Today?', 'I Love You', 'Reach me @ Nhjlopez@gmail.com', 'Stay Up Famskies, We In This Together #fuckcovid', 'Reach me @ 0131310 on twitter', 'click for 1% Off For Life']);
  const [newPhrase, setNewPhrase] = useState('');
  const [modal, setModal] = useState(false);
  const [phrase, setPhrase] = useState(phrases[Math.floor(Math.random() * phrases.length)]);

  useInterval(() => {
    setPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
  }, 15000);

  // const tickerbarData = useCollection('tickerbar');
  // console.log(tickerbarData)
  // add phrase to the phrases array
  const addNewPhrase = () => {
    const newArray = phrases.slice(1);
    setPhrases([...newArray, newPhrase]);
    setModal(false);
  };

  return (
    <>
      <TickerBarContainer>
        <button type="button" className="basic_btn" onClick={() => setModal(!modal)}>Add A Phrase</button>
        <TickerBar>
          <p>{phrase}</p>
        </TickerBar>
      </TickerBarContainer>

      {modal === true
      && (
      <Modal header="Submit A New Phrase" closeModal={() => setModal(false)}>

        {phrases.map((phrase, index) => (
          <p key={index}>{phrase}</p>
        ))}

        <Field
          label="New Phrase"
          id="NewPhrase"
          value={newPhrase}
          onChange={(e) => setNewPhrase(e.target.value)}
        />
        <button type="button" onClick={addNewPhrase} className="basic_btn">Submit Phrase</button>
      </Modal>
      )}
    </>

  );
}
