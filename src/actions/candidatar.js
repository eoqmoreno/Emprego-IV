import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import $ from "jquery";
export const buscarCandidaturaIniciado = createAction("BUSCAR_OFERTA");
export const buscarCandidaturaSucesso = createAction("BUSCAR_OFERTA_SUCESSO");

const url = "http://127.0.0.1/candidaturas/"

export const buscarCandidatura = () => {
    return (dispatch, getState) => {

        dispatch(buscarCandidaturaIniciado());
        axios({
            method: "GET",
            url: url,
        }).then(response => {
            dispatch(buscarCandidaturaSucesso(response.data));
        })
    }
}

export const addCandidatura = (candidatura) => {
    return (dispatch, getState) => {
        axios({
            method: "POST",
            url: url,
            data: candidatura,
        }).then(response => {
            dispatch(buscarCandidatura());
            $(document).ready(function () {
                $("#aguardeVaga").modal();
            });
        })
    }
}

export const updateCandidatura = (id, candidatura) => {
    return (dispatch, getState) => {
        axios({
            method: "PUT",
            url: url + id,
            data: candidatura,
        }).then(response => {
            dispatch(buscarCandidatura());
            $(document).ready(function () {
                $("#entrevistaSolicitada").modal();
            });
        })
    }
}