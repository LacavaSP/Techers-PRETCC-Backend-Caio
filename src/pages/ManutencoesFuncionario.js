import './ManutencoesFuncionario.css'
import { Link } from "react-router-dom"
import MenuFuncionario from './MenuFuncionario'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ManutencoesFuncionario(){
    const navigate=useNavigate()
    const [AllDataDosComputersEmManutencao,setAllDataDosComputersEmManutencao]=useState([])
    async function onLoadInfo(){
        try{
            const response=await axios.get('http://localhost:4090/manutencoes-funcionario')
            console.log(response.data)
            setAllDataDosComputersEmManutencao(response.data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        onLoadInfo()
    },[])

    async function onClickEditar(e){
        console.log(e.target.value);
        try{
            let index={
                index:e.target.value
            }
         
            const response=await axios.post('http://localhost:4090/editar-info-computador',index,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            navigate('/editar-info-computador')
        }catch(error){
            console.log(error);
        }
        /*for(let i=0;i<AllDataDosComputersEmManutencao.length;i++){
            if(AllDataDosComputersEmManutencao.telefoneCliente==e.target.value){

            }
        }*/
    }

    async function onClickDelete(e){
        try{
            
            const response=await axios.delete('http://localhost:4090/deletar-computador/'+e.target.value)
            onLoadInfo()
        }catch(error){
            console.log(error)
            window.alert(error)
        }
    }

    /*
    const storage=localStorage
    let AllDataDosComputersEmManutencao



    let listaDeComputadoresParaAManutencao=[]
    if(storage.getItem("lista")){
     listaDeComputadoresParaAManutencao=JSON.parse(storage.getItem("lista"))
    }
    
    console.log("olha"+listaDeComputadoresParaAManutencao)
    let computadoresInfo=[]
    for(const computador of listaDeComputadoresParaAManutencao){
        if(computador){
            computadoresInfo.push(computador)
        }
    }
    console.log(computadoresInfo)
    AllDataDosComputersEmManutencao=computadoresInfo
    function onClick(e){

    console.log(e.target.parentNode.value)

    let index=storage.getItem("index")
    storage.removeItem("index")
       for(let i=0;i<computadoresInfo.length;i++){
       
        
            if(computadoresInfo[i].nome==e.target.parentNode.value){
                
                index=i
                storage.setItem("index",index)
                console.log(index)
                console.log(storage.getItem("index"))
                break;
            }
       }
    }
    
    function OnClickDelete(e){
       

        const todosComputers=JSON.parse(storage.getItem("lista"))
        let indexDelete=storage.getItem("index")
        storage.removeItem("index")

        for(let j=0;j<todosComputers.length;j++){
      
   
            if(todosComputers[j].nome==e.target.value){
                indexDelete=j
                storage.setItem("index",indexDelete)
                console.log(storage.getItem("index"))
                todosComputers.splice(storage.getItem("index"),1)
                console.log(todosComputers)
                storage.removeItem("lista")
                storage.setItem("lista",JSON.stringify(todosComputers))
                window.location.reload();
                AllDataDosComputersEmManutencao=todosComputers
    

            

           
        }} */


        
        
    
    return(
        <>
        <div className='AllManutencoesFuncionarioContent'>
            <div className='suportepronav'>
                <MenuFuncionario></MenuFuncionario>
            </div>
            <div className='ManutencoesFuncionarioContent'>
                <h1>Manutenções</h1>
                <p>Monitore os computadores em manutenção ou adicione um novo caso necessário!</p>
                <div className='divUnicaProBotaoAdd'>
                    <button id='botaoAdd'><Link className='linkAdd' to={'/add-novo-computador-para-manutencao'}>+ Um novo computador</Link></button>
                </div>
                <hr id='hrManutencoes'></hr>
                <div className='ComputadoresEmManutencao'>
                
                
                    {
                        
                        AllDataDosComputersEmManutencao.map((computador,index)=>
                        
                        <>
                        <div className='pDoComputadorEmMAnutencao'>
                            <p><strong>Nome: {computador.nomeCliente}</strong></p>
                            <p><strong>Telefone: {computador.telefoneCliente}</strong></p>
                            <p><strong>Problema: {computador.problemaCliente}</strong></p>
                            <select id="selectManutencoes">
                                <option className='optionOp'>Pendente</option>
                                <option className='optionOp'>Em manutenção</option>
                                <option className='optionOp'>Manutenção finalizada</option>
                            </select>
                            <div className='attOrExcluir'>
                                <button onClick={onClickEditar} value={index}>Editar</button>
                                <button value={index} onClick={onClickDelete}>Excluir</button>
                            </div>
                        </div>
                        </>
                    
                    
                    )
                }
                    
              
                </div>
            </div>
        </div>
            
        </>
    )
}

export default ManutencoesFuncionario