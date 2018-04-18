import { StyleSheet } from 'react-native';
import { white, appgreen, transparent } from '../../_helpers';

export const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: appgreen
  },
  icon: {
    backgroundColor: transparent,
    color: white
  },
  backIcon: {
    marginLeft: 5
  },
  topBar: {
    backgroundColor: appgreen,
    height: 32
  },
  topBarText: {
    position: 'absolute',
    top: 5,
    fontWeight: 'bold',
    left: '20%',
    fontSize: 14,
    color: white
  },
  openmap: {
    position: 'absolute',
    top: 5,
    right: 10
  }
});
