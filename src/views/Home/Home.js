import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import logo from "./logo.png";

export const Home = () => {
  return (
    <div>
      <img src={logo} alt="Logo" />;

      <Button href={"/login"}>
        Login 
      </Button>
      
      <Button href={"/register"}>
        Register
      </Button>
    </div>
  );
};

export default Home;
