import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import $ from "jquery";
export const buscarVagaIniciado = createAction("BUSCAR_VAGA");
export const buscarVagaSucesso = createAction("BUSCAR_VAGA_SUCESSO");

const url = "http://127.0.0.1/vagas/"

export const buscarVaga = () => {
    return (dispatch, getState) => {

        dispatch(buscarVagaIniciado());
        axios({
            method: "GET",
            url: url,
        }).then(response => {
            dispatch(buscarVagaSucesso(response.data));
        })
    }
}

export const addVaga = (vaga) => {
    return (dispatch, getState) => {
        axios({
            method: "POST",
            url: url,
            data: vaga,
        }).then(response => {
            dispatch(buscarVaga());
            $(document).ready(function () {
                $("#cadastroVaga").modal();
            });
        })
    }
}