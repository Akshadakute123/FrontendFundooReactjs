import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'




import Loginpage from '../Loginpage';
import Registers from '../Registers';
import Resetpassword from '../Resetpasswords';
import { forgetpassword } from '../../service/service';
import Forgetpassword from '../Forgetpassword';
import Dashboard from '../Dashboard';
import CreateNote from '../CreateNote';
import Trash from '../Trash'
import Maincomponent from '../Maincomponent';
import Noteslist from '../NotesList';
import Archieve from '../Archieve';
export default function Router() {
    return (

        <BrowserRouter>
            <Switch>
                
                <Route path={'/'} exact component={Loginpage} />
                <Route path={'/register'} component={Registers} />
               
                {/* <Route path={'/loginsucess'} component={Loginsucess}/>  */}
                {/* <Route path={'/'}exact component={ValiationForm}/> */}
                
                <Route path={'/resetpassword'} exact component={Resetpassword}/>
                <Route path={'/forgetpassword'} exact  component={Forgetpassword} />
                <Route  path={'/dashboard'}  component={Maincomponent} />
                <Route path={'/dashboard/trash'} exact component={Trash}/>
                <Route path={'/dashboard/note'} exact component={Noteslist}/>
                <Route path={'/dashboard/archieve'} exact component={Archieve}/>

                {/* <Route  path={'/createnote'}component={CreateNote} /> */}
                {/* <Route path='/' render={
                    ()=><Trash />
                 }  /> */}

            </Switch>
        </BrowserRouter>
    );
}