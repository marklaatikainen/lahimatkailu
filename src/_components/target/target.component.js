import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import TargetMapContainer from './target.map.container';
import {
  styles,
  TargetTextArea,
  CustomCarousel,
  ActionButtonContainer,
  TargetTopbar
} from '../target';

export class Target extends Component {
  render() {
    const { mapPageTarget, listPageTarget } = this.props.target;
    const { dimensions, navigation } = this.props;
    let rightTarget = navigation.index === 1 ? mapPageTarget : listPageTarget;
    if (!rightTarget) {
      rightTarget = mapPageTarget ? mapPageTarget : listPageTarget;
    }

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <TargetTopbar {...this.props} {...this.context} />
          <CustomCarousel target={rightTarget} dimensions={dimensions} />
          <TargetTextArea data={rightTarget} />
          <TargetMapContainer />
        </ScrollView>
        <ActionButtonContainer location={rightTarget.location} />
      </View>
    );
  }
}

Target.contextTypes = {
  t: PropTypes.func.isRequired
};

Target.propTypes = {
  target: PropTypes.object.isRequired,
  dimensions: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};
