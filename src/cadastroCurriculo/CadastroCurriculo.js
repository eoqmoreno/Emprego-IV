import React from 'react';
import { connect } from 'react-redux';
import { buscarCategoria } from '../actions/categoria';
import { buscarHabilidade } from '../actions/habilidade';
import { buscarProfissao } from '../actions/profissao';
import Breadcrumb from '../commun/Breadcrumb';
import CursosRepeate from './CursosRepeate';

import { Col, Select } from 'antd';
import ExperienciasRepeate from './ExperienciasRepeate';
import CursoCadastrado from './CursoCadastrado';
import ExperienciaCadastrada from './ExperienciaCadastrada';
import IdiomasRepeate from './IdiomasRepeate';
import IdiomaCadastrado from './IdiomaCadastrado';
import { addCurriculo } from '../actions/curriculo';
import { Link } from 'react-router-dom';

class CadastroCurriculo extends React.Component {

    state = {
        escolariadade: "",
        nomeInstituicao: "",
        anoConclusao: "",
        cursos: [],
        qtdCurso: "",
        tecnologia: "",
        interpessoais: "",
        experiencias: [],
        qtdExperiencias: "",
        idiomas: [],
        qtdIdiomas: "",
    }

    componentDidMount = () => {
        this.props.buscarCategoria();
        this.props.buscarProfissao();
        this.props.buscarHabilidade();
        this.somaCursos();
        this.somaExperiencia();
        this.somaIdiomas();
    };

    receberDados = (curso) => {
        let a = this.state.cursos;
        a.push(curso);
        this.setState({
            cursos: a,
        })
    }
    somaCursos = () => {
        var qtd = <CursosRepeate fun={this.receberDados} add={this.somaCursos}></CursosRepeate>
        this.setState({
            qtdCurso: qtd,
        })
    }
    removerCurso = (id) => {
        let cursos = this.state.cursos
        cursos.splice(id, 1)
        this.setState({
            cursos: cursos
        })
    }

    receberDadosExperiencias = (expereiencia) => {
        let a = this.state.experiencias;
        a.push(expereiencia);
        this.setState({
            experiencias: a,
        })
    }
    somaExperiencia = () => {
        var qtd = <ExperienciasRepeate fun={this.receberDadosExperiencias} add={this.somaExperiencia}></ExperienciasRepeate>;
        this.setState({
            qtdExperiencias: qtd,
        })
    }
    removerExperiencia = (id) => {
        let experiencias = this.state.experiencias
        experiencias.splice(id, 1)
        this.setState({
            experiencias: experiencias
        })
    }

    receberDadosIdiomas = (idioma) => {
        let a = this.state.idiomas;
        a.push(idioma);
        this.setState({
            idioma: a,
        })
    }
    somaIdiomas = () => {
        var qtd = <IdiomasRepeate fun={this.receberDadosIdiomas} add={this.somaIdiomas}></IdiomasRepeate>;
        this.setState({
            qtdIdiomas: qtd,
        })
    }
    removerIdioma = (id) => {
        let idiomas = this.state.idiomas
        idiomas.splice(id, 1)
        this.setState({
            idiomas: idiomas
        })
    }

    funTecnica = (value) => {
        this.setState({
            tecnologia: value,
        })
    }

    funInterpessoais = (value) => {
        this.setState({
            interpessoais: value,
        })
    }

    submeter = (event) => {
        event.preventDefault();
        let curriculo = {
            escolariadade: this.state.escolariadade,
            nomeInstituição: this.state.nomeInstituicao,
            anoConclusão: this.state.anoConclusao,
            cursos: this.state.cursos,
            tecnologia: this.state.tecnologia,
            interpessoais: this.state.interpessoais,
            experiencias: this.state.experiencias,
            idiomas: this.state.idiomas,
            candidato: this.props.login[0],
            id: Date.now(),
        }
        console.log(curriculo)
        // this.props.addCurriculo(curriculo);
    }

