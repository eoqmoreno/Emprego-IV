import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Breadcrumb from '../commun/Breadcrumb';
import Perfil from '../img/Group 25.png'
import { FiEye } from "react-icons/fi";
import { addEmpresa } from '../actions/empresa';
import $ from 'jquery';

class Empresa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeJuridico: "",
            nomeFantasia: "",
            cnpj: "",
            endereco: "",
            descricao: "",
            email: "",
            senha: "",
            telefone: "",
            tipo: "password",
            render: Perfil,
            img: "",
        }
    }


    modificou = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    mostrarSenha = () => {
        if (this.state.tipo == "password") {
            this.setState({
                tipo: "text",
            })
        } else {
            if (this.state.tipo == "text") {
                this.setState({
                    tipo: "password",
                })
            }
        }
    }

    modificouImg = (event) => {
        let img = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onloadend = () => {
            this.setState({
                img: img,
                render: reader.result,
            })
        }
    }

    enviar = (event) => {
        event.preventDefault()
        let candidato = {
            nomeJuridico: this.state.nomeJuridico,
            nomeFantasia: this.state.nomeFantasia,
            cnpj: this.state.cnpj,
            endereco: this.state.endereco,
            descricao: this.state.descricao,
            email: this.state.email,
            telefone: this.state.telefone,
            senha: this.state.senha,
        }

        this.props.addEmpresa(candidato, this.state.img)
    }

    render() {
        $(".cnpj").mask("99.999.999/9999-99");
        $(".telefone").mask('(99) 9 9999-9999');


        var caminho = [
            { nome: "CADASTRAR CANDIDATO", link: "/cadastroCandidato" }
        ]
        return (

            <div>
                {/* <Breadcrumb caminho={caminho}></Breadcrumb> */}
                <div className="m-5 p-0 row bg-white">
                    <div className="col-lg-6 col-12">

                        <h5 className="color font-weight-bold text-center"> Cadastro da Empresa </h5>


                        <form onSubmit={this.enviar}>
                            <div className="text-center pt-4">
                                <label htmlFor="photoFile">
                                    <img className="w-50 rounded-circle" src={this.state.render} alt=""></img><br></br>
                                    <label className="azulEscuro">Hey! Clica aqui para adicionar sua imagem</label>
                                </label>
                                <br></br>
                                <input type="file" className="file" id="photoFile" accept="image/jpeg, image/png" onChange={(e) => this.modificouImg(e)} required />
                            </div>

                            <div className="form-group">
                                <label className="color" htmlFor="nome">Nome jurídico da empresa:</label>
                                <input type="text" className="form-control" id="nomeJuridico" onChange={this.modificou} required></input>
                            </div>

                            <div className="form-group">
                                <label className="color" htmlFor="nome">Nome fantasia:</label>
                                <input type="text" className="form-control" id="nomeFantasia" onChange={this.modificou} required></input>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-6">
                                    <label className="color" htmlFor="nome">CNPJ:</label>
                                    <input type="text" className="form-control cnpj" id="cnpj" placeholder="00.000.000/0000-00" onChange={this.modificou} required></input>
                                </div>
                                <div className="form-group col-6">
                                    <label className="color">Telefone:</label>
                                    <input type="tel" id="telefone" onChange={this.modificou} placeholder="(00) 0 0000-0000" className="form-control telefone w-100" required></input>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="color" htmlFor="nome">Endereço completo:</label>
                                <input type="text" className="form-control" id="endereco" placeholder="Rua, Nº, Sala, Bairro" onChange={this.modificou} required></input>
                            </div>

                            <div className="form-group">
                                <label className="color" htmlFor="email">Descrição da empresa:</label>
                                <textarea id="descricao" onChange={this.modificou} className="form-control" required placeholder="Ramo de atuação, missão, tempo de mercado"></textarea>
                            </div>

                            <div className="form-group">
                                <label className="color" htmlFor="email">Email:</label>
                                <input type="email" id="email" onChange={this.modificou} className="form-control" required></input>
                            </div>

                            <div className="input-group">
                                <label className="color col-12 p-0 m-0">Senha:</label>
                                <input type={this.state.tipo} className="form-control" onChange={this.modificou} aria-describedby="ver" id="senha" required minLength="8" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-primary" type="button" id="ver" onClick={this.mostrarSenha}><FiEye></FiEye></button>
                                </div>
                                <small className="col-12 m-0 p-0 azulEscuro text-right">Deve ter de 8 a 20 caracteres</small>
                            </div>

                            <br></br>

                            <div className="col p-0 text-right">
                                <Link to="/" className="btn btn-outline-danger m-0">Cancelar</Link>
                                <button type="submit" className="btn btn-primary ml-2 m-0">Cadastrar</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div >

        )

    }
}

function mapDispatchToProps(dispatch) {
    return {
        addEmpresa: (empresa, img) => {
            dispatch(addEmpresa(empresa, img));
        }
    }
}

export default connect(null, mapDispatchToProps)(Empresa);