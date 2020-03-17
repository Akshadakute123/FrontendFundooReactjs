import React, { Component } from 'react';
	import Container from "@material-ui/core/Container";
	import MiniNote from "./MiniNote";
	import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CreateNote from './CreateNote';
	
	
	class Note extends Component {
	
	    constructor(props) {
	        super(props)
	        this.state = {
	            clickAway: true,
	            title: '',
	            description: '',
	          
	        }
	    }
	
	    handleChangeText = (event) => {
	        this.setState({
	            [event.target.name]: event.target.value
	        })
	    }
	
	    handleClick = () => {
	        this.setState({
	            clickAway: true
	        })
	    }
	
	    
	
	    onHandleClickaway = () => {
	        this.setState({
	            clickAway: false
	
	        });
	
	        console.log('click away',this.state.clickAway);
			
	    }
	
	   
	  
	    render() {
	        console.log("Inside Render", this.state);
	
	        return (
	            <Container style={{ marginTop: '6em' }} >
	                <ClickAwayListener onClickAway={this.onHandleClickaway}>
	                    <div>
	                        {
								this.state.clickAway ?
								<div>
	                                <div>
										<CreateNote />
										</div> 
										
	                                < MiniNote handleClick={this.handleClick} />
									</div>:null}
	                        
	                    </div>
	                </ClickAwayListener>
	                <div style={{
	                  
	                }}>
	                    
	                </div>
	            </Container >
	        );
	    }
	}
	
	export default Note;