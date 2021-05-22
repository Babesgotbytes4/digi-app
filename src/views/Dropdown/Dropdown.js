import React from 'react';
import styled from "styled-components";
import { Button } from "@material-ui/core";
 


const Paragraph = styled.form`
padding: 60px;
text-align: center;
background: white;
color: black;
font-size: 30px;
`;

const Container = styled.p`
background-color: smocky ;
width: 80%;

margin: 10px auto;
padding-bottom: 10px;

`
const Label = styled.p`
height: 30px;
  justify-self: start;

`


export const Dropdown = (props) => {
  const {disabled} = props;


    return (
    <Container>
 

<Paragraph>Let us know a little about you.</Paragraph>
<Label for='dropdown'>SELECT YOUR LOCATION :</Label>
  <select id='dropdown'>
  <option disabled selected value>Select an option</option>
  <option value="option 1">Khayelitsha</option>
   <option value="option 2">Gugulethu</option>
 <option value="option 2">Phillipi</option>
 <option value="option 2">Langa</option>
 <option value="option 2">Samora Machel</option>
 <option value="option 2">Other</option>
  </select>
 

  <br />
  <br />
  <br />
<div>
  <Label for='dropdown-catagory'>WHICH CATAGORY YOU BELONG TO :</Label>
  <select id='dropdown-catagory'>
  <option disabled selected value>Select an option</option>

    <option value='Teacher' required>Teacher</option>
    <option value='Adult'  required>Adult</option>
    <option value='High Schol Student'  required>High Schol Student</option>

  </select>
  </div>
  <br />
  <br />
  <label target>WHAT ARE YOUR GOALS :</label>
  
    <label for='a'><input type='checkbox' name='lt' id ='a' value='self-learning'  required/>Upskill</label>
     <label for='b'><input type='checkbox' name='lt' id ='b' value='learning with teacher'  required />Employmeny</label>
     <label for='c'><input type='checkbox' name='lt' id ='c' value='group learning'  required/>Pesronal Use</label>
    <br />
    <br />
    <div>
    

    
    <Button href={"/Assessments"}>
        CONTINUE 
      </Button>

      <Button 
      href={disabled ? undefined : "/Assessments"}>
        SKIP
      </Button>
    
    
     </div>
    </Container>
    )
};

export default Dropdown;