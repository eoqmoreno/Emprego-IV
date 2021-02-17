import { createReducer } from "@reduxjs/toolkit";
import { buscarProfissaoIniciado, buscarProfissaoSucesso } from "../actions/profissao";

const estadoInicial = {
    profissoes:[],
};

export const reducerProfissao = createReducer(estadoInicial,{
    [buscarProfissaoIniciado]: (state,action) => {
        state.profissoes = null
    },
    [buscarProfissaoSucesso]: (state, action) => {
        state.profissoes = action.payload;
    }
})