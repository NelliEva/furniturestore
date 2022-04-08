import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
} from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import './index.css';
import App from './container/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
,
  document.getElementById('root')
);

reportWebVitals();
