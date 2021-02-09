import React from 'react'
import logo from '../img/novaLogo.png';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { connect } from 'react-redux';
import { buscarCategoria } from '../actions/categoria';
import { buscarProfissao } from '../actions/profissao';
import { AutoComplete } from 'antd';
import $ from 'jquery';
import { buscarCandidatura } from '../actions/candidatar';
import entrevista from '../img/entrevista.png';
import { buscarCurriculo } from '../actions/curriculo';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link: "/",
        }
    }


    componentDidMount = () => {
        this.props.buscarCategoria();
        this.props.buscarProfissao();
        this.props.buscarCandidatura();
        this.props.buscarCurriculo();
    }

    render() {
        var options = [];

        if (this.props.categorias != null && this.props.profissoes) {
            var vetor1 = [];
            var vetor2 = this.props.categorias;
            var vetor3 = this.props.profissoes;
            var result = vetor1.concat(vetor2, vetor3);
            result.map((busca) => { var a = busca.nome; options.push({ 'value': a }) })
        }

        if (this.props.candidaturas != null && this.props.login != null && this.props.curriculos != null) {
            this.props.curriculos.map((curriculo) => {
                if (curriculo.idCandidato == this.props.login[0]) {
                    this.props.candidaturas.map((candidatura) => {
                        if (candidatura.curriculo == curriculo._id) {
                            if (candidatura.estado == true) {
                                $(document).ready(function () {
                                    $("#chamadoCandidato").modal();
                                });
                            }
                        }
                    })
                }
            })
        }

        const onSelect = (value) => {
            var a = "vagasdisponiveis/" + value;
            this.setState({
                link: a,
            })
        }
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-cinza-escuro py-4">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt=""></img>
                    </Link>
                    <button className="navbar-toggler w-auto" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuporta" aria-controls="conteudoNavbarSuporta" aria-expanded="false" aria-label="Alterna navegação">
                        <FiMenu className="azulEscuro"></FiMenu>
                    </button>
                    <div className="row m-0 w-100">

                        <div className="collapse navbar-collapse col-12 col-lg-9 justify-content-center align-self-center" id="conteudoNavbarSuporta">
                            <ul className="navbar-nav">
                                <li className="nav-item text-center">
                                    <Link className="bg-transparent btn m-2" to="/">Pagina Inicial</Link>
                                </li>
                                <li className="nav-item text-center">
                                    <div className="btn-group dropdown">
                                        <button className="btn btn-primary dropdown-toggle" id="meuPefil" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Meu perfil</button>

                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="/cadastrarcurriculo">Criar currículo</Link>
                                            <Link className="dropdown-item" to="/">Vagas candidatas</Link>
                                            <Link className="dropdown-item" to="/">Lista de currículos</Link>
                                            <div className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="/">Editar perfil</Link>
                                            <Link className="dropdown-item" to="/">Sair</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="form-group col-12 col-lg-3 text-left row m-0 p-0 bg-branco h-content" id="pesquisa">
                            <AutoComplete
                                className="text-left d-block col-10 boder-0"
                                options={options}
                                onSelect={onSelect}
                                placeholder="O que você procura?"
                                filterOption={(inputValue, option) =>
                                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                }
                            />
                            <Link to={this.state.link} className="col-2 p-1"><FiSearch></FiSearch></Link>
                        </div>
                    </div>
                </nav>

                <div class="modal fade" tabindex="-1" id="chamadoCandidato" role="dialog" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header border-0">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="text-center">
                                    <img className="" src={entrevista} alt=""></img>
                                </div>
                                <br />
                                <div class="bg-cinza-claro">
                                    <h5 className="modal-title azulEscuro text-center bold">HEY! VAMOS PARA UMA ENTREVISTA?</h5>
                                </div>
                            </div>
                            <div className="text-center modal-footer pt-0 border-0 justify-content-center">
                                <span>Agora é só aguardar a empresa entrar em contato com você</span>
                            </div>
                            <div className="justify-content-center d-flex mb-3">
                                <input type="submit" className="btn btn-primary" value="Ok" data-dismiss="modal"></input>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}

const mapearEstadoParaProps = (state, props) => {
    return {
        categorias: state.categoria.categorias,
        profissoes: state.profissao.profissoes,
        login: state.login.login,
        candidaturas: state.candidatar.candidaturas,
        curriculos: state.curriculo.curriculos,
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
        buscarCandidatura: () => {
            dispatch(buscarCandidatura());
        },
        buscarCurriculo: () => {
            dispatch(buscarCurriculo());
        }
    }
}

export default connect(mapearEstadoParaProps, mapearDispatchParaProps)(Navbar);