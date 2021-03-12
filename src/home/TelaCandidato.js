import React from 'react';

// import file
import Image23 from '../img/comoFunciona/candidato.png';

export default class TelaCandidato extends React.Component {
    render() {
        return (
            <div className="row m-0 justify-content-center">

                <div className="pt-5 pb-5 col-11">
                    <div className="line-cinza-escuro row">
                        <div className="col-1"></div>
                        <div className="p-5 col-12 col-lg-5 text-left azulEscuro justify-content-center align-self-center separatorVertical">

                            <h3 className="azulEscuro bold d-none d-lg-block">PARA OS CANDIDATOS</h3>
                            <h5 className="azulEscuro bold d-lg-none d-block">PARA OS CANDIDATOS</h5>

                            <p className="">   • Você se cadastra no site;</p>
                            <p className="">• Pesquisa pela vaga que deseja;</p>
                            <p className="">• Se candidata e preenche o currículo.</p>
                            <p className="bold" >Prontinho!</p>
                            <p className="">Agora é só aguardar.</p>
                        </div>
                        <div className=" col-12 col-lg-6 justify-content-center align-self-center text-center">
                            <img src={Image23} className="w-50" alt="Ra" />
                        </div>
                        <div className="col-1 d-none d-lg-block"></div>
                    </div>
                </div>
            </div>
        )
    }
}