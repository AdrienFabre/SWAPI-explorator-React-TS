import React from 'react';
import logo from './images/starWarsLogo.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Explore The Universe</p>
      </header>
    </div>
  );
};

export default App;
