import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Perfil } from '../pages/Perfil';
import AddVideo from '../pages/AddVideo';

import { NavBar } from '../components/NavBar';


export const Routes = () => (
  <BrowserRouter>
    <Route path="/dashboard" component={NavBar} />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard/perfil" exact component={Perfil} />
      <Route path="/dashboard/addVideo" exact component={AddVideo} />

    </Switch>
  </BrowserRouter>
);
