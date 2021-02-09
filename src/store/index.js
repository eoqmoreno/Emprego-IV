import { reducerCandidato } from "../reducer/candidato";
import { reducerEmpresa } from "../reducer/empresa";
import { reducerHabilidade } from "../reducer/habilidade";
import { reducerLogin } from "../reducer/login";
import { reducerProfissao } from "../reducer/profissao";
import { reducerVaga } from "../reducer/vaga";
import { reducerCurriculo } from "../reducer/curriculo";
import { reducerCandidatar } from "../reducer/candidatar";



const { configureStore } = require("@reduxjs/toolkit");
const { reducerCategoria } = require("../reducer/categoria");

const store = configureStore({
    reducer:{
        categoria: reducerCategoria,
        profissao: reducerProfissao,
        vaga: reducerVaga,
        habilidade: reducerHabilidade,
        candidato: reducerCandidato,
        empresa: reducerEmpresa,
        login: reducerLogin,
        candidatar: reducerCandidatar,
        curriculo: reducerCurriculo,
    }
})


export default store;