    modificou = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    }

    render() {
        const { Option } = Select;

        let habiTecnica = [];
        let habiInterpessoais = [];

        if (this.props.habilidades != null) {
            this.props.habilidades.map(function (busca, index) {
                if (busca.tipo == "habiTecnica") {
                    habiTecnica.push(<Option key={index} value={busca.nome}>{busca.nome}</Option>);
                }
            }
            )
            this.props.habilidades.map(function (busca, index) {
                if (busca.tipo == "habiInterpessoais") {
                    habiInterpessoais.push(<Option key={index} value={busca.nome}>{busca.nome}</Option>);
                }
            }
            )
        }

        var caminho = [
            { nome: "CADASTRAR CURRÍCULO", link: "/cadastrarcurriculo" }
        ]


        return (

            <div className="m-5">
                {/* <Breadcrumb caminho={caminho}></Breadcrumb> */}
                <div className="container bg-white p-0">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <form onSubmit={this.submeter}>
                                <h5 className="azulEscuro bold"> Escolaridade </h5>
                                <hr></hr>
                                <div className="form-row">
                                    <div className="col">
                                        <label className="color" htmlFor="escolaridade">Grau de escolaridade</label>
                                        <select className="form-control" id="escolariadade" onChange={this.modificou} required>
                                            <option selected disabled hidden> Clique para selecionar </option>
                                            <option>Ensino Fundametal Incompleto</option>
                                            <option>Ensino Fundametal Completo</option>
                                            <option>Ensino Médio Incompleto</option>
                                            <option>Ensino Médio Completo</option>
                                            <option>Ensino Superior Incompleto</option>
                                            <option>Ensino Superior Completo</option>
                                        </select>
                                    </div>
                                </div>

                                <br></br>
                                <div className="form-row">
                                    <div className="col">
                                        <label className="color" htmlFor="nomeInstituição">Nome da instituição</label>
                                        <input type="text" className="form-control" id="nomeInstituicao" onChange={this.modificou} required />
                                    </div>
                                    <div className="col">
                                        <label className="color" htmlFor="anoConclusão">Ano de conclusão</label>
                                        <input type="number" size="4" className="form-control ano" id="anoConclusao" onChange={this.modificou} required />
                                        <br></br>

                                    </div>
                                </div>
                                <h5 className="color font-weight-bold"> Cursos e Treinamentos </h5>
                                <hr></hr>

                                {this.state.cursos.map((busca, index) => (
                                    <CursoCadastrado key={index} id={index} removerCurso={this.removerCurso} formacao={busca.formacao} instituição={busca.instituição} nomeCurso={busca.nomeCurso} anoConclusão={busca.anoConclusão}></CursoCadastrado>
                                ))}
                                {this.state.qtdCurso}

                                <br></br>
                                <br></br>
                                <div className="form-group">
                                    <h5 className="color"> Habilidades e competências</h5>
                                    <hr></hr>
                                    <label className="color2" htmlFor="tecnologia">Conhecimento técnico</label>
                                    <Select
                                        mode="multiple"
                                        allowClear
                                        style={{ width: '100%' }}
                                        placeholder="Clique para selecionar"
                                        onChange={this.funTecnica}
                                        rules={[{ required: true }]}
                                        notFoundContent="Nada por aqui!"
                                    >
                                        {habiTecnica}
                                    </Select>

                                    <br></br>
                                    <br></br>
                                    <label className="color2" htmlFor="interpessoais">Competências interpessoais</label>
                                    <Select
                                        mode="multiple"
                                        allowClear
                                        style={{ width: '100%' }}
                                        placeholder="Clique para selecionar"
                                        onChange={this.funInterpessoais}
                                        rules={[{ required: true }]}
                                        notFoundContent="Nada por aqui!"
                                    >
                                        {habiInterpessoais}
                                    </Select>
                                </div>

                                <br></br>
                                <h5 className="color font-weight-bold"> Experiência Profissional</h5>
                                <hr></hr>

                                {this.state.experiencias.map((busca, index) => (
                                    <ExperienciaCadastrada key={index} id={index} removerExperiencia={this.removerExperiencia} empresaTrabalhou={busca.empresaTrabalhou} cargoOcupado={busca.cargoOcupado} periodo={busca.periodo} descriçãoAtividades={busca.descriçãoAtividades}></ExperienciaCadastrada>
                                ))}
                                {this.state.qtdExperiencias}

                                <br></br>
                                <br></br>
                                <h5 className="color font-weight-bold"> Idiomas </h5>
                                <hr></hr>
                                {this.state.idiomas.map((busca, index) => (
                                    <IdiomaCadastrado key={index} id={index} idioma={busca.idioma} nivelIdionma={busca.nivelIdionma} removerIdioma={this.removerIdioma}></IdiomaCadastrado>
                                ))}
                                {this.state.qtdIdiomas}
                                <br></br>
                                <hr></hr>
                                <div className="col p-0 mt-1 text-right">
                                    <Link to="/" className="btn btn-outline-danger m-0">Cancelar</Link>
                                    <button type="submit" className="btn btn-primary ml-2 m-0">Salvar currículo</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <br></br><br></br>
            </div >

        )

    }
}

const mapearEstadoParaProps = (state, props) => {
    return {
        categorias: state.categoria.categorias,
        profissoes: state.profissao.profissoes,
        habilidades: state.habilidade.habilidades,
        login: state.login.login,
    }
}

const mapearDispatchParaProps = (dispatch) => {
    return {
        buscarCategoria: () => {
            dispatch(buscarCategoria())
        },

        buscarProfissao: () => {
            dispatch(buscarProfissao())
        },

        buscarHabilidade: () => {
            dispatch(buscarHabilidade())
        },

        addCurriculo: (curriculo) => {
            dispatch(addCurriculo(curriculo))
        }
    }
}

export default connect(mapearEstadoParaProps, mapearDispatchParaProps)(CadastroCurriculo);