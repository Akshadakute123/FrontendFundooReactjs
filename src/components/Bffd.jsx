import React, { Component, useEffect } from 'react'
import { findnotes, createNote } from '../service/service'
import { Card } from '@material-ui/core'
import {ListItemIcon, Tooltip} from '@material-ui/core'
import Icons from './Icons'
import Dashboard from './Dashboard'
import {ispin} from '../service/service'
import Editlabel from './Editlabel'
import CreateNote from './CreateNote'
import Pagination from './Pagination'

function Noteslistpagination(props) {

    const [state, setstate] = React.useState([])
    const [pin1, setPin] = React.useState(true)
   
//   // Change page
//   const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        findallnotes()
        
    }, [])
   
    const pinNote=(noteid)=>{
        console.log(noteid)
        ispin(noteid)
    
        .then(response => {
            // setListNote(response.data)
            console.log("response ---->", response.data)
                  findallnotes();
        }).catch(error => {
            console.log("error ---->", error)
        })
        
    }
    const findallnotes = () => {
        findnotes()
            .then(Response => {
                setstate(Response.data)

                console.log(Response.data, "list")
                console.log(Response.data)
                // alert((Response.data.message))
            }).catch((error) => {
                console.log(error.response.data)
               
                alert(error.response.data.message)
            });
    }

    return (
        

<div>
        {/* <CreateNote /> */}
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {/* state={currentPosts} */}

            {props.posts.map(o => {
                return <div style={{ marginTop: '200px', marginBottom: '5px', marginLeft: '200px', width: '25%' }}>
                    <Card style={{ "backgroundColor": o.backgroundColor }}>
                    <div className="pinicon"   >
                                {o.tittle}
                                {o.ispin ?
                                    <ListItemIcon style={{ marginLeft: "300px" }} onClick={()=>pinNote(o.noteId)} > <Tooltip title="Pin note">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path fill="#000" d="M17 4v7l2 3v2h-6v5l-1 1-1-1v-5H5v-2l2-3V4c0-1.1.9-2 2-2h6c1.11 0 2 .89 2 2zM9 4v7.75L7.5 14h9L15 11.75V4H9z" />
                                        </svg>
                                    </Tooltip>
                                    </ListItemIcon>
                                    :
                                    <ListItemIcon style={{ marginLeft: "300px" }} onClick={()=>pinNote(o.noteId)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path fill="#000" d="M17 4a2 2 0 0 0-2-2H9c-1.1 0-2 .9-2 2v7l-2 3v2h6v5l1 1 1-1v-5h6v-2l-2-3V4z" />
                                    </svg></ListItemIcon>
                                }
                            </div>
                           
                        <div>

                            {o.description}
                        </div>
                        <div>
                            {o.noteId}
                         </div>
                        <Icons data={o.noteId} functions={props.function} />
                        
                        {/* <Dashboard function ={findallnotes}/> */}
                    </Card>

                </div>

            })}

        </div>
       
        </div>
    )

}
export default Noteslistpagination