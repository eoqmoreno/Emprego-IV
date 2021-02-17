import React from 'react';
import Logo from '../img/logo-icon.png';
import Perfil from '../img/Group 25.png';
import { FiEye } from "react-icons/fi";
import { connect } from 'react-redux';
import { addEmpresa } from '../actions/empresa';

class CadastroEmpresa extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    nomeJuri: "",
    nomeFantasia: "",
    cnpj: "",
    ramoAtuação: "",
    históricoMissão: "",
    endereço: "",
    telefone: "",
    email: "",
    senha: "",
  }

  modificou = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  submeterForm = (event) => {
    event.preventDefault();
    let empresa = {
      nomeJuridico: this.state.nomeJuri,
      nomeFantasia: this.state.nomeFantasia,
      cnpj: this.state.cnpj,
      endereço: this.state.endereço,
      telefone: this.state.telefone,
      historico: this.state.históricoMissão,
      atuacao: this.state.ramoAtuação,
      email: this.state.email,
      senha: this.state.senha,
      foto: "/",
    }
    this.props.addEmpresa(empresa);
    this.setState({
      nomeJuri: "",
      nomeFantasia: "",
      cnpj: "",
      ramoAtuação: "",
      históricoMissão: "",
      endereço: "",
      telefone: "",
      email: "",
      senha: "",
    });
  }

  render() {
    return (
      <div className="modal fade" id="CadastroPessoa_Juridica" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="text-center">
              <img className="" src={Logo} alt=""></img>
            </div>
            <br />
            <h5 className="modal-title azulEscuro text-center bold">GÔ! VAMOS COMEÇAR A OFERTAR!</h5>
            <br />

            <div className="modal-body">
              <form onSubmit={this.submeterForm} required>
                <div className="form-group-perfil">
                  <label htmlFor="fotoPerfil" className="text-center d-block">
                    <div className="w-100 text-center">
                      <img className="w-25" htmlFor="fotoPerfil" src={Perfil} alt="" accept="image/jpeg, image/png"></img>
                      <br></br>
                      <small className="azulEscuro">Hey! Clica aqui para adicionar sua imagem</small>
                    </div>
                  </label>
                  <input type="file" className="form-control-file d-none" id="fotoPerfil" />
                </div>
                <div className="form-group">
                  <label htmlFor="nomeJuri">Nome jurídico da empresa</label>
                  <input type="text" className="form-control" required onChange={this.modificou} id="nomeJuri" />
                </div>

                <div className="form-group">
                  <label htmlFor="nomeFantasia">Nome fantasia</label>
                  <input type="text" className="form-control" id="nomeFantasia" onChange={this.modificou}/>
                </div>
                <div className="form-group">
                  <label htmlFor="cnpj">CNPJ</label>
                  <input type="text" className="form-control" required onChange={this.modificou} id="cnpj" placeholder="99.999.999/9999-99"/>
                </div>
                <div className="form-group">
                  <label htmlFor="descriçãoEmpresa">Descrição da empresa</label>
                  <textarea type="text" className="form-control" id="ramoAtuação" onChange={this.modificou} name="descricao" required placeholder="Qual o ramo de atuação? Com o que a empresa trabalha?" />
                  <br />
                  <textarea type="text" className="form-control" id="históricoMissão" onChange={this.modificou} name="descricao" placeholder="Qual a missão da empresa? Quantos anos está no mercado?" />
                </div>
                <div className="form-group">
                  <label htmlFor="endereço">Endereço completo da empresa</label>
                  <input type="text" className="form-control" required onChange={this.modificou} id="endereço" placeholder="Rua, nº, bairro"/>
                </div>
                <div className="form-group">
                  <label htmlFor="telefone">Telefone de contato</label>
                  <input type="text" className="form-control telefone" onChange={this.modificou} id="telefone" placeholder="(DDD) 9 9999-9999"/>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" required onChange={this.modificou} />
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
    addEmpresa: (empresa) => {
      dispatch(addEmpresa(empresa));
    }
  }
}

export default connect(null, mapDispatchToProps)(CadastroEmpresa);