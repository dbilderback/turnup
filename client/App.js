import React, { Component } from 'react';
import { SwitchNavigator } from 'react-navigation'; // Version can be specified in package.json
import MainPage from './MainPage';
import AuthPage from './components/Auth.js';

const Nav = SwitchNavigator({
  App: MainPage,
  Auth: AuthPage,
}, {
    initialRouteName: 'Auth',
  }
);

export default class App extends Component {
  render() {
    return (
      <Nav />
    )
  }
}