import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import configureStore from './store/index.js';

import { Router, Scene } from 'react-native-router-flux';

import LoginPage from './containers/LoginPage.js';

const store = configureStore({}); // passing an empty object.

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Scene key="root">
          <Scene
            key="login"
            component={LoginPage}
            title="Login Page"
            hideNavBar={true}
            initial
          />
        </Scene>
      </Router>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;