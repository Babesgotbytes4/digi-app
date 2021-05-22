
// import { useState, useEffect } from "react";
// import {useHistory} from "react-router-dom"
// import Register from "../components/Register/Register"
// import app from "../api/app/app"


// export const useAuth = (props) => {
// const {shouldBeLoggedIn, shouldBeLoggedOut } = props;
// const history = useHistory()
// const [pin, setPin] = useState('')
// const [confirmPin, setConfirmPin] = useState('')
// const [name, setUsername] = useState('')

// useEffect(() => {

// if (shouldBeLoggedIn && !app.getLoggedInName() ){
//     history.push("/login")
// }
// if (shouldBeLoggedOut && app.getLoggedInName()){
// history.push("/assessments")
// }

// }, [])



// const handlePinInput = (event) => setPin (event.target.value)
// const handleConfirmPinInput = (event) => setConfirmPin (event.target.value)
// const handleNameInput = (event) => setUsername (event.target.value)

// const handleLoginForm = (username, pin) => {
//     const error = user.checkUser(username,pin)
//     app.logUserIn(username)
// return error;
// }
// const handleLogOutButton = () => { app.logUserOut()
    
// }


// return (
//     username,
//     handleNameInput,

//     pin,
//     handlePinInput,

//     confirmPin,
//     handleConfirmPinInput,

//     handleLoginForm,

//     <>
//     <form onSubmit= {handleLoginForm}>
//           <h3>User Name</h3>
//           <input
//             type="text"
//             onChange={handleNameInput}
//             value={username}
//           />
    
//     <h3>Enter Pin</h3>
//           <input
//             type="numeric"
//             onChange={handlePinInput}
//             value={pin}
//           />

//           <button type="submit">
//             Login
//           </button>
//           <button type="submit">
//             {/* Logout */}
//           </button>
//     </form>
// </>
    
// )
// }; 




// export default useAuth;