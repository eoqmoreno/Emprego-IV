import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { buscarCategoria } from '../actions/categoria';


class Footer extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount = () => {
        this.props.buscarCategoria();
    }

    render() {
        var categoria = [];

        if(this.props.categorias != null){
            categoria = this.props.categorias.map(
                (busca, index) => (
                    <Link className="btn col-3 btn-outline-primary d-inline-block bg-branco m-1 bold h-content" key={index} to={"/vagasdisponiveis/"+busca.nome}>{busca.nome}</Link>
                )
             )
        }

        
        return (        
        
            <footer className="row m-0 bg-cinza-claro pt-5">
                <div className="col-4">
                        <h5 className="bold azulEscuro">QUEM SOMOS?</h5>
                        <Link className="azulEscuro" to="/">Sobre nós</Link>
                        <br/>
                        <Link className="azulEscuro" to="/">Contatos</Link>
                        <br/>
                        <Link className="azulEscuro" to="/">Dúvidas</Link>
                        <br/>
                        <Link className="azulEscuro" to="/">Políticas da Empregó</Link>
                </div>
                <div className="col-8 row m-0 text-center">
                    {categoria}
                </div>
                <div className="col-12 text-center bold azulEscuro">© 2020 EMPREGÔ</div>   

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