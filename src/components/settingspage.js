import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class SettingsPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Asetukset</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
});