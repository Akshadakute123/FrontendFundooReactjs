import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import './registercss.css'
import TextField from '@material-ui/core/TextField';
//  const  classes =null;
const useStyles = makeStyles({
    root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 400,
    padding: '0 30px',
    width:'500px',
    marginLeft:"500px",
    
  },
})


function Registers()
 {
const[register,setregister]=React.useState({username: '' ,email: ' ',password: '',confirm_password:' '
})

    const handleChange = (event) => {
        
        setregister({
            ...register, [event.target.name]: event.target.value
        }
        )
        console.log('fields', register);

    }
    const classes = useStyles();

        return ( 
            <div style={{marginTop:"120px"}}>
            <div className={classes.root}>
                <div classes="allign">
                <form>
                    
                    <label  className="R">R</label>
                    <label className="E">E</label>
                    <label className="G">G</label>
                    <label className="I">I</label>
                    <label className="S">S</label>
                    <label className="T">T</label>
                    <label className="R">R</label>
                    <label className="A">A</label>
                    <label className="T">T</label>
                    <label className="I">I</label>
                    <label className="O">O</label>
                    <label className="N">N</label>
                    
                    <div  className="form-row">
                        <label style={{marginLeft:"0px"}} > Username</label>
                        <TextField style={{paddingLeft:"20px"}} placeholder="username" name="username" onChange={handleChange} ></TextField>
                       
                    </div>
        
                    <div className="form-row">
                        <label  style={{marginLeft:"0px"}}>email</label>
                        <TextField style={{paddingLeft:"20px"}} placeholder="emailid"  name="email"onChange={handleChange} ></TextField>
                      
                    </div>
                    <div className="form-row">

                        <label style={{marginLeft:"0px"}}>password</label>
                        <TextField style={{paddingLeft:"20px"}} placeholder="password"  name="password"  onChange={handleChange} ></TextField>
                       
                    </div>
                    <div className="form-row">
                        <label style={{marginLeft:"0px"}}>Confirm Password</label>
                        <TextField style={{paddingLeft:"20px"}}placeholder="password" name="confirm_password" onChange={handleChange}></TextField>
                        
                    </div>
                    <div>
                    <Button style={{marginTop:'20px'}} variant="contained" color="primary" >
        Signup
      </Button>

                    </div>


                </form>
                </div>
            </div>

            </div>
        );
    }


export default Registers;
