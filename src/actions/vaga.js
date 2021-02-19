import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import $ from "jquery";
export const buscarVagaIniciado = createAction("BUSCAR_VAGA");
export const buscarVagaSucesso = createAction("BUSCAR_VAGA_SUCESSO");

const url = "https://emprego-bd-default-rtdb.firebaseio.com/vaga.json"

export const buscarVaga = () => {
    return (dispatch, getState) => {

        dispatch(buscarVagaIniciado());
        axios({
            method: "GET",
            url: url,
        }).then(response => {
            let result = [];
            for (let key in response.data) {
                result.push(response.data[key])
            }
            dispatch(buscarVagaSucesso(result));
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