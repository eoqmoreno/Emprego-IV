import React from 'react';

import Carousel1 from '../img/slide/slids1.png';
import Carousel2 from '../img/slide/slids2.png';
import Carousel3 from '../img/slide/slids3.png';

import Carousel1Response from '../img/slide/responsive/slids1.png';
import Carousel2Response from '../img/slide/responsive/slids2.png';
import Carousel3Response from '../img/slide/responsive/slids3.png';

import Card1 from '../img/icones/confiança.png';
import Card2 from '../img/icones/conexão.png';
import Card3 from '../img/icones/fluidez.png';
import TelaEmpresa from './TelaEmpresa';
import TelaCandidato from './TelaCandidato';

import consultoria from '../img/icones/consultoria.png';
import educação from '../img/icones/educação.png';
import saúde from '../img/icones/saúde.png';
import tecnologia from '../img/icones/tecnologia.png';
import transporte from '../img/icones/transporte.png';
import turismo from '../img/icones/turismo.png';

import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { Link } from 'react-router-dom';



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
                <div className="row bg-cinza-claro pt-2 pb-2 m-0">
                    <Link className="col-4 col-lg-2 text-center" to="/vagasdisponiveis/Consultoria">
                        <img src={consultoria} className="w-25 m-3" alt=""></img>
                        <br />
                        <span className="bold azulEscuro">Consultoria</span>
                    </Link>

                    <Link className="col-4 col-lg-2 text-center" to="/vagasdisponiveis/Educação">
                        <img src={educação} className="w-25 m-3" alt=""></img>
                        <br />
                        <span className="bold azulEscuro">Educação</span>
                    </Link>

                    <Link className="col-4 col-lg-2 text-center" to="/vagasdisponiveis/Saúde">
                        <img src={saúde} className="w-25 m-3" alt=""></img>
                        <br />
                        <span className="bold azulEscuro">Saúde</span>
                    </Link>

                    <Link className="col-2 d-none d-lg-block text-center" to="/vagasdisponiveis/Tecnologia">
                        <img src={tecnologia} className="w-25 m-3" alt=""></img>
                        <br />
                        <span className="bold azulEscuro">Tecnologia</span>
                    </Link>

                    <Link className="col-2 d-none d-lg-block text-center" to="/vagasdisponiveis/Transportes">
                        <img src={transporte} className="w-25 m-3" alt=""></img>
                        <br />
                        <span className="bold azulEscuro">Transportes</span>
                    </Link>

                    <Link className="col-2 d-none d-lg-block text-center" to="/vagasdisponiveis/Turismo">
                        <img src={turismo} className="w-25 m-3" alt=""></img>
                        <br />
                        <span className="bold azulEscuro">Turismo</span>
                    </Link>
                </div>


                <div id="slideTelaInicial" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Carousel1} className="d-none d-lg-block w-100" alt="..." alt="" />
                            <img src={Carousel1Response} className="d-block d-lg-none w-100" alt="..." alt="" />

                        </div>
                        <div className="carousel-item">
                            <img src={Carousel2} className="d-none d-lg-block w-100" alt="..." alt="" />
                            <img src={Carousel2Response} className="d-block d-lg-none w-100" alt="..." alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={Carousel3} className="d-none d-lg-block w-100" alt="..." alt="" />
                            <img src={Carousel3Response} className="d-block d-lg-none w-100" alt="..." alt="" />
                        </div>
                    </div>
                    <h1 aria-hidden="true" className="carousel-control-prev azulClaro" href="#slideTelaInicial" role="button" data-slide="prev"><FiChevronLeft></FiChevronLeft></h1>
                    <h1 aria-hidden="true" className="carousel-control-next azulClaro" href="#slideTelaInicial" role="button" data-slide="next"><FiChevronRight></FiChevronRight></h1>
                </div>


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

                <div className="col-2"></div>
                <TelaEmpresa></TelaEmpresa>
                <TelaCandidato></TelaCandidato>
            </div>

        )

    }

}

