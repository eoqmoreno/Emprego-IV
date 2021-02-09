import React from 'react'
import Logo from '../img/logo-icon.png'
import { NavLink } from 'react-router-dom'

export default class CadastroOpcao extends React.Component {
  
    render() {
        return (
            <div class="modal fade" id="cadastroOpcao" tabindex="-1" role="dialog" aria-labelledby="cadastroOpcao" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                <img class="img-fluid" src={Logo}></img>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
          
                <h5 class="modal-title" id="Bemvindo"> Bem-Vindo a Empregô!</h5>
                <br/>
                <div class="modal-footer justify-content-center">
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#CadastroPessoa_Fisica" data-dismiss="modal">Pessoa Fisica</button>
                  <button data-toggle="modal" data-target="#CadastroPessoa_Juridica" data-dismiss="modal" type="button" class="btn btn-secund">Pessoa Juridica</button>
                </div>
              </div>
            </div>
          
          
          </div>
        )
    }
}