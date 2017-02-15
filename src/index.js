import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
// import 
import App from './components/Main';

const routes = {
  path: '/',
  component: App,
  indexRoute: {
    component: Welcome
  },
  childRoutes: [
    {
      path: 'profile',
      component: Profile,
    },
    {
      path: 'campaign',
      component: Campaign,
    },
    {
      path: 'counter',
      component: Counter,
    },
    {
      path: 'charts',
      component: Charts,
    },
    {
      path: 'last',
      component: Last,
    },
    {
      path: '/404',
      component: NotFoundPage,
    }
  ]
};

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
