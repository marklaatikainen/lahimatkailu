import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    // width: Dimensions.get('screen').width
  },
  searchContainer: {
    // width: Dimensions.get('window').width - 60,
    marginTop: 0,
    paddingTop: 0,
    backgroundColor: 'white'
  },
  searchBar: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'green'
  },
  button: {
    backgroundColor: 'white',
    width: buttonWidth,
    paddingTop: 10,
    paddingLeft: 10
  }
});

export const buttonWidth = 60;