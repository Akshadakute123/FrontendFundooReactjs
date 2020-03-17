import React, { Component, useEffect } from 'react';
import './Toolbar.css'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DeleteIcon from '@material-ui/icons/Delete';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import LabelIcon from '@material-ui/icons/Label';
import AccountCircle from '@material-ui/icons/AccountBox'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase';
import EditIcon from '@material-ui/icons/Edit';
import { Container, ClickAwayListener, TextField } from '@material-ui/core';
import Noteslist from './NotesList';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import Popup from './popups'
import CreateNote from './CreateNote';
import Editlabel from './Editlabel';
import GetAllLabels from './GetAllLabels';
import Label from '@material-ui/icons/Label'
import Trash from './Trash';
import { trash, trashfile, findnotes } from '../service/service';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function Dashboard(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const [allNotes, setAllNotes] = React.useState([]);

    const [isOpen, setOpenPoup] = React.useState(false);
    const [value, setvalue] = React.useState(false)

    const toggle = () => {
        setvalue(true)
    }
    const handleclosevalue = () => {
        setvalue(false)
    }

    const togglePopup = () => {
        setOpenPoup(true);
        console.log(open, "open")
    }
    const handleClose = () => {
        setOpenPoup(false);
    }
    console.log(isOpen, "popup funxtion state")
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const Listoftrash = () => {
        trashfile()
            .then(Response => {
                setAllNotes(Response.data)
                console.log(Response.data, "list", allNotes);

                // alert((Response.data.message))
            }).catch((error) => {
                console.log(error.response.data)
                //  console.log(error.Response.data.message ,"login failed")
                // alert(error.response.data.details)
                alert(error.response.data.message)
            });
    }



    // function onhandlechange(event) {
    //     console.log("helllololo", event.target.name, event.target.value);
    //     // let fields = notein;
    //     // fields[event.target.name] = event.target.value;
    //     setlabels({
    //         ...labels, [event.target.name]: event.target.value
    //     }
    //     )
    //     console.log('fields', labels);

    // }

    useEffect(() => {
        findallnotes()
        console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
    }, [])

    const findallnotes = () => {
        findnotes()
            .then(Response => {
                setAllNotes(Response.data)

                console.log(Response.data, "list")
                console.log(Response.data)
                // alert((Response.data.message))
            }).catch((error) => {
                console.log(error.response.data)
                //  console.log(error.Response.data.message ,"login failed")
                // alert(error.response.data.details)
                alert(error.response.data.message)
            });
    }



    return (

        <div>

            <header className="toolbar">
                <nav className="toolbar_nav">
                    <div>
                        <IconButton onClick={handleDrawerOpen}>
                            <MenuIcon />

                        </IconButton>
                    </div>
                
                    <div className="toolbar_logo"><a href="/">The Logo</a> </div>
                    {/* <div className="spacer"> */}
                    <div className="toolbar_nav-item">


                        <div>
                            <SearchIcon className="searchbar" />
                        </div>
                        <div>
                            <InputBase className="searchbar-tittle"
                                placeholder="Search…" />
                        </div>
                        <br />
                    </div>
                    {/* </div> */}




                    <div>

                        <AccountCircle className="iconbutton" />
                    </div>


                </nav>
            </header>
            <Drawer
                variant="persistent"
                anchor="left"
                // className={classes.drawer}
                open={open}

            >
                <div>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon /> <ChevronRightIcon />
                    </IconButton>
                    {/* </div> */}
                </div>
                <Divider />
                <List>
                    {['Notes', 'Reminder'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <EmojiObjectsIcon /> : <NotificationsIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>

                <Divider />
                <List>
                    {['Labels'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
               <GetAllLabels />

                </List>
                {/* <div style={{ marginRight: '100px' }}>
                    <label>Labels</label>

                </div >
                 */}

                
                <List>
                    {['Editlabels'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon> <EditIcon onClick={togglePopup} />


                            </ListItemIcon>

                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                {/* <div>
                    {isOpen && <Popup
                        content={<>
                            <div>
                                <TextField
                                    placeholder="please type inside me" onChange={onhandlechange} />
                                <button onClick={props.onClickbutton}>done</button>
                            </div>
                        </>}
                        handleClose={togglePopup}
                    />}
                </div> */}
                <Divider />

                <List>
                    {['Archieve', 'Trash'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <DeleteIcon onClick={Listoftrash} />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Container>
                {/* <ClickAwayListener onClickAway={onclickaway}> */}
                <div>



                    <CreateNote />




                </div>
                {/* </ClickAwayListener> */}

            </Container>

            <Editlabel data={isOpen} function={handleClose}
            />
            <Trash data={value} function={handleclosevalue} />

            <Noteslist data={allNotes} />

        </div>
    )
}
export default Dashboard; 