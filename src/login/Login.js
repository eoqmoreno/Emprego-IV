import React from 'react';

import Logo from '../img/logo-icon.png';

import { FiEye } from 'react-icons/fi';
import { connect } from 'react-redux';
import { logar } from '../actions/login';
import { buscarEmpresa } from '../actions/empresa';
import { buscarCandidato } from '../actions/candidato';
import $ from 'jquery';

class Login extends React.Component {

  componentDidMount = () => {
    this.props.buscarEmpresa();
    this.props.buscarCandidato();
  }

  state = {
    email: "",
    senha: "",
    tipo: "password"
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
            $("#Login").modal("hide");
            $(".alert").addClass("d-none")
            $('#loading').modal()
            setTimeout(function () {
              $('#loading').modal("hide")
            }, 2000)
            return this.props.logar(busca.email, "empresa");

          } else {

            this.props.candidatos.map(
              (busca) => {
                if (busca.email == user.email && busca.senha == user.senha) {

                  $("#Login").modal("hide");
                  $(".alert").addClass("d-none")
                  $('#loading').modal()
                  setTimeout(function () {
                    $('#loading').modal("hide")
                  }, 2000)
                  return this.props.logar(busca.email, "candidato");

                } else {

                  $(".alert").removeClass("d-none")

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
    $(".form-control").val('');
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
              <div className="alert alert-danger d-none">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h5 className="alert-heading">E-mail ou senha incorretos</h5>
                <p>Alguma coisa deu errado, tenta entrar novamente ou faz o cadastro que a gente espera você aqui!</p>
              </div>

              <form onSubmit={this.submeter} className="m-5">

                <div className="form-group">
                  <label htmlFor="email" className="m-0">E-mail</label>
                  <input type="email" className="form-control" onChange={this.modificou} id="email" required />
                </div>
                <div className="input-group">
                  <label className="col-12 p-0 m-0" htmlFor="senha">Senha:</label>
                  <input type={this.state.tipo} className="form-control" onChange={this.modificou} aria-describedby="ver" id="senha" required />
                  <div className="input-group-append">
                    <button className="btn btn-outline-primary" type="button" id="ver" onClick={this.mostrarSenha}><FiEye></FiEye></button>
                  </div>
                </div>
                <br></br>
                <div className="justify-content-center d-flex">
                  <input type="submit" className="btn btn-primary" value="Entrar"></input>
                </div>

              </form>
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