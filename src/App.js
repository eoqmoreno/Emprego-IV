import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom';

import Footer from './commun/Footer';
import Login from './login/Login';
import CadastroOpcao from './cadastroConta/CadastroOpcao';
import Home from './home/TelaInicial';
import ListaDeCandidatos from './listaDeCandidatos/ListaDeCandidatos';
import CadastroCurriculo from './cadastroCurriculo/CadastroCurriculo';
import VagasDisponiveis from './vagasDisponiveis/VagasDisponiveis';
import Navbar from './commun/NavbarInicio';
import CadastroVaga from './cadastroVaga/CadastroVaga';

import { connect } from 'react-redux';
import Modais from './commun/Modais';
import VagasEmpresa from './vagasDisponiveis/VagasEmpresa';
import ListaCurriculos from './vagasDisponiveis/ListaCurriculos';
import Candidato from './cadastroConta/Candidato';
import Empresa from './cadastroConta/Empresa';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>

          <Navbar></Navbar>
          
          <Login></Login>

          <CadastroOpcao></CadastroOpcao>
          <Modais></Modais>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/cadastroEmpresa">
            <Empresa></Empresa>
          </Route>

          <Route path="/cadastroCandidato">
            <Candidato></Candidato>
          </Route>

          <Route path="/cadastrarvaga">
            <CadastroVaga></CadastroVaga>
          </Route>

          <Route path="/cadastrarcurriculo">
            <CadastroCurriculo></CadastroCurriculo>
          </Route>

          <Route path="/listadecandidatos/:vaga" component={ListaDeCandidatos}>
          </Route>

          <Route path="/listacurriculos/:vaga" component={ListaCurriculos}>
          </Route>

          <Route path="/vagasdisponiveis/:categoria" component={VagasDisponiveis}>
          </Route>

          <Route path="/vagascadastradas">
            <VagasEmpresa></VagasEmpresa>
          </Route>

          <Footer></Footer>
        </BrowserRouter>

      </div>
    );
  }
}

const mapearEstadoParaProps = (state, props) => {
  return {
    login: state.login.login,
  }
}

export default connect(mapearEstadoParaProps)(App);