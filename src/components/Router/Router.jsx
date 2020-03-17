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
export default function Router() {
    return (

        <BrowserRouter>
            <Switch>
                
                <Route path={'/'} exact component={Loginpage} />
                <Route path={'/register'} component={Registers} />
               
                {/* <Route path={'/loginsucess'} component={Loginsucess}/>  */}
                {/* <Route path={'/'}exact component={ValiationForm}/> */}
                
                <Route path={'/resetpassword'} component={Resetpassword}/>
                <Route path={'/forgetpassword'}component={Forgetpassword} />
                <Route exact path={'/dashboard'} component={Dashboard} />
                <Route  path={'/createnote'}component={CreateNote} />
                {/* <Route path='/' render={
                    ()=><Trash />
                 }  /> */}

            </Switch>
        </BrowserRouter>
    );
}