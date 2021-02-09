import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import $ from 'jquery';



export const buscarLoginIniciado = createAction("BUSCAR_LOGIN");
export const buscarLoginSucesso = createAction("BUSCAR_LOGIN_SUCESSO");

export const buscarId = () => {
    return (dispatch, getState) => {
        dispatch(buscarLoginSucesso());
    }
}

export const logar = (id,tipo) => {
    return (dispatch, getState) => {
        buscarId()
        $(document).ready(function () {
            $("#Login").modal("hide");
        });
        let a = [id,tipo];
        dispatch(buscarLoginSucesso(a));
    }
}   
