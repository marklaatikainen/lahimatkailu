import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import TargetMapContainer from './target.map.container';
import {
  styles,
  TargetTextArea,
  CustomCarousel,
  ActionButtonContainer
} from '../target';

export class Target extends Component {
  render() {
    const { target } = this.props.target;
    const { dimensions } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <CustomCarousel target={target} dimensions={dimensions} />
          <TargetTextArea data={target} />
          <TargetMapContainer />
        </ScrollView>
        <ActionButtonContainer location={target.location} />
      </View>
    );
  }
}

Target.contextTypes = {
  t: PropTypes.func.isRequired
};

Target.propTypes = {
  target: PropTypes.object.isRequired,
  dimensions: PropTypes.object.isRequired
};
