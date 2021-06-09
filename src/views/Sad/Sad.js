import React from "react";
import '../../index.css'
import emoji from "./sad.png";

import styled from "styled-components";
// import { Button } from "@material-ui/core";
 
const Image = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 25%;
`;

const Paragraph = styled.p`
    text-align: right;
`

export const Sad = () => {
  // const IconButton = () =>{
  return (
    <>
    <Paragraph>SCORE</Paragraph>
    <Image src={emoji} alt="Emoji" ></Image>
    <br />
   <p>INCORRECT!</p>
   <p>when you answer a question try to explain what are you suggesting and why, rather than simply ight or might not</p>
   <button type="submit">PROCEED</button>
    </>
  );
  }

export default Sad;
