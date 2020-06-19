import React, { Component } from 'react';
import {Button} from 'reactstrap';
import './style.css';
import './Signup.js';
import Signup from './Signup.js';
import Login from './Login.js';
//import { Route } from "react-router-dom";
class App extends Component {
    constructor()
    {
      super()
      this.state={
        signup:false,
        login:false
      }
      this.handleSignUp=this.handleSignUp.bind(this)
      this.handleLogin=this.handleLogin.bind(this)
    }
    handleSignUp=(e)=>{
        this.setState({signup:true,
        login:false
      })
    }
    handleLogin=(e)=>{
        this.setState({signup:false,
        login:true})
    }  
    render()
    { 
        return(<div>
       <div className="center">
           <Button onClick={this.handleSignUp}>Sign up</Button><br/></div>
           <div className="center">
           <Button onClick={this.handleLogin}>Login</Button></div>
           {this.state.signup ?(
            <Signup/>
           ):(this.state.login?(
            <Login/>
           ):(<div></div>))}
           </div>
           
        )
    }
}
    export default App;