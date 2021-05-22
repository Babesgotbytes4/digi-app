import React from "react";
import ReactDOM from "react-dom";

function Register() {
  const [username, setUsername] = React.useState("");
  const [pin, setPin] = React.useState("");
  const [confirmPin, setConfirmPin] = React.useState("");
  const [error, setError] =React.useState(null);
  // const { user, setUser } = React.useState("");

  const addUser = () => {
    // const { username, pin, confirmPin } = props;

    if (username.length < 3) return "username is too shot";
    if (pin.length < 4) return "pin is too short";
    if (confirmPin !== pin) return "pin doesn't match";

    const userString = window.localStorage.getItem("users");

    if (!userString) {
      // saving the name and the pin
      window.localStorage.setItem("uses", JSON.stringify([{ username, pin }]));
      return null;
    }
    const usersData = JSON.parse(userString);
    if (usersData.find((user) => user.username === username))
      return "user exists";

    window.localStorage.setItem(
      "uses",
      JSON.stringify([...usersData, { username, pin }])
    );
  };
  function handleChange(e) {
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
   const response =  addUser();
   if (response ) setError(response);
  
  localStorage.setItem('setUsername', setUsername);
  localStorage.setItem('username', setUsername ? username : '');
  
  }
  return (

    <form onSubmit={handleSubmit}>

      
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Name:
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={username}
        onChange={handleChange}
      />
      <h4 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Pin:
          <br />
          <input
            type="number"
            length="4"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </label>
      </h4>

      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Confirm Pin:
        </label>
      </h2>
      <input
        type="number"
        length="4"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={confirmPin}
        onChange={(e) => setConfirmPin(e.target.value)}
      />
      <div>
        {error}
      </div>
      <button type="submit" className="btn ">
        Add
      </button>
    </form>
  );
}

export default Register;
