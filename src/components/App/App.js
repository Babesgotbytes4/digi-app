
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Shell from '../Shell';
import Assessments from '../../views/Assessments';
import Profile from '../../views/Profile';
import Register from '../../views/Register';

import Login from '../../views/Login';
import { Dropdown } from '../../views/Dropdown/Dropdown';
import Home from '../../views/Home'
import { Smilly } from '../../views/Smilly/Smilly';
import Sad from '../../views/Sad';
import Golden from '../../views/Golden';
import Silver from '../../views/Silver';
import Bronze from '../../views/Bronze';
import Video from '../../views/Video';

export const App = () => {
  return (
    <BrowserRouter>
      <Shell>
        <Switch>
         
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/video">
            <Video />
          </Route>

          <Route path="/smilly">
            <Smilly />
           </Route>

           <Route path="/golden">
            <Golden />
           </Route>

           <Route path="/silver">
            <Silver />
           </Route>

            <Route path="/bronze">
            <Bronze/>
           </Route> 

            <Route path="/sad">
            <Sad />
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
