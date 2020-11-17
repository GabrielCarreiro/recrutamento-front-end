import React, { useState, useCallback, useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';
import { FaServer } from 'react-icons/fa';
import ReactLoading from 'react-loading';
import Api from '../../services/api';
import { Container } from './style.js'

const Graphic = ()=>{
    const [filters, setFilters] = useState({});

    /* Função que obtem da api todos os servidores, e verifica os servidores ligados e subtrair pelo total.
    Fazendo um objeto com o total de servidores ligados e desligado */
    const loadServers = useCallback(
        async()=>{
            try {
                let on = [];
                const { data } = await Api.post('/dashboard');
                data.listServers.forEach( server => {
                    if(server.InstanceState === "On") on.push(server); 
                })
                setFilters({
                    on: on.length,
                    off: data.listServers.length - on.length
                })
            } catch (error) {
                console.log("error", error);
            };
    },[]);

    useEffect(()=>{
        loadServers()
    },[loadServers]);

    /* Configuração do gráfico de doughnut*/
    const data = {
        labels: ['Servidores ligados','Servidores desligado'],
        datasets: [{
            data: [filters.on, filters.off],
            backgroundColor: ['#0196f4','#e74c3c'],
            hoverBackgroundColor: ['#21a9ff','#f52f1b']
        }]
    };

    return(
        <Container>
            <h3> <FaServer style={{marginRight: '5px'}}/> Status dos servidores </h3>
            {filters.on ? 
                <Doughnut width="110px" height="100px;" data={data} /> : 
                <ReactLoading type={'spinningBubbles'} color={'#0196f4'} height={200} width={200} />}
        </Container>
    )
};
export default Graphic;