import styled from 'styled-components';

export const Container = styled.div`
    margin: 130px auto;
    width: 500px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.4);

    form{
        display: block; 

        input{
            display: block;
            width: 290px;
            height: 32px;
            margin: 15px 0;
            padding: 4px 10px;
            border-radius: 15px; 
            border: 1px solid #0196f4;

            & + input{
                margin-bottom: 5px;
            }

            &::placeholder{
                color: #919191;
            }
        }


        button{
            display: block;
            width: 170px;
            height: 32px;
            margin-top: 10px;
            margin-left: 60px;
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

        span{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
            color: #919191;
            font-size: 14px;
             
            a{
                margin-left: 5px;
                cursor: pointer;
                transition: 0.4s;
                text-decoration: none;
            }
        }

    }
`;