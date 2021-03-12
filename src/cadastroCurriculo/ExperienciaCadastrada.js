import React, { Component } from 'react'

export class ExperienciaCadastrada extends Component {
    render() {
        return (
            <div className="bg-cinza-claro p-2 mb-2">
                <button className="close" onClick={() => { this.props.removerExperiencia(this.props.id) }}>
                    <span aria-hidden="true">&times;</span>
                </button>

                <h5 className="bold">{this.props.empresaTrabalhou}</h5>
                <span>{this.props.cargoOcupado}</span><br />
                <small>{this.props.periodo}</small><br></br>
                <span>{this.props.descriçãoAtividades}</span>
            </div>
        )
    }
}

export default ExperienciaCadastrada
