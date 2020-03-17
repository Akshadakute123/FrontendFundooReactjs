
import React, {useEffect } from 'react';
import { CreateLabel } from '../service/service';
import { TextField, Popover } from '@material-ui/core';
import Dashboard from './Dashboard';
import {getLabels}from '../service/service'
import Popup from './popups'
import List from '@material-ui/core/List';
import LabelIcon from '@material-ui/icons/Label';


import { Card } from '@material-ui/core'

export default function Editlabel(props) {

    const [labels, setlabels] = React.useState('')

    
    
    const Editlabels = () => {
        console.log("Editlabel")
        let label={

        }
        label.labelname=labels
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
        
    }
    return (
        <div>
           
           <Popover
             open={props.opens}
             anchoeEl={props.datas}
             onClose={props.functions}
             >
            <div>
            <TextField placeholder="create label" name="labels" onChange={e=>setlabels(e.target.value)}>
            </TextField>
            <button onClick={Editlabels}>done</button>
            </div>
            </Popover>





            <div>
            {props.data && <Popup
                content={<>
                    <div>
                        <TextField
                            placeholder="please type inside me"  onChange={e=>setlabels(e.target.value)} /> 
                        <button onClick={Editlabels}>done</button>
                    </div>
                </>}
             handleClose={props.function }             
             
            />}
          
          

            </div>
            </div>
                       
        
    )

   

}