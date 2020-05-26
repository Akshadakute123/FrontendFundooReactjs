import React, { useEffect } from 'react'

import { Card, Chip } from '@material-ui/core'
import CreateNote from './CreateNote'
import Icons from './Icons'
import { reminderlist, remove } from '../service/service'

function ListOfReminder() {
    const [listReminderNote, setListReminderNote] = React.useState([])

    useEffect(() => {
        getAllReminderNotes()
    }
        , [])

    const getAllReminderNotes = () => {
        reminderlist()
            .then(response => {
                setListReminderNote(response.data)
                console.log("response ---->", response.data)
            }).catch(error => {
                console.log("error ---->", error)
            })
    }

    const removereminder=(noteid)=>{
        remove(noteid)
        .then(response => {
            console.log("response ---->", response.data)
        }).catch(error => {
            console.log("error ---->", error)
        })
        
    }
    return (
        <div>
            <createNote position="fixed"/>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {listReminderNote.map(o =>
                <div style={{ marginTop: '10px', marginBottom: '5px', marginLeft: '300px', width: '35%', height: "10px", padding: "90px" }}>
                    <Card  style={{ width:"600px", height: "105px", alignItems: "center", padding: "10px", borderRadius:"8px" }}>
                        <div>
                            {o.tittle}
                        </div>
                        <div>
                            {o.description}
                        </div>
                        <Chip
                        style={{marginTop:"20px"}}
        // icon={<FaceIcon />}
        label={o.remindertime}
        // onClick={handleClick}
        onDelete={()=>removereminder(o.noteId)}
      />
      <Icons />
                    </Card>
                </div>
            )}
        </div>
        </div>


    )

}
export default ListOfReminder;