import React from 'react';
import { IoMdExit } from 'react-icons/io';
import { useAuth } from '../../hooks/auth';
import { Container } from './style';

const Header = () =>{
    const { signOut } = useAuth();

    return(
        <Container>
                <img src={require('../../assets/logo-light.png')} alt="logo nuvem web"/>

                <button className="logout" type='button' onClick={()=> signOut()}>
                    Sair <IoMdExit size={20} style={{marginLeft: '5px'}}/>
                </button>
        </Container>
    )
};
export default Header;