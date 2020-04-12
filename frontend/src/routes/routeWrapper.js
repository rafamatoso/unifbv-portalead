import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { connect } from '../store';

function RouteWrapper({ component: Component, isPrivate, store, ...rest }) {
  const { user } = store;
  const { path } = rest;
  console.log(user);
  console.log(path);
  console.log(rest);
  
  if (!user) {
    return <Redirect to="/home" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default connect(RouteWrapper);
