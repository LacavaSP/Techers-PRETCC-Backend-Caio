import axios from "axios";
import "./AddNovoComputador.css"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';


function AddNovoComputador(){
    const navigate = useNavigate();
    const storage=localStorage
    let [nomeCliente,setNomeCliente]=useState('')
    let [telefoneCliente,setTelefoneCliente]=useState('')
    let [problemaCliente,setProblemaCliente]=useState('')

    function OnChangeNomeCliente(){
        const inputNomeCliente=document.getElementById('nomeCliente')
        setNomeCliente(inputNomeCliente.value)
    }
    function OnChangeTelefoneCliente(){
        const inputTelefoneCliente=document.getElementById('telefoneCliente')
        setTelefoneCliente(inputTelefoneCliente.value)
    }
    function OnChangeProblemaCliente(){
        const inputProblemaCliente=document.getElementById('problemaCliente')

        setProblemaCliente(inputProblemaCliente.value)
    }
    async function onClick(){
        
        const inputNomeCliente=document.getElementById('nomeCliente')
        const inputTelefoneCliente=document.getElementById('telefoneCliente')
        const inputProblemaCliente=document.getElementById('problemaCliente')
        let listaDeComputadores
        if(!nomeCliente || !telefoneCliente || !problemaCliente){
            window.alert("Preencha todos os campos")
        }else{
            try{
                const novoComputadorParaManutencao={
                    nomeCliente:nomeCliente,
                    telefoneCliente:telefoneCliente,
                    problemaCliente:problemaCliente
                }
                const response=await axios.post('http://localhost:4090/add-novo-computador-para-manutencao',novoComputadorParaManutencao,{
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
               
                navigate('/manutencoes-funcionario')
            }catch(error){
                console.log(error)
                
            }
        }
       
        


        /*let dataComputadores=storage.getItem("lista")
        if(dataComputadores){
            listaDeComputadores=JSON.parse(storage.getItem("lista"))
            
            console.log(listaDeComputadores)
            const novoComputador={
                nome:nomeCliente,
                telefoneCliente:telefoneCliente,
                problema:problemaCliente
            }
            listaDeComputadores.push(novoComputador)
            storage.removeItem("lista")
            storage.setItem("lista", JSON.stringify(listaDeComputadores))
        
            if(!inputNomeCliente.value || !inputProblemaCliente || !inputTelefoneCliente){
                alert("Preencha todos os campos")
            }else{
                navigate('/manutencoes-funcionario')
            }

        }else{
            listaDeComputadores=[]
            console.log(listaDeComputadores)
            const novoComputador={
                nome:nomeCliente,
                telefoneCliente:telefoneCliente,
                problema:problemaCliente
            }
            listaDeComputadores.push(novoComputador)
            storage.removeItem("lista")
            storage.setItem("lista", JSON.stringify(listaDeComputadores))
        
            if(!inputNomeCliente.value || !inputProblemaCliente || !inputTelefoneCliente){
                alert("Preencha todos os campos")
            }else{
                navigate('/manutencoes-funcionario')
            }
        }
        */
       
        
    }

    return(
        <div className="allAdd">
        <div className="containerAddComputador">    
            <h2>Nova manutenção</h2>
            <input id="nomeCliente" placeholder="Nome do cliente" onChange={OnChangeNomeCliente}></input>
            <input id="telefoneCliente" placeholder="Telefone do Cliente" onChange={OnChangeTelefoneCliente}></input>
            <input id="problemaCliente" placeholder="Problema do computador" onChange={OnChangeProblemaCliente}></input>
            <button className="AddComputador" onClick={onClick}>Adicionar</button>
        </div>
        </div>
        
    )
}
export default AddNovoComputador