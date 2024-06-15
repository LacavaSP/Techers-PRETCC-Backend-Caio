import './PerfilFuncionario.css'
import MenuFuncionario from './MenuFuncionario'
import { useEffect, useState } from 'react'
import axios from 'axios'


function PerfilFuncionario(){
    const [userInfos,setUserInfos]=useState("")
    async function onLoadInfo(){
        try{
            const response=await axios.get('http://195.35.37.40:4090/perfil-info')
            console.log(response.data)
            setUserInfos(response.data)
        }catch(error){
            console.log(error)
            
        }
    }
    useEffect(()=>{
        onLoadInfo()
    },[])
   /* const userInfos= JSON.parse(localStorage.getItem("User"))
    console.log(userInfos)
 */



    return(
        <div className='allPerfilFuncionariosContent'>
            <div className='suporteParaMenuFuncionario'>
            <MenuFuncionario></MenuFuncionario>
            </div>
            <div className='PerfilFuncionarioContent'>
                <h1>Perfil</h1>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sVuWivdorVDD9OrMKOJESnm3Oq4kXRBQWg&s' className='imgPerfilFuncionario'></img>
                
                <div className='infosFuncionarioPerfil'>
                    <p><strong>Nome: </strong>{userInfos.nome}</p>
                    <p><strong>Telefone: </strong>{userInfos.telefone}</p>
                    <p><strong>Email: </strong>{userInfos.email}</p>
                </div>
                
              
                   
                

            </div>
        </div>
        

     



    )

}
export default PerfilFuncionario