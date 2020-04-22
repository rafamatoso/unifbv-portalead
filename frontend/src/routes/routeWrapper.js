import React from "react";

import { Route } from "react-router-dom";
import { connect } from "../store";

function RouteWrapper({ component: Component, isPrivate, store, ...rest }) {
  const { user } = store;

  if (isPrivate) {
    if (user) {
      return <Route {...rest} component={Component} />;
    }
  } else {
    return <Route {...rest} component={Component} />;
  }
}

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default connect(RouteWrapper);
