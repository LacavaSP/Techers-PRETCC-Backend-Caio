import { useEffect } from "react"
import "./AddNovaVenda.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function AddNovaVenda(){
    const navigate=useNavigate()
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

    async function onClickAddVenda(){
        const novoComputadorAVenda={
            titulo:inputAnuncio,
            processador:inputProcessador,
            placa_mae:inputPlacaMae,
            placa_video:inputPlacaVideo,
            fonte:inputFonte,
            gabinete:inputGabinete,
            fans:inputFans,
            cooler:inputCooler,
            ram:inputRAM,
            armazenamento:inputArmazenamento,
            preco:inputPreco

        }
        console.log(novoComputadorAVenda)
        try {
            if(!inputAnuncio || !inputArmazenamento || !inputCooler || !inputFans || !inputFonte || !inputFonte || !inputGabinete || !inputPlacaMae || !inputPlacaVideo || !inputPreco || !inputProcessador || !inputRAM){
                alert("Preencha todos os campos")
            }else{
                const response=await axios.post('http://localhost:4090/add-nova-venda',novoComputadorAVenda,{
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
                    Adicione uma nova Venda
                </h1>
                <hr id="hrVendas"></hr>
                <div className="labelDoInputFile">
                        <p>Foto do computador: </p>
                        <input type="file" className="inputFile"></input>
                    </div>
                <div className="inteiro">
                <div className="metadeUm">
                    
                    <div className="labelDoInput">
                        <p>Nome do Anúncio: </p>
                        <input onChange={onChangeInputAnuncio} id="inputAnuncio" type="text" placeholder="Digite o título do anúncio"></input>
                    </div>
                    <div className="labelDoInput">
                        <p>Modelo do Processador: </p>
                        <input onChange={onChangeInputProcessador} id="inputProcessador" type="text" placeholder="Digite aqui"></input>
                    </div>
                    <div className="labelDoInput">
                        <p>Modelo da Placa-Mãe: </p>
                        <input onChange={onChangeInputPlacaMae} id="inputPlacaMae" type="text" placeholder="Digite aqui"></input>
                    </div>
                    <div className="labelDoInput">
                        <p>Modelo da Placa De Vídeo: </p>
                        <input onChange={onChangeInputPlacaVideo} id="inputPlacaVideo" type="text" placeholder="Digite aqui"></input>
                    </div>
                    <div className="labelDoInput">
                        <p>Modelo da fonte: </p>
                        <input onChange={onChangeInputFonte} id="inputFonte" type="text" placeholder="Digite aqui"></input>
                    </div>
               </div>
                <div className="metadeUm">
                    
                    <div className="labelDoInput">
                        <p>Modelo do Gabinete: </p>
                        <input onChange={onChangeInputGabinete} id="inputGabinete" type="text" placeholder="Digite aqui"></input>
                    </div>
                    <div className="labelDoInput">
                        <p>Quantidade de fans: </p>
                        <input onChange={onChangeInputFans} id="inputFans" type="text" placeholder="Digite aqui"></input>
                    </div>
                    <div className="labelDoInput">    
                        <p>Modelo do Cooler: </p>
                        <input onChange={onChangeInputCooler} id="inputCooler" type="text" placeholder="Digite aqui"></input>
                    </div>
                    <div className="labelDoInput">   
                        <p>Quantidade de RAM: </p>
                        <input onChange={onChangeInputRAM} id="inputRAM" type="text" placeholder="Digite aqui"></input>

                    </div>
                    <div className="labelDoInput">
                        <p>Armazenamento: </p>
                        <input onChange={onChangeInputArmazenamento} id="inputArmazenamento" type="text" placeholder="Digite aqui"></input>
                    </div>
                </div>
                
                </div>
                <div className="divPreco">
                    <p>Preço:</p>
                    <input onChange={onChangeInputPreco} id="inputPreco" type="text" placeholder="Digite aqui o preço"></input>
                </div>
                <hr id="hrVendas"></hr>
                <button onClick={onClickAddVenda} className="botaoVendas">Adicionar</button>
                
            </div>
            
            
        </div>
    )
}
export default AddNovaVenda