import { Linking } from 'react-native';

export function openMap(coordinates) {
  const { latitude, longitude } = coordinates;

  Linking.openURL(`http://maps.google.com/maps?daddr=${latitude},${longitude}`);
}

export function isFacebook(arr) {
  if (arr) {
    return arr.some(x => x.indexOf('facebook') > -1);
  }
  return false;
}

export function isInsta(arr) {
  if (arr) {
    return arr.some(x => x.indexOf('instagram') > -1);
  }
  return false;
}

export function facebookUrl(arr) {
  return arr[arr.findIndex(v => v.contains('facebook'))];
}

export function instaUrl(arr) {
  return arr[arr.findIndex(v => v.contains('instagram'))];
}
