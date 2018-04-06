import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    searchContainer: {
        marginTop: 0,
        paddingTop: 0,
        backgroundColor: 'white'
    },
    searchBar: {
        width: Dimensions.get('screen').width - 60,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'green'
    },
});