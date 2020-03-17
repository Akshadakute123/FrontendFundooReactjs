import React, { Component } from 'react';
import './registercss.css'
import Button from '@material-ui/core/Button';
import {newregistration} from '../service/service'
const initialState = {
    username: "",
    email: "",
    password: "",
    confirm_password:""
    
  };
  console.log('hiiiiiiiiiiiiiii');
class Registers extends Component {


    handleChange = (event) => {
        
        this.setState({
          [event.target.name]:event.target.value}, ()=>
          console.log(this.state,'--------->name')) 
        //    console.log([event.target.name])   
        //    console.log(event.target.value)       
           
            }
        
    
      
   state=initialState;
    submituserform=()=>
    {
        let user={};
        user.username=this.state.username;
        user.email=this.state.email;
        user.password=this.state.password;
        user.confirm_password=this.state.confirm_password;
        console.log(user);
        console.log(this.state.username)
        newregistration(user)
        
            .then(Response =>
                {
                    console.log(Response,"user added succesfully")
                     alert((Response.data.message))
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
                    <h1>REGISTRATION</h1>

                    <div className="form-row">
                        <label> username</label>
                        <input type="text" placeholder="firstname" name="username" value={this.username} onChange={this.handleChange}>

                        </input>
                    </div>
                  
                    <div className="form-row">
                        <label>email</label>
                        <input type="text" placeholder="emailid"  name="email" value={this.email} onChange={this.handleChange} >

                        </input>
                    </div>
                    <div className="form-row">

                        <label>password</label>
                        <input type="password" placeholder="password"  name="password" value={this.password} onChange={this.handleChange}>

                        </input>
                    </div>
                    <div className="form-row">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="password" name="confirm_password" value={this.confirm_password} onChange={this.handleChange} >

                        </input>
                    </div>
                    <div>
                        <Button varient="contained" color="secondary" onClick={this.submituserform}
                            
                        >Signup</Button>

                    </div>


                </form>
            </div>


        );
    }
}

export default Registers;