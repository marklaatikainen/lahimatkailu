import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { setLanguage } from 'redux-i18n';

import { Settings } from '../settings';

class SettingsContainer extends Component {
  render() {
    return (
      <Settings
        {...this.props}
        changeLanguage={newLang => {
          this.props.dispatch(setLanguage(newLang), () => {
            AsyncStorage.setItem('lang', newLang);
          });
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  lang: state.i18nState.lang
});

export default connect(mapStateToProps)(SettingsContainer);
