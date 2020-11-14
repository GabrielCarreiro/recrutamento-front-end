import React, { useState, useCallback } from 'react';
import { useAuth } from '../../../hooks/auth';
import { CardLogin } from './style';

const FormLogin = ()=>{
    const { signIn } = useAuth();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = useCallback(
        async(e)=>{
            console.log('Sucesso')
            e.preventDefault();
            try {
                await signIn(email, password);
                console.log('Sucesso')
            } catch (error) {
                console.log(error, 'error')
            }
    },[email, password, signIn]);

    return (
        <CardLogin>
            <form onSubmit={handleSubmit}>
                <input type="email" 
                placeholder="Email"
                onChange={ e => setEmail(e.target.value)}/>
                
                <input type="password" 
                placeholder="Senha"
                onChange={e => setPassword(e.target.value)}/>
                
                <small> Esqueceu a senha ? </small>
                <button type='submit'> Acessar </button> 
            </form>
        </CardLogin>
    );
};
export default FormLogin;