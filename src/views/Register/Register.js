import React from "react";
import PinCode from "react-pin-input";

function Register() {
  const [pinValues, setPinValues] = React.useState(["", "", "", ""]);
  const addUser = (props) => {
    const { username, pin, confirmPin } = props;

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
  //check if the user exists

  // const checkUsers = (props) => {
  //   const { username, pin } = props;

  //   if (username.length < 1) return "no- username";
  //   if (pin < 4) return "pin is too short";

  //   const userString = window.localStorage.getItem("users");

  //   if (!userString) return "no user created";

  //   const usersData = JSON.parse(userString);
  //   const username = usersData.find(
  //     (checkingUser) => checkingUser.username === username
  //   );

  //   //if no user existing
  //   if (!username) return "user does not exist";
  //   if (username.pin === pin) return null;
  // };

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Enter Pin:
        <PinCode
          disabled
          length={4}
          values={addUser.confirmPin}
          onChange={({ values }) => {
            setPinValues(values);
          }}
        />
      </label>

      <label>
        Cornfim Pin:
        <PinCode
          disabled
          length={4}
          values={addUser.pinValues}
          onChange={({ values }) => {
            setPinValues(values);
          }}
        />
      </label>
      <Pin />
    </form>
    
  );
}

class Pin extends React.PureComponent {
    state = {
      value: ""
    };
  
    onChange = value => {
      this.setState({ value });
    };
  
    // onClear = () => {
    //   this.setState({
    //     value: ""
    //   });
    //   this.pin.clear();
    // };
  
    render() {
      const { value } = this.state;
      return (
        <div className="app">
          <PinCode
            length={4}
            focus
            // disabled
            secret
            ref={p => (this.pin = p)}
            type="numeric"
            onChange={this.onChange}
          />
          <div>{value}</div>
          {/* <button onClick={this.onClear}>Clear</button> */}
        </div>
      );
    }
  }
 

export default {Register};

// export default Register;
