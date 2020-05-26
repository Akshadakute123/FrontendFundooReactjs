import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
// import './title.css'
import './CssStyles.css'
// import './registercss.css'
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import  IconButton from '@material-ui/core/IconButton'
import VisibilityIcon from '@material-ui/icons/Visibility';


import {Logininfo} from '../service/service'

const initialState = {
    
    email: "",
    password:"",
   token:"",
   show:false
  };

  

  
    
  class Loginpage extends Component {
    state = initialState;

    showpassword=(event)=>
    {
        this.setState({
            show:true
        })
    }

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
                    this.props.history.push('/dashboard/note')
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
          <div style={{marginLeft:'200px'}}>
          <Avatar >
          <LockOutlinedIcon />
          </Avatar>
          </div>
                          
         <form onSubmit={this.handleSubmit}>
             {/* <h2 className="login">Login page</h2> */}
             <ul class="ul" style={{marginleft:'500px'}}>
<li >L</li>
<li>o</li>
<li>g</li>
<li>i</li>
<li>n</li>
{/* <li>p</li> */}
</ul>
      
        
        <div className="username">
        <TextField id="filled-basic" label="Emailadress" variant="filled" name="email"  value={this.state.email}
            onChange={this.handleChange } required/>
          
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
    
        <div className="username">
        <TextField id="filled-basic" label="Password" variant="filled"   type={this.state.show?'text':'password'}  name="password"  value={this.state.password}
            onChange={this.handleChange } required />
           
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>
        <div className='showPassword'>
                                <IconButton onClick={(event)=>this.showpassword(event)}>
                                    {this.state.show?<VisibilityIcon/>:<VisibilityOffIcon/>}
                                </IconButton>
                            </div> 
        <div style={{marginTop:'20px'}}>

        <Button  variant="contained"  color="primary" 
                     onClick={this.submitloginform} style={{ marginleft: '-114px', margintop: '-13px'}}>Login</Button>
                     
               
                 <Button  style={{marginLeft:"22px"}}variant="contained" color="secondary"
                       
                        onClick={()=>this.props.history.push('/register')}>Register</Button>
                   </div>
      
         
                   <div>
                   
                   <Link style={{color:'red'}}  href="" onClick={
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