import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 25px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 700px){
        width: 30%;
    }
`;