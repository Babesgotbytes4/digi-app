import cms  from '../cms/cms.js'
import '../App.css'

function Register() {

  const addUser = (props)=>{
      const {username, pin , confirmPin} = props;

      if (username.length <3)return 'username is too shot';
      if (pin.length <4 ) return 'pin is too short';
      if (confirmPin !== pin) return "pin doesn't match"

      const userString = window.localStorage.getItem('users');

      if(!userString){
        // saving the name and the pin
        window.localStorage.setItem('uses',JSON.stringify([{username, pin}]))
        return null;
      }
      const usersData = JSON.parse( userString)
      if(usersData.find(user=> user.username === username)) return 'user exists'
     
      window.localStorage.setItem('uses',JSON.stringify([
        ...usersData,
        {username, pin}]))

  }
  //check if the user exists

  const checkUsers = (props)=>{
      const { username , pin } = props;
     

      if (username.length < 1) return 'no- username'
      if( pin < 4) return 'pin is too short'

      const userString =window.localStorage.getItem('users');

      if(!userString)return 'no user created'

      const usersData = JSON.parse(userString);
      const username  = usersData.find((checkingUser )=> checkingUser.username === username);

    //if no user existing 
    if(!username) return 'user does not exist';
    if(username.pin === pin) return null;

    }


  return (
    <div className="App">
      <h1>DigiApp</h1>
      <header className="App-header">
      <button onClick={cms.syncAssessment} >Get data</button>

        Hello world
      </header>
    </div>
  );
}

export default Register;