import React from 'react'
import Logo from '../img/logo-icon.png'
import Perfil from '../img/Group 25.png'

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.fun = props.fun;
  }
    render() {
        return (
            <div class="modal fade" id="CadastroPessoa_Fisica" tabindex="-1" role="dialog" aria-labelledby="CadastroPessoa_Fisica" aria-hidden="true">
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
                    <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                </div>
                <div class="form-group"></div>
                <div class="form-group">
                  <label for="usr">Nome Completo</label>
                  <input type="text" class="form-control" id="usr" name="username"/>
                </div>
                <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="form-group">
                  <label for="pwd">Senha</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"/>
                  <small id="emailHelp" class="form-text text-muted">Deve ter de 8 a 20 caracteres.</small>
                </div>
                <div class="form-group">
                  <label for="pwd">Telefone de Contato</label>
                  <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="form-group row">
                    <label for="example-date-input" class="col-2 col-form-label">Date</label>
                    <div class="col-10">
                     <input class="form-control" type="date" id="example-date-input"/>
                    </div>
                </div>
                    <span class="glyphicon glyphicon-th"></span>
                  </div>
                <div class="modal-footer justify-content-center">
                  <button type="button" class="btn btn-primary" onClick={this.fun}>Cadastrar</button>
                </div>
            </div>
            </div>
            </div>
        
        )
    }
}
 

