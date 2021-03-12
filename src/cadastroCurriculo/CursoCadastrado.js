import React, { Component } from 'react'

export class CursoCadastrado extends Component {
    render() {
        return (
            <div className="bg-cinza-claro p-2 mb-2">
                <button className="close" onClick={() => { this.props.removerCurso(this.props.id) }}>
                    <span aria-hidden="true">&times;</span>
                </button>

                <h5 className="bold">{this.props.formacao}</h5>
                <span>{this.props.instituição}</span><br/>
                <span>{this.props.nomeCurso}</span><br/>
                <small className=""> Concluido em {this.props.anoConclusão}</small>
            </div>
        )
    }
}

export default CursoCadastrado
