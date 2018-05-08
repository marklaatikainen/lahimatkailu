/* eslint-disable react-native/split-platform-components */
/* eslint-disable no-undef */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { AsyncStorage, BackHandler, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { setLanguage } from 'redux-i18n';

import { Settings } from '../settings';

class SettingsContainer extends Component {
  state = {
    language: 'fi'
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.androidBackHandler);
    this.getLanguage();
  }

  getLanguage() {
    AsyncStorage.getItem('lang', (err, result) => {
      this.setState({
        language: result !== null ? result : 'fi'
      });
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.androidBackHandler
    );
  }

  _backPress = 0;

  androidBackHandler = () => {
    setTimeout(() => {
      this._backPress = 0;
    }, 1000);

    this._backPress += 1;
    if (this._backPress <= 1) {
      ToastAndroid.show(this.context.t('closeApp'), ToastAndroid.SHORT);
      return true;
    }
    return false;
  };

  render() {
    return (
      <Settings
        {...this.props}
        language={this.state.language}
        changeLanguage={newLang => {
          this.props.dispatch(setLanguage(newLang));
          AsyncStorage.setItem('lang', newLang);
          this.getLanguage();
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  lang: state.i18nState.lang,
  navigation: state.navigation
});

SettingsContainer.contextTypes = {
  t: PropTypes.func.isRequired
};

SettingsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(SettingsContainer);
