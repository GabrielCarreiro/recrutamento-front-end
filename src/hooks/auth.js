import React, { useCallback, useState, useContext, createContext } from 'react';
import Api from '../services/api';
const AuthContext = createContext({});

/* Autenticação do usuário na aplicação, sempre que a pagina é atualizada verifica se o token está salvo no
localStorage .  */
const AuthProvider = ({ children }) => {
    const [data, setData] = useState(() => {
        const token = localStorage.getItem('@APP:token');
        if (token) {
            Api.defaults.headers.common[`token`] = `${token}`;
            return {token};
        };
        return {}
    });

    /* Função que recebe email e a senha do ussuário e faz a requisição na rota de login,
    se retornar o token armazena no local storage e salva o token nas configurações do axios. */
    const signIn = useCallback(async (email, password) => {
      
        const response = await Api.post(`login`, {email, password});

        const { token } = response.data;

        if ( token ) {
            localStorage.setItem('@APP:token', token );
            Api.defaults.headers.common[`token`] = `${token}`
            setData({ token });
        } else {
            throw new Error('Usuário ou senha inválido');
        };
    }, []);

    /* Função que remove o token salvo */
    const signOut = useCallback(() => {
        localStorage.removeItem('@APP:token');
        setData({});
    }, []);

    return (
        <AuthContext.Provider
            value={{ token: data.token, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);

    if (!context) throw new Error('useAuth pracisa ser utilizado AuthProvider');
    
    return context;
}

export { AuthProvider, useAuth };