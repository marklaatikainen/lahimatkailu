import { StyleSheet } from 'react-native';
import { white, green } from '../../_helpers';

export const buttonWidth = 60;

export const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  searchContainer: {
    marginTop: 0,
    paddingTop: 0,
    backgroundColor: white
  },
  searchBar: {
    backgroundColor: white,
    borderWidth: 1,
    borderColor: green
  },
  button: {
    backgroundColor: white,
    width: buttonWidth,
    paddingTop: 10,
    paddingLeft: 10
  }
});
