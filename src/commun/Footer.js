import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { buscarCategoria } from '../actions/categoria';


class Footer extends React.Component {

    componentDidMount = () => {
        this.props.buscarCategoria();
    }

    render() {
        var categoria = [];

        if(this.props.categorias != null){
            categoria = this.props.categorias.map(
                (busca, index) => (
                    <Link className="btn col-2 mx-1 my-3 btn-outline-primary bg-branco bold" key={index} to={"/vagasdisponiveis/"+busca.nome}>{busca.nome}</Link>
                )
             )
        }

        
        return (        
        
            <footer className="row col-12 p-0 m-0 mt-5 bg-cinza-claro">
                <div className="col-12 col-lg-3 p-5">

                        <h4 className="azulEscuro bold d-none d-lg-block">SOBRE A PLATAFORMA</h4>
                        <h5 className="azulEscuro bold d-lg-none d-block">SOBRE A PLATAFORMA</h5>
                        <Link className="azulEscuro" to="/">Sobre nós</Link>
                        <br/>
                        <Link className="azulEscuro" to="/">Contatos</Link>
                        <br/>
                        <Link className="azulEscuro" to="/">Dúvidas</Link>
                        <br/>
                        <Link className="azulEscuro" to="/">Políticas da Empregó</Link>
                </div>
                <div className="col-9 d-none d-lg-flex p-5 justify-content-between flex-wrap align-content-center ">
                    {categoria}
                </div>
                <div className="col-12 text-center bold azulEscuro">© 2021 EMPREGÔ</div>   

            </footer>

        )
    } 

}   

const mapearEstadoParaProps = (state, props) => {
    return {
        categorias: state.categoria.categorias,
    }
}

const mapearDispatchParaProps = (dispatch) => {
    return {
        buscarCategoria: () => {
            dispatch(buscarCategoria());
        },
    }
}


export default connect(mapearEstadoParaProps, mapearDispatchParaProps)(Footer);