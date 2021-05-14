import React, { useEffect, useState } from 'react'
import './App.css';
import cms from './api/cms/cms'
import app from './api/app/app';
import users from './api/users/users'

const error = users.addUser({ name: "phelisa", pin: "1234", confirmPin: "1234"});
console.log(error)
function App() {
  const [assessments, setAssessments] = useState([]);

  const checkAndSync = async () => {
    if(app.calcIfShowIdSync()) {
      const response = await cms.syncAssessments();
      setAssessments(response);
    }
    
    const response = JSON.parse(window.localStorage.getItem("assessments"))
    setAssessments(response);
  };

  useEffect(() => checkAndSync(), []);

  return (
    <div>
      <div>
        {assessments.map(({ name }) => (
          <div>{name}</div>     
        ))}
      </div>
    </div>
  );
  
  
}

export default App;
