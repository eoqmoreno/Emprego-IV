import React, { Component } from 'react'

// import files
import Card1 from '../img/icones/confiança.png';
import Card2 from '../img/icones/conexão.png';
import Card3 from '../img/icones/fluidez.png';

export class Somos extends Component {
    render() {
        return (
            <div className="row m-0 pt-5 pb-5 bg-cinza-escuro">

                <h3 className="bold azulEscuro col-12 text-center pb-5">NÓS SOMOS</h3>

                <div className="col-lg-2 col-3"></div>

                <div className="col-lg-2 col-6 bg-branco rounded text-center pt-5 pb-5 mb-5">
                    <img className="w-50" src={Card1} alt="" />
                    <div className="card-separador m-2"></div>
                    <h4 className="azulEscuro" type="button">Confiança</h4>
                </div>

                <div className="col-lg-1 col-3"></div>
                <div className="d-lg-none col-3"></div>

                <div className="col-lg-2 col-6 bg-branco rounded text-center pt-5 pb-5 mb-5">
                    <img className="w-50" src={Card2} alt="" />
                    <div className="card-separador m-2"></div>
                    <h4 className="azulEscuro" type="button">Conectividade</h4>
                </div>

                <div className="col-lg-1 col-3"></div>
                <div className="d-lg-none col-3"></div>

                <div className="col-lg-2 col-6 bg-branco rounded text-center pt-5 pb-5 mb-5">
                    <img className="w-50" src={Card3} alt="" />
                    <div className="card-separador m-2"></div>
                    <h4 className="azulEscuro" type="button">Fluidez</h4>
                </div>
                
                <div className="col-lg-2 col-3"></div>
            </div>
        )
    }
}

export default Somos
