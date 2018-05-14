/* eslint-disable react-native/split-platform-components */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Image, ToastAndroid } from 'react-native';

import logo from '../../../images/feature_graphic.jpg';
import { styles } from '../welcome';
import { requestLocationPermission } from '../../_helpers';

import startNavigation from '../navigator/navigator.register';

export default class WelcomeScreen extends Component {
  componentDidMount() {
    requestLocationPermission(this.context).then(res => {
      if (res) {
        startNavigation();
      } else {
        ToastAndroid.show(this.context.t('withoutPerm'), ToastAndroid.LONG);
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

WelcomeScreen.contextTypes = {
  t: PropTypes.func.isRequired
};
