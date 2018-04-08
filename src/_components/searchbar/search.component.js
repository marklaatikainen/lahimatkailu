import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';

import { styles } from '../searchbar';
import { filterActions } from '../../_actions';

export class Search extends Component {
  render() {
    const { dispatch, filter } = this.props;
    const { filters } = this.props.filter;
    return (
      <View style={styles.container}>
        <SearchBar
          lightTheme
          round
          containerStyle={styles.searchContainer}
          inputStyle={styles.searchBar}
          onChangeText={text =>
            dispatch(
              filterActions.updateFilter({ ...filters, filterText: text })
            )
          }
          placeholder="Etsi..."
        />
      </View>
    );
  }
}

Search.propTypes = {
  filter: PropTypes.object.isRequired
};
