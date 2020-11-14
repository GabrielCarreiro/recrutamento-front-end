import React from 'react';
import { CardRegister } from './style';

const FormRegister = ()=>{
    return(
        <CardRegister>
            <div>
                <input type="email" placeholder="Email"/>
                <input type="email" placeholder="Confirme seu email"/>
                <button> Cadastrar </button> 
            </div>
        </CardRegister>
    )
};

export default FormRegister;