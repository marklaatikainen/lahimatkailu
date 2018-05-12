/* eslint-disable  */
import React, { Component } from 'react';
import { BackHandler, ToastAndroid, Dimensions, AsyncStorage, DeviceEventEmitter } from 'react-native';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { setLanguage } from 'redux-i18n';

import { MapComponent, filter } from '../map';
import { dataActions, dimensionsActions, userlocationActions, iconActions } from '../../_actions';

class MapContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { region } = this.props.region;

    BackHandler.addEventListener('hardwareBackPress', this.androidBackHandler);
    Dimensions.addEventListener('change', () => dispatch(dimensionsActions.getDimensions()));

    AsyncStorage.getItem('lang', (err, result) => {
      if (result !== null) {
        dispatch(setLanguage(result));
      } else {
        dispatch(setLanguage('fi'));
      }
    });

    navigator.geolocation.getCurrentPosition(e =>
      dispatch(userlocationActions.updateLocation(e.coords), error => alert(error.message), {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      })
    );
    this.watchID = navigator.geolocation.watchPosition(position => {
      dispatch(userlocationActions.updateLocation(position.coords));
    });

    dispatch(dataActions.fetchData());
    dispatch(iconActions.fetchIcons());
    dispatch(dataActions.fetchDataByLocation(region));
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
    BackHandler.removeEventListener('hardwareBackPress', this.androidBackHandler);
    Dimensions.removeEventListener('change');
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
    return <MapComponent {...this.props} />;
  }
}

const mapStateToProps = state => ({
  data: filter(state.locationdata.data, state.checkbox),
  dimensions: state.dimensions,
  region: state.region,
  userlocation: state.userlocation,
  checkbox: state.checkbox
});

MapContainer.contextTypes = {
  t: PropTypes.func.isRequired
};

MapContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  region: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(MapContainer);
