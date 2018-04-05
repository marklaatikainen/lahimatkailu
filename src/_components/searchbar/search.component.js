import React, { Component } from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements'

import { styles } from '../searchbar';
import { filterActions } from '../../_actions';

export class Search extends Component {
    render() {
        const { dispatch } = this.props;
        return (
            <View style={styles.container}>
                <SearchBar
                    lightTheme
                    round
                    containerStyle={styles.searchContainer}
                    inputStyle={styles.searchBar}
                    onChangeText={(text) => dispatch(filterActions.setFilterText(text))}
                    placeholder='Etsi...'/>
            </View>
        )
    }
}