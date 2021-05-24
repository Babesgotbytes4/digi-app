import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
    background-color: #ccb3ff;
    padding: 5px 70px;
    width: 700px;
    height:  80px;
    margin-left: .5rem;
    
`


export const Assessments = () => {
    return <div><h1>Basic</h1>

    <Button href={"/login"}>
    Intro 
  </Button>
  <Button href={"/login"}>
    Keyboard 
  </Button>
  <Button href={"/login"}>
    Mouse + Mousepad
  </Button>
  <Button href={"/login"}>
    Other 
  </Button>
  </div>
};

export default Assessments;