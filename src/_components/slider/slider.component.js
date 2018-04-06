import React, { Component } from 'react';
import { View, Text, Slider } from 'react-native';
import MultiSlider from 'react-native-MultiSlider';

import { precisionRound, mapValues } from '../../_helpers';

import { styles } from '../slider';

export class SliderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftValue: 0.5,
      rightValue: 1
    };
  }

  changeLeft(value) {
    const { leftValue, rightValue } = this.state;
    this.setState(
      {
        leftValue: value
      },
      () => {
        const left = precisionRound(mapValues(leftValue, 0, 1, 0, 100), 0);
        const right = precisionRound(mapValues(rightValue, 0, 1, 0, 100),
          0
        );
      }
    );
  }

  changeRight(value) {
    const { leftValue, rightValue } = this.state;
    this.setState(
      {
        rightValue: value
      },
      () => {
        const left = precisionRound(mapValues(leftValue, 0, 1, 0, 100), 0);
        const right = precisionRound(mapValues(rightValue, 0, 1, 0, 100),
          0
        );
      }
    );
  }

  render() {
    const { value, leftValue, rightValue } = this.state;

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
          leftValue={this.state.leftValue}
          rightValue={this.state.rightValue}
          onLeftValueChange={leftValue => this.changeLeft(leftValue)}
          onRightValueChange={rightValue => this.changeRight(rightValue)}
        />

        <Text style={styles.text}>
          Etäisyys: {precisionRound(mapValues(leftValue, 0, 1, 0, 100), 0)}{' '}
          - {precisionRound(mapValues(rightValue, 0, 1, 0, 100), 0)}km
        </Text>
      </View>
    );
  }
}
