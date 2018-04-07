import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading: {
    marginTop: 180,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 15
  },
  notfound: {
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 70
  },
  bar: {
    left: 5,
    height: 180,
    marginRight: 5,
    height: 140,
    width: 400,
    marginTop: 20
  },
  button: {
    zIndex: 999,
    top: -50,
    right: 5,
    alignSelf: 'flex-end'
  },
  list: {
    top: -40,
    paddingBottom: 148
  },
  listpageCheckboxes: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10
  }
});
