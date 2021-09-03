import React, { useEffect, useState } from "react";
// import { Button } from "@material-ui/core";
import useAuth from "../../utilities/useAuth";
// import styled from "styled-components";

import Summary from '../../components/Summary'
// import Link from "../Link/Link";

import syncAssessments from "../../api/cms/cms";
// import app from "../../api/app/app";

// const List = styled(Button)`
// &&{
//   background-color: #c9ada7;
//   text-color: white;
//   font-weight:bold;
//   padding: 2px;
//   width: 100%;
//   height: 70px;
//   margin:2px;
//   margin-left: 0.5rem;
//   text-transform: uppercase;
// }
// `
function Assessments() {
  const { handleLogOutButton } = useAuth({
    shouldBeLoggedIn: true,
  });

  const [assessments, setAssessments] = useState([]);

  const checkAndSync = async () => {
    // if (app.calcIfShowIdSync()) {
      console.log(syncAssessments);
      const response = await syncAssessments();
      setAssessments(response); 
    // } else {
    //   const response = JSON.parse(window.localStorage.getItem("assessments"));
    //   setAssessments(response);
    // }

    
  };

  useEffect(() => checkAndSync(), []);
console.log(assessments)
  return (
    <div>
      <div>
        <button onClick={handleLogOutButton}>Log out</button>
      {console.log(assessments)}
        {assessments.map(({ name,id, difficulty, timeInMinutes  }) => (
                <Summary title={name} href={`/assessment/${id}`} difficulty={difficulty} timeAsMinutes={timeInMinutes}/>
        ))}
      </div>
    </div>
  )
}
export default Assessments;
