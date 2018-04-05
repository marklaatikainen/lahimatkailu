import React, { Component } from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements'

import { styles } from '../searchbar';

export class Search extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SearchBar
                    lightTheme
                    round
                    containerStyle={styles.searchContainer}
                    inputStyle={styles.searchBar}
                    onChangeText={(text) => console.log(text)}
                    placeholder='Etsi...'/>
            </View>
        )
    }
}