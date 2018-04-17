import React, { Component } from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import I18n from 'redux-i18n';
import { translations } from './_helpers';
import ConnectedApp from './App.connected';
import { store } from './_helpers';
import { styles } from './App.style';

class App extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <Provider style={styles.container} store={store}>
        <I18n translations={translations} fallbackLang="fi">
          <ConnectedApp />
        </I18n>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Lähimatkailu', () => App);

export default App;
