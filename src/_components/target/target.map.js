import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MapView, { Marker } from 'react-native-maps';

import { styles } from '../target';

export class TargetMap extends Component {
  render() {
    const { target } = this.props.target;
    return (
      <MapView
        style={styles.map}
        scrollEnabled={false}
        zoomEnabled={false}
        pitchEnabled={false}
        rotateEnabled={false}
        initialRegion={{
          latitude: target.location.latitude,
          longitude: target.location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <Marker
          coordinate={{
            latitude: target.location.latitude,
            longitude: target.location.longitude
          }}
        />
      </MapView>
    );
  }
}

TargetMap.propTypes = {
  target: PropTypes.object.isRequired
};
