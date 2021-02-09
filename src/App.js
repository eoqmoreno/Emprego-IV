import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom';

import Footer from './commun/Footer';
import Login from './login/Login';
import CadastroOpcao from './cadastroConta/CadastroOpcao';
import CadastroCandidato from './cadastroConta/CadastroCandidato';
import CadastroEmpresa from './cadastroConta/CadastroEmpresa';
import Home from './home/TelaInicial';
import PublicarVaga from './publicarVaga/PublicarVaga';
import ListaDeCandidatos from './listaDeCandidatos/ListaDeCandidatos';
import CadastroCurriculo from './cadastroCurriculo/CadastroCurriculo';
import VagasDisponiveis from './vagasDisponiveis/VagasDisponiveis';
import Navbar from './commun/NavbarInicio';
import NavbarCan from './commun/NavbarCan';
import NavbarEmp from './commun/NavbarEmp';

import { IconName } from "react-icons/fi";
import { connect } from 'react-redux';
import Modais from './commun/Modais';
import VagasEmpresa from './vagasDisponiveis/VagasEmpresa';
import ListaCurriculos from './vagasDisponiveis/ListaCurriculos';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    var logado = "";
    if (this.props.login != "" && this.props.login[1] == "empresa") {
      logado = <NavbarEmp></NavbarEmp>
    } else {
      if (this.props.login != "" && this.props.login[1] == "candidato") {
        logado = <NavbarCan></NavbarCan>
      } else {
        logado = <Navbar></Navbar>
      }
    }


    return (
      <div>
        <BrowserRouter>
          {logado}

          <Login></Login>

          <CadastroOpcao></CadastroOpcao>
          <CadastroCandidato></CadastroCandidato>
          <CadastroEmpresa></CadastroEmpresa>
          <Modais></Modais>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/cadastrarvaga">
            <PublicarVaga></PublicarVaga>
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