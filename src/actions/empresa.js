import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import $ from "jquery";
export const buscarEmpresaIniciado = createAction("BUSCAR_EMPRESA");
export const buscarEmpresaSucesso = createAction("BUSCAR_EMPRESA_SUCESSO");

const url = "http://127.0.0.1/empresas"

export const buscarEmpresa = () => {
    return(dispatch, getState) => {
        
        dispatch(buscarEmpresaIniciado());

        axios({
            method: "GET",
            url: url,
        }).then(response => {
            dispatch(buscarEmpresaSucesso(response.data));
        })
    }
}   

export const addEmpresa = (empresa) => {
    return(dispatch, getState) => {
         axios({
            method:"POST",
            url:url,
            data: empresa,
        }).then(response =>{
            dispatch(buscarEmpresa());
            $(document).ready(function () {
            $("#CadastroPessoa_Juridica").modal("hide");
                $("#cadastroSucesso").modal();
            });
        })
    }
}