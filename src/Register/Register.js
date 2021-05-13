import cms  from '../cms/cms.js'

function Register() {
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