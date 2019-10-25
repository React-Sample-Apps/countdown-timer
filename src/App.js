import React from 'react';
import './App.css';
import CountDown from './Countdown'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Countdown to Christmas 2019</h1>        
      </header>
      <CountDown date={"Sep 24, 2019 23:59:01"} />
    </div>
  );
}

export default App;
