import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const buscarCategoriaIniciado = createAction("BUSCAR_CATEGORIA");
export const buscarCategoriaSucesso = createAction("BUSCAR_CATEGORIA_SUCESSO");

const url = "http://127.0.0.1/categorias"

export const buscarCategoria = () => {
    return(dispatch, getState) => {
        
        dispatch(buscarCategoriaIniciado());

        axios({
            method: "GET",
            url: url,
        }).then(response => {
            dispatch(buscarCategoriaSucesso(response.data));
        })
    }
}   