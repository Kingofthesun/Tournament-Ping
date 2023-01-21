import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

const [user, setUser] = useState("");

const userLogin = (e) =>{
  e.preventDefault();
  console.log('User logged in');

  setUser()

}

if(user.length == 0){
  return (
    <div className="App">
      <header className="App-header">
      <form className='Login-form' onSubmit={userLogin}>
        <label for="username">Username</label>
        <input type="text" id="username" name="username"></input>
        <br/>
        <input type="submit" value="Login"/>
      </form>

      </header>
    </div>
  );
}
else {

  
  
  return (
    <div className="App">
      <h3>Welcome to:</h3>
      <h1>TOURNAMENT PING!</h1>
    </div>
  );
}
}

export default App;
