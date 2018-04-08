import React, { Component } from 'react';
import { View } from 'react-native';

import { styles } from '../listpage';
import Panel from '../panel/panel.component';
import CheckBoxesContainer from '../checkboxes/checkboxes.container';
import SliderContainer from '../slider/slider.container';

export class ListFilters extends Component {
  render() {
    const { data, filter } = this.props;
    return (
      <Panel>
        <View style={styles.bar}>
          <CheckBoxesContainer style={styles.listpageCheckboxes} />
          <SliderContainer />
        </View>
      </Panel>
    );
  }
}
