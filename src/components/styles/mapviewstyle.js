import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        height: Dimensions
            .get('screen')
            .height - 46,
        width: Dimensions
            .get('screen')
            .width,
        alignItems: 'center',
        paddingTop: 0
    },
    myClusterStyle: {
        borderWidth: 3,
        width: 40,
        height: 40,
        alignItems: 'center',
        borderColor: 'white',
        justifyContent: 'center',
        backgroundColor: 'red',
        borderRadius: 20,
    },
    myClusterTextStyle: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    }
});