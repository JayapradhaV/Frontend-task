import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Input,
    Button,
    Label
} from 'reactstrap';
import './styles.css';
class Login extends Component {
    constructor()
    {
      super()
      this.state={
          error1:'',
          error2:''
      }
      this.onChange1=this.onChange1.bind(this)
      this.onChange2=this.onChange2.bind(this)
    }
    onChange1 = e => {
        const { value } = e.target;
        if (value.length === 0)
        {
          this.setState({error1 :true});
        }
        else
        {this.setState({error1 :false});
        }        
      }
      onChange2 = e => {
        const { value } = e.target;
        if (value.length === 0)
        {
          this.setState({error2 :true});
        }
        else
        {this.setState({error2 :false});
        }        
      }
    submit(name,pass)
    {
if(name==='' &&pass ==='' ){
alert("fields empty")}
else{
    alert(" Successfully logged in")
}
    }
    render()
    {const { name,pass } = this.state;
        return(
       <Form className="center">
                 <FormGroup>  
          <Label>UserName</Label><br/>
          <Input type="text" placeholder='UserName' value={name} onChange={this.onChange1}/>
          {this.state.error1 === true && (
                    <div className="error">*field required</div>)}</FormGroup><br/>
          <FormGroup>
          <Label>Password</Label><br/>
          <Input type="password" placeholder='password' value={pass} onChange={this.onChange2}/>
          {this.state.error2 === true && (
                    <div className="error">*field required</div>)}</FormGroup><br/>
          <Button onClick={this.submit(name,pass)}>Login</Button>
           </Form>
        )
    }
}
    export default Login;
