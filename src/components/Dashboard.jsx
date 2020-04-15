/* eslint-disable*/
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
import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import { createMuiTheme, Tooltip, Avatar } from "@material-ui/core";
import './Dashboards.css';


import { InputAdornment } from '@material-ui/core';


function Dashboard(props) {
    console.log("-------------------------->",props)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const [allNotes, setAllNotes] = React.useState([]);

    const [isOpen, setOpenPoup] = React.useState(false);
    const [value, setvalue] = React.useState(false)
    const [opens, setopens] = React.useState(false);
    const [refresh, setrefresh] = React.useState(false)




    const handleReload = () => {
        setrefresh(true)

    }

   
  const handleTrash = () => {
    props.data.history.push('/dashboard/trash')
  }
  
  const handleNotes=()=>{
    props.data.history.push('/dashboard/note')
  }
  const handleArchive=()=>{
    props.data.history.push('/dashboard/archive')
  }



    // handleSignOut=()=>
    // {
    //     sessionStorage.removeItem('token');
    //     sessionStorage.removeItem('img');
    //     this.props.props.history.push('/');
    // }

    

    const handleMenu = event => {


        setopens(true)

    };

   

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
        // findallnotes()
        console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
    }, [])

    const findallnotes = () => {
        // findnotes()
        //     .then(Response => {
        //         setAllNotes(Response.data)

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

        

            
        <div >
            <AppBar position='fixed' color='inherit'>
                <Toolbar>
                    <IconButton
                        edge='start'
                        onClick={handleDrawerOpen}
                        
                        color='inherit'

                        aria-label='open drawer'>
                        <MenuIcon />
                    </IconButton>

                    <div className='imgTitle'>
            
                        <img className='image' alt="Logo" aria-hidden="true" src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" />
                        <Typography className='header' variant='h6' noWrap>Fundoo</Typography>
                    </div>
                    <div className='imgTitle'><Typography className='header' variant='h6' noWrap></Typography></div>


                    <div className="search">
                        <InputBase
                            startAdornment={(
                                <InputAdornment position='start' >
                                    <Tooltip title='search'>
                                        <SearchIcon />
                                    </Tooltip>
                                </InputAdornment>
                            )}
                            // value={this.props.value}

                            placeholder='Search'
                            inputProps={{ 'aria-label': 'search' }}


                        />
                    </div>
                    <div className={refresh ? 'loader' : 'refresh'} onClick={handleReload}>
                        <Tooltip title='Refresh'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18">
                                <path d="M9 13.5c-2.49 0-4.5-2.01-4.5-4.5S6.51 4.5 9 4.5c1.24 0 2.36.52 3.17 1.33L10 8h5V3l-1.76 1.76C12.15 3.68 10.66 3 9 3 5.69 3 3.01 5.69 3.01 9S5.69 15 9 15c2.97 0 5.43-2.16 5.9-5h-1.52c-.46 2-2.24 3.5-4.38 3.5z" />
                            </svg>
                        </Tooltip>
                    </div>
                    <div className='settings' >

                        <Tooltip title='List View'>
                            {/* <ViewStreamIcon></ViewStreamIcon> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                <path d="M20,9 L4,9 L4,5 L20,5 L20,9 Z M20,19 L4,19 L4,15 L20,15 L20,19 Z M3,3 C2.45,3 2,3.45 2,4 L2,10 C2,10.55 2.45,11 3,11 L21,11 C21.55,11 22,10.55 22,10 L22,4 C22,3.45 21.55,3 21,3 L3,3 Z M3,13 C2.45,13 2,13.45 2,14 L2,20 C2,20.55 2.45,21 3,21 L21,21 C21.55,21 22,20.55 22,20 L22,14 C22,13.45 21.55,13 21,13 L3,13 Z" />
                            </svg>
                        </Tooltip>
                        </div>
                    <div className='settings'>
                        <Tooltip title='Settings'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z" />
                                <circle cx="12" cy="12" r="3.5" />
                            </svg>
                        </Tooltip>
                    </div>
                    <div className='profile'>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            className='iconButton'
                            aria-haspopup="true"
                            color="inherit"
                            onClick={(event) => { handleMenu(event) }}
                        >
                            <Avatar />
                        </IconButton>
                        <Menu
                            


                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'middle',
                                horizontal: 'bottom',
                            }}
                            open={opens}

                        >
                            <MenuItem >Sign Out</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
           <div >
                           <Drawer  
                variant="persistent"
                anchor="left"
                // className={classes.drawer}
                open={open}

            >
                <div>
                    <IconButton onClick={handleDrawerClose}>
                      
                    </IconButton>
                    {/* </div> */}
                </div>
                <Divider />
                <List>
                    {['Reminder'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon> <NotificationsIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                
          <List style={{backgroundColor:'#feefc3'}}>
            {["Notes"].map((text, index) => (
              <ListItem button key={text} onClick={() => {
                index % 2 === 0 ?
                  handleNotes()
                  :
                  null
              }
              }>
                <ListItemIcon>
                  <EmojiObjectsIcon />
                </ListItemIcon>
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
                    <label>Labe  ls</label>

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
                    {['Archieve'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon> <InboxIcon /></ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <List>
            {["Trash"].map((text, index) => (
              <ListItem button key={text} onClick={() => {
                index % 2 === 0 ?
                  handleTrash()
                  :
                  null
              }
              }>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

            </Drawer>
            </div>

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