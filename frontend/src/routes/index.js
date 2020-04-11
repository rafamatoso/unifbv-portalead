import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Perfil } from '../pages/Perfil';
import MenuSuperior from '../components/NavBar';
import AddVideo from '../pages/AddVideo';

export const Routes = () => (
  <BrowserRouter>
    <Route path="/dashboard" component={MenuSuperior} />

    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard/perfil" exact component={Perfil} />
      <Route path="/dashboard/addVideo" exact component={AddVideo} />
    </Switch>
  </BrowserRouter>
)
