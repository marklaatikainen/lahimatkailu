import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Image } from 'react-native';
import { Marker } from 'react-native-maps';

import { styles, markerImgUrl, MapMarkerCallout } from '../map';
import { targetActions } from '../../_actions';

export class MapMarker extends Component {
  handleCalloutPress(data) {
    this.props.dispatch(targetActions.openTarget(data));
  }

  render() {
    const { data } = this.props;
    const { location } = this.props.userlocation;
    return (
      <Marker
        coordinate={data.location}
        onCalloutPress={() => this.handleCalloutPress(data)}
      >
        <Image style={styles.image} source={{ uri: markerImgUrl(data.type) }} />
        <MapMarkerCallout {...this.props} location={location} />
      </Marker>
    );
  }
}

MapMarker.propTypes = {
  data: PropTypes.object.isRequired,
  userlocation: PropTypes.object.isRequired
};
