import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';

import {Login} from '../pages/Login';
import {Perfil} from '../pages/Perfil';
import MenuSuperior from '../pages/Painel';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/perfil" exact component={Perfil} />
      <Route path="/painel" exact component={MenuSuperior}/>
    </Switch>
  </BrowserRouter>
)
