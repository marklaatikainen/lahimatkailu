import { StyleSheet } from 'react-native';
import { appgreen, grey, white } from '../../_helpers';

export const styles = StyleSheet.create({
   container: {
    backgroundColor: appgreen,
    height: 500,
    overflow: 'hidden',
    alignItems: 'center',
    zIndex: 99999999999
   },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  modal: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: appgreen,
    backgroundColor: white,
    height: '70%',
    width: '70%',
    left: '15%',
    top: '10%'
  },
  cancel: {
    color: appgreen,
    marginTop: 10,
    marginLeft: 10
  }
})