import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { storage } from '../firebase/firebaseConfig';

export class NavbarEmp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            render: "",
        }
    }

    componentDidMount = () => {
        var foto = storage.ref().child('empresa/' + this.props.email).getDownloadURL();
        foto.then((result) => {
            console.log(result)
            this.setState({
                render: result,
            })
        })
    }

    render() {
        return (
            <div className="collapse navbar-collapse col-12 col-lg-4 justify-content-end text-center" id="conteudoNavbarSuporta">

                <Link className="btn btn-primary " to="/cadastrarvaga">Publicar vaga</Link>

                <div className="btn-group dropdown">
                    <button className="btn btn-outline-primary dropdown-toggle" id="meuPefil" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={this.state.render} className="rounded-circle image-profile"></img>  Meu perfil
                    </button>

                    <div className="dropdown-menu  dropdown-menu-right">
                        <Link className="dropdown-item" to="/vagascadastradas">Lista de vagas</Link>
                        <Link className="dropdown-item" to="/">Vagas arquivadas</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/">Editar perfil</Link>
                        <Link className="dropdown-item" onClick={() => { this.props.sair() }} to="/">Sair</Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default NavbarEmp
