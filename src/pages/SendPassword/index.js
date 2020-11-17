import React,{ useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import Api from '../../services/api';
import { Container } from './styles';

const SendPassword = ()=>{
    const [key, setKey] = useState();
    const [pass, setPass] = useState();
    const [passConfirm, setPassConfirm] = useState();
    const [loading, setLoading] = useState(false);
    const { type } = useParams();

    /* Função que verifica os campos e faz a requisão na api de acordo com o type enviado pela url,
    caso seja forgot chama a rota para atualizar a senha, se não chama a rota de cadastro */
    const handleSubmit = useCallback(
        async (e)=>{
            e.preventDefault();
            try {
                setLoading(true);

                if(!key || !pass ||!passConfirm){
                    toast.warning("Por favor, preencha todos os campos. ");
                    setLoading(false);
                    return;
                };
        
                if(pass !== passConfirm) {
                    toast.warning("Senhas divergente, tente novamente. ");
                    setLoading(false);
                    return;
                };

                const params = {
                    key,
                    password: passConfirm
                };

                if(type === "forgot"){
                    await Api.post(`/update/pass`, params );
                    toast.success("Senha alterada com sucesso.");
                }else{
                    await Api.post(`/register`, params );
                    toast.success("Cadastro finalizado com sucesso.");
                };

            } catch (error) {
                console.log('error', error);
                toast.error("Erro, tente novamente.");
            }finally{
                setLoading(false);
            };
    },[key, pass, passConfirm, type]);

    return (
        <Container>
             <img src={require('../../assets/logo-color.png')} alt="logo nuvem web"/>
            <form onSubmit={handleSubmit}>
                <input type='text' 
                placeholder='Digite a chave'
                onChange={e => setKey(e.target.value)}/>

                <input type='password' 
                placeholder='Digite a senha'
                onChange={e => setPass(e.target.value)}/>

                <input type='password' 
                placeholder='Confirme a senha'
                onChange={e => setPassConfirm(e.target.value)}/>

                
                <button type='submit'>
                     {!loading ? 'Cadastrar' :
                        <ReactLoading type={'spinningBubbles'} color={'#fff'} height={29} width={30} />}
                </button>
                <span> Deseja voltar ? <Link to='/'> Clique aqui </Link> </span> 
        
            </form>
        </Container>
    );
};

export default SendPassword;