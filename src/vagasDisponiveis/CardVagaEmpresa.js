import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { storage } from '../firebase/firebaseConfig';
import Image24 from '../img/empresa/hf.png';

export class CardVagaEmpresa extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            render:"",
        }
    }

    componentDidMount(){
        var foto = storage.ref().child('empresa/'+ this.props.foto).getDownloadURL();
        foto.then((result)=>{
            this.setState({
                render: result,
            })
        })
    }

    render() {
        let link = "/listadecandidatos/" + this.props.idVaga;
        return (
            <div className="col-10">
                <div className="line-cinza-escuro row">
                    
                    <div className="col-12 col-lg-4 justify-content-center text-center align-self-center pt-lg-0 pt-5">
                        <img src={this.state.render} className="rounded-circle w-50" alt="Responsive image" />
                    </div>

                    <div className="p-5 col-12 col-lg-8 text-right justify-content-center align-self-center separatorVerticalLeft">
                        <h4 className="text-muted bold">{this.props.profissao}</h4>
                        <p className="text-muted">{this.props.descricao}</p>
                        <h5 className="bold text-muted">R$ {this.props.salario}</h5>
                        <p className="text-muted">{this.props.dias} | {this.props.horario} horas por dia</p>
                        <p className="text-muted">{this.props.habTecnica.join(" | ")}</p>
                        <p className="text-muted">{this.props.habInterpessoais.join(" | ")}</p>
                        <button className="btn bg-transparent azulEscuro btn-outline-primary">Arquivar</button>
                        <Link className="btn bg-azulEscuro branco ml-2" to={link}>Lista de Candidatos</Link>
                    </div>

                </div>

            </div>
        )
    }
}

export default CardVagaEmpresa
