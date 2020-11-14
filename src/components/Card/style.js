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
    
    .iconServer{
        width: 50px;
        text-align: center;
    }
`;

export const Container = styled.div`
    width: 850px;
    overflow: auto;
        height: 450px;
        overflow-y: scroll;
    
`;