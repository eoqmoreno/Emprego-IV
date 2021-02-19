import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import $ from "jquery";
import { storage } from "../firebase/firebaseConfig";
export const buscarCandidatoIniciado = createAction("BUSCAR_CANDIDATO");
export const buscarCandidatoSucesso = createAction("BUSCAR_CANDIDATO_SUCESSO");

const url = "https://emprego-bd-default-rtdb.firebaseio.com/candidato.json"

export const buscarCandidato = () => {
    return(dispatch, getState) => {
        dispatch(buscarCandidatoIniciado());
        axios({
            method: "GET",
            url: url,
        }).then(response => {
            let result = [];
            for (let key in response.data) {
                result.push(response.data[key])
            }
            dispatch(buscarCandidatoSucesso(result));
        })
    }
}   

export const addCandidato = (candidato, img) => {
    console.log(candidato, img)
    storage.ref('candidato/'+ img.name).put(img);
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