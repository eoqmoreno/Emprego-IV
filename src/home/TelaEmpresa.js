import React from 'react';

// import file
import Image24 from '../img/comoFunciona/empresa.png';

export default class TelaEmpresa extends React.Component {
    render() {
        return (
            <div className="row m-0 justify-content-center">
                <div className="p-5 col-11">
                    <div className="line-cinza-escuro row">
                        <div className="col-12 col-lg-6 justify-content-center text-center align-self-center ">
                            <img src={Image24} className="w-50" alt="Responsive image" />
                        </div>

                        <div className="p-5 col-12 col-lg-5 text-right azulEscuro justify-content-center align-self-center separatorVerticalLeft">
                            <h3 className="azulEscuro bold">PARA AS EMPRESAS</h3>
                            <p className="">• Você se cadastra no site;</p>
                            <p className="">• Vai em "Publicar Vaga";</p>
                            <p className="">• Preenche os requisitos da vaga e pública</p>
                            <p className="bold">Prontinho!</p>
                            <p className="">Agora é só aguardar.</p>
                        </div>
                        <div className="col-1 d-none d-lg-block"></div>
                    </div>
                </div>

            </div>

        )
    }
}