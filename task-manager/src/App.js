import { Router, Link } from '@reach/router';
import './App.css';
import ShowAll from './components/ShowAll';
import New from './components/New';
import semi from './images/semi.svg';
import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './components/Home'
import {useState} from "react";

function App() {
  const [getUser, setUser] = useState({});

  const background ={
    backgroundColor: 'navy',
    color: 'white',
    textAlign: 'left',
    padding: '10px',
  }
  return (
      <div className="App" style={background}>
        <div>
          <nav className="navbar sticky-top navbar-expand-lg navbar-custom ">
            <Link className="navbar-brand text-white  m-2 bold" to="/home"><i>THE </i><b>TASK MANAGER</b></Link>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">

              <div className="navbar-nav" >
                <Link className="nav-item text-white m-3 bold " to="/home">HOME</Link>
                <Link className="nav-item text-white m-3 bold " to="/login">LOGIN</Link>
                <Link className="nav-item text-white m-3 bold " to="/signup"><button className='btn btn-sm btn-light'>SIGN UP</button></Link>
              </div>
            </div>
          </nav>

        </div>
        <Router>
          <ShowAll path="/showall" getUser={getUser}/>
          <SignUp path='/signup' setUser={setUser}/>
          <Home path ="/home"/>
          <New path="/Projects/new" getUser={getUser}/>
          <Login path ='/login' setUser={setUser}></Login>
        </Router>
        <img src={semi} alt="bigger"></img>

        <footer style={background}>
          <div style={{height: '200px'}}></div>
          <h2>The Task Manager </h2>
          <h3>Created by Dojo students.</h3>

        </footer>
      </div>
  );
}

export default App;
