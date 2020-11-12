import React from 'react';
import { CardLogin } from './style';

const FormLogin = ()=>{
    return (
        <CardLogin>
            <div>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <small> Esqueceu a senha ? </small>
                <button> Acessar </button> 
            </div>
        </CardLogin>
    );
};
export default FormLogin;