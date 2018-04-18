import { StyleSheet } from 'react-native';
import { white } from '../../_helpers';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },
  text: {
    fontSize: 15
  },
  notfound: {
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 70
  },
  listpageCheckboxes: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  list: {
    paddingTop: 10
  },
  filterContainer: {
    backgroundColor: white
  }
});
