import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import { filterActions } from '../../_actions';
import { styles } from '../slider';

import MultiSlider from '@ptomasroos/react-native-multi-slider';

export class SliderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderValues: [0, 100]
    };
  }

  /*
    @param: value = new slider value
    @param: slider = 'left|right'
  */
  changeSliderValue = () => {
    const { sliderValues } = this.state;
    const { dispatch } = this.props;
    const { filters } = this.props.filter;

    dispatch(
      filterActions.updateFilter({
        ...filters,
        filterSlider:
            [sliderValues[0], sliderValues[1]]
      })
    );
  }

  multiSliderValuesChange = values => {
    this.setState({
      sliderValues: values
    });
  }

  render() {
    const { windowWidth } = this.props.dimensions;

    return (
      <View style={styles.container}>
        <MultiSlider
          containerStyle={styles.sliderContainerStyle}
          markerStyle={styles.markerStyle}
          pressedMarkerStyle={styles.pressedMarkerStyle}
          markerOffsetY={2}
          // style={styles.slider}
          trackStyle={styles.track}
          selectedStyle={styles.selectedStyle}
          unselectedStyle={styles.unselectedStyle}
          values={[
            this.state.sliderValues[0],
            this.state.sliderValues[1]
          ]}
          sliderLength={windowWidth - 0.2 * windowWidth}
          onValuesChange={this.multiSliderValuesChange}
          onValuesChangeFinish={this.changeSliderValue}
          min={0}
          max={100}
          step={1}
        />
        <Text style={styles.text}>
          {this.context.t('distance')}: {this.state.sliderValues[0]} - {this.state.sliderValues[1]}km
        </Text>
      </View>
    );
  }
}

SliderComponent.contextTypes = {
  t: PropTypes.func.isRequired
};

SliderComponent.propTypes = {
  filter: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  dimensions: PropTypes.object.isRequired
};

