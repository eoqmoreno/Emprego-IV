import React, { Component } from 'react'

// import files
import Card1 from '../img/icones/confiança.png';
import Card2 from '../img/icones/conexão.png';
import Card3 from '../img/icones/fluidez.png';

// import icons
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

export class Somos extends Component {
    render() {
        return (
            <div className="row m-0 pt-5 pb-5 bg-cinza-escuro d-flex justify-content-around">

                <h3 className="bold azulEscuro col-12 text-center pb-3">NÓS SOMOS</h3>

                <div className="col-lg-2 d-lg-block d-none bg-branco rounded text-center pt-5 pb-5">
                    <img className="w-50" src={Card1} alt="" />
                    <div className="card-separador m-2"></div>
                    <h4 className="azulEscuro" type="button">Confiança</h4>
                </div>

                <div className="col-lg-2 d-lg-block d-none bg-branco rounded text-center pt-5 pb-5">
                    <img className="w-50" src={Card2} alt="" />
                    <div className="card-separador m-2"></div>
                    <h4 className="azulEscuro" type="button">Conectividade</h4>
                </div>

                <div className="col-lg-2 d-lg-block d-none bg-branco rounded text-center pt-5 pb-5">
                    <img className="w-50" src={Card3} alt="" />
                    <div className="card-separador m-2"></div>
                    <h4 className="azulEscuro w-100" type="button">Fluidez</h4>
                </div>

                <div id="sobrenos" className="carousel slide col-12 d-block d-lg-none" data-ride="carousel">
                    <div className="carousel-inner">
                        <div class="carousel-item active p-5">
                            <div className="bg-branco rounded text-center p-5">
                                <img className="w-50" src={Card1} alt="" />
                                <div className="card-separador m-2"></div>
                                <h4 className="azulEscuro" type="button">Confiança</h4>
                            </div>
                        </div>
                        <div class="carousel-item p-5">
                            <div className="bg-branco rounded text-center p-5">
                                <img className="w-50" src={Card2} alt="" />
                                <div className="card-separador m-2"></div>
                                <h4 className="azulEscuro" type="button">Conectividade</h4>
                            </div>
                        </div>
                        <div class="carousel-item p-5">
                            <div className="bg-branco rounded text-center p-5">
                                <img className="w-50" src={Card3} alt="" />
                                <div className="card-separador m-2"></div>
                                <h4 className="azulEscuro" type="button">Fluidez</h4>
                            </div>
                        </div>
                    </div>
                    <ol class="carousel-indicators">
                        <li data-target="#sobrenos" data-slide-to="0" class="active"></li>
                        <li data-target="#sobrenos" data-slide-to="1"></li>
                        <li data-target="#sobrenos" data-slide-to="2"></li>
                    </ol>
                </div>

            </div>
        )
    }
}

export default Somos