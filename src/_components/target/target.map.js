import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MapView, { Marker } from 'react-native-maps';

import { styles } from '../target';

export class TargetMap extends Component {
  render() {
    const { navigation } = this.props;
    const { mapPageTarget, listPageTarget } = this.props.target;
    let rightTarget = navigation.index === 1 ? mapPageTarget : listPageTarget;
    if (!rightTarget) {
      rightTarget = mapPageTarget ? mapPageTarget : listPageTarget;
    }

    return (
      <MapView
        style={styles.map}
        scrollEnabled={false}
        zoomEnabled={false}
        pitchEnabled={false}
        rotateEnabled={false}
        initialRegion={{
          latitude: rightTarget.location.latitude,
          longitude: rightTarget.location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <Marker
          coordinate={{
            latitude: rightTarget.location.latitude,
            longitude: rightTarget.location.longitude
          }}
        />
      </MapView>
    );
  }
}

TargetMap.propTypes = {
  target: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};
