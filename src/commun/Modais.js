import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cadVaga from '../img/cadVaga.png'
import cadastro from '../img/cadastro.png'
import aguarde from '../img/aguarde.png'



export class Modais extends React.Component {
    render() {
        return (
            <div>

                <div className="modal fade" tabIndex="-1" id="cadastroVaga" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center">
                                    <img className="" src={cadVaga} alt=""></img>
                                </div>
                                <br />
                                <div className="bg-cinza-claro">
                                    <h5 className="modal-title azulEscuro text-center bold">PRONTINHO!</h5>
                                    <span className="d-block w-100 text-center azulEscuro">Vaga cadastrada com sucesso!</span>
                                </div>
                            </div>
                            <div className="text-center modal-footer pt-0 border-0 justify-content-center">
                                <span>Deseja criar uma nova vaga?</span>
                                <input type="submit" className="btn bg-transparent m-0 p-0 w-content d-inline azulEscuro bold" value="Clique aqui!" data-dismiss="modal"></input>
                            </div>
                            <div className="justify-content-center d-flex mb-3">
                                <Link className="btn btn-primary" to="/" data-dismiss="modal">Ok!</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" tabIndex="-1" id="cadastroCurriculo" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center">
                                    <img className="" src={cadVaga} alt=""></img>
                                </div>
                                <br />
                                <div className="bg-cinza-claro">
                                    <h5 className="modal-title azulEscuro text-center bold">PRONTINHO!</h5>
                                    <span className="d-block w-100 text-center azulEscuro">Currículo cadastrado, boa sorte!</span>
                                </div>
                            </div>
                            <div className="text-center modal-footer pt-0 border-0 justify-content-center">
                                <span>Continue navegando e descubra as vagas<br></br>quentinhas que acabaram de sair do forno</span>
                            </div>
                            <div className="justify-content-center d-flex mb-3">
                                <input type="submit" className="btn btn-primary" value="Ok" data-dismiss="modal"></input>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" tabIndex="-1" id="cadastroSucesso" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center">
                                    <img className="" src={cadastro} alt=""></img>
                                </div>
                                <br />
                                <div className="bg-cinza-claro">
                                    <h5 className="modal-title azulEscuro text-center bold">EBA! BOM TER VOCÊ AQUI</h5>
                                    <span className="d-block w-100 text-center azulEscuro">Estamos ao seu dispor</span>
                                </div>
                            </div>
                            <div className="text-center modal-footer pt-0 border-0 justify-content-center">
                                <span>Clique em Entrar para acessar ser perfil</span>
                            </div>
                            <div className="justify-content-center d-flex mb-3">
                                <input type="submit" className="btn btn-primary" value="Entrar" data-toggle="modal" data-target="#Login" data-dismiss="modal"></input>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" tabIndex="-1" id="aguardeVaga" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center">
                                    <img className="" src={aguarde} alt=""></img>
                                </div>
                                <br />
                                <div className="bg-cinza-claro">
                                    <h5 className="modal-title azulEscuro text-center bold">OPA! AGORA É SÓ ESPERAR</h5>
                                    <span className="d-block w-100 text-center azulEscuro">A empresa está olhando seu currículo</span>
                                </div>
                            </div>
                            <div className="justify-content-center d-flex mb-3">
                                <input type="submit" className="btn btn-primary" value="Ok" data-toggle="modal" data-dismiss="modal"></input>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" tabIndex="-1" id="entrevistaSolicitada" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center">
                                    <img className="" src={cadVaga} alt=""></img>
                                </div>
                                <br />
                                <div className="bg-cinza-claro">
                                    <h5 className="modal-title azulEscuro text-center bold">PRONTINHO!</h5>
                                    <span className="d-block w-100 text-center azulEscuro">Entrevista solicitada!</span>
                                </div>
                            </div>
                            <div className="text-center modal-footer pt-0 border-0 justify-content-center">
                                <span>Não esqueça de combinar o dia e horário da entrevista,<br></br>entrando em contato com o candidato</span>
                            </div>
                            <div className="justify-content-center d-flex mb-3">
                                <input type="submit" className="btn btn-primary" value="Ok" data-dismiss="modal"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modais
