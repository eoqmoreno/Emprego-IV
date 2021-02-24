import React from 'react';
import { connect } from 'react-redux';
import { buscarCandidatura } from '../actions/candidatar';
import { buscarCandidato } from '../actions/candidato';
import { buscarCurriculo } from '../actions/curriculo';
import Breadcrumb from '../commun/Breadcrumb';
import Curriculo from '../listaDeCandidatos/Curriculo';
import TabelaLinha from './TabelaLinha';


class ListaCurriculos extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount = () => {
        this.props.buscarCandidato();
        this.props.buscarCurriculo();
        // this.props.buscarCandidatura()
    }

    render() {
        var login = ""
        if (this.props.login != null) {
            login = this.props.login[0];
        }

        var tabela = [];
        var modais = [];
        var candidatos = [];
        var candidatoEnvio = "";
        var vaga = this.props.match.params.vaga;

        if (this.props.candidatos != null) {
            this.props.candidatos.map((busca) => { candidatos.push(busca) } )
        }

        if (this.props.curriculos != null && this.props.candidatos != null && this.props.login != null) {
            this.props.curriculos.map((curriculo, index) => {
                candidatos.map((candidato)=> {
                    if(candidato.email == curriculo.candidato){
                        return candidatoEnvio = candidato;
                    }
                })
                if (curriculo.candidato == this.props.login[0]) {
                    tabela.push(<TabelaLinha chave={index} vaga={vaga} curriculo={curriculo.id}></TabelaLinha>)
                    modais.push(<Curriculo curriculo={curriculo} candidato={candidatoEnvio} key={index} chave={"modal" + index}></Curriculo>)
                }
            })
        }

        var caminho = [
            { nome: "LISTA DE CURRICULOS", link: "/listacurriculos/" + vaga },
        ]


        return (
            <div>
                <Breadcrumb caminho={caminho}></Breadcrumb>

                <table className="table table-hover border-0 text-center">

                    <tbody>
                        {tabela}
                    </tbody>

                </table>
                {modais}

            </div >


        )
    }
}

const mapearDispatchParaProps = (dispatch) => {
    return {
        buscarCandidato: () => {
            dispatch(buscarCandidato());
        },
        buscarCurriculo: () => {
            dispatch(buscarCurriculo());
        },
        buscarCandidatura: () => {
            dispatch(buscarCandidatura());
        }
    }
}

const mapearEstadoParaProps = (state, props) => {
    return {
        candidatos: state.candidato.candidatos,
        curriculos: state.curriculo.curriculos,
        candidaturas: state.candidatar.candidaturas,
        login: state.login.login,
    }
}

export default connect(mapearEstadoParaProps, mapearDispatchParaProps)(ListaCurriculos);