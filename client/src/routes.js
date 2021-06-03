import React from 'react';
import App from './App';
import SelectBox from './components/Selectbox';
import { Switch, Route } from 'react-router-dom';

export const Routes = () => {
    return(
        <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/selectbox" component={SelectBox} exact/>
      </Switch>
    );
}