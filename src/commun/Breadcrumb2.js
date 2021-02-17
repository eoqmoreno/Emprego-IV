import React, { Component } from 'react'

export class Breadcrumb2 extends Component {
    render() {
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item ali"><a href="#">PÁGINA INICIAL</a></li>
                        <li class="breadcrumb-item"><a href="#">MEU PERFIL</a></li>
                        <li class="breadcrumb-item active" aria-current="page"> CADASTRAR CURRÍCULO </li>
                    </ol>
                </nav>
            </div>
        )
    }
}

export default Breadcrumb2
