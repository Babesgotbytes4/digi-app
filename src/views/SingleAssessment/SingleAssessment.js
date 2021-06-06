import React, { useState } from "react"
import {useParams} from "react-router-dom"
import { Button } from "@material-ui/core";
import styled from "styled-components";
// import Assessments from "../Assessments"

const List = styled(Button)`
&&{
  background-color: #8E6984;
  padding: 2px;
  width: 100%;
  height: 80px;
  margin-left: 0.5rem;
  text-transform: uppercase;
}

`

const getAssessment =(assessmentId)=>{
  const assessmentsString = window.localStorage.getItem("assessments")
  const assessmentsData = JSON.parse(assessmentsString)
  const results = assessmentsData.find(assessment => assessment.id === assessmentId)
  console.log(results);
  return results;
  
}

const SingleAssessment = () => {
const {assessmentId } = useParams();
const [singleAssessment, setSingleAssessment] = useState(getAssessment(assessmentId))

// console.log(singleAssessment);

    return ( 
        <div className="menu">
         {singleAssessment.map(({ name,id ,difficulty}) => (
          
          <div className="menu">
              <List className='btn' href={`/singleAssessment/${id}`}>{name}</List>
          </div>
        
      ))}
            <div>{singleAssessment.difficulty}</div>
        </div>
      
    
        
    )
}

export default SingleAssessment;