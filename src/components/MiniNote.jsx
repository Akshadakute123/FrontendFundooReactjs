import React, { Component } from 'react';

	import Paper from '@material-ui/core/Paper';
	import Card from '@material-ui/core/Card';
	import TextField from '@material-ui/core/TextField';
	class MiniNote extends Component {
	    constructor(props) {
	        super(props);
	        this.state = {
	            open: false,
	            tittle: "",
	            description: "",
	        };
	    }
	
	    handleChangeText = (event) => {
	        this.setState({
	            [event.target.name]: event.target.value
	        }, () => console.log(this.state, '------>name'))
	    }
	
	    clickNote = () => {
	        let note = {};
	        note.title = this.state.title;
	        note.description = this.state.description;
	        console.log(note);
	    }
	
	    render() {
	        return (
	            // <div >
	            //     <div className="notePage"
	            //onClick={() => this.props.history.push('/wholenote')}>
	            <Card className="wholeMiniNoteCard">
	               <TextField
                            id="standard-input"
                            label="Take a note"
                            type="text"
                            name="description"
                            // value={notein.description}
                            // onChange={onhandlechange}
                            // onClick={openfile}
                        />

	            </Card >
	        );
	    }
	}
	
  export default MiniNote