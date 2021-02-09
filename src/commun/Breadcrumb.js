import React from 'react'
import { Link } from 'react-router-dom';

export class Breadcrumb extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let caminho = [];

        if (this.props.caminho != null) {

            caminho = this.props.caminho.map(
                (busca, index) => {
                    return <li className="breadcrumb-item" key={index}><Link to={busca.link}>{busca.nome}</Link></li>
                }
            )
        }

        return (
            <div className="bg-cinza-claro">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-cinza-claro">
                        <li className="breadcrumb-item"><Link to="/">PÁGINA INICIAL</Link></li>
                        {caminho}
                    </ol>
                </nav>
            </div>
        )
    }
}

export default Breadcrumb
