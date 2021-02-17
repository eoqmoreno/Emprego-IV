import { event } from 'jquery';
import React, { Component } from 'react'
import $ from 'jquery';

export class CursosRepeate extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        formacao: "",
        nomeCurso: "",
        instituição: "",
        anoConclusão: "",
        carga: "",
    }

    modificou = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    }

    enviar = (event) => {
        event.preventDefault();
        let curso = {
            formacao: this.state.formacao,
            nomeCurso: this.state.nomeCurso,
            instituição: this.state.instituição,
            anoConclusão: this.state.anoConclusão,
            carga: this.state.cargo,
        }
        this.props.fun(curso);
        this.props.add();
    }

    render() {
        return (
            <div id="cursoRepeate">
                <div className="form-group">
                    <label className="color" htmlFor="formacao">Nivel de formação</label>
                    <select id="formacao" className="form-control" onChange={this.modificou}>
                        <option selected disabled hidden> Clique para selecionar </option>
                        <option>Técnico</option>
                        <option>Tecnólogo</option>
                        <option>Graduação</option>
                        <option>Mestrado</option>
                        <option>Doutorado</option>
                        <option>Pós Doutorado</option>
                    </select>
                </div>
                <div className="form-row">
                    <div className="col">
                        <label className="color" htmlFor="nomeCurso">Nome do curso</label>
                        <input type="text" className="form-control" id="nomeCurso" onChange={this.modificou} />
                    </div>

                    <br></br>
                    <div className="col">
                        <label className="color" htmlFor="instituição">Nome da Instituição</label>
                        <input type="text" className="form-control" id="instituição" onChange={this.modificou} />
                    </div>
                </div>
                <br></br>
                <div className="form-row">
                    <div className="col">
                        <label className="color" htmlFor="anoConclusão">Ano de conclusão</label>
                        <input type="number" className="form-control ano" id="anoConclusão" onChange={this.modificou} />
                    </div>
                    <br></br>
                    <div className="col">
                        <label className="color" htmlFor="exampleFormControlTextarea1">Carga horária</label>
                        <input type="number" className="form-control" id="carga" onChange={this.modificou} />
                    </div>
                </div>

                <br></br>
                <div className="form-group">
                    <label className="color" htmlFor="exampleFormControlFile1"> Arquivo do certificado ou comprovante </label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>
                <hr></hr>
                <button type="button" className="btn btn-outline-primary float-right" id="add" onClick={this.enviar}> <strong>Salvar</strong></button>

            </div>
        )
    }
}

export default CursosRepeate
