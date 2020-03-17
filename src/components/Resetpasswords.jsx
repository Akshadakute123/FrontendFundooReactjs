import React, { Component } from 'react';
import './registercss.css'
import Button from '@material-ui/core/Button';
import {resetpassword}from '../service/service'
class Resetpasswords extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            email:" ",
            password:"",
            confirm_password:" ",
            tokeninfo:""

        }
    }
    handlechange=(event)=>
    {
        this.setState(
            {
                // tokeninfo: sessionStorage.getItem('token'),
               
                [event.target.name]:event.target.value
        
            }
        )                
        // console.log(this.state.tokeninfo) 
              //    console.log([event.target.name])   
              //    console.log(event.target.value)       
                 
                  
              
            
        }
            // componentDidMount() {
            //     this.setState({ token: sessionStorage.getItem('token') }, () => {
            //         console.log("hiiiiii",this.state.token);
            //        // this.user = this.state.username
        
            //     })
            // }
          resetpasswordform=()=>
          {
              let user={};
           
              user.email=this.state.email;
              user.password=this.state.password;
              user.confirm_password=this.state.confirm_password;
              console.log(user);
              resetpassword(user)
              
                  .then(Response =>
                      {
                          console.log(Response,"password reset succesfully")
                           alert((Response.data.message))
                           this.props.history.push('/login')
                        
                      }).catch((error)=>
                      {
                       //   console.log("Error",error.message)
                           console.log(error.response.data)
                           //  console.log(error.Response.data.message ,"login failed")
                          // alert(error.response.data.details)
                          alert(error.response.data.message)
                      });
                  }
            
        
    
    
    
    render() {
        return (
            <div className="allign">
                <form>
                    <h2>Reset Password</h2>
                    <div className="form-row">
                        <label>Email-Id</label>
                        <input type="email" name="email" value={this.email} onChange={this.handlechange} placeholder="email" />
                    </div>
                    <div className="form-row">
                        <label>New password</label>
                        <input type="password" name="password" value={this.password}     onChange={this.handlechange} placeholder="password" />
                    </div>
                    <div className="form-row">
                        <label>confirm password</label>
                        <input type="password" name="confirm_password" value={this.confirm_password}   onChange={this.handlechange}  placeholder="confirm password" />
                    </div>
                    <div> 
                         <Button varient="contained" color="secondary"
                                        onClick={this.resetpasswordform}
                                           
                                    >Submit</Button>

                    </div>

                </form>
            </div>
        );
    }
}

export default Resetpasswords;