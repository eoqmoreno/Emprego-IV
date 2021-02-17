import React, { Component } from 'react'

export class IdiomaCadastrado extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="bg-cinza-claro p-2 mb-2">
                <h5 className="bold">{this.props.idioma}</h5>
                <span>{this.props.nivelIdionma}</span><br />
            </div>
        )
    }
}

export default IdiomaCadastrado
