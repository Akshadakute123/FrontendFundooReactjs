import React, { Component, useEffect } from 'react'
import { findnotes } from '../service/service'
import { Card } from '@material-ui/core'
import Icons from './Icons'
function Noteslist(props) {

    // const [state, setstate] = React.useState([])
    // //console.log('huiuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')
    // useEffect(() => {
    //     findallnotes()
    //     console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
    // }, [])

    // const findallnotes = () => {
    //     findnotes()
    //         .then(Response => {
    //             setstate(Response.data)

    //             console.log(Response.data, "list")
    //             console.log(Response.data)
    //             // alert((Response.data.message))
    //         }).catch((error) => {
    //             console.log(error.response.data)
    //             //  console.log(error.Response.data.message ,"login failed")
    //             // alert(error.response.data.details)
    //             alert(error.response.data.message)
    //         });
    // }

    useEffect(() => {
        console.log('---------------->in notes', props.data);
    })




    return (


        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

            {props.data.map(o => {
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
                        <Icons data={o.noteId} />
                    </Card>
                </div>

            })}

        </div>


    )

}
export default Noteslist