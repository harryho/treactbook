import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RoundedButton } from "./components/RoundedButton";
import Button from "@material-ui/core/Button";

const helloFunc = () => {
  alert("Hello");
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <RoundedButton color="maroon" onClick={helloFunc}>
          Click Me
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
        <h1></h1>
        <Button variant="contained" color="primary">
          MUI Button
        </Button>
      </header>
    </div>
  );
};

export default App;
