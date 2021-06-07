import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import useDropdown from "./useDropdown";

const Paragraph = styled.p`
  padding: 60px;
  text-align: center;
  background: white;
  color: black;
  font-size: 30px;
`;

const Container = styled.form`
  background-color: smocky;
  width: 80%;

  margin: 10px auto;
  padding-bottom: 10px;
`;
const Label = styled.p`
  height: 30px;
  justify-self: start;
`;

export const Dropdown = (props) => {
  const { disabled } = props;
  const { category,message, handleFormSubmit, location, goals, handleCategoryInput, handleGoalsInput, handleLocationInput } = useDropdown()

  return (
    <Container onSubmit={handleFormSubmit}>

      <Paragraph>Let us know a little about you.</Paragraph>
      <br />
      <div>{message}</div>
      <Label for="dropdown">SELECT YOUR LOCATION :</Label>
      <select id="dropdown" onChange={handleLocationInput}>
       <option value={null} selected={location === null}>PLease select</option>
        <option value="Khayelitsha" selected={location === "Khayelitsha"}>Khayelitsha</option> {" "}
        <option value="Gugulethu" selected={location === "Gugulethu"}>Gugulethu</option>
        <option value="Phillipi" selected={location === "Phillipi"}>Phillipi</option>
        <option value="Langa" selected={location === "Langa"}>Langa</option>
        <option value="Samora Machel" selected={location === "Samora Machel"}>Samora Machel</option>
        <option value="Other" selected={location === "Other"}>Other</option>
      </select>

      <br />
      <br />
      <br />
      <div>
        <Label for="dropdown-catagory">WHICH CATAGORY YOU BELONG TO :</Label>
        <select id="dropdown-catagory" onChange={handleCategoryInput}>
          
        <option value={null} selected={category === null}>PLease select</option>
          <option value="Teacher" selected={category === "Teacher"}>Teacher</option>
          <option value="Adult" selected={category === "Adult"}>Adult</option>
          <option value="High Schol Student" selected={category === "High School Student"}>High Schol Student</option>
        </select>
      </div>
      <br />
      <br />
      <label target>WHAT ARE YOUR GOALS :</label>

      <label for="a">
        <input
          type="checkbox"
          name="lt"
          id="a"
          value="self-learning"
          onChange={handleGoalsInput}
          checked={goals === "self-learning"}
        />
        Upskill
      </label>
      <label for="b">
        <input
          type="checkbox"
          name="lt"
          id="b"
          value="learning with teacher"
          onChange={handleGoalsInput}
          checked={goals === "learning with teacher"}
        />
        Employmeny
      </label>
      <label for="c">
        <input
          type="checkbox"
          name="lt"
          id="c"
          value="group learning"
          onChange={handleGoalsInput}
          checked={goals === "group learning"}
        />
        Pesronal Use
      </label>
      <br />
      <br />
      <div>
       
        <Button type="submit">CONTINUE</Button>

        <Button href={disabled ? undefined : "/Assessments"}>SKIP</Button>
      </div>
    </Container>
  );
};

export default Dropdown;
