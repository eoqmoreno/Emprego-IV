import { createReducer } from "@reduxjs/toolkit";
import { buscarVagaIniciado, buscarVagaSucesso } from "../actions/vaga";

const estadoInicial = {
    vagas:[],
};

export const reducerVaga = createReducer(estadoInicial,{
    [buscarVagaIniciado]: (state,action) => {
        state.vagas = null
    },
    [buscarVagaSucesso]: (state, action) => {
        state.vagas = action.payload;
    }
})