import React from "react";
import { IconButton } from "@material-ui/core";
import styled from "styled-components";
import logo from "./componets/App/logo.png";

export const Home = () => {
  return (
    <div>
      <img src={logo} alt="Logo" />;

      <IconButton href={`#/login`}>
        <login />
      </IconButton>
      
      <IconButton href={`#/register`}>
        <register />
      </IconButton>
    </div>
  );
};

export default Home;
