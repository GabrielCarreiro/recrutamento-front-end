import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap');
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #f5f5f5;
    }

    html, body, #root{
        height: 100% 
    }

    body, input, button, select{
        font: 16px 'Roboto', sans-serif;
    }

    body::-webkit-scrollbar {
        width: 0.30rem;
    }
      
    body::-webkit-scrollbar-track {
        background: #1e1e24;
    }
      
    body::-webkit-scrollbar-thumb {
        background: #0196f4;
    }

    button{
        curso: pointer;
    }

    #root{
        max-width: 900px;
        margin: 0 auto;
        padding: 40px 20px;
    }
`;