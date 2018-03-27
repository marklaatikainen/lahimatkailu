import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    searchContainer: {
        marginTop: 0,
        paddingTop: 0,
        backgroundColor: 'white'
    },
    searchBar: {
        width: Dimensions.get('window').width - 55,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'green'
    },
});