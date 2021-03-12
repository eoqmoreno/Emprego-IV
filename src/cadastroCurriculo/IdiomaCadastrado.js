import React, { Component } from 'react'

export class IdiomaCadastrado extends Component {
    render() {
        return (
            <div className="bg-cinza-claro p-2 mb-2">
                <button className="close" onClick={() => { this.props.removerIdioma(this.props.id) }}>
                    <span aria-hidden="true">&times;</span>
                </button>
                
                <h5 className="bold">{this.props.idioma}</h5>
                <span>{this.props.nivelIdionma}</span><br />
            </div>
        )
    }
}

export default IdiomaCadastrado
