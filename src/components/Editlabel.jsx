/* eslint-disable*/
import React, {useEffect } from 'react';
import { CreateLabel,deletelabel, updatelabel, } from '../service/service';
import { TextField, Popover } from '@material-ui/core';
import Dashboard from './Dashboard';
import {getLabels}from '../service/service'
import Popup from './popups'
import List from '@material-ui/core/List';
import LabelIcon from '@material-ui/icons/Label';
import { ListItemIcon } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail'
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DoneIcon from '@material-ui/icons/Done';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import DeleteIcon from '@material-ui/icons/Delete';

import { Card } from '@material-ui/core'

export default function Editlabel(props) 
{
    console.log(props.data,"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
    const [label, setlabel] = React.useState({labelname:''})
     const[open,setopen]=React.useState(false);
     const[handleClose,sethandleclose]=React.useState(false);
     const [list, setlist] = React.useState([])
     useEffect(() => {
        findallLabels()
        
        // console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')

    }, [])
           
    function onhandlechange(event) {
        console.log("helllololo", event.target.name, event.target.value);
        // let fields = notein;
        // fields[event.target.name] = event.target.value;
        setlabel({
            ...label, [event.target.name]: event.target.value
        }
        )
        console.log('fields', label);

    }
   const Updatelabels = (labelid) => {
        let Label={};
        Label.labelname = label.labelname;
        Label.labelid = labelid;
        updatelabel(Label).then(Response => {
            alert(Response.data.message)
            console.log(Response.data)
        })
            .catch((error) => {
                // console.log(this.state.store)
                alert(error.response.message)
            })
    }
    const notecreate = () => {
    
        CreateLabel(label)

            .then(Response => {
                console.log(Response, "create succesfully")
                 alert((Response.data.message))
            }).catch((error) => {
                console.log(error.response.data)
                //  console.log(error.Response.data.message ,"login failed")
                // alert(error.response.data.details)
                alert(error.response.data.message)
            });
            // return (<Note onClickbutton={ notecreate}/>)
    }
    const labeldelete = (labelid) => {
        let Label={};
           Label.labelid = labelid;
         deletelabel(Label)

            .then(Response => {
                console.log(Response, "delete succesfully")
                 alert((Response.data.message))
            }).catch((error) => {
                console.log(error.response.data)
                alert(error.response.data.message)
            });
            // return (<Note onClickbutton={ notecreate}/>)
    }
    const findallLabels = () => {
        console.log('insider get labels')
        getLabels()
        
            .then(Response => {
                setlist(Response.data)

                console.log(Response.data, "list")
                console.log(Response.data)
                // alert((Response.data.message))
            }).catch((error) => {
                console.log(error.response.data)
                //  console.log(error.Response.data.message ,"login failed")
                // alert(error.response.data.details)
                alert(error.response.data.message)
            });
    
    }
    return (
        <div>
        <Dialog onClose={props.function} aria-labelledby="simple-dialog-title" open={props.open} >
            <DialogTitle>Create Label</DialogTitle>

            <List>

                <ListItem>
                    <ListItemAvatar>

                        <ClearOutlinedIcon />

                    </ListItemAvatar>
                    <TextField placeholder="create New label" name = "labelname"
                     onChange={onhandlechange}
                        ></TextField>
                    <ListItemAvatar>
                        <button onClick={notecreate}>done</button>
                        {/* <DoneIcon  onClick ={Editlabels}/> */}

                    </ListItemAvatar>
                </ListItem>
                
                {list.map((o) => (
                            <ListItem>
                                <ListItemAvatar>
                                    <DeleteIcon onClick={()=>labeldelete(o.labelid)} ></DeleteIcon>
                                    {/* <LabelOutlinedIcon /> */}
                                </ListItemAvatar>
                                <TextField placeholder={o.labelname} name = "labelname"  onChange={onhandlechange}> </TextField>
                                {/* <ListItemText primary={o.labelName} /> */}
                                <ListItemAvatar>
                                    <EditOutlinedIcon onClick = {()=>Updatelabels(o.labelid)} />
                                </ListItemAvatar>
                            </ListItem>
                        ))}  
                
                
           
            </List>
        </Dialog>
        
    </div>
    )

   

}

