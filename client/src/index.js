import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SelectBox from './components/Selectbox';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/selectbox" component={SelectBox} exact/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
