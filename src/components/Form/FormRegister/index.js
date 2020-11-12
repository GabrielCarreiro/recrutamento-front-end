import React from 'react';
import { CardRegister } from './style';

const FormRegister = ()=>{
    return(
        <CardRegister>
            <div>
                <input type="text" placeholder="Nome"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <button> Cadastrar </button> 
            </div>
        </CardRegister>
    )
};

export default FormRegister;