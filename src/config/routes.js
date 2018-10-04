import React       from 'react';
import { connect } from 'react-redux';
import {
  SignIn, SignUp
}                  from '../scenes';

import { Redirect } from 'react-router-dom';

const mapStateToProps = ({ auth: { logged, profile, user } }) => (
    {
      logged,
      profile,
      user
    }
);

export const PrivateRoute = WrappedComponent => connect(mapStateToProps)(
    ({ logged, ...rest }) => logged === true
        ? <WrappedComponent { ...rest } />
        : <Redirect to="/login" />);

export const NotFound = () => (
    <Redirect to="/" />
);

const routes = [{
  path: '/',
  component: PrivateRoute(SignIn),
  exact: true
}, {
  path: '/login',
  component: SignIn,
  exact: true
}, {
  path: '/sign-up',
  component: SignUp,
  exact: true
}, {
  component: NotFound
}];

export default routes;
