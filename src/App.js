import React from "react";
import { button } from "@material-ui/core";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>DigiApp</h1>
      </header>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Lets tour in the Digital world</p>
      <button className="Signin" type="submit">
        Sign in
      </button>{" "}
      <br />
      <p>You do not have an account?</p>
      <a
        className="Signup"
        href="https://www.figma.com/proto/eXdpe6JUcrnbiHYCfFXTgB/DigiApp?node-id=1%3A2&scaling=scale-down&page-id=0%3A1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Signup
      </a>
    </div>
  );
}

export default App;
