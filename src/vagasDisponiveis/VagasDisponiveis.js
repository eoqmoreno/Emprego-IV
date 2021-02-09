import React from 'react';
import { connect } from 'react-redux';
import { buscarCandidato } from '../actions/candidato';
import { buscarCurriculo } from '../actions/curriculo';
import { buscarEmpresa } from '../actions/empresa';
import { buscarVaga } from '../actions/vaga';
import Breadcrumb from '../commun/Breadcrumb';
import CardVaga from './CardVaga';
import Curriculo from './Curriculo';

class VagasDisponiveis extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        curriculos: []
    }

    componentDidMount = () => {
        this.props.buscarVaga();
        this.props.buscarEmpresa();
        this.props.buscarCandidato();
        this.props.buscarCurriculo();
    }

    render() {

        let vagas = [];
        let empresas = [];
        let curriculos = [];
        let candidato= "";

        if (this.props.empresas != null) {
            empresas = this.props.empresas
        }
        var categoria = this.props.match.params.categoria;

        if (categoria != null) {
            if (this.props.vagas != null) {
                vagas = this.props.vagas.map(
                    function (busca, index) {
                        if (busca.categoria == categoria) {
                            var a = empresas.map((a) => { if (a._id == busca.idEmpresa) { return a.nomeFantasia } });
                            return <CardVaga key={index} chave={index} profissao={busca.profissao} habTecnica={busca.habTecnica} habInterpessoais={busca.habInterpessoais} descricao={busca.categoria} salario={busca.salario} dias={busca.dias} horario={busca.horario} empresa={a} idVaga={busca._id} qtdVagas={busca.qtdVagas}></CardVaga>
                        }
                        if (busca.profissao == categoria) {
                            var a = empresas.map((a) => { if (a._id == busca.idEmpresa) { return a.nomeFantasia } });
                            return <CardVaga chave={index} key={index} profissao={busca.profissao} habTecnica={busca.habTecnica} habInterpessoais={busca.habInterpessoais} descricao={busca.categoria} salario={busca.salario} dias={busca.dias} horario={busca.horario} empresa={a} idVaga={busca._id} qtdVagas={busca.qtdVagas}></CardVaga>
                        }
                    }
                )
            }
        }

        var caminho = [
            { nome: "PESQUISA", link: "/vagasdisponiveis" }
        ]
        return (
            <div>
                <Breadcrumb caminho={caminho}></Breadcrumb>
                <div className="card-deck p-0 row m-0 mb-5">
                    {vagas}
                </div>
            </div>
        )
    }
}

const mapearEstadoParaProps = (state, props) => {
    return {
        vagas: state.vaga.vagas,
        empresas: state.empresa.empresas,
        login: state.login.login,
        candidatos: state.candidato.candidatos,
        curriculos: state.curriculo.curriculos,
    }
}

const mapearDispatchParaProps = (dispatch) => {
    return {
        buscarVaga: () => {
            dispatch(buscarVaga());
        },
        buscarEmpresa: () => {
            dispatch(buscarEmpresa());
        },
        buscarCandidato: () => {
            dispatch(buscarCandidato());
        },
        buscarCurriculo: () => {
            dispatch(buscarCurriculo());
        }
    }
}

export default connect(mapearEstadoParaProps, mapearDispatchParaProps)(VagasDisponiveis);