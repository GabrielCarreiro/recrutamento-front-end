import styled from 'styled-components';

export const CardLogin = styled.div`
    width: 50%;
    display: grid;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;

    @media(max-width: 700px){
        display: grid;
        width: 100%;
        max-height: 50%;
        margin-bottom: 40px;
    }

    img{
        margin-left: 40px;
        width: 220px;
        height: 90px;
    }

    form{
        display: block;
        text-align: center;

        input{
            display: block;
            width: 270px;
            height: 32px;
            margin: 15px 0;
            padding: 4px 10px;
            border-radius: 15px; 
            border: 1px solid #0196f4;

            & + input{
                margin-bottom: 5px;
            }
        }

        small{
            width: 270px;
            text-align:right;
            display: block;
            color: #6b6b6b;
            cursor: pointer;
        }

        button{
            display: flex;
            justify-content: center;
            align-items: center;        
            width: 170px;
            height: 32px;
            margin-top: 10px;
            margin-left: 50px;
            border-radius: 15px;
            border: 0;
            background-color: #0196f4;
            color: #fff;
            cursor: pointer;
            transition: 0.4s;

            &:hover{
                background-color: #fff;
                border: 1px solid #0196f4;
                color: #0196f4;
            }
    }
`;