import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import $ from "jquery";
import { storage } from "../firebase/firebaseConfig";
export const buscarEmpresaIniciado = createAction("BUSCAR_EMPRESA");
export const buscarEmpresaSucesso = createAction("BUSCAR_EMPRESA_SUCESSO");

const url = "https://emprego-bd-default-rtdb.firebaseio.com/empresa.json"

export const buscarEmpresa = () => {
    return(dispatch, getState) => {
        
        dispatch(buscarEmpresaIniciado());

        axios({
            method: "GET",
            url: url,
        }).then(response => {
            let result = [];
            for (let key in response.data) {
                result.push(response.data[key])
            }
            dispatch(buscarEmpresaSucesso(result));
        })
    }
}   

export const addEmpresa = (empresa, img) => {
    storage.ref('empresa/'+empresa.email).put(img)
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