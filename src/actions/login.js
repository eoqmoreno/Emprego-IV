import { createAction } from "@reduxjs/toolkit";
import $ from 'jquery';

export const buscarLoginIniciado = createAction("BUSCAR_LOGIN");
export const buscarLoginSucesso = createAction("BUSCAR_LOGIN_SUCESSO");

export const logar = (id, tipo) => {
    return (dispatch, getState) => {
        dispatch(buscarLoginSucesso([id, tipo]));
    }
}   

export const deslogar = () => {
    return (dispatch, getState) => {
        dispatch(buscarLoginIniciado());
    }
}   