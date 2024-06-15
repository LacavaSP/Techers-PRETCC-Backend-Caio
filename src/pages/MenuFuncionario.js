import { Link } from "react-router-dom"

import "./MenuFuncionario.css"
function MenuFuncionario(){

    return(
        <>
            <nav className="navMenuFuncionarios">
              <div className="menuButtons">
                  <div className="bordasBrancas">
                  <button className="buttonMenu">
                      <Link to={'/home-funcionario'} className="MenuLink">Página inicial</Link>
                </button>
                <button className="buttonMenu" >
                <Link to={'/manutencoes-funcionario'} className="MenuLink">Manutenções</Link>
                  </button>
                <button className="buttonMenu">
                <Link to={'/computadores-venda'} className="MenuLink">Computadores</Link>
                  </button>
                  <button className="buttonMenu">
                       <Link to={'/contas'} className="MenuLink">Contas</Link>
                  </button>
                <button className="buttonMenu">
                       <Link to={'/perfil-funcionario'} className="MenuLink">Perfil</Link>
                  </button>
                  
                  </div>
               
          </div> 
            </nav>
             
        
          
        </>
    )
  
}

export default MenuFuncionario