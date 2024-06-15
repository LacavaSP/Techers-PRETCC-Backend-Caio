import { useEffect } from 'react'
import './Contas.css'
import MenuFuncionario from './MenuFuncionario'
import axios from 'axios'
import { useState } from 'react'

function Contas(){
    const [contasInfo,setContasInfo]=useState([])
    async function onLoadInfo(){
        try {
            const response=await axios.get('http://195.35.37.40:4090/contas-cadastradas')
          
            setContasInfo(response.data)
            
        } catch (error) {
            console.log(error);
        }
         
    }
    useEffect(()=>{
        onLoadInfo()
    },[])
    
   for(const conta of contasInfo){
    if(conta.funcionario){
        conta.funcao="Funcionário"
        conta.funcaooposta="Cliente"
    }else{
        conta.funcao="Cliente"
        conta.funcaooposta="Funcionário"
    }
   }
   console.log(contasInfo)

    async function handleSelect(e){
        console.log(e.target.value)
        try{
            const response=await axios.post('http://195.35.37.40:4090/mudar-cargo/'+e.target.id)
        }catch(error){
            console.log(error)
           
        }
    }

    return(
        <div className='allContentOfContas'>
            <div className='suporteParaMenuFuncionario'>
                <MenuFuncionario></MenuFuncionario>
            </div>
            <div className='divTabela'>
                 <h2>Contas cadastradas</h2>
            <table>
               
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Cargo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contasInfo.map((contaInfo,index)=>
                    <>
                            <tr>
                                <td>{contaInfo.nome}</td>
                                <td>{contaInfo.email}</td>
                                <td>
                                <select className='selectCargo' onChange={handleSelect} id={index}>
                                    <option className='optionOp'>{contaInfo.funcao}</option>
                                    <option className='optionOp'>{contaInfo.funcaooposta}</option>
                                </select>
                                </td>
                    
                            </tr>
                        </>
                    )
                        
                    }
                        
                       
                        
                </tbody>
            </table>
            </div>
            
        </div>
       
        

    )


}
export default Contas