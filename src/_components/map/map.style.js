import { StyleSheet, Dimensions } from 'react-native';

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
    featureType: 'transit',
    stylers: [
      {
        weight: 1
      }
    ]
  }
];

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
    width: 200,
    height: 100,
    borderRadius: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.6)'
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
    borderColor: 'white',
    justifyContent: 'center',
    backgroundColor: '#74A335',
    borderRadius: 20
  },
  myClusterTextStyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  }
});