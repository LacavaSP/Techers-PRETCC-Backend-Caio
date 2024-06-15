
import MenuFuncionario from "./MenuFuncionario"
import './HomeFuncionario.css'
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


function HomeFuncionario(){
    const [nomeInfo,setNomeInfo]=useState("")
    async function onLoadInfo(){
        try{
            const response=await axios.get('http://localhost:4090/home-funcionario')
            setNomeInfo(response.data.nome)
            console.log(nomeInfo)

        }catch(error){
            console.log(error)
      
        }
    }
    useEffect(()=>{
        onLoadInfo()
    },[])

    /*
    const storage=localStorage
    const UserInfo=JSON.parse(storage.getItem("User"))
    console.log(UserInfo)*/
    return(
        <>
          <div className="allHomeFuncionarios">
        <div className="suporteParaMenuFuncionario">
            <MenuFuncionario></MenuFuncionario>
        </div>
            <div className="funcionariosPageContent">
                <h1>Página Inicial</h1>
                <div className="FuncionariosContentDiv">
                    Olá, {nomeInfo}. Seja bem-vindo ao nosso site! Essa é a visão para todos os funcionários. Você pode monitorar as manutenções em andamento, trocar seus status, visualizar os computadores em estoque para venda, adicionar novos e ver seu perfil cadastrado.
                </div>
            </div>
            
        </div>
        
        </>
        
    )
   
    
}
export default HomeFuncionario