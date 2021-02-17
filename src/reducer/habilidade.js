import { createReducer } from "@reduxjs/toolkit";
import { buscarHabilidadeIniciado, buscarHabilidadeSucesso } from "../actions/habilidade";

const estadoInicial = {
    habilidades:[],
};

export const reducerHabilidade = createReducer(estadoInicial,{
    [buscarHabilidadeIniciado]: (state,action) => {
        state.habilidades = null;
    },
    [buscarHabilidadeSucesso]: (state, action) => {
        state.habilidades = action.payload;
    }
})