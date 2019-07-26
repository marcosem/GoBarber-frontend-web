// This Route is used as replacemente of the Route from react-router-dom
// so you can manage permissions for specifics routes.
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouterWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false; // Is logged or not?

  // if this is private route and user is not logged, redirect to login
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // if this is not a private route and the user is logged, redirect to dashboard
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} component={Component} />;
}

RouterWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouterWrapper.defaultProps = {
  isPrivate: false,
};
