import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Image } from 'react-native';
import { Marker } from 'react-native-maps';

import { styles, markerImgUrl, MapMarkerCallout } from '../map';
import { targetActions } from '../../_actions';

export class MapMarker extends Component {
  handleCalloutPress(data) {
    this.props.dispatch(targetActions.openMapTarget(data));
  }

  render() {
    const { data } = this.props;
    return (
      <Marker coordinate={data.location} onCalloutPress={() => this.handleCalloutPress(data)}>
        <Image style={styles.image} source={{ uri: markerImgUrl(data.type) }} />
        <MapMarkerCallout {...this.props} />
      </Marker>
    );
  }
}

MapMarker.propTypes = {
  data: PropTypes.object.isRequired,
  userlocation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};
