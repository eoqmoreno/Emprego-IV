import React from 'react';
import { connect } from 'react-redux';
import { buscarCategoria } from '../actions/categoria';
import { buscarHabilidade } from '../actions/habilidade';
import { buscarProfissao } from '../actions/profissao';
import { addVaga, buscarVaga } from '../actions/vaga';
import Breadcrumb from '../commun/Breadcrumb';
import { Select } from 'antd';


class CadastroVaga extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        categoria: "",
        profissao: "",
        descricao: "",
        salario: "",
        horario: "",
        dias: "",
        tecnologia: [],
        interpessoais: [],
        perfil: "",
        qtdVagas: "",
        idEmpresa: "",
    }


    componentDidMount = () => {
        this.props.buscarCategoria();
        this.props.buscarProfissao();
        this.props.buscarHabilidade();
    };

    submeter = (event) => {
        event.preventDefault();
        let vaga = {
            categoria: this.state.categoria,
            profissao: this.state.profissao,
            descricao: this.state.descricao,
            salario: this.state.salario,
            horario: this.state.horario,
            dias: this.state.dias,
            habTecnica: this.state.tecnologia,
            habInterpessoais: this.state.interpessoais,
            perfil: this.state.perfil,
            qtdVagas: this.state.qtdVagas,
            idEmpresa: this.props.login[0],
        }
        console.log(vaga)
        this.props.addVaga(vaga);
    }

    modificou = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
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
    render() {

        const { Option } = Select;

        let categoria = []
        if (this.props.categorias != null) {

            categoria = this.props.categorias.map(
                (busca, index) => (
                    <option key={index} value={busca.nome}>{busca.nome}</option>
                )
            )
        }

        let profissao = []
        if (this.props.profissoes != null) {
            profissao = this.props.profissoes.map(
                (busca, index) => (
                    <option key={index} value={busca.nome}>{busca.nome}</option>
                )
            )
        }

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
            { nome: "PUBLICAR VAGA", link: "/cadastrarvaga" }
        ]

        return (
            <div>
                <Breadcrumb caminho={caminho}></Breadcrumb>
                <div className="container p-0">
                    <div className="row">
                        <div className="col-lg-6 col-12">

                            <br></br>
                            <h5 className="color font-weight-bold"> Informações da Vaga</h5>
                            <hr></hr>
                            <form onSubmit={this.submeter} required="true">
                                <div className="form-row">
                                    <div className="col">
                                        <label className="color" htmlFor="categoria">Área de atuação</label>
                                        <select id="categoria" onChange={this.modificou} className="form-control" required>
                                            <option selected disabled hidden > Clique para selecionar </option>
                                            {categoria}
                                        </select>
                                    </div>

                                    <div className="col">
                                        <label className="color" htmlFor="profissao">Cargo</label>
                                        <select id="profissao" onChange={this.modificou} className="form-control" required>
                                            <option selected disabled hidden> Clique para selecionar </option>
                                            {profissao}
                                        </select>
                                    </div>

                                </div>

                                <br></br>
                                <div className="form-group">
                                    <label className="color" htmlFor="descricao">Descrição da vaga</label>
                                    <textarea className="form-control" onChange={this.modificou} id="descricao" rows="3" required></textarea>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <label className="color" htmlFor="salario">Salário</label>
                                        <input type="number" id="salario" onChange={this.modificou} placeholder="R$" min="0" className="form-control" required/>
                                    </div>
                                    <div className="col">
                                        <label className="color" htmlFor="horario">Carga horária</label>
                                        <small className="text-muted"> (horas por dia)</small>
                                        <input type="number" id="horario" onChange={this.modificou} className="form-control" min="1" max="8" required/>
                                    </div>
                                </div>

                                <br></br>
                                <div className="form-row">
                                    <div className="col">
                                        <label className="color" htmlFor="dias">Dias da semana</label>
                                        <select id="dias" onChange={this.modificou} className="form-control w-50" required>
                                            <option selected disabled hidden> Clique para selecionar </option>
                                            <option> Segunda a sexta </option>
                                            <option> Segunda a sábado </option>
                                            <option> Segunda a domingo </option>
                                            <option> A combinar </option>
                                        </select>
                                    </div>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label className="color" htmlFor="qtdVagas">Quantas vagas você deseja ofertar?</label>
                                    <input type="number" className="form-control w-25" onChange={this.modificou} id="qtdVagas" aria-describedby="text" min="1" required/>
                                    <small id="text" className="form-text text-muted"></small>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <h5 className="azulEscuro bold"> Habilidades e competências</h5>
                                    <hr></hr>
                                    <label className="color2" htmlFor="tecnologia">Ferramentas e tecnologias</label>
                                    <Select
                                        mode="multiple"
                                        allowClear
                                        style={{ width: '100%' }}
                                        placeholder="Clique para selecionar"
                                        onChange={this.funTecnica}
                                    >
                                        {habiTecnica}
                                    </Select>

                                    <br></br>
                                    <label className="color2" htmlFor="interpessoais">Competências interpessoais</label>
                                    <Select
                                        mode="multiple"
                                        allowClear
                                        style={{ width: '100%' }}
                                        placeholder="Clique para selecionar"
                                        onChange={this.funInterpessoais}
                                    >
                                        {habiInterpessoais}
                                    </Select>
                                </div>
                                <div className="form-group"></div>
                                <label className="color" htmlFor="perfil">O que você espera dos candidatos a esta vaga?</label>
                                <small className="text-muted"> (Opcional) </small>
                                <textarea className="form-control" onChange={this.modificou} id="perfil" rows="3" required></textarea>



                                <br></br>
                                <input type="submit" className="btn btn-primary float-right" value="Publicar vaga"></input>
                            </form>
                        </div>



                    </div>
                </div>
            </div>


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
            dispatch(buscarCategoria());
        },

        buscarProfissao: () => {
            dispatch(buscarProfissao());
        },

        buscarHabilidade: () => {
            dispatch(buscarHabilidade());
        },

        addVaga: (vaga) => {
            dispatch(addVaga(vaga));
        },
    }
}

export default connect(mapearEstadoParaProps, mapearDispatchParaProps)(CadastroVaga);