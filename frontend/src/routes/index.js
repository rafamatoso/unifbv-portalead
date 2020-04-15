import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import Route from "./routeWrapper";

import { Home, AddVideo, Perfil, ListCourse } from "../pages";

import { NavBar } from "../components";

export const Routes = () => (
  <BrowserRouter>
    <Route path="/dashboard" component={NavBar} isPrivate />

    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/dashboard/perfil" exact component={Perfil} isPrivate />
      <Route path="/dashboard/addVideo" exact component={AddVideo} isPrivate />
      <Route path="/dashboard/courses" exact component={ListCourse} isPrivate />
    </Switch>
  </BrowserRouter>
);
