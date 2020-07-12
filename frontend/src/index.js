import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

/**
 may use to navigate.
import { useHistory } from "react-router-dom";
function HomeButton() {
  let history = useHistory();
 */

ReactDOM.render(
    <App />
    ,
    document.getElementById('root'),
);
