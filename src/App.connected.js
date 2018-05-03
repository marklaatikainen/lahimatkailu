import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { AsyncStorage, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { DeviceEventEmitter } from 'react-native';
import { setLanguage } from 'redux-i18n';
import Permissions from 'react-native-permissions';

import { Navigator } from './_components/navigator';
import { Dimensions } from 'react-native';
import {
  dimensionsActions,
  targetActions,
  userlocationActions
} from './_actions';

/* eslint-disable no-unused-expressions */

class ConnectedApp extends Component {
  state = {
    locationPermission: 'undetermined'
  };

  componentDidMount() {
    Permissions.check('location').then(response => {
      this.setState({ locationPermission: response }, () => {
        this.state.locationPermission !== 'authorized'
          ? this._requestPermission
          : null;
      });
    });

    const { dispatch } = this.props;
    // backhandler listener
    BackHandler.addEventListener('hardwareBackPress', this.androidBackHandler);
    // dimensions listener
    Dimensions.addEventListener('change', () =>
      dispatch(dimensionsActions.getDimensions())
    );
    // own location listener
    DeviceEventEmitter.addListener('updateLocation', e =>
      dispatch(userlocationActions.updateLocation(e))
    );
    AsyncStorage.getItem('lang', (err, result) => {
      if (result !== null) {
        dispatch(setLanguage(result));
      } else {
        dispatch(setLanguage('fi'));
      }
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.androidBackHandler
    );
  }

  _requestPermission = () => {
    Permissions.request('location', {
      rationale: {
        title: 'Lähimatkailu paikannuslupa',
        message: 'Sovellus tarvitsee luvan paikannustietojen käyttämiseen'
      }
    }).then(response => {
      this.setState({ locationPermission: response });
    });
  };

  androidBackHandler = () => {
    const { dispatch, navigation } = this.props;
    const { mapPageTarget, listPageTarget } = this.props.target;
    let rightTarget = navigation.index === 1 ? mapPageTarget : listPageTarget;
    if (!rightTarget) {
      rightTarget = mapPageTarget ? mapPageTarget : listPageTarget;
    }

    if (mapPageTarget || listPageTarget) {
      if (rightTarget && rightTarget._id) {
        dispatch(
          navigation.index === 1
            ? targetActions.closeMapTarget()
            : targetActions.closeListTarget()
        );
        return true;
      }
    }
    return false;
  };

  render() {
    return this.state.locationPermission === 'authorized' ? (
      <Navigator {...this.props} />
    ) : null;
  }
}

const mapStateToProps = state => ({
  target: state.target,
  lang: state.i18nState.lang,
  navigation: state.navigation
});

ConnectedApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  target: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(ConnectedApp);
