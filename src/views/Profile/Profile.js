import { Icons } from '@material-ui/icons';
import React from 'react';
import users from '../../api/users/users'
import useDropdown from '../Dropdown/useDropdown'

export const Profile = () => {
const {name, pin} = users;
const { catergory, goal,Message} = useDropdown;

const INITIAL_DATA = [];

const getData =(name, pin)=>{
    const usersString = window.localStorage.getItem(users, useDropdown);
    if(!usersString) return INITIAL_DATA;
    return JSON.parse(usersString);
}
const setData =()=> {
    const data = getData(name, pin);
    window.localStorage.setItem(users, JSON.stringify(data))
console.log(name, pin)
}

    return (
    
    <div>
      <label>
          {name}
      </label>
      <label>{pin}</label>
      <label>{goal}</label>
      <label>{Message}</label>
      <label>{catergory}</label>
        
    </div>
)
    };
export default Profile;