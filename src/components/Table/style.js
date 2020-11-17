import styled from 'styled-components';

export const CardServer = styled.table`
    background-color: #fff;
    border-collapse: collapse;
    width: 850px;
    padding: 10px;
    column-rule-width: 1px;
    box-align:  auto;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
   
    thead { 
        display: block; 
    }

    tbody{
        display: block;
        height: 450px;       
        overflow-y: auto;    
        overflow-x: hidden;
    }

    .loading{
        display: flex;
        justify-content: center;
        align-itens: center;
        width: 850px;
    }

    th{
        height: 40px;
        text-align: left;
        padding: 15px;
        background-color: #0196f4;
        color: #fff;
        
    }

    tr{
        transition: 0.2s;
        border: 1px solid #ddd;
        
        &:hover{
            background-color: #f0f0f0;
        }
    }

    tr:nth-child(even) {
        background-color: #f8f6ff;

        &:hover{
            background-color: #f0f0f0;
        }
    }

    td {
        padding: 15px;
        color: #808fb3;
    }
    
    .on{
        color: #42c965;
    }

    .iconServer{
        width: 50px;
        text-align: center;
    }
`;

export const Container = styled.div`
    width: 850px;  

    .searcher{
        margin-bottom: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
       

        input{
            display: block;
            width: 270px;
            height: 32px;
            padding: 4px 10px;
            border-radius: 15px 0 0 15px;
            border: 1px solid #0196f4;
        }

        button{
            width: 40px;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0 15px 15px 0;
            border: 0;
            background-color: #0196f4;
            cursor: pointer;
            transition: 0.4s;
            
            &:hover{
                background-color: #0287db;
            }
        }

    }

`;