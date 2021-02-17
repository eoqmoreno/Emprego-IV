import React from 'react'
import { Link } from 'react-router-dom';
import icone_salario from "../img/icone_salario.png";
import hf from "../img/empresa/hf.png"
import $, { event } from "jquery";
import { connect } from 'react-redux';
import { buscarCurriculo } from '../actions/curriculo';
import { buscarCandidato } from '../actions/candidato';
import Curriculo from '../listaDeCandidatos/Curriculo';

class CardVaga extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.buscarCandidato();
        this.props.buscarCurriculo();
    }

    render() {
        var link = "/listacurriculos/" + this.props.idVaga;

        return (
            <div className="card line-cinza-escuro col-4">
                <div className="card-body text-center">
                    <img src={hf} class="rounded-circle line-azulEscuro mb-2"></img>
                    <br></br>
                    <span className="">{this.props.empresa}</span>

                    <hr></hr>
                    <h5 className="card-title bold azulEscuro mb-0">{this.props.profissao}</h5>
                    <span className="card-text">{this.props.descricao}</span>
                    <br></br>
                    <div className="m-2">
                        <img src={icone_salario} className="m-2"></img>
                        <span className="bold">R$ {this.props.salario}</span>
                    </div>
                    <small className="p-2">{this.props.horario} horas por dia</small>

                    <small className="separatorVerticalLeft p-2">{this.props.dias}</small>
                    <br></br>
                    <button data-toggle="modal" data-target={"#modal" + this.props.chave} data-dismiss="modal" className="btn btn-outline-primary">Ver vaga</button>
                    <Link to={link} className="btn btn-primary">Candidatar</Link>
                </div>

                <div class="modal fade" tabindex="-1" id={"modal" + this.props.chave} role="dialog" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header border-0">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="text-center">
                                    <img className="rounded-circle line-azulEscuro mb-2" src={hf} alt=""></img>
                                    <br></br>
                                    <span className="">{this.props.empresa}</span>
                                </div>
                                <hr></hr>
                                <div class="">
                                    <span className="d-block w-100 text-center bold">{this.props.profissao}</span>
                                    <span className="d-block w-100 text-center">Salário de <b>R${this.props.salario}</b></span>
                                    <span className="d-block w-100 text-center">{this.props.dias}</span>
                                    <span className="d-block w-100 text-center">{this.props.horario} horas por dia</span>
                                    <span className="d-block w-100 text-center">Total de {this.props.qtdVagas} vagas</span>
                                    <hr></hr>
                                    <span className="d-block w-100 text-center bold">Habilidades e pré-requisitos</span>
                                    <span className="d-block w-100 text-center">{this.props.habTecnica.join(" - ")}</span>
                                    <span className="d-block w-100 text-center">{this.props.habInterpessoais.join(" - ")}</span>

                                </div>
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
        curriculos: state.curriculo.curriculos,
        candidatos: state.candidato.candidatos,
        login: state.login.login,
    }
}

const mapearDispatchParaProps = (dispatch) => {
    return {
        buscarCurriculo: () => {
            dispatch(buscarCurriculo());
        },

        buscarCandidato: () => {
            dispatch(buscarCandidato());
        },
    }
}

export default connect(mapearEstadoParaProps, mapearDispatchParaProps)(CardVaga);
