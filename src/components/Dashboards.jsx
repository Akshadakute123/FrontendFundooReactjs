// import React, { Component } from 'react';
// import './Toolbar.css'
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Drawer from '@material-ui/core/Drawer';
// import Divider from '@material-ui/core/Divider';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import NotificationsIcon from '@material-ui/icons/Notifications'
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import DeleteIcon from '@material-ui/icons/Delete';
// import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
// import LabelIcon from '@material-ui/icons/Label';
// import AccountCircle from '@material-ui/icons/AccountBox'
// import SearchIcon from '@material-ui/icons/Search'
// import InputBase from '@material-ui/core/InputBase';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Chip from '@material-ui/core/Chip';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import PersonAddIcon from '@material-ui/icons/PersonAdd';
// import { createNote } from '../service/service';
// import MoreVertIcon from '@material-ui/icons/MoreVert';


// export default function Dashboards() {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const [open, setOpen] = React.useState(false);
//     const [state, setstate] = React.useState(false);
//     const [note, setnote] = React.useState("");
//     const [notein, setnotein] = React.useState({ tittle: '', description: '' })
//     const handleDrawerOpen = () => {
//         setOpen(true);
//     };

//     const handleDrawerClose = () => {
//         setOpen(false);
//     };
//     const handleProfileMenuOpen = event => {
//         setAnchorEl(event.currentTarget);
//     };

//     const openfile = () => {
//         setstate(true);
//         console.log(state)
//     }

//     function onhandlechange(event) {
//         console.log("helllololo", event.target.name, event.target.value);
//         // let fields = notein;
//         // fields[event.target.name] = event.target.value;
//         setnotein({
//             ...notein, [event.target.name]: event.target.value
//         }
//         )
//         console.log('fields', notein);

//     }

//     //   function handleChange(event) {
//     //     console.log("hiiiiii  iiiiii", note)
//     //     setnote(
//     //       event.target.value)
//     //     //    console.log([event.target.name])   
//     //     //    console.log(event.target.value)       

//     //   }

//     const notecreate = () => {
//         // let notes = {

//         // };

//         // notes.tittle = notein.tittle
//         // notes.description = notein.description

//         // console.log(notes.description, "hiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
//         createNote(notein)

//             .then(Response => {
//                 console.log(Response, "create succesfully")
//                 // alert((Response.data.message))
//             }).catch((error) => {
//                 console.log(error.response.data)
//                 //  console.log(error.Response.data.message ,"login failed")
//                 // alert(error.response.data.details)
//                 alert(error.response.data.message)
//             });
//     }

//     return (

//         <div>

//             <header className="toolbar">
//                 <nav className="toolbar_nav">
//                     <div>
//                         <IconButton onClick={handleDrawerOpen}>
//                             <MenuIcon />

//                         </IconButton>
//                     </div>
//                     <div className="toolbar_logo"><a href="/">The Logo</a> </div>
//                     {/* <div className="spacer"> */}
//                     <div className="toolbar_nav-item">


//                         <div>
//                             <SearchIcon className="searchbar" />
//                         </div>
//                         <div>
//                             <InputBase className="searchbar-tittle"

//                                 placeholder="Search…" />

//                         </div>
//                         <br />
//                     </div>
//                     {/* </div> */}




//                     <div>

//                         <AccountCircle className="iconbutton" />
//                     </div>


//                 </nav>
//             </header>
//             <Drawer

//                 open={open}

//             >
//                 <div>
//                     <IconButton onClick={handleDrawerClose}>
//                         <ChevronLeftIcon /> <ChevronRightIcon />
//                     </IconButton>
//                     {/* </div> */}
//                 </div>
//                 <Divider />
//                 <List>
//                     {['Notes', 'Reminder'].map((text, index) => (
//                         <ListItem button key={text}>
//                             <ListItemIcon>{index % 2 === 0 ? <EmojiObjectsIcon /> : <NotificationsIcon />}</ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItem>
//                     ))}
//                 </List>
//                 <Divider />
//                 <List>
//                     {['Labels'].map((text, index) => (
//                         <ListItem button key={text}>
//                             <ListItemIcon>{<LabelIcon />}</ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItem>
//                     ))}
//                 </List>
//                 <Divider />
//                 <List>
//                     {['Archieve', 'Trash'].map((text, index) => (
//                         <ListItem button key={text}>
//                             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <DeleteIcon />}</ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItem>
//                     ))}
//                 </List>
//             </Drawer>
//             {/* <div className="expansionpanel"  > */}
//                 <ExpansionPanel defaultExpanded onClick={openfile} >
//                     <div>
//                         <ExpansionPanelSummary
//                             expandIcon={<ExpandMoreIcon />}
//                             arial-controls="panel1c-content"
//                             id="panel1c-header"  >

//                         </ExpansionPanelSummary>
//                     </div>

                    
//                         {/* <ExpansionPanelDetails className> */}
//                         {state ?
//                             <div>
//                                 <TextField
//                                     id="standard-input"
//                                     label="Title"
//                                     name="tittle"
//                                     // value={notein.tittle}
//                                     // onchange={e=>setnote({tittle:e.target.value})}
//                                     onChange={onhandlechange}

//                                     type="text" />
//                                 {/* <TextField
//                     id="standard-input"
//                     label="Take a note"

//                     type="text" /> */}

//                             </div> : null}
//                         {state ?
//                             <div>
//                                 {/* {state? */}
//                                 <div className>
//                                     <TextField
//                                         id="standard-input"
//                                         label="Take a note"

//                                         //value={note.description}
//                                         // onchange={e=>setnote({description:e.target.value})}
//                                         name="description"
//                                         // value={notein.description}
//                                         onChange={onhandlechange}
//                                         onClick={openfile}

//                                         type="text" />
//                                     {/* <h2>your name is{note.description}</h2> */}
//                                 </div>
//                                 {/* :null} */}




//                                 <div className="barbidos">
//                                     <Chip label="Barbados" onDelete={() => { }} />
//                                 </div>
//                                 {/* </ExpansionPanelDetails> */}
                            
//           {/* <button onClick={notecreate}>create</button> */}

//                         <div>
//                             <Divider />
//                             <ExpansionPanelActions>           <List>


//                                 <ListItemIcon><NotificationsIcon /></ListItemIcon>
//                                 <ListItemIcon>{<PersonAddIcon />}</ListItemIcon>
//                                 <ListItemIcon><InboxIcon /></ListItemIcon>
//                                 <ListItemIcon><MoreVertIcon /></ListItemIcon>

//                             </List>

//                                 <Button size="small">Cancel</Button>
//                                 <Button size="small" color="primary" onClick={notecreate}>Save</Button>

//                             </ExpansionPanelActions>
//                         </div>
//                         </div>
//                      </div>:null}
//         </ExpansionPanel>

            
//         </div>


//     );
// }





// {listnotes.filter (note=>note.trash===true).mao(o=>)




