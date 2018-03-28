import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    searchContainer: {
        marginTop: 0,
        paddingTop: 0,
        backgroundColor: 'white'
    },
    searchBar: {
        width: Dimensions.get('screen').width - 15,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'green'
    },
});