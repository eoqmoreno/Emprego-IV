import React from 'react'
import Logo from '../img/logo-icon.png'
import Perfil from '../img/Group 25.png'

import { FiEye } from "react-icons/fi";
import { connect } from 'react-redux';
import { addCandidato } from '../actions/candidato';

class CadastroCandidato extends React.Component {
  constructor(props) {
    super(props);
    this.fun = props.fun;
  }

  state = {
    nomeCompleto: "",
    email: "",
    telefone: "",
    data: "",
    senha: "",
  }

  modificou = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  submeterForm = (event) => {
    event.preventDefault();
    let candidato = {
      nome: this.state.nomeCompleto,
      email: this.state.email,
      telefone: this.state.telefone,
      data: this.state.data,
      senha: this.state.senha,
      foto: "../img/candidato/1.jpg",
    }
    this.props.addCandidato(candidato);
    this.setState({
      nomeCompleto: "",
      email: "",
      telefone: "",
      data: "",
      senha: "",
    });
  }

  render() {
    return (
      <div className="modal fade" id="CadastroPessoa_Fisica" role="dialog" aria-labelledby="CadastroPessoa_Fisica" aria-hidden="true">
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
              <h5 className="modal-title azulEscuro text-center bold">GÔ! VAMOS COMEÇAR A PROCURAR!</h5>
              <br />

              <form onSubmit={this.submeterForm}>
                <div className="form-group-perfil">
                  <label htmlFor="fotoPerfil" className="text-center d-block">
                    <div className="w-100 text-center">
                      <img className="w-25" htmlFor="fotoPerfil" src={Perfil} alt=""></img><br></br>
                      <small className="azulEscuro">Hey! Clica aqui para adicionar sua imagem</small>
                    </div>
                  </label>
                  <input type="file" className="form-control-file d-none" id="fotoPerfil" accept="image/jpeg, image/png" />
                </div>
                <div className="form-group">
                  <label htmlFor="nomeCompleto">Nome completo</label>
                  <input type="text" className="form-control" required onChange={this.modificou} id="nomeCompleto" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" required onChange={this.modificou} id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="senha">Senha</label>
                  <div className="input-group show_hide_password border">
                    <input className="form-control border-0" type="password" required onChange={this.modificou} id="senha" />

                    <div className="input-group-addon">
                      <a href="" className="m-2 align-middle"><FiEye></FiEye></a>
                    </div>
                  </div>
                  <small id="senha" className="form-text text-muted">Deve ter de 8 a 20 caracteres</small>
                </div>
                <div className="form-group"></div>
                <div className="form-group">
                  <label htmlFor="telefone">Telefone de contato</label>
                  <input type="text" className="form-control telefone" onChange={this.modificou} id="telefone" />
                </div>
                <div className="form-group row">
                  <label htmlFor="data" className="col-12 col-form-label">Data de nascimento</label>
                  <div className="col-12">
                    <input className="form-control" type="date" required onChange={this.modificou} id="data" />
                  </div>
                </div>
                <span className="glyphicon glyphicon-th"></span>
                <div className="modal-footer border-0 justify-content-center">
                  <input type="submit" className="btn btn-primary" value="Concluir cadastro"></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCandidato: (candidato) => {
      dispatch(addCandidato(candidato));
    }
  }
}

export default connect(null, mapDispatchToProps)(CadastroCandidato);