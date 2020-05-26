import React , { useEffect }from 'react'
import { addLabeltonote, LabelAddedToNote, displayLabelUnAdded, removeToLabelFromNote } from '../service/service';
import MenuItem from '@material-ui/core/MenuItem';
import { Menu, Popover } from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';
import GetAllLabels from './GetAllLabels';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
// import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));
export default function AddLabelToNote(props)
{
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const[addlabeltonotes,setaddlabeltonote]=React.useState([]);
    const[unaddedlabel,setunaddedlabel]=React.useState([]);
    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
  
    useEffect(() => {
       displayLabelAddedToNote();
       displayLabelUnAddedToNotes();
      
  }, [])

    const displayLabelAddedToNote = () => {
    
    LabelAddedToNote(props.noteId).then(Response => {
        
            setaddlabeltonote(Response.data)
            
        }).catch((error) => {
            
            alert(error.response.message)
        })
        
    }
    const displayLabelUnAddedToNotes = () => {
      displayLabelUnAdded(props.noteId).then(Response => {
        setunaddedlabel(Response.data)
        
        
    }).catch((error) => {
        alert(error.response.message)
    })
  }
    const addLabelToNotes = (labelid) => {
      addLabeltonote(props.noteId, labelid).then(Response => {
            alert(Response.data.message)
        }).catch((error) => {
            alert(error.response.data)
        })
    }
  const  removeLabel = (labelid) => {
      removeToLabelFromNote(labelid,props.noteId).then(Response => {
          alert(Response.data.message)
          console.log(Response.data.message)
          
      }).catch((error) => {
    
          alert(error.response.message)
      })
  }
    console.log(addlabeltonotes,"================================>")
    console.log(unaddedlabel,"--------------------------------------------->")

    return(
        <div>        
            <MenuItem aria-describedby={id} onClick={handleClick}>Add Label</MenuItem>
        <div>
        
        <Popover id={id} open={open} anchorEl={anchorEl}>
          <label>labelName</label><br></br>
          {/* <GetAllLabels /> */}
          <input type="text" placeholder="type label name"/>
          <MenuItem  >Label Notes</MenuItem>
                                   <div>
                                        {addlabeltonotes.map(addLabel => (
                                              <div className="menuLabelDisplay" onClick={() => {removeLabel(addLabel.labelid); }}>
                                                <CheckBoxOutlinedIcon style={{ "padding-right": '5px' }} />

                                                <MenuItem style={{ "margin-top": '-6px' }}  >{addLabel.labelname}
                                                </MenuItem>
                                            </div>
                                        ))}
                                        </div>
                                        <div>
                                        {unaddedlabel.map(addLabel => (
                                            <div className="menuLabelDisplay" onClick={() => {addLabelToNotes(addLabel.labelid); }}>
                                                < CheckBoxOutlineBlankIcon style={{ "padding-right": '5px' }} />
                                                <MenuItem style={{ "margin-top": '-6px' }} >{addLabel.labelname}
                                                </MenuItem>
                                            </div>
                                        ))}
                                       </div>
           {/* <GetAllLabels /> */}


      
        </Popover>
      </div>
      </div>

    );


 


        
    
}