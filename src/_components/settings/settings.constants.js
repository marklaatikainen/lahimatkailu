import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../settings';

export const IconSymbol = props => (
  <View style={styles.iconInfoRow}>
    <View style={styles.iconContainer}>
      <Icon style={styles.icon} name={props.name} size={24} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.iconText}>{props.translation}</Text>
    </View>
  </View>
);

IconSymbol.propTypes = {
  name: PropTypes.string,
  translation: PropTypes.string
};
