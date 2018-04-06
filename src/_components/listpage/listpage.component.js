import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from '../listpage';
import SearchContainer from '../searchbar/search.container';
import Item from '../listpage/listpage.item';
import Panel from '../panel/panel.component';
import CheckBoxesContainer from '../checkboxes/checkboxes.container';
import SliderContainer from '../slider/slider.container';

export class SearchPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <SearchContainer />
        <View style={styles.button}>
          <Panel>
            <View style={styles.bar}>
              <CheckBoxesContainer style={styles.listpageCheckboxes} />
              <SliderContainer />
            </View>
          </Panel>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item._id}
          renderItem={({ item, index }) => (
            <Item {...this.props} data={item} index={index} />
          )}
        />
      </View>
    );
  }
}
