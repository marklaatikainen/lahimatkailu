import { StyleSheet, Dimensions } from 'react-native';
import { white, appgreen } from '../../_helpers';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    alignItems: 'center',
    paddingTop: 0
  },
  callout: {
    flex: 1,
    width: 200,
    backgroundColor: white
  },
  image: {
    width: 32,
    height: 32
  },
  myClusterStyle: {
    borderWidth: 3,
    width: 40,
    height: 40,
    alignItems: 'center',
    borderColor: white,
    justifyContent: 'center',
    backgroundColor: appgreen,
    borderRadius: 20
  },
  myClusterTextStyle: {
    fontSize: 16,
    color: white,
    fontWeight: 'bold'
  }
});

export const customMapStyle = [
  {
    featureType: 'poi',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi.park',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'poi.business',
    stylers: [{ visibility: 'off' }]
  },
  {
    featureType: 'transit',
    stylers: [
      {
        weight: 1
      }
    ]
  }
];
