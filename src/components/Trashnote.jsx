import React from 'react'
import { trash } from '../service/service';
import MenuItem from '@material-ui/core/MenuItem';
import { Menu } from '@material-ui/core';
export default function Trashnote(props)
{ 
    console.log(props.datafromnotes,"information from icons")
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

                alert((Response.data.message))
                 props.datafromnotes();
            }).catch((error) => {
                console.log(error.response.data)
             
                alert(error.response.data.message)
            });
           
    }


     return(
         
        <MenuItem onClick={()=> deleteNote(props.noteId)}>Delete note</MenuItem>

        
     )
}