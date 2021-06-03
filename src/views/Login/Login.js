import React from "react";
import useAuth from "../../utilities/useAuth";
// import PinInput from "react-pin-input";

const Login = () => {
  const { handleLoginForm, handleNameInput, handlePinInput, name, pin, error } =
    useAuth();

  return (
    <>
      
      <form onSubmit={handleLoginForm} className="form">
        <h3>User Name</h3>
        <input type="text" onChange={handleNameInput} value={name} />

        <h3>Enter Pin</h3>
        <input type="numeric" onChange={handlePinInput} value={pin} />
<br/>
        <button type="submit">Login</button><p>or</p><a href='../Register/Register'>Sign up</a>
        <br />
        <div>{error}</div>
        <br></br>
      </form>
    </>
  );
};

export default Login;
