import React, { useState, useCallback } from 'react';
import Api from '../../../services/api';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import { useAuth } from '../../../hooks/auth';
import { CardLogin } from './style';

const FormLogin = ()=>{
    const { signIn } = useAuth();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);

    /* Função que válida os campos e chama a função de autenticação passando o email e a senha.  */
    const handleSubmit = useCallback(
        async(e)=>{
            e.preventDefault();
            try {
                setLoading(true);

                if(!email || !password){
                    toast.warning("Por favor, preencha todos os campos. ");
                    setLoading(false);
                    return;
                };
                
                await signIn(email, password);
                toast.success("Bem vindo a nuvem web!");
            } catch (error) {
                console.log(error, 'error')
                toast.error("Email ou senha inválido.");
            }finally{
                setLoading(false);
            }
    },[email, password, signIn]);

    /* Função para quando o usuário esquecer sua senha, verifica se o campo de email está vazio e faz 
    a requisição no backend */
    const forgotPass = useCallback(
        async()=>{
            try {
                setLoading(true);
                if(!email) {
                    toast.warning("Por favor, preencha o campo de email ");
                    setLoading(false);
                    return;
                };
                await Api.post(`/send/key/pass`, {email});
                toast.success("Instruções enviadas para seu email. Acesse para mais informações.");

            } catch (error) {
                toast.error("Erro, tente novamente.");
            }finally{
                setLoading(false)
            };
    },[email]);

    return (
        <CardLogin>
            <img src={require('../../../assets/logo-color.png')} alt="Logo nuvem web"/>
            <form onSubmit={handleSubmit}>
                <input type="email" 
                placeholder="Email"
                onChange={ e => setEmail(e.target.value)}/>
                
                <input type="password" 
                placeholder="Senha"
                onChange={e => setPassword(e.target.value)}/>
                
                <small onClick={() => forgotPass()}> Esqueceu a senha ? </small>
                <button type='submit'> 
                    {!loading ? 'Acessar' :
                        <ReactLoading type={'spinningBubbles'} color={'#fff'} height={29} width={30} />}
                </button> 
            </form>
        </CardLogin>
    );
};
export default FormLogin;