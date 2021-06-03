import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import { Routes } from './routes';

ReactDOM.render(
  <BrowserRouter>
    < Routes />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
