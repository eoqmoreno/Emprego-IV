import React from 'react';
import CursoCadastrado from '../cadastroCurriculo/CursoCadastrado';
import ExperienciaCadastrada from '../cadastroCurriculo/ExperienciaCadastrada';
import IdiomaCadastrado from '../cadastroCurriculo/IdiomaCadastrado';
import Jose from '../img/candidatos/1.jpg';

export default class Curriculo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        var experiencia = [];
        var cursos = [];
        var idiomas = [];
        if(this.props.curriculo != null){
            this.props.curriculo.experiencias.map((busca)=>{
                experiencia.push(<ExperienciaCadastrada empresaTrabalhou={busca.empresaTrabalhou} cargoOcupado={busca.cargoOcupado} periodo={busca.periodo} descriçãoAtividades={busca.descriçãoAtividades}></ExperienciaCadastrada>)
            })
            
            this.props.curriculo.cursos.map((busca)=>{
                cursos.push(<CursoCadastrado formacao={busca.formacao} instituição={busca.instituição} nomeCurso={busca.nomeCurso} anoConclusão={busca.anoConclusão}></CursoCadastrado>)
            })
            
            this.props.curriculo.idiomas.map((busca)=>{
                idiomas.push(<IdiomaCadastrado idioma={busca.idioma} nivelIdionma={busca.nivelIdionma}></IdiomaCadastrado>)
            })
        }

        return (
            <div key={this.props.index}>
                <div className="modal fade" id={this.props.chave} tabindex="-1" role="dialog" aria-labelledby={this.props.chave} aria-hidden="true">
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                            {/* Titulo do modal */}
                            <div className="modal-header border-0">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Perto">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="container">
                                <div className="row m-0">
                                    <div className="col-4">
                                        <img className="" src={Jose} alt="foto do candidato" />
                                    </div>

                                    <div className="col-8">
                                        <div className="text-left">
                                            <h5 className="azulEscuro bold w-content">{this.props.candidato.nome}</h5>
                                            <small>
                                                Telefone:
                                            </small><br></br>
                                            <a target="_blank" className="azulEscuro" href={"tel:" + this.props.candidato.telefone}>{this.props.candidato.telefone}</a>

                                            <br></br>
                                            <small>
                                                E-mail:
                                            </small>
                                            <br></br>
                                            <a target="_blank" className="azulEscuro" href={"mailto:" + this.props.candidato.email}>{this.props.candidato.email}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br></br>
                            <div className="container bg-light p-0">
                                <div className="modal-body">

                                    <h5 className="color  font-weight-bold"> Educação </h5>
                                    <hr></hr>
                                    <h5>{this.props.curriculo.escolariadade}</h5>
                                    <span>{this.props.curriculo.nomeInstituição}</span><br />
                                    <span>Concluído em {this.props.curriculo.anoConclusão}</span>

                                    <br></br>
                                    <br></br>

                                    <h5 className="color font-weight-bold"> Habilidades </h5>
                                    <hr></hr>
                                    <p className="bold mb-0"> Ferramentas e tecnologias </p>
                                    <p>{this.props.curriculo.tecnologia.join(", ")}</p>
                                    <p className="bold m-0"> Competências interpessoais </p>
                                    <p>{this.props.curriculo.interpessoais.join(", ")}</p>
                                    <br></br>

                                    <h5 className="color font-weight-bold"> Experiência Profissional </h5>
                                    <hr></hr>
                                    {experiencia}

                                    <br></br>

                                    <h5 className="color font-weight-bold"> Cursos e treinamentos </h5>
                                    <hr></hr>
                                    {cursos}
                                    <br></br>

                                    <h5 className="color font-weight-bold"> Idiomas </h5>
                                    <hr></hr>
                                    {idiomas}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}