import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Accordion } from "@material-ui/core";
import styled from "styled-components";
import { QuestionAnswer } from "@material-ui/icons";
// import Assessments from "../Assessments"

const List = styled(Button)`
  && {
    background-color: #8e6984;
    padding: 2px;
    width: 100%;
    height: 80px;
    margin-left: 0.5rem;
    text-transform: uppercase;
  }
`;

const getAssessment = (assessmentId) => {
  const assessmentsString = window.localStorage.getItem("assessments");
  const assessmentsData = JSON.parse(assessmentsString);
  const results = assessmentsData.find(
    (assessment) => assessment.id === assessmentId
  );
  console.log(results);
  return results;
};

const SingleAssessment = () => {
  const { assessmentId } = useParams();
  const [singleAssessment, setSingleAssessment] = useState(
    getAssessment(assessmentId)
  );

  // console.log(singleAssessment);

  return (
    <div className="menu">
      <div>{singleAssessment.difficulty}</div>
      <div>{singleAssessment.name}</div>

      {singleAssessment.questions.map(({id, questions}) => (
        <List className="btn" href={`/singleAssessment.questions/${'questions'}`}>
          {questions}
        </List>
      ))}
    </div>
  );
};

export default SingleAssessment;
