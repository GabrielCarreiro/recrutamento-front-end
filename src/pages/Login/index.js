import React, {useState} from 'react';
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
                    <h2> Bem vindo</h2>
                    <p> Ainda não possui conta ? </p> 
                    <p> Casdastra-se agora mesmo </p>
                    <button onClick={()=> setSingUp(!singUp)}> Cadastrar </button>
                </div>
            </InfoCard>
        </Container>
    )
};
export default Login;