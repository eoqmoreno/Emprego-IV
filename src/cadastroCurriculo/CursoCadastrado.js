import React, { Component } from 'react'

export class CursoCadastrado extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="bg-cinza-claro p-2 mb-2">
                <h5 className="bold">{this.props.formacao}</h5>
                <span>{this.props.instituição}</span><br/>
                <span>{this.props.nomeCurso}</span><br/>
                <small className=""> Concluido em {this.props.anoConclusão}</small>
            </div>
        )
    }
}

export default CursoCadastrado
