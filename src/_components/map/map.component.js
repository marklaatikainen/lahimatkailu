import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View } from 'react-native';

import { styles, ClusteredMap } from '../map';

export class MapComponent extends Component {
  render() {
    const { region } = this.props.region;
    const { data } = this.props.data;

    return (
      <View style={styles.container}>
        <ClusteredMap {...this.props} region={region} data={data} />
      </View>
    );
  }
}

MapComponent.propTypes = {
  dimensions: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  region: PropTypes.object.isRequired
};
