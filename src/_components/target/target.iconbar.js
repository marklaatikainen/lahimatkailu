import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { styles, AccessibilityIcon } from '../target';

export class IconBar extends Component {
  render() {
    return (
      <View style={styles.icons}>
        <AccessibilityIcon name="wheelchair" text={this.context.t('accessible')} />
        <AccessibilityIcon name="clock-o" text={this.context.t('alwaysopen')} />
        <AccessibilityIcon name="car" text={this.context.t('parking')} />
        <AccessibilityIcon name="paw" text={this.context.t('pets')} />
      </View>
    );
  }
}

IconBar.contextTypes = {
  t: PropTypes.func.isRequired
};
