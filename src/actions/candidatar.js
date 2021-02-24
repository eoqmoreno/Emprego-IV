import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import $ from "jquery";
export const buscarCandidaturaIniciado = createAction("BUSCAR_OFERTA");
export const buscarCandidaturaSucesso = createAction("BUSCAR_OFERTA_SUCESSO");

const url = "https://emprego-bd-default-rtdb.firebaseio.com/candidatura.json"

export const buscarCandidatura = () => {
    return (dispatch, getState) => {

        dispatch(buscarCandidaturaIniciado());
        axios({
            method: "GET",
            url: url,
        }).then(response => {
            let result = [];
            for (let key in response.data) {
                result.push(response.data[key])
            }
            dispatch(buscarCandidaturaSucesso(result));
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
    let chave = "";
    axios({
        method: "GET",
        url: url,
    }).then(response => {
        let result = [];
        let ids = [];
        for (let key in response.data) {
            if(response.data[key].id == id){
                chave = key;
            }
        }
    })
    return (dispatch, getState) => {
        axios({
            method: "PUT",
            url: url + chave,
            data: candidatura,
        }).then(response => {
            dispatch(buscarCandidatura());
            $(document).ready(function () {
                $("#entrevistaSolicitada").modal();
            });
        })
    }
}