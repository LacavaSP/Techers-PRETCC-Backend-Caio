import './EditarInfoComputador.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function EditarInfoDoComputador(){
   const [computadorASerEditado,setComputadorASerEditado]=useState(null)
    const navigate=useNavigate()

    const storage=localStorage

    /*const computadorASerEditado=JSON.parse(storage.getItem("lista"))[storage.getItem("index")]*/


    const [inputNomeEditado,setInputNomeEditado]=useState("")
     
    const [inputTelefoneEditado,setInputTelefoneEditado]=useState("")

    const [inputProblemaEditado,setInputProblemaEditado]=useState("")

  
    useEffect(()=>{ 
    async function onLoadInfo(){
   
      try{
        const response=await axios.get('http://localhost:4090/editar-info-computador')
        console.log(response.data)
        setComputadorASerEditado(response.data) 
        setInputNomeEditado(response.data.nomeCliente)
        setInputProblemaEditado(response.data.problemaCliente)
        setInputTelefoneEditado(response.data.telefoneCliente)

      }catch(error){

    }

  }
  onLoadInfo()
     
    },[])
    
   

  function inputNomeOnChange(e){
    setInputNomeEditado(e.target.value)
    console.log(inputNomeEditado)
    
  }
  function inputTelefoneOnChange(e){
    setInputTelefoneEditado(e.target.value)
    console.log(inputTelefoneEditado)
  }
  function inputProblemaOnChange(e){
    setInputProblemaEditado(e.target.value)
    console.log(inputProblemaEditado)
  }
  async function onClick(){
    const computadorEditado={
      nomeCliente:inputNomeEditado,
      telefoneCliente:inputTelefoneEditado,
      problemaCliente:inputProblemaEditado
    }

    try{
      if(!inputNomeEditado || !inputProblemaEditado || !inputTelefoneEditado){
        alert("Preencha todos os campos")
      }else{
         const response=await axios.post('http://localhost:4090/atualizar-infos/',computadorEditado,{
        headers:{
          'Content-Type': 'application/json'
        }
      })
      navigate('/manutencoes-funcionario')
      }
     
    }catch(error){
      console.log(error)
    
    }

    /*
    const allComputadores=JSON.parse(storage.getItem("lista"))
    console.log(allComputadores[storage.getItem("index")])
    const infosAtualizadas={
        nome:inputNomeEditado,
        problema:inputProblemaEditado,
        telefoneCliente:inputTelefoneEditado
        */
    }
/*
    allComputadores[storage.getItem("index")]=infosAtualizadas

    storage.removeItem("lista")
    storage.setItem("lista",JSON.stringify(allComputadores))

    
    console.log(allComputadores)
    navigate("/manutencoes-funcionario")
    */


    return(
        <div className='containerEdit'>
            <h1>Editar informações</h1>
            <input id='nome' type='text' value={inputNomeEditado} onChange={inputNomeOnChange}></input>
            <input id='telefone' type='text' value={inputTelefoneEditado} onChange={inputTelefoneOnChange}></input>
            <input id='problema' type='text' value={inputProblemaEditado} onChange={inputProblemaOnChange}></input>
            <button onClick={onClick}>Editar</button>
        </div>
    )

}
export default EditarInfoDoComputador