import React from 'react';
import { useAuth } from '../hooks/auth';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';

/* Função para proteger as rotas para usuários não autenticados */
const Route = ({
    isPrivate = false,
    component: Component,
    ...rest
    }) => {
    const { token } = useAuth();

    return (
        <ReactDOMRoute
            {...rest}
            render={({ location }) => {
                return isPrivate === !!token ? (
                    <Component />
                ) : (
                        <Redirect
                            to={{
                                pathname: isPrivate ? '/' : '/dashboard',
                                state: { from: location },
                            }}
                        />
                    );
            }}
        />
    );
};

export default Route;