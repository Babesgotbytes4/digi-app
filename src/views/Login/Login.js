import React from "react";
import { useState } from "react";
import useAuth from "../../utilities/useAuth"
// import PinInput from "react-pin-input";

const Login = () => {
  const {handleLoginForm,
    handleNameInput,
    handlePinInput,
    name,
    pin,
    error
  
     } = useAuth();

  return (

    <>
<div>

  {error}
</div>
    <form onSubmit= {handleLoginForm}>
          <h3>User Name</h3>
          <input
            type="text"
            onChange={handleNameInput}
            value={name}
          />
    
    <h3>Enter Pin</h3>
          <input
            type="numeric"
            onChange={handlePinInput}
            value={pin}
          />

          <button type="submit">
            Login
          </button>
          <br>
          </br>
          <button type="submit">
            Logout
          </button>
    </form>
</>
    
    
    );
    };

export default Login;
