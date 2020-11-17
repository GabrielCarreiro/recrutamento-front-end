import React, { useState } from 'react';
import FormLogin from '../../components/Form/FormLogin';
import FormRegister from '../../components/Form/FormRegister';
import { Container, InfoCard } from './style';

const Login = () =>{
    const [singUp, setSingUp] = useState(false);
    return (
        <Container>
           {singUp ? <FormRegister/> : <FormLogin/>}
            <InfoCard>
                <div>
                   {!singUp ? 
                        <span>  
                            <h2> Bem vindo</h2>
                            <p> Ainda não possui conta ? </p> 
                            <p> Casdastra-se agora mesmo </p>
                        </span>
                        :
                        <span>  
                            <h2> Cadastro </h2>
                            <p> Enviaremos para seu email </p> 
                            <p> uma chave e todas as instruções. </p>
                        </span>
                    }
                    <button onClick={()=> setSingUp(!singUp)}> 
                        {singUp ? 'Login' : 'Cadastrar'} 
                    </button>
                </div>
            </InfoCard>
        </Container>
    );
};
export default Login;