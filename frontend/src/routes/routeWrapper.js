import React from "react";

import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const user = useSelector((state) => state.user);

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

export default RouteWrapper;
