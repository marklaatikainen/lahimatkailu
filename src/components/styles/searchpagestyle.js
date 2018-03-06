import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loading: {
        marginTop: 180,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 15
    },
    topBar: {
        backgroundColor: '#74A335',
        height: 30,
        zIndex: 1000
    },
    topBarText: {
        position: 'absolute',
        top: 5,
        fontWeight: 'bold',
        left: '38%',
        fontSize: 14,
        color: 'white'
    },
    icon: {
        marginLeft: 5,
        marginTop: 3
    },
    openmap: {
        position: 'absolute',
        top: 5,
        right: 10
    },
    notfound: {
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 70
    }
})