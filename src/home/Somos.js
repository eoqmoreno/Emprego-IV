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

                <h3 className="bold azulEscuro col-12 text-center pb-3 d-none d-lg-block">NÓS SOMOS</h3>

                <h5 className="bold azulEscuro col-12 text-center pb-3 d-lg-none d-block">NÓS SOMOS</h5>

                <div className="col-lg-2 d-lg-block d-none bg-branco rounded text-center pt-5 pb-5">
                    <a data-toggle="collapse" href=".multi-collapse" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                        <img className="w-50" src={Card1} alt="" />
                    </a>
                    <div className="card-separador m-2"></div>
                    <h4 className="azulEscuro">Confiança</h4>
                    <div className="collapse multi-collapse mt-4" id="confianca">
                        <span class="text-right">
                            Aqui é um ambiente 100% comunicativo. Notificamos você a cada novo passo do processo e guardamos todas as suas informações de forma segura.
                        </span>
                    </div>
                </div>

                <div className="col-lg-2 d-lg-block d-none bg-branco rounded text-center pt-5 pb-5">
                    <a data-toggle="collapse" href=".multi-collapse" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                        <img className="w-50" src={Card2} alt="" />
                    </a>
                    <div className="card-separador m-2"></div>
                    <h4 className="azulEscuro">Conectividade</h4>
                    <div className="collapse multi-collapse mt-4" id="conectividade">
                        <span class="text-right">
                            Conectamos empresas e candidatos com seus respectivos interesses. Nossa meta é iniciar um novo ciclo pra você.
                        </span>
                    </div>
                </div>

                <div className="col-lg-2 d-lg-block d-none bg-branco rounded text-center pt-5 pb-5">
                    <a data-toggle="collapse" href=".multi-collapse" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                        <img className="w-50" src={Card3} alt="" />
                    </a>
                    <div className="card-separador m-2"></div>
                    <h4 className="azulEscuro w-100">Fluidez</h4>
                    <div className="collapse multi-collapse mt-4" id="fluidez">
                        <span class="text-right">
                            Buscamos incessantemente melhorar sua experiência em nossa plataforma. Para que você encontre aquilo que procura de forma simples e eficiente.
                        </span>
                    </div>
                </div>

                <div id="sobrenos" className="carousel slide col-12 d-block d-lg-none" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active pb-5 pr-5 pl-5">
                            <div className="bg-branco rounded text-center p-5">
                                <a data-toggle="collapse" href=".multi-collapse" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                                    <img className="w-50" src={Card1} alt="" />
                                </a>
                                <div className="card-separador m-2"></div>
                                <h4 className="azulEscuro">Confiança</h4>
                                <div className="collapse multi-collapse mt-4" id="confianca">
                                    <span class="text-right">
                                        Aqui é um ambiente 100% comunicativo. Notificamos você a cada novo passo do processo e guardamos todas as suas informações de forma segura.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item pb-5 pr-5 pl-5">
                            <div className="bg-branco rounded text-center p-5">
                                <a data-toggle="collapse" href=".multi-collapse" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                                    <img className="w-50" src={Card2} alt="" />
                                </a>
                                <div className="card-separador m-2"></div>
                                <h4 className="azulEscuro">Conectividade</h4>
                                <div className="collapse multi-collapse mt-4" id="conectividade">
                                    <span class="text-right">
                                        Conectamos empresas e candidatos com seus respectivos interesses. Nossa meta é iniciar um novo ciclo pra você.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item pb-5 pr-5 pl-5">
                            <div className="bg-branco rounded text-center p-5">
                                <a data-toggle="collapse" href=".multi-collapse" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                                    <img className="w-50" src={Card3} alt="" />
                                </a>
                                <div className="card-separador m-2"></div>
                                <h4 className="azulEscuro">Fluidez</h4>
                                <div className="collapse multi-collapse mt-4" id="fluidez">
                                    <span class="text-right">
                                        Buscamos incessantemente melhorar sua experiência em nossa plataforma. Para que você encontre aquilo que procura de forma simples e eficiente.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <ol className="carousel-indicators">
                        <li data-target="#sobrenos" data-slide-to="0" className="active"></li>
                        <li data-target="#sobrenos" data-slide-to="1"></li>
                        <li data-target="#sobrenos" data-slide-to="2"></li>
                    </ol>
                </div>

            </div>
        )
    }
}

export default Somos
