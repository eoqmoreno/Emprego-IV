import React from 'react'
import { Link } from 'react-router-dom';
import icone_salario from "../img/icone_salario.png";
import { connect } from 'react-redux';
import { buscarCurriculo } from '../actions/curriculo';
import { buscarCandidato } from '../actions/candidato';
import { storage } from '../firebase/firebaseConfig';

class CardVaga extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            render: "",
        }
    }

    componentDidMount = () => {
        this.props.buscarCandidato();

        var foto = storage.ref().child('empresa/' + this.props.empresa.email).getDownloadURL();
        foto.then((result) => {
            console.log(result)
            this.setState({
                render: result,
            })
        })
    }

    render() {

        var link = "/listacurriculos/" + this.props.id;

        return (
            <div className="card line-cinza-escuro col-lg-3 col-12 m-5">
                <div className="card-body text-center">
                    <img src={this.state.render} className="rounded-circle mb-3 image-cropper"></img>

                    <br></br>
                    <h5 className="">{this.props.empresa.nomeFantasia}</h5>

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

                <div className="modal fade" tabIndex="-1" id={"modal" + this.props.chave} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center">
                                    <img className="rounded-circle mb-2 w-25" src={this.state.render} alt=""></img>
                                    <br></br>
                                    <h5 className="">{this.props.empresa.nomeFantasia}</h5>
                                </div>
                                <hr></hr>
                                <div className="">
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
