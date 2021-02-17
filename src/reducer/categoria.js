import { createReducer } from "@reduxjs/toolkit";
import { buscarCategoriaIniciado, buscarCategoriaSucesso } from "../actions/categoria";

const estadoInicial = {
    categorias:[],
};

export const reducerCategoria = createReducer(estadoInicial,{
    [buscarCategoriaIniciado]: (state,action) => {
        state.categorias = null
    },
    [buscarCategoriaSucesso]: (state, action) => {        
        state.categorias = action.payload;
    }
})