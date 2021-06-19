import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { Button, Accordion ,FormLabel} from "@material-ui/core";
import styled from "styled-components";
// import { QuestionAnswer } from "@material-ui/icons";
// import Smilly from '../Smilly'
// import Assessments from "../Assessments"

const List = styled.div`
  && {
   
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
  return results;
};

const SingleAssessment = () => {
  const [question, setQuestion] = useState(1)
  const [answer, setAnswer] = useState(1)
  const { assessmentId } = useParams();
  const [singleAssessment, setSingleAssessment] = useState(
    getAssessment(assessmentId)
  )

  // console.log(singleAssessment);
const handleNextQuestion = () =>{
  setQuestion(question + 1)
}

const handleCorrectAnswer = () => {
  setAnswer(answer)
}


const activeQuestion = singleAssessment.questions[question - 1]

  return (
    <div className="menu">
      <div>{singleAssessment.difficulty}</div>
      <div>{singleAssessment.name}</div>
      <div>
     
        <div dangerouslySetInnerHTML={{__html:activeQuestion.description.html}}/>
       <div>{activeQuestion.options.map(answer => {
         return(
         <div><button onClick={handleCorrectAnswer}>{answer}</button></div>
         )
       })}</div>
        <button onClick={handleNextQuestion}>Next</button>
      </div>

      {/* {singleAssessment.questions.map(({id, description:{html}}) => (
        <List dangerouslySetInnerHTML={{__html:html}} />
        
      ))} */}
    </div>
  );
};

export default SingleAssessment;
