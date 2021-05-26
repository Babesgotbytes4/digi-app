import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import users from "../api/users/users";
import app from "../api/app/app";

export const useAuth = (props) => {
  const { shouldBeLoggedIn, shouldBeLoggedOut } = props || {};
  const history = useHistory();
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [name, setUsername] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (shouldBeLoggedIn && !app.getLoggedInName()) {
      history.push("/login");
    }
    if (shouldBeLoggedOut && app.getLoggedInName()) {
      history.push("/assessments");
    }
  }, [history, shouldBeLoggedIn, shouldBeLoggedOut]);

  const handlePinInput = (event) => setPin(event.target.value);
  const handleConfirmPinInput = (event) => setConfirmPin(event.target.value);
  const handleNameInput = (event) => setUsername(event.target.value);

  const handleLoginForm = (event) => {
    if (event.preventDefault) event.preventDefault();
    const response = users.checkUser({ name, pin });
    app.logUserIn(name);

    if (response)return setError(response);

    history.push('/assessments')

  };
  const handleLogOutButton = () => {
    app.logUserOut();
    

    


    history.push('/login')''

  };
  const handleSignupForm =(event)=>{
    if(event.preventDefault) event.preventDefault();
    const response = users.addUser({ name, pin,confirmPin });
    app.logUserIn(name);

    if (response)return setError(response);

    history.push('/assessments')

  }

  return {
    name,
    handleNameInput,

    pin,
    handlePinInput,

    handleSignupForm,
    confirmPin,
    handleConfirmPinInput,
    error,

    handleLogOutButton,

    handleLoginForm,
  };
};
export default useAuth;
