import React, { Component, useEffect } from 'react'
import {trashfile} from '../service/service'
import { Card } from '@material-ui/core'
import Icons from './Icons'
import Popup from './popups'
export default function Trash(props) {



    const[state, setstate] = React.useState([])
    useEffect(() => {
        Listoftrash()
        
        console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')

    }, [])
    const Listoftrash = () => {
        // trashfile()
        //     .then(Response => {
        //         setstate(Response.data)

        //         console.log(Response.data, "list")
        //         console.log(Response.data)
        //         // alert((Response.data.message))
        //     }).catch((error) => {
        //         console.log(error.response.data)
        //         //  console.log(error.Response.data.message ,"login failed")
        //         // alert(error.response.data.details)
        //         alert(error.response.data.message)
        //     });
    }

    return (
        <div>
           {props.data && <Popup  content={<>
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
                            {/* <Icons  /> */}
                        </Card>
                    </div>
                   
                    

                })}
 
            </div>
</>} 
             handleClose={props.function }             
             />}
        </div>
    )
}
