import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let [name, setName] = useState('moonCoding')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{name}</div>
      </header>
    </div>
  );
}

export default App;
