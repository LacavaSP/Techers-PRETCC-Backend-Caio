import "./ComputadoresVenda.css"
import MenuFuncionario from "./MenuFuncionario"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function ComputadoresVenda(){
   const [computadoresAVenda,setComputadoresAVenda]=useState([])
    const navigate=useNavigate()
   async function onLoadInfo(){
    try{
        const response=await axios.get('http://195.35.37.40:4090/listagem-computadoresAVenda')
        console.log(response.data)
        setComputadoresAVenda(response.data)
    }catch(error){
        console.log(error)
    }
   }
   useEffect(()=>{
    onLoadInfo()
   },[])

    async function onClickDivVenda(e){
        console.log(e.target.id)
        try{
            const response=await axios.post('http://195.35.37.40:4090/atualizar-index-computador-info/'+e.target.id)

            navigate('/view-computador-a-venda')
        }catch(error){
            console.log(error)
           
        }
        
    }
    return(
        
        <div className="allContentOfTHIS">
           
            <div className="suportepronav">
                <MenuFuncionario></MenuFuncionario>
            </div>
            <div className="mainContentOfThis">
                <div className="parteDoInputDePesquisaEAddComputers">
                    <div className="inputEFotoBusca">
                        <img className="fotoBusca" src="https://cdn-icons-png.flaticon.com/128/6839/6839938.png"></img>
                        <input type="text" placeholder="Digite aqui sua busca"></input>
                    </div>
             
                    <button className="botaoNovVenda"> <Link className="linkNovaVenda" to={'/adicionar-nova-venda'}>+ Nova Venda</Link></button>
                </div>
            <img src="https://s.zst.com.br/cms-assets/2021/12/melhor-pc-gamer.webp" className="imgVendas"></img>
            <div className="listagemDeComputadores">
                {
                    computadoresAVenda.map((computadorVenda,index)=>

                        <>
                            <div className="computadorAVenda" onClick={onClickDivVenda} id={index}>
                            <img src="" alt="Imagem do computador" className="imagemDoComputer"></img>
                            <p className="nomeDoComputer">{computadorVenda.titulo}</p>
                            <p id="preco">{computadorVenda.preco}</p>
                            
                            </div>
                        </>
                    )
                    
                    
                }
            
               
                
            </div>
            </div>
            
        </div>
    )
}
export default ComputadoresVenda