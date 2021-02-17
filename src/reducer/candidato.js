import { createReducer } from "@reduxjs/toolkit";
import { buscarCandidatoIniciado, buscarCandidatoSucesso } from "../actions/candidato";

const estadoInicial = {
    candidatos:[],
};

export const reducerCandidato = createReducer(estadoInicial,{
    [buscarCandidatoIniciado]: (state,action) => {
        state.candidatos = null
    },
    [buscarCandidatoSucesso]: (state, action) => {
        state.candidatos = action.payload;
    }
})