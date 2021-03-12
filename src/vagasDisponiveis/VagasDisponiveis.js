import React from 'react';
import { connect } from 'react-redux';
import { buscarCandidato } from '../actions/candidato';
import { buscarEmpresa } from '../actions/empresa';
import { buscarVaga } from '../actions/vaga';
import Breadcrumb from '../commun/Breadcrumb';
import CardVaga from './CardVaga';

class VagasDisponiveis extends React.Component {

    state = {
        curriculos: []
    }

    componentDidMount = () => {
        this.props.buscarVaga();
        this.props.buscarEmpresa();
        this.props.buscarCandidato();
        // this.props.buscarCurriculo();
    }

    render() {

        let vagas = [];
        let empresas = [];
        let empresaEnvio = "";

        var categoria = this.props.match.params.categoria;

        if (this.props.empresas != null) {
            this.props.empresas.map((empresa) => { empresas.push(empresa) })
        }

        if (categoria != null) {
            if (this.props.vagas != null) {
                vagas = this.props.vagas.map(
                    function (busca, index) {
                        empresas.map((empresa) => {
                            if (empresa.email == busca.empresa) {
                                empresaEnvio = empresa;
                            }
                        })
                        if (busca.categoria == categoria) {
                            return <CardVaga
                                key={index}
                                chave={index}
                                profissao={busca.profissao}
                                habTecnica={busca.habTecnica}
                                habInterpessoais={busca.habInterpessoais}
                                descricao={busca.categoria}
                                salario={busca.salario}
                                dias={busca.dias}
                                horario={busca.horario}
                                empresa={empresaEnvio}
                                qtdVagas={busca.qtdVagas}
                                id={busca.id}></CardVaga>
                        }
                        if (busca.profissao == categoria) {
                            return <CardVaga
                                chave={index}
                                key={index}
                                profissao={busca.profissao}
                                habTecnica={busca.habTecnica}
                                habInterpessoais={busca.habInterpessoais}
                                descricao={busca.categoria}
                                salario={busca.salario}
                                dias={busca.dias}
                                horario={busca.horario}
                                empresa={empresaEnvio}
                                qtdVagas={busca.qtdVagas}
                                id={busca.id}></CardVaga>
                        }
                    }
                )
            }
        }



        var caminho = [
            { nome: "PESQUISA", link: "/vagasdisponiveis" }
        ]

        var erro = <div className="text-center w-100 azulEscuro">
            <h3 className= "bold azulEscuro">
                Não encontramos nada por aqui!
            </h3>
            <p>
                Não há vagas disponíveis no momento para <strong>{categoria.toLowerCase()}</strong>
                <br></br>
                continue pesquisando, você vai achar algo!
            </p>
        </div>

        return (
            <div>
                {/* <Breadcrumb caminho={caminho}></Breadcrumb> */}
                <div className="card-deck m-5">
                    {vagas.join("") !== "" ? vagas : erro}
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
        // curriculos: state.curriculo.curriculos,
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
        // buscarCurriculo: () => {
        //     dispatch(buscarCurriculo());
        // }
    }
}

export default connect(mapearEstadoParaProps, mapearDispatchParaProps)(VagasDisponiveis);