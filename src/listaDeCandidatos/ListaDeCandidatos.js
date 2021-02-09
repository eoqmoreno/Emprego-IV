import React from 'react';
import { connect } from 'react-redux';
import { buscarCandidatura } from '../actions/candidatar';
import { buscarCandidato } from '../actions/candidato';
import { buscarCurriculo } from '../actions/curriculo';
import Breadcrumb from '../commun/Breadcrumb';
import Curriculo from './Curriculo';
import TabelaLinha from './TabelaLinha';


class ListaDeCandidatos extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount = () => {
        this.props.buscarCandidato();
        this.props.buscarCurriculo();
        this.props.buscarCandidatura()
    }

    render() {

        var candidatos = [];
        var modais = [];

        var vaga = this.props.match.params.vaga;


        if (this.props.curriculos != null && this.props.candidatos != null && this.props.candidaturas != null) {
            this.props.candidaturas.map((candidatura) => {
                if (candidatura.vaga == vaga) {
                    this.props.curriculos.map(
                        (curriculo, index) => {
                            if (curriculo._id == candidatura.curriculo) {
                                this.props.candidatos.map((candidato) => {
                                    if (candidato._id == curriculo.idCandidato) {
                                        candidatos.push(<TabelaLinha nome={candidato.nome} foto={candidato.foto} id={candidato._id} habilidades={curriculo.tecnologia.join(" | ")} key={index} chave={"modal" + index} candidatura={candidatura._id} vaga={vaga} curriculo={curriculo._id}></TabelaLinha>)
                                        modais.push(<Curriculo candidato={candidato} curriculo={curriculo} key={index} chave={"modal" + index}></Curriculo>)
                                    }
                                })
                            }
                        }
                    )
                }
            })
        }

        var caminho = [
            { nome: "LISTA DE VAGAS", link: "/vagascadastradas" },
            { nome: "LISTA DE CANDIDATOS", link: "/listadecandidatos/"+vaga },
        ]


        return (
            <div>
                <Breadcrumb caminho={caminho}></Breadcrumb>

                    <table className="table table-hover border-0">
                        <thead>
                            <th> Candidato </th>
                            <th> Habilidades compatíveis </th>
                            <th> Currículo </th>
                            <th></th>
                        </thead>

                        <tbody>
                            {candidatos}
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
        vagas: state.vaga.vagas,
    }
}

export default connect(mapearEstadoParaProps, mapearDispatchParaProps)(ListaDeCandidatos);