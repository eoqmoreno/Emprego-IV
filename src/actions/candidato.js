import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import $ from "jquery";
export const buscarCandidatoIniciado = createAction("BUSCAR_CANDIDATO");
export const buscarCandidatoSucesso = createAction("BUSCAR_CANDIDATO_SUCESSO");

const url = "http://127.0.0.1/candidatos"

export const buscarCandidato = () => {
    return(dispatch, getState) => {
        dispatch(buscarCandidatoIniciado());

        axios({
            method: "GET",
            url: url,
        }).then(response => {
            dispatch(buscarCandidatoSucesso(response.data));
        })
    }
}   

export const addCandidato = (candidato) => {
    return(dispatch, getState) => {
        axios({
            method:"POST",
            url:url,
            data: candidato,
        }).then(response =>{
            dispatch(buscarCandidato());
            $(document).ready(function () {
            $("#CadastroPessoa_Fisica").modal("hide");
            $("#cadastroSucesso").modal();
            });
        })


    }
}