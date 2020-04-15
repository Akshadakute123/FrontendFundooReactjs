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
import Dashboardss from './components/Dashboardss'
import Resetpasswords from './components/Resetpasswords';
import hello from './components/Dashboardss';
import Hello from './components/Dashboardss';
import Forgetpassword from './components/Forgetpassword';
import SwipeableTemporaryDrawer from './components/Dashboards'
// import { BrowserRouter as Router, Route, Switch ,Link} from 'react-router-dom'
import Paginationpage from './components/Pginationpage'
import Posts from './components/Posts';
import Examples from './components/Animation';



function App() {
  return (
    <div className="App">
     {/* <Registers /> */}
    {/* <ClickAway /> */}
     {/* <Router /> */}
     {/* <Cards /> */}
  {/* <Hello /> */}
     {/* <Dashboards /> */}
     {/* <Paginationpage /> */}
     <Examples />
     {/* <Posts /> */}
     {/* <Forgetpassword/> */}
     {/* <Dashboardss /> */}
 <Dashboard />
 {/* <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer> */}
 {/* <Editlabel/> */}
 {/* <Trash /> */}
 {/* <SimplePopover /> */}
     {/* <Note /> */}
     {/* <Resetpasswords/> */}
 {/* <Icons /> */}
 {/* <Loginpage /> */}
 {/* <CreateNote /> */}
 {/* <Noteslist /> */}
 {/* <Editlabel /> */}
    </div>
  );
}

export default App;
