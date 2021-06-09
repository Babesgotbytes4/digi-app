import React from "react";
import '../../index.css'
import cup from "./bronze.jpeg";

import styled from "styled-components";
// import { Button } from "@material-ui/core";
 
const Image = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 25%;
`;

export const Bronze = () => {
  // const IconButton = () =>{
  return (
    <>
    <Image src={cup} alt="Cup" ></Image>
    <br />
   <h1>GREAT!</h1>
   <p>You did really well, we recommend you to do a new course</p>
   <button type="submit">TRY AGAIN</button>
   <br />
   <button type="submit">BACK TO ASSESSMENTS</button>
    </>
  );
  }

export default Bronze;
