import React ,{useEffect } from 'react'
import { archievefile, unarchieve } from '../service/service';
import UnarchiveIcon from '@material-ui/icons/Unarchive';
import {ListItemIcon } from '@material-ui/core';
import { Card } from '@material-ui/core'
export default function ArchieveList()
{
    console.log("archievelists")
    const [listArchiveNote, setListArchiveNote] = React.useState([]);
    useEffect(() => {
        console.log("inside the archievelist")
        getAllArchiveNotes()
    }, [])

    const getAllArchiveNotes = () => {
        archievefile()
            .then(response => {
                setListArchiveNote(response.data)
                console.log("response ---->", response.data)
            }).catch(error => {
                console.log("error ---->", error)
            })
    }
    const unarchivenote=(noteId)=>{
        console.log("unarchive",noteId);
        unarchieve(noteId)

        .then(response => {
            // setListArchiveNote(response.data)
            console.log("response ---->", response.data)
        }).catch(error => {
            console.log("error ---->", error)
        })

    }

    
    return (

        <div style={{ marginTop: "100px" }}>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {listArchiveNote.map(o =>
                    <div style={{ marginTop: '10px', marginBottom: '15px', marginLeft: '300px', width: '35%', height: "10px", padding: "50px" }}>
                        <Card className="cardarchive" style={{ height: "95px", alignItems: "center", padding: "10px", backgroundColor: "" }}>
                            <div>
                                {o.tittle}
                            </div>
                            <div>
                                {o.description}
                            </div>
                            <div className="unarchivecon">
                                <ListItemIcon style={{ marginLeft: "15px", marginTop: "20px" }}><UnarchiveIcon onClick={()=>unarchivenote(o.noteId)} /></ListItemIcon>
                            </div>

                        </Card>
                    </div>
                )}
            </div>
        </div>
    )

                        }
                     