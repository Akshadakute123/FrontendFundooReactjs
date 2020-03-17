import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import './title.css'
import './registercss.css'
import {Logininfo} from '../service/service'

const initialState = {
    
    email: "",
    password:"",
   token:""
  };

  
    
  class Loginpage extends Component {
    state = initialState;

    handleChange = (event) => {
        
        this.setState({
          [event.target.name]:event.target.value}, ()=>
          console.log(this.state,'--------->name')) 
        //    console.log([event.target.name])   
        //    console.log(event.target.value)       
           
            }
        
    
      
   state=initialState;
    submitloginform=()=>
    {
        let loginuser={};
       
        loginuser.email=this.state.email;
        loginuser.password=this.state.password;
       
        console.log(loginuser);
        console.log(this.state.email)
        Logininfo(loginuser)
        
            .then(Response =>
                {
                    console.log(Response,"login succesfully")
                    console.log(Response.data.message)
                    console.log(" tokens" ,Response.data.result)
                    sessionStorage.setItem("token",Response.data.result)
                    // .setItem('username', this.state.username)
                    this.props.history.push('/dashboard')
                    alert((Response.data.message))
                }).catch((error)=>
                {
                  console.log(error.response.data)
                   //  console.log(error.Response.data.message ,"login failed")
                  // alert(error.response.data.details)
                  alert(error.response.data.message)
                });
            }

 
    render() {
    return (
      
        <div className="border">
        <div className=" title">

         <form onSubmit={this.handleSubmit}>
             <h2 className="login">Login page</h2>
      
        
        <div className="username">
        <TextField id="filled-basic" label="Emailadress" variant="filled" name="email"  value={this.state.email}
            onChange={this.handleChange } required/>
          
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div className="username">
        <TextField id="filled-basic" label="Password" variant="filled" type="password" name="password"  value={this.state.password}
            onChange={this.handleChange } required/>
           
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>
        <div>
        <Button variant="contained"  color="primary"
                     onClick={this.submitloginform}>Login</Button>

                 <Button variant="contained" color="secondary"
                       
                        onClick={()=>this.props.history.push('/register')}>Register</Button>
                   </div>
                  
                   <div>
                   
                   <Link href="" onClick={
                     () => this.props.history.push('/forgetpassword')
                     }>
                 forgetpassword?

                            </Link>
                   
                   </div>
        
      </form>
      </div>
      </div>
    );
  }
}

export default Loginpage;