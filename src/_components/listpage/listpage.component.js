import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles, ListFilters } from '../listpage';
import SearchContainer from '../searchbar/search.container';
import Item from '../listpage/listpage.item';

export class SearchPage extends Component {
  render() {
    const { data, filter } = this.props;
    return (
      <View style={styles.container}>
        <SearchContainer />
        <ListFilters {...this.props} />
        {data.length === 0 && filter.filters.filterText !== '' ? (
          <Text style={styles.notfound}>Ei hakutuloksia..</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={item => item._id}
            renderItem={({ item, index }) => (
              <Item {...this.props} data={item} index={index} />
            )}
          />
        )}
      </View>
    );
  }
}

SearchPage.propTypes = {
  dropdown: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  filter: PropTypes.object.isRequired
};
