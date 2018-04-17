import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, TouchableHighlight, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { buttonWidth } from '../searchbar';
import { styles } from '../searchbar';
import { filterActions, dropdownActions } from '../../_actions';

export class Search extends Component {
  icons = {
    up: require('../../../images/up-arrow.png'),
    down: require('../../../images/ic_filter_list_black_24dp.png')
  };

  render() {
    const { dispatch, filter, dropdown, dimensions } = this.props;
    const { filters } = this.props.filter;
    let icon = this.icons[dropdown.state ? 'up' : 'down'];
    
    return (
      <View style={[styles.container, {width: dimensions.windowWidth}]}>
        <SearchBar
          lightTheme
          round
          containerStyle={[styles.searchContainer, {width: dimensions.windowWidth - buttonWidth}]}
          inputStyle={styles.searchBar}
          onChangeText={text =>
            dispatch(
              filterActions.updateFilter({ ...filters, filterText: text })
            )
          }
          placeholder="Etsi..."
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

Search.propTypes = {
  dropdown: PropTypes.object.isRequired,
  filter: PropTypes.object.isRequired
};
