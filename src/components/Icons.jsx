import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DeleteIcon from '@material-ui/icons/Delete';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import LabelIcon from '@material-ui/icons/Label';
import AccountCircle from '@material-ui/icons/AccountBox'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import ExpansionPanelActions from '@material-ui/icons/ExpandLessOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Trashnote from './Trashnote';
import Archieve from './Archieve';
import GetAllLabels from './GetAllLabels';
import Editlabel from './Editlabel';
import Reminder from './Reminder';
import AddLabelToNote from './AddLabelToNote';
import AddCollaborator from './collaboratorpeople'
import Bagroundcolorchange from './Bagroundcolor';

export default function Icons(props)
{ 
  console.log("props.functions from create",props.functions)
  console.log(props.data,"lable namee")
  const [date, setDate] = React.useState(new Date);
    const[close,setclose]=React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorE, setAnchorE] = React.useState(null);
    const [anchorE2, setAnchorE2] = React.useState(null);
    const[popper,setpopper]=React.useState(false);

  const handleopen=event=>
  {
    setpopper(event.currentTarget)
  }
  const handleclose2=()=>
  {
    setpopper(true)
  }
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleClick1 = event => {
      setAnchorE(event.currentTarget);
    };
  
    const handleClose1 = () => {
      setAnchorE(null);
    };
    const handleClick3 = event => {
      setAnchorE2(event.currentTarget);
  };

  const handleClose3 = () => {
      setAnchorE2(null);
  };

  
    // const closestate=()=>
    // {
    //     setclose(true)
    // }
     
const open=Boolean(popper)

    return(
    <List>
    
    <ListItemIcon>
      <Reminder data={props.data} function={handleClick3} /></ListItemIcon>
            <Menu
                anchorEl={anchorE2}
                keepMounted
                open={Boolean(anchorE2)}
                onClose={handleClose3}
            >
                <div style={{ width: "500px", position: "relative" }}>
                    <MenuItem><Reminder style={{ width: "500px", position: "relative" }} value={date} onChange={() => setDate(date)} />
                        <Button size="small" >Set</Button>
                    </MenuItem></div>

            </Menu>

    
    <ListItemIcon>
      <AddCollaborator data={props.data}/>
      {/* {<PersonAddIcon />} */}
      </ListItemIcon>
      <ListItemIcon>
        <Bagroundcolorchange noteId={props.data} />
      </ListItemIcon>
    <ListItemIcon>

    <Archieve noteId={props.data} newdata={props.functions}/>
</ListItemIcon>
    <ListItemIcon>
      <MoreVertIcon onClick={handleClick}/>
    
    
    </ListItemIcon>
    <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <MenuItem  onClick={handleClick1}>Add Label</MenuItem> */}
        {/* <MenuItem >
        <Editlabel/>
        </MenuItem> */}
         <Menu
         id="simple-menu"
         anchorE={anchorE}
         keepMounted
         open={Boolean(anchorE)}
         onClose={handleClose1}
          >
            

          {/* <Editlabel  datas={popper} functions={handleclose2} opens={open} ></Editlabel>
         <GetAllLabels /> */}
         </Menu>
        {/* <MenuItem >delete note</MenuItem> */}
        <AddLabelToNote noteId={props.data}/>
        <Trashnote noteId={props.data} datafromnotes={props.functions}/>
      </Menu>
       

    
    <Button size="small" onClick={props.function} >close</Button>
  
  
</List> 
    )
}