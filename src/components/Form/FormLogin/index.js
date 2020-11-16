import React, { useState, useCallback } from 'react';
import Api from '../../../services/api';
import { useAuth } from '../../../hooks/auth';
import { CardLogin } from './style';

const FormLogin = ()=>{
    const { signIn } = useAuth();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = useCallback(
        async(e)=>{
            e.preventDefault();
            try {
                await signIn(email, password);
                console.log('Sucesso')
            } catch (error) {
                console.log(error, 'error')
            }
    },[email, password, signIn]);

    const forgotPass = useCallback(
        async()=>{
            try {
                if(!email) return;
               
                await Api.post(`/send/key/forgot`, {email});
                console.log('sucesso')
            } catch (error) {
                console.log(error, 'error')
            }
    },[email]);

    return (
        <CardLogin>
            <form onSubmit={handleSubmit}>
                <input type="email" 
                placeholder="Email"
                onChange={ e => setEmail(e.target.value)}/>
                
                <input type="password" 
                placeholder="Senha"
                onChange={e => setPassword(e.target.value)}/>
                
                <small onClick={() => forgotPass()}> Esqueceu a senha ? </small>
                <button type='submit'> Acessar </button> 
            </form>
        </CardLogin>
    );
};
export default FormLogin;