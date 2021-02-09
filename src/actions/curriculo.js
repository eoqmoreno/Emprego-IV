import { createAction } from "@reduxjs/toolkit";
import $ from "jquery";
import axios from "axios";

export const buscarCurriculoIniciado = createAction("BUSCAR_CURRICULO");
export const buscarCurriculoSucesso = createAction("BUSCAR_CURRICULO_SUCESSO");

const url = "http://127.0.0.1/curriculos/"

export const buscarCurriculo = () => {
    return (dispatch, getState) => {

        dispatch(buscarCurriculoIniciado());
        axios({
            method: "GET",
            url: url,
        }).then(response => {
            dispatch(buscarCurriculoSucesso(response.data));
        })
    }
}

export const addCurriculo = (curriculo) => {
    return (dispatch, getState) => {
        axios({
            method: "POST",
            url: url,
            data: curriculo,
        }).then(response => {
            dispatch(buscarCurriculo());
            $(document).ready(function () {
                $("#cadastroCurriculo").modal();
            });
        })
    }
}