import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import EditarInfoDoComputador from './pages/EditarInfoComputador';
import ManutencoesFuncionario from './pages/ManutencoesFuncionario';
import HomeFuncionario from './pages/HomeFuncionario';
import MenuFuncionario from './pages/MenuFuncionario';
import React, { useState } from 'react';
import Login from './pages/Login';
import AddNovoComputador from './pages/AddNovoComputador';
import Cadastro from './pages/Cadastro';
import PerfilFuncionario from './pages/PerfilFuncionario';
import ComputadoresVenda from './pages/ComputadoresVenda';
import AddNovaVenda from './pages/AddNovaVenda';
import ViewComputadorAVenda from './pages/ViewComputadorAVenda';
import EditarComputadorVendas from './pages/EditarComputadorVenda';
import Contas from './pages/Contas';


function App() {
  return (
    <Router>

      <div className="App">

      </div>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path="/home-funcionario" element={<HomeFuncionario/>}/>
          <Route path="/manutencoes-funcionario" element={<ManutencoesFuncionario/>}/>
          <Route path="/add-novo-computador-para-manutencao" element={<AddNovoComputador/>}/>
          <Route path="/editar-info-computador" element={<EditarInfoDoComputador/>}/>
          <Route path="/perfil-funcionario" element={<PerfilFuncionario/>}/>
          <Route path="/computadores-venda" element={<ComputadoresVenda/>}/>
          <Route path="/adicionar-nova-venda" element={<AddNovaVenda/>}/>
          <Route path="/view-computador-a-venda" element={<ViewComputadorAVenda/>}/>
          <Route path="/editar-computador-a-venda" element={<EditarComputadorVendas/>}/>
          <Route path="/contas" element={<Contas/>}/>
          
      </Routes>
    </Router>
    
  );
}

export default App;
