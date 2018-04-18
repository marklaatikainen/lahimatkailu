import { StyleSheet } from 'react-native';
import { black, white } from '../../_helpers';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    top: 0,
    height: 130,
    paddingTop: 7,
    paddingBottom: 7,
    paddingRight: 10,
    backgroundColor: white,
    opacity: 0.75,
    borderRadius: 5,
    elevation: 3
  },
  label: {
    opacity: 1,
    color: black
  }
});
