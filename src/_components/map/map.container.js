import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { DeviceEventEmitter } from 'react-native';
import RNALocation from 'react-native-android-location';
import { connect } from 'react-redux';

import { MapComponent, filter } from '../map';
import {
  dataActions,
  regionActions,
  userlocationActions
} from '../../_actions';

class MapContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { region } = this.props.region;

    DeviceEventEmitter.addListener(
      'updateLocation',
      function(e) {
        dispatch(userlocationActions.updateLocation(e));
      }.bind(this)
    );

    RNALocation.getLocation();

    dispatch(dataActions.fetchData());
    dispatch(dataActions.fetchDataByLocation(region));
  }

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

MapContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  region: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(MapContainer);
