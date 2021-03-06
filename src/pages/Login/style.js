import styled from 'styled-components';

export const Container = styled.div`
    margin: 100px auto;
    width: 900px;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.4);
    overflow: hidden; 

    @media(max-width: 700px){
        margin: 15% auto;
        display: block;
        width: 90%;
    }
`;

export const InfoCard = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0196f4;

    @media(max-width: 700px){
        display: grid;
        width: 100%;
        max-height: 50%;
        padding-bottom: 50px;  
    }

    div{
        text-align: center;

        h2{
            color: #fff;
            font-size: 36px;
            margin-bottom: 5px;
        }
        p{
            color: #fff;
            font-size: 18px;
            font-weight: 100;
        }

        button{
            margin-top: 20px;
            width: 170px;
            height: 34px;
            border-radius: 15px;
            border: 1px solid #fff;
            background-color: #0196f4;
            color: #fff;
            cursor: pointer;
            transition: 0.4s;

            &:hover{
                background-color: #fff;
                color: #0196f4;
            }
        }
    }
`;