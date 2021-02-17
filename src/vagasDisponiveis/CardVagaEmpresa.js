import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Image24 from '../img/empresa/hf.png';

export class CardVagaEmpresa extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let link = "/listadecandidatos/"+this.props.idVaga;
        return (
            <div className="row m-0 justify-content-center">
                <div className="p-5 col-11">
                    <div className="line-cinza-escuro row">
                        <div className="col-12 col-lg-4 justify-content-center text-center align-self-center ">
                            <img src={Image24} className="rounded-circle line-azulEscuro mb-2" alt="Responsive image" />
                        </div>

                        <div className="p-5 col-12 col-lg-8 text-right justify-content-center align-self-center separatorVerticalLeft">
                            <h5 className="azulEscuro bold">{this.props.profissao}</h5>
                            <p className="azulEscuro">{this.props.descricao}</p>
                            <h5 className="bold azulEscuro">R$ {this.props.salario}</h5>
                            <p className="azulEscuro">{this.props.dias} | {this.props.horario} horas por dia</p>
                            <p className="">{this.props.habTecnica.join(" | ")}</p>
                            <p className="">{this.props.habInterpessoais.join(" | ")}</p>
                            <button className="btn bg-transparent azulEscuro btn-outline-primary mr-3">Arquivar</button>
                            <Link className="btn bg-azulEscuro branco" to={link}>Lista de Candidatos</Link>
                        </div>
                        <div className="col-1 d-none d-lg-block"></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default CardVagaEmpresa
