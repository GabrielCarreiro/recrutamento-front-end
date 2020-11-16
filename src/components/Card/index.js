import React, {useState, useEffect, useCallback, useMemo} from 'react';
import Api from '../../services/api';
// import { FaServer, FaPowerOff } from 'react-icons/fa';
import { CardServer, Container } from './style';

const Card = ({value})=>{
    const[servers, setServers] = useState([]);
    const[filterServers, setFilterServers] = useState([]);

    const load_servers = useCallback(
        async()=>{
            try {
                const response = await Api.post('/dashboard');
                setServers(response.data.listServers);
                setFilterServers(response.data.listServers);
            } catch (error) {
                console.log(error,'Error')
            }
    },[])

    useMemo(()=>{
        let results = servers.filter( server => server.Instance.toLowerCase().includes(value) ||
        server.InstanceId.toLowerCase().includes(value))
        setFilterServers(results.length > 0 ? results : servers)
    },[value,servers])

    useEffect(()=>{
        load_servers();
    },[load_servers]);


    // return filterServers.map( server =>(
    //     <CardServer key={server.id}>
    //         <table className="infoServer">
    //             <tr> <small> Servidor: </small> {server.Instance}
                
    //             <td> <small> Código: </small>{server.InstanceId}</td> 

    //             <td> <small> Tipo: </small> {server.InstanceType}</td>

    //             <td> <small> Ip: </small> {server.PublicIpAddress ? server.PublicIpAddress : 'IP não encontrado' }</td>

    //             <td> <small> Status:  </small> {server.InstanceState === 'On' ? 'Ligado' : 'Desligado' }</td>
                                
    //             </tr>

              
                
    //         </table>
    //         <div className="iconServer">
    //             <FaPowerOff size={20} color={server.InstanceState === 'On' ? '#1de07f' : '#c0c2c1'}/>
    //             <FaServer size={50} color="#0196f4"/>
    //         </div>
    //     </CardServer>
    // ));

    return (
        <Container>
            <CardServer>
                <thead>
                    <tr>
                        <th scope="col"> Nome </th>
                        <th scope="col"> Código </th>
                        <th scope="col"> Tipo </th>
                        <th scope="col"> Ip </th>
                        <th scope="col"> Status </th>
                    </tr>
                </thead>
                <tbody> 
                    {filterServers.map( server => (
                        <tr className="infoServer">
                            <td> {server.Instance}</td> 

                            <td> {server.InstanceId}</td> 

                            <td> {server.InstanceType}</td>

                            <td> {server.PublicIpAddress ? server.PublicIpAddress : 'IP não encontrado' }</td>

                            <td> {server.InstanceState === 'On' ? 'Ligado' : 'Desligado' } </td>
                        </tr>
                    ))}
                </tbody>
            </CardServer>
        </Container>
    )
};
export default Card;