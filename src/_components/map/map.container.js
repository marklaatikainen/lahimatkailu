/* eslint-disable react-native/split-platform-components  */
/* eslint-disable no-undef  */
import React, { Component } from 'react';
import { BackHandler, ToastAndroid, Dimensions, AsyncStorage } from 'react-native';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { setLanguage } from 'redux-i18n';

import { MapComponent, filter } from '../map';
import { dataActions, dimensionsActions, userlocationActions, iconActions, targetActions } from '../../_actions';

class MapContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    // const { region } = this.props.region;

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
      dispatch(
        userlocationActions.updateLocation(e.coords),
        error => { // eslint-disable-line
          // ToastAndroid.show(error.message, ToastAndroid.LONG);
        },
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000
        }
      )
    );
    this.watchID = navigator.geolocation.watchPosition(position => {
      dispatch(userlocationActions.updateLocation(position.coords));
    });

    dispatch(dataActions.fetchData());
    dispatch(iconActions.fetchIcons());
    // dispatch(dataActions.fetchDataByLocation(region));
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
    BackHandler.removeEventListener('hardwareBackPress', this.androidBackHandler);
    Dimensions.removeEventListener('change');
  }

  _backPress = 0;

  androidBackHandler = () => {
    const { dispatch, navigation, target } = this.props;
    const { index } = navigation;

    if ((index === 1 && target.mapPageTarget) || (index === 2 && target.listPageTarget)) {
      dispatch(index === 1 ? targetActions.closeMapTarget() : targetActions.closeListTarget());
      return true;
    }

    setTimeout(() => {
      this._backPress = 0;
    }, 1500);

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
  data: filter(state.alldata.data, state.checkbox),
  dimensions: state.dimensions,
  region: state.region,
  userlocation: state.userlocation,
  checkbox: state.checkbox,
  navigation: state.navigation,
  target: state.target
});

MapContainer.contextTypes = {
  t: PropTypes.func.isRequired
};

MapContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  region: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  target: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(MapContainer);
