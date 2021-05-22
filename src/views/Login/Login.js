import React from "react";
import { useState } from "react";
import PinInput from "react-pin-input";

const Login = () => {
  const [name, setItem] = useState("");

  return (
    <>
    
    <div>
      <h3>User Name</h3>
      <input
        type="text"
        onChange={(e) => setItem(e.target.value)}
        value={name}
      />
    </div>

     
      </>
    );
    };

export default Login;
