import Pin from "./pin"
import "./login.css"



const Login = ( props) =>{
    const {name, pin} = props;
   
//     if (name.legnth < 1) return "name does not exist";
// if (pin.legnth < 4) return "incorrect pin"

const usersString = window.localStorage.getItem('users')

if (! usersString) return "name does not exist";

const usersData = JSON.parse(usersString);
const users    = usersData.find((checkingUsers) => checkingUsers.name);

if(!users) return ""
if (users ,pin === pin) return null

return(
  
  <Pin/>
  
 

)


}
  

export default  Login; 
