import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const buscarProfissaoIniciado = createAction("BUSCAR_PROFISSAO");
export const buscarProfissaoSucesso = createAction("BUSCAR_PROFISSAO_SUCESSO");

const url = "https://emprego-bd-default-rtdb.firebaseio.com/profissao.json"

export const buscarProfissao = () => {
    return(dispatch, getState) => {
        
        dispatch(buscarProfissaoIniciado());

        axios({
            method: "GET",
            url: url,
        }).then(response => {
            let result = [];
            for (let key in response.data) {
                result.push(response.data[key])
            }
            dispatch(buscarProfissaoSucesso(result));
        })  
    }
}   