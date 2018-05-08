import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from '../info';

export const IconInfo = props => (
  <View style={styles.iconInfoRow}>
    <View style={styles.iconContainer}>
      <Icon style={styles.icon} name={props.item} size={24} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.iconText}>{props.text}</Text>
    </View>
  </View>
);

IconInfo.propTypes = {
  text: PropTypes.string,
  item: PropTypes.string
};
