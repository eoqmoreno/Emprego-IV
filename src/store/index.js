import {configureStore} from "@reduxjs/toolkit";
import rootReducer from '../reducer/'

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'login',
    storage,
    whitelist: ['login'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer:persistedReducer,
})

let persistor = persistStore(store)

export {store, persistor};