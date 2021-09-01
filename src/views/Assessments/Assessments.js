import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import useAuth from "../../utilities/useAuth";
import styled from "styled-components";
// import Link from "../Link/Link";

import syncAssessments from "../../api/cms/cms";
import app from "../../api/app/app";

const List = styled(Button)`
&&{
  background-color: #8E6984;
  text-color: white;
  padding: 2px;
  width: 100%;
  height: 80px;
  margin-left: 0.5rem;
  text-transform: uppercase;
}

`

;



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
console.log(assessments)
  return (
    <div>
      <div>
        <button onClick={handleLogOutButton}>Log out</button>
        
        {assessments.map(({ name,id }) => (
          
            <div className="menu">
                <List className='btn' href={`/assessment/${id}`}>{name}</List>
            </div>
          
        ))}
      </div>
    </div>
  )
}
export default Assessments;
