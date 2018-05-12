import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Text, Image, View } from 'react-native';
import { styles } from '../settings';
import { foodIcon, serviceIcon, sightIcon } from '../../_helpers';

export class IconInfo extends Component {
  render() {
    return (
      <View style={styles.iconInfoView}>
        <Text style={styles.iconInfoHeading}>{this.context.t('iconLegend')}</Text>
        <View style={styles.iconInfoRow}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={{ uri: foodIcon }} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.iconText}>{this.context.t('food')}</Text>
          </View>
        </View>
        <View style={styles.iconInfoRow}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={{ uri: sightIcon }} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.iconText}>{this.context.t('sight')}</Text>
          </View>
        </View>
        <View style={styles.iconInfoRow}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={{ uri: serviceIcon }} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.iconText}>{this.context.t('service')}</Text>
          </View>
        </View>
      </View>
    );
  }
}

IconInfo.contextTypes = {
  t: PropTypes.func.isRequired
};
