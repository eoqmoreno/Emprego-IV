import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavbarEmp extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse col-12 col-lg-9 justify-content-center align-self-center" id="conteudoNavbarSuporta">
                <ul className="navbar-nav">
                    <li className="nav-item text-center">
                        <Link className="bg-transparent btn m-2" to="/">Pagina Inicial</Link>
                    </li>
                    <li className="nav-item text-center">
                        <div className="btn-group dropdown">
                            <button className="btn btn-primary dropdown-toggle" id="meuPefil" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Meu perfil</button>

                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/cadastrarvaga">Publicar vaga</Link>
                                <Link className="dropdown-item" to="/vagascadastradas">Lista de vagas</Link>
                                <Link className="dropdown-item" to="/">Vagas arquivadas</Link>

                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/">Editar perfil</Link>
                                <Link className="dropdown-item" onClick={()=>{this.props.sair()}} to="/">Sair</Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavbarEmp
