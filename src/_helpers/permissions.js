/* eslint-disable react-native/split-platform-components */

import { PermissionsAndroid, ToastAndroid } from 'react-native';

export async function requestLocationPermission(context) {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
      title: context.t('permTitle'),
      message: context.t('permMessage')
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
