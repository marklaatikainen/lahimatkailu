import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { setLanguage } from 'redux-i18n';
import { Navigator } from './_components/navigator';

class ConnectedApp extends Component {
  componentDidMount() {
    AsyncStorage.getItem('lang', (err, result) => {
      if (result !== null) {
        this.props.dispatch(setLanguage(result));
      } else {
        this.props.dispatch(setLanguage('fi'));
      }
    });
  }

  render() {
    return <Navigator {...this.props} />;
  }
}

const mapStateToProps = state => ({
  lang: state.i18nState.lang
});

export default connect(mapStateToProps)(ConnectedApp);
