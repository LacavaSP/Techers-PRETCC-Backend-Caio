import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import axios from "axios";


function Login(){
    let [nome, setNome]=useState("")
    let [senha, setSenha]=useState("")
    const navigate = useNavigate();
    const storage=localStorage
    
    function OnChangeNome(){
        const input=document.getElementById("nome")

        setNome(input.value)
    }

    function OnChangeSenha(){
        const inputSenha=document.getElementById("senha")
  
        setSenha(inputSenha.value)
    }
    async function onClick(){

        try{
            if(!senha || !nome){
                alert("Preencha todos os campos")
            }else{
                const user={
                nome:nome,
                senha:senha
            }
            const response= await axios.get('http://localhost:4090', {
                params:{
                    nome:nome,
                    senha:senha
                }
            })
            const loggedUser=response.data
            console.log(loggedUser);

            if(response.data.funcionario){
                navigate('home-funcionario')
                 
            }else{
                navigate('home-cliente')
           
            }
            }
            
        }catch(error){
            window.alert("Usuário não encontrado")
            console.log(error)
         
        }




        /*
        let sim=0;
       
        for(const chave in storage){
           
            console.log(chave)
            
            const valor=JSON.parse(localStorage.getItem(chave))
            
            console.log(valor)
            if(chave==nome && valor.senha==senha){
                localStorage.setItem("User", JSON.stringify(valor))
                if(valor.funcionario==false){
                    navigate("home-cliente")
                }else{
                 
                    navigate("home-funcionario")
                }
                
                sim=1
                
                break
            }
            

        }
        if(sim==0){
            alert("user not found")
            
        }
        
*/
    }
    return(
        <>
            <div className="login">
                <div className="container">
                <h2>Login</h2>
                <input id="nome" type="text" placeholder="Digite seu nome" onChange={OnChangeNome}></input>
                <input id="senha" type="password" placeholder="Digite sua senha" onChange={OnChangeSenha}></input>
                <a href="/cadastro" className="aLogin">Não possui um cadastro? Cadastre-se!</a>
                <button onClick={onClick} className="buttonLogin">Enviar</button>

             </div>
            </div>
            
            
        
        
         
        
        </>
    )
   
}


export default Login