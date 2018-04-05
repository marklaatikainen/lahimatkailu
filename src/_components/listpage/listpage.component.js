import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from '../listpage';
import SearchContainer from '../searchbar/search.container';
import Item from '../listpage/listpage.item';

export class SearchPage extends Component {
    render() {
        const { data } = this.props.data;
        return (
            <View style={styles.container}>
                <SearchContainer />
                <FlatList
                    data={data}
                    keyExtractor={item => item._id}
                    renderItem={({item, index}) => (<Item {...this.props} data={item} index={index}/>)}
                />
            </View>
        )
    }
}