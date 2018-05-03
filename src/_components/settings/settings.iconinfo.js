import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Text, Image, View } from 'react-native';
import { styles } from '../settings';
import { foodIcon, serviceIcon, sightIcon } from '../../_helpers';

export class IconInfo extends Component {
  render() {
    return (
      <View style={styles.iconInfoView}>
        <View>
          <Image style={styles.icon} source={{ uri: foodIcon }} />
          {this.context.t('food')}
        </View>

        <View>
          <Image style={styles.icon} source={{ uri: sightIcon }} />
          {this.context.t('sight')}
        </View>
        <View>
          <Image style={styles.icon} source={{ uri: serviceIcon }} />
          {this.context.t('service')}
        </View>
      </View>
    );
  }
}

IconInfo.contextTypes = {
  t: PropTypes.func.isRequired
};
