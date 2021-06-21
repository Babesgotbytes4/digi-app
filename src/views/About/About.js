import React from "react";
import styled from "styled-components";
import { Button, Paper } from "@material-ui/core";
import image from "./lilitha.jpg";

const Paragraph = styled.form`
  padding: 60px;
  text-align: center;
  background: white;
  color: black;
  font-size: 30px;
`;
const StyledPaper = styled(Paper)`
&&{

  padding : 16px;
  margin : 16px;
}
`
const Container = styled.p`
  back
  ground-color: smocky;
  width: 80%;
  @media
  grid-template-columns: repeat(3, fr);

  margin: 10px auto;
  padding-bottom: 10px;
`;
const Image = styled.img`
  width: 100px;
`;

const List = styled.div`
display : flex;
`
const About = (props) => {
  const { disabled } = props;


  return (

    <Container>
      <h2>About Us</h2>
      <Paragraph>
        Hey team I am not sure if it is going to be a description of
        Babesgotbytes.
      </Paragraph>

     
     <h3>DigiApp developer team</h3>
     <List>

      <StyledPaper>
        <Image src={image} alt="" />

        <h4>Lilitha Ngele</h4>
        <p>Software developer</p>
        <p>ngelelilitha18@gmail.com</p>
        </StyledPaper>
        <StyledPaper>
        <Image src={image} alt="" />

        <h4>Lilitha Ngele</h4>
        <p>Software developer</p>
        <a href="mailto:ngelelilitha18@gmail.com">ngelelilitha18@gmail.com</a>
        </StyledPaper>
      </List>
      <Button href={disabled ? undefined : "/Assessments"}>Back</Button>
    </Container>
  );
};
export default About;
