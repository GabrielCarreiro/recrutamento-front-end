import React, {useState, useEffect, useCallback} from 'react';
import { BsSearch} from 'react-icons/bs';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import Api from '../../services/api';
import { CardServer, Container } from './style';

const Table = ()=>{
    const[servers, setServers] = useState([]);
    const[filterServers, setFilterServers] = useState([]);
    const[value, setValue] = useState();

    /* Função para obter do backend a lista dos servidores e salvar no estado servers */
    const load_servers = useCallback(
        async()=>{
            try {
                const response = await Api.post('/dashboard');
                setServers(response.data.listServers);
                setFilterServers(response.data.listServers);
            } catch (error) {
                console.log(error,'Error');
            };
    },[]);

    /* Função de pesquisa de servidor, pesquisando por código e por nome. Caso não seja encontrado nenhum
    resultado retorna todos servidores e avisa o usuário que não encontrou */
    const filter = useCallback(()=>{
        let results = servers.filter( server => server.Instance.toLowerCase().includes(value) ||
        server.InstanceId.toLowerCase().includes(value));
        if(results.length === 0 ) toast.info("Nenhum resultado encontrado. ");
        setFilterServers(results.length > 0 ? results : servers);
    },[servers, value]);

    useEffect(()=>{
        load_servers();
    },[load_servers]);

    return (
        <Container>
            <div className='searcher'>
                <input type='text' 
                placeholder='Pesquise por um servidor'
                onChange={e => setValue(e.target.value.toLowerCase())}/>

                <button type='button' onClick={()=> filter()}>
                    <BsSearch size={20} color='#fff'/>
                </button>
            </div>
            <CardServer>
                <thead>
                    <tr>
                        <th style={{width: '180px'}}> Nome </th>
                        <th style={{width: '215px', textAlign: 'center'}}> Código </th>
                        <th style={{width: '130px'}}> Tipo </th>
                        <th style={{width: '170px'}}> Ip </th>
                        <th style={{width: '170px'}}> Status </th>
                    </tr>
                </thead>
                <tbody> 
                    {filterServers.length > 0 ? 
                    filterServers.map( server => (
                        <tr className="infoServer" key={Date.now() * Math.random()}>
                            <td style={{width: '190px'}}> {server.Instance}</td> 
                            <td style={{width: '210px', textAlign: 'center'}}> {server.InstanceId}</td> 
                            <td style={{width: '130px'}}> {server.InstanceType}</td>
                            <td style={{width: '170px'}}> {server.PublicIpAddress ? server.PublicIpAddress : 'IP não encontrado' }</td>
                            <td style={{width: '150px'}}> 
                                {server.InstanceState === 'On' ? <p className='on'> Ligado </p> : 'Desligado' }
                            </td>
                        </tr>
                    )) :
                    <div className="loading">
                        <ReactLoading type={'spinningBubbles'} color={'#0196f4'} height={100} width={100} /> 
                    </div>}
                </tbody>
            </CardServer>
        </Container>
    )
};
export default Table;