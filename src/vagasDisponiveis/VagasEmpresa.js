import React from 'react';
import { connect } from 'react-redux';
import { buscarEmpresa } from '../actions/empresa';
import { buscarVaga } from '../actions/vaga';
import Breadcrumb from '../commun/Breadcrumb';
import CardVaga from '../vagasDisponiveis/CardVaga';
import CardVagaEmpresa from './CardVagaEmpresa';

class VagasEmpresa extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.buscarVaga();
        this.props.buscarEmpresa();
    }

    render() {
        let vagas = [];
        
        if(this.props.login != "" && this.props.vagas != null){
            this.props.vagas.map((busca)=> {if(this.props.login[0] == busca.empresa){
                vagas.push(<CardVagaEmpresa foto={this.props.login[0]} id={busca.empresa} profissao={busca.profissao} descricao={busca.descricao} salario={busca.salario} dias={busca.dias} horario={busca.horario} habTecnica={busca.habTecnica} habInterpessoais={busca.habInterpessoais} idVaga={busca.id}></CardVagaEmpresa>)
            }})
        }

        var caminho = [
            { nome: "LISTA DE VAGAS ", link: "/vagascadastradas/" }
        ]
        return (
            <div>
                <Breadcrumb caminho={caminho}></Breadcrumb>
                <div className="card-deck bg-light p-0 row m-0 justify-content-center">
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
    }
}

const mapearDispatchParaProps = (dispatch) => {
    return {
        buscarVaga: () => {
            dispatch(buscarVaga());
        },
        buscarEmpresa: () =>{
            dispatch(buscarEmpresa());
        }
    }
}

export default connect(mapearEstadoParaProps, mapearDispatchParaProps)(VagasEmpresa);