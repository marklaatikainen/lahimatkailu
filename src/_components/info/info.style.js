import { StyleSheet } from 'react-native';
import { appgreen, white } from '../../_helpers';

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
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 3,
    borderColor: appgreen,
    backgroundColor: white,
    height: '70%',
    width: '90%',
    left: '5%'
  },
  cancel: {
    color: appgreen,
    marginTop: 3,
    marginLeft: 5
  },
  iconInfoRow: {
    flexDirection: 'row',
    marginBottom: 16
  },
  icon: {
    width: 50,
    height: 32
  },
  textContainer: {
    justifyContent: 'center'
  },
  iconsContainer: {
    marginTop: 30,
    marginLeft: 10
  },
  iconLegend: {
    fontSize: 20,
    marginTop: 5,
    marginLeft: 30
  }
});
