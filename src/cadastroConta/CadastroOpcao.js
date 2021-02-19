import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo-icon.png';
import $ from 'jquery';

export default class CadastroOpcao extends React.Component {

  render() {
    return (
      <div className="modal fade" id="cadastroOpcao" role="dialog" aria-labelledby="cadastroOpcao" aria-hidden="true">
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
              <h5 className="modal-title azulEscuro text-center bold">COMO QUER ENTRAR?</h5>
              <div className="row justify-content-center d-flex">
                <Link className="btn bg-azulEscuro branco m-4" to="/cadastroCandidato" onClick={()=>{$('#cadastroOpcao').modal('hide');}}>Candidato</Link>

                <button data-toggle="modal" data-target="#CadastroPessoa_Juridica" data-dismiss="modal" type="button" className="btn bg-azulClaro branco m-4">Empresa</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}