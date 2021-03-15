import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addCandidatura } from '../actions/candidatar';

class TabelaLinha extends Component {
    submeter = (event) => {
        event.preventDefault();
        let candidatura = {
            vaga: this.props.vaga,
            curriculo: this.props.curriculo,
            id: Date.now(),
            estado: false,
        }
        this.props.addCandidatura(candidatura)
    }
    render() {
        return (
            <tr key={this.props.chave}>
                <td className="align-middle">Currículo {this.props.chave + 1}</td>

                <td className="align-middle">
                    <button className="btn btn-outline-primary" data-toggle="modal" data-target={"#modal" + this.props.chave} data-dismiss="modal">Ver currículo</button>
                </td>

                <td className="align-middle">
                    <button className="btn btn-primary" onClick={this.submeter}>Enviar currículo</button>
                </td>
            </tr>
        )
    }
}

const mapearDispatchParaProps = (dispatch) => {
    return {
        addCandidatura: (candidatura) => {
            dispatch(addCandidatura(candidatura));
        },
    }
}

export default connect(null, mapearDispatchParaProps)(TabelaLinha)
