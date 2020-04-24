import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import Route from "./routeWrapper";

import { Home, ListCourse, AddCourse, AddVideo } from "../pages";

import { NavBar } from '../components';
import NotFound from '../pages/NotFound';

export const Routes = () => (
  <BrowserRouter>
    <Route path='/dashboard' component={NavBar} isPrivate />
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/dashboard/courses" exact component={ListCourse} isPrivate />
      <Route path="/dashboard/addcourse/" exact component={AddCourse} isPrivate />
      <Route path="/dashboard/addvideo" exact component={AddVideo} isPrivate />
      <Route path="*" component={NotFound} />
    </Switch>

  </BrowserRouter>
);
