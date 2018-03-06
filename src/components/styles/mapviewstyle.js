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
    }
});