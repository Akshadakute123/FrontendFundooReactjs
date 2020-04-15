import React, { Component } from 'react';

	import Paper from '@material-ui/core/Paper';
	import Card from '@material-ui/core/Card';
	import TextField from '@material-ui/core/TextField';
	class MiniNote extends Component {
	    constructor(props) {
	        super(props);
	       
	    }
	
	    
	    render() {
	        return (
				 
				
				
	               <TextField
                            id="standard-input"
                            label="Take a note"
                            type="text"
                            name="description"
                            // value={notein.description}
                            // onChange={onhandlechange}
                            // onClick={openfile}
                        />

	            	        );
	    }
	}
	
  export default MiniNote