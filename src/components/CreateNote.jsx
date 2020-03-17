import React from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './CSS/Dashboard.css'
import { createNote } from '../service/service'
import { Container, ClickAwayListener, Card, Icon, InputBase } from '@material-ui/core';
import Icons from './Icons';
import MiniNote from './MiniNote';
import Note from './Note';

export default function CreateNote(props) {

    const [state, setstate] = React.useState(false);
    const [note, setnote] = React.useState("");
    const [notein, setnotein] = React.useState({ tittle: '', description: '' })
    const [clickaway, setclickaway] = React.useState(false);
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
                // alert((Response.data.message))
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
            <Card>
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
                            <Icons function={closenote}/>
                            <Button size="small" color="primary" onClick={notecreate}>create</Button>

  

                        </div> : null}

                    {/* < div>
                        {clickaway ?
                            <div>
                                <h4 >Hello</h4>
                            </div> : null}
                        {clickaway ?
                            <div>
                                <h1>HIII</h1>
                            </ div> : null}
                    </ div> */}
                {/* </ClickAwayListener> */}
                </Card>
            </div>
        </Container>
    )
}