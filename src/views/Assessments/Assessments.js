import React, { useEffect, useState } from "react";
// import { Button } from "@material-ui/core";
import useAuth from "../../utilities/useAuth";
import styled from "styled-components";
// import Link from "../Link/Link";

import syncAssessments from "../../api/cms/cms";
import app from "../../api/app/app";

const List = styled.button`
background-color: #8E6984;
  padding: 2px;
  width: 100%;
  height: 80px;
  margin-left: 0.5rem;
  text-transform: uppercase;
`;



function Assessments() {
  const { handleLogOutButton } = useAuth({
    shouldBeLoggedIn: true,
  });

  const [assessments, setAssessments] = useState([]);

  const checkAndSync = async () => {
    if (app.calcIfShowIdSync()) {
      console.log(syncAssessments);
      const response = await syncAssessments();
      setAssessments(response); 
    } else {
      const response = JSON.parse(window.localStorage.getItem("assessments"));
      setAssessments(response);
    }

    
  };

  useEffect(() => checkAndSync(), []);

  return (
    <div>
      <div>
        <button onClick={handleLogOutButton}>Log out</button>
        {assessments !== null && assessments.map(({ name }) => (
          
            <div className="menu">
                <List className='btn' href={"/SingleAssessment"}>{name}</List>
            </div>
          
        ))}
      </div>
    </div>
  
  )
}
export default Assessments;
