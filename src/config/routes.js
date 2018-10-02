import React       from 'react';
import { connect } from 'react-redux';
import {
  SignIn, SignUp, ForgotPassword
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
    ({ logged, ...rest }) => logged === true ? <WrappedComponent { ...rest } /> :
        <Redirect to="/login" />);

export const NotFound = () => (
    <Redirect to="/" />
);

const routes = [{
  path: '/login',
  component: SignIn,
  exact: true
}, {
  path: '/sign-up',
  component: SignUp,
  exact: true
}, {
  path: '/forgot-password',
  component: ForgotPassword,
  exact: true
}, {
  component: NotFound
}];

export default routes;
