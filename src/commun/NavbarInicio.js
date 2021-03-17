import React from 'react'
import logo from '../img/novaLogo.png';
import { FiSearch } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { connect } from 'react-redux';
import { buscarCategoria } from '../actions/categoria';
import { buscarProfissao } from '../actions/profissao';
import { AutoComplete } from 'antd';
import NavbarEmp from './NavbarEmp';
import NavbarCan from './NavbarCan';
import { deslogar } from '../actions/login';
import $ from 'jquery';


function navbarDefault() {
    return (
        <div className="collapse navbar-collapse col-12 col-lg-4 justify-content-end text-center" id="conteudoNavbarSuporta">
            <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#Login" data-dismiss="modal">
                Cadastrar
            </button>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#Login" data-dismiss="modal">
                <FiUser className="mb-1"></FiUser> Entrar
            </button>
        </div>
    )
}



class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link: "/",
            login: [],
        }
    }


    componentDidMount = () => {
        this.props.buscarCategoria();
        this.props.buscarProfissao();
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

        const onSelect = (value) => {
            var values = "vagasdisponiveis/" + value;
            this.setState({
                link: values,
            })
        }

        let render = "";
        if (this.props.login.length > 0) {
            if (this.props.login[1] == "empresa") {
                render = <NavbarEmp sair={this.props.deslogar} email={this.props.login[0]}></NavbarEmp>
            } else {
                render = <NavbarCan sair={this.props.deslogar} email={this.props.login[0]}></NavbarCan>
            }
        } else {
            render = navbarDefault()
        }

        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-cinza-escuro py-3">
                    <Link className="navbar-brand col-lg-3 col m-0 p-0" to="/">
                        <img src={logo} alt="Logo da Empregô" className="w-50"></img>
                    </Link>

                    <button className="navbar-toggler w-auto" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuporta" aria-controls="conteudoNavbarSuporta" aria-expanded="false" aria-label="Alterna navegação">
                        <FiMenu className="azulEscuro"></FiMenu>
                    </button>

                    <div className="row m-0 w-100 h-100">
                        <div className="col-12 col-lg-8 d-flex align-items-center bg-branco rounded py-0 mx-0 my-2" id="pesquisa">
                            <AutoComplete
                                className="col-11 m-0 p-0"
                                options={options}
                                onSelect={onSelect}
                                placeholder="O que você procura?"
                                filterOption={(inputValue, option) =>
                                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                }
                            />
                            <Link to={this.state.link} className="col-1 m-0 p-0 text-center bg-transparent font-weight-bold font-150"><FiSearch></FiSearch></Link>
                        </div>

                        {render}
                    </div>

                </nav>
            </div >
        )
    }
}

const mapearEstadoParaProps = (state, props) => {
    return {
        categorias: state.categoria.categorias,
        profissoes: state.profissao.profissoes,
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
        deslogar: () => {
            dispatch(deslogar());
        }
    }
}

export default connect(mapearEstadoParaProps, mapearDispatchParaProps)(Navbar);