import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import { targetActions } from '../../_actions';
import { styles } from '../target';

export class TargetTopbar extends Component {
  render() {
    const { dispatch, navigation } = this.props;

    return (
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() =>
            dispatch(navigation.index === 1 ? targetActions.closeMapTarget() : targetActions.closeListTarget())
          }
        >
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.topBarText}>{this.context.t('target')}</Text>
      </View>
    );
  }
}

TargetTopbar.contextTypes = {
  t: PropTypes.func.isRequired
};

TargetTopbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};
