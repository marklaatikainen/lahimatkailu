import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, TouchableHighlight, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';

import { styles, buttonWidth } from '../searchbar';
import { filterActions, dropdownActions } from '../../_actions';

import up from '../../../images/up-arrow.png';
import down from '../../../images/ic_filter_list_black_24dp.png';

export class Search extends Component {
  render() {
    const { dispatch, dropdown, dimensions } = this.props;
    const { filters } = this.props.filter;
    let icon = dropdown.state ? up : down; // eslint-disable-line

    return (
      <View style={[styles.container, { width: dimensions.windowWidth }]}>
        <SearchBar
          lightTheme
          round
          containerStyle={[styles.searchContainer, { width: dimensions.windowWidth - buttonWidth }]}
          inputStyle={styles.searchBar}
          onChangeText={text =>
            dispatch(
              filterActions.updateFilter({ ...filters, filterText: text })
            )
          }
          placeholder={this.context.t('search')}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            dispatch(
              dropdown.state
                ? dropdownActions.closeDropdown()
                : dropdownActions.openDropdown()
            );
          }}
          underlayColor="#f1f1f1"
        >
          <Image source={icon} width={30} height={25} />
        </TouchableHighlight>
      </View>
    );
  }
}

Search.contextTypes = {
  t: PropTypes.func.isRequired
};

Search.propTypes = {
  dropdown: PropTypes.object.isRequired,
  filter: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  dimensions: PropTypes.object.isRequired
};
