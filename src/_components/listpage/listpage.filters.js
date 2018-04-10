import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Animated } from 'react-native';

import { styles } from '../listpage';
import Panel from '../panel/panel.component';
import CheckBoxesContainer from '../checkboxes/checkboxes.container';
import SliderContainer from '../slider/slider.container';

export class ListFilters extends Component {
  render() {
    const { data, filter } = this.props;
    const { state } = this.props.dropdown;

    return (
      <View style={[styles.filterContainer, { height: state ? 80 : 0 }]}>
        <CheckBoxesContainer style={styles.listpageCheckboxes} />
        <SliderContainer />
      </View>
    );
  }
}

ListFilters.propTypes = {
  dropdown: PropTypes.object.isRequired
};
