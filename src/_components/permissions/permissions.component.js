/* eslint-disable react-native/split-platform-components */

import React, { Component } from 'react';
import { View, Image, ToastAndroid } from 'react-native';

import logo from '../../../images/feature_graphic.jpg';
import { styles } from '../permissions';
import { requestLocationPermission } from '../../_helpers';

import startNavigation from '../navigator/navigator.register';

export default class PermissionsComponent extends Component {
  componentDidMount() {
    requestLocationPermission().then(res => {
      if (res) {
        startNavigation();
      } else {
        ToastAndroid.show('Sovellus ei toimi ilman paikannustietoja.', ToastAndroid.LONG);
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={logo} />
      </View>
    );
  }
}
