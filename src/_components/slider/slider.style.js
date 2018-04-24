import { StyleSheet } from 'react-native';
import { appgreen, grey } from '../../_helpers';

export const styles = StyleSheet.create({
  container: {
    width: '95%',
    justifyContent: 'center'
  },
  sliderContainerStyle: {
    height: 30,
    marginLeft: '10%'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  slider: {
    marginTop: 10
  },
  track: {
    height: 6
  },
  markerStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: appgreen,
    borderWidth: 1,
    backgroundColor: grey
  },
  pressedMarkerStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: appgreen,
    borderWidth: 1,
    backgroundColor: appgreen
  },
  selectedStyle: {
    backgroundColor: appgreen
  },
  unselectedStyle: {
    backgroundColor: grey
  }
});
