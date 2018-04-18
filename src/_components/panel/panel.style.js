import { StyleSheet } from 'react-native';
import { transparent } from '../../_helpers';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: transparent,
    marginTop: 10,
    overflow: 'hidden',
    zIndex: 9999999
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  button: {
    marginRight: 10
  },
  body: {
    alignItems: 'flex-end',
    paddingTop: 10
  }
});
