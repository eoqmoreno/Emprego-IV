import React from 'react';
import { connect } from 'react-redux';
import { buscarCategoria } from '../actions/categoria';
import { buscarHabilidade } from '../actions/habilidade';
import { buscarProfissao } from '../actions/profissao';
import Breadcrumb from '../commun/Breadcrumb';
import CursosRepeate from './CursosRepeate';

import { Select } from 'antd';
import ExperienciasRepeate from './ExperienciasRepeate';
import CursoCadastrado from './CursoCadastrado';
import ExperienciaCadastrada from './ExperienciaCadastrada';
import IdiomasRepeate from './IdiomasRepeate';
import IdiomaCadastrado from './IdiomaCadastrado';
import { addCurriculo } from '../actions/curriculo';

class CadastroCurriculo extends React.Component {
    constructor(props) {
        super(props);
    }

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

    receberDadosExperiencias = (expereiencia) => {
        let a = this.state.experiencias;
        a.push(expereiencia);
        this.setState({
            experiencias: a,
        })
    }

    receberDadosIdiomas = (idioma) => {
        let a = this.state.idiomas;
        a.push(idioma);
        this.setState({
            idioma: a,
        })
    }

    somaCursos = () => {
        var qtd = <CursosRepeate fun={this.receberDados} add={this.somaCursos}></CursosRepeate>
        this.setState({
            qtdCurso: qtd,
        })
    }

    somaExperiencia = () => {
        var qtd = <ExperienciasRepeate fun={this.receberDadosExperiencias} add={this.somaExperiencia}></ExperienciasRepeate>;
        this.setState({
            qtdExperiencias: qtd,
        })
    }

    somaIdiomas = () => {
        var qtd = <IdiomasRepeate fun={this.receberDadosIdiomas} add={this.somaIdiomas}></IdiomasRepeate>;
        this.setState({
            qtdIdiomas: qtd,
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
            Candidato: this.props.login[0],
        }
        console.log(curriculo)
        this.props.addCurriculo(curriculo);
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

            <div>
                <Breadcrumb caminho={caminho}></Breadcrumb>
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
                                        <input type="text" className="form-control" id="nomeInstituicao" onChange={this.modificou} required/>
                                    </div>
                                    <div className="col">
                                        <label className="color" htmlFor="anoConclusão">Ano de conclusão</label>
                                        <input type="number" className="form-control ano" id="anoConclusao" onChange={this.modificou} required/>
                                        <br></br>

                                    </div>
                                </div>
                                <h5 className="color font-weight-bold"> Cursos e Treinamentos </h5>
                                <hr></hr>

                                {this.state.cursos.map((busca, index) => (
                                    <CursoCadastrado key={index} formacao={busca.formacao} instituição={busca.instituição} nomeCurso={busca.nomeCurso} anoConclusão={busca.anoConclusão}></CursoCadastrado>
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
                                        rules={[{ required: true}]}
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
                                        rules={[{ required: true}]}
                                    >
                                        {habiInterpessoais}
                                    </Select>
                                </div>

                                <br></br>
                                <h5 className="color font-weight-bold"> Experiência Profissional</h5>
                                <hr></hr>

                                {this.state.experiencias.map((busca, index) => (
                                    <ExperienciaCadastrada key={index} empresaTrabalhou={busca.empresaTrabalhou} cargoOcupado={busca.cargoOcupado} periodo={busca.periodo} descriçãoAtividades={busca.descriçãoAtividades}></ExperienciaCadastrada>
                                ))}
                                {this.state.qtdExperiencias}

                                <br></br>
                                <br></br>
                                <h5 className="color font-weight-bold"> Idiomas </h5>
                                <hr></hr>
                                {this.state.idiomas.map((busca, index) => (
                                    <IdiomaCadastrado key={index} idioma={busca.idioma} nivelIdionma={busca.nivelIdionma}></IdiomaCadastrado>
                                ))}
                                {this.state.qtdIdiomas}
                                <br></br><br></br>
                                <input type="submit" className="btn btn-primary float-right mr-0" value="Salvar currículo"></input>
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

        addCurriculo: (curriculo) =>{
            dispatch(addCurriculo(curriculo))
        }
    }
}

export default connect(mapearEstadoParaProps, mapearDispatchParaProps)(CadastroCurriculo);