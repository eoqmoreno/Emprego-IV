import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const buscarHabilidadeIniciado = createAction("BUSCAR_HABILIDADE");
export const buscarHabilidadeSucesso = createAction("BUSCAR_HABILIDADE_SUCESSO");

const url = "https://emprego-bd-default-rtdb.firebaseio.com/habilidade.json"

export const buscarHabilidade = () => {

    return(dispatch, getState) => {
        
        dispatch(buscarHabilidadeIniciado());

        axios({
            method: "GET",
            url: url,
        }).then(response => {
            let result = [];
            for (let key in response.data) {
                result.push(response.data[key])
            }
            dispatch(buscarHabilidadeSucesso(result));
        })
    }
}  