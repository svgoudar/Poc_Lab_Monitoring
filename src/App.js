import './Styles/App.css';
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './Login';
import Signup from'./Signup';
import About from './About';
import Main from "./Main";
import Forgot from'./Forgot';
import Navb from './Navb';
function App(){
    
    return(
    <Router>
        <div>
        <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/Login" exact component={Login}></Route>
        <Route path="/Signup" exact component={Signup}></Route>
        <Route path="/About" exact component={About}></Route>
        <Route path="/Main" exact component={Main}></Route>
        <Route path="/Forgot" exact component={Forgot}></Route>        
        </Switch>
        </div>
    </Router>
    );
}

const Home=()=>(
    <>
    <Navb/>
    <div className="App">

            <h1 id="heading">Lab temperature monitoring</h1>
            {/* <Button id="btn" type="submit" value="submit">Login</Button> */}
        </div>
    </>
);
export default App;