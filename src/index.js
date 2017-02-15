import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import App from './components/Main';

import Welcome from './Welcome/Welcome';
import Profile from './profile/Profile';
import Campaign from './Campaign/Campaign';
import Counter from './counter/Counter';
import Charts from './Charts/Charts';
import Last from './last/Last';
import NotFoundPage from './nofind/NotFindPage';
import Login from './login/Login';

const routes = {
  path: '/',
  component: App,
  indexRoute: {
    component: Welcome
  },
  childRoutes: [
    {
      path: 'profile',
      component: Profile
    },
    {
      path: 'campaign',
      component: Campaign
    },
    {
      path: 'counter',
      component: Counter
    },
    {
      path: 'charts',
      component: Charts
    },
    {
      path: 'last',
      component: Last
    },
    {
      path: '/404',
      component: NotFoundPage
    },
    {
      path: '*',
      onEnter: ({ params }, replace) => replace('/404')
    }
  ]
};

const login = {
  path: '/login',
  component: Login
};


// Render the main component into the dom
ReactDOM.render(
  <Router routes={[login, routes]} history={browserHistory} />
  , document.getElementById('app')
);
