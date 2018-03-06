import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        marginTop: 10,
        alignSelf: 'center',
        width: Dimensions
            .get('window')
            .width,
        height: Dimensions
            .get('window')
            .height - 140
    }
});