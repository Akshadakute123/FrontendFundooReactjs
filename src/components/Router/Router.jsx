import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Loginpage from '../Loginpage';
import Register from '../Registration';
import Resetpasswords from '../Resetpasswords';
import Forgetpassword from '../Forgetpassword';
import Maincomponent from '../Maincomponent';
import Noteslist from '../NotesList';
import Trash from '../Trash';
import ArchieveList from '../ArchieveList';
import ListOfReminder from '../Reminderlist';
import Paginationpage from '../Pginationpage';
import Pagination from '../Pagination';

export default function Router(props) {
    return(
        <BrowserRouter>
            <Route path={'/'} exact component={Loginpage}/>
            <Route path={'/register'} exact component={Register}/>
            
            <Route path={'/resetPassword'} exact component={ Resetpasswords}/>
            
            <Route path ={'/forgotPassword'}  component={Forgetpassword}/>
            <Route path ={'/dashboard'} component={Maincomponent}/>
            <Route path={'/dashboard/note'}  component={Paginationpage}/>
            {/* <Route path={'/dashboard/note/!#'}  component={}/> */}
            <Route path={'/dashboard/trash'}  component={Trash}/>
            <Route path={'/dashboard/archieve'} component={ArchieveList}/>
            <Route path={'/dashboard/reminder'} component={ListOfReminder}/>

            
        </BrowserRouter>
    );
}