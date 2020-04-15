import React, { Component } from 'react';
import {forgetpassword} from '../service/service'
import './resetpassword.css'
import { InputBase, TextField, Button } from '@material-ui/core';
class Forgetpassword extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            email:""

        }
    }
    handlechange=(event)=>
    {
        this.setState(
            {
                [event.target.name]:event.target.value}, ()=>
                console.log(this.state,'--------->name')) 
              //    console.log([event.target.name])   
              //    console.log(event.target.value)       
                 
                  
              
            }
            
    forgetpasswordform=()=>
    {
        let user={};
     
        user.email=this.state.email;
       
        console.log(user);
        forgetpassword(user)
        
            .then(Response =>
                {
                    console.log(Response,"forget password link dsend on your email id")
                     alert((Response.data.message))
                     this.props.history.push('/resetpassword')
                  
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
            <div style={{width:'24%'}} className="allign">
                <div className="login">
                    <h2>Forget Password</h2>
                </div>
                <div className="form-row">
                <label>EmailId</label><br></br>
                <TextField type="email" placeholder="email"  name="email" value={this.email} onChange={this.handlechange} />
               </div>
               <div>
                <Button style={{marginTop:"20px"}} variant="contained"  color="secondary"  onClick={this.forgetpasswordform} >submit</Button>
                </div>
            </div>
        );
    }
}

export default Forgetpassword;