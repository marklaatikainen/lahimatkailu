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
    width: 50,
    marginTop: 3,
    marginLeft: 0
  },
  iconInfoRow: {
    flexDirection: 'row',
    marginBottom: 16
  },
  icon: {
    width: 32,
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
    textWrap: 'wrap',
    marginTop: 6,
    marginLeft: 5
  },
  topBar: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row'
  }
});
