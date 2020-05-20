import React from 'react';
import './App.scss';
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'

import Ticker from './components/Ticker'

function App() {
  return (
    <div className="App">
      <Header />
      <Ticker />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
