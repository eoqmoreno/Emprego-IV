import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const buscarProfissaoIniciado = createAction("BUSCAR_PROFISSAO");
export const buscarProfissaoSucesso = createAction("BUSCAR_PROFISSAO_SUCESSO");

const url = "http://127.0.0.1/profissoes"

export const buscarProfissao = () => {
    return(dispatch, getState) => {
        
        dispatch(buscarProfissaoIniciado());

        axios({
            method: "GET",
            url: url,
        }).then(response => {
            dispatch(buscarProfissaoSucesso(response.data));
        })
    }
}   