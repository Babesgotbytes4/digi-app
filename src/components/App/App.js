
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Shell from '../Shell';
import Assessments from '../../views/Assessments';
import Profile from '../../views/Profile';
import Register from '../../views/Register';

import Login from '../../views/Login';
import { Dropdown } from '../../views/Dropdown/Dropdown';
import Home from '../../views/Home';
import SingleAssessment from "../../views/SingleAssessment/SingleAssessment"

export const App = () => {
  return (
    <BrowserRouter>
      <Shell>
        <Switch>
         
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/assessment/:assessmentId">
            <SingleAssessment />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/Dropdown">
            <Dropdown />
            </Route>

          <Route path="/start">
            <Home />
           </Route>

          <Route path="/">
            <Assessments />
          </Route>

        </Switch>
      </Shell>
    </BrowserRouter>

  )
}

export default App;