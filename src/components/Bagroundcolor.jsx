import React, { Component } from 'react';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import Menu from '@material-ui/core/Menu';
// import { setNoteBackgroudColor } from '../components/Service';
import { setBackgroundColor } from '../service/service';

 import './CssStyles.css'
export default function Bagroundcolorchange(props)
{
    console.log("noteid ius",props.noteId)
    const[anchorEl3,setanchorEl3]=React.useState();

    

   const changeBackGroudColor = (colorChnage) => {
        let Notes = {};
        Notes.noteId = props.noteId;
        Notes.backgroundColor = colorChnage;
        setBackgroundColor(Notes).then(Response => {
            console.log(Response.data.message)
            // this.callBackData();
        }).catch((error) => {
            alert(error.response.data.message)
        })
    }

   const  handleCloseColor = () => {
     setanchorEl3( false );
    }

   const handleClickOpenColor = event => {
        setanchorEl3( event.currentTarget );
    
        // this.setState({ anchorEl3: true });
    }

    // callBackData = () => {
    //     this.props.callBackData();
    // }


    
        return (
            <div className="iconNotes">
                <ColorLensOutlinedIcon className="iconNotes"
                    style={{ "margin": '-10px' }}
                    onClick={handleClickOpenColor} />
                <div >
                    <Menu 
                        anchorEl={anchorEl3}
                        open={Boolean(anchorEl3)}
                        onClose={handleCloseColor}
                        PaperProps={{ style: { width: '20ch' }, }}  >
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', "padding-left": '3%' }}  >
                            <div className="colorIcon" style={{ "backgroundColor": 'white' }} onClick={() => { changeBackGroudColor("white"); handleCloseColor(); }} ></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'red' }} onClick={() => { changeBackGroudColor("#f28b82"); handleCloseColor(); }}></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'orange' }} onClick={() => { changeBackGroudColor("#fbbc04"); handleCloseColor(); }}></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'yellow' }} onClick={() => { changeBackGroudColor("#fff475");handleCloseColor(); }}></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'green' }} onClick={() => { changeBackGroudColor("#ccff90");handleCloseColor(); }}></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'teal' }} onClick={() => { changeBackGroudColor("#a7ffeb"); handleCloseColor(); }}></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'blue' }} onClick={() => { changeBackGroudColor("#cbf0f8");handleCloseColor(); }}></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'darkBlue' }} onClick={() => { changeBackGroudColor("red"); handleCloseColor(); }}></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'purple' }} onClick={() => { changeBackGroudColor("red"); handleCloseColor(); }}></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'pink' }} onClick={() => { changeBackGroudColor("red"); handleCloseColor(); }}></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'brown' }} onClick={() => { changeBackGroudColor("red");handleCloseColor(); }}></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'gray' }} onClick={() => {changeBackGroudColor("red"); handleCloseColor(); }} ></div>
                        </div>
                    </Menu>
                </div>
            </div>
        );
    
}

