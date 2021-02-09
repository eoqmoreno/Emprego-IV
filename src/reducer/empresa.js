import { createReducer } from "@reduxjs/toolkit";
import { buscarEmpresaIniciado, buscarEmpresaSucesso } from "../actions/empresa";

const estadoInicial = {
    empresas:[],
};

export const reducerEmpresa = createReducer(estadoInicial,{
    [buscarEmpresaIniciado]: (state,action) => {
        state.empresas = null
    },
    [buscarEmpresaSucesso]: (state, action) => {
        state.empresas = action.payload;
    }
})