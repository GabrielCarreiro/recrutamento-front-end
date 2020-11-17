import React,{ useState, useCallback } from 'react';
import Api from '../../../services/api';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import { CardRegister } from './style';

const FormRegister = ()=>{
    const [email, setEmail] = useState();
    const [emailConfirm, setEmailConform] = useState();
    const [loading, setLoading] = useState(false);

    /* Função que faz a validação dos campos e realiza a requisão no backend */
    const handleSubmit = useCallback(
       async (e)=>{
            e.preventDefault();
            try {
                setLoading(true);
                if(!email || !emailConfirm) {
                    toast.warning("Por favor, preencha todos os campos. ");
                    setLoading(false);
                    return;
                };
                if(email !== emailConfirm) {
                    toast.warning("Email divergente, tente novamente. ");
                    setLoading(false);
                    return;
                };

                await Api.post(`/send/key`, {email: emailConfirm});
                toast.success("Um código foi enviado para seu e-mail acesse para mais informações.");
            } catch (error) {
                console.log(error, "error")
                toast.error("Erro, tente novamente. ");
            }finally{ 
                setLoading(false);
            }
    },[email, emailConfirm]);

    return(
        <CardRegister>
            <img src={require('../../../assets/logo-color.png')} alt="logo nuvem web"/>

            <form onSubmit={handleSubmit}>
                <input type="email" 
                placeholder="Email"
                onChange={e => setEmail(e.target.value.toLowerCase())}/>

                <input type="email" 
                placeholder="Confirme seu email"
                onChange={e => setEmailConform(e.target.value.toLowerCase())}/>

                <button type='submit'> 
                    {!loading ? 'Cadastrar' :
                        <ReactLoading type={'spinningBubbles'} color={'#fff'} height={29} width={30} />}
                </button> 
            </form>
        </CardRegister>
    )
};

export default FormRegister;