import React,{ useState, useCallback } from 'react';
import Api from '../../../services/api';
import { CardRegister } from './style';

const FormRegister = ()=>{
    const [email, setEmail] = useState();
    const [emailConfirm, setEmailConform] = useState();

    const handleSubmit = useCallback(
       async (e)=>{
            e.preventDefault();
            try {
                if(!email) return;
                if(!emailConfirm) return;
                if(email !== emailConfirm) return;

                await Api.post(`/send/key`, {email: emailConfirm});
                console.log('sucesso')
            } catch (error) {
                console.log('error', error)
            }
    },[email, emailConfirm]);

    return(
        <CardRegister>
            <form onSubmit={handleSubmit}>
                <input type="email" 
                placeholder="Email"
                onChange={e => setEmail(e.target.value.toLowerCase())}/>

                <input type="email" 
                placeholder="Confirme seu email"
                onChange={e => setEmailConform(e.target.value.toLowerCase())}/>

                <button type='submit'> Cadastrar </button> 
            </form>
        </CardRegister>
    )
};

export default FormRegister;