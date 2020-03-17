import React from 'react'
import { trash } from '../service/service';
import MenuItem from '@material-ui/core/MenuItem';
import { Menu } from '@material-ui/core';
export default function Trashnote(props)
{
    const[state,setState]=React.useState()
     const deleteNote=(id)=>
     { 
         let notes={

         }
         notes.noteId=id
         console.log(id)
         trash(notes)
     
            .then(Response => {
                console.log(Response, "note trash succesfully")
                // alert((Response.data.message))
            }).catch((error) => {
                console.log(error.response.data)
                //  console.log(error.Response.data.message ,"login failed")
                // alert(error.response.data.details)
                alert(error.response.data.message)
            });
            // return (<Note onClickbutton={ notecreate}/>)
    }


     return(
         
        <MenuItem onClick={()=> (props.noteId)}>Delete note</MenuItem>

        
     )
}