import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;

    @media(max-width: 700px){
        grid-template-columns: 1fr 1fr;
    }
`;

export const Header = styled.div`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input{
        display: block;
        width: 270px;
        height: 28px;
        padding: 4px 10px;
        border-radius: 15px; 
        border: 1px solid #0196f4;
    }
`;

