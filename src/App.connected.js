import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { setLanguage } from 'redux-i18n';
import { Navigator } from './_components/navigator';
import { Dimensions } from 'react-native';
import { dimensionsActions } from './_actions';

class ConnectedApp extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    AsyncStorage.getItem('lang', (err, result) => {
      if (result !== null) {
        dispatch(setLanguage(result));
      } else {
        dispatch(setLanguage('fi'));
      }
    });
    Dimensions.addEventListener('change', () => dispatch(dimensionsActions.getDimensions()))
  }

  render() {
    return <Navigator {...this.props} />;
  }
}

const mapStateToProps = state => ({
  lang: state.i18nState.lang
});

export default connect(mapStateToProps)(ConnectedApp);
