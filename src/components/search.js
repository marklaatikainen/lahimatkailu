import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchBar} from 'react-native-elements'
import SearchPage from './searchpage';

export default class SearchBarComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }
    }

    SearchFilterFunction(text) {
        const newData = this
            .props
            .filterList
            .filter(function (item) {
                return (item.name.toUpperCase().indexOf(text.toUpperCase()) > -1 || item.type.toUpperCase().indexOf(text.toUpperCase()) > -1 || item.address.city.toUpperCase().indexOf(text.toUpperCase()) > -1)
            })
        this.setState({text: text})
        this
            .props
            .addFilter(newData);
        this
            .props
            .textLength(text.length)
    }

    render() {
        return (
            <View>
                <SearchBar
                    lightTheme
                    round
                    containerStyle={styles.searchContainer}
                    inputStyle={styles.searchBar}
                    onChangeText={(text) => this.SearchFilterFunction(text)}
                    placeholder='Etsi...'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchContainer: {
        marginTop: 0,
        paddingTop: 0,
        backgroundColor: 'white'
    },
    searchBar: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'green'
    }
});
