import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Breadcrumb from '../commun/Breadcrumb';
import { addCandidato } from '../actions/candidato';
import Perfil from '../img/Group 25.png'
import { FiEye } from "react-icons/fi";
import $ from 'jquery';

class Candidato extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            email: "",
            senha: "",
            telefone: "",
            nascimento: "",
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
            nome: this.state.nome,
            email: this.state.email,
            telefone: this.state.telefone,
            data: this.state.nascimento,
            senha: this.state.senha,
        }

        this.props.addCandidato(candidato, this.state.img)
    }

    render() {

        $(".telefone").mask('(99) 9 9999-9999');

        var caminho = [
            { nome: "CADASTRAR CANDIDATO", link: "/cadastroCandidato" }
        ]
        return (

            <div>
                {/* <Breadcrumb caminho={caminho}></Breadcrumb> */}
                <div className="row bg-white p-0 m-5">
                    <div className="col-lg-6 col-12">

                        <h5 className="color font-weight-bold text-center"> Cadastro do Candidato </h5>
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
                                <label className="color" htmlFor="nome">Nome completo:</label>
                                <input type="text" className="form-control" id="nome" onChange={this.modificou} required></input>
                            </div>


                            <div className="form-row">
                                <div className="input-group col">
                                    <label className="color">Telefone:</label>
                                    <input type="tel" id="telefone" onChange={this.modificou} className="form-control telefone w-100" placeholder="(00) 0 0000-0000" required></input>
                                </div>

                                <div className="input-group col">
                                    <label className="color">Data:</label>
                                    <input type="date" id="nascimento" onChange={this.modificou} className="form-control w-100" required></input>
                                </div>
                            </div>

                            <br></br>
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
        addCandidato: (candidato, img) => {
            dispatch(addCandidato(candidato, img));
        }
    }
}

export default connect(null, mapDispatchToProps)(Candidato);