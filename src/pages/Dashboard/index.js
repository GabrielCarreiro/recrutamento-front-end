import React, { useState } from 'react';
import { Container, Header } from './style';
import Card from '../../components/Card';

const Dashboard = ()=>{
    const [filter, setFilter] = useState();

    return(
        <>
            <Header>
                NuvemWeb
                <input type='text' 
                placeholder='Pesquise aqui'
                onChange={e => setFilter(e.target.value.toLowerCase())}/>

            </Header>
            <Container>
                <Card value={filter}/>
            </Container>
        </>
    )
};
export default Dashboard;