import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import $ from "jquery";
import { database } from "../firebase/firebaseConfig";
export const buscarCandidaturaIniciado = createAction("BUSCAR_OFERTA");
export const buscarCandidaturaSucesso = createAction("BUSCAR_OFERTA_SUCESSO");

const url = "https://emprego-bd-default-rtdb.firebaseio.com/candidatura.json"

export const buscarCandidatura = () => {
    return (dispatch, getState) => {

        dispatch(buscarCandidaturaIniciado());
        axios({
            method: "GET",
            url: url,
        }).then(response => {
            let result = [];
            for (let key in response.data) {
                result.push(response.data[key])
            }
            dispatch(buscarCandidaturaSucesso(result));
        })
    }
}

export const addCandidatura = (candidatura) => {
    return (dispatch, getState) => {
        axios({
            method: "POST",
            url: url,
            data: candidatura,
        }).then(response => {
            dispatch(buscarCandidatura());
            $(document).ready(function () {
                $("#aguardeVaga").modal();
            });
        })
    }
}

export const updateCandidatura = (id, candidatura) => {
    return(dispatch, getState) => {
        dispatch(buscarCandidatura())
        $("#entrevistaSolicitada").modal();
    }

// console.log(database.ref().child('candidatura').orderByKey().once('value',snap=>{return snap}))

//     return(dispatch, getState) => {
//         database.ref('candidatura/' + "-MUKIudZk3z-vGpb-Wfc").set({
//             vaga: candidatura.vaga,
//             curriculo: candidatura.curriculo,
//             estado: candidatura.estado,
//             id: id,
//     },
//     (error) => {
//         if (error) {
//             console.log(error)
//         } else {
//             $(document).ready(function () {
//                 dispatch(buscarCandidatura())
//                 $("#entrevistaSolicitada").modal();
//             });
//         }
//     })
// }
}