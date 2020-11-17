import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: #0196f4;
    height: 60px;

    img{
        width: 140px;
        height: 55px;
    }

    .logout{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #0196f4;
        border: 0;
        cursor: pointer;
        color: #fff;
        transition: 0.2s;

        &:hover{
            opacity: 0.8;
        }
    }

`;
