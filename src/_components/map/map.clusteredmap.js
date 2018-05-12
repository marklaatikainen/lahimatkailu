import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { PropTypes } from 'prop-types';
import { Marker } from 'react-native-maps';
import ClusteredMapView from 'react-native-maps-super-cluster';

import { styles, customMapStyle, MapMarker } from '../map';
import { regionActions, dataActions } from '../../_actions';

export class ClusteredMap extends Component {
  renderMarker = data => <MapMarker {...this.props} key={data._id} data={data} />;

  /* eslint-disable sort-vars */

  renderCluster = (cluster, onPress) => {
    const pointCount = cluster.pointCount,
      coordinate = cluster.coordinate,
      clusterId = cluster.clusterId;

    const clusteringEngine = this.map.getClusteringEngine(),
      clusteredPoints = clusteringEngine.getLeaves(clusterId, 100); // eslint-disable-line

    return (
      <Marker coordinate={coordinate} onPress={onPress}>
        <View style={styles.myClusterStyle}>
          <Text style={styles.myClusterTextStyle}>{pointCount}</Text>
        </View>
      </Marker>
    );
  };

  render() {
    const { dispatch, dimensions, region } = this.props;
    const { data } = this.props;
    return (
      <View>
        {data && (
          <ClusteredMapView
            customMapStyle={customMapStyle}
            style={styles.map}
            width={dimensions.screenWidth}
            height={dimensions.screenHeight}
            data={data}
            initialRegion={region}
            onRegionChangeComplete={reg => {
              dispatch(regionActions.setRegion(reg));
              dispatch(dataActions.fetchDataByLocation(region));
            }}
            ref={r => {
              this.map = r;
            }}
            renderMarker={this.renderMarker}
            renderCluster={this.renderCluster}
            showsMyLocationButton={false}
            showsUserLocation={true}
            minZoom={5}
            maxZoom={10}
            showInfoWindow={true}
            preserveClusterPressBehavior
          />
        )}
      </View>
    );
  }
}

ClusteredMap.defaultProps = {
  data: []
};

ClusteredMap.propTypes = {
  dimensions: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  region: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};
