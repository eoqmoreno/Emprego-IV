import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'jquery-mask-plugin/src/jquery.mask.js';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/root.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap-table/dist/bootstrap-table.min.css';
import 'bootstrap-table/dist/bootstrap-table.min';
import { Provider } from 'react-redux';
import store from './store';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

$(document).ready(function () {
  $(".show_hide_password a").on('click', function (event) {
    event.preventDefault();
    if ($('.show_hide_password input').attr("type") == "text") {
      $('.show_hide_password input').attr('type', 'password');
    } else if ($('.show_hide_password input').attr("type") == "password") {
      $('.show_hide_password input').attr('type', 'text');
    }

    
  });

  $(".telefone").mask('(99) 9 9999-9999');

  $("#cnpj").mask("99.999.999/9999-99");

  $(".ano").mask("9999");
});

serviceWorker.unregister();
