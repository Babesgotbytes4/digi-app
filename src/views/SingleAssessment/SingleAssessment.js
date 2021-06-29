import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { all } from 'q';

/**
 * 
 * @typedef {object} htmlObj
 * @property {string} html 
 * @returns 
 */

/**
 * 
 * @typedef {object} question 
 * @property {htmlObj} description
 * @property {number} answer
 * @property {htmlObj} explanation
 * @property {string} id
 * @property {string[]} options
 */ 

/**
 * 
 * @typedef {object} assessment
    @property {string} difficulty
 * @property {string} name
 * @property {string} id
 * @property {question[]} questions
 * @property {number} timeInMinutes
 */
/**
 * 
 * @param {string} assessmentId 
 * @returns {assessment} 
 */

const getAssessment = (assessmentId) => {
  const assessmentsString = window.localStorage.getItem("assessments");
  const assessmentsData = JSON.parse(assessmentsString);
  
  const result = assessmentsData.find(
    (Assessment) => Assessment.id === assessmentId
  );
  return result;
};

/**
 * 
 * @param {any} params
 * @returns {string} 
 */

const extractAssessmentId = (params) => {
  if(!params.assessmentId || typeof params.assessmentId !== "string"){
    throw new Error("Invalid assessment ID")
  }
  return params.assessmentId;
};

const ButtonWrap = styled.div`
  padding: 1rem;
`

export const SingleAssessment = () => {
  const [viewingQuestion, setViewingQuestion] = useState(1);
  const [result, setResult] = useState(null); 
  const [allResults, setAllResults] = useState([]);
  const params = useParams();

  const [singleAssessment, setSingleAssessment] = useState(
    getAssessment(extractAssessmentId(params))
  );
  const questionsCount = singleAssessment.questions.length

  if (viewingQuestion === questionsCount) {
    const rightCount = allResults.filter((value) => value === "right").length;

    return (<div>
      <h1>Done!</h1>
      <div>{rightCount / questionsCount}</div>
      <div>{Math.floor((rightCount / questionsCount) * 100)} %</div>
      </div>)
  }

  const activeQuestion = singleAssessment.questions[viewingQuestion];
  const { answer, description, explanation, id, options } = singleAssessment.questions[viewingQuestion];
  
  // if(result === "wrong") {
  //   return <div>SAD</div>;
  // }

  // if(result === "right") {
  //   return <div>HAPPY</div>

  // }
  if(result) {
    return (
    <div>
    <h1>{result === "right" ? "RIGHT" : "wrong :"}</h1>;
    <div dangerouslySetInnerHTML={{__html: explanation.html}} />
    <Button 
    variant= "contained"
    onClick={() => {
      setViewingQuestion(viewingQuestion + 1);
      setResult(null)
    }}
    >
      CONTINUE
    </Button>
    </div>
    )
  }

  const checkAnswer = (index) =>
  {
    if (index + 1 === answer) {
    setResult("right");
    setAllResults([...allResults, "right"]);
    return;

    }
    setAllResults([...allResults, "wrong"]);
    setResult("wrong")
  };


  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: description.html}} />
      {options.map((value, index) => (
        <ButtonWrap key={value}>
          <Button variant="contained" onClick={() => checkAnswer(index)}>{value}</Button>
        </ButtonWrap>
      ))}
    </div>
  )
}

export default SingleAssessment