import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

export default class App extends Component {
  render() {
  return (
      <>
        <StatusBar barStyle='light-content' backgroundColor='#8B10AE' />
        <Routes />
      </>
  );
  }
}
