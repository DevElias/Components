import React from 'react';
import App from './App';
import SelectBox from './components/Selectbox';
import SelectBox2 from './components/SelectBox2';
import Usuario from './views/usuario/index'
;import { Switch, Route } from 'react-router-dom';

export const Routes = () => {
    return(
        <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/selectbox" component={SelectBox} exact/>
        <Route path="/listagem/usuario" component={Usuario} exact/>
        <Route path="/selectbox2" component={SelectBox2} exact/>
      </Switch>
    );
}