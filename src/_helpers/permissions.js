import { PermissionsAndroid } from 'react-native'; // eslint-disable-line

export async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
      title: 'Lähimatkailu Sijaintitiedot',
      message: 'Lähimatkailusovellus käyttää paikannustietoja kohteiden etäisyyksien laskemiseen.'
    });
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }
    return false;
  } catch (err) {
    console.warn(err); // eslint-disable-line
  }
  return false;
}
