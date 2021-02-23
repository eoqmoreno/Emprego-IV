import { combineReducers } from 'redux';

import { reducerCandidato } from "../reducer/candidato";
import { reducerEmpresa } from "../reducer/empresa";
import { reducerHabilidade } from "../reducer/habilidade";
import { reducerLogin } from "../reducer/login";
import { reducerProfissao } from "../reducer/profissao";
import { reducerVaga } from "../reducer/vaga";
import { reducerCurriculo } from "../reducer/curriculo";
import { reducerCandidatar } from "../reducer/candidatar";
import { reducerCategoria } from "../reducer/categoria";

export default combineReducers({
    categoria: reducerCategoria,
    profissao: reducerProfissao,
    vaga: reducerVaga,
    habilidade: reducerHabilidade,
    candidato: reducerCandidato,
    empresa: reducerEmpresa,
    login: reducerLogin,
    candidatar: reducerCandidatar,
    curriculo: reducerCurriculo,
})