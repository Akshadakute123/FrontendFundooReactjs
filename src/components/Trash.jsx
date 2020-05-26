import React, { Component, useEffect } from 'react'
import {trashfile, untrash, deletes} from '../service/service'
import { Card } from '@material-ui/core'
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { ListItemIcon } from '@material-ui/core';
import Icons from './Icons'
import Popup from './popups'
export default function Trash(props) {



    const[state, setstate] = React.useState([])
    useEffect(() => {
        
        Listoftrash()
        
        console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')

    }, [])
    const unTrashNote = (noteid)=> {
        untrash(noteid)
        .then(response => {
            // setListTrashNote(response.data)
            console.log("response ---->", response.data)
        }).catch(error => {
            console.log("error ---->", error)
        })

    }
    const deletefromTrash=(id)=>{
        deletes(id)
        .then(response => {
            // setListTrashNote(response.data)
            console.log("response ---->", response.data)
        }).catch(error => {
            console.log("error ---->", error)
        })

    }
    const Listoftrash = () => {
        trashfile()
            .then(Response => {
                setstate(Response.data)

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
            <h2>Notes in Trash are deleted after 7 days</h2>
           
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

                 {state.map(o => {
                    // <Popup
                    return <div style={{ marginTop: '50px', marginBottom: '5px', marginLeft: '200px', width: '25%' }}>
                        <Card>
                            <div>
                                {o.tittle}
                            </div>
                            <div>

                                {o.description}
                            </div>
                            <div>
                                {o.noteId}
                            </div>
                            <div>
                                
                            <ListItemIcon style={{ marginLeft: "15px", marginTop: "20px" }}><RestoreFromTrashIcon onClick={()=>unTrashNote(o.noteId)}/></ListItemIcon>
                            <ListItemIcon style={{ marginLeft: "30px" }}><DeleteForeverIcon onClick={()=>deletefromTrash(o.noteId)} /></ListItemIcon>
                             </div>
                            {/* <Icons  /> */}
                        </Card>
                    </div>
                   
                    

                })}
 
            </div>

            
        </div>
    )
}
