import React, { Component } from 'react';
import {
    //Form,
    Input,
    Button,
    Label
} from 'reactstrap';
import './style.css';
class Login extends Component {
    constructor()
    {
      super()
      this.state={
        email:'',
        password:''
      }
      this.onChange=this.onChange.bind(this)
    }
    onChange = e => {
        const { value } = e.target;
        if (value.length === 0)
        {
          this.setState({error :true});
        }
        else
        {
            this.setState({error :false});
        }        
      }
    
    
    render()
    {
        const {error}=this.state
        return(
       <div className="center">
                 <div>  
          <Label>UserName</Label><br/>
          <Input type="text" placeholder='UserName'/>
          {error === true && (
                    <div className="error">*name field required</div>)}</div><br/>
          <div>
          <Label>Password</Label><br/>
          <Input type="password" placeholder='password'/>
          {error === true && (
                    <div className="error">*field required</div>)}</div><br/>
          <div>
          <Button>Login</Button>
          {error === true && (
                    <div className="error">*field required</div>)}</div>
           </div>
        )
    }
}
    export default Login;