import React, { Component } from 'react'

// import files
import Carousel1 from '../img/slide/slids1.png';
import Carousel2 from '../img/slide/slids2.png';
import Carousel3 from '../img/slide/slids3.png';
import Carousel1Response from '../img/slide/responsive/slids1.png';
import Carousel2Response from '../img/slide/responsive/slids2.png';
import Carousel3Response from '../img/slide/responsive/slids3.png';


export class Slider extends Component {
    render() {
        return (
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
                {/* <h1 aria-hidden="true" className="carousel-control-prev azulClaro" href="#slideTelaInicial" role="button" data-slide="prev"><FiChevronLeft></FiChevronLeft></h1>
                <h1 aria-hidden="true" className="carousel-control-next azulClaro" href="#slideTelaInicial" role="button" data-slide="next"><FiChevronRight></FiChevronRight></h1> */}
            </div>
        )
    }
}

export default Slider
