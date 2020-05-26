import React,{useEffect} from 'react'
import {ListItemIcon, Tooltip} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './CSS/Dashboard.css'
import { createNote } from '../service/service'
import { Container, ClickAwayListener, Card, Icon, InputBase } from '@material-ui/core';
import Icons from './Icons';
import MiniNote from './MiniNote';
import Note from './Note';
import Noteslist from './NotesList';
export default function CreateNote(props) {
 console.log(props.function,"from noteslist")
    const [state, setstate] = React.useState(false);
    const [note, setnote] = React.useState("");
    const [notein, setnotein] = React.useState({ tittle: '', description: '' })
    const [clickaway, setclickaway] = React.useState(false);

    // useEffect(() => {
    //    // findallnotes()
    //     console.log(props,"---------------------------->")
    // }, [])
    const openfile = () => {
        setstate(true);
        console.log(state)
    }
    const onclickaway = () => {
        setclickaway(true);
        console.log(clickaway, "click")
    }
    const closenote=()=>
    {
        setstate(false)
    }
    console.log(clickaway)
    function onhandlechange(event) {
        console.log("helllololo", event.target.name, event.target.value);
        // let fields = notein;
        // fields[event.target.name] = event.target.value;
        setnotein({
            ...notein, [event.target.name]: event.target.value
        }
        )
        console.log('fields', notein);

    }
    
      
    const notecreate = () => {
    
        createNote(notein)

            .then(Response => {
                console.log(Response, "create succesfully")
                 alert((Response.data.message))
                //  callbackdata();
                props.function();
                 
            }).catch((error) => {
                console.log(error.response.data)
                //  console.log(error.Response.data.message ,"login failed")
                // alert(error.response.data.details)
                alert(error.response.data.message)
            });
            // return (<Note onClickbutton={ notecreate}/>)
    }




    return (
        <Container >
              
            <div className="expansionpanel"  >
            <Card >
                {/* <ClickAwayListener onClickAway={onclickaway}> */}

                    {state ?
                        <div className>
                            <InputBase
                            placeholder="title"
                                id="standard-input"
                                label="Title"
                                name="tittle"
                                // value={notein.description}
                                onChange={onhandlechange}
                                type="text" />
                                 <ListItemIcon style={{ marginLeft: "300px" }}>  <Tooltip title="Pin note">                          
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                 <path fill="none" d="M0 0h24v24H0z" />
                                 <path fill="#000" d="M17 4v7l2 3v2h-6v5l-1 1-1-1v-5H5v-2l2-3V4c0-1.1.9-2 2-2h6c1.11 0 2 .89 2 2zM9 4v7.75L7.5 14h9L15 11.75V4H9z" />
                                 </svg>
                                 </Tooltip>
                               </ListItemIcon>
                        </div> : null}



                    <div className>
                        <InputBase
                            id="standard-input"
                            label="Take a note"
                            placeholder="take a note....."
                            type="text"
                            name="description"
                            // value={notein.description}
                            onChange={onhandlechange}
                            onClick={openfile}
                        />

                    </div>
                    {state ?
                        <div>




                               
                            {/* <Icons /> */}
                            <Icons function={closenote} />
                            <Button size="small" color="primary" onClick={notecreate}>create</Button>

  

                        </div> : null}

                    
                </Card>
            </div>
        </Container>
    )
}