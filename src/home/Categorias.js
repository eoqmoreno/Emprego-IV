import React, { Component } from 'react'

// import files
import consultoria from '../img/icones/consultoria.png';
import educação from '../img/icones/educação.png';
import saúde from '../img/icones/saúde.png';
import tecnologia from '../img/icones/tecnologia.png';
import transporte from '../img/icones/transporte.png';
import turismo from '../img/icones/turismo.png';


// import route-dom
import { Link } from 'react-router-dom';

export class Categorias extends Component {
    render() {
        return (
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
        )
    }
}

export default Categorias
