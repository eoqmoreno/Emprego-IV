import React from 'react'
import Logo from '../img/logo-icon.png'
import Perfil from '../img/Group 25.png'
import { NavLink } from 'react-router-dom'

export default class CadastroPessoa_Juridica extends React.Component {
  render() {
    return (
      <div class="modal fade" id="CadastroPessoa_Juridica" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <img class="img-fluid" src={Logo}></img>
              <br></br>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <h5 class="modal-title" id="BemVindo"> Bem-Vindo a Empregô!</h5>
            <div class="modal-body">
              <img class="img-fluid-perfil" src={Perfil}></img>
              <div class="form-group-perfil">
                <label for="exampleInputFile">Foto de Perfil</label>
                <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
              </div>
              <div class="form-group"></div>
              <div class="form-group">
                <label for="usr">Nome Jurídico da Empresa</label>
                <input type="text" class="form-control" id="usr" name="username" />
              </div>
              
              <div class="form-group">
                <label for="usr">Nome Fantasia</label>
                <input type="text" class="form-control" id="usr" name="username" />
              </div>
              <div class="form-group">
                <label for="pwd">CNPJ</label>
                <input type="text" class="form-control" id="exampleInputCNPJ" />
              </div>
              <div class="form-group">
                <label for="pwd">Senha</label>
                <input type="password" class="form-control" id="exampleInputNome1" />
                <small id="emailHelp" class="form-text text-muted">Deve ter de 8 a 20 caracteres.</small>
              </div>
              <div class="form-group">
                <label for="pwd">Endereço completo da empresa</label>
                <input type="text" class="form-control" id="exampleInputNome2" />
              </div>
              <div class="form-group">
                <label for="pwd">Telefone de Contato</label>
                <input type="text" class="form-control" id="exampleInputNome2" />
              </div>
            </div>
          <div class="modal-footer justify-content-center">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#CadastroPessoa_Juridica2" data-dismiss="modal">Salvar e Continuar </button>
          </div>
          </div>
        </div>
      </div>

    )
  }
}


