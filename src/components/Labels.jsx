
import React, { Component } from "react";
import { IconButton, Drawer, createMuiTheme, List, ListItem, ListItemIcon, Divider } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { MuiThemeProvider } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import { getAllLabels } from "../Service/Service.jsx";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { label_id, drawer, openDrawer } from "../Redux/Action";
import EditLabel from './EditLabel'
import Archive from './ArchiveNotes';
import { connect } from "react-redux";
import '../CSSFile/DropDown.css'
import { getAllNotes, getAllArchiveNotes } from '../Service/Service';
import { makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paper: {
                marginTop: "70px",
                width: "20%"
            }
        }
    }
});

export class DropDown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            AnchorEl: null,
            allLable: [],
        };
    }

    handleDrawer = event => {
        this.props.openDrawer();

        const { currentTarget } = event;
        this.setState({
            AnchorEl: currentTarget,
            open: !this.state.open
        });
    };

    handleArchive = event => {


    };


    // showAllNotes = () => {

    //     let token = localStorage.getItem("Token");
    //     console.log('show all notes');

    //     getAllNotes(token)

    //         .then(Response => {
    //             console.log("savg");
    //             console.log('res:----- ', Response);
    //             console.log('res data:----- ', Response.data.data);
    //             this.setState({
    //                 notes: (Response.data.data).reverse()
    //             })
    //         })
    // }

    // showAllArchiveNotes = () => {

    //     let token = localStorage.getItem("Token");
    //     console.log('show all notes');

    //     getAllArchiveNotes(token)

    //         .then(Response => {
    //             console.log("savg");
    //             console.log('res:----- ', Response);
    //             console.log('res data:----- ', Response.data.data);
    //             this.setState({
    //                 notes: (Response.data.data).reverse()
    //             })
    //         })
    // }

    render() {
        let open = this.state.open;
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <IconButton onClick={this.handleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <div style={{ textAlign: "initial" }}>
                        <Drawer variant="persistent" anchor="left" open={open}>
                            <List>
                                <ListItem className="over"
                                    onClick={() => this.props.history.push('/dashboard/note')}
                                    button
                                    key="Notes"

                                >
                                    <ListItemIcon>
                                        <EmojiObjectsOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Notes" />
                                </ListItem>

                                <ListItem className="over"
                                    button
                                    key="Reminders"
                                    className="over"
                                >
                                    <ListItemIcon>
                                        <AddAlertOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Reminder" />
                                </ListItem>
                            </List>

                            <Divider></Divider>

                            <div
                                className="label"
                            >
                                LABELS
                           </div>
                            <List>
                                {/* {this.state.allLable.map(label => ( */}
                                <ListItem
                                    // onClick={() => {
                                    //     console.log('labelid--->' + label.id);
                                    //     this.props.label_id(label.id)
                                    //     this.props.handleLabelClick(label)

                                    // }}
                                    button
                                    key="label"
                                    className="over"
                                >
                                    <ListItemIcon>
                                        <LabelOutlinedIcon />
                                    </ListItemIcon>
                                    {/* <div > {label.lable_title}</div> */}
                                </ListItem>

                                <ListItem className="over">
                                    <EditOutlinedIcon />
                                    {/* <div style={{ paddingLeft: "31px" }}>
                                        {/* <EditLabel refresh={this.getAllLabels} /> */}

                                    {/* </div> */}
                                    {/* <ListItemText primary="Edit Label" /> */}
                                    <EditLabel />




                                    import React, { Component } from 'react';
	import Dialog from "@material-ui/core/Dialog";
	import Typography from "@material-ui/core/Typography";
	import ClearIcon from "@material-ui/icons/Clear";
	import TextField from "@material-ui/core/TextField";
	import CheckIcon from "@material-ui/icons/Check";
	import { Divider } from "@material-ui/core";
	import { Tooltip } from "@material-ui/core";
	import { createLabel, getAllLabels, editLabel } from "../Service/Service";
	import EditShowOrDelete from "./EditShowOrDelete";
	import ShowEditLabel from "./ShowEditLabel";
	
	class EditLabel extends Component {
	
	    constructor(props) {
	        super(props)
	        this.state = {
	            allLable: [],
	            clickAway: false,
	            name: '',
	            labels: null
	        }
	    }
	
	    handleChangeText = (event) => {
	        this.setState({
	            [event.target.name]: event.target.value
	        })
	    }
	
	    sentToBackEnd = () => {
	        let label = {};
	        console.log("sent");
	
	        label.name = this.state.name;
	        let token = localStorage.getItem("Token");
	        console.log("Label Outside");
	
	        console.log(label, token);
	
	        console.log("Labels");
	
	        createLabel(label, token)
	            .then(Response => {
	                console.log("Inside Label");
	
	                console.log(Response, "Label Created successfully!!");
	                alert(`${Response.data.message}`);
	                // this.props.history.push("/");
	            }).catch((error) => {
	                console.log("Error", error.response)
	                console.log(error.response.data.message, "Label not Created");
	                alert(error);
	            });
	    }
	
	    onHandleClickaway = () => {
	        this.setState({
	            clickAway: false
	
	        });
	        console.log('click away');
	        if (this.state.title !== '' || this.state.description !== '') {
	            this.sentToBackEnd()
	            this.setState({
	                title: '',
	                description: '',
	                pin: false,
	            })
	        }
	
	    }
	
	    showAllLabels = () => {
	
	        let token = localStorage.getItem("Token");
	        console.log('show all labels');
	        getAllLabels(token)
	            .then(Response => {
	                let array = [];
	
	                console.log("savg");
	
	                console.log('res:----- ', Response);
	                console.log('res data:----- ', Response.data.data);
	                this.setState({
	                    notes: (Response.data.data).reverse()
	                })
	            })
	    }
	
	    componentDidMount() {
	        console.log('component did mount');
	
	        this.showAllLabels()
	    }
	
	    render() {
	        return (
	            <div>
	                <div variant="outlined" color="primary" onClick={this.handleClickOpen}>
	                    Edit labels
	        </div>
	                <Dialog open={this.state.open} onClose={this.handleClose}>
	                    <Typography>
	                        <div
	                            style={{
	                                display: "flex",
	                                justifyContent: "space-around",
	                                flexDirection: "column",
	                                width: "120%"
	                            }}
	                        >
	                            <div style={{ padding: "5%" }}>
	                                <b>Edit Labels</b>
	                            </div>
	                            <div
	                                style={{
	                                    display: "flex",
	                                    justifyContent: "space-evenly",
	                                    flexDirection: "row"
	                                }}
	                            >
	                                <Tooltip title="Cancel">
	                                    <ClearIcon style={{ paddingTop: "10px" }} />
	                                </Tooltip>
	                                <TextField
	                                    id="standard-dense"
	                                    placeholder="Create new label"
	                                    margin="dense"
	                                    style={{ paddingLeft: "5%" }}
	                                    onChange={this.Handlelabeldata}
	                                />
	                                <Tooltip title="Create label">
	                                    <CheckIcon
	                                        style={{ paddingLeft: "5%", paddingTop: "10px" }}
	                                        onClick={this.handleClickCreatelabel}
	                                    />
	                                </Tooltip>
	                            </div>
	                            <div>
	                                {this.state.allLable.map(label => (
	             