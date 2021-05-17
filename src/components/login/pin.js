import React from "react";
import  {useState} from "react";
import PinInput from "react-pin-input";

const Text = () => {
    const [name,setItem] = useState('')

  return(

    <div>
        <h3>User Name</h3>
    <input type="text" onChange={e => setItem(e.target.value)} value={name}/>
</div>
  )
}

class App extends React.PureComponent {
    state = {
      value: ""
    };
  
    onChange = value => {
      this.setState({ value });
    };
  
    onClear = () => {
      this.setState({
        value: ""
      });
      this.pin.clear();
    };
  
    render() {
      const { value } = this.state;
      return (


        <div>
            <Text/>
            <>
            
            <h3>Enter the correct pin</h3>
          <PinInput
            length={5}
            focus
            // disabled
            secret
            ref={p => (this.pin = p)}
            type="numeric"
            onChange={this.onChange}
          />
          </>
          <div>{value}</div>
          <button onClick={this.onClear}>Clear</button>
        </div>
      );
    }
  }
  export default App;
  