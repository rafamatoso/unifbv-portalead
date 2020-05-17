import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const user = useSelector((state) => state.user);

  console.log(user);

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
