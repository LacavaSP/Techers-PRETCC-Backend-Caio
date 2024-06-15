import './EditarComputadorVenda.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function EditarComputadorVendas(){
    
   
    const [inputAnuncio,setInputAnuncio]=useState('')
    const [inputProcessador,setInputProcessador]=useState('')
    const [inputPlacaMae,setInputPlacaMae]=useState('')
    const [inputPlacaVideo,setInputPlacaVideo]=useState('')
    const [inputFonte,setInputFonte]=useState('')
    const [inputGabinete,setInputGabinete]=useState('')
    const [inputFans,setInputFans]=useState('')
    const [inputCooler,setInputCooler]=useState('')
    const [inputRAM,setInputRAM]=useState('')
    const [inputArmazenamento,setInputArmazenamento]=useState('')
    const [inputPreco,setInputPreco]=useState('')

    const navigate=useNavigate()

    async function onLoadInfo(){
        try{
            const response=await axios.get('http://195.35.37.40:4090/pegar-info-para-editar')
            setInputAnuncio(response.data.titulo)
            setInputProcessador(response.data.processador)
            setInputPlacaMae(response.data.placa_mae)
            setInputPlacaVideo(response.data.placa_video)
            setInputFonte(response.data.fonte)
            setInputGabinete(response.data.gabinete)
            setInputFans(response.data.fans)
            setInputCooler(response.data.cooler)
            setInputRAM(response.data.ram)
            setInputPreco(response.data.preco)
            setInputArmazenamento(response.data.armazenamento)
            console.log(response.data)
        }catch{

        }
    }
    useEffect(()=>{
        onLoadInfo()
    },[])
    
    function onChangeInputAnuncio(e){
        console.log(e.target.value)
        setInputAnuncio(e.target.value)
    }
    function onChangeInputProcessador(e){
        console.log(e.target.value)
        setInputProcessador(e.target.value)
    }
    function onChangeInputPlacaMae(e){
        console.log(e.target.value)
        setInputPlacaMae(e.target.value)
    }
    function onChangeInputPlacaVideo(e){
        console.log(e.target.value)
        setInputPlacaVideo(e.target.value)
    }
    function onChangeInputFonte(e){
        console.log(e.target.value)
        setInputFonte(e.target.value)
    }
    function onChangeInputGabinete(e){
        console.log(e.target.value)
        setInputGabinete(e.target.value)
    }
    function onChangeInputFans(e){
        console.log(e.target.value)
        setInputFans(e.target.value)
    }
    function onChangeInputCooler(e){
        console.log(e.target.value)
        setInputCooler(e.target.value)
    }
    function onChangeInputRAM(e){
        console.log(e.target.value)
        setInputRAM(e.target.value)
    }
    function onChangeInputArmazenamento(e){
        console.log(e.target.value)
        setInputArmazenamento(e.target.value)
    }
    function onChangeInputPreco(e){
        console.log(e.target.value)
        setInputPreco(e.target.value)
    }

    async function handleEditarVendaComputador(){
        const computadorEditado={
            titulo:inputAnuncio,
            processador:inputProcessador,
            preco:inputPreco,
            placa_mae:inputPlacaMae,
            placa_video:inputPlacaVideo,
            armazenamento:inputArmazenamento,
            cooler:inputCooler,
            fonte:inputFonte,
            ram:inputRAM,
            fans:inputFans,
            gabinete:inputGabinete
        }
        try {
            if(!inputAnuncio || !inputArmazenamento || !inputCooler || !inputFans || !inputFonte || !inputFonte || !inputGabinete || !inputPlacaMae || !inputPlacaVideo || !inputPreco || !inputProcessador || !inputRAM){
                alert("Preencha todos os campos")
            }else{
                 const response=await axios.post('http://195.35.37.40:4090/computador-editado',computadorEditado,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            navigate('/computadores-venda')
            }
           
        } catch (error) {
            console.log(error)
       
        }
    }

    return(
        <div className="containerAllnewVenda">
            <div className="containerVendas">
                <h1>
                    Editar informações do computador
                </h1>
                <hr id="hrVendas"></hr>
                <div className="inteiro">
                <div className="metadeUm">
                    
                    <div className="labelDoInput" >
                        <p>Nome do Anúncio: </p>
                        <input value={inputAnuncio} onChange={onChangeInputAnuncio} id="inputAnuncio" type="text" placeholder="Digite o título do anúncio"></input>
                    </div>
                    <div className="labelDoInput">
                        <p>Modelo do Processador: </p>
                        <input value={inputProcessador} onChange={onChangeInputProcessador} id="inputProcessador" type="text" placeholder="Digite aqui"></input>
                    </div>
                    <div className="labelDoInput">
                        <p>Modelo da Placa-Mãe: </p>
                        <input value={inputPlacaMae} onChange={onChangeInputPlacaMae} id="inputPlacaMae" type="text" placeholder="Digite aqui"></input>
                    </div>
                    <div className="labelDoInput">
                        <p>Modelo da Placa De Vídeo: </p>
                        <input value={inputPlacaMae} onChange={onChangeInputPlacaVideo} id="inputPlacaVideo" type="text" placeholder="Digite aqui"></input>
                    </div>
                    <div className="labelDoInput">
                        <p>Modelo da fonte: </p>
                        <input value={inputFonte} onChange={onChangeInputFonte} id="inputFonte" type="text" placeholder="Digite aqui"></input>
                    </div>
               </div>
                <div className="metadeUm">
                    
                    <div className="labelDoInput">
                        <p>Modelo do Gabinete: </p>
                        <input value={inputGabinete} onChange={onChangeInputGabinete} id="inputGabinete" type="text" placeholder="Digite aqui"></input>
                    </div>
                    <div className="labelDoInput">
                        <p>Quantidade de fans: </p>
                        <input value={inputFans} onChange={onChangeInputFans} id="inputFans" type="text" placeholder="Digite aqui"></input>
                    </div>
                    <div className="labelDoInput">    
                        <p>Modelo do Cooler: </p>
                        <input value={inputCooler} onChange={onChangeInputCooler} id="inputCooler" type="text" placeholder="Digite aqui"></input>
                    </div>
                    <div className="labelDoInput">   
                        <p>Quantidade de RAM: </p>
                        <input value={inputRAM} onChange={onChangeInputRAM} id="inputRAM" type="text" placeholder="Digite aqui"></input>

                    </div>
                    <div className="labelDoInput">
                        <p>Armazenamento: </p>
                        <input value={inputArmazenamento} onChange={onChangeInputArmazenamento} id="inputArmazenamento" type="text" placeholder="Digite aqui"></input>
                    </div>
                </div>
                
                </div>
                <div className="divPreco">
                    <p>Preço:</p>
                    <input value={inputPreco} onChange={onChangeInputPreco} id="inputPreco" type="text" placeholder="Digite aqui o preço"></input>
                </div>
                <hr id="hrVendas"></hr>
                <button  className="botaoVendas" onClick={handleEditarVendaComputador}>Editar</button>
                
            </div>
            
            
        </div>
    )
}
export default EditarComputadorVendas