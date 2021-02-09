import { createReducer } from "@reduxjs/toolkit";
import { buscarCandidaturaIniciado, buscarCandidaturaSucesso} from "../actions/candidatar";

const estadoInicial = {
    candidaturas:[],
};

export const reducerCandidatar = createReducer(estadoInicial,{
    [buscarCandidaturaIniciado]: (state,action) => {
        state.candidaturas = null
    },
    [buscarCandidaturaSucesso]: (state, action) => {
        state.candidaturas = action.payload;
    }
})