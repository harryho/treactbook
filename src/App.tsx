import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RoundedButton } from './components/RoundedButton';

const helloFunc = ()=> {
  alert("Hello");
}

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <RoundedButton color="maroon" onClick={helloFunc}>
          New Button
        </RoundedButton>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
