import React, { Component } from 'react'
import $, { valHooks } from 'jquery';
import { DatePicker, Space } from 'antd';

export class ExperienciasRepeate extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        empresaTrabalhou: "",
        cargoOcupado: "",
        periodo: "",
        descriçãoAtividades: "",
        experiencia: "",
    }

    modificou = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    }
    
    enviar = (event) => {
        event.preventDefault();
        let experiencia = {
            empresaTrabalhou: this.state.empresaTrabalhou,
            cargoOcupado: this.state.cargoOcupado,
            periodo: this.state.periodo,
            descriçãoAtividades: this.state.descriçãoAtividades,
            experiencia: this.state.experiencia,
        }
        this.props.fun(experiencia);
        this.props.add();
        $(document).ready(function () {
            $("#checkboxE").addClass("d-none");
        });
    }
    
    onChange = (value, dateString) => {
        let a = []
        a =value[0].format('YYYY')+" / "+ value[1].format('YYYY');
        this.setState({
            periodo: a,
        })
       }
    render() {
        const { RangePicker } = DatePicker;
        const dateFormat = 'YYYY';
        return (
            <div>
                <div className="form-row">
                    <div className="col">
                        <label className="color" htmlFor="empresaTrabalhou"> Nome da empresa </label>
                        <input type="" className="form-control" id="empresaTrabalhou" aria-describedby="emailHelp" onChange={this.modificou} />
                    </div>
                </div>

                <br></br>
                <div className="form-row">
                    <div className="col">
                        <label className="color" htmlFor="cargoOcupado">Cargo ocupado</label>
                        <input type="text" className="form-control" id="cargoOcupado" onChange={this.modificou}/>
                    </div>
                    <br></br>
                    <div className="col">
                        <label className="color" htmlFor="periodo">Período</label>
                        <RangePicker picker="year" onChange={this.onChange} format={dateFormat} placeholder={["Entrada", "Saída"]}/>
                    </div>
                </div>

                <br></br>
                <div className="form-group">
                    <label className="color" htmlFor="descriçãoAtividades"> Descrição </label>
                    <textarea className="form-control" id="descriçãoAtividades" rows="3" placeholder="Quais foram as atividades que você exerceu durante o cargo?" onChange={this.modificou}></textarea>
                </div>


                <div className="custom-control custom-checkbox" id="checkboxE">
                    <input type="checkbox" className="custom-control-input" id="experiencia" value="true" onChange={this.modificou}/>
                    <label className="custom-control-label color" htmlFor="experiencia" >NÃO POSSUO EXPERIÊNCIA </label>
                </div>
                <hr></hr>
                    <button type="button" className="btn btn-outline-primary float-right" id="addE" onClick={this.enviar}> <strong>Salvar</strong></button>
            </div>
        )
    }
}

export default ExperienciasRepeate
