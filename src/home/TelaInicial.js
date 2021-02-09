import React from 'react';

// import screens
import TelaEmpresa from './TelaEmpresa';
import TelaCandidato from './TelaCandidato';
import Categorias from './Categorias';
import Slider from './Slider';
import Somos from './Somos';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tipo: props.tipo
        }
    }
    render() {
        return (
            <div className="conteiner">

                <Categorias></Categorias>

                <Slider></Slider>

                <Somos></Somos>

                <TelaEmpresa></TelaEmpresa>
                
                <TelaCandidato></TelaCandidato>
            </div>
        )
    }
}