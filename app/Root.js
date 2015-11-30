import React, { Component, PropTypes } from 'react';
import { Redirect, Route } from 'react-router';
import { ReduxRouter } from 'redux-router';
import { connect } from 'react-redux';
import Jlorenc from './containers/jlorenc';
import * as constants from './constants/constants';
import * as storage from './persistance/storage';
import configureStore from './utils/configureStore';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { createStore } from 'redux';
import { IntlProvider } from 'react-intl'
import reducers from './reducers/application';
import * as i18n from "./i18n";
const initialState = {
  application: {
    locale: storage.get('locale') || 'en',
    user: {permissions: [/*'manage_account'*/]}
  }
};

export const store = configureStore(initialState);

function getRootChildren (props) {

  const rootChildren = [
      renderRoutes()

  ];

  return rootChildren;
}

function renderRoutes () {
  return (
    <ReduxRouter>
      <Route component={Jlorenc}>
        <Route path="/" component={Jlorenc} />
      </Route>
    </ReduxRouter>
  )
};

@connect(({ application }) => ({ application }))
export default class Root extends Component{

  render(){

    return (

    <div>
<div>{getRootChildren(this.props)}</div>
       </div>
  )

  }


}
