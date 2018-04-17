import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import MultiSlider from 'react-native-MultiSlider';

import { mapped, mapValues } from '../../_helpers';
import { filterActions } from '../../_actions';
import { styles } from '../slider';

export class SliderComponent extends Component {
  /*
    @param: value = new slider value
    @param: slider = 'left|right'
  */
  changeSliderValue(value, slider) {
    const { dispatch } = this.props;
    const { filters } = this.props.filter;
    const { filterSlider } = this.props.filter.filters;

    dispatch(
      filterActions.updateFilter({
        ...filters,
        filterSlider:
          slider === 'right'
            ? [filterSlider[0], mapped(value)]
            : [mapped(value), filterSlider[1]]
      })
    );
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
          onLeftValueChange={leftValue =>
            this.changeSliderValue(leftValue, 'left')
          }
          onRightValueChange={rightValue =>
            this.changeSliderValue(rightValue, 'right')
          }
        />

        <Text style={styles.text}>
          Etäisyys: {filterSlider[0]} - {filterSlider[1]}km
        </Text>
      </View>
    );
  }
}

SliderComponent.propTypes = {
  filter: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};
