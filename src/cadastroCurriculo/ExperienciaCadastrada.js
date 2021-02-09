import React, { Component } from 'react'

export class ExperienciaCadastrada extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="bg-cinza-claro p-2 mb-2">
                <h5 className="bold">{this.props.empresaTrabalhou}</h5>
                <span>{this.props.cargoOcupado}</span><br />
                <small>{this.props.periodo}</small><br></br>
                <span>{this.props.descriçãoAtividades}</span>
            </div>
        )
    }
}

export default ExperienciaCadastrada
