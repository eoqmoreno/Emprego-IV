import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { buscarCandidatura } from '../actions/candidatar';
import { buscarCandidato } from '../actions/candidato';
import { buscarCurriculo } from '../actions/curriculo';
import Breadcrumb from '../commun/Breadcrumb';
import Curriculo from '../listaDeCandidatos/Curriculo';
import TabelaLinha from './TabelaLinha';


class ListaCurriculos extends React.Component {


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

        if (this.props.candidatos !== null) {
            this.props.candidatos.map((busca) => { candidatos.push(busca) } )
        }

        if (this.props.curriculos != null && this.props.candidatos != null && this.props.login != null) {
            this.props.curriculos.map((curriculo, index) => {
                candidatos.map((candidato)=> {
                    if(candidato.email === curriculo.candidato){
                        return candidatoEnvio = candidato;
                    }
                })
                if (curriculo.candidato === this.props.login[0]) {
                    tabela.push(<TabelaLinha key={index} chave={index} vaga={vaga} curriculo={curriculo.id}></TabelaLinha>)
                    modais.push(<Curriculo curriculo={curriculo} candidato={candidatoEnvio} key={index} chave={"modal" + index}></Curriculo>)
                }
            })
        }

        var caminho = [
            { nome: "LISTA DE CURRICULOS", link: "/listacurriculos/" + vaga },
        ]

        var erro = <div className="text-center w-100 azulEscuro">
            <h3 className= "bold azulEscuro">
                Não encontramos nada por aqui!
            </h3>
            <p>
                Não há curriculos cadastrados no momento
                <br></br>
                preencha o seu currículo <Link to="/cadastrarcurriculo">clicando aqui!</Link>
            </p>
        </div>

        return (
            <div>
                {/* <Breadcrumb caminho={caminho}></Breadcrumb> */}
                <table className="table table-hover border-0 text-center">    
                    <tbody>
                        {tabela.join("") !== "" || tabela.length == 0 ? tabela : erro}
                        {/* {erro} */}
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