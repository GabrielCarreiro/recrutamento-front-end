import React,{ useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import Api from '../../services/api';
import { Container } from './styles';

const SendPassword = ()=>{
    const [key, setKey] = useState();
    const [pass, setPass] = useState();
    const [passConfirm, setPassConfirm] = useState();
    const { type } = useParams()
    
    const handleSubmit = useCallback(
        async (e)=>{
            e.preventDefault();
            try {
                if(!key) return;
                if(!pass) return;
                if(!passConfirm) return;
                if(pass !== passConfirm) return;

                const params = {
                    key,
                    password: passConfirm
                }

                if(type === "forgot"){
                    await Api.post(`/update/pass`, params );
                    console.log('Sucesso')
                }else{
                    await Api.post(`/register`, params );
                    console.log('Sucesso')
                }

            } catch (error) {
                console.log('error', error);
            };
    },[key, pass, passConfirm, type]);

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input type='text' 
                placeholder='Digite a chave'
                onChange={e => setKey(e.target.value)}/>

                <input type='text' 
                placeholder='Digite a senha'
                onChange={e => setPass(e.target.value)}/>

                <input type='text' 
                placeholder='Confirme a senha'
                onChange={e => setPassConfirm(e.target.value)}/>

                
                <button type='submit'> Cadastrar </button>
                <span> Deseja voltar ? <Link to='/'> Clique aqui </Link> </span> 
        
            </form>
        </Container>
    );
};

export default SendPassword;