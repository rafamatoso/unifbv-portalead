import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './routeWrapper';

import { Home } from '../pages/Home';
import Perfil from '../pages/Perfil';
import AddVideo from '../pages/AddVideo';

import { NavBar } from '../components/NavBar';

export const Routes = () => (
  <BrowserRouter>
    {/* <Route path="/dashboard" component={NavBar} /> */}
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/dashboard/perfil" exact component={Perfil} isPrivate />
      <Route path="/dashboard/addVideo" exact component={AddVideo} isPrivate />
    </Switch>
  </BrowserRouter>
);
