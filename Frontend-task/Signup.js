import React, { Component } from 'react';
import {
    //Form,
    Input,
    Button,
    Label
} from 'reactstrap';
import './styles.css';
class Signup extends Component {
    constructor()
    {
      super()
      this.state={
        error1:false,
        error2:false,
        error3:false,
          error4:false,
          error:false,
        signup:false
      }
      this.onChange1=this.onChange1.bind(this)
      this.onChange2=this.onChange2.bind(this)
      this.onChange3=this.onChange3.bind(this)
      this.onChange4=this.onChange4.bind(this)
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
    onChange1 = e => {
        const { value } = e.target; 
        if (value.length === 0)
        {
          this.setState({error1 :true});
        }
        else
        {
            this.setState({error1 :false});
        }        
      }
      onChange2 = e => {
        const { value } = e.target; 
        if (value.length === 0)
        {
          this.setState({error2 :true});
        }
        else
        {
            this.setState({error2 :false});
        }        
      }
      onChange3 = e => {
        const { value } = e.target; 
        if (value.length === 0)
        {
          this.setState({error3 :true});
        }
        else
        {
            this.setState({error3 :false});
        }        
      }
      onChange4 = e => {
        const { value } = e.target; 
        if (value.length === 0)
        {
          this.setState({error4 :true});
        }
        else
        {
            this.setState({error4 :false});
        }        
      }
      handleSignup(fname,lname,user,pass){

if (fname===''&&lname===''&&user===''&&pass==='') {
    alert("fields empty")
}else{
this.setState({signup:true})
}
      }
    
    
    render()
    {
        const {fname,lname,user,pass}=this.state
        return(
       <div className="center">
               <div>
                 <div>  
                     <Label>Firstname</Label><br/>
          <Input type="text" placeholder='firstname' value={fname} onChange={this.onChange1}/>
          {this.state.error1 === true && (
                    <div className="error">*field required</div>)}</div><br/>

                    <div>
                    <Label>LastName</Label><br/>
          <Input type="text" placeholder='lastname' value={lname} onChange={this.onChange2}/>
          {this.state.error2 === true && (
                    <div className="error">*field required</div>)}</div><br/>
          <div>
          <Label>UserName</Label><br/>
          <Input type="text" placeholder='UserName' value={user} onChange={this.onChange3}/>
          {this.state.error3 === true && (
                    <div className="error">*field required</div>)}</div><br/>
          <div>
          <Label>Password</Label><br/>
          <Input type="password" placeholder='password' value={pass} onChange={this.onChange4}/>
          {this.state.error4 === true && (
                    <div className="error">*field required</div>)}</div><br/>
          <Button onClick={this.handleSignup(fname,lname,user,pass)}>Signup</Button>
          </div>
<br/>
          {this.state.signup?(
              <div className="center">
              <div>
            <Label>DOB</Label><br/>
          <Input type="text" placeholder='Date of Birth' onChange={this.onChange}/>
          {this.state.error === true && (
                    <div className="error">*field required</div>)}</div><br/>

<div>
            <Label>Address</Label><br/>
          <Input type="textarea" placeholder='address' onChange={this.onChange}/>
          {this.state.error === true && (
                    <div className="error">*field required</div>)}</div><br/>

<div>
            <Label>Phone number</Label><br/>
          <Input placeholder='phone number' onChange={this.onChange}/>
          {this.state.error === true && (
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
