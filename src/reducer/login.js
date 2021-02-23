import { createReducer } from "@reduxjs/toolkit";
import { buscarLoginIniciado, buscarLoginSucesso } from "../actions/login";

const estadoInicial = {
    login: [],
};

export const reducerLogin = createReducer(estadoInicial, {
    [buscarLoginIniciado]: (state, action) => {
        state.login = [];
    },
    [buscarLoginSucesso]: (state, action) => {
        state.login = action.payload;
    }
})