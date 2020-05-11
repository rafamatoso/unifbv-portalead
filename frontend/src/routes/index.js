import React from 'react';
import { Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Route from './routeWrapper';

import { Home, ListCourse, AddCourse, ListVideo, AddVideo } from '../pages';

import { NavBar } from '../components';
import NotFound from '../pages/NotFound';

export const Routes = () => (
  <BrowserRouter>
    <Route path="/dashboard" component={NavBar} isPrivate />
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/dashboard/courses" exact component={ListCourse} isPrivate />
      <Route
        path="/dashboard/addcourse/"
        exact
        component={AddCourse}
        isPrivate
      />
      <Route
        path="/dashboard/courses/:id/listVideo"
        exact
        component={ListVideo}
        isPrivate
      />
      <Route
        path="/dashboard/courses/:id/addvideo/:idVideo?"
        exact
        component={AddVideo}
        isPrivate
      />

      <Route path="/" exact component={() => <Redirect to="/home" />} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);
