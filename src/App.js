import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
                <ToastContainer autoClose={4000} position={"bottom-right"}/>
            </BrowserRouter>
            <GlobalStyle/>
        </>
    );
}
export default App;
