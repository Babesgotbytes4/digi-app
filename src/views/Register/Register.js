import React from "react";
import useAuth from '../../utilities/useAuth'
// import ReactDOM from "react-dom";

function Register() {
 const { name,pin,confirmPin,error, handleNameInput, handleConfirmPinInput, handlePinInput, handleSignupForm}= useAuth({
  shouldBeLoggedOut: true

 })


  return (
    <form onSubmit={handleSignupForm} className="form">
      <h4 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Name:
        </label>
      </h4>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleNameInput}
      />
      <h4 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Pin:
          <br />
          <input
            type="number"
            length="4"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            value={pin}
            onChange={handlePinInput}
          />
        </label>
      </h4>

      <h4 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Confirm Pin:
        </label>
      </h4>
      <input
        type="number"
        length="4"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={confirmPin}
        onChange={handleConfirmPinInput}
      />
      <div>{error}</div>
      <button type="submit" className="btn ">
        Sign up
      </button>
    </form>
  );
}

export default Register;
