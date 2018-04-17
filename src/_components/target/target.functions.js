import { Linking } from 'react-native';

export function openMap(coordinates) {
  const { latitude, longitude } = coordinates;

  Linking.openURL(
    'http://maps.google.com/maps?daddr=' + latitude + ',' + longitude
  );
}
