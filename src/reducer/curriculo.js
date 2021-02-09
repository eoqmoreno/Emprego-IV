import { createReducer } from "@reduxjs/toolkit";
import { buscarCurriculoIniciado, buscarCurriculoSucesso } from "../actions/curriculo";

const estadoInicial = {
    curriculos:[],
};

export const reducerCurriculo = createReducer(estadoInicial,{
    [buscarCurriculoIniciado]: (state,action) => {
        state.curriculos = null
    },
    [buscarCurriculoSucesso]: (state, action) => {
        state.curriculos = action.payload;
    }
})