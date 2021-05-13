import {useState} from "react"


const Login = (props) => {

    const {name,
        pin,
} = props;

if (name.legnth < 1) return "name does not exist";
if (pin.legnth < 4) return "incorrect pin"

const usersString = window.localStorage.getItem('users')
 
if (!usersString){
window.localStorage.setItem("users", JSON.stringify([{name,pin}]) )
return null;
}

const usersData = JSON.parse(usersString)

if(usersData.find(users => users.name === name)) return "user-exists"
window.localStorage.setItem("users", JSON.stringify([
    ...usersData,
    {name,pin}
]) )


// const checkUsers = (props) => {
//     const { name,pin } = props;
// if(name < 1) return "does not exist"
// if (pin  4) ret
// }
}

export default Login;