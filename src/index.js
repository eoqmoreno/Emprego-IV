// import react
import React from 'react';
import ReactDOM from 'react-dom';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-table/dist/bootstrap-table.min.css';
import 'bootstrap-table/dist/bootstrap-table.min';

// import jquery
import $ from 'jquery';
import 'jquery-mask-plugin/src/jquery.mask.js';

// import css 
import './css/root.css';

// import redux
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {store, persistor} from './store';

// import redux-persist
import {PersistGate} from 'redux-persist/integration/react'

// import ant desing
import 'antd/dist/antd.css';

// import react components
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

$(document).ready(function () {
  $(".telefone").mask('(99) 9 9999-9999');
  $(".cnpj").mask("99.999.999/9999-99");
});

serviceWorker.unregister();