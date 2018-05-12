/* eslint-disable react-native/split-platform-components */

import { PermissionsAndroid, ToastAndroid } from 'react-native';

export async function requestLocationPermission(title, message) {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
      title: title,
      message: message
    });
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }
    return false;
  } catch (err) {
    ToastAndroid.show(err.message, ToastAndroid.LONG);
  }
  return false;
}
