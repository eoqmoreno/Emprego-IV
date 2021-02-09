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
  }

  modificou = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  logar = (user) => {
    if (this.props.empresas != null && this.props.candidatos) {
      this.props.empresas.map(
        (busca) => {
          if (busca.email == user.email && busca.senha == user.senha) {
            this.props.logar(busca._id,"empresa");
          } else {
            this.props.candidatos.map(
              (busca) => {
                if (busca.email == user.email && busca.senha == user.senha) {
                  this.props.logar(busca._id,"candidato");
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

  render() {


    return (
      <div className="modal fade" id="Login" role="dialog" aria-labelledby="Login" aria-hidden="true">
        <div className="modal-dialog" role="document">
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
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" onChange={this.modificou} id="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="senha">Senha</label>
                  <div className="input-group show_hide_password border">
                    <input className="form-control border-0" type="password" required onChange={this.modificou} id="senha" />

                    <div className="input-group-addon">
                      <a href="" className="m-3"><FiEye></FiEye></a>
                    </div>
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
    logar: (id,tipo) => {
      dispatch(logar(id,tipo));
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