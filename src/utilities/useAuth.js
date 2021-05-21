
import { useState, useEffect } from "react";
import {useHistory} from "react-router-dom"
import auth from "../api/users/users"
import app from "../api/app/app"
import { useEffect } from "react";

export const useAuth = (props) => {
const {shouldBeLoggedIn, shouldBeLoggedOut } = props;
const history = useHistory()
const [pin, setPin] = useState('')
const [confirmPin, setConfirmPin] = useState('')
const [name, setName] = useState('')

useEffect(() => {

if (shouldBeLoggedIn && !app.getLoggedInName() ){
    history.push("/login")
}
if (shouldBeLoggedOut && app.getLoggedInName()){
history.push("/assessments")
}

}, [])



const handlePinInput = (event) => setPin (event.target.value)
const handleConfirmPinInput = (event) => setConfirmPin (event.target.value)
const handleNameInput = (event) => setName (event.target.value)

const handleLoginForm = (name, pin) => {
    const error = users.checkUser(name,pin)
    app.logUserIn(name)
return error;
}
const handleLogOutButton = () => { app.logUserOut()
    
}
const handleSignupForm = (name, pin, confirmPin) => { 

}

return {
    name,
    handleNameInput,

    pin,
    handlePinInput,

    confirmPin,
    handleConfirmPinInput,

    handleLoginForm,
    handleSignupForm,
    handleLogOutButton
}
}

export default useAuth;