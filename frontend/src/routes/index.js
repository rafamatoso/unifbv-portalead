import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Perfil } from '../pages/Perfil';
import { NavBar } from '../components/NavBar';

export const Routes = () => (
  <BrowserRouter>
    <Route path="/dashboard" component={NavBar} />
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard/perfil" exact component={Perfil} />
    </Switch>
  </BrowserRouter>
);
