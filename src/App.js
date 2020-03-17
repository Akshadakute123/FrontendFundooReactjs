import React from 'react';
import logo from './logo.svg';
import './App.css';
import Loginpage from './components/Loginpage';
 import Router from './components/Router/Router';
import Registers from './components/Registers';
import Dashboard from './components/Dashboard';
import Dashboards from './components/Dashboards';
import Noteslist from './components/NotesList';
import Cards from './components/Cards';
import Icons from './components/Icons';
import CreateNote from './components/CreateNote';
import ClickAway from './components/MiniNote';
import Note from './components/Note';
import { CreateLabel } from './service/service';
import Editlabel from './components/Editlabel';
import SimplePopover from './components/Practice';
import Trash from './components/Trash';
// import { BrowserRouter as Router, Route, Switch ,Link} from 'react-router-dom'




function App() {
  return (
    <div className="App">
     {/* <Registers /> */}
    {/* <ClickAway /> */}
     <Router />
     {/* <Cards /> */}
     {/* <Dashboards /> */}
 {/* <Dashboard /> */}
 {/* <Editlabel/> */}
 {/* <Trash /> */}
 {/* <SimplePopover /> */}
     {/* <Note /> */}
 {/* <Icons /> */}
 {/* <Loginpage /> */}
 {/* <CreateNote /> */}
 {/* <Noteslist /> */}
 {/* <Editlabel /> */}
    </div>
  );
}

export default App;
