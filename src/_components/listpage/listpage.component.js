import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, FlatList, Text } from 'react-native';

import TargetContainer from '../target/target.container';
import { styles, ListFilters } from '../listpage';
import SearchContainer from '../searchbar/search.container';
import Item from '../listpage/listpage.item';

export class SearchPage extends Component {
  render() {
    const { data, filter } = this.props;
    const { listPageTarget } = this.props.target;

    return (
      <View style={styles.container}>
        {listPageTarget && listPageTarget._id ? (
          <TargetContainer />
        ) : (
          <View>
            <SearchContainer />
            <ListFilters {...this.props} />
            {data.length === 0 && filter.filters.filterText !== '' ? (
              <Text style={styles.notfound}>Ei hakutuloksia..</Text>
            ) : (
              <FlatList
                style={styles.list}
                data={data}
                keyExtractor={item => item._id}
                renderItem={({ item, index }) => <Item {...this.props} data={item} index={index} />}
              />
            )}
          </View>
        )}
      </View>
    );
  }
}

SearchPage.propTypes = {
  dropdown: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  filter: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  target: PropTypes.object.isRequired
};
