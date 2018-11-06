import React       from 'react';
import { connect } from 'react-redux';
import {
  SignIn, SignUp,
}                  from '../scenes';

import { Redirect } from 'react-router-dom';

const mapStateToProps = ({ auth }) => ({
  auth,
});

export const privateRoute = WrappedComponent => connect(mapStateToProps)(
  ({ auth, ...rest }) => (auth.logged === true
      ? <WrappedComponent auth={ auth } { ...rest } />
      : <Redirect to="/login" />
  ),
);

export const withLayout = WrappedComponent => (
  props => (
    <Layout { ...props }>
      { layoutProps => <WrappedComponent { ...layoutProps } /> }
    </Layout>
  )
);

export const RouteWithSubRoutes = route => (
  <Route
    path={ route.path }
    exact={ route.exact }
    render={ props => (
      <route.component { ...props } { ...route } />
    ) }
  />
);

export const NotFound = () => (
  <Redirect to="/" />
);

const routes = [
  {
    path: '/',
    component: privateRoute(SignIn),
    exact: true,
  }, {
    path: '/login',
    component: SignIn,
    exact: true,
  }, {
    path: '/sign-up',
    component: SignUp,
    exact: true,
  }, {
    component: NotFound,
  },
];

export default routes;
