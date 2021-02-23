import { createAction } from "@reduxjs/toolkit";
import $ from "jquery";
import axios from "axios";

export const buscarCurriculoIniciado = createAction("BUSCAR_CURRICULO");
export const buscarCurriculoSucesso = createAction("BUSCAR_CURRICULO_SUCESSO");

const url = "https://emprego-bd-default-rtdb.firebaseio.com/curriculo.json"

export const buscarCurriculo = () => {
    return (dispatch, getState) => {

        dispatch(buscarCurriculoIniciado());
        axios({
            method: "GET",
            url: url,
        }).then(response => {
            let result = [];
            for (let key in response.data) {
                result.push(response.data[key])
            }
            dispatch(buscarCurriculoSucesso(result));
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