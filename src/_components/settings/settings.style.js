import { StyleSheet } from 'react-native';
import { red06, grey, disabled, white, red, blue } from '../../_helpers';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },
  text: {
    color: red
  },
  switchEnabled: {
    color: red
  },
  switchDisabled: {
    color: grey
  },
  switchOnTintColor: {
    color: red06
  },
  blueGem: {
    color: blue
  },
  version: {
    color: disabled,
    marginTop: 7,
    marginLeft: 17,
    marginBottom: 7,
    fontSize: 16
  },
  iconInfoView: {
    marginTop: 17,
    marginLeft: 17,
    flex: 1
  },
  iconInfoHeading: {
    fontSize: 16,
    marginBottom: 16
  },
  iconInfoRow: {
    flexDirection: 'row',
    marginBottom: 16
  },
  iconContainer: {
    marginRight: 16
  },
  icon: {
    width: 32,
    height: 32
  },
  textContainer: {
    justifyContent: 'center'
  },
  iconText: {
    fontSize: 14
  }
});
