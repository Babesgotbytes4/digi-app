import React from "react";
import {Button} from "@material-ui/core";
import styled from "styled-components";
import logo from "./logo.png.jpeg";

export const Home = () => {
  const IconButton = () =>{
  return (
    <>
    <img src={logo} alt="Logo" />
    
    <div>
      

      <IconButton href={`/login`}>
        <login />
      </IconButton>
      
      <IconButton href={`/register`}>
        <register />
      </IconButton>
    </div>
    </>
  );
  }
};

export default Home;
