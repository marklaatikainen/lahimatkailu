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
    fontSize: 16
  },
  iconInfoView: {
    marginLeft: 17,
    justifyContent: 'flex-end'
  },
  icon: {
    width: 60,
    height: 60
  }
});
