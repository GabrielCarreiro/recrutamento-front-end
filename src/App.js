import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './hooks';
import GlobalStyle from './styles/global';
import Routes from './routes/index';

function App() {
    return (
        <> 
            <BrowserRouter>
                <AppProvider>
                    <Routes/>
                </AppProvider>
            </BrowserRouter>
            <GlobalStyle/>
        </>
    );
}
export default App;
