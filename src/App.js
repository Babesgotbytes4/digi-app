import React from "react";
import { button } from "@material-ui/core";
import logo from "./logo.png";
import Register from './Register/Register.js'
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>DigiApp</h1>
      </header>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Lets tour in the Digital world</p>
      <button className="Signin" type="submit" href={<Register /> } >
        Sign in
      </button>{" "}
      <br />
      <p>You do not have an account?</p>
      <a
        className="Signup"
        href={<Register /> }
        target="_blank"
        rel="noopener noreferrer"
      >
        Signup
      </a>
    </div>
  );
}

export default App;
