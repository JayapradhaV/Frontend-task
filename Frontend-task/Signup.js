import React, { Component } from 'react';
import {
    //Form,
    Input,
    Button,
    Label
} from 'reactstrap';
import './style.css';
class Signup extends Component {
    constructor()
    {
      super()
      this.state={
        email:'',
        password:'',
        dob:'',
        signup:false
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
      handleSignup=e=>{
this.setState({signup:true})
      }
    
    
    render()
    {
        const {error}=this.state
        return(
       <div className="center">
               <div>
                 <div>  
                     <Label>Firstname</Label><br/>
          <Input type="text" placeholder='firstname' onChange={this.onChange}/>
          {error === true && (
                    <div className="error">*field required</div>)}</div><br/>

                    <div>
                    <Label>LastName</Label><br/>
          <Input type="text" placeholder='lastname'/>
          {error === true && (
                    <div className="error">*field required</div>)}</div><br/>
          <div>
          <Label>UserName</Label><br/>
          <Input type="text" placeholder='UserName'/>
          {error === true && (
                    <div className="error">*field required</div>)}</div><br/>
          <div>
          <Label>Password</Label><br/>
          <Input type="password" placeholder='password'/>
          {error === true && (
                    <div className="error">*field required</div>)}</div><br/>
          <Button onClick={this.handleSignup}>Signup</Button>
          </div>

          {this.state.signup?(
              <div>
              <div>
            <Label>DOB</Label><br/>
          <Input type="text" placeholder='Date of Birth'/>
          {error === true && (
                    <div className="error">*field required</div>)}</div><br/>

<div>
            <Label>Address</Label><br/>
          <Input type="textarea" placeholder='address'/>
          {error === true && (
                    <div className="error">*field required</div>)}</div><br/>

<div>
            <Label>Phone number</Label><br/>
          <Input placeholder='phone number'/>
          {error === true && (
                    <div className="error">*field required</div>)}</div><br/>
           </div>
          ):(
          <div></div>
          )}
           </div>
        )
    }
}
    export default Signup;