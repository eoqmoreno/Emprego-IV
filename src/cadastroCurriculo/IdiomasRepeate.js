import React, { Component } from 'react'
import $ from 'jquery';

export class IdiomasRepeate extends Component {

    state = {
        idioma: "",
        nivelIdionma: "",
        temIdioma: "",
    }

    modificou = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    }

    enviar = (event) => {
        event.preventDefault();
        let idioma = {
            idioma: this.state.idioma,
            nivelIdionma: this.state.nivelIdionma,
            temIdioma: this.state.temIdioma,
        }
        console.log(idioma)
        this.props.fun(idioma);
        this.props.add();
        $(document).ready(function () {
            $("#checkboxE").addClass("d-none");
        });
    }

    render() {
        return (
            <div className="idioma">
                <div className="form-row">
                    <div className="col">
                        <label className="color" htmlFor="idioma">Idioma</label>
                        <select className="form-control" id="idioma" onChange={this.modificou}>
                            <option selected disabled hidden> Clique para selecionar </option>
                            <option>Alemão</option>
                            <option>Chinês</option>
                            <option>Espanhol</option>
                            <option>Francês</option>
                            <option>Inglês</option>
                            <option>Italiano</option>
                            <option>Japonês</option>
                            <option>Português</option>
                        </select>
                    </div>

                    <div className="col">
                        <label className="color" htmlFor="nivelIdionma">Nível</label>
                        <select className="form-control" id="nivelIdionma"  onChange={this.modificou}>
                            <option selected disabled hidden> Clique para selecionar </option>
                            <option>Iniciante</option>
                            <option>Intermediário</option>
                            <option>Avançado</option>
                            <option>Fluente</option>

                        </select>
                    </div>

                </div>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="temIdioma" value="true" onChange={()=>{$(".idioma :input").attr("disabled", true)}}/>
                    <br></br>
                    <label className="custom-control-label color" htmlFor="temIdioma">NÃO POSSUO CURSOS </label>
                    <button type="button" className="btn btn-outline-primary float-right" onClick={this.enviar}> <strong>Salvar</strong></button>
                </div>
            </div>
        )
    }
}

export default IdiomasRepeate
