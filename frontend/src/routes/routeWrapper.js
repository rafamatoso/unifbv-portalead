import React from "react";

import { Route, Redirect } from "react-router-dom";
import { connect } from "../store";

function RouteWrapper({ component: Component, isPrivate, store, ...rest }) {
  const { user } = store;
  const { path } = rest;

  if (isPrivate) {
    if (user) {
      return <Route {...rest} component={Component} />;
    }
  } else {
    return <Route {...rest} component={Component} />;
  }
  return <Redirect to="/home" />;
}

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default connect(RouteWrapper);
