import React from 'react'
import Icons from './Icons'
import  {ListItemIcon} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/MoveToInbox';

import {archieve} from '../service/service'
export default function Archieve(props)
{
    const ArchieveNote=(id)=>
    { 
        let notes={

        }
        notes.noteId=id
        console.log(id)
        archieve(notes)
    
           .then(Response => {
               console.log(Response, "note archieve succesfully")
                alert((Response.data.message))
                props.newdata();
           }).catch((error) => {
               console.log(error.response.data)
               //  console.log(error.Response.data.message ,"login failed")
                alert(error.response.data.details)
               alert(error.response.data.message)
           });
           // return (<Note onClickbutton={ notecreate}/>)
   }


    return(
        <ListItemIcon>
            <InboxIcon  onClick={()=>ArchieveNote(props.noteId)}></InboxIcon>
            
         </ListItemIcon>

    
       
    )
}