import { useEffect } from 'react'
import axios from 'axios'
import './ViewComputadorAVenda.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ViewComputadorAVenda(){ 
    const navigate=useNavigate()
    const [infoComputerVenda,setInfoComputerVenda]=useState('')
    async function onLoadInfo(){
        try {
            const response=await axios.get('http://195.35.37.40:4090/pegar-infos-venda')
            console.log(response.data)
            setInfoComputerVenda(response.data)
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(()=>{
        onLoadInfo()
    },[])

    async function handleExcluir(){
        try{
            const response=await axios.delete('http://195.35.37.40:4090/excluir-venda')
            navigate('/computadores-venda')
        }catch(error){
            console.log(error)
            window.alert(error)
        }

    }
    function handleEditar(){
        navigate('/editar-computador-a-venda')
    }

    return(
         <div className='allContentOfThisView'>
            <div className='displayInfoDoComputador'>
                
                <img src='' alt='Imagem do computador'></img>
                <div className='infoComputerVenda'>
                    {
                        <>
                        <h2>{infoComputerVenda.titulo}</h2>
                    <h3>Especificações:</h3>
                    <ul className='infosVenda'>
                        <li>Placa-Mãe: {infoComputerVenda.placa_mae}</li>
                        <li>Placa de vídeo:  {infoComputerVenda.placa_video}</li> 
                        <li>Fonte:  {infoComputerVenda.fonte}</li>
                        <li>Gabinete:  {infoComputerVenda.gabinete}</li> 
                        <li>Fans:  {infoComputerVenda.fans}</li> 
                        <li>Cooler:  {infoComputerVenda.cooler}</li> 
                        <li>RAM:  {infoComputerVenda.ram}</li>
                        <li>Armazenamento:  {infoComputerVenda.armazenamento}</li> 
                       
                    </ul>
                     <p>{infoComputerVenda.preco} </p>
                    <div className='botaoesUse'>
                        <button onClick={handleEditar}>Editar</button>
                        <button onClick={handleExcluir}>Excluir</button>
                    </div>
                        </>
                        
                    }
                    
                    
                </div>
            </div>
            
         </div>
    )
   
}
export default ViewComputadorAVenda