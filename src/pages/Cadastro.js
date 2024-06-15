import { useState } from "react"
import "./Cadastro.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Cadastro(){
    const navigate = useNavigate();
    const [nomeCadastro,setNomeCadastro]=useState('')
    const [senhaCadastro,setSenhaCadastro]=useState('')
    const [telefoneCadastro,setTelefoneCadastro]=useState('')
    const [emailCadastro,setEmailCadastro]=useState('')

    const localStorage=window.localStorage

    function OnChangeNomeCadastro(){
        const input=document.getElementById('nome')
        console.log(input.value)
        setNomeCadastro(input.value)
    }
    
    function OnChangeSenhaCadastro(){
        const input=document.getElementById('senha')
        console.log(input.value)
        setSenhaCadastro(input.value)
    }
    
    function OnChangeTelefoneCadastro(){
        const input=document.getElementById('telefone')
        console.log(input.value)
        setTelefoneCadastro(input.value)
    }
    
    function OnChangeEmailCadastro(){
        const input=document.getElementById('email')
        console.log(input.value)
        setEmailCadastro(input.value)
    }
    async function onClickCadastro(){
        const userInfo={
            nome:nomeCadastro,
            senha:senhaCadastro,
            telefone:telefoneCadastro,
            email:emailCadastro,
            funcionario:false
        }
       
        await localStorage.setItem(nomeCadastro, JSON.stringify(userInfo))
        try{
            if(!nomeCadastro || !senhaCadastro || !telefoneCadastro || !emailCadastro){
                alert("Preencha todos os campos")
            }else{
                console.log("deu")
            const response=await axios.post('http://195.35.37.40:4090/cadastro-info-user', userInfo,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            window.alert("Cadastro realizado com sucesso")
            console.log(response.data)
            navigate("/")
            }
            
        }catch (error){
            console.log(error)
           
            
        }
        
    }
    return(
        <>
        <div className="cadastro">
            <div className="container">
            <h2>Cadastro</h2>
            <input id="nome" type="text" placeholder="Digite seu nome" onChange={OnChangeNomeCadastro}></input>
            <input id="senha" type="password" placeholder="Digite sua senha" onChange={OnChangeSenhaCadastro}></input>
            <input id="telefone" type="number" placeholder="Digite seu telefone" onChange={OnChangeTelefoneCadastro}></input>
            <input id="email" type="text" placeholder="Digite seu email" onChange={OnChangeEmailCadastro}></input>
            <button id="botao" onClick={onClickCadastro} className="buttonCadastro">Cadastrar-se</button>

        </div>
        </div>
        
        
        </>
    )
}
export default Cadastro