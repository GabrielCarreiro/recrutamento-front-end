import React from 'react';
import { Container } from './style';
import Header from '../../components/Header';
import Table from '../../components/Table';
import Graphic from '../../components/Graphic';

const Dashboard = ()=>{
    return(
        <>  
            <Header/>
            <Container>
                <Table/>
                <Graphic/>
            </Container>
        </>
    )
};
export default Dashboard;