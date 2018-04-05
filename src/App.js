import React, { Component } from 'react';
import { AppRegistry, View, Text, StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import { Navigator } from './_components/navigator/navigator.component';

import { store } from './_helpers';

class App extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <Provider style={{ flex: 1 }} store={store}>
        <Navigator {...this.props} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Lähimatkailu', () => App);

export default App;