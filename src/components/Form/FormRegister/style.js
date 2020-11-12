import styled from 'styled-components';

export const CardRegister = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        display: block;

        input{
            display: block;
            width: 270px;
            margin: 15px 0;
            padding: 4px 7px; 
            border: 0;
            border-bottom: 1px solid #0196f4;

            & + input{
                margin-bottom: 5px;
            }

            &::placeholder{
                color: #919191;
            }
        }

        small{
            width: 270px;
            text-align:right;
            display: block;
            color: #6b6b6b;
        }

        button{
            width: 170px;
            height: 34px;
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
    
    @media(max-width: 700px){
        max-height: 50%;
        width: 100%;
    }
`;