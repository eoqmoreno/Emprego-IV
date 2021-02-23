import React from 'react';

import Logo from '../img/logo-icon.png';

import { FiEye } from 'react-icons/fi';
import { connect } from 'react-redux';
import { logar } from '../actions/login';
import { buscarEmpresa } from '../actions/empresa';
import { buscarCandidato } from '../actions/candidato';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.buscarEmpresa();
    this.props.buscarCandidato();
  }

  state = {
    email: "",
    senha: "",
    tipo:"password"
  }

  modificou = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  logar = (user) => {
    if (this.props.empresas && this.props.candidatos) {
      this.props.empresas.map(
        (busca) => {
          if (busca.email == user.email && busca.senha == user.senha) {
            this.props.logar(busca.email, "empresa");
          } else {
            this.props.candidatos.map(
              (busca) => {
                if (busca.email == user.email && busca.senha == user.senha) {
                  this.props.logar(busca.email, "candidato");
                }
              })
          }
        }
      )
    }
  }

  submeter = (event) => {
    event.preventDefault();
    var user = {
      email: this.state.email,
      senha: this.state.senha,
    }
    this.logar(user);
  }

  mostrarSenha = () => {
    if (this.state.tipo == "password") {
        this.setState({
            tipo: "text",
        })
    } else {
        if (this.state.tipo == "text") {
            this.setState({
                tipo: "password",
            })
        }
    }
}

  render() {
    return (
      <div className="modal fade" id="Login" role="dialog" aria-labelledby="Login" aria-hidden="true">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

              <div className="text-center">
                <img className="" src={Logo} alt=""></img>
              </div>
              <br />
              <h5 className="modal-title bg-cinza-claro azulEscuro text-center bold"> Bem-vindo à Empregô!</h5>
              <br />

              <form onSubmit={this.submeter}>

                <div className="form-group">
                  <label htmlFor="email" className="m-0">E-mail</label>
                  <input type="email" className="form-control" onChange={this.modificou} id="email" required />
                </div>
                <div className="input-group">
                  <label className="color col-12 p-0 m-0">Senha:</label>
                  <input type={this.state.tipo} className="form-control" onChange={this.modificou} aria-describedby="ver" id="senha" required />
                  <div className="input-group-append">
                    <button className="btn btn-outline-primary" type="button" id="ver" onClick={this.mostrarSenha}><FiEye></FiEye></button>
                  </div>
                </div>
                <div className="justify-content-center d-flex">
                  <input type="submit" className="btn btn-primary" value="Entrar"></input>
                </div>
                <br></br>
              </form>
            </div>
            <div className="text-center">
              <button className="azulEscuro btn bg-transparent m-0 p-0" href="/">Eita! Esqueci minha senha</button>
            </div>
            <div className="text-center modal-footer pt-0 border-0 justify-content-center">
              <span>Ainda não tem uma conta? </span>
              <button type="button" className="btn bg-transparent m-0 p-0 w-content d-inline azulEscuro bold" data-toggle="modal" data-target="#cadastroOpcao" data-dismiss="modal">Faz aqui!</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapearEstadoParaProps = (state, props) => {
  return {
    login: state.login.id,
    empresas: state.empresa.empresas,
    candidatos: state.candidato.candidatos,
  }
}

function mapearDispatchParaProps(dispatch) {
  return {
    logar: (id, tipo) => {
      dispatch(logar(id, tipo));
    },
    buscarEmpresa: () => {
      dispatch(buscarEmpresa())
    },
    buscarCandidato: () => {
      dispatch(buscarCandidato())
    }
  }
}


export default connect(mapearEstadoParaProps, mapearDispatchParaProps)(Login)