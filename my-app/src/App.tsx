import React from 'react';

import Componenty from './componenty';
import { summy } from 'poc-ts-example';

import './App.css';

const App: React.FC = () => {
  const a = 15;
  const b = 13;
  return (
    <div className="App">
      <header className="App-header">
      <h1> A + B = {summy(a, b)} </h1>
      <Componenty age={summy(a, b)}/>
      </header>
    </div>
  );
}

export default App;
