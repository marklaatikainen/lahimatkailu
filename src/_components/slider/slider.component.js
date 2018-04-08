import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Text, Slider } from 'react-native';
import MultiSlider from 'react-native-MultiSlider';

import { precisionRound, mapValues } from '../../_helpers';
import { filterActions } from '../../_actions';
import { styles } from '../slider';

export class SliderComponent extends Component {
  changeLeft(value) {
    const { dispatch } = this.props;
    const { filterSlider } = this.props.filter.filters;

    dispatch(
      filterActions.updateFilter({
        ...filters,
        filterSlider: [this.mapped(value), filterSlider[1]]
      })
    );
  }

  changeRight(value) {
    const { dispatch } = this.props;
    const { filters } = this.props.filter;
    const { filterSlider } = this.props.filter.filters;

    dispatch(
      filterActions.updateFilter({
        ...filters,
        filterSlider: [filterSlider[0], this.mapped(value)]
      })
    );
  }

  mapped(slider) {
    return precisionRound(mapValues(slider, 0, 1, 0, 100), 0);
  }

  render() {
    const { filterSlider } = this.props.filter.filters;

    return (
      <View style={styles.container}>
        <MultiSlider
          trackWidth={300}
          trackStyle={{ marginTop: 10, height: 10 }}
          rangeStyle={{ marginTop: 10, height: 10 }}
          defaultTrackColor={'#999999'}
          leftThumbColor={'#f0f0f0'}
          rightThumbColor={'#f0f0f0'}
          rangeColor={'#74A335'}
          leftValue={mapValues(filterSlider[0], 0, 100, 0, 1)}
          rightValue={mapValues(filterSlider[1], 0, 100, 0, 1)}
          onLeftValueChange={leftValue => this.changeLeft(leftValue)}
          onRightValueChange={rightValue => this.changeRight(rightValue)}
        />

        <Text style={styles.text}>
          Etäisyys: {filterSlider[0]} - {filterSlider[1]}km
        </Text>
      </View>
    );
  }
}

SliderComponent.propTypes = {
  filter: PropTypes.object.isRequired
};
