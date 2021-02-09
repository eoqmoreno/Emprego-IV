import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const buscarHabilidadeIniciado = createAction("BUSCAR_HABILIDADE");
export const buscarHabilidadeSucesso = createAction("BUSCAR_HABILIDADE_SUCESSO");

const url = "http://127.0.0.1/habilidades/"

export const buscarHabilidade = () => {

    return(dispatch, getState) => {
        
        dispatch(buscarHabilidadeIniciado());

        axios({
            method: "GET",
            url: url,
        }).then(response => {
            dispatch(buscarHabilidadeSucesso(response.data));
        })
    }
}  