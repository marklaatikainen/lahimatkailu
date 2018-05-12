/* eslint-disable react-native/split-platform-components */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Image, ToastAndroid } from 'react-native';

import logo from '../../../images/feature_graphic.jpg';
import { styles } from '../permissions';
import { requestLocationPermission } from '../../_helpers';

import startNavigation from '../navigator/navigator.register';

export default class PermissionsComponent extends Component {
  componentDidMount() {
    const title = this.context.t('permTitle');
    const message = this.context.t('permMessage');

    requestLocationPermission(title, message).then(res => {
      if (res) {
        startNavigation();
      } else {
        ToastAndroid.show(this.context.t('whithoutPerm'), ToastAndroid.LONG);
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

PermissionsComponent.contextTypes = {
  t: PropTypes.func.isRequired
};
