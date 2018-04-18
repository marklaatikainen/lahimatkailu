import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View } from 'react-native';

import { styles } from '../listpage';
import CheckBoxesContainer from '../checkboxes/checkboxes.container';
import SliderContainer from '../slider/slider.container';

export class ListFilters extends Component {
  shouldComponentUpdate(props) {
    return props.navigation.index === 2 ? true : false;
  }
  render() {
    const { state } = this.props.dropdown;

    /* eslint-disable react-native/no-inline-styles */
    return (
      <View style={[styles.filterContainer, { height: state ? 120 : 0 }]}>
        <CheckBoxesContainer style={styles.listpageCheckboxes} />
        <SliderContainer />
      </View>
    );
  }
}

ListFilters.propTypes = {
  dropdown: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};
