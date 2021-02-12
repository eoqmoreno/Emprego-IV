import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const buscarCategoriaIniciado = createAction("BUSCAR_CATEGORIA");
export const buscarCategoriaSucesso = createAction("BUSCAR_CATEGORIA_SUCESSO");

const url = "https://emprego-bd-default-rtdb.firebaseio.com/categorias.json"

export const buscarCategoria = () => {
    return (dispatch, getState) => {

        dispatch(buscarCategoriaIniciado());

        axios({
            method: "GET",
            url: url,
        }).then(response => {
            let result = [];
            for (let key in response.data) {
                result.push(response.data[key])
            }
            dispatch(buscarCategoriaSucesso(result));
        })
    }
}   