import React,{ useCallback, useEffect} from 'react';
import { Switch } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import Api from '../services/api';
import Route from './route';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import SendPass from '../pages/SendPassword';

/* Definindo as rotas da aplicação */
const Routes = () =>{
    const { signOut } = useAuth();
    
    const load_verification = useCallback(
        async () => {
        try {
            await Api.get(`verification`);
        } catch (error) {
            signOut();
        }
    },[signOut])

    useEffect(()=>{
        load_verification();
    },[load_verification]);

    return(
        <Switch>
            <Route path="/" component={Login} exact/>
            <Route path="/send/pass" component={SendPass} exact />
            <Route path="/send/pass/:type" component={SendPass} />
            <Route path="/dashboard" component={Dashboard} isPrivate/>
        </Switch>
    )
};
export default Routes;