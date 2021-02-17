import React from 'react';
import Jose from '../img/jose.png';

export default class Curriculo extends React.Component {
    render() {
        return (

            <div>

                {/* Modal principal */}
                <div class="modal fade bd-example-modal-lg" id="curriculo" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">


                            {/* Titulo do modal */}
                            <div class="modal-header">
                                <h4 class="modal-title" id="myLargeModalLabel"></h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Perto">
                                    <span aria-hidden="true">×</span>
                                </button>

                            </div>

                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        <br></br>
                                        <img class="img-fluid m-3" src={Jose} />
                                        <h5 class="texto"><strong> José Barbosa <br></br>
                                            <small>Designer Digital </small></strong></h5>
                                    </div>

                                    <div class="col-md-6">
                                        <br></br><br></br>
                                        <div class="text2 float-right">
                                            <h5> Contato </h5>
                                            Tel.: (88) 0 0000-0000 <br></br>
                                            josebarbosadd@gmail.com
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Teste colunas */}
                            <br></br>
                            <div class="container bg-light p-0">
                                <div class="row">
                                    <div class="col-md-6">

                                        <div class="modal-body">
                                            <h5 class="color  font-weight-bold"> Educação </h5> <hr></hr>
                                            <h5>Graduação completa</h5>
                                            Universidade Federal do Ceará <br></br>
                                            Design Digital <br></br>
                                            <small> Concluído em 2014 </small>

                                            <div class="row">
                                                <div class="col">
                                                    <br></br>
                                                    <h5 class="color font-weight-bold"> Especialidade </h5> <hr></hr>
                                                    <h5> Designer UX e UI </h5>

                                                    <strong> Conhecimentos do Setor </strong>
                                                    <p> Design de interação. desenvolvimento web e mobile, arquitetura de informação </p>

                                                    <strong> Ferramentas e Tecnologias </strong>
                                                    <p> Figma, XD, Github, Illustrator, Photoshop, Sketch, Inkscape, Axure </p>

                                                    <strong> Competências Interpessoais </strong>
                                                    <p> Comunicação, liderança, assiduidade, responsabilidade, empatia, proatividade,
                                                    cooperatividade, trabalho em equipe </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    
                                    <div class="col-md-6">
                                        <br></br>
                                        <h5 class="color font-weight-bold"> Experiência Profissional </h5> <hr></hr>
                                        <h5> UX Designer </h5>
                                            Amazon <br></br>
                                            2018 - 2019 <br></br>
                                            Atuei como líder da equipe de UX design <br></br>

                                        <br></br>
                                        <h5> UX Designer </h5>
                                            Netflix  <br></br>
                                            2019 - 2020 <br></br>
                                            Atuei como líder da equipe de UX design

                                        <br></br><br></br>
                                        <h5 class="color font-weight-bold"> Cursos e treinamentos </h5> <hr></hr>
                                        <h5> Inglês  </h5>
                                        Feclesc <br></br>
                                        2016 - 2019 | Carga horária: 240h

                                        <br></br><br></br>
                                        <h5 class="color font-weight-bold"> Idiomas </h5> <hr></hr>
                                        <h5> Inglês  </h5>
                                        Nível Avançado
                                        <br></br> <br></br>
                                        <h5> Espanhol </h5>
                                        Nível Intermediário
                                        <br></br><br></br>
                                    </div>
                                



                                </div>
                            </div>

                        </div>



                    </div>
                </div>
            </div>








        )

    }
}