
import React, {useEffect } from 'react';
import { CreateLabel } from '../service/service';
import { TextField, Card, Checkbox } from '@material-ui/core';
import Dashboard from './Dashboard';
import {getLabels}from '../service/service'
import Popup from './popups'
import List from '@material-ui/core/List';
import LabelIcon from '@material-ui/icons/Label';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function GetAllLabels() {


    const [list, setlist] = React.useState([])


  

    useEffect(() => {
        findallLabels()
        
        console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')

    }, [])
    const findallLabels = () => {
        console.log('insider get labels')
        // getLabels()
        //     .then(Response => {
        //         setlist(Response.data)

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
            

                {list.map(o => {
                    return <div >

                        
                            <List>
                           
                            <ListItemIcon> 
                                <Checkbox/>
                            {o.labelname}
                            </ListItemIcon>
                        
                          
                            </List>
                          
                        </div>

            

                })}
            
        

        </div>   
 


)
